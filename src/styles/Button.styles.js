import { css } from "react-emotion";

const style = css`
  .ui.button {
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    outline: none;
    border: none;
    vertical-align: baseline;
    background: #e8ebef -webkit-gradient(linear, left top, left bottom, color-stop(3%, #e8ebef), to(#d1d4d7));
    background: #e8ebef -webkit-linear-gradient(top, #e8ebef 3%, #d1d4d7);
    background: #e8ebef linear-gradient(-180deg, #e8ebef 3%, #d1d4d7);
    color: #333943;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0em 8px 0em 0em;
    padding: 10px 12px 10px;
    text-transform: none;
    text-shadow: none;
    font-weight: bold;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: 2px;
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05) inset,
      0 0 0 1px rgba(0, 0, 0, 0.13) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05) inset,
      0 0 0 1px rgba(0, 0, 0, 0.13) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: opacity 0.1s ease, background-color 0.1s ease,
      color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;
    transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
      background 0.1s ease, -webkit-box-shadow 0.1s ease;
    transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
      box-shadow 0.1s ease, background 0.1s ease;
    transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
      box-shadow 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;
    will-change: "";
    -webkit-tap-highlight-color: transparent;
  }

  .ui.button:hover {
    background-color: #dcdfe3;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(3%, #dcdfe3),
      to(#c5c8cb)
    );
    background-image: -webkit-linear-gradient(top, #dcdfe3 3%, #c5c8cb);
    background-image: linear-gradient(-180deg, #dcdfe3 3%, #c5c8cb);
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05) inset,
      0 0 0 1px rgba(0, 0, 0, 0.25) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05) inset,
      0 0 0 1px rgba(0, 0, 0, 0.25) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.8);
  }
  .ui.button:hover .icon {
    opacity: 0.85;
  }

  .ui.button:focus {
    background-color: #dcdfe3;
    color: rgba(0, 0, 0, 0.8);
    background-image: "" !important;
    -webkit-box-shadow: "" !important;
    box-shadow: "" !important;
  }
  .ui.button:focus .icon {
    opacity: 0.85;
  }

  .ui.button:active,
  .ui.active.button:active {
    background-color: #dcdfe3;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(3%, #dcdfe3),
      to(#c5c8cb)
    );
    background-image: -webkit-linear-gradient(top, #dcdfe3 3%, #c5c8cb);
    background-image: linear-gradient(-180deg, #dcdfe3 3%, #c5c8cb);
    color: rgba(0, 0, 0, 0.9);
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05) inset,
      0 0 0 1px rgba(0, 0, 0, 0.23) inset, 0 1px 3px 0 rgba(0, 0, 0, 0.25) inset,
      0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05) inset,
      0 0 0 1px rgba(0, 0, 0, 0.23) inset, 0 1px 3px 0 rgba(0, 0, 0, 0.25) inset,
      0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .ui.active.button {
    background-color: #dcdfe3;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(3%, #dcdfe3),
      to(#c5c8cb)
    );
    background-image: -webkit-linear-gradient(top, #dcdfe3 3%, #c5c8cb);
    background-image: linear-gradient(-180deg, #dcdfe3 3%, #c5c8cb);
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05) inset,
      0 0 0 1px rgba(0, 0, 0, 0.23) inset, 0 1px 3px 0 rgba(0, 0, 0, 0.25) inset,
      0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05) inset,
      0 0 0 1px rgba(0, 0, 0, 0.23) inset, 0 1px 3px 0 rgba(0, 0, 0, 0.25) inset,
      0 1px 3px rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.95);
  }
  .ui.active.button:hover {
    background-color: #dcdfe3;
    background-image: none;
    color: rgba(0, 0, 0, 0.95);
  }
  .ui.active.button:active {
    background-color: #dcdfe3;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(3%, #dcdfe3),
      to(#c5c8cb)
    );
    background-image: -webkit-linear-gradient(top, #dcdfe3 3%, #c5c8cb);
    background-image: linear-gradient(-180deg, #dcdfe3 3%, #c5c8cb);
  }

  .ui.loading.loading.loading.loading.loading.loading.button {
    position: relative;
    cursor: default;
    text-shadow: none !important;
    color: transparent !important;
    opacity: 1;
    pointer-events: auto;
    -webkit-transition: all 0s linear, opacity 0.1s ease;
    transition: all 0s linear, opacity 0.1s ease;
  }
  .ui.loading.button:before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    margin: -0.64285714em 0em 0em -0.64285714em;
    width: 1.28571429em;
    height: 1.28571429em;
    border-radius: 500rem;
    border: 0.2em solid rgba(0, 0, 0, 0.15);
  }
  .ui.loading.button:after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    margin: -0.64285714em 0em 0em -0.64285714em;
    width: 1.28571429em;
    height: 1.28571429em;
    -webkit-animation: button-spin 0.6s linear;
    animation: button-spin 0.6s linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: #ffffff transparent transparent;
    border-style: solid;
    border-width: 0.2em;
    -webkit-box-shadow: 0px 0px 0px 1px transparent;
    box-shadow: 0px 0px 0px 1px transparent;
  }
  .ui.labeled.icon.loading.button .icon {
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  @-webkit-keyframes button-spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes button-spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .ui.basic.loading.button:not(.inverted):before {
    border-color: rgba(0, 0, 0, 0.1);
  }
  .ui.basic.loading.button:not(.inverted):after {
    border-top-color: #80858e;
  }

  .ui.buttons .disabled.button,
  .ui.disabled.button,
  .ui.button:disabled,
  .ui.disabled.button:hover,
  .ui.disabled.active.button {
    cursor: default;
    opacity: 0.65 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    pointer-events: none !important;
  }

  .ui.basic.buttons .ui.disabled.button {
    border-color: rgba(34, 36, 38, 0.5);
  }

  .ui.animated.button {
    position: relative;
    overflow: hidden;
    padding-right: 0em !important;
    vertical-align: middle;
    z-index: 1;
  }
  .ui.animated.button .content {
    will-change: transform, opacity;
  }
  .ui.animated.button .visible.content {
    position: relative;
    margin-right: 12px;
  }
  .ui.animated.button .hidden.content {
    position: absolute;
    width: 100%;
  }

  .ui.animated.button .visible.content,
  .ui.animated.button .hidden.content {
    -webkit-transition: right 0.3s ease 0s;
    transition: right 0.3s ease 0s;
  }
  .ui.animated.button .visible.content {
    left: auto;
    right: 0%;
  }
  .ui.animated.button .hidden.content {
    top: 50%;
    left: auto;
    right: -100%;
    margin-top: -0.5em;
  }
  .ui.animated.button:focus .visible.content,
  .ui.animated.button:hover .visible.content {
    left: auto;
    right: 200%;
  }
  .ui.animated.button:focus .hidden.content,
  .ui.animated.button:hover .hidden.content {
    left: auto;
    right: 0%;
  }

  .ui.vertical.animated.button .visible.content,
  .ui.vertical.animated.button .hidden.content {
    -webkit-transition: top 0.3s ease, -webkit-transform 0.3s ease;
    transition: top 0.3s ease, -webkit-transform 0.3s ease;
    transition: top 0.3s ease, transform 0.3s ease;
    transition: top 0.3s ease, transform 0.3s ease, -webkit-transform 0.3s ease;
  }
  .ui.vertical.animated.button .visible.content {
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
    right: auto;
  }
  .ui.vertical.animated.button .hidden.content {
    top: -50%;
    left: 0%;
    right: auto;
  }
  .ui.vertical.animated.button:focus .visible.content,
  .ui.vertical.animated.button:hover .visible.content {
    -webkit-transform: translateY(200%);
    transform: translateY(200%);
    right: auto;
  }
  .ui.vertical.animated.button:focus .hidden.content,
  .ui.vertical.animated.button:hover .hidden.content {
    top: 50%;
    right: auto;
  }

  .ui.fade.animated.button .visible.content,
  .ui.fade.animated.button .hidden.content {
    -webkit-transition: opacity 0.3s ease, -webkit-transform 0.3s ease;
    transition: opacity 0.3s ease, -webkit-transform 0.3s ease;
    transition: opacity 0.3s ease, transform 0.3s ease;
    transition: opacity 0.3s ease, transform 0.3s ease,
      -webkit-transform 0.3s ease;
  }
  .ui.fade.animated.button .visible.content {
    left: auto;
    right: auto;
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .ui.fade.animated.button .hidden.content {
    opacity: 0;
    left: 0%;
    right: auto;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
  .ui.fade.animated.button:focus .visible.content,
  .ui.fade.animated.button:hover .visible.content {
    left: auto;
    right: auto;
    opacity: 0;
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
  }
  .ui.fade.animated.button:focus .hidden.content,
  .ui.fade.animated.button:hover .hidden.content {
    left: 0%;
    right: auto;
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  .ui.inverted.button {
    -webkit-box-shadow: 0px 0px 0px 2px #ffffff inset !important;
    box-shadow: 0px 0px 0px 2px #ffffff inset !important;
    background: transparent none;
    color: #ffffff;
    text-shadow: none !important;
  }

  .ui.inverted.buttons .button {
    margin: 0px 0px 0px -2px;
  }
  .ui.inverted.buttons .button:first-child {
    margin-left: 0em;
  }
  .ui.inverted.vertical.buttons .button {
    margin: 0px 0px -2px 0px;
  }
  .ui.inverted.vertical.buttons .button:first-child {
    margin-top: 0em;
  }

  .ui.inverted.button:hover {
    background: #ffffff;
    -webkit-box-shadow: 0px 0px 0px 2px #ffffff inset !important;
    box-shadow: 0px 0px 0px 2px #ffffff inset !important;
    color: rgba(0, 0, 0, 0.8);
  }

  .ui.inverted.button:focus,
  .ui.inverted.button.active {
    background: #ffffff;
    -webkit-box-shadow: 0px 0px 0px 2px #ffffff inset !important;
    box-shadow: 0px 0px 0px 2px #ffffff inset !important;
    color: rgba(0, 0, 0, 0.8);
  }

  .ui.inverted.button.active:focus {
    background: #dcddde;
    -webkit-box-shadow: 0px 0px 0px 2px #dcddde inset !important;
    box-shadow: 0px 0px 0px 2px #dcddde inset !important;
    color: rgba(0, 0, 0, 0.8);
  }

  .ui.labeled.button:not(.icon) {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    background: none !important;
    padding: 0px !important;
    border: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
  .ui.labeled.button > .button {
    margin: 0px;
  }
  .ui.labeled.button > .label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0px 0px 0px -1px !important;
    padding: "";
    font-size: 1em;
    border-color: rgba(34, 36, 38, 0.15);
  }

  .ui.labeled.button > .tag.label:before {
    width: 1.85em;
    height: 1.85em;
  }

  .ui.labeled.button:not([class*="left labeled"]) > .button {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .ui.labeled.button:not([class*="left labeled"]) > .label {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  .ui[class*="left labeled"].button > .button {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .ui[class*="left labeled"].button > .label {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .ui.facebook.button {
    background-color: #3b5998;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.facebook.button:hover {
    background-color: #304d8a;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.facebook.button:active {
    background-color: #2d4373;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.twitter.button {
    background-color: #55acee;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.twitter.button:hover {
    background-color: #35a2f4;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.twitter.button:active {
    background-color: #2795e9;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.google.plus.button {
    background-color: #dd4b39;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.google.plus.button:hover {
    background-color: #e0321c;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.google.plus.button:active {
    background-color: #c23321;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.linkedin.button {
    background-color: #1f88be;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.linkedin.button:hover {
    background-color: #147baf;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.linkedin.button:active {
    background-color: #186992;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.youtube.button {
    background-color: #ff0000;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.youtube.button:hover {
    background-color: #e60000;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.youtube.button:active {
    background-color: #cc0000;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.instagram.button {
    background-color: #49769c;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.instagram.button:hover {
    background-color: #3d698e;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.instagram.button:active {
    background-color: #395c79;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.pinterest.button {
    background-color: #bd081c;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.pinterest.button:hover {
    background-color: #ac0013;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.pinterest.button:active {
    background-color: #8c0615;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.vk.button {
    background-color: #4d7198;
    color: #ffffff;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.vk.button:hover {
    background-color: #41648a;
    color: #ffffff;
  }
  .ui.vk.button:active {
    background-color: #3c5876;
    color: #ffffff;
  }

  .ui.button > .icon:not(.button) {
    height: 0.85714286em;
    opacity: 0.8;
    margin: 0em 0.42857143em 0em -0.21428571em;
    -webkit-transition: opacity 0.1s ease;
    transition: opacity 0.1s ease;
    vertical-align: "";
    color: "";
  }
  .ui.button:not(.icon) > .icon:not(.button):not(.dropdown) {
    margin: 0em 0.42857143em 0em -0.21428571em;
  }
  .ui.button:not(.icon) > .right.icon:not(.button):not(.dropdown) {
    margin: 0em -0.21428571em 0em 0.42857143em;
  }

  .ui[class*="left floated"].buttons,
  .ui[class*="left floated"].button {
    float: left;
    margin-left: 0em;
    margin-right: 0.25em;
  }
  .ui[class*="right floated"].buttons,
  .ui[class*="right floated"].button {
    float: right;
    margin-right: 0em;
    margin-left: 0.25em;
  }

  .ui.compact.buttons .button,
  .ui.compact.button {
    padding: 7.5px 9px 7.5px;
  }
  .ui.compact.icon.buttons .button,
  .ui.compact.icon.button {
    padding: 7.5px 7.5px 7.5px;
  }
  .ui.compact.labeled.icon.buttons .button,
  .ui.compact.labeled.icon.button {
    padding: 7.5px 30px 7.5px;
  }

  .ui.mini.buttons .button,
  .ui.mini.buttons .or,
  .ui.mini.button {
    font-size: 10px;
  }
  .ui.tiny.buttons .button,
  .ui.tiny.buttons .or,
  .ui.tiny.button {
    font-size: 11px;
  }
  .ui.small.buttons .button,
  .ui.small.buttons .or,
  .ui.small.button {
    font-size: 12px;
  }
  .ui.buttons .button,
  .ui.buttons .or,
  .ui.button {
    font-size: 14px;
  }
  .ui.large.buttons .button,
  .ui.large.buttons .or,
  .ui.large.button {
    font-size: 16px;
  }
  .ui.big.buttons .button,
  .ui.big.buttons .or,
  .ui.big.button {
    font-size: 18px;
  }
  .ui.huge.buttons .button,
  .ui.huge.buttons .or,
  .ui.huge.button {
    font-size: 21px;
  }
  .ui.massive.buttons .button,
  .ui.massive.buttons .or,
  .ui.massive.button {
    font-size: 24px;
  }

  .ui.icon.buttons .button,
  .ui.icon.button {
    padding: 10px 10px 10px;
  }
  .ui.icon.buttons .button > .icon,
  .ui.icon.button > .icon {
    opacity: 0.9;
    margin: 0em !important;
    vertical-align: top;
  }

  .ui.basic.buttons .button,
  .ui.basic.button {
    background: transparent none !important;
    color: #333943 !important;
    font-weight: normal;
    border-radius: 2px;
    text-transform: none;
    text-shadow: none !important;
    -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;
    box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;
  }
  .ui.basic.buttons {
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid rgba(34, 36, 38, 0.15);
    border-radius: 2px;
  }
  .ui.basic.buttons .button {
    border-radius: 0em;
  }
  .ui.basic.buttons .button:hover,
  .ui.basic.button:hover {
    background: #ffffff !important;
    color: rgba(0, 0, 0, 0.8) !important;
    -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset,
      0px 0px 0px 0px rgba(34, 36, 38, 0.15) inset;
    box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset,
      0px 0px 0px 0px rgba(34, 36, 38, 0.15) inset;
  }
  .ui.basic.buttons .button:focus,
  .ui.basic.button:focus {
    background: #ffffff !important;
    color: rgba(0, 0, 0, 0.8) !important;
    -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset,
      0px 0px 0px 0px rgba(34, 36, 38, 0.15) inset;
    box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset,
      0px 0px 0px 0px rgba(34, 36, 38, 0.15) inset;
  }
  .ui.basic.buttons .button:active,
  .ui.basic.button:active {
    background: #f8f8f8 !important;
    color: rgba(0, 0, 0, 0.9) !important;
    -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15) inset,
      0px 1px 4px 0px rgba(34, 36, 38, 0.15) inset;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15) inset,
      0px 1px 4px 0px rgba(34, 36, 38, 0.15) inset;
  }
  .ui.basic.buttons .active.button,
  .ui.basic.active.button {
    background: rgba(0, 0, 0, 0.05) !important;
    -webkit-box-shadow: "" !important;
    box-shadow: "" !important;
    color: rgba(0, 0, 0, 0.95) !important;
  }
  .ui.basic.buttons .active.button:hover,
  .ui.basic.active.button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .ui.basic.buttons .button:hover {
    -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset,
      0px 0px 0px 0px rgba(34, 36, 38, 0.15) inset inset;
    box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset,
      0px 0px 0px 0px rgba(34, 36, 38, 0.15) inset inset;
  }
  .ui.basic.buttons .button:active {
    -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15) inset,
      0px 1px 4px 0px rgba(34, 36, 38, 0.15) inset inset;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15) inset,
      0px 1px 4px 0px rgba(34, 36, 38, 0.15) inset inset;
  }
  .ui.basic.buttons .active.button {
    -webkit-box-shadow: "" !important;
    box-shadow: "" !important;
  }

  .ui.basic.inverted.buttons .button,
  .ui.basic.inverted.button {
    background-color: transparent !important;
    color: #f9fafb !important;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  }
  .ui.basic.inverted.buttons .button:hover,
  .ui.basic.inverted.button:hover {
    color: #ffffff !important;
    -webkit-box-shadow: 0px 0px 0px 2px #ffffff inset !important;
    box-shadow: 0px 0px 0px 2px #ffffff inset !important;
  }
  .ui.basic.inverted.buttons .button:focus,
  .ui.basic.inverted.button:focus {
    color: #ffffff !important;
    -webkit-box-shadow: 0px 0px 0px 2px #ffffff inset !important;
    box-shadow: 0px 0px 0px 2px #ffffff inset !important;
  }
  .ui.basic.inverted.buttons .button:active,
  .ui.basic.inverted.button:active {
    background-color: rgba(255, 255, 255, 0.08) !important;
    color: #ffffff !important;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.9) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.9) inset !important;
  }
  .ui.basic.inverted.buttons .active.button,
  .ui.basic.inverted.active.button {
    background-color: rgba(255, 255, 255, 0.08);
    color: #ffffff;
    text-shadow: none;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.7) inset;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.7) inset;
  }
  .ui.basic.inverted.buttons .active.button:hover,
  .ui.basic.inverted.active.button:hover {
    background-color: rgba(255, 255, 255, 0.15);
    -webkit-box-shadow: 0px 0px 0px 2px #ffffff inset !important;
    box-shadow: 0px 0px 0px 2px #ffffff inset !important;
  }

  .ui.basic.buttons .button {
    border-left: 1px solid rgba(34, 36, 38, 0.15);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ui.basic.vertical.buttons .button {
    border-left: none;
  }
  .ui.basic.vertical.buttons .button {
    border-left-width: 0px;
    border-top: 1px solid rgba(34, 36, 38, 0.15);
  }
  .ui.basic.vertical.buttons .button:first-child {
    border-top-width: 0px;
  }

  .ui.labeled.icon.buttons .button,
  .ui.labeled.icon.button {
    position: relative;
    padding-left: 33px !important;
    padding-right: 12px !important;
  }

  .ui.labeled.icon.buttons > .button > .icon,
  .ui.labeled.icon.button > .icon {
    position: absolute;
    height: 100%;
    line-height: 1;
    border-radius: 0px;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    text-align: center;
    margin: 0em;
    width: 21em;
    background-color: rgba(0, 0, 0, 0.05);
    color: "";
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .ui.labeled.icon.buttons > .button > .icon,
  .ui.labeled.icon.button > .icon {
    top: 0em;
    left: 0em;
  }

  .ui[class*="right labeled"].icon.button {
    padding-right: 33px !important;
    padding-left: 12px !important;
  }
  .ui[class*="right labeled"].icon.button > .icon {
    left: auto;
    right: 0em;
    border-radius: 0px;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ui.labeled.icon.buttons > .button > .icon:before,
  .ui.labeled.icon.button > .icon:before,
  .ui.labeled.icon.buttons > .button > .icon:after,
  .ui.labeled.icon.button > .icon:after {
    display: block;
    position: absolute;
    width: 100%;
    top: 50%;
    text-align: center;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .ui.labeled.icon.buttons .button > .icon {
    border-radius: 0em;
  }
  .ui.labeled.icon.buttons .button:first-child > .icon {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
  .ui.labeled.icon.buttons .button:last-child > .icon {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  .ui.vertical.labeled.icon.buttons .button:first-child > .icon {
    border-radius: 0em;
    border-top-left-radius: 2px;
  }
  .ui.vertical.labeled.icon.buttons .button:last-child > .icon {
    border-radius: 0em;
    border-bottom-left-radius: 2px;
  }

  .ui.fluid[class*="left labeled"].icon.button,
  .ui.fluid[class*="right labeled"].icon.button {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .ui.toggle.buttons .active.button,
  .ui.buttons .button.toggle.active,
  .ui.button.toggle.active {
    background-color: #3fbe58 !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    text-shadow: none;
    color: #ffffff !important;
  }
  .ui.button.toggle.active:hover {
    background-color: #33b14c !important;
    text-shadow: none;
    color: #ffffff !important;
  }

  .ui.circular.button {
    border-radius: 10em;
  }
  .ui.circular.button > .icon {
    width: 1em;
    vertical-align: baseline;
  }

  .ui.buttons .or {
    position: relative;
    width: 0.3em;
    height: 21px;
    z-index: 3;
  }
  .ui.buttons .or:before {
    position: absolute;
    text-align: center;
    border-radius: 500rem;
    content: "or";
    top: 50%;
    left: 50%;
    background-color: #ffffff;
    text-shadow: none;
    margin-top: -5.5px;
    margin-left: -5.5px;
    width: 11px;
    height: 11px;
    line-height: 11px;
    color: rgba(0, 0, 0, 0.4);
    font-style: normal;
    font-weight: bold;
    -webkit-box-shadow: 0px 0px 0px 1px transparent inset;
    box-shadow: 0px 0px 0px 1px transparent inset;
  }
  .ui.buttons .or[data-text]:before {
    content: attr(data-text);
  }

  .ui.fluid.buttons .or {
    width: 0em !important;
  }
  .ui.fluid.buttons .or:after {
    display: none;
  }

  .ui.attached.button {
    position: relative;
    display: block;
    margin: 0em;
    border-radius: 0em;
    -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) !important;
    box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) !important;
  }

  .ui.attached.top.button {
    border-radius: 2px 2px 0em 0em;
  }
  .ui.attached.bottom.button {
    border-radius: 0em 0em 2px 2px;
  }

  .ui.left.attached.button {
    display: inline-block;
    border-left: none;
    text-align: right;
    padding-right: 0.75em;
    border-radius: 2px 0em 0em 2px;
  }
  .ui.right.attached.button {
    display: inline-block;
    text-align: left;
    padding-left: 0.75em;
    border-radius: 0em 2px 2px 0em;
  }

  .ui.attached.buttons {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 0em;
    width: auto !important;
    z-index: 2;
    margin-left: -1px;
    margin-right: -1px;
  }
  .ui.attached.buttons .button {
    margin: 0em;
  }
  .ui.attached.buttons .button:first-child {
    border-radius: 0em;
  }
  .ui.attached.buttons .button:last-child {
    border-radius: 0em;
  }

  .ui[class*="top attached"].buttons {
    margin-bottom: -1px;
    border-radius: 2px 2px 0em 0em;
  }
  .ui[class*="top attached"].buttons .button:first-child {
    border-radius: 2px 0em 0em 0em;
  }
  .ui[class*="top attached"].buttons .button:last-child {
    border-radius: 0em 2px 0em 0em;
  }
  .ui[class*="bottom attached"].buttons {
    margin-top: -1px;
    border-radius: 0em 0em 2px 2px;
  }
  .ui[class*="bottom attached"].buttons .button:first-child {
    border-radius: 0em 0em 0em 2px;
  }
  .ui[class*="bottom attached"].buttons .button:last-child {
    border-radius: 0em 0em 2px 0em;
  }

  .ui[class*="left attached"].buttons {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    margin-right: 0em;
    margin-left: -1px;
    border-radius: 0em 2px 2px 0em;
  }
  .ui[class*="left attached"].buttons .button:first-child {
    margin-left: -1px;
    border-radius: 0em 2px 0em 0em;
  }
  .ui[class*="left attached"].buttons .button:last-child {
    margin-left: -1px;
    border-radius: 0em 0em 2px 0em;
  }
  .ui[class*="right attached"].buttons {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    margin-left: 0em;
    margin-right: -1px;
    border-radius: 2px 0em 0em 2px;
  }
  .ui[class*="right attached"].buttons .button:first-child {
    margin-left: -1px;
    border-radius: 2px 0em 0em 0em;
  }
  .ui[class*="right attached"].buttons .button:last-child {
    margin-left: -1px;
    border-radius: 0em 0em 0em 2px;
  }

  .ui.fluid.buttons,
  .ui.fluid.button {
    width: 100%;
  }
  .ui.fluid.button {
    display: block;
  }
  .ui.two.buttons {
    width: 100%;
  }
  .ui.two.buttons > .button {
    width: 50%;
  }
  .ui.three.buttons {
    width: 100%;
  }
  .ui.three.buttons > .button {
    width: 33.333%;
  }
  .ui.four.buttons {
    width: 100%;
  }
  .ui.four.buttons > .button {
    width: 25%;
  }
  .ui.five.buttons {
    width: 100%;
  }
  .ui.five.buttons > .button {
    width: 20%;
  }
  .ui.six.buttons {
    width: 100%;
  }
  .ui.six.buttons > .button {
    width: 16.666%;
  }
  .ui.seven.buttons {
    width: 100%;
  }
  .ui.seven.buttons > .button {
    width: 14.285%;
  }
  .ui.eight.buttons {
    width: 100%;
  }
  .ui.eight.buttons > .button {
    width: 12.5%;
  }
  .ui.nine.buttons {
    width: 100%;
  }
  .ui.nine.buttons > .button {
    width: 11.11%;
  }
  .ui.ten.buttons {
    width: 100%;
  }
  .ui.ten.buttons > .button {
    width: 10%;
  }
  .ui.eleven.buttons {
    width: 100%;
  }
  .ui.eleven.buttons > .button {
    width: 9.09%;
  }
  .ui.twelve.buttons {
    width: 100%;
  }
  .ui.twelve.buttons > .button {
    width: 8.3333%;
  }

  .ui.fluid.vertical.buttons,
  .ui.fluid.vertical.buttons > .button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: auto;
  }
  .ui.two.vertical.buttons > .button {
    height: 50%;
  }
  .ui.three.vertical.buttons > .button {
    height: 33.333%;
  }
  .ui.four.vertical.buttons > .button {
    height: 25%;
  }
  .ui.five.vertical.buttons > .button {
    height: 20%;
  }
  .ui.six.vertical.buttons > .button {
    height: 16.666%;
  }
  .ui.seven.vertical.buttons > .button {
    height: 14.285%;
  }
  .ui.eight.vertical.buttons > .button {
    height: 12.5%;
  }
  .ui.nine.vertical.buttons > .button {
    height: 11.11%;
  }
  .ui.ten.vertical.buttons > .button {
    height: 10%;
  }
  .ui.eleven.vertical.buttons > .button {
    height: 9.09%;
  }
  .ui.twelve.vertical.buttons > .button {
    height: 8.3333%;
  }

  .ui.black.buttons .button,
  .ui.black.button {
    background-color: #333943;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.black.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.black.buttons .button:hover,
  .ui.black.button:hover {
    background-color: #3e4551;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.black.buttons .button:focus,
  .ui.black.button:focus {
    background-color: #454d5a;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.black.buttons .button:active,
  .ui.black.button:active {
    background-color: #495260;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.black.buttons .active.button,
  .ui.black.buttons .active.button:active,
  .ui.black.active.button,
  .ui.black.button .active.button:active {
    background-color: #282d35;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.black.buttons .button,
  .ui.basic.black.button {
    -webkit-box-shadow: 0px 0px 0px 1px #333943 inset !important;
    box-shadow: 0px 0px 0px 1px #333943 inset !important;
    color: #333943 !important;
  }
  .ui.basic.black.buttons .button:hover,
  .ui.basic.black.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #3e4551 inset !important;
    box-shadow: 0px 0px 0px 1px #3e4551 inset !important;
    color: #3e4551 !important;
  }
  .ui.basic.black.buttons .button:focus,
  .ui.basic.black.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #454d5a inset !important;
    box-shadow: 0px 0px 0px 1px #454d5a inset !important;
    color: #3e4551 !important;
  }
  .ui.basic.black.buttons .active.button,
  .ui.basic.black.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #282d35 inset !important;
    box-shadow: 0px 0px 0px 1px #282d35 inset !important;
    color: #495260 !important;
  }
  .ui.basic.black.buttons .button:active,
  .ui.basic.black.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #495260 inset !important;
    box-shadow: 0px 0px 0px 1px #495260 inset !important;
    color: #495260 !important;
  }
  .ui.buttons:not(.vertical) > .basic.black.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.inverted.black.buttons .button,
  .ui.inverted.black.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px #d4d4d5 inset !important;
    box-shadow: 0px 0px 0px 2px #d4d4d5 inset !important;
    color: #ffffff;
  }
  .ui.inverted.black.buttons .button:hover,
  .ui.inverted.black.button:hover,
  .ui.inverted.black.buttons .button:focus,
  .ui.inverted.black.button:focus,
  .ui.inverted.black.buttons .button.active,
  .ui.inverted.black.button.active,
  .ui.inverted.black.buttons .button:active,
  .ui.inverted.black.button:active {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #ffffff;
  }
  .ui.inverted.black.buttons .button:hover,
  .ui.inverted.black.button:hover {
    background-color: #000000;
  }
  .ui.inverted.black.buttons .button:focus,
  .ui.inverted.black.button:focus {
    background-color: #000000;
  }
  .ui.inverted.black.buttons .active.button,
  .ui.inverted.black.active.button {
    background-color: #000000;
  }
  .ui.inverted.black.buttons .button:active,
  .ui.inverted.black.button:active {
    background-color: #000000;
  }

  .ui.inverted.black.basic.buttons .button,
  .ui.inverted.black.buttons .basic.button,
  .ui.inverted.black.basic.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.black.basic.buttons .button:hover,
  .ui.inverted.black.buttons .basic.button:hover,
  .ui.inverted.black.basic.button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #000000 inset !important;
    box-shadow: 0px 0px 0px 2px #000000 inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.black.basic.buttons .button:focus,
  .ui.inverted.black.basic.buttons .button:focus,
  .ui.inverted.black.basic.button:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #000000 inset !important;
    box-shadow: 0px 0px 0px 2px #000000 inset !important;
    color: #575c65 !important;
  }
  .ui.inverted.black.basic.buttons .active.button,
  .ui.inverted.black.buttons .basic.active.button,
  .ui.inverted.black.basic.active.button {
    -webkit-box-shadow: 0px 0px 0px 2px #000000 inset !important;
    box-shadow: 0px 0px 0px 2px #000000 inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.black.basic.buttons .button:active,
  .ui.inverted.black.buttons .basic.button:active,
  .ui.inverted.black.basic.button:active {
    -webkit-box-shadow: 0px 0px 0px 2px #000000 inset !important;
    box-shadow: 0px 0px 0px 2px #000000 inset !important;
    color: #ffffff !important;
  }

  .ui.grey.buttons .button,
  .ui.grey.button {
    background-color: #80858e;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.grey.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.grey.buttons .button:hover,
  .ui.grey.button:hover {
    background-color: #8d929a;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.grey.buttons .button:focus,
  .ui.grey.button:focus {
    background-color: #969aa1;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.grey.buttons .button:active,
  .ui.grey.button:active {
    background-color: #9b9fa6;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.grey.buttons .active.button,
  .ui.grey.buttons .active.button:active,
  .ui.grey.active.button,
  .ui.grey.button .active.button:active {
    background-color: #737881;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.grey.buttons .button,
  .ui.basic.grey.button {
    -webkit-box-shadow: 0px 0px 0px 1px #80858e inset !important;
    box-shadow: 0px 0px 0px 1px #80858e inset !important;
    color: #80858e !important;
  }
  .ui.basic.grey.buttons .button:hover,
  .ui.basic.grey.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #8d929a inset !important;
    box-shadow: 0px 0px 0px 1px #8d929a inset !important;
    color: #8d929a !important;
  }
  .ui.basic.grey.buttons .button:focus,
  .ui.basic.grey.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #969aa1 inset !important;
    box-shadow: 0px 0px 0px 1px #969aa1 inset !important;
    color: #8d929a !important;
  }
  .ui.basic.grey.buttons .active.button,
  .ui.basic.grey.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #737881 inset !important;
    box-shadow: 0px 0px 0px 1px #737881 inset !important;
    color: #9b9fa6 !important;
  }
  .ui.basic.grey.buttons .button:active,
  .ui.basic.grey.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #9b9fa6 inset !important;
    box-shadow: 0px 0px 0px 1px #9b9fa6 inset !important;
    color: #9b9fa6 !important;
  }
  .ui.buttons:not(.vertical) > .basic.grey.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.inverted.grey.buttons .button,
  .ui.inverted.grey.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px #d4d4d5 inset !important;
    box-shadow: 0px 0px 0px 2px #d4d4d5 inset !important;
    color: #ffffff;
  }
  .ui.inverted.grey.buttons .button:hover,
  .ui.inverted.grey.button:hover,
  .ui.inverted.grey.buttons .button:focus,
  .ui.inverted.grey.button:focus,
  .ui.inverted.grey.buttons .button.active,
  .ui.inverted.grey.button.active,
  .ui.inverted.grey.buttons .button:active,
  .ui.inverted.grey.button:active {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #333943;
  }
  .ui.inverted.grey.buttons .button:hover,
  .ui.inverted.grey.button:hover {
    background-color: #8a8f99;
  }
  .ui.inverted.grey.buttons .button:focus,
  .ui.inverted.grey.button:focus {
    background-color: #818792;
  }
  .ui.inverted.grey.buttons .active.button,
  .ui.inverted.grey.active.button {
    background-color: #898f99;
  }
  .ui.inverted.grey.buttons .button:active,
  .ui.inverted.grey.button:active {
    background-color: #7d828c;
  }

  .ui.inverted.grey.basic.buttons .button,
  .ui.inverted.grey.buttons .basic.button,
  .ui.inverted.grey.basic.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.grey.basic.buttons .button:hover,
  .ui.inverted.grey.buttons .basic.button:hover,
  .ui.inverted.grey.basic.button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #8a8f99 inset !important;
    box-shadow: 0px 0px 0px 2px #8a8f99 inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.grey.basic.buttons .button:focus,
  .ui.inverted.grey.basic.buttons .button:focus,
  .ui.inverted.grey.basic.button:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #818792 inset !important;
    box-shadow: 0px 0px 0px 2px #818792 inset !important;
    color: #989ca4 !important;
  }
  .ui.inverted.grey.basic.buttons .active.button,
  .ui.inverted.grey.buttons .basic.active.button,
  .ui.inverted.grey.basic.active.button {
    -webkit-box-shadow: 0px 0px 0px 2px #898f99 inset !important;
    box-shadow: 0px 0px 0px 2px #898f99 inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.grey.basic.buttons .button:active,
  .ui.inverted.grey.buttons .basic.button:active,
  .ui.inverted.grey.basic.button:active {
    -webkit-box-shadow: 0px 0px 0px 2px #7d828c inset !important;
    box-shadow: 0px 0px 0px 2px #7d828c inset !important;
    color: #ffffff !important;
  }

  .ui.brown.buttons .button,
  .ui.brown.button {
    background-color: #a5673f;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.brown.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.brown.buttons .button:hover,
  .ui.brown.button:hover {
    background-color: #975b33;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.brown.buttons .button:focus,
  .ui.brown.button:focus {
    background-color: #90532b;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.brown.buttons .button:active,
  .ui.brown.button:active {
    background-color: #805031;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.brown.buttons .active.button,
  .ui.brown.buttons .active.button:active,
  .ui.brown.active.button,
  .ui.brown.button .active.button:active {
    background-color: #995a31;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.brown.buttons .button,
  .ui.basic.brown.button {
    -webkit-box-shadow: 0px 0px 0px 1px #a5673f inset !important;
    box-shadow: 0px 0px 0px 1px #a5673f inset !important;
    color: #a5673f !important;
  }
  .ui.basic.brown.buttons .button:hover,
  .ui.basic.brown.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #975b33 inset !important;
    box-shadow: 0px 0px 0px 1px #975b33 inset !important;
    color: #975b33 !important;
  }
  .ui.basic.brown.buttons .button:focus,
  .ui.basic.brown.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #90532b inset !important;
    box-shadow: 0px 0px 0px 1px #90532b inset !important;
    color: #975b33 !important;
  }
  .ui.basic.brown.buttons .active.button,
  .ui.basic.brown.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #995a31 inset !important;
    box-shadow: 0px 0px 0px 1px #995a31 inset !important;
    color: #805031 !important;
  }
  .ui.basic.brown.buttons .button:active,
  .ui.basic.brown.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #805031 inset !important;
    box-shadow: 0px 0px 0px 1px #805031 inset !important;
    color: #805031 !important;
  }
  .ui.buttons:not(.vertical) > .basic.brown.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.inverted.brown.buttons .button,
  .ui.inverted.brown.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px #d67c1c inset !important;
    box-shadow: 0px 0px 0px 2px #d67c1c inset !important;
    color: #d67c1c;
  }
  .ui.inverted.brown.buttons .button:hover,
  .ui.inverted.brown.button:hover,
  .ui.inverted.brown.buttons .button:focus,
  .ui.inverted.brown.button:focus,
  .ui.inverted.brown.buttons .button.active,
  .ui.inverted.brown.button.active,
  .ui.inverted.brown.buttons .button:active,
  .ui.inverted.brown.button:active {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #ffffff;
  }
  .ui.inverted.brown.buttons .button:hover,
  .ui.inverted.brown.button:hover {
    background-color: #c86f11;
  }
  .ui.inverted.brown.buttons .button:focus,
  .ui.inverted.brown.button:focus {
    background-color: #c16808;
  }
  .ui.inverted.brown.buttons .active.button,
  .ui.inverted.brown.active.button {
    background-color: #cc6f0d;
  }
  .ui.inverted.brown.buttons .button:active,
  .ui.inverted.brown.button:active {
    background-color: #a96216;
  }

  .ui.inverted.brown.basic.buttons .button,
  .ui.inverted.brown.buttons .basic.button,
  .ui.inverted.brown.basic.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.brown.basic.buttons .button:hover,
  .ui.inverted.brown.buttons .basic.button:hover,
  .ui.inverted.brown.basic.button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #c86f11 inset !important;
    box-shadow: 0px 0px 0px 2px #c86f11 inset !important;
    color: #d67c1c !important;
  }
  .ui.inverted.brown.basic.buttons .button:focus,
  .ui.inverted.brown.basic.buttons .button:focus,
  .ui.inverted.brown.basic.button:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #c16808 inset !important;
    box-shadow: 0px 0px 0px 2px #c16808 inset !important;
    color: #d67c1c !important;
  }
  .ui.inverted.brown.basic.buttons .active.button,
  .ui.inverted.brown.buttons .basic.active.button,
  .ui.inverted.brown.basic.active.button {
    -webkit-box-shadow: 0px 0px 0px 2px #cc6f0d inset !important;
    box-shadow: 0px 0px 0px 2px #cc6f0d inset !important;
    color: #d67c1c !important;
  }
  .ui.inverted.brown.basic.buttons .button:active,
  .ui.inverted.brown.buttons .basic.button:active,
  .ui.inverted.brown.basic.button:active {
    -webkit-box-shadow: 0px 0px 0px 2px #a96216 inset !important;
    box-shadow: 0px 0px 0px 2px #a96216 inset !important;
    color: #d67c1c !important;
  }

  .ui.blue.buttons .button,
  .ui.blue.button {
    background-color: #218ae3;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.blue.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.blue.buttons .button:hover,
  .ui.blue.button:hover {
    background-color: #117ed9;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.blue.buttons .button:focus,
  .ui.blue.button:focus {
    background-color: #0876d4;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.blue.buttons .button:active,
  .ui.blue.button:active {
    background-color: #176fba;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.blue.buttons .active.button,
  .ui.blue.buttons .active.button:active,
  .ui.blue.active.button,
  .ui.blue.button .active.button:active {
    background-color: #0d7ede;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.blue.buttons .button,
  .ui.basic.blue.button {
    -webkit-box-shadow: 0px 0px 0px 1px #218ae3 inset !important;
    box-shadow: 0px 0px 0px 1px #218ae3 inset !important;
    color: #218ae3 !important;
  }
  .ui.basic.blue.buttons .button:hover,
  .ui.basic.blue.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #117ed9 inset !important;
    box-shadow: 0px 0px 0px 1px #117ed9 inset !important;
    color: #117ed9 !important;
  }
  .ui.basic.blue.buttons .button:focus,
  .ui.basic.blue.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #0876d4 inset !important;
    box-shadow: 0px 0px 0px 1px #0876d4 inset !important;
    color: #117ed9 !important;
  }
  .ui.basic.blue.buttons .active.button,
  .ui.basic.blue.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #0d7ede inset !important;
    box-shadow: 0px 0px 0px 1px #0d7ede inset !important;
    color: #176fba !important;
  }
  .ui.basic.blue.buttons .button:active,
  .ui.basic.blue.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #176fba inset !important;
    box-shadow: 0px 0px 0px 1px #176fba inset !important;
    color: #176fba !important;
  }
  .ui.buttons:not(.vertical) > .basic.blue.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.inverted.blue.buttons .button,
  .ui.inverted.blue.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px #68a0e9 inset !important;
    box-shadow: 0px 0px 0px 2px #68a0e9 inset !important;
    color: #68a0e9;
  }
  .ui.inverted.blue.buttons .button:hover,
  .ui.inverted.blue.button:hover,
  .ui.inverted.blue.buttons .button:focus,
  .ui.inverted.blue.button:focus,
  .ui.inverted.blue.buttons .button.active,
  .ui.inverted.blue.button.active,
  .ui.inverted.blue.buttons .button:active,
  .ui.inverted.blue.button:active {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #ffffff;
  }
  .ui.inverted.blue.buttons .button:hover,
  .ui.inverted.blue.button:hover {
    background-color: #4a91ed;
  }
  .ui.inverted.blue.buttons .button:focus,
  .ui.inverted.blue.button:focus {
    background-color: #3487f4;
  }
  .ui.inverted.blue.buttons .active.button,
  .ui.inverted.blue.active.button {
    background-color: #4791f1;
  }
  .ui.inverted.blue.buttons .button:active,
  .ui.inverted.blue.button:active {
    background-color: #3b84e3;
  }

  .ui.inverted.blue.basic.buttons .button,
  .ui.inverted.blue.buttons .basic.button,
  .ui.inverted.blue.basic.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.blue.basic.buttons .button:hover,
  .ui.inverted.blue.buttons .basic.button:hover,
  .ui.inverted.blue.basic.button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #4a91ed inset !important;
    box-shadow: 0px 0px 0px 2px #4a91ed inset !important;
    color: #68a0e9 !important;
  }
  .ui.inverted.blue.basic.buttons .button:focus,
  .ui.inverted.blue.basic.buttons .button:focus,
  .ui.inverted.blue.basic.button:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #3487f4 inset !important;
    box-shadow: 0px 0px 0px 2px #3487f4 inset !important;
    color: #68a0e9 !important;
  }
  .ui.inverted.blue.basic.buttons .active.button,
  .ui.inverted.blue.buttons .basic.active.button,
  .ui.inverted.blue.basic.active.button {
    -webkit-box-shadow: 0px 0px 0px 2px #4791f1 inset !important;
    box-shadow: 0px 0px 0px 2px #4791f1 inset !important;
    color: #68a0e9 !important;
  }
  .ui.inverted.blue.basic.buttons .button:active,
  .ui.inverted.blue.buttons .basic.button:active,
  .ui.inverted.blue.basic.button:active {
    -webkit-box-shadow: 0px 0px 0px 2px #3b84e3 inset !important;
    box-shadow: 0px 0px 0px 2px #3b84e3 inset !important;
    color: #68a0e9 !important;
  }

  .ui.green.buttons .button,
  .ui.green.button {
    background-color: #3fbe58;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.green.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.green.buttons .button:hover,
  .ui.green.button:hover {
    background-color: #33b14c;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.green.buttons .button:focus,
  .ui.green.button:focus {
    background-color: #2aaa43;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.green.buttons .button:active,
  .ui.green.button:active {
    background-color: #329846;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.green.buttons .active.button,
  .ui.green.buttons .active.button:active,
  .ui.green.active.button,
  .ui.green.button .active.button:active {
    background-color: #30b34a;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.green.buttons .button,
  .ui.basic.green.button {
    -webkit-box-shadow: 0px 0px 0px 1px #3fbe58 inset !important;
    box-shadow: 0px 0px 0px 1px #3fbe58 inset !important;
    color: #3fbe58 !important;
  }
  .ui.basic.green.buttons .button:hover,
  .ui.basic.green.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #33b14c inset !important;
    box-shadow: 0px 0px 0px 1px #33b14c inset !important;
    color: #33b14c !important;
  }
  .ui.basic.green.buttons .button:focus,
  .ui.basic.green.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #2aaa43 inset !important;
    box-shadow: 0px 0px 0px 1px #2aaa43 inset !important;
    color: #33b14c !important;
  }
  .ui.basic.green.buttons .active.button,
  .ui.basic.green.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #30b34a inset !important;
    box-shadow: 0px 0px 0px 1px #30b34a inset !important;
    color: #329846 !important;
  }
  .ui.basic.green.buttons .button:active,
  .ui.basic.green.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #329846 inset !important;
    box-shadow: 0px 0px 0px 1px #329846 inset !important;
    color: #329846 !important;
  }
  .ui.buttons:not(.vertical) > .basic.green.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.inverted.green.buttons .button,
  .ui.inverted.green.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px #6fcc79 inset !important;
    box-shadow: 0px 0px 0px 2px #6fcc79 inset !important;
    color: #6fcc79;
  }
  .ui.inverted.green.buttons .button:hover,
  .ui.inverted.green.button:hover,
  .ui.inverted.green.buttons .button:focus,
  .ui.inverted.green.button:focus,
  .ui.inverted.green.buttons .button.active,
  .ui.inverted.green.button.active,
  .ui.inverted.green.buttons .button:active,
  .ui.inverted.green.button:active {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #ffffff;
  }
  .ui.inverted.green.buttons .button:hover,
  .ui.inverted.green.button:hover {
    background-color: #57cb63;
  }
  .ui.inverted.green.buttons .button:focus,
  .ui.inverted.green.button:focus {
    background-color: #46cd54;
  }
  .ui.inverted.green.buttons .active.button,
  .ui.inverted.green.active.button {
    background-color: #54cd61;
  }
  .ui.inverted.green.buttons .button:active,
  .ui.inverted.green.button:active {
    background-color: #49bf56;
  }

  .ui.inverted.green.basic.buttons .button,
  .ui.inverted.green.buttons .basic.button,
  .ui.inverted.green.basic.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.green.basic.buttons .button:hover,
  .ui.inverted.green.buttons .basic.button:hover,
  .ui.inverted.green.basic.button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #57cb63 inset !important;
    box-shadow: 0px 0px 0px 2px #57cb63 inset !important;
    color: #6fcc79 !important;
  }
  .ui.inverted.green.basic.buttons .button:focus,
  .ui.inverted.green.basic.buttons .button:focus,
  .ui.inverted.green.basic.button:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #46cd54 inset !important;
    box-shadow: 0px 0px 0px 2px #46cd54 inset !important;
    color: #6fcc79 !important;
  }
  .ui.inverted.green.basic.buttons .active.button,
  .ui.inverted.green.buttons .basic.active.button,
  .ui.inverted.green.basic.active.button {
    -webkit-box-shadow: 0px 0px 0px 2px #54cd61 inset !important;
    box-shadow: 0px 0px 0px 2px #54cd61 inset !important;
    color: #6fcc79 !important;
  }
  .ui.inverted.green.basic.buttons .button:active,
  .ui.inverted.green.buttons .basic.button:active,
  .ui.inverted.green.basic.button:active {
    -webkit-box-shadow: 0px 0px 0px 2px #49bf56 inset !important;
    box-shadow: 0px 0px 0px 2px #49bf56 inset !important;
    color: #6fcc79 !important;
  }

  .ui.orange.buttons .button,
  .ui.orange.button {
    background-color: #f87e17;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.orange.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.orange.buttons .button:hover,
  .ui.orange.button:hover {
    background-color: #f67000;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.orange.buttons .button:focus,
  .ui.orange.button:focus {
    background-color: #e66900;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.orange.buttons .button:active,
  .ui.orange.button:active {
    background-color: #d66506;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.orange.buttons .active.button,
  .ui.orange.buttons .active.button:active,
  .ui.orange.active.button,
  .ui.orange.button .active.button:active {
    background-color: #f67000;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.orange.buttons .button,
  .ui.basic.orange.button {
    -webkit-box-shadow: 0px 0px 0px 1px #f87e17 inset !important;
    box-shadow: 0px 0px 0px 1px #f87e17 inset !important;
    color: #f87e17 !important;
  }
  .ui.basic.orange.buttons .button:hover,
  .ui.basic.orange.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #f67000 inset !important;
    box-shadow: 0px 0px 0px 1px #f67000 inset !important;
    color: #f67000 !important;
  }
  .ui.basic.orange.buttons .button:focus,
  .ui.basic.orange.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #e66900 inset !important;
    box-shadow: 0px 0px 0px 1px #e66900 inset !important;
    color: #f67000 !important;
  }
  .ui.basic.orange.buttons .active.button,
  .ui.basic.orange.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #f67000 inset !important;
    box-shadow: 0px 0px 0px 1px #f67000 inset !important;
    color: #d66506 !important;
  }
  .ui.basic.orange.buttons .button:active,
  .ui.basic.orange.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #d66506 inset !important;
    box-shadow: 0px 0px 0px 1px #d66506 inset !important;
    color: #d66506 !important;
  }
  .ui.buttons:not(.vertical) > .basic.orange.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.inverted.orange.buttons .button,
  .ui.inverted.orange.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px #ff984d inset !important;
    box-shadow: 0px 0px 0px 2px #ff984d inset !important;
    color: #ff984d;
  }
  .ui.inverted.orange.buttons .button:hover,
  .ui.inverted.orange.button:hover,
  .ui.inverted.orange.buttons .button:focus,
  .ui.inverted.orange.button:focus,
  .ui.inverted.orange.buttons .button.active,
  .ui.inverted.orange.button.active,
  .ui.inverted.orange.buttons .button:active,
  .ui.inverted.orange.button:active {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #ffffff;
  }
  .ui.inverted.orange.buttons .button:hover,
  .ui.inverted.orange.button:hover {
    background-color: #ff8933;
  }
  .ui.inverted.orange.buttons .button:focus,
  .ui.inverted.orange.button:focus {
    background-color: #ff8024;
  }
  .ui.inverted.orange.buttons .active.button,
  .ui.inverted.orange.active.button {
    background-color: #ff8933;
  }
  .ui.inverted.orange.buttons .button:active,
  .ui.inverted.orange.button:active {
    background-color: #ff7a1a;
  }

  .ui.inverted.orange.basic.buttons .button,
  .ui.inverted.orange.buttons .basic.button,
  .ui.inverted.orange.basic.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.orange.basic.buttons .button:hover,
  .ui.inverted.orange.buttons .basic.button:hover,
  .ui.inverted.orange.basic.button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #ff8933 inset !important;
    box-shadow: 0px 0px 0px 2px #ff8933 inset !important;
    color: #ff984d !important;
  }
  .ui.inverted.orange.basic.buttons .button:focus,
  .ui.inverted.orange.basic.buttons .button:focus,
  .ui.inverted.orange.basic.button:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #ff8024 inset !important;
    box-shadow: 0px 0px 0px 2px #ff8024 inset !important;
    color: #ff984d !important;
  }
  .ui.inverted.orange.basic.buttons .active.button,
  .ui.inverted.orange.buttons .basic.active.button,
  .ui.inverted.orange.basic.active.button {
    -webkit-box-shadow: 0px 0px 0px 2px #ff8933 inset !important;
    box-shadow: 0px 0px 0px 2px #ff8933 inset !important;
    color: #ff984d !important;
  }
  .ui.inverted.orange.basic.buttons .button:active,
  .ui.inverted.orange.buttons .basic.button:active,
  .ui.inverted.orange.basic.button:active {
    -webkit-box-shadow: 0px 0px 0px 2px #ff7a1a inset !important;
    box-shadow: 0px 0px 0px 2px #ff7a1a inset !important;
    color: #ff984d !important;
  }

  .ui.pink.buttons .button,
  .ui.pink.button {
    background-color: #e03997;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.pink.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.pink.buttons .button:hover,
  .ui.pink.button:hover {
    background-color: #e61a8d;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.pink.buttons .button:focus,
  .ui.pink.button:focus {
    background-color: #e10f85;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.pink.buttons .button:active,
  .ui.pink.button:active {
    background-color: #c71f7e;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.pink.buttons .active.button,
  .ui.pink.buttons .active.button:active,
  .ui.pink.active.button,
  .ui.pink.button .active.button:active {
    background-color: #ea158d;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.pink.buttons .button,
  .ui.basic.pink.button {
    -webkit-box-shadow: 0px 0px 0px 1px #e03997 inset !important;
    box-shadow: 0px 0px 0px 1px #e03997 inset !important;
    color: #e03997 !important;
  }
  .ui.basic.pink.buttons .button:hover,
  .ui.basic.pink.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #e61a8d inset !important;
    box-shadow: 0px 0px 0px 1px #e61a8d inset !important;
    color: #e61a8d !important;
  }
  .ui.basic.pink.buttons .button:focus,
  .ui.basic.pink.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #e10f85 inset !important;
    box-shadow: 0px 0px 0px 1px #e10f85 inset !important;
    color: #e61a8d !important;
  }
  .ui.basic.pink.buttons .active.button,
  .ui.basic.pink.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #ea158d inset !important;
    box-shadow: 0px 0px 0px 1px #ea158d inset !important;
    color: #c71f7e !important;
  }
  .ui.basic.pink.buttons .button:active,
  .ui.basic.pink.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #c71f7e inset !important;
    box-shadow: 0px 0px 0px 1px #c71f7e inset !important;
    color: #c71f7e !important;
  }
  .ui.buttons:not(.vertical) > .basic.pink.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.inverted.pink.buttons .button,
  .ui.inverted.pink.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px #ea6aab inset !important;
    box-shadow: 0px 0px 0px 2px #ea6aab inset !important;
    color: #ea6aab;
  }
  .ui.inverted.pink.buttons .button:hover,
  .ui.inverted.pink.button:hover,
  .ui.inverted.pink.buttons .button:focus,
  .ui.inverted.pink.button:focus,
  .ui.inverted.pink.buttons .button.active,
  .ui.inverted.pink.button.active,
  .ui.inverted.pink.buttons .button:active,
  .ui.inverted.pink.button:active {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #ffffff;
  }
  .ui.inverted.pink.buttons .button:hover,
  .ui.inverted.pink.button:hover {
    background-color: #ee4c9f;
  }
  .ui.inverted.pink.buttons .button:focus,
  .ui.inverted.pink.button:focus {
    background-color: #f53697;
  }
  .ui.inverted.pink.buttons .active.button,
  .ui.inverted.pink.active.button {
    background-color: #f2499f;
  }
  .ui.inverted.pink.buttons .button:active,
  .ui.inverted.pink.button:active {
    background-color: #e43d92;
  }

  .ui.inverted.pink.basic.buttons .button,
  .ui.inverted.pink.buttons .basic.button,
  .ui.inverted.pink.basic.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.pink.basic.buttons .button:hover,
  .ui.inverted.pink.buttons .basic.button:hover,
  .ui.inverted.pink.basic.button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #ee4c9f inset !important;
    box-shadow: 0px 0px 0px 2px #ee4c9f inset !important;
    color: #ea6aab !important;
  }
  .ui.inverted.pink.basic.buttons .button:focus,
  .ui.inverted.pink.basic.buttons .button:focus,
  .ui.inverted.pink.basic.button:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #f53697 inset !important;
    box-shadow: 0px 0px 0px 2px #f53697 inset !important;
    color: #ea6aab !important;
  }
  .ui.inverted.pink.basic.buttons .active.button,
  .ui.inverted.pink.buttons .basic.active.button,
  .ui.inverted.pink.basic.active.button {
    -webkit-box-shadow: 0px 0px 0px 2px #f2499f inset !important;
    box-shadow: 0px 0px 0px 2px #f2499f inset !important;
    color: #ea6aab !important;
  }
  .ui.inverted.pink.basic.buttons .button:active,
  .ui.inverted.pink.buttons .basic.button:active,
  .ui.inverted.pink.basic.button:active {
    -webkit-box-shadow: 0px 0px 0px 2px #e43d92 inset !important;
    box-shadow: 0px 0px 0px 2px #e43d92 inset !important;
    color: #ea6aab !important;
  }

  .ui.violet.buttons .button,
  .ui.violet.button {
    background-color: #7048e8;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.violet.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.violet.buttons .button:hover,
  .ui.violet.button:hover {
    background-color: #5a28ee;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.violet.buttons .button:focus,
  .ui.violet.button:focus {
    background-color: #4a11f7;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.violet.buttons .button:active,
  .ui.violet.button:active {
    background-color: #4d1ce1;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.violet.buttons .active.button,
  .ui.violet.buttons .active.button:active,
  .ui.violet.active.button,
  .ui.violet.button .active.button:active {
    background-color: #5824f3;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.violet.buttons .button,
  .ui.basic.violet.button {
    -webkit-box-shadow: 0px 0px 0px 1px #7048e8 inset !important;
    box-shadow: 0px 0px 0px 1px #7048e8 inset !important;
    color: #7048e8 !important;
  }
  .ui.basic.violet.buttons .button:hover,
  .ui.basic.violet.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #5a28ee inset !important;
    box-shadow: 0px 0px 0px 1px #5a28ee inset !important;
    color: #5a28ee !important;
  }
  .ui.basic.violet.buttons .button:focus,
  .ui.basic.violet.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #4a11f7 inset !important;
    box-shadow: 0px 0px 0px 1px #4a11f7 inset !important;
    color: #5a28ee !important;
  }
  .ui.basic.violet.buttons .active.button,
  .ui.basic.violet.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #5824f3 inset !important;
    box-shadow: 0px 0px 0px 1px #5824f3 inset !important;
    color: #4d1ce1 !important;
  }
  .ui.basic.violet.buttons .button:active,
  .ui.basic.violet.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #4d1ce1 inset !important;
    box-shadow: 0px 0px 0px 1px #4d1ce1 inset !important;
    color: #4d1ce1 !important;
  }
  .ui.buttons:not(.vertical) > .basic.violet.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.inverted.violet.buttons .button,
  .ui.inverted.violet.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px #946cee inset !important;
    box-shadow: 0px 0px 0px 2px #946cee inset !important;
    color: #946cee;
  }
  .ui.inverted.violet.buttons .button:hover,
  .ui.inverted.violet.button:hover,
  .ui.inverted.violet.buttons .button:focus,
  .ui.inverted.violet.button:focus,
  .ui.inverted.violet.buttons .button.active,
  .ui.inverted.violet.button.active,
  .ui.inverted.violet.buttons .button:active,
  .ui.inverted.violet.button:active {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #ffffff;
  }
  .ui.inverted.violet.buttons .button:hover,
  .ui.inverted.violet.button:hover {
    background-color: #804ef3;
  }
  .ui.inverted.violet.buttons .button:focus,
  .ui.inverted.violet.button:focus {
    background-color: #7337fa;
  }
  .ui.inverted.violet.buttons .active.button,
  .ui.inverted.violet.active.button {
    background-color: #7f4af7;
  }
  .ui.inverted.violet.buttons .button:active,
  .ui.inverted.violet.button:active {
    background-color: #733ee9;
  }

  .ui.inverted.violet.basic.buttons .button,
  .ui.inverted.violet.buttons .basic.button,
  .ui.inverted.violet.basic.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.violet.basic.buttons .button:hover,
  .ui.inverted.violet.buttons .basic.button:hover,
  .ui.inverted.violet.basic.button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #804ef3 inset !important;
    box-shadow: 0px 0px 0px 2px #804ef3 inset !important;
    color: #946cee !important;
  }
  .ui.inverted.violet.basic.buttons .button:focus,
  .ui.inverted.violet.basic.buttons .button:focus,
  .ui.inverted.violet.basic.button:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #7337fa inset !important;
    box-shadow: 0px 0px 0px 2px #7337fa inset !important;
    color: #946cee !important;
  }
  .ui.inverted.violet.basic.buttons .active.button,
  .ui.inverted.violet.buttons .basic.active.button,
  .ui.inverted.violet.basic.active.button {
    -webkit-box-shadow: 0px 0px 0px 2px #7f4af7 inset !important;
    box-shadow: 0px 0px 0px 2px #7f4af7 inset !important;
    color: #946cee !important;
  }
  .ui.inverted.violet.basic.buttons .button:active,
  .ui.inverted.violet.buttons .basic.button:active,
  .ui.inverted.violet.basic.button:active {
    -webkit-box-shadow: 0px 0px 0px 2px #733ee9 inset !important;
    box-shadow: 0px 0px 0px 2px #733ee9 inset !important;
    color: #946cee !important;
  }

  .ui.purple.buttons .button,
  .ui.purple.button {
    background-color: #ab3ec8;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.purple.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.purple.buttons .button:hover,
  .ui.purple.button:hover {
    background-color: #a02ebf;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.purple.buttons .button:focus,
  .ui.purple.button:focus {
    background-color: #9925b8;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.purple.buttons .button:active,
  .ui.purple.button:active {
    background-color: #8c2fa4;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.purple.buttons .active.button,
  .ui.purple.buttons .active.button:active,
  .ui.purple.active.button,
  .ui.purple.button .active.button:active {
    background-color: #a22bc2;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.purple.buttons .button,
  .ui.basic.purple.button {
    -webkit-box-shadow: 0px 0px 0px 1px #ab3ec8 inset !important;
    box-shadow: 0px 0px 0px 1px #ab3ec8 inset !important;
    color: #ab3ec8 !important;
  }
  .ui.basic.purple.buttons .button:hover,
  .ui.basic.purple.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #a02ebf inset !important;
    box-shadow: 0px 0px 0px 1px #a02ebf inset !important;
    color: #a02ebf !important;
  }
  .ui.basic.purple.buttons .button:focus,
  .ui.basic.purple.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #9925b8 inset !important;
    box-shadow: 0px 0px 0px 1px #9925b8 inset !important;
    color: #a02ebf !important;
  }
  .ui.basic.purple.buttons .active.button,
  .ui.basic.purple.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #a22bc2 inset !important;
    box-shadow: 0px 0px 0px 1px #a22bc2 inset !important;
    color: #8c2fa4 !important;
  }
  .ui.basic.purple.buttons .button:active,
  .ui.basic.purple.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #8c2fa4 inset !important;
    box-shadow: 0px 0px 0px 1px #8c2fa4 inset !important;
    color: #8c2fa4 !important;
  }
  .ui.buttons:not(.vertical) > .basic.purple.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.inverted.purple.buttons .button,
  .ui.inverted.purple.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px #bf69d4 inset !important;
    box-shadow: 0px 0px 0px 2px #bf69d4 inset !important;
    color: #bf69d4;
  }
  .ui.inverted.purple.buttons .button:hover,
  .ui.inverted.purple.button:hover,
  .ui.inverted.purple.buttons .button:focus,
  .ui.inverted.purple.button:focus,
  .ui.inverted.purple.buttons .button.active,
  .ui.inverted.purple.button.active,
  .ui.inverted.purple.buttons .button:active,
  .ui.inverted.purple.button:active {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #ffffff;
  }
  .ui.inverted.purple.buttons .button:hover,
  .ui.inverted.purple.button:hover {
    background-color: #ba4fd4;
  }
  .ui.inverted.purple.buttons .button:focus,
  .ui.inverted.purple.button:focus {
    background-color: #b93cd8;
  }
  .ui.inverted.purple.buttons .active.button,
  .ui.inverted.purple.active.button {
    background-color: #bc4cd7;
  }
  .ui.inverted.purple.buttons .button:active,
  .ui.inverted.purple.button:active {
    background-color: #ae41c9;
  }

  .ui.inverted.purple.basic.buttons .button,
  .ui.inverted.purple.buttons .basic.button,
  .ui.inverted.purple.basic.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.purple.basic.buttons .button:hover,
  .ui.inverted.purple.buttons .basic.button:hover,
  .ui.inverted.purple.basic.button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #ba4fd4 inset !important;
    box-shadow: 0px 0px 0px 2px #ba4fd4 inset !important;
    color: #bf69d4 !important;
  }
  .ui.inverted.purple.basic.buttons .button:focus,
  .ui.inverted.purple.basic.buttons .button:focus,
  .ui.inverted.purple.basic.button:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #b93cd8 inset !important;
    box-shadow: 0px 0px 0px 2px #b93cd8 inset !important;
    color: #bf69d4 !important;
  }
  .ui.inverted.purple.basic.buttons .active.button,
  .ui.inverted.purple.buttons .basic.active.button,
  .ui.inverted.purple.basic.active.button {
    -webkit-box-shadow: 0px 0px 0px 2px #bc4cd7 inset !important;
    box-shadow: 0px 0px 0px 2px #bc4cd7 inset !important;
    color: #bf69d4 !important;
  }
  .ui.inverted.purple.basic.buttons .button:active,
  .ui.inverted.purple.buttons .basic.button:active,
  .ui.inverted.purple.basic.button:active {
    -webkit-box-shadow: 0px 0px 0px 2px #ae41c9 inset !important;
    box-shadow: 0px 0px 0px 2px #ae41c9 inset !important;
    color: #bf69d4 !important;
  }

  .ui.red.buttons .button,
  .ui.red.button {
    background-color: #eb3e3f;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.red.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.red.buttons .button:hover,
  .ui.red.button:hover {
    background-color: #f21d1e;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.red.buttons .button:focus,
  .ui.red.button:focus {
    background-color: #fc0406;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.red.buttons .button:active,
  .ui.red.button:active {
    background-color: #df1718;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.red.buttons .active.button,
  .ui.red.buttons .active.button:active,
  .ui.red.active.button,
  .ui.red.button .active.button:active {
    background-color: #f7181a;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.red.buttons .button,
  .ui.basic.red.button {
    -webkit-box-shadow: 0px 0px 0px 1px #eb3e3f inset !important;
    box-shadow: 0px 0px 0px 1px #eb3e3f inset !important;
    color: #eb3e3f !important;
  }
  .ui.basic.red.buttons .button:hover,
  .ui.basic.red.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #f21d1e inset !important;
    box-shadow: 0px 0px 0px 1px #f21d1e inset !important;
    color: #f21d1e !important;
  }
  .ui.basic.red.buttons .button:focus,
  .ui.basic.red.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #fc0406 inset !important;
    box-shadow: 0px 0px 0px 1px #fc0406 inset !important;
    color: #f21d1e !important;
  }
  .ui.basic.red.buttons .active.button,
  .ui.basic.red.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #f7181a inset !important;
    box-shadow: 0px 0px 0px 1px #f7181a inset !important;
    color: #df1718 !important;
  }
  .ui.basic.red.buttons .button:active,
  .ui.basic.red.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #df1718 inset !important;
    box-shadow: 0px 0px 0px 1px #df1718 inset !important;
    color: #df1718 !important;
  }
  .ui.buttons:not(.vertical) > .basic.red.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.inverted.red.buttons .button,
  .ui.inverted.red.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px #f66c62 inset !important;
    box-shadow: 0px 0px 0px 2px #f66c62 inset !important;
    color: #f66c62;
  }
  .ui.inverted.red.buttons .button:hover,
  .ui.inverted.red.button:hover,
  .ui.inverted.red.buttons .button:focus,
  .ui.inverted.red.button:focus,
  .ui.inverted.red.buttons .button.active,
  .ui.inverted.red.button.active,
  .ui.inverted.red.buttons .button:active,
  .ui.inverted.red.button:active {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #ffffff;
  }
  .ui.inverted.red.buttons .button:hover,
  .ui.inverted.red.button:hover {
    background-color: #fd4e41;
  }
  .ui.inverted.red.buttons .button:focus,
  .ui.inverted.red.button:focus {
    background-color: #ff3e30;
  }
  .ui.inverted.red.buttons .active.button,
  .ui.inverted.red.active.button {
    background-color: #ff4c40;
  }
  .ui.inverted.red.buttons .button:active,
  .ui.inverted.red.button:active {
    background-color: #f33f32;
  }

  .ui.inverted.red.basic.buttons .button,
  .ui.inverted.red.buttons .basic.button,
  .ui.inverted.red.basic.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.red.basic.buttons .button:hover,
  .ui.inverted.red.buttons .basic.button:hover,
  .ui.inverted.red.basic.button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #fd4e41 inset !important;
    box-shadow: 0px 0px 0px 2px #fd4e41 inset !important;
    color: #f66c62 !important;
  }
  .ui.inverted.red.basic.buttons .button:focus,
  .ui.inverted.red.basic.buttons .button:focus,
  .ui.inverted.red.basic.button:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #ff3e30 inset !important;
    box-shadow: 0px 0px 0px 2px #ff3e30 inset !important;
    color: #f66c62 !important;
  }
  .ui.inverted.red.basic.buttons .active.button,
  .ui.inverted.red.buttons .basic.active.button,
  .ui.inverted.red.basic.active.button {
    -webkit-box-shadow: 0px 0px 0px 2px #ff4c40 inset !important;
    box-shadow: 0px 0px 0px 2px #ff4c40 inset !important;
    color: #f66c62 !important;
  }
  .ui.inverted.red.basic.buttons .button:active,
  .ui.inverted.red.buttons .basic.button:active,
  .ui.inverted.red.basic.button:active {
    -webkit-box-shadow: 0px 0px 0px 2px #f33f32 inset !important;
    box-shadow: 0px 0px 0px 2px #f33f32 inset !important;
    color: #f66c62 !important;
  }

  .ui.teal.buttons .button,
  .ui.teal.button {
    background-color: #20c997;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.teal.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.teal.buttons .button:hover,
  .ui.teal.button:hover {
    background-color: #15bb8a;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.teal.buttons .button:focus,
  .ui.teal.button:focus {
    background-color: #0cb482;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.teal.buttons .button:active,
  .ui.teal.button:active {
    background-color: #199d76;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.teal.buttons .active.button,
  .ui.teal.buttons .active.button:active,
  .ui.teal.active.button,
  .ui.teal.button .active.button:active {
    background-color: #11be8b;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.teal.buttons .button,
  .ui.basic.teal.button {
    -webkit-box-shadow: 0px 0px 0px 1px #20c997 inset !important;
    box-shadow: 0px 0px 0px 1px #20c997 inset !important;
    color: #20c997 !important;
  }
  .ui.basic.teal.buttons .button:hover,
  .ui.basic.teal.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #15bb8a inset !important;
    box-shadow: 0px 0px 0px 1px #15bb8a inset !important;
    color: #15bb8a !important;
  }
  .ui.basic.teal.buttons .button:focus,
  .ui.basic.teal.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #0cb482 inset !important;
    box-shadow: 0px 0px 0px 1px #0cb482 inset !important;
    color: #15bb8a !important;
  }
  .ui.basic.teal.buttons .active.button,
  .ui.basic.teal.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #11be8b inset !important;
    box-shadow: 0px 0px 0px 1px #11be8b inset !important;
    color: #199d76 !important;
  }
  .ui.basic.teal.buttons .button:active,
  .ui.basic.teal.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #199d76 inset !important;
    box-shadow: 0px 0px 0px 1px #199d76 inset !important;
    color: #199d76 !important;
  }
  .ui.buttons:not(.vertical) > .basic.teal.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.inverted.teal.buttons .button,
  .ui.inverted.teal.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px #65d5ab inset !important;
    box-shadow: 0px 0px 0px 2px #65d5ab inset !important;
    color: #65d5ab;
  }
  .ui.inverted.teal.buttons .button:hover,
  .ui.inverted.teal.button:hover,
  .ui.inverted.teal.buttons .button:focus,
  .ui.inverted.teal.button:focus,
  .ui.inverted.teal.buttons .button.active,
  .ui.inverted.teal.button.active,
  .ui.inverted.teal.buttons .button:active,
  .ui.inverted.teal.button:active {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #333943;
  }
  .ui.inverted.teal.buttons .button:hover,
  .ui.inverted.teal.button:hover {
    background-color: #4bd6a2;
  }
  .ui.inverted.teal.buttons .button:focus,
  .ui.inverted.teal.button:focus {
    background-color: #37da9d;
  }
  .ui.inverted.teal.buttons .active.button,
  .ui.inverted.teal.active.button {
    background-color: #47d9a2;
  }
  .ui.inverted.teal.buttons .button:active,
  .ui.inverted.teal.button:active {
    background-color: #3dca95;
  }

  .ui.inverted.teal.basic.buttons .button,
  .ui.inverted.teal.buttons .basic.button,
  .ui.inverted.teal.basic.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.teal.basic.buttons .button:hover,
  .ui.inverted.teal.buttons .basic.button:hover,
  .ui.inverted.teal.basic.button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #4bd6a2 inset !important;
    box-shadow: 0px 0px 0px 2px #4bd6a2 inset !important;
    color: #65d5ab !important;
  }
  .ui.inverted.teal.basic.buttons .button:focus,
  .ui.inverted.teal.basic.buttons .button:focus,
  .ui.inverted.teal.basic.button:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #37da9d inset !important;
    box-shadow: 0px 0px 0px 2px #37da9d inset !important;
    color: #65d5ab !important;
  }
  .ui.inverted.teal.basic.buttons .active.button,
  .ui.inverted.teal.buttons .basic.active.button,
  .ui.inverted.teal.basic.active.button {
    -webkit-box-shadow: 0px 0px 0px 2px #47d9a2 inset !important;
    box-shadow: 0px 0px 0px 2px #47d9a2 inset !important;
    color: #65d5ab !important;
  }
  .ui.inverted.teal.basic.buttons .button:active,
  .ui.inverted.teal.buttons .basic.button:active,
  .ui.inverted.teal.basic.button:active {
    -webkit-box-shadow: 0px 0px 0px 2px #3dca95 inset !important;
    box-shadow: 0px 0px 0px 2px #3dca95 inset !important;
    color: #65d5ab !important;
  }

  .ui.olive.buttons .button,
  .ui.olive.button {
    background-color: #b5cc18;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.olive.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.olive.buttons .button:hover,
  .ui.olive.button:hover {
    background-color: #a7bd0d;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.olive.buttons .button:focus,
  .ui.olive.button:focus {
    background-color: #a0b605;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.olive.buttons .button:active,
  .ui.olive.button:active {
    background-color: #8d9e13;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.olive.buttons .active.button,
  .ui.olive.buttons .active.button:active,
  .ui.olive.active.button,
  .ui.olive.button .active.button:active {
    background-color: #aac109;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.olive.buttons .button,
  .ui.basic.olive.button {
    -webkit-box-shadow: 0px 0px 0px 1px #b5cc18 inset !important;
    box-shadow: 0px 0px 0px 1px #b5cc18 inset !important;
    color: #b5cc18 !important;
  }
  .ui.basic.olive.buttons .button:hover,
  .ui.basic.olive.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #a7bd0d inset !important;
    box-shadow: 0px 0px 0px 1px #a7bd0d inset !important;
    color: #a7bd0d !important;
  }
  .ui.basic.olive.buttons .button:focus,
  .ui.basic.olive.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #a0b605 inset !important;
    box-shadow: 0px 0px 0px 1px #a0b605 inset !important;
    color: #a7bd0d !important;
  }
  .ui.basic.olive.buttons .active.button,
  .ui.basic.olive.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #aac109 inset !important;
    box-shadow: 0px 0px 0px 1px #aac109 inset !important;
    color: #8d9e13 !important;
  }
  .ui.basic.olive.buttons .button:active,
  .ui.basic.olive.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #8d9e13 inset !important;
    box-shadow: 0px 0px 0px 1px #8d9e13 inset !important;
    color: #8d9e13 !important;
  }
  .ui.buttons:not(.vertical) > .basic.olive.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.inverted.olive.buttons .button,
  .ui.inverted.olive.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px #c7d656 inset !important;
    box-shadow: 0px 0px 0px 2px #c7d656 inset !important;
    color: #c7d656;
  }
  .ui.inverted.olive.buttons .button:hover,
  .ui.inverted.olive.button:hover,
  .ui.inverted.olive.buttons .button:focus,
  .ui.inverted.olive.button:focus,
  .ui.inverted.olive.buttons .button.active,
  .ui.inverted.olive.button.active,
  .ui.inverted.olive.buttons .button:active,
  .ui.inverted.olive.button:active {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #333943;
  }
  .ui.inverted.olive.buttons .button:hover,
  .ui.inverted.olive.button:hover {
    background-color: #c6d83a;
  }
  .ui.inverted.olive.buttons .button:focus,
  .ui.inverted.olive.button:focus {
    background-color: #c8dd26;
  }
  .ui.inverted.olive.buttons .active.button,
  .ui.inverted.olive.active.button {
    background-color: #c8dc37;
  }
  .ui.inverted.olive.buttons .button:active,
  .ui.inverted.olive.button:active {
    background-color: #b7c831;
  }

  .ui.inverted.olive.basic.buttons .button,
  .ui.inverted.olive.buttons .basic.button,
  .ui.inverted.olive.basic.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.olive.basic.buttons .button:hover,
  .ui.inverted.olive.buttons .basic.button:hover,
  .ui.inverted.olive.basic.button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #c6d83a inset !important;
    box-shadow: 0px 0px 0px 2px #c6d83a inset !important;
    color: #c7d656 !important;
  }
  .ui.inverted.olive.basic.buttons .button:focus,
  .ui.inverted.olive.basic.buttons .button:focus,
  .ui.inverted.olive.basic.button:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #c8dd26 inset !important;
    box-shadow: 0px 0px 0px 2px #c8dd26 inset !important;
    color: #c7d656 !important;
  }
  .ui.inverted.olive.basic.buttons .active.button,
  .ui.inverted.olive.buttons .basic.active.button,
  .ui.inverted.olive.basic.active.button {
    -webkit-box-shadow: 0px 0px 0px 2px #c8dc37 inset !important;
    box-shadow: 0px 0px 0px 2px #c8dc37 inset !important;
    color: #c7d656 !important;
  }
  .ui.inverted.olive.basic.buttons .button:active,
  .ui.inverted.olive.buttons .basic.button:active,
  .ui.inverted.olive.basic.button:active {
    -webkit-box-shadow: 0px 0px 0px 2px #b7c831 inset !important;
    box-shadow: 0px 0px 0px 2px #b7c831 inset !important;
    color: #c7d656 !important;
  }

  .ui.yellow.buttons .button,
  .ui.yellow.button {
    background-color: #f8c41d;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.yellow.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.yellow.buttons .button:hover,
  .ui.yellow.button:hover {
    background-color: #fbc000;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.yellow.buttons .button:focus,
  .ui.yellow.button:focus {
    background-color: #ecb400;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.yellow.buttons .button:active,
  .ui.yellow.button:active {
    background-color: #dba907;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.yellow.buttons .active.button,
  .ui.yellow.buttons .active.button:active,
  .ui.yellow.active.button,
  .ui.yellow.button .active.button:active {
    background-color: #fbc000;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.yellow.buttons .button,
  .ui.basic.yellow.button {
    -webkit-box-shadow: 0px 0px 0px 1px #f8c41d inset !important;
    box-shadow: 0px 0px 0px 1px #f8c41d inset !important;
    color: #f8c41d !important;
  }
  .ui.basic.yellow.buttons .button:hover,
  .ui.basic.yellow.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #fbc000 inset !important;
    box-shadow: 0px 0px 0px 1px #fbc000 inset !important;
    color: #fbc000 !important;
  }
  .ui.basic.yellow.buttons .button:focus,
  .ui.basic.yellow.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #ecb400 inset !important;
    box-shadow: 0px 0px 0px 1px #ecb400 inset !important;
    color: #fbc000 !important;
  }
  .ui.basic.yellow.buttons .active.button,
  .ui.basic.yellow.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #fbc000 inset !important;
    box-shadow: 0px 0px 0px 1px #fbc000 inset !important;
    color: #dba907 !important;
  }
  .ui.basic.yellow.buttons .button:active,
  .ui.basic.yellow.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #dba907 inset !important;
    box-shadow: 0px 0px 0px 1px #dba907 inset !important;
    color: #dba907 !important;
  }
  .ui.buttons:not(.vertical) > .basic.yellow.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.inverted.yellow.buttons .button,
  .ui.inverted.yellow.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px #fecf58 inset !important;
    box-shadow: 0px 0px 0px 2px #fecf58 inset !important;
    color: #fecf58;
  }
  .ui.inverted.yellow.buttons .button:hover,
  .ui.inverted.yellow.button:hover,
  .ui.inverted.yellow.buttons .button:focus,
  .ui.inverted.yellow.button:focus,
  .ui.inverted.yellow.buttons .button.active,
  .ui.inverted.yellow.button.active,
  .ui.inverted.yellow.buttons .button:active,
  .ui.inverted.yellow.button:active {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #333943;
  }
  .ui.inverted.yellow.buttons .button:hover,
  .ui.inverted.yellow.button:hover {
    background-color: #ffc83e;
  }
  .ui.inverted.yellow.buttons .button:focus,
  .ui.inverted.yellow.button:focus {
    background-color: #ffc42e;
  }
  .ui.inverted.yellow.buttons .active.button,
  .ui.inverted.yellow.active.button {
    background-color: #ffc83e;
  }
  .ui.inverted.yellow.buttons .button:active,
  .ui.inverted.yellow.button:active {
    background-color: #fec025;
  }

  .ui.inverted.yellow.basic.buttons .button,
  .ui.inverted.yellow.buttons .basic.button,
  .ui.inverted.yellow.basic.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.yellow.basic.buttons .button:hover,
  .ui.inverted.yellow.buttons .basic.button:hover,
  .ui.inverted.yellow.basic.button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #ffc83e inset !important;
    box-shadow: 0px 0px 0px 2px #ffc83e inset !important;
    color: #fecf58 !important;
  }
  .ui.inverted.yellow.basic.buttons .button:focus,
  .ui.inverted.yellow.basic.buttons .button:focus,
  .ui.inverted.yellow.basic.button:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #ffc42e inset !important;
    box-shadow: 0px 0px 0px 2px #ffc42e inset !important;
    color: #fecf58 !important;
  }
  .ui.inverted.yellow.basic.buttons .active.button,
  .ui.inverted.yellow.buttons .basic.active.button,
  .ui.inverted.yellow.basic.active.button {
    -webkit-box-shadow: 0px 0px 0px 2px #ffc83e inset !important;
    box-shadow: 0px 0px 0px 2px #ffc83e inset !important;
    color: #fecf58 !important;
  }
  .ui.inverted.yellow.basic.buttons .button:active,
  .ui.inverted.yellow.buttons .basic.button:active,
  .ui.inverted.yellow.basic.button:active {
    -webkit-box-shadow: 0px 0px 0px 2px #fec025 inset !important;
    box-shadow: 0px 0px 0px 2px #fec025 inset !important;
    color: #fecf58 !important;
  }

  .ui.primary.buttons .button,
  .ui.primary.button {
    background-color: #00aadc;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.primary.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.primary.buttons .button:hover,
  .ui.primary.button:hover {
    background-color: #0096c3;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.primary.buttons .button:focus,
  .ui.primary.button:focus {
    background-color: #008ab3;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.primary.buttons .button:active,
  .ui.primary.button:active {
    background-color: #0083a9;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.primary.buttons .active.button,
  .ui.primary.buttons .active.button:active,
  .ui.primary.active.button,
  .ui.primary.button .active.button:active {
    background-color: #0096c3;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.primary.buttons .button,
  .ui.basic.primary.button {
    -webkit-box-shadow: 0px 0px 0px 1px #00aadc inset !important;
    box-shadow: 0px 0px 0px 1px #00aadc inset !important;
    color: #00aadc !important;
  }
  .ui.basic.primary.buttons .button:hover,
  .ui.basic.primary.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #0096c3 inset !important;
    box-shadow: 0px 0px 0px 1px #0096c3 inset !important;
    color: #0096c3 !important;
  }
  .ui.basic.primary.buttons .button:focus,
  .ui.basic.primary.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #008ab3 inset !important;
    box-shadow: 0px 0px 0px 1px #008ab3 inset !important;
    color: #0096c3 !important;
  }
  .ui.basic.primary.buttons .active.button,
  .ui.basic.primary.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #0096c3 inset !important;
    box-shadow: 0px 0px 0px 1px #0096c3 inset !important;
    color: #0083a9 !important;
  }
  .ui.basic.primary.buttons .button:active,
  .ui.basic.primary.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #0083a9 inset !important;
    box-shadow: 0px 0px 0px 1px #0083a9 inset !important;
    color: #0083a9 !important;
  }
  .ui.buttons:not(.vertical) > .basic.primary.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.inverted.primary.buttons .button,
  .ui.inverted.primary.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px #68a0e9 inset !important;
    box-shadow: 0px 0px 0px 2px #68a0e9 inset !important;
    color: #68a0e9;
  }
  .ui.inverted.primary.buttons .button:hover,
  .ui.inverted.primary.button:hover,
  .ui.inverted.primary.buttons .button:focus,
  .ui.inverted.primary.button:focus,
  .ui.inverted.primary.buttons .button.active,
  .ui.inverted.primary.button.active,
  .ui.inverted.primary.buttons .button:active,
  .ui.inverted.primary.button:active {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #ffffff;
  }
  .ui.inverted.primary.buttons .button:hover,
  .ui.inverted.primary.button:hover {
    background-color: #4a91ed;
  }
  .ui.inverted.primary.buttons .button:focus,
  .ui.inverted.primary.button:focus {
    background-color: #3487f4;
  }
  .ui.inverted.primary.buttons .active.button,
  .ui.inverted.primary.active.button {
    background-color: #4791f1;
  }
  .ui.inverted.primary.buttons .button:active,
  .ui.inverted.primary.button:active {
    background-color: #3b84e3;
  }

  .ui.inverted.primary.basic.buttons .button,
  .ui.inverted.primary.buttons .basic.button,
  .ui.inverted.primary.basic.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.primary.basic.buttons .button:hover,
  .ui.inverted.primary.buttons .basic.button:hover,
  .ui.inverted.primary.basic.button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #4a91ed inset !important;
    box-shadow: 0px 0px 0px 2px #4a91ed inset !important;
    color: #68a0e9 !important;
  }
  .ui.inverted.primary.basic.buttons .button:focus,
  .ui.inverted.primary.basic.buttons .button:focus,
  .ui.inverted.primary.basic.button:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #3487f4 inset !important;
    box-shadow: 0px 0px 0px 2px #3487f4 inset !important;
    color: #68a0e9 !important;
  }
  .ui.inverted.primary.basic.buttons .active.button,
  .ui.inverted.primary.buttons .basic.active.button,
  .ui.inverted.primary.basic.active.button {
    -webkit-box-shadow: 0px 0px 0px 2px #4791f1 inset !important;
    box-shadow: 0px 0px 0px 2px #4791f1 inset !important;
    color: #68a0e9 !important;
  }
  .ui.inverted.primary.basic.buttons .button:active,
  .ui.inverted.primary.buttons .basic.button:active,
  .ui.inverted.primary.basic.button:active {
    -webkit-box-shadow: 0px 0px 0px 2px #3b84e3 inset !important;
    box-shadow: 0px 0px 0px 2px #3b84e3 inset !important;
    color: #68a0e9 !important;
  }

  .ui.secondary.buttons .button,
  .ui.secondary.button {
    background-color: #333943;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.secondary.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.secondary.buttons .button:hover,
  .ui.secondary.button:hover {
    background-color: #3d4552;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.secondary.buttons .button:focus,
  .ui.secondary.button:focus {
    background-color: #424c5c;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.secondary.buttons .button:active,
  .ui.secondary.button:active {
    background-color: #495260;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.secondary.buttons .active.button,
  .ui.secondary.buttons .active.button:active,
  .ui.secondary.active.button,
  .ui.secondary.button .active.button:active {
    background-color: #3d4553;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.secondary.buttons .button,
  .ui.basic.secondary.button {
    -webkit-box-shadow: 0px 0px 0px 1px #333943 inset !important;
    box-shadow: 0px 0px 0px 1px #333943 inset !important;
    color: #333943 !important;
  }
  .ui.basic.secondary.buttons .button:hover,
  .ui.basic.secondary.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #3d4552 inset !important;
    box-shadow: 0px 0px 0px 1px #3d4552 inset !important;
    color: #3d4552 !important;
  }
  .ui.basic.secondary.buttons .button:focus,
  .ui.basic.secondary.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #424c5c inset !important;
    box-shadow: 0px 0px 0px 1px #424c5c inset !important;
    color: #3d4552 !important;
  }
  .ui.basic.secondary.buttons .active.button,
  .ui.basic.secondary.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #3d4553 inset !important;
    box-shadow: 0px 0px 0px 1px #3d4553 inset !important;
    color: #495260 !important;
  }
  .ui.basic.secondary.buttons .button:active,
  .ui.basic.secondary.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #495260 inset !important;
    box-shadow: 0px 0px 0px 1px #495260 inset !important;
    color: #495260 !important;
  }
  .ui.buttons:not(.vertical) > .basic.primary.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.inverted.secondary.buttons .button,
  .ui.inverted.secondary.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px #575c65 inset !important;
    box-shadow: 0px 0px 0px 2px #575c65 inset !important;
    color: #575c65;
  }
  .ui.inverted.secondary.buttons .button:hover,
  .ui.inverted.secondary.button:hover,
  .ui.inverted.secondary.buttons .button:focus,
  .ui.inverted.secondary.button:focus,
  .ui.inverted.secondary.buttons .button.active,
  .ui.inverted.secondary.button.active,
  .ui.inverted.secondary.buttons .button:active,
  .ui.inverted.secondary.button:active {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #ffffff;
  }
  .ui.inverted.secondary.buttons .button:hover,
  .ui.inverted.secondary.button:hover {
    background-color: #626873;
  }
  .ui.inverted.secondary.buttons .button:focus,
  .ui.inverted.secondary.button:focus {
    background-color: #686f7d;
  }
  .ui.inverted.secondary.buttons .active.button,
  .ui.inverted.secondary.active.button {
    background-color: #626874;
  }
  .ui.inverted.secondary.buttons .button:active,
  .ui.inverted.secondary.button:active {
    background-color: #6f7580;
  }

  .ui.inverted.secondary.basic.buttons .button,
  .ui.inverted.secondary.buttons .basic.button,
  .ui.inverted.secondary.basic.button {
    background-color: transparent;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.secondary.basic.buttons .button:hover,
  .ui.inverted.secondary.buttons .basic.button:hover,
  .ui.inverted.secondary.basic.button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #626873 inset !important;
    box-shadow: 0px 0px 0px 2px #626873 inset !important;
    color: #575c65 !important;
  }
  .ui.inverted.secondary.basic.buttons .button:focus,
  .ui.inverted.secondary.basic.buttons .button:focus,
  .ui.inverted.secondary.basic.button:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #686f7d inset !important;
    box-shadow: 0px 0px 0px 2px #686f7d inset !important;
    color: #575c65 !important;
  }
  .ui.inverted.secondary.basic.buttons .active.button,
  .ui.inverted.secondary.buttons .basic.active.button,
  .ui.inverted.secondary.basic.active.button {
    -webkit-box-shadow: 0px 0px 0px 2px #626874 inset !important;
    box-shadow: 0px 0px 0px 2px #626874 inset !important;
    color: #575c65 !important;
  }
  .ui.inverted.secondary.basic.buttons .button:active,
  .ui.inverted.secondary.buttons .basic.button:active,
  .ui.inverted.secondary.basic.button:active {
    -webkit-box-shadow: 0px 0px 0px 2px #6f7580 inset !important;
    box-shadow: 0px 0px 0px 2px #6f7580 inset !important;
    color: #575c65 !important;
  }

  .ui.positive.buttons .button,
  .ui.positive.button {
    background-color: #3fbe58;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.positive.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.positive.buttons .button:hover,
  .ui.positive.button:hover {
    background-color: #33b14c;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.positive.buttons .button:focus,
  .ui.positive.button:focus {
    background-color: #2aaa43;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.positive.buttons .button:active,
  .ui.positive.button:active {
    background-color: #329846;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.positive.buttons .active.button,
  .ui.positive.buttons .active.button:active,
  .ui.positive.active.button,
  .ui.positive.button .active.button:active {
    background-color: #30b34a;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.positive.buttons .button,
  .ui.basic.positive.button {
    -webkit-box-shadow: 0px 0px 0px 1px #3fbe58 inset !important;
    box-shadow: 0px 0px 0px 1px #3fbe58 inset !important;
    color: #3fbe58 !important;
  }
  .ui.basic.positive.buttons .button:hover,
  .ui.basic.positive.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #33b14c inset !important;
    box-shadow: 0px 0px 0px 1px #33b14c inset !important;
    color: #33b14c !important;
  }
  .ui.basic.positive.buttons .button:focus,
  .ui.basic.positive.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #2aaa43 inset !important;
    box-shadow: 0px 0px 0px 1px #2aaa43 inset !important;
    color: #33b14c !important;
  }
  .ui.basic.positive.buttons .active.button,
  .ui.basic.positive.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #30b34a inset !important;
    box-shadow: 0px 0px 0px 1px #30b34a inset !important;
    color: #329846 !important;
  }
  .ui.basic.positive.buttons .button:active,
  .ui.basic.positive.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #329846 inset !important;
    box-shadow: 0px 0px 0px 1px #329846 inset !important;
    color: #329846 !important;
  }
  .ui.buttons:not(.vertical) > .basic.primary.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.negative.buttons .button,
  .ui.negative.button {
    background-color: #eb3e3f;
    color: #ffffff;
    text-shadow: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(0, 0, 0, 0.1))
    );
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  .ui.negative.button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
      0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.negative.buttons .button:hover,
  .ui.negative.button:hover {
    background-color: #f21d1e;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.negative.buttons .button:focus,
  .ui.negative.button:focus {
    background-color: #fc0406;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.negative.buttons .button:active,
  .ui.negative.button:active {
    background-color: #df1718;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.negative.buttons .active.button,
  .ui.negative.buttons .active.button:active,
  .ui.negative.active.button,
  .ui.negative.button .active.button:active {
    background-color: #f7181a;
    color: #ffffff;
    text-shadow: none;
  }

  .ui.basic.negative.buttons .button,
  .ui.basic.negative.button {
    -webkit-box-shadow: 0px 0px 0px 1px #eb3e3f inset !important;
    box-shadow: 0px 0px 0px 1px #eb3e3f inset !important;
    color: #eb3e3f !important;
  }
  .ui.basic.negative.buttons .button:hover,
  .ui.basic.negative.button:hover {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #f21d1e inset !important;
    box-shadow: 0px 0px 0px 1px #f21d1e inset !important;
    color: #f21d1e !important;
  }
  .ui.basic.negative.buttons .button:focus,
  .ui.basic.negative.button:focus {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #fc0406 inset !important;
    box-shadow: 0px 0px 0px 1px #fc0406 inset !important;
    color: #f21d1e !important;
  }
  .ui.basic.negative.buttons .active.button,
  .ui.basic.negative.active.button {
    background: transparent !important;
    -webkit-box-shadow: 0px 0px 0px 1px #f7181a inset !important;
    box-shadow: 0px 0px 0px 1px #f7181a inset !important;
    color: #df1718 !important;
  }
  .ui.basic.negative.buttons .button:active,
  .ui.basic.negative.button:active {
    -webkit-box-shadow: 0px 0px 0px 1px #df1718 inset !important;
    box-shadow: 0px 0px 0px 1px #df1718 inset !important;
    color: #df1718 !important;
  }
  .ui.buttons:not(.vertical) > .basic.primary.button:not(:first-child) {
    margin-left: -1px;
  }

  .ui.buttons {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    font-size: 0em;
    vertical-align: baseline;
    margin: 0em 8px 0em 0em;
  }
  .ui.buttons:not(.basic):not(.inverted) {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .ui.buttons:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .ui.buttons .button {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    margin: 0em;
    border-radius: 0em;
    margin: 0px 0px 0px 0px;
  }
  .ui.buttons > .ui.button:not(.basic):not(.inverted),
  .ui.buttons:not(.basic):not(.inverted) > .button {
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05) inset,
      0 0 0 1px rgba(0, 0, 0, 0.13) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05) inset,
      0 0 0 1px rgba(0, 0, 0, 0.13) inset, 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ui.buttons .button:first-child {
    border-left: none;
    margin-left: 0em;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
  .ui.buttons .button:last-child {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  .ui.vertical.buttons {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .ui.vertical.buttons .button {
    display: block;
    float: none;
    width: 100%;
    margin: 0px 0px 0px 0px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0em;
  }
  .ui.vertical.buttons .button:first-child {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
  .ui.vertical.buttons .button:last-child {
    margin-bottom: 0px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  .ui.vertical.buttons .button:only-child {
    border-radius: 2px;
  }
`;

export default style;
