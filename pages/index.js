import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import Router from "next/router";
import FA from 'react-fontawesome';

import { Context } from "../components/context";
import Input from '../components/input';
import Select from '../components/select';

const carrieres = [
  { value: "SMIC", label: "SMIC" },
  { value: "COR1", label: "Cadre à carrière sans interruption" },
  { value: "COR2", label: "Non cadre à carrière sans interruption" },
  { value: "COR3", label: "Non cadre à carrière interrompue par du chômage" },
  {
    value: "COR4",
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
      carriere: result.carriere || "COR2",
      remuneration: result.remuneration || 0
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
      <Input
        label="Année de naissance"
        name="naissance"
        type="number"
        min="1930"
        max="2020"
        step="1"
        onChange={formik.handleChange}
        value={formik.values.naissance}
      />
      <Input
        label="Âge de début de carrière"
        name="debut"
        type="number"
        min="12"
        max="77"
        step="1"
        onChange={formik.handleChange}
        value={formik.values.debut}
      />
      <Input
        label="Rémuneration mensuelle brute en 2019"
        name="remuneration"
        icon="euro"
        type="number"
        min="1"
        step="10"
        width="250px"
        onChange={formik.handleChange}
        value={formik.values.remuneration}
      />
      <Select
        name="carriere"
        label="Carrière"
        options={carrieres}
        value={formik.values.carriere}
        onChange={formik.handleChange}
      />
      <div className="submit-wrapper">
        <button className="submit" type="submit" disabled={pending}>
          {!pending && 'Accéder au carnage'}
          {pending && <FA name="spinner" spin={true} />}
        </button>

        {pending && timerMessage && <div>{timerMessage}</div>}
      </div>
    </form>
  );
};

export default SimpleForm;
