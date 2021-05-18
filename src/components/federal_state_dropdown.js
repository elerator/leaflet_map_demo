import React, { Component } from "react";
import ReactDOM from "react-dom";

const Bundesland = () => (
  <Dropdown button text="Bundesland">
    <Dropdown.Menu>
      <Dropdown.Item text="New" />
      {Object.keys(federal_state_id_to_name).map((x, i) => (
        <Dropdown.Item text={federal_state_id_to_name[x]} />
      ))}
    </Dropdown.Menu>
  </Dropdown>
);
