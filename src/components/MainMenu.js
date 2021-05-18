import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

let federal_state_id_to_name = require("../federal_state_id_to_name.json");
let federal_state_id_to_court = require("../federal_state_id_to_court.json");

let stateOptions = []; //stateOptions = [{ key: "AL", text: "Alabama", value: "AL" },]
Object.keys(federal_state_id_to_name).map((x, _) =>
  stateOptions.push({ key: x, text: federal_state_id_to_name[x], value: x })
);

function MainMenu(props) {
  const [currentKey, setCurrentKey] = useState("be");

  const onChange = (event, result) => {
    const { name, currKey } = result || event.target;
    alert(name);
    setCurrentKey(currKey);
  };

  return (
    <div>
      <Dropdown
        placeholder="State"
        search
        options={stateOptions}
        onChange={onChange}
      />
    </div>
  );
}

export default MainMenu;
