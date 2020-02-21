import React, { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import Router from "next/router";
import FA from 'react-fontawesome';
import Head from "next/head";


import usePrevious from '../hooks/usePrevious';
import { Context, getCarrieres } from "../components/context";
import Input from '../components/input';
import Select from '../components/select';

const SEO_DESCRIPTION = 'Un super simulateur de retraites';
const SEO_TITLE = 'Simulateur de retraite';

const currentValues = {
  SMIC: 1540 + 0*20381/12,
  SMPT: 38183/12,
}


const SimpleForm = () => {
  const { postSimpleForm, result, setResult } = useContext(Context);
  const [pending, setPending] = useState(false);
  const [timerMessage, setTimerMessage] = useState(false);
  const previousResult = usePrevious(result);
  const [carrieres, setCarrieres] = useState([]);
  const [carriereMap, setCarriereMap] = useState({});

  const [data, setData] = useState([]);

  const formik = useFormik({
    initialValues: {
      naissance: result.naissance || 1984,
      debut: result.debut || 20,
      carriere: result.carriere || "COR2",
      remuneration: result.remuneration || 1540
    },
    onSubmit: values => {
      setPending(true);
      setTimerMessage(
        "💣 tic. tac. tic. tac. (10 secondes environ pour le moment 😁)"
      );

      const salary = parseFloat(values.remuneration) || 1000.0
      const proportion = salary / (currentValues[carriereMap[values.carriere].base] || salary)

      postSimpleForm({
          proportion,
          ...values
        })
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
    getCarrieres()
      .then(carrieres => {
        carrieres.forEach(c => {
          c.value = c.id
          c.label = c.titre
        })
        setCarrieres(carrieres)
        setCarriereMap(carrieres.reduce((accum, item) => {
          accum[item.id] = item
          return accum
        }, {}))
      })
  }, [])

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
        label="Rémuneration mensuelle brute en 2020"
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
        formik={formik}
        currentValues={currentValues}
      />
      <div className="submit-wrapper">
        <button className="button submit" type="submit" disabled={pending}>
          {!pending && 'Accéder au carnage'}
          {pending && <FA name="spinner" size="lg" spin={true} />}
        </button>

        {pending && timerMessage && <div>{timerMessage}</div>}
      </div>
    </form>
  );
};

export default SimpleForm;
