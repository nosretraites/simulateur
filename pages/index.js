import React, { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import Router from "next/router";
import FA from 'react-fontawesome';
import Head from "next/head";

import usePrevious from '../hooks/usePrevious';
import { Context } from "../components/context";
import Input from '../components/input';
import Select from '../components/select';

const SEO_DESCRIPTION = 'Un super simulateur de retraites';
const SEO_TITLE = 'Simulateur de retraite';

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
  const previousResult = usePrevious(result);

  const formik = useFormik({
    initialValues: {
      naissance: result.naissance || 1984,
      debut: result.debut || 20,
      carriere: result.carriere || "COR2",
      remuneration: result.remuneration || 100
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

  useEffect(() => {
    if (!!previousResult && !Object.keys(previousResult).length && Object.keys(result).length) {
      formik.setValues({
        carriere: result.carriere,
        debut: result.debut,
        naissance: result.naissance,
        remuneration: result.remuneration
      })
    }
  }, [previousResult, result]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Head>
        <meta name="description" content={SEO_DESCRIPTION} />
        <title>{SEO_TITLE}</title>
      </Head>
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
        step="1"
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
          {!pending && 'Calculer'}
          {pending && <FA name="spinner" size="lg" spin={true} />}
        </button>

        {pending && timerMessage && <div>{timerMessage}</div>}
      </div>
    </form>
  );
};

export default SimpleForm;
