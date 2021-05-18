import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./styles.css";

import { cx, css, injectGlobal } from "emotion";

import {
  Button,
  Segment,
  Grid,
  Tab,
  Input,
  Label,
  Dropdown,
  List,
  Divider,
  Modal,
  Header,
  Icon
} from "semantic-ui-react";

import buttonStyles from "./styles/Button.styles";
import segmentStyles from "./styles/Segment.styles";
import gridStyles from "./styles/Grid.styles";
import tabStyles from "./styles/Tab.styles";
import menuStyles from "./styles/Menu.style";
import inputStyles from "./styles/Input.styles";
import labelStyles from "./styles/Label.style";
import dropdownStyles from "./styles/Dropdown.styles";
import transitionStyles from "./styles/Transition.style";
import listStyles from "./styles/List.style";
import dividerStyles from "./styles/Divider.style";
import modalStyles from "./styles/Modal.style";
import dimmerStyles from "./styles/Dimmer.style";
import headerStyles from "./styles/Header.style";
import iconStyles from "./styles/Icon.style";

export const globalStyles = `
  * {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 14px;
    line-height: 1.5;
    color: #222;
    background-color: #fff;
    padding: 20px;
  }
`;

injectGlobal`
  ${globalStyles}
  ${modalStyles}
  ${dimmerStyles}
`;

const DropdownExample = () => (
  <Dropdown button text="Dropdown Menu">
    <Dropdown.Menu>
      <Dropdown.Item text="New" />
      <Dropdown.Item text="Open..." description="ctrl + o" />
      <Dropdown.Item text="Save as..." description="ctrl + s" />
      <Dropdown.Item text="Rename" description="ctrl + r" />
      <Dropdown.Item text="Make a copy" />
      <Dropdown.Divider />
      <Dropdown.Item text="Download As..." />
      <Dropdown.Item text="Publish To Web" />
      <Dropdown.Item text="E-mail Collaborators" />
    </Dropdown.Menu>
  </Dropdown>
);

class App extends Component {
  state = {
    center: [51.505, -0.091],
    zoom: 8
  };

  render() {
    return (
      <div
        className={cx(
          gridStyles,
          segmentStyles,
          buttonStyles,
          tabStyles,
          menuStyles,
          labelStyles,
          dropdownStyles,
          transitionStyles,
          listStyles,
          dividerStyles,
          headerStyles
        )}
      >
        <Map center={this.state.center} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={this.state.center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
        <hr></hr>
        <Grid>
          <Grid.Column width={16}>
            <Segment>
              <Button>Bundesland</Button>
              <Button primary>Primary</Button>
              <Button size="mini" primary>
                Small
              </Button>
              <DropdownExample />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
