import { Pie } from "@nivo/pie";

import useIsMobile from '../hooks/useIsMobile';

const PieChart = ({ data, label }) => {
  const isMobile = useIsMobile();
  
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
