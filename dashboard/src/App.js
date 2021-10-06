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
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const getPlayerData = async () => {
    try {
      const data = await axios.get(
        "http://localhost:9090/services"
      );

      console.log(data);
      setPlayers(data.data);
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  const { ExportCSVButton } = CSVExport;

  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="btn btn-success" onClick={handleClick}>Export to CSV</button>
      </div>
    );
  };

  const columns = [
    { dataField: "serviceName", text: "Service New Name", sort: true, filter: textFilter(), formatter: (cell, row) => {
      return (
        <Router>
        <Link to='/Service'>
          {cell}
        </Link>
        <Switch>
          <Route path="/service/:id?" component={Service}/>
        </Switch>
        </Router>
      )
    }},
    { dataField: "serviceOwner", text: "Service Owner", sort: true, filter: textFilter() },
    { dataField: "serviceCostCenter", text: "Service Cost Center", sort: true, filter: textFilter() },
    { dataField: "dataCenter", text: "Data Center", sort: true, filter: textFilter() },
    { dataField: "serviceType", text: "Service Type", sort: true, filter: textFilter() }
  ];

  useEffect(() => {
    getPlayerData();
  }, []);

  return (
    <div className="App">
      {loading ? (
      <ToolkitProvider
        bootstrap4
        keyField="serviceName"
        data={ players }
        columns={ columns }
        exportCSV
      >
        {
          props => (
            <React.Fragment>
            <MyExportCSV {...props.csvProps} />
            <BootstrapTable
            bootstrap4
            pagination={ paginationFactory() }
            filter={ filterFactory() }
            {...props.baseProps}
            />
            </React.Fragment>
          )
        }
        </ToolkitProvider>
      ) : (
        <ReactBootStrap.Spinner animation="border" />
      ) }
  </div>
  );
};

export default App;
