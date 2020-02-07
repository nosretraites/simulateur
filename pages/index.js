import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import Router from "next/router";

import { Context } from "../components/context";

const carrieres = [
  { id: "SMIC", label: "SMIC" },
  { id: "COR1", label: "Cadre à carrière sans interruption" },
  { id: "COR2", label: "Non cadre à carrière sans interruption" },
  { id: "COR3", label: "Non cadre à carrière interrompue par du chômage" },
  {
    id: "COR4",
    label: "Non cadre avec une interruption de carrière pour enfant"
  }
];

const SimpleForm = () => {
  const { postSimpleForm, result, setResult } = useContext(Context);
  const [pending, setPending] = useState(false);
  const [timerMessage, setTimerMessage] = useState(false);

  const formik = useFormik({
    initialValues: {
      naissance: result.naissance || 1984,
      debut: result.debut || 22,
      carriere: result.carriere || "COR2"
    },
    onSubmit: values => {
      setPending(true);
      setTimerMessage(
        "💣 tic. tac. tic. tac. (10 secondes environ pour le moment 😁)"
      );

      postSimpleForm(values)
        .then(data => {
          const state = {
            ...data,
            ...formik.values
          }
          setResult(state);
          Router.push(`/result?${new URLSearchParams(state)}`);
        })
        .finally(() => {
          setPending(false);
          setTimerMessage(false);
        });
    }
  });

  return (
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
          {carrieres.map(p => (
            <div className="carriere" key={p.id}>
              <label>
                <input
                  type="radio"
                  onChange={formik.handleChange}
                  value={formik.values.carriere}
                  name="carriere"
                  value={p.id}
                  checked={formik.values.carriere === p.id}
                />
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

        {pending && timerMessage && <div>{timerMessage}</div>}
      </div>
    </form>
  );
};

export default SimpleForm;
