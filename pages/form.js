import React, { useState } from "react";
import { useFormik } from "formik";

export default () => {
  const [pending, setPending] = useState(false);
  const formik = useFormik({
    initialValues: {
      naissance: 1984,
      debut: 36,
      carriere: "SMIC",
      proportion: 1
    },
    onSubmit: values => {
      console.log("submit !!! ! ! !");
      setPending(true);
      // TODO remove age et modele when new api is ready
      fetch(`http://127.0.0.1:5000/basic`, {
      //fetch(`https://destinie.reformedesretraites.fr/basic`, {
        method: "POST",
        body: new URLSearchParams({
          age: 0,
          modele: "Actuel",
          ...values
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then(res => res.json())
        .then(result => {
          console.log("form submitted !!!");
          console.log(result);
          setPending(false);
        })
        .catch(err => {
          console.error(err);
          setPending(false);
        });
    }
  });

  return (
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
            Cas type n°3 du COR (non cadre à carrière interrompue par du chômage
            )
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
  );
};
