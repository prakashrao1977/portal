import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from 'react-bootstrap';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import ToolkitProvider, { CSVExport }  from 'react-bootstrap-table2-toolkit';
import {TimeSeries, TimeRange } from "pondjs"
import {
  Resizable,
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  BarChart,
  styler
} from "react-timeseries-charts"

const Service = () => {
  return <div>
    <h3>This is Service Page</h3>
  </div>
}

const data = {
  name: "traffic",
  columns: ["time", "in", "out"],
  points: [
      [1400425947000, 52, 41],
      [1400425948000, 18, 45],
      [1400425949000, 26, 49],
      [1400425950000, 93, 81],
  ]
};

const timeseries = new TimeSeries(data);

export default Service;
