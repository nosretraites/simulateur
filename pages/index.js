import React, { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import Router from "next/router";
import FA from 'react-fontawesome';
import Head from "next/head";
import { ResponsiveLine } from '@nivo/line'


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

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
        xScale={{ type: 'linear', min: 'auto', max: 'auto' }}
        yScale={{ type: 'linear', min: 0, max: 3 }}
        axisTop={null}
        axisRight={null}
        animate={false}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Âge',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Valeur',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'nivo' }}
        pointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
    />
)

const getCarriereData = (carriere) => {
  const data = carriere.serie.map(p => {
    return {
      x: p.age,
      y: p.value
    }
  })
  return {
    "id": "carriere",
    "data": data.filter(r => 15 <= r.x && r.x <= 60)
  }
}

const SimpleForm = () => {
  const { postSimpleForm, result, setResult } = useContext(Context);
  const [pending, setPending] = useState(false);
  const [timerMessage, setTimerMessage] = useState(false);
  const previousResult = usePrevious(result);
  const [carrieres, setCarrieres] = useState([]);
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
    getCarrieres()
      .then(carrieres => {
        carrieres.forEach(c => {
          c.value = c.id
          c.label = c.titre
        })
        setCarrieres(carrieres)
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
      {
        carrieres.map(carriere => (
          <fieldset>
            <legend>{carriere.titre}</legend>
            { (carriere.serie.length === 0 && <p>Pas de profil disponible.</p>) ||
              (carriere.serie[0].value === 1 && (<p>Avec {formik.values.remuneration}&nbsp;€ par mois en 2020, nous allons utilisé une carrière stable à {Math.round(parseFloat(formik.values.remuneration)/currentValues[carriere.id]*10)/10} fois le {carriere.titre}.</p>)) || (
                <div style={{ height: '20em'}}>
                  <MyResponsiveLine data={[getCarriereData(carriere)]} />
                </div>
                )
            }
          </fieldset>
          ))
      }
      <div className="submit-wrapper">
        <button className="submit" type="submit" disabled={pending}>
          {!pending && 'Accéder au carnage'}
          {pending && <FA name="spinner" size="lg" spin={true} />}
        </button>

        {pending && timerMessage && <div>{timerMessage}</div>}
      </div>
    </form>
  );
};

export default SimpleForm;
