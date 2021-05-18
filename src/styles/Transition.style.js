import { css } from "react-emotion";

const style = css`
  .transition {
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-duration: 300ms;
    animation-duration: 300ms;
    -webkit-animation-timing-function: ease;
    animation-timing-function: ease;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .animating.transition {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    visibility: visible !important;
  }

  .loading.transition {
    position: absolute;
    top: -99999px;
    left: -99999px;
  }

  .hidden.transition {
    display: none;
    visibility: hidden;
  }

  .visible.transition {
    display: block !important;
    visibility: visible !important;
  }

  .disabled.transition {
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }

  .looping.transition {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .transition.browse {
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
  }
  .transition.browse.in {
    -webkit-animation-name: browseIn;
    animation-name: browseIn;
  }
  .transition.browse.out,
  .transition.browse.left.out {
    -webkit-animation-name: browseOutLeft;
    animation-name: browseOutLeft;
  }
  .transition.browse.right.out {
    -webkit-animation-name: browseOutRight;
    animation-name: browseOutRight;
  }

  @-webkit-keyframes browseIn {
    0% {
      -webkit-transform: scale(0.8) translateZ(0px);
      transform: scale(0.8) translateZ(0px);
      z-index: -1;
    }
    10% {
      -webkit-transform: scale(0.8) translateZ(0px);
      transform: scale(0.8) translateZ(0px);
      z-index: -1;
      opacity: 0.7;
    }
    80% {
      -webkit-transform: scale(1.05) translateZ(0px);
      transform: scale(1.05) translateZ(0px);
      opacity: 1;
      z-index: 999;
    }
    100% {
      -webkit-transform: scale(1) translateZ(0px);
      transform: scale(1) translateZ(0px);
      z-index: 999;
    }
  }
  @keyframes browseIn {
    0% {
      -webkit-transform: scale(0.8) translateZ(0px);
      transform: scale(0.8) translateZ(0px);
      z-index: -1;
    }
    10% {
      -webkit-transform: scale(0.8) translateZ(0px);
      transform: scale(0.8) translateZ(0px);
      z-index: -1;
      opacity: 0.7;
    }
    80% {
      -webkit-transform: scale(1.05) translateZ(0px);
      transform: scale(1.05) translateZ(0px);
      opacity: 1;
      z-index: 999;
    }
    100% {
      -webkit-transform: scale(1) translateZ(0px);
      transform: scale(1) translateZ(0px);
      z-index: 999;
    }
  }

  @-webkit-keyframes browseOutLeft {
    0% {
      z-index: 999;
      -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg);
      transform: translateX(0%) rotateY(0deg) rotateX(0deg);
    }
    50% {
      z-index: -1;
      -webkit-transform: translateX(-105%) rotateY(35deg) rotateX(10deg)
        translateZ(-10px);
      transform: translateX(-105%) rotateY(35deg) rotateX(10deg)
        translateZ(-10px);
    }
    80% {
      opacity: 1;
    }
    100% {
      z-index: -1;
      -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg)
        translateZ(-10px);
      transform: translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px);
      opacity: 0;
    }
  }
  @keyframes browseOutLeft {
    0% {
      z-index: 999;
      -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg);
      transform: translateX(0%) rotateY(0deg) rotateX(0deg);
    }
    50% {
      z-index: -1;
      -webkit-transform: translateX(-105%) rotateY(35deg) rotateX(10deg)
        translateZ(-10px);
      transform: translateX(-105%) rotateY(35deg) rotateX(10deg)
        translateZ(-10px);
    }
    80% {
      opacity: 1;
    }
    100% {
      z-index: -1;
      -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg)
        translateZ(-10px);
      transform: translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px);
      opacity: 0;
    }
  }
  @-webkit-keyframes browseOutRight {
    0% {
      z-index: 999;
      -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg);
      transform: translateX(0%) rotateY(0deg) rotateX(0deg);
    }
    50% {
      z-index: 1;
      -webkit-transform: translateX(105%) rotateY(35deg) rotateX(10deg)
        translateZ(-10px);
      transform: translateX(105%) rotateY(35deg) rotateX(10deg)
        translateZ(-10px);
    }
    80% {
      opacity: 1;
    }
    100% {
      z-index: 1;
      -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg)
        translateZ(-10px);
      transform: translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px);
      opacity: 0;
    }
  }
  @keyframes browseOutRight {
    0% {
      z-index: 999;
      -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg);
      transform: translateX(0%) rotateY(0deg) rotateX(0deg);
    }
    50% {
      z-index: 1;
      -webkit-transform: translateX(105%) rotateY(35deg) rotateX(10deg)
        translateZ(-10px);
      transform: translateX(105%) rotateY(35deg) rotateX(10deg)
        translateZ(-10px);
    }
    80% {
      opacity: 1;
    }
    100% {
      z-index: 1;
      -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg)
        translateZ(-10px);
      transform: translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px);
      opacity: 0;
    }
  }

  .drop.transition {
    -webkit-transform-origin: top center;
    transform-origin: top center;
    -webkit-animation-duration: 400ms;
    animation-duration: 400ms;
    -webkit-animation-timing-function: cubic-bezier(0.34, 1.61, 0.7, 1);
    animation-timing-function: cubic-bezier(0.34, 1.61, 0.7, 1);
  }
  .drop.transition.in {
    -webkit-animation-name: dropIn;
    animation-name: dropIn;
  }
  .drop.transition.out {
    -webkit-animation-name: dropOut;
    animation-name: dropOut;
  }

  @-webkit-keyframes dropIn {
    0% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes dropIn {
    0% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @-webkit-keyframes dropOut {
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }
  @keyframes dropOut {
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }

  .transition.fade.in {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }
  .transition[class*="fade up"].in {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
  }
  .transition[class*="fade down"].in {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
  }
  .transition[class*="fade left"].in {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
  }
  .transition[class*="fade right"].in {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
  }
  .transition.fade.out {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }
  .transition[class*="fade up"].out {
    -webkit-animation-name: fadeOutUp;
    animation-name: fadeOutUp;
  }
  .transition[class*="fade down"].out {
    -webkit-animation-name: fadeOutDown;
    animation-name: fadeOutDown;
  }
  .transition[class*="fade left"].out {
    -webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft;
  }
  .transition[class*="fade right"].out {
    -webkit-animation-name: fadeOutRight;
    animation-name: fadeOutRight;
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(10%);
      transform: translateY(10%);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0%);
      transform: translateY(0%);
    }
  }
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(10%);
      transform: translateY(10%);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0%);
      transform: translateY(0%);
    }
  }
  @-webkit-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-10%);
      transform: translateY(-10%);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0%);
      transform: translateY(0%);
    }
  }
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-10%);
      transform: translateY(-10%);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0%);
      transform: translateY(0%);
    }
  }
  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(10%);
      transform: translateX(10%);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
  }
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(10%);
      transform: translateX(10%);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
  }
  @-webkit-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-10%);
      transform: translateX(-10%);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
  }
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-10%);
      transform: translateX(-10%);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
  }

  @-webkit-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes fadeOutUp {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0%);
      transform: translateY(0%);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(5%);
      transform: translateY(5%);
    }
  }
  @keyframes fadeOutUp {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0%);
      transform: translateY(0%);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(5%);
      transform: translateY(5%);
    }
  }
  @-webkit-keyframes fadeOutDown {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0%);
      transform: translateY(0%);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-5%);
      transform: translateY(-5%);
    }
  }
  @keyframes fadeOutDown {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0%);
      transform: translateY(0%);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-5%);
      transform: translateY(-5%);
    }
  }
  @-webkit-keyframes fadeOutLeft {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(5%);
      transform: translateX(5%);
    }
  }
  @keyframes fadeOutLeft {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(5%);
      transform: translateX(5%);
    }
  }
  @-webkit-keyframes fadeOutRight {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-5%);
      transform: translateX(-5%);
    }
  }
  @keyframes fadeOutRight {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-5%);
      transform: translateX(-5%);
    }
  }

  .flip.transition.in,
  .flip.transition.out {
    -webkit-animation-duration: 600ms;
    animation-duration: 600ms;
  }
  .horizontal.flip.transition.in {
    -webkit-animation-name: horizontalFlipIn;
    animation-name: horizontalFlipIn;
  }
  .horizontal.flip.transition.out {
    -webkit-animation-name: horizontalFlipOut;
    animation-name: horizontalFlipOut;
  }
  .vertical.flip.transition.in {
    -webkit-animation-name: verticalFlipIn;
    animation-name: verticalFlipIn;
  }
  .vertical.flip.transition.out {
    -webkit-animation-name: verticalFlipOut;
    animation-name: verticalFlipOut;
  }

  @-webkit-keyframes horizontalFlipIn {
    0% {
      -webkit-transform: perspective(2000px) rotateY(-90deg);
      transform: perspective(2000px) rotateY(-90deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: perspective(2000px) rotateY(0deg);
      transform: perspective(2000px) rotateY(0deg);
      opacity: 1;
    }
  }
  @keyframes horizontalFlipIn {
    0% {
      -webkit-transform: perspective(2000px) rotateY(-90deg);
      transform: perspective(2000px) rotateY(-90deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: perspective(2000px) rotateY(0deg);
      transform: perspective(2000px) rotateY(0deg);
      opacity: 1;
    }
  }
  @-webkit-keyframes verticalFlipIn {
    0% {
      -webkit-transform: perspective(2000px) rotateX(-90deg);
      transform: perspective(2000px) rotateX(-90deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: perspective(2000px) rotateX(0deg);
      transform: perspective(2000px) rotateX(0deg);
      opacity: 1;
    }
  }
  @keyframes verticalFlipIn {
    0% {
      -webkit-transform: perspective(2000px) rotateX(-90deg);
      transform: perspective(2000px) rotateX(-90deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: perspective(2000px) rotateX(0deg);
      transform: perspective(2000px) rotateX(0deg);
      opacity: 1;
    }
  }

  @-webkit-keyframes horizontalFlipOut {
    0% {
      -webkit-transform: perspective(2000px) rotateY(0deg);
      transform: perspective(2000px) rotateY(0deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: perspective(2000px) rotateY(90deg);
      transform: perspective(2000px) rotateY(90deg);
      opacity: 0;
    }
  }
  @keyframes horizontalFlipOut {
    0% {
      -webkit-transform: perspective(2000px) rotateY(0deg);
      transform: perspective(2000px) rotateY(0deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: perspective(2000px) rotateY(90deg);
      transform: perspective(2000px) rotateY(90deg);
      opacity: 0;
    }
  }
  @-webkit-keyframes verticalFlipOut {
    0% {
      -webkit-transform: perspective(2000px) rotateX(0deg);
      transform: perspective(2000px) rotateX(0deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: perspective(2000px) rotateX(-90deg);
      transform: perspective(2000px) rotateX(-90deg);
      opacity: 0;
    }
  }
  @keyframes verticalFlipOut {
    0% {
      -webkit-transform: perspective(2000px) rotateX(0deg);
      transform: perspective(2000px) rotateX(0deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: perspective(2000px) rotateX(-90deg);
      transform: perspective(2000px) rotateX(-90deg);
      opacity: 0;
    }
  }

  .scale.transition.in {
    -webkit-animation-name: scaleIn;
    animation-name: scaleIn;
  }
  .scale.transition.out {
    -webkit-animation-name: scaleOut;
    animation-name: scaleOut;
  }
  @-webkit-keyframes scaleIn {
    0% {
      opacity: 0;
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scaleIn {
    0% {
      opacity: 0;
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @-webkit-keyframes scaleOut {
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  @keyframes scaleOut {
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }

  .transition.fly {
    -webkit-animation-duration: 0.6s;
    animation-duration: 0.6s;
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .transition.fly.in {
    -webkit-animation-name: flyIn;
    animation-name: flyIn;
  }
  .transition[class*="fly up"].in {
    -webkit-animation-name: flyInUp;
    animation-name: flyInUp;
  }
  .transition[class*="fly down"].in {
    -webkit-animation-name: flyInDown;
    animation-name: flyInDown;
  }
  .transition[class*="fly left"].in {
    -webkit-animation-name: flyInLeft;
    animation-name: flyInLeft;
  }
  .transition[class*="fly right"].in {
    -webkit-animation-name: flyInRight;
    animation-name: flyInRight;
  }

  .transition.fly.out {
    -webkit-animation-name: flyOut;
    animation-name: flyOut;
  }
  .transition[class*="fly up"].out {
    -webkit-animation-name: flyOutUp;
    animation-name: flyOutUp;
  }
  .transition[class*="fly down"].out {
    -webkit-animation-name: flyOutDown;
    animation-name: flyOutDown;
  }
  .transition[class*="fly left"].out {
    -webkit-animation-name: flyOutLeft;
    animation-name: flyOutLeft;
  }
  .transition[class*="fly right"].out {
    -webkit-animation-name: flyOutRight;
    animation-name: flyOutRight;
  }

  @-webkit-keyframes flyIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes flyIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @-webkit-keyframes flyInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 1500px, 0);
      transform: translate3d(0, 1500px, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }
    75% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }
    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes flyInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 1500px, 0);
      transform: translate3d(0, 1500px, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }
    75% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }
    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @-webkit-keyframes flyInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -1500px, 0);
      transform: translate3d(0, -1500px, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 25px, 0);
      transform: translate3d(0, 25px, 0);
    }
    75% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
    }
    90% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0);
    }
    100% {
      -webkit-transform: none;
      transform: none;
    }
  }
  @keyframes flyInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -1500px, 0);
      transform: translate3d(0, -1500px, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 25px, 0);
      transform: translate3d(0, 25px, 0);
    }
    75% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
    }
    90% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0);
    }
    100% {
      -webkit-transform: none;
      transform: none;
    }
  }
  @-webkit-keyframes flyInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(1500px, 0, 0);
      transform: translate3d(1500px, 0, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(-25px, 0, 0);
      transform: translate3d(-25px, 0, 0);
    }
    75% {
      -webkit-transform: translate3d(10px, 0, 0);
      transform: translate3d(10px, 0, 0);
    }
    90% {
      -webkit-transform: translate3d(-5px, 0, 0);
      transform: translate3d(-5px, 0, 0);
    }
    100% {
      -webkit-transform: none;
      transform: none;
    }
  }
  @keyframes flyInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(1500px, 0, 0);
      transform: translate3d(1500px, 0, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(-25px, 0, 0);
      transform: translate3d(-25px, 0, 0);
    }
    75% {
      -webkit-transform: translate3d(10px, 0, 0);
      transform: translate3d(10px, 0, 0);
    }
    90% {
      -webkit-transform: translate3d(-5px, 0, 0);
      transform: translate3d(-5px, 0, 0);
    }
    100% {
      -webkit-transform: none;
      transform: none;
    }
  }
  @-webkit-keyframes flyInRight {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-1500px, 0, 0);
      transform: translate3d(-1500px, 0, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(25px, 0, 0);
      transform: translate3d(25px, 0, 0);
    }
    75% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      -webkit-transform: translate3d(5px, 0, 0);
      transform: translate3d(5px, 0, 0);
    }
    100% {
      -webkit-transform: none;
      transform: none;
    }
  }
  @keyframes flyInRight {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-1500px, 0, 0);
      transform: translate3d(-1500px, 0, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(25px, 0, 0);
      transform: translate3d(25px, 0, 0);
    }
    75% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      -webkit-transform: translate3d(5px, 0, 0);
      transform: translate3d(5px, 0, 0);
    }
    100% {
      -webkit-transform: none;
      transform: none;
    }
  }

  @-webkit-keyframes flyOut {
    20% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
    50%,
    55% {
      opacity: 1;
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }
  @keyframes flyOut {
    20% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
    50%,
    55% {
      opacity: 1;
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }
  @-webkit-keyframes flyOutUp {
    20% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, 2000px, 0);
      transform: translate3d(0, 2000px, 0);
    }
  }
  @keyframes flyOutUp {
    20% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, 2000px, 0);
      transform: translate3d(0, 2000px, 0);
    }
  }
  @-webkit-keyframes flyOutDown {
    20% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      -webkit-transform: translate3d(0, 20px, 0);
      transform: translate3d(0, 20px, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, -2000px, 0);
      transform: translate3d(0, -2000px, 0);
    }
  }
  @keyframes flyOutDown {
    20% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      -webkit-transform: translate3d(0, 20px, 0);
      transform: translate3d(0, 20px, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, -2000px, 0);
      transform: translate3d(0, -2000px, 0);
    }
  }
  @-webkit-keyframes flyOutRight {
    20% {
      opacity: 1;
      -webkit-transform: translate3d(20px, 0, 0);
      transform: translate3d(20px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translate3d(-2000px, 0, 0);
      transform: translate3d(-2000px, 0, 0);
    }
  }
  @keyframes flyOutRight {
    20% {
      opacity: 1;
      -webkit-transform: translate3d(20px, 0, 0);
      transform: translate3d(20px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translate3d(-2000px, 0, 0);
      transform: translate3d(-2000px, 0, 0);
    }
  }
  @-webkit-keyframes flyOutLeft {
    20% {
      opacity: 1;
      -webkit-transform: translate3d(-20px, 0, 0);
      transform: translate3d(-20px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translate3d(2000px, 0, 0);
      transform: translate3d(2000px, 0, 0);
    }
  }
  @keyframes flyOutLeft {
    20% {
      opacity: 1;
      -webkit-transform: translate3d(-20px, 0, 0);
      transform: translate3d(-20px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translate3d(2000px, 0, 0);
      transform: translate3d(2000px, 0, 0);
    }
  }

  .transition.slide.in,
  .transition[class*="slide down"].in {
    -webkit-animation-name: slideInY;
    animation-name: slideInY;
    -webkit-transform-origin: top center;
    transform-origin: top center;
  }
  .transition[class*="slide up"].in {
    -webkit-animation-name: slideInY;
    animation-name: slideInY;
    -webkit-transform-origin: bottom center;
    transform-origin: bottom center;
  }
  .transition[class*="slide left"].in {
    -webkit-animation-name: slideInX;
    animation-name: slideInX;
    -webkit-transform-origin: center right;
    transform-origin: center right;
  }
  .transition[class*="slide right"].in {
    -webkit-animation-name: slideInX;
    animation-name: slideInX;
    -webkit-transform-origin: center left;
    transform-origin: center left;
  }
  .transition.slide.out,
  .transition[class*="slide down"].out {
    -webkit-animation-name: slideOutY;
    animation-name: slideOutY;
    -webkit-transform-origin: top center;
    transform-origin: top center;
  }
  .transition[class*="slide up"].out {
    -webkit-animation-name: slideOutY;
    animation-name: slideOutY;
    -webkit-transform-origin: bottom center;
    transform-origin: bottom center;
  }
  .transition[class*="slide left"].out {
    -webkit-animation-name: slideOutX;
    animation-name: slideOutX;
    -webkit-transform-origin: center right;
    transform-origin: center right;
  }
  .transition[class*="slide right"].out {
    -webkit-animation-name: slideOutX;
    animation-name: slideOutX;
    -webkit-transform-origin: center left;
    transform-origin: center left;
  }

  @-webkit-keyframes slideInY {
    0% {
      opacity: 0;
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }
  @keyframes slideInY {
    0% {
      opacity: 0;
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }
  @-webkit-keyframes slideInX {
    0% {
      opacity: 0;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }
    100% {
      opacity: 1;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
  @keyframes slideInX {
    0% {
      opacity: 0;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }
    100% {
      opacity: 1;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }

  @-webkit-keyframes slideOutY {
    0% {
      opacity: 1;
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
    100% {
      opacity: 0;
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
    }
  }
  @keyframes slideOutY {
    0% {
      opacity: 1;
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
    100% {
      opacity: 0;
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
    }
  }
  @-webkit-keyframes slideOutX {
    0% {
      opacity: 1;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
    100% {
      opacity: 0;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }
  }
  @keyframes slideOutX {
    0% {
      opacity: 1;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
    100% {
      opacity: 0;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }
  }

  .transition.swing {
    -webkit-animation-duration: 800ms;
    animation-duration: 800ms;
  }
  .transition[class*="swing down"].in {
    -webkit-animation-name: swingInX;
    animation-name: swingInX;
    -webkit-transform-origin: top center;
    transform-origin: top center;
  }
  .transition[class*="swing up"].in {
    -webkit-animation-name: swingInX;
    animation-name: swingInX;
    -webkit-transform-origin: bottom center;
    transform-origin: bottom center;
  }
  .transition[class*="swing left"].in {
    -webkit-animation-name: swingInY;
    animation-name: swingInY;
    -webkit-transform-origin: center right;
    transform-origin: center right;
  }
  .transition[class*="swing right"].in {
    -webkit-animation-name: swingInY;
    animation-name: swingInY;
    -webkit-transform-origin: center left;
    transform-origin: center left;
  }
  .transition.swing.out,
  .transition[class*="swing down"].out {
    -webkit-animation-name: swingOutX;
    animation-name: swingOutX;
    -webkit-transform-origin: top center;
    transform-origin: top center;
  }
  .transition[class*="swing up"].out {
    -webkit-animation-name: swingOutX;
    animation-name: swingOutX;
    -webkit-transform-origin: bottom center;
    transform-origin: bottom center;
  }
  .transition[class*="swing left"].out {
    -webkit-animation-name: swingOutY;
    animation-name: swingOutY;
    -webkit-transform-origin: center right;
    transform-origin: center right;
  }
  .transition[class*="swing right"].out {
    -webkit-animation-name: swingOutY;
    animation-name: swingOutY;
    -webkit-transform-origin: center left;
    transform-origin: center left;
  }

  @-webkit-keyframes swingInX {
    0% {
      -webkit-transform: perspective(1000px) rotateX(90deg);
      transform: perspective(1000px) rotateX(90deg);
      opacity: 0;
    }
    40% {
      -webkit-transform: perspective(1000px) rotateX(-30deg);
      transform: perspective(1000px) rotateX(-30deg);
      opacity: 1;
    }
    60% {
      -webkit-transform: perspective(1000px) rotateX(15deg);
      transform: perspective(1000px) rotateX(15deg);
    }
    80% {
      -webkit-transform: perspective(1000px) rotateX(-7.5deg);
      transform: perspective(1000px) rotateX(-7.5deg);
    }
    100% {
      -webkit-transform: perspective(1000px) rotateX(0deg);
      transform: perspective(1000px) rotateX(0deg);
    }
  }
  @keyframes swingInX {
    0% {
      -webkit-transform: perspective(1000px) rotateX(90deg);
      transform: perspective(1000px) rotateX(90deg);
      opacity: 0;
    }
    40% {
      -webkit-transform: perspective(1000px) rotateX(-30deg);
      transform: perspective(1000px) rotateX(-30deg);
      opacity: 1;
    }
    60% {
      -webkit-transform: perspective(1000px) rotateX(15deg);
      transform: perspective(1000px) rotateX(15deg);
    }
    80% {
      -webkit-transform: perspective(1000px) rotateX(-7.5deg);
      transform: perspective(1000px) rotateX(-7.5deg);
    }
    100% {
      -webkit-transform: perspective(1000px) rotateX(0deg);
      transform: perspective(1000px) rotateX(0deg);
    }
  }
  @-webkit-keyframes swingInY {
    0% {
      -webkit-transform: perspective(1000px) rotateY(-90deg);
      transform: perspective(1000px) rotateY(-90deg);
      opacity: 0;
    }
    40% {
      -webkit-transform: perspective(1000px) rotateY(30deg);
      transform: perspective(1000px) rotateY(30deg);
      opacity: 1;
    }
    60% {
      -webkit-transform: perspective(1000px) rotateY(-17.5deg);
      transform: perspective(1000px) rotateY(-17.5deg);
    }
    80% {
      -webkit-transform: perspective(1000px) rotateY(7.5deg);
      transform: perspective(1000px) rotateY(7.5deg);
    }
    100% {
      -webkit-transform: perspective(1000px) rotateY(0deg);
      transform: perspective(1000px) rotateY(0deg);
    }
  }
  @keyframes swingInY {
    0% {
      -webkit-transform: perspective(1000px) rotateY(-90deg);
      transform: perspective(1000px) rotateY(-90deg);
      opacity: 0;
    }
    40% {
      -webkit-transform: perspective(1000px) rotateY(30deg);
      transform: perspective(1000px) rotateY(30deg);
      opacity: 1;
    }
    60% {
      -webkit-transform: perspective(1000px) rotateY(-17.5deg);
      transform: perspective(1000px) rotateY(-17.5deg);
    }
    80% {
      -webkit-transform: perspective(1000px) rotateY(7.5deg);
      transform: perspective(1000px) rotateY(7.5deg);
    }
    100% {
      -webkit-transform: perspective(1000px) rotateY(0deg);
      transform: perspective(1000px) rotateY(0deg);
    }
  }

  @-webkit-keyframes swingOutX {
    0% {
      -webkit-transform: perspective(1000px) rotateX(0deg);
      transform: perspective(1000px) rotateX(0deg);
    }
    40% {
      -webkit-transform: perspective(1000px) rotateX(-7.5deg);
      transform: perspective(1000px) rotateX(-7.5deg);
    }
    60% {
      -webkit-transform: perspective(1000px) rotateX(17.5deg);
      transform: perspective(1000px) rotateX(17.5deg);
    }
    80% {
      -webkit-transform: perspective(1000px) rotateX(-30deg);
      transform: perspective(1000px) rotateX(-30deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: perspective(1000px) rotateX(90deg);
      transform: perspective(1000px) rotateX(90deg);
      opacity: 0;
    }
  }
  @keyframes swingOutX {
    0% {
      -webkit-transform: perspective(1000px) rotateX(0deg);
      transform: perspective(1000px) rotateX(0deg);
    }
    40% {
      -webkit-transform: perspective(1000px) rotateX(-7.5deg);
      transform: perspective(1000px) rotateX(-7.5deg);
    }
    60% {
      -webkit-transform: perspective(1000px) rotateX(17.5deg);
      transform: perspective(1000px) rotateX(17.5deg);
    }
    80% {
      -webkit-transform: perspective(1000px) rotateX(-30deg);
      transform: perspective(1000px) rotateX(-30deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: perspective(1000px) rotateX(90deg);
      transform: perspective(1000px) rotateX(90deg);
      opacity: 0;
    }
  }
  @-webkit-keyframes swingOutY {
    0% {
      -webkit-transform: perspective(1000px) rotateY(0deg);
      transform: perspective(1000px) rotateY(0deg);
    }
    40% {
      -webkit-transform: perspective(1000px) rotateY(7.5deg);
      transform: perspective(1000px) rotateY(7.5deg);
    }
    60% {
      -webkit-transform: perspective(1000px) rotateY(-10deg);
      transform: perspective(1000px) rotateY(-10deg);
    }
    80% {
      -webkit-transform: perspective(1000px) rotateY(30deg);
      transform: perspective(1000px) rotateY(30deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: perspective(1000px) rotateY(-90deg);
      transform: perspective(1000px) rotateY(-90deg);
      opacity: 0;
    }
  }
  @keyframes swingOutY {
    0% {
      -webkit-transform: perspective(1000px) rotateY(0deg);
      transform: perspective(1000px) rotateY(0deg);
    }
    40% {
      -webkit-transform: perspective(1000px) rotateY(7.5deg);
      transform: perspective(1000px) rotateY(7.5deg);
    }
    60% {
      -webkit-transform: perspective(1000px) rotateY(-10deg);
      transform: perspective(1000px) rotateY(-10deg);
    }
    80% {
      -webkit-transform: perspective(1000px) rotateY(30deg);
      transform: perspective(1000px) rotateY(30deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: perspective(1000px) rotateY(-90deg);
      transform: perspective(1000px) rotateY(-90deg);
      opacity: 0;
    }
  }

  .transition.zoom.in {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
  }
  .transition.zoom.out {
    -webkit-animation-name: zoomOut;
    animation-name: zoomOut;
  }
  @-webkit-keyframes zoomIn {
    0% {
      opacity: 1;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes zoomIn {
    0% {
      opacity: 1;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @-webkit-keyframes zoomOut {
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }
  @keyframes zoomOut {
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }

  .flash.transition {
    -webkit-animation-duration: 750ms;
    animation-duration: 750ms;
    -webkit-animation-name: flash;
    animation-name: flash;
  }
  .shake.transition {
    -webkit-animation-duration: 750ms;
    animation-duration: 750ms;
    -webkit-animation-name: shake;
    animation-name: shake;
  }
  .bounce.transition {
    -webkit-animation-duration: 750ms;
    animation-duration: 750ms;
    -webkit-animation-name: bounce;
    animation-name: bounce;
  }
  .tada.transition {
    -webkit-animation-duration: 750ms;
    animation-duration: 750ms;
    -webkit-animation-name: tada;
    animation-name: tada;
  }
  .pulse.transition {
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
    -webkit-animation-name: pulse;
    animation-name: pulse;
  }
  .jiggle.transition {
    -webkit-animation-duration: 750ms;
    animation-duration: 750ms;
    -webkit-animation-name: jiggle;
    animation-name: jiggle;
  }
  .transition.glow {
    -webkit-animation-duration: 2000ms;
    animation-duration: 2000ms;
    -webkit-animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  }
  .transition.glow {
    -webkit-animation-name: glow;
    animation-name: glow;
  }

  @-webkit-keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }
  @keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }

  @-webkit-keyframes shake {
    0%,
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translateX(10px);
      transform: translateX(10px);
    }
  }
  @keyframes shake {
    0%,
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translateX(10px);
      transform: translateX(10px);
    }
  }

  @-webkit-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }

  @-webkit-keyframes tada {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    10%,
    20% {
      -webkit-transform: scale(0.9) rotate(-3deg);
      transform: scale(0.9) rotate(-3deg);
    }
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale(1.1) rotate(3deg);
      transform: scale(1.1) rotate(3deg);
    }
    40%,
    60%,
    80% {
      -webkit-transform: scale(1.1) rotate(-3deg);
      transform: scale(1.1) rotate(-3deg);
    }
    100% {
      -webkit-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0);
    }
  }
  @keyframes tada {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    10%,
    20% {
      -webkit-transform: scale(0.9) rotate(-3deg);
      transform: scale(0.9) rotate(-3deg);
    }
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale(1.1) rotate(3deg);
      transform: scale(1.1) rotate(3deg);
    }
    40%,
    60%,
    80% {
      -webkit-transform: scale(1.1) rotate(-3deg);
      transform: scale(1.1) rotate(-3deg);
    }
    100% {
      -webkit-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0);
    }
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
    50% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
      opacity: 0.7;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
    50% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
      opacity: 0.7;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }

  @-webkit-keyframes jiggle {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes jiggle {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @-webkit-keyframes glow {
    0% {
      background-color: #fcfcfd;
    }
    30% {
      background-color: #fff6cd;
    }
    100% {
      background-color: #fcfcfd;
    }
  }
  @keyframes glow {
    0% {
      background-color: #fcfcfd;
    }
    30% {
      background-color: #fff6cd;
    }
    100% {
      background-color: #fcfcfd;
    }
  }
`;

export default style;
