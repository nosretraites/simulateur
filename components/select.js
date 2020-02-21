import React, { useState, useCallback } from 'react';
import { ResponsiveLine } from '@nivo/line'

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
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
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

const getCarriereData = (carriere, formik) => {
  const naissance = parseInt(formik.values.naissance) || 1980
  const age = 2020 - naissance
  const salary = parseFloat(formik.values.remuneration) || 0.0

  const pivots = carriere.serie.filter(p => p.age == age)
  const pivot = pivots.length > 0 ? pivots[0].value : 1
  const coef = salary / pivot

  const data = carriere.serie.map(p => {
    return {
      x: p.age,
      y: Math.round(p.value * coef)
    }
  })
  return {
    "id": "carriere",
    "data": data.filter(r => 15 <= r.x && r.x <= 60)
  }
}

const Select = ({ options, value, label, onChange, name, formik, currentValues }) => {

  const [showOptions, setShowOptions] = useState(true);

  const optionMap = options.reduce((accum, item) => {
    accum[item.value] = item
    return accum
  }, {})

  const handleShowOptions = useCallback(() => setShowOptions(!showOptions))
  const handleSelectOptions = useCallback((option) => {
    // Ugly hack
    formik.setFieldValue('carriere', option.value)
    setShowOptions(false)
  })

  return (
    <div>
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <div className="select">
        <button type="button" className="select-text" onClick={handleShowOptions}>
          {(optionMap[value] && optionMap[value].label)}
        </button>
        <span className="select-bar"></span>
      </div>
    </div>
      {
        showOptions &&
        (
          <div>
            <button type="button" className="button cancel" onClick={handleShowOptions}>Conserver</button>
            {
              options.map(option => (
                <fieldset key={option.value}>
                  <legend className="label">{option.titre}</legend>
                  { (option.serie.length === 0 && <p>Pas de profil disponible.</p>) ||
                    (option.serie[0].value === 1 && (<p>Avec {formik.values.remuneration}&nbsp;€ par mois en 2020, nous allons utilisé une carrière stable à {Math.round(parseFloat(formik.values.remuneration)/currentValues[option.id]*10)/10} fois le {option.titre}.</p>)) ||
                    (<div style={{ height: '20em'}}>
                      <MyResponsiveLine data={[getCarriereData(option, formik)]} />
                    </div>)
                  }
                  <button type="button" className="button action" onClick={() => handleSelectOptions(option)}>Sélectionner le profil « {option.titre} »</button>
                </fieldset>
              ))
            }
            <button type="button" className="button cancel" onClick={handleShowOptions}>Conserver</button>
          </div>
        )
      }
    </div>
)};

export default Select;
