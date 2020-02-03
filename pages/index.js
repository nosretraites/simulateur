import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import Router from "next/router";
import * as d3 from 'd3';
import xlsx from 'xlsx';

import '../styles/restyle.css'

import { Context } from "../context";
import { fetchCareers, postSimpleForm } from "../services/api";

const carrieres = [
  { id: 'SMIC', label: 'SMIC' },
  { id: 'COR1', label: 'Cadre à carrière sans interruption' },
  { id: 'COR2', label: 'Non cadre à carrière sans interruption' },
  { id: 'COR3', label: 'Non cadre à carrière interrompue par du chômage' },
  { id: 'COR4', label: 'Non cadre avec une interruption de carrière pour enfant' },
]

const SimpleForm = () => {
  const { updateData } = useContext(Context);
  const [pending, setPending] = useState(false);
  const [start, setStart] = useState(22);
  const [career, setCareer] = useState('COR2');
  const [timerMessage, setTimerMessage] = useState(false);
  const [result, setResult] = useState(false);

  // useEffect(() => {
  //   setResult({
  //     past: 75,
  //     current: 60,
  //     age: 63,
  //     delay: 3
  //   })
  // }, [])

  const formik = useFormik({
    initialValues: {
      naissance: 1984,
      debut: start,
      carriere: career,
      proportion: 1
    },
    onSubmit: values => {
      setPending(true)
      setTimerMessage('💣 tic. tac. tic. tac. (10 secondes environ pour le moment 😁)')

      postSimpleForm(values)
      .then(blob => {
          const raw = xlsx.read(new Uint8Array(blob), {type:"array"})
          const data = xlsx.utils.sheet_to_csv(raw.Sheets.fullset)
          const json = d3.csvParse(data)

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

          setResult({
            past,
            current,
            delay,
            age,
          })
      }).finally(() => {
        setPending(false)
        setTimerMessage(false)
      })
    }
  });

  return (
    <div>
      <header>
        <h1>
          Accédez enfin à l'impact de la réforme sur votre retraite
          <img src="logo_collectif.png" />
        </h1>
      </header>

      <form onSubmit={formik.handleSubmit}>
        <div className="inputs row">
          <label>
            Année de naissance
            <input
              id="naissance"
              name="naissance"
              type="number"
              min="1930"
              max="2020"
              step="1"
              onChange={formik.handleChange}
              value={formik.values.naissance}
            />
          </label>
          <label>
            Âge de début de carrière
            <input
              id="debut"
              name="debut"
              type="number"
              min="12"
              max="77"
              step="1"
              onChange={formik.handleChange}
              value={formik.values.debut}
            />
          </label>
        </div>
        <div className="row">
          <label>Carrière</label>
          <div className="carrieres">
            { carrieres.map(p => (
              <div className="carriere" key={p.id}>
                <label>
                <input type="radio"
                  onChange={formik.handleChange}
                  value={formik.values.carriere}
                  name="carriere"
                  value={p.id}
                  checked={formik.values.carriere === p.id} />
                  {p.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="row submit">
          <button type="submit" disabled={pending}>
            Accéder au carnage
          </button>

          { pending && timerMessage && <div>{timerMessage}</div> }
        </div>
        { result && (
          <div>
            <div className="row results">
              <div className="result">
                <span>La personne avec la même carrière</span>
                <span>né en <span className="semi important">1960</span></span>
                <span>peut partir à la retraite à {result.age} ans</span>
                <div className="focus">
                  Sa pension représente
                  <span className="important">{result.past} %</span>
                  de son dernier salaire
                </div>
              </div>
              <div className="result">
                <span>Vous</span>
                <span>né en <span className="semi important">1980</span></span>
                <span>en partant à la retraite à {result.age} ans</span>
                <div className="focus">
                  Votre pension représente
                  <span className="important">{result.current} %</span>
                  de son dernier salaire
                </div>
              </div>
              <div className="result">
                <span>Pour conserver</span>
                <span>une pension</span>
                <span>suffisante</span>
                <span>pour vivre</span>
                <div className="focus">
                  vous devez partir
                  <span className="important">{result.delay} ans</span>
                  plus tard.
                </div>
              </div>
            </div>
            <div className="row">
              Vous souhaitez nous contacter&nbsp;?
              Nous sommes joingnable par email à l'adresse suivante <a href="mailto:contact@reformedesretraites.fr?subject=Super%20simulateur%20!">contact@reformedesretraites.fr</a>.
            </div>
          </div>)
        }
      </form>
    </div>
  );
};

export default SimpleForm;
