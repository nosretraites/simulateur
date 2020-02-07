import React, { createContext, useState, useEffect } from 'react';
import xlsx from 'xlsx';

const API_BASE = 'https://destinie.reformedesretraites.fr';

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
      past = Math.round(parseFloat(r.TR_brut)*100)
    }

    if (rAge == age && r.scenario == 'reforme') {
      current = Math.round(parseFloat(r.TR_brut)*100)
    }

    if (current && !delay && r.scenario == 'reforme') {
      let test = Math.round(parseFloat(r.TR_brut)*100)
      if (test >= past) {
        delay = rAge - age
      }
    }
  })

  return { past, age, current, delay }
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
  Provider
}
