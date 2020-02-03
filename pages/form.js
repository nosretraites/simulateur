import React, { useContext, useEffect, useState } from "react";
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
    <form className="formulaire" onSubmit={formik.handleSubmit}>
      <h1 className="formulaire__title">
        Destinie's Child
        <span style={{display:'block', fontSize: '1.2em', marginTop: '0.5rem'}}>
          Le Simulateur de Retraite Ouvert
        </span>
      </h1>
      <div className="formulaire__area">
        <div className="formulaire__area__personalInfo">
          <label className="formulaire__label">
            <span>
              Année <br />
              de naissance
            </span>
            <input
              id="naissance"
              name="naissance"
              type="number"
              min="1930"
              max="2020"
              step="1"
              onChange={formik.handleChange}
              value={formik.values.naissance}
              className="formulaire__input"
            />
          </label>
          <label className="formulaire__label">
            Âge <br />
            de début de carrière
            <input
              className="formulaire__input"
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
          <label className="formulaire__label">
            Salaire brut
            <br /> de cette année
            <input
              className="formulaire__input"
              id="salary"
              name="salary"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.salary}
            />
          </label>
        </div>
        <div className="formulaire__area__career" style={{ height: '200px' }}>
          <input type="radio" name="radSize" id="smic" value="SMIC" />
          <label className="smic image_radio" for="smic"/>

          <input type="radio" name="radSize" id="cor1" value="COR1" />
          <label className="cor1 image_radio" for="cor1" />

          <input type="radio" name="radSize" id="cor2" value="COR2" />
          <label className="cor2 image_radio" for="cor2" />

          <input type="radio" name="radSize" id="cor3" value="COR3" />
          <label className="cor3 image_radio" for="cor3" />

          <input type="radio" name="radSize" id="cor4" value="COR4" />
          <label className="cor4 image_radio" for="cor4" />
        </div>
      </div>
      <button type="submit" className="formulaire__submit" disabled={pending}>
        Simuler ma retraite >
      </button>
      {pending && <span>loading</span>}
    </form>
  );
};

export default SimpleForm;
