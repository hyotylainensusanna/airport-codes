import React from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import { data } from "./data.json";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Write airport IATA code</h1>
      <Select
        className="Select"
        getOptionValue={options => options["IATA code"]}
        placeholder="Write IATA code e.g. HEL"
        options={data}
        isClearable
        formatOptionLabel={options => (
          <>
            <span className="code">{options["IATA code"]}</span>
            <span>
              {" "}
              {options["City/Airport"]}
              <span className="country"> ({options["Country"]})</span>
            </span>
          </>
        )}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
