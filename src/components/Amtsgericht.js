import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

let federal_state_id_to_name = require("../federal_state_id_to_name.json");
let stateOptions = []; //stateOptions = [{ key: "AL", text: "Alabama", value: "AL" },]

function Amtsgericht(props) {
  Object.keys(federal_state_id_to_name).map((x, _) =>
    stateOptions.push({ key: x, text: federal_state_id_to_name[x], value: x })
  );
  return <Dropdown placeholder="State" search options={stateOptions} />;
}

export default Amtsgericht;
