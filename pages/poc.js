import React, { useContext, useEffect, useState } from "react";
import * as d3 from 'd3';
import xlsx from 'xlsx';
import { ResponsiveLine } from "@nivo/line";
import { useFormik } from "formik";

import { Context } from "../context";
import { fetchCareers, postSimpleForm } from "../services/api";

import { withProvider } from "../components/Layout";

const SimpleForm = () => {
  const [raw, setRaw] = useState(false);
  const [salaryPlotData, setSalaryPlotData] = useState([]);

  useEffect(() => {
    fetch('https://nosretraites.github.io/simulateur/data.xlsx')

    .then(response => response.arrayBuffer())
    .then(blob => {
        const raw = xlsx.read(new Uint8Array(blob), {type:"array"})
        setRaw(raw)
        const emp = xlsx.utils.sheet_to_csv(raw.Sheets.emp)
        const json = d3.csvParse(emp)
        let data = json.map(row => { return { x: parseInt(row.age), y: parseFloat(row.salaire) } })
        setSalaryPlotData([
          { id: 'salaire', data },
          { id: 'test', data: data.map(e => { return { x: e.x, y: e.y*0.8 } }) }
        ]);
    })
  }, []);


  return (
    <div style={{ height: "80vh" }}>
      <h1>TEST</h1>
            <ResponsiveLine
        data={salaryPlotData}
        enablePoints={false}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "linear" }}
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

export default withProvider(SimpleForm);
