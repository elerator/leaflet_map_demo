import { css } from "react-emotion";

const style = css`
  .ui.label {
    display: inline-block;
    line-height: 1;
    vertical-align: baseline;
    margin: 0em 0.14285714em;
    background-color: #e8e8e8;
    background-image: none;
    padding: 0.5833em 0.833em;
    color: rgba(0, 0, 0, 0.6);
    text-transform: none;
    font-weight: bold;
    border: 0px solid transparent;
    border-radius: 3px;
    -webkit-transition: background 0.1s ease;
    transition: background 0.1s ease;
  }
  .ui.label:first-child {
    margin-left: 0em;
  }
  .ui.label:last-child {
    margin-right: 0em;
  }

  a.ui.label {
    cursor: pointer;
  }

  .ui.label > a {
    cursor: pointer;
    color: inherit;
    opacity: 0.5;
    -webkit-transition: 0.1s opacity ease;
    transition: 0.1s opacity ease;
  }
  .ui.label > a:hover {
    opacity: 1;
  }

  .ui.label > img {
    width: auto !important;
    vertical-align: middle;
    height: 2.1666em !important;
  }

  .ui.label > .icon {
    width: auto;
    margin: 0em 0.75em 0em 0em;
  }

  .ui.label > .detail {
    display: inline-block;
    vertical-align: top;
    font-weight: bold;
    margin-left: 1em;
    opacity: 0.8;
  }
  .ui.label > .detail .icon {
    margin: 0em 0.25em 0em 0em;
  }

  .ui.label > .close.icon,
  .ui.label > .delete.icon {
    cursor: pointer;
    margin-right: 0em;
    margin-left: 0.5em;
    font-size: 0.92857143em;
    opacity: 0.5;
    -webkit-transition: background 0.1s ease;
    transition: background 0.1s ease;
  }
  .ui.label > .delete.icon:hover {
    opacity: 1;
  }

  .ui.labels > .label {
    margin: 0em 0.5em 0.5em 0em;
  }

  .ui.header > .ui.label {
    margin-top: -0.29165em;
  }

  .ui.attached.segment > .ui.top.left.attached.label,
  .ui.bottom.attached.segment > .ui.top.left.attached.label {
    border-top-left-radius: 0;
  }
  .ui.attached.segment > .ui.top.right.attached.label,
  .ui.bottom.attached.segment > .ui.top.right.attached.label {
    border-top-right-radius: 0;
  }
  .ui.top.attached.segment > .ui.bottom.left.attached.label {
    border-bottom-left-radius: 0;
  }
  .ui.top.attached.segment > .ui.bottom.right.attached.label {
    border-bottom-right-radius: 0;
  }

  .ui.top.attached.label:first-child + :not(.attached),
  .ui.top.attached.label + [class*="right floated"] + * {
    margin-top: 2rem !important;
  }
  .ui.bottom.attached.label:first-child ~ :last-child:not(.attached) {
    margin-top: 0em;
    margin-bottom: 2rem !important;
  }

  .ui.image.label {
    width: auto !important;
    margin-top: 0em;
    margin-bottom: 0em;
    max-width: 9999px;
    vertical-align: baseline;
    text-transform: none;
    background: #e8e8e8;
    padding: 0.5833em 0.833em 0.5833em 0.5em;
    border-radius: 3px;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ui.image.label img {
    display: inline-block;
    vertical-align: top;
    height: 2.1666em;
    margin: -0.5833em 0.5em -0.5833em -0.5em;
    border-radius: 3px 0em 0em 3px;
  }
  .ui.image.label .detail {
    background: rgba(0, 0, 0, 0.1);
    margin: -0.5833em -0.833em -0.5833em 0.5em;
    padding: 0.5833em 0.833em;
    border-radius: 0em 3px 3px 0em;
  }

  .ui.tag.labels .label,
  .ui.tag.label {
    margin-left: 1em;
    position: relative;
    padding-left: 1.5em;
    padding-right: 1.5em;
    border-radius: 0em 3px 3px 0em;
    -webkit-transition: none;
    transition: none;
  }
  .ui.tag.labels .label:before,
  .ui.tag.label:before {
    position: absolute;
    -webkit-transform: translateY(-50%) translateX(50%) rotate(-45deg);
    transform: translateY(-50%) translateX(50%) rotate(-45deg);
    top: 50%;
    right: 100%;
    content: "";
    background-color: inherit;
    background-image: none;
    width: 1.56em;
    height: 1.56em;
    -webkit-transition: none;
    transition: none;
  }
  .ui.tag.labels .label:after,
  .ui.tag.label:after {
    position: absolute;
    content: "";
    top: 50%;
    left: -0.25em;
    margin-top: -0.25em;
    background-color: #ffffff !important;
    width: 0.5em;
    height: 0.5em;
    -webkit-box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.3);
    border-radius: 500rem;
  }

  .ui.corner.label {
    position: absolute;
    top: 0em;
    right: 0em;
    margin: 0em;
    padding: 0em;
    text-align: center;
    border-color: #e8e8e8;
    width: 4em;
    height: 4em;
    z-index: 1;
    -webkit-transition: border-color 0.1s ease;
    transition: border-color 0.1s ease;
  }

  .ui.corner.label {
    background-color: transparent !important;
  }
  .ui.corner.label:after {
    position: absolute;
    content: "";
    right: 0em;
    top: 0em;
    z-index: -1;
    width: 0em;
    height: 0em;
    background-color: transparent !important;
    border-top: 0em solid transparent;
    border-right: 4em solid transparent;
    border-bottom: 4em solid transparent;
    border-left: 0em solid transparent;
    border-right-color: inherit;
    -webkit-transition: border-color 0.1s ease;
    transition: border-color 0.1s ease;
  }
  .ui.corner.label .icon {
    cursor: default;
    position: relative;
    top: 0.64285714em;
    left: 0.78571429em;
    font-size: 1.14285714em;
    margin: 0em;
  }

  .ui.left.corner.label,
  .ui.left.corner.label:after {
    right: auto;
    left: 0em;
  }
  .ui.left.corner.label:after {
    border-top: 4em solid transparent;
    border-right: 4em solid transparent;
    border-bottom: 0em solid transparent;
    border-left: 0em solid transparent;
    border-top-color: inherit;
  }
  .ui.left.corner.label .icon {
    left: -0.78571429em;
  }

  .ui.segment > .ui.corner.label {
    top: -1px;
    right: -1px;
  }
  .ui.segment > .ui.left.corner.label {
    right: auto;
    left: -1px;
  }

  .ui.ribbon.label {
    position: relative;
    margin: 0em;
    min-width: -webkit-max-content;
    min-width: -moz-max-content;
    min-width: max-content;
    border-radius: 0em 3px 3px 0em;
    border-color: rgba(0, 0, 0, 0.15);
  }
  .ui.ribbon.label:after {
    position: absolute;
    content: "";
    top: 100%;
    left: 0%;
    background-color: transparent !important;
    border-style: solid;
    border-width: 0em 1.2em 1.2em 0em;
    border-color: transparent;
    border-right-color: inherit;
    width: 0em;
    height: 0em;
  }

  .ui.ribbon.label {
    left: calc(-1rem - 1.2em);
    margin-right: -1.2em;
    padding-left: calc(1rem + 1.2em);
    padding-right: 1.2em;
  }
  .ui[class*="right ribbon"].label {
    left: calc(100% + 1rem + 1.2em);
    padding-left: 1.2em;
    padding-right: calc(1rem + 1.2em);
  }

  .ui[class*="right ribbon"].label {
    text-align: left;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    border-radius: 3px 0em 0em 3px;
  }
  .ui[class*="right ribbon"].label:after {
    left: auto;
    right: 0%;
    border-style: solid;
    border-width: 1.2em 1.2em 0em 0em;
    border-color: transparent;
    border-top-color: inherit;
  }

  .ui.image > .ribbon.label,
  .ui.card .image > .ribbon.label {
    position: absolute;
    top: 1rem;
  }
  .ui.card .image > .ui.ribbon.label,
  .ui.image > .ui.ribbon.label {
    left: calc(0.05rem - 1.2em);
  }
  .ui.card .image > .ui[class*="right ribbon"].label,
  .ui.image > .ui[class*="right ribbon"].label {
    left: calc(100% + -0.05rem + 1.2em);
    padding-left: 0.833em;
  }

  .ui.table td > .ui.ribbon.label {
    left: calc(-0.78571429em - 1.2em);
  }
  .ui.table td > .ui[class*="right ribbon"].label {
    left: calc(100% + 0.78571429em + 1.2em);
    padding-left: 0.833em;
  }

  .ui[class*="top attached"].label,
  .ui.attached.label {
    width: 100%;
    position: absolute;
    margin: 0em;
    top: 0em;
    left: 0em;
    padding: 0.75em 1em;
    border-radius: 0.21428571rem 0.21428571rem 0em 0em;
  }
  .ui[class*="bottom attached"].label {
    top: auto;
    bottom: 0em;
    border-radius: 0em 0em 0.21428571rem 0.21428571rem;
  }
  .ui[class*="top left attached"].label {
    width: auto;
    margin-top: 0em !important;
    border-radius: 0.21428571rem 0em 3px 0em;
  }
  .ui[class*="top right attached"].label {
    width: auto;
    left: auto;
    right: 0em;
    border-radius: 0em 0.21428571rem 0em 3px;
  }
  .ui[class*="bottom left attached"].label {
    width: auto;
    top: auto;
    bottom: 0em;
    border-radius: 0em 3px 0em 0.21428571rem;
  }
  .ui[class*="bottom right attached"].label {
    top: auto;
    bottom: 0em;
    left: auto;
    right: 0em;
    width: auto;
    border-radius: 3px 0em 0.21428571rem 0em;
  }

  .ui.label.disabled {
    opacity: 0.5;
  }

  a.ui.labels .label:hover,
  a.ui.label:hover {
    background-color: #e0e0e0;
    border-color: #e0e0e0;
    background-image: none;
    color: rgba(0, 0, 0, 0.8);
  }
  .ui.labels a.label:hover:before,
  a.ui.label:hover:before {
    color: rgba(0, 0, 0, 0.8);
  }

  .ui.active.label {
    background-color: #d0d0d0;
    border-color: #d0d0d0;
    background-image: none;
    color: rgba(0, 0, 0, 0.95);
  }
  .ui.active.label:before {
    background-color: #d0d0d0;
    background-image: none;
    color: rgba(0, 0, 0, 0.95);
  }

  a.ui.labels .active.label:hover,
  a.ui.active.label:hover {
    background-color: #c8c8c8;
    border-color: #c8c8c8;
    background-image: none;
    color: rgba(0, 0, 0, 0.95);
  }
  .ui.labels a.active.label:activehover:before,
  a.ui.active.label:activehover:before {
    background-color: #c8c8c8;
    background-image: none;
    color: rgba(0, 0, 0, 0.95);
  }

  .ui.labels.visible .label,
  .ui.label.visible:not(.dropdown) {
    display: inline-block !important;
  }

  .ui.labels.hidden .label,
  .ui.label.hidden {
    display: none !important;
  }

  .ui.red.labels .label,
  .ui.red.label {
    background-color: #eb3e3f !important;
    border-color: #eb3e3f !important;
    color: #ffffff !important;
  }

  .ui.red.labels .label:hover,
  a.ui.red.label:hover {
    background-color: #f21d1e !important;
    border-color: #f21d1e !important;
    color: #ffffff !important;
  }

  .ui.red.corner.label,
  .ui.red.corner.label:hover {
    background-color: transparent !important;
  }

  .ui.red.ribbon.label {
    border-color: #df1718 !important;
  }

  .ui.basic.red.label {
    background: none #ffffff !important;
    color: #eb3e3f !important;
    border-color: #eb3e3f !important;
  }
  .ui.basic.red.labels a.label:hover,
  a.ui.basic.red.label:hover {
    background-color: #ffffff !important;
    color: #f21d1e !important;
    border-color: #f21d1e !important;
  }

  .ui.orange.labels .label,
  .ui.orange.label {
    background-color: #f87e17 !important;
    border-color: #f87e17 !important;
    color: #ffffff !important;
  }

  .ui.orange.labels .label:hover,
  a.ui.orange.label:hover {
    background-color: #f67000 !important;
    border-color: #f67000 !important;
    color: #ffffff !important;
  }

  .ui.orange.corner.label,
  .ui.orange.corner.label:hover {
    background-color: transparent !important;
  }

  .ui.orange.ribbon.label {
    border-color: #d66506 !important;
  }

  .ui.basic.orange.label {
    background: none #ffffff !important;
    color: #f87e17 !important;
    border-color: #f87e17 !important;
  }
  .ui.basic.orange.labels a.label:hover,
  a.ui.basic.orange.label:hover {
    background-color: #ffffff !important;
    color: #f67000 !important;
    border-color: #f67000 !important;
  }

  .ui.yellow.labels .label,
  .ui.yellow.label {
    background-color: #f8c41d !important;
    border-color: #f8c41d !important;
    color: #ffffff !important;
  }

  .ui.yellow.labels .label:hover,
  a.ui.yellow.label:hover {
    background-color: #fbc000 !important;
    border-color: #fbc000 !important;
    color: #ffffff !important;
  }

  .ui.yellow.corner.label,
  .ui.yellow.corner.label:hover {
    background-color: transparent !important;
  }

  .ui.yellow.ribbon.label {
    border-color: #dba907 !important;
  }

  .ui.basic.yellow.label {
    background: none #ffffff !important;
    color: #f8c41d !important;
    border-color: #f8c41d !important;
  }
  .ui.basic.yellow.labels a.label:hover,
  a.ui.basic.yellow.label:hover {
    background-color: #ffffff !important;
    color: #fbc000 !important;
    border-color: #fbc000 !important;
  }

  .ui.olive.labels .label,
  .ui.olive.label {
    background-color: #b5cc18 !important;
    border-color: #b5cc18 !important;
    color: #ffffff !important;
  }

  .ui.olive.labels .label:hover,
  a.ui.olive.label:hover {
    background-color: #a7bd0d !important;
    border-color: #a7bd0d !important;
    color: #ffffff !important;
  }

  .ui.olive.corner.label,
  .ui.olive.corner.label:hover {
    background-color: transparent !important;
  }

  .ui.olive.ribbon.label {
    border-color: #329846 !important;
  }

  .ui.basic.olive.label {
    background: none #ffffff !important;
    color: #b5cc18 !important;
    border-color: #b5cc18 !important;
  }
  .ui.basic.olive.labels a.label:hover,
  a.ui.basic.olive.label:hover {
    background-color: #ffffff !important;
    color: #a7bd0d !important;
    border-color: #a7bd0d !important;
  }

  .ui.green.labels .label,
  .ui.green.label {
    background-color: #3fbe58 !important;
    border-color: #3fbe58 !important;
    color: #ffffff !important;
  }

  .ui.green.labels .label:hover,
  a.ui.green.label:hover {
    background-color: #33b14c !important;
    border-color: #33b14c !important;
    color: #ffffff !important;
  }

  .ui.green.corner.label,
  .ui.green.corner.label:hover {
    background-color: transparent !important;
  }

  .ui.green.ribbon.label {
    border-color: #329846 !important;
  }

  .ui.basic.green.label {
    background: none #ffffff !important;
    color: #3fbe58 !important;
    border-color: #3fbe58 !important;
  }
  .ui.basic.green.labels a.label:hover,
  a.ui.basic.green.label:hover {
    background-color: #ffffff !important;
    color: #33b14c !important;
    border-color: #33b14c !important;
  }

  .ui.teal.labels .label,
  .ui.teal.label {
    background-color: #20c997 !important;
    border-color: #20c997 !important;
    color: #ffffff !important;
  }

  .ui.teal.labels .label:hover,
  a.ui.teal.label:hover {
    background-color: #15bb8a !important;
    border-color: #15bb8a !important;
    color: #ffffff !important;
  }

  .ui.teal.corner.label,
  .ui.teal.corner.label:hover {
    background-color: transparent !important;
  }

  .ui.teal.ribbon.label {
    border-color: #199d76 !important;
  }

  .ui.basic.teal.label {
    background: none #ffffff !important;
    color: #20c997 !important;
    border-color: #20c997 !important;
  }
  .ui.basic.teal.labels a.label:hover,
  a.ui.basic.teal.label:hover {
    background-color: #ffffff !important;
    color: #15bb8a !important;
    border-color: #15bb8a !important;
  }

  .ui.blue.labels .label,
  .ui.blue.label {
    background-color: #218ae3 !important;
    border-color: #218ae3 !important;
    color: #ffffff !important;
  }

  .ui.blue.labels .label:hover,
  a.ui.blue.label:hover {
    background-color: #117ed9 !important;
    border-color: #117ed9 !important;
    color: #ffffff !important;
  }

  .ui.blue.corner.label,
  .ui.blue.corner.label:hover {
    background-color: transparent !important;
  }

  .ui.blue.ribbon.label {
    border-color: #176fba !important;
  }

  .ui.basic.blue.label {
    background: none #ffffff !important;
    color: #218ae3 !important;
    border-color: #218ae3 !important;
  }
  .ui.basic.blue.labels a.label:hover,
  a.ui.basic.blue.label:hover {
    background-color: #ffffff !important;
    color: #117ed9 !important;
    border-color: #117ed9 !important;
  }

  .ui.violet.labels .label,
  .ui.violet.label {
    background-color: #7048e8 !important;
    border-color: #7048e8 !important;
    color: #ffffff !important;
  }

  .ui.violet.labels .label:hover,
  a.ui.violet.label:hover {
    background-color: #5a28ee !important;
    border-color: #5a28ee !important;
    color: #ffffff !important;
  }

  .ui.violet.corner.label,
  .ui.violet.corner.label:hover {
    background-color: transparent !important;
  }

  .ui.violet.ribbon.label {
    border-color: #4d1ce1 !important;
  }

  .ui.basic.violet.label {
    background: none #ffffff !important;
    color: #7048e8 !important;
    border-color: #7048e8 !important;
  }
  .ui.basic.violet.labels a.label:hover,
  a.ui.basic.violet.label:hover {
    background-color: #ffffff !important;
    color: #5a28ee !important;
    border-color: #5a28ee !important;
  }

  .ui.purple.labels .label,
  .ui.purple.label {
    background-color: #ab3ec8 !important;
    border-color: #ab3ec8 !important;
    color: #ffffff !important;
  }

  .ui.purple.labels .label:hover,
  a.ui.purple.label:hover {
    background-color: #a02ebf !important;
    border-color: #a02ebf !important;
    color: #ffffff !important;
  }

  .ui.purple.corner.label,
  .ui.purple.corner.label:hover {
    background-color: transparent !important;
  }

  .ui.purple.ribbon.label {
    border-color: #8c2fa4 !important;
  }

  .ui.basic.purple.label {
    background: none #ffffff !important;
    color: #ab3ec8 !important;
    border-color: #ab3ec8 !important;
  }
  .ui.basic.purple.labels a.label:hover,
  a.ui.basic.purple.label:hover {
    background-color: #ffffff !important;
    color: #a02ebf !important;
    border-color: #a02ebf !important;
  }

  .ui.pink.labels .label,
  .ui.pink.label {
    background-color: #e03997 !important;
    border-color: #e03997 !important;
    color: #ffffff !important;
  }

  .ui.pink.labels .label:hover,
  a.ui.pink.label:hover {
    background-color: #e61a8d !important;
    border-color: #e61a8d !important;
    color: #ffffff !important;
  }

  .ui.pink.corner.label,
  .ui.pink.corner.label:hover {
    background-color: transparent !important;
  }

  .ui.pink.ribbon.label {
    border-color: #c71f7e !important;
  }

  .ui.basic.pink.label {
    background: none #ffffff !important;
    color: #e03997 !important;
    border-color: #e03997 !important;
  }
  .ui.basic.pink.labels a.label:hover,
  a.ui.basic.pink.label:hover {
    background-color: #ffffff !important;
    color: #e61a8d !important;
    border-color: #e61a8d !important;
  }

  .ui.brown.labels .label,
  .ui.brown.label {
    background-color: #a5673f !important;
    border-color: #a5673f !important;
    color: #ffffff !important;
  }

  .ui.brown.labels .label:hover,
  a.ui.brown.label:hover {
    background-color: #975b33 !important;
    border-color: #975b33 !important;
    color: #ffffff !important;
  }

  .ui.brown.corner.label,
  .ui.brown.corner.label:hover {
    background-color: transparent !important;
  }

  .ui.brown.ribbon.label {
    border-color: #805031 !important;
  }

  .ui.basic.brown.label {
    background: none #ffffff !important;
    color: #a5673f !important;
    border-color: #a5673f !important;
  }
  .ui.basic.brown.labels a.label:hover,
  a.ui.basic.brown.label:hover {
    background-color: #ffffff !important;
    color: #975b33 !important;
    border-color: #975b33 !important;
  }

  .ui.grey.labels .label,
  .ui.grey.label {
    background-color: #80858e !important;
    border-color: #80858e !important;
    color: #ffffff !important;
  }

  .ui.grey.labels .label:hover,
  a.ui.grey.label:hover {
    background-color: #8d929a !important;
    border-color: #8d929a !important;
    color: #ffffff !important;
  }

  .ui.grey.corner.label,
  .ui.grey.corner.label:hover {
    background-color: transparent !important;
  }

  .ui.grey.ribbon.label {
    border-color: #805031 !important;
  }

  .ui.basic.grey.label {
    background: none #ffffff !important;
    color: #80858e !important;
    border-color: #80858e !important;
  }
  .ui.basic.grey.labels a.label:hover,
  a.ui.basic.grey.label:hover {
    background-color: #ffffff !important;
    color: #8d929a !important;
    border-color: #8d929a !important;
  }

  .ui.black.labels .label,
  .ui.black.label {
    background-color: #333943 !important;
    border-color: #333943 !important;
    color: #ffffff !important;
  }

  .ui.black.labels .label:hover,
  a.ui.black.label:hover {
    background-color: #3e4551 !important;
    border-color: #3e4551 !important;
    color: #ffffff !important;
  }

  .ui.black.corner.label,
  .ui.black.corner.label:hover {
    background-color: transparent !important;
  }

  .ui.black.ribbon.label {
    border-color: #805031 !important;
  }

  .ui.basic.black.label {
    background: none #ffffff !important;
    color: #333943 !important;
    border-color: #333943 !important;
  }
  .ui.basic.black.labels a.label:hover,
  a.ui.basic.black.label:hover {
    background-color: #ffffff !important;
    color: #3e4551 !important;
    border-color: #3e4551 !important;
  }

  .ui.basic.label {
    background: none #ffffff;
    border: 1px solid rgba(34, 36, 38, 0.15);
    color: rgba(0, 0, 0, 0.87);
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  a.ui.basic.label:hover {
    text-decoration: none;
    background: none #ffffff;
    color: #0090bb;
    -webkit-box-shadow: 1px solid rgba(34, 36, 38, 0.15);
    box-shadow: 1px solid rgba(34, 36, 38, 0.15);
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .ui.basic.pointing.label:before {
    border-color: inherit;
  }

  .ui.label.fluid,
  .ui.fluid.labels > .label {
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .ui.inverted.labels .label,
  .ui.inverted.label {
    color: rgba(255, 255, 255, 0.9) !important;
  }

  .ui.horizontal.labels .label,
  .ui.horizontal.label {
    margin: 0em 0.5em 0em 0em;
    padding: 0.4em 0.833em;
    min-width: 3em;
    text-align: center;
  }

  .ui.circular.labels .label,
  .ui.circular.label {
    min-width: 2em;
    min-height: 2em;
    padding: 0.5em !important;
    line-height: 1em;
    text-align: center;
    border-radius: 500rem;
  }
  .ui.empty.circular.labels .label,
  .ui.empty.circular.label {
    min-width: 0em;
    min-height: 0em;
    overflow: hidden;
    width: 0.5em;
    height: 0.5em;
    vertical-align: baseline;
  }

  .ui.pointing.label {
    position: relative;
  }
  .ui.attached.pointing.label {
    position: absolute;
  }
  .ui.pointing.label:before {
    background-color: inherit;
    background-image: inherit;
    border-width: none;
    border-style: solid;
    border-color: inherit;
  }

  .ui.pointing.label:before {
    position: absolute;
    content: "";
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    background-image: none;
    z-index: 2;
    width: 0.6666em;
    height: 0.6666em;
    -webkit-transition: background 0.1s ease;
    transition: background 0.1s ease;
  }

  .ui.pointing.label,
  .ui[class*="pointing above"].label {
    margin-top: 1em;
  }
  .ui.pointing.label:before,
  .ui[class*="pointing above"].label:before {
    border-width: 1px 0px 0px 1px;
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    top: 0%;
    left: 50%;
  }

  .ui[class*="bottom pointing"].label,
  .ui[class*="pointing below"].label {
    margin-top: 0em;
    margin-bottom: 1em;
  }
  .ui[class*="bottom pointing"].label:before,
  .ui[class*="pointing below"].label:before {
    border-width: 0px 1px 1px 0px;
    top: auto;
    right: auto;
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    top: 100%;
    left: 50%;
  }

  .ui[class*="left pointing"].label {
    margin-top: 0em;
    margin-left: 0.6666em;
  }
  .ui[class*="left pointing"].label:before {
    border-width: 0px 0px 1px 1px;
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    bottom: auto;
    right: auto;
    top: 50%;
    left: 0em;
  }

  .ui[class*="right pointing"].label {
    margin-top: 0em;
    margin-right: 0.6666em;
  }
  .ui[class*="right pointing"].label:before {
    border-width: 1px 1px 0px 0px;
    -webkit-transform: translateX(50%) translateY(-50%) rotate(45deg);
    transform: translateX(50%) translateY(-50%) rotate(45deg);
    top: 50%;
    right: 0%;
    bottom: auto;
    left: auto;
  }

  .ui.basic.pointing.label:before,
  .ui.basic[class*="pointing above"].label:before {
    margin-top: -1px;
  }

  .ui.basic[class*="bottom pointing"].label:before,
  .ui.basic[class*="pointing below"].label:before {
    bottom: auto;
    top: 100%;
    margin-top: 1px;
  }

  .ui.basic[class*="left pointing"].label:before {
    top: 50%;
    left: -1px;
  }

  .ui.basic[class*="right pointing"].label:before {
    top: 50%;
    right: -1px;
  }

  .ui.floating.label {
    position: absolute;
    z-index: 100;
    top: -1em;
    left: 100%;
    margin: 0em 0em 0em -1.5em !important;
  }

  .ui.mini.labels .label,
  .ui.mini.label {
    font-size: 0.64285714rem;
  }
  .ui.tiny.labels .label,
  .ui.tiny.label {
    font-size: 0.71428571rem;
  }
  .ui.small.labels .label,
  .ui.small.label {
    font-size: 0.78571429rem;
  }
  .ui.labels .label,
  .ui.label {
    font-size: 0.85714286rem;
  }
  .ui.large.labels .label,
  .ui.large.label {
    font-size: 1rem;
  }
  .ui.big.labels .label,
  .ui.big.label {
    font-size: 1.28571429rem;
  }
  .ui.huge.labels .label,
  .ui.huge.label {
    font-size: 1.42857143rem;
  }
  .ui.massive.labels .label,
  .ui.massive.label {
    font-size: 1.71428571rem;
  }
`;

export default style;
