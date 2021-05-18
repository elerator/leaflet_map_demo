import { css } from "react-emotion";

const style = css`
  .ui.tab {
    display: none;
  }

  .ui.tab.active,
  .ui.tab.open {
    display: block;
  }

  .ui.tab.loading {
    position: relative;
    overflow: hidden;
    display: block;
    min-height: 250px;
  }
  .ui.tab.loading * {
    position: relative !important;
    left: -10000px !important;
  }
  .ui.tab.loading:before,
  .ui.tab.loading.segment:before {
    position: absolute;
    content: "";
    top: 100px;
    left: 50%;
    margin: -1.25em 0em 0em -1.25em;
    width: 2.5em;
    height: 2.5em;
    border-radius: 500rem;
    border: 0.2em solid rgba(0, 0, 0, 0.1);
  }
  .ui.tab.loading:after,
  .ui.tab.loading.segment:after {
    position: absolute;
    content: "";
    top: 100px;
    left: 50%;
    margin: -1.25em 0em 0em -1.25em;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation: button-spin 0.6s linear;
    animation: button-spin 0.6s linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: #767676 transparent transparent;
    border-style: solid;
    border-width: 0.2em;
    -webkit-box-shadow: 0px 0px 0px 1px transparent;
    box-shadow: 0px 0px 0px 1px transparent;
  }
`;

export default style;
