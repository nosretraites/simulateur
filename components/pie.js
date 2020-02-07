import { Pie } from "@nivo/pie";

const PieChart = ({ data, label }) => (
  <div className="chart-row">
    <Pie
      height={100}
      width={100}
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

export default PieChart;
