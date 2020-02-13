import React, { createContext, useState, useEffect } from 'react';
import xlsx from 'xlsx';

const isProduction = 'production' === process.env.NODE_ENV
const API_BASE = isProduction ? 'https://destinie.reformedesretraites.fr' : 'http://127.0.0.1:5000'

async function postSimpleForm(values) {
  const res = await fetch(`${API_BASE}/multi`, {
    method: "POST",
    body: new URLSearchParams({
      ...values,
      proportion: 1
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
  const blob = await res.arrayBuffer();

  const raw = xlsx.read(new Uint8Array(blob), {type:"array"})
  const json = xlsx.utils.sheet_to_json(raw.Sheets.fullset)

  let past, age, current, delay
  json.forEach(function(r) {
    const rAge = parseInt(r.age)
    const rNaissance = parseInt(r.anaiss)
    if (rNaissance == 1960 && r.scenario == 'actuel') {
      age = rAge
      past = Math.round(parseFloat(r.TR_brut_neut)*100)
    }

    if (rAge == age && r.scenario == 'reforme') {
      current = Math.round(parseFloat(r.TR_brut_neut)*100)
    }

    if (current && !delay && r.scenario == 'reforme') {
      let test = Math.round(parseFloat(r.TR_brut_neut)*100)
      if (test >= past) {
        delay = rAge - age
      }
    }
  })

  return { past, age, current, delay }
};

async function getCarrieres() {
  const res = await fetch(`${API_BASE}/carrieres.xlsx`)
  const blob = await res.arrayBuffer();

  const raw = xlsx.read(new Uint8Array(blob), {type:"array"})

  const sheets = ['meta', 'serie', 'debut']
  const result = {}

  const meta = xlsx.utils.sheet_to_json(raw.Sheets.meta)
  const serie = xlsx.utils.sheet_to_json(raw.Sheets.serie)
  const debut = xlsx.utils.sheet_to_json(raw.Sheets.debut)

  meta.forEach(carriere => {
    carriere.serie = serie.map(row => {
      return {
        age: row.age,
        value: row[carriere.id]
      }
    })

    carriere.debut = debut.map(row => {
      return {
        generation: row.generation,
        value: row[carriere.id] || 0
      }
    })
  })

  return meta
};

const Context = createContext({});

const Provider = ({ children, initialState }) => {
  const [result, setResult] = useState(initialState);
  
  useEffect(() => {
    initialState && setResult(initialState);
  }, [initialState])

  return (
    <Context.Provider value={{
      result,
      setResult,
      postSimpleForm
    }}>
      {children}
    </Context.Provider>
  );
};

export {
  Context,
  Provider,
  getCarrieres
}
