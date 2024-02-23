import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Chart } from "react-google-charts";
const ProgressGraph = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/charts/loader.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Load the corechart package
      window.google.charts.load("current", { packages: ["corechart"] });
    };

    return () => {
      // Remove the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  const pieChartData = [
    ["Topping", "Slices"],
    ["Infrastructure", 3],
    ["Facility", 1],
    ["Academic", 1],
    ["Administration", 2],
  ];

  const pieChartOptions = {
    title: "How many issues are recorded?",
    width: 400,
    height: 300,
  };

  const barChartData = [
    ["Month", "Students", "Faculty", "Staff", "Issues", "Resolved"],
    ["Monday", 15, 98, 52, 98, 64.6],
    ["Tuesday", 15, 20, 59, 68, 62],
    ["Wednesday", 17, 17, 57, 87, 62],
    ["Thursday", 19, 10, 65, 98, 69.4],
    ["Friday", 16, 61, 69, 16, 59.6],
  ];

  const barChartOptions = {
    title: "Weekly reported",
    vAxis: { title: "Count" },
    hAxis: { title: "Week" },
    seriesType: "bars",
    series: { 6: { type: "line" } },
  };

  return (
    <Container>
      <Table responsive>

      <div className="row">
        <div className="col mb-3">
          <div className="card h-100">
            <div className="card-header">
              <span className="me-2">
                <i className="bi bi-bar-chart-fill"></i>
              </span>
              Chart
            </div>
            <div>
              <Chart
                width={"50rem"}
                height={"270px"}
                chartType="ComboChart"
                loader={<div>Loading...</div>}
                data={barChartData}
                options={barChartOptions}
                rootProps={{ "data-testid": "2" }}
              />
            </div>
          </div>
        </div>
      </div>
      </Table>
      
    </Container>
  );
};
export default ProgressGraph;