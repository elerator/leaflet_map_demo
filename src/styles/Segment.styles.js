import { css } from "react-emotion";

const style = css`
  .ui.segment {
    position: relative;
    background: #ffffff;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    margin: 1rem 0em;
    padding: 16px 16px;
    border-radius: 3px;
    border: 1px solid #c4c8ce;
  }
  .ui.segment:first-child {
    margin-top: 0em;
  }
  .ui.segment:last-child {
    margin-bottom: 0em;
  }

  .ui.vertical.segment {
    margin: 0em;
    padding-left: 0em;
    padding-right: 0em;
    background: none transparent;
    border-radius: 0px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid rgba(34, 36, 38, 0.15);
  }
  .ui.vertical.segment:last-child {
    border-bottom: none;
  }

  .ui.inverted.segment > .ui.header {
    color: #ffffff;
  }

  .ui[class*="bottom attached"].segment > [class*="top attached"].label {
    border-top-left-radius: 0em;
    border-top-right-radius: 0em;
  }
  .ui[class*="top attached"].segment > [class*="bottom attached"].label {
    border-bottom-left-radius: 0em;
    border-bottom-right-radius: 0em;
  }
  .ui.attached.segment:not(.top):not(.bottom) > [class*="top attached"].label {
    border-top-left-radius: 0em;
    border-top-right-radius: 0em;
  }
  .ui.attached.segment:not(.top):not(.bottom)
    > [class*="bottom attached"].label {
    border-bottom-left-radius: 0em;
    border-bottom-right-radius: 0em;
  }

  .ui.page.grid.segment,
  .ui.grid > .row > .ui.segment.column,
  .ui.grid > .ui.segment.column {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .ui.grid.segment {
    margin: 1rem 0em;
    border-radius: 3px;
  }

  .ui.basic.table.segment {
    background: #ffffff;
    border: 1px solid #c4c8ce;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  }
  .ui[class*="very basic"].table.segment {
    padding: 16px 16px;
  }

  .ui.placeholder.segment {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    max-width: initial;
    -webkit-animation: none;
    animation: none;
    overflow: visible;
    padding: 16px 16px;
    min-height: 18rem;
    background: #f9fafb;
    border-color: rgba(34, 36, 38, 0.15);
    -webkit-box-shadow: 0px 2px 25px 0 rgba(34, 36, 38, 0.05) inset;
    box-shadow: 0px 2px 25px 0 rgba(34, 36, 38, 0.05) inset;
  }
  .ui.placeholder.segment .button,
  .ui.placeholder.segment textarea {
    display: block;
  }
  .ui.placeholder.segment .field,
  .ui.placeholder.segment textarea,
  .ui.placeholder.segment > .ui.input,
  .ui.placeholder.segment .button {
    max-width: 15rem;
    margin-left: auto;
    margin-right: auto;
  }
  .ui.placeholder.segment .column .button,
  .ui.placeholder.segment .column .field,
  .ui.placeholder.segment .column textarea,
  .ui.placeholder.segment .column > .ui.input {
    max-width: 15rem;
    margin-left: auto;
    margin-right: auto;
  }
  .ui.placeholder.segment > .inline {
    -ms-flex-item-align: center;
    align-self: center;
  }
  .ui.placeholder.segment > .inline > .button {
    display: inline-block;
    width: auto;
    margin: 0px 0.35714286rem 0px 0px;
  }
  .ui.placeholder.segment > .inline > .button:last-child {
    margin-right: 0px;
  }

  .ui.piled.segments,
  .ui.piled.segment {
    margin: 3em 0em;
    -webkit-box-shadow: "";
    box-shadow: "";
    z-index: auto;
  }
  .ui.piled.segment:first-child {
    margin-top: 0em;
  }
  .ui.piled.segment:last-child {
    margin-bottom: 0em;
  }
  .ui.piled.segments:after,
  .ui.piled.segments:before,
  .ui.piled.segment:after,
  .ui.piled.segment:before {
    background-color: #ffffff;
    visibility: visible;
    content: "";
    display: block;
    height: 100%;
    left: 0px;
    position: absolute;
    width: 100%;
    border: 1px solid #c4c8ce;
    -webkit-box-shadow: "";
    box-shadow: "";
  }
  .ui.piled.segments:before,
  .ui.piled.segment:before {
    -webkit-transform: rotate(-1.2deg);
    transform: rotate(-1.2deg);
    top: 0;
    z-index: -2;
  }
  .ui.piled.segments:after,
  .ui.piled.segment:after {
    -webkit-transform: rotate(1.2deg);
    transform: rotate(1.2deg);
    top: 0;
    z-index: -1;
  }

  .ui[class*="top attached"].piled.segment {
    margin-top: 3em;
    margin-bottom: 0em;
  }
  .ui.piled.segment[class*="top attached"]:first-child {
    margin-top: 0em;
  }
  .ui.piled.segment[class*="bottom attached"] {
    margin-top: 0em;
    margin-bottom: 3em;
  }
  .ui.piled.segment[class*="bottom attached"]:last-child {
    margin-bottom: 0em;
  }

  .ui.stacked.segment {
    padding-bottom: 16.4px;
  }
  .ui.stacked.segments:before,
  .ui.stacked.segments:after,
  .ui.stacked.segment:before,
  .ui.stacked.segment:after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0%;
    border-top: 1px solid rgba(34, 36, 38, 0.15);
    background: rgba(0, 0, 0, 0.03);
    width: 100%;
    height: 6px;
    visibility: visible;
  }
  .ui.stacked.segments:before,
  .ui.stacked.segment:before {
    display: none;
  }

  .ui.tall.stacked.segments:before,
  .ui.tall.stacked.segment:before {
    display: block;
    bottom: 0px;
  }

  .ui.stacked.inverted.segments:before,
  .ui.stacked.inverted.segments:after,
  .ui.stacked.inverted.segment:before,
  .ui.stacked.inverted.segment:after {
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(34, 36, 38, 0.35);
  }

  .ui.padded.segment {
    padding: 1.5em;
  }
  .ui[class*="very padded"].segment {
    padding: 3em;
  }

  .ui.padded.segment.vertical.segment,
  .ui[class*="very padded"].vertical.segment {
    padding-left: 0px;
    padding-right: 0px;
  }

  .ui.compact.segment {
    display: table;
  }

  .ui.compact.segments {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
  }
  .ui.compact.segments .segment,
  .ui.segments .compact.segment {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
  }

  .ui.circular.segment {
    display: table-cell;
    padding: 2em;
    text-align: center;
    vertical-align: middle;
    border-radius: 500em;
  }

  .ui.raised.segments,
  .ui.raised.segment {
    -webkit-box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
  }

  .ui.segments {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    margin: 1rem 0em;
    border: 1px solid #c4c8ce;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 3px;
  }
  .ui.segments:first-child {
    margin-top: 0em;
  }
  .ui.segments:last-child {
    margin-bottom: 0em;
  }

  .ui.segments > .segment {
    top: 0px;
    bottom: 0px;
    border-radius: 0px;
    margin: 0em;
    width: auto;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    border-top: 1px solid #c4c8ce;
  }
  .ui.segments:not(.horizontal) > .segment:first-child {
    border-top: none;
    margin-top: 0em;
    bottom: 0px;
    margin-bottom: 0em;
    top: 0px;
    border-radius: 3px 3px 0em 0em;
  }

  .ui.segments:not(.horizontal) > .segment:last-child {
    top: 0px;
    bottom: 0px;
    margin-top: 0em;
    margin-bottom: 0em;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), none;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), none;
    border-radius: 0em 0em 3px 3px;
  }

  .ui.segments:not(.horizontal) > .segment:only-child {
    border-radius: 3px;
  }

  .ui.segments > .ui.segments {
    border-top: 1px solid #c4c8ce;
    margin: 1rem 1rem;
  }
  .ui.segments > .segments:first-child {
    border-top: none;
  }
  .ui.segments > .segment + .segments:not(.horizontal) {
    margin-top: 0em;
  }

  .ui.horizontal.segments {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    background-color: transparent;
    border-radius: 0px;
    padding: 0em;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    margin: 1rem 0em;
    border-radius: 3px;
    border: 1px solid #c4c8ce;
  }

  .ui.segments > .horizontal.segments {
    margin: 0em;
    background-color: transparent;
    border-radius: 0px;
    border: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-top: 1px solid #c4c8ce;
  }

  .ui.horizontal.segments > .segment {
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    -ms-flex: 1 1 0px;

    margin: 0em;
    min-width: 0px;
    background-color: transparent;
    border-radius: 0px;
    border: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-left: 1px solid rgba(34, 36, 38, 0.15);
  }

  .ui.segments > .horizontal.segments:first-child {
    border-top: none;
  }
  .ui.horizontal.segments > .segment:first-child {
    border-left: none;
  }

  .ui.disabled.segment {
    opacity: 0.45;
    color: rgba(40, 40, 40, 0.3);
  }

  .ui.loading.segment {
    position: relative;
    cursor: default;
    pointer-events: none;
    text-shadow: none !important;
    color: transparent !important;
    -webkit-transition: all 0s linear;
    transition: all 0s linear;
  }
  .ui.loading.segment:before {
    position: absolute;
    content: "";
    top: 0%;
    left: 0%;
    background: rgba(255, 255, 255, 0.8);
    width: 100%;
    height: 100%;
    border-radius: 3px;
    z-index: 100;
  }
  .ui.loading.segment:after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    margin: -1.5em 0em 0em -1.5em;
    width: 3em;
    height: 3em;
    -webkit-animation: segment-spin 0.6s linear;
    animation: segment-spin 0.6s linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: #80858e rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1)
      rgba(0, 0, 0, 0.1);
    border-style: solid;
    border-width: 0.2em;
    -webkit-box-shadow: 0px 0px 0px 1px transparent;
    box-shadow: 0px 0px 0px 1px transparent;
    visibility: visible;
    z-index: 101;
  }
  @-webkit-keyframes segment-spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes segment-spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .ui.basic.segment {
    background: none transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    border-radius: 0px;
  }

  .ui.clearing.segment:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .ui.red.segment:not(.inverted) {
    border-top: 2px solid #eb3e3f !important;
  }
  .ui.inverted.red.segment {
    background-color: #eb3e3f !important;
    color: #ffffff !important;
  }

  .ui.orange.segment:not(.inverted) {
    border-top: 2px solid #f87e17 !important;
  }
  .ui.inverted.orange.segment {
    background-color: #f87e17 !important;
    color: #ffffff !important;
  }

  .ui.yellow.segment:not(.inverted) {
    border-top: 2px solid #f8c41d !important;
  }
  .ui.inverted.yellow.segment {
    background-color: #f8c41d !important;
    color: #ffffff !important;
  }

  .ui.olive.segment:not(.inverted) {
    border-top: 2px solid #b5cc18 !important;
  }
  .ui.inverted.olive.segment {
    background-color: #b5cc18 !important;
    color: #ffffff !important;
  }

  .ui.green.segment:not(.inverted) {
    border-top: 2px solid #3fbe58 !important;
  }
  .ui.inverted.green.segment {
    background-color: #3fbe58 !important;
    color: #ffffff !important;
  }

  .ui.teal.segment:not(.inverted) {
    border-top: 2px solid #20c997 !important;
  }
  .ui.inverted.teal.segment {
    background-color: #20c997 !important;
    color: #ffffff !important;
  }

  .ui.blue.segment:not(.inverted) {
    border-top: 2px solid #218ae3 !important;
  }
  .ui.inverted.blue.segment {
    background-color: #218ae3 !important;
    color: #ffffff !important;
  }

  .ui.violet.segment:not(.inverted) {
    border-top: 2px solid #7048e8 !important;
  }
  .ui.inverted.violet.segment {
    background-color: #7048e8 !important;
    color: #ffffff !important;
  }

  .ui.purple.segment:not(.inverted) {
    border-top: 2px solid #ab3ec8 !important;
  }
  .ui.inverted.purple.segment {
    background-color: #ab3ec8 !important;
    color: #ffffff !important;
  }

  .ui.pink.segment:not(.inverted) {
    border-top: 2px solid #e03997 !important;
  }
  .ui.inverted.pink.segment {
    background-color: #e03997 !important;
    color: #ffffff !important;
  }

  .ui.brown.segment:not(.inverted) {
    border-top: 2px solid #a5673f !important;
  }
  .ui.inverted.brown.segment {
    background-color: #a5673f !important;
    color: #ffffff !important;
  }

  .ui.grey.segment:not(.inverted) {
    border-top: 2px solid #80858e !important;
  }
  .ui.inverted.grey.segment {
    background-color: #80858e !important;
    color: #ffffff !important;
  }

  .ui.black.segment:not(.inverted) {
    border-top: 2px solid #333943 !important;
  }
  .ui.inverted.black.segment {
    background-color: #333943 !important;
    color: #ffffff !important;
  }

  .ui[class*="left aligned"].segment {
    text-align: left;
  }
  .ui[class*="right aligned"].segment {
    text-align: right;
  }
  .ui[class*="center aligned"].segment {
    text-align: center;
  }

  .ui.floated.segment,
  .ui[class*="left floated"].segment {
    float: left;
    margin-right: 1em;
  }
  .ui[class*="right floated"].segment {
    float: right;
    margin-left: 1em;
  }

  .ui.inverted.segment {
    border: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ui.inverted.segment,
  .ui.primary.inverted.segment {
    background: #333943;
    color: rgba(255, 255, 255, 0.9);
  }

  .ui.inverted.segment .segment {
    color: rgba(0, 0, 0, 0.87);
  }
  .ui.inverted.segment .inverted.segment {
    color: rgba(255, 255, 255, 0.9);
  }

  .ui.inverted.attached.segment {
    border-color: #555555;
  }

  .ui.secondary.segment {
    background: #f3f4f5;
    color: rgba(0, 0, 0, 0.6);
  }
  .ui.secondary.inverted.segment {
    background: #5f6a7d -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.2)), to(rgba(255, 255, 255, 0.2)));
    background: #5f6a7d -webkit-linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgba(
            255,
            255,
            255,
            0.2
          )
          100%);
    background: #5f6a7d
      linear-gradient(
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.2) 100%
      );
    color: rgba(255, 255, 255, 0.8);
  }

  .ui.tertiary.segment {
    background: #dcddde;
    color: rgba(0, 0, 0, 0.6);
  }
  .ui.tertiary.inverted.segment {
    background: #8691a3 -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.35)), to(rgba(255, 255, 255, 0.35)));
    background: #8691a3 -webkit-linear-gradient(rgba(255, 255, 255, 0.35) 0%, rgba(
            255,
            255,
            255,
            0.35
          )
          100%);
    background: #8691a3
      linear-gradient(
        rgba(255, 255, 255, 0.35) 0%,
        rgba(255, 255, 255, 0.35) 100%
      );
    color: rgba(255, 255, 255, 0.8);
  }

  .ui.attached.segment {
    top: 0px;
    bottom: 0px;
    border-radius: 0px;
    margin: 0em -1px;
    width: calc(100% + 2px);
    max-width: calc(100% + 2px);
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid #d4d4d5;
  }
  .ui.attached:not(.message) + .ui.attached.segment:not(.top) {
    border-top: none;
  }

  .ui[class*="top attached"].segment {
    bottom: 0px;
    margin-bottom: 0em;
    top: 0px;
    margin-top: 1rem;
    border-radius: 3px 3px 0em 0em;
  }
  .ui.segment[class*="top attached"]:first-child {
    margin-top: 0em;
  }

  .ui.segment[class*="bottom attached"] {
    bottom: 0px;
    margin-top: 0em;
    top: 0px;
    margin-bottom: 1rem;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), none;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), none;
    border-radius: 0em 0em 3px 3px;
  }
  .ui.segment[class*="bottom attached"]:last-child {
    margin-bottom: 0em;
  }

  .ui.mini.segments .segment,
  .ui.mini.segment {
    font-size: 0.78571429rem;
  }
  .ui.tiny.segments .segment,
  .ui.tiny.segment {
    font-size: 0.85714286rem;
  }
  .ui.small.segments .segment,
  .ui.small.segment {
    font-size: 0.92857143rem;
  }
  .ui.segments .segment,
  .ui.segment {
    font-size: 1rem;
  }
  .ui.large.segments .segment,
  .ui.large.segment {
    font-size: 1.14285714rem;
  }
  .ui.big.segments .segment,
  .ui.big.segment {
    font-size: 1.28571429rem;
  }
  .ui.huge.segments .segment,
  .ui.huge.segment {
    font-size: 1.42857143rem;
  }
  .ui.massive.segments .segment,
  .ui.massive.segment {
    font-size: 1.71428571rem;
  }
`;

export default style;
