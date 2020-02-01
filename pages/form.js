import React, { useContext, useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useFormik } from "formik";
import Router from "next/router";

import { Context } from "../context";
import { fetchCareers, postSimpleForm } from "../services/api";

const SimpleForm = () => {
  const { updateData } = useContext(Context);
  const [pending, setPending] = useState(false);
  const [careers, setCareers] = useState({
    carrieres: { SMIC: [1] },
    smic_brut: 14000
  });
  const [start, setStart] = useState(22);
  const [salary, setSalary] = useState(1400);
  const [career, setCareer] = useState("SMIC");
  const [salaryPlotData, setSalaryPlotData] = useState([]);
  const [salaryData, setSalaryData] = useState([]);

  useEffect(() => {
    fetchCareers().then(careers => setCareers(careers));
  }, []);

  useEffect(() => {
    let rawData = Array(start + 1).fill(0);
    careers.carrieres[career].forEach(coef => {
      rawData.push(coef * salary);
    });
    rawData = [
      ...rawData,
      ...Array(98 - rawData.length).fill(rawData[rawData.length - 1])
    ];

    const data = rawData.map((v, i) => ({ x: i, y: v }));

    setSalaryPlotData([{ id: career, data }]);

    const smic = careers.smic_brut / 12;
    setSalaryData(rawData.map(v => v / smic));
  }, [career, careers, salary, start]);

  useEffect(() => {
    // TODO: to send to the API
    console.log(salaryData);
  }, [salaryData]);

  const formik = useFormik({
    initialValues: {
      naissance: 1984,
      debut: start,
      salary: salary,
      carriere: career,
      proportion: 1
    },
    onSubmit: values => {
      setStart(values.debut);
      setSalary(values.salary);
      setCareer(values.carriere);

      setPending(true);
      postSimpleForm({
        age: 0,
        modele: "Actuel",
        ...values
      }).then(result => {
        console.log(result);
        setPending(false);
        updateData(result);
        Router.push("/result");
      });
    }
  });

  return (
    <div style={{ height: "80vh" }}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="naissance">Année de naissance</label>
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
        </div>
        <div>
          <label htmlFor="debut">Âge de début de carrière</label>
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
        </div>
        <div>
          <label htmlFor="salary">Salaire brut actuel / mois</label>
          <input
            id="salary"
            name="salary"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.salary}
          />
        </div>
        <div>
          <label htmlFor="carriere">Base du salaire</label>
          <select
            name="carriere"
            value={formik.values.carriere}
            onChange={formik.handleChange}
          >
            <option value="SMIC">SMIC de base</option>
            <option value="SMPT">Salaire moyen par tête de base</option>
            <option value="COR1">
              Cas type n°1 du COR (cadre à carrière sans interruption)
            </option>
            <option value="COR2">
              Cas type n°2 du COR (non cadre à carrière sans interruption)
            </option>
            <option value="COR3">
              Cas type n°3 du COR (non cadre à carrière interrompue par du
              chômage )
            </option>
            <option value="COR4">
              Cas type n°4 du COR (non cadre avec une interruption de carrière
              pour enfant)
            </option>
            <option value="PlafondSS">PlafondSS</option>
          </select>
        </div>
        <div>
          <label htmlFor="proportion">Proportion de la base</label>
          <input
            id="proportion"
            name="proportion"
            type="number"
            min="0"
            step="1"
            onChange={formik.handleChange}
            value={formik.values.proportion}
          />
        </div>
        <button type="submit" disabled={pending}>
          Submit
        </button>
        {pending && <span>loading</span>}
      </form>

      <ResponsiveLine
        data={salaryPlotData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Âge",
          legendOffset: 36,
          legendPosition: "middle"
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Salaire",
          legendOffset: -40,
          legendPosition: "middle"
        }}
        colors={{ scheme: "nivo" }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};

export default SimpleForm;
