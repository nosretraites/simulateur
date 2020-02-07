import { Pie } from "@nivo/pie";
import { useEffect, useState } from "react";

const PieChart = ({ data, label }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 700px)").matches)
  }, [isMobile]);

  return (
    <div className="chart-row">
      <Pie
        height={isMobile ? 60 : 100}
        width={isMobile ? 60 : 100}
        data={data}
        colors={['#BAE0D3', '#AEAEAE']}
        enableSlicesLabels={false}
        enableRadialLabels={false}
        borderColor="white"
        borderWidth={2}
      />
      <div className="chart-col">
        <span className="important">{data[0].value} %</span>
        <span className="label">{label}</span>
      </div>
    </div>
  )
}

export default PieChart;
