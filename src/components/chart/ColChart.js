/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import colChart from "./configs/colChart";

function ColChart() {
  const { Title, Paragraph } = Typography;

  return (
    <>
      <div className="linechart">
        <div>
          <Title level={5}>Turnover</Title>
          <Paragraph className="lastweek">
            per year
          </Paragraph>
        </div>
        <div className="sales">
          <ul>
            <li>{<MinusOutlined />} Budget</li>
            <li>{<MinusOutlined />} Estimé/Réel</li>
          </ul>
        </div>
      </div>

      <ReactApexChart
        className="full-width"
        options={colChart.options}
        series={colChart.series}
        type="bar"
        height={350}
        width={"100%"}
      />
    </>
  );
}

export default ColChart;