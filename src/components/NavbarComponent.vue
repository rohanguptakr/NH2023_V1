<template>
    <header>
    <div class="hamburger-icon" id="icon" ref="icon" @click="handleClick">
        <div class="icon-1" id="a" ref="icon1"></div>
        <div class="icon-2" id="b" ref="icon2"></div>
        <div class="icon-3" id="c" ref="icon3"></div>
        <div class="clear"></div>
      </div>
      
      <nav id="nav" ref="nav">
         
        <ul>
          <li>Home</li>
          <li>Tracks</li>
          <li>Prizes</li>
          <li>Schedule</li>
          <li>Sponsors</li>
          <li>Teams</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      
      </nav>
      
      <!-- <div class="dark-blue" id="blue" ref="blue"></div> -->
      
      <section class="content">
          <svg id="Layer_1" fill= '#ecf27c' data-name="Layer 1"  class= "logo cls-1 cls-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080"><title>Artboard 10 copy</title><polygon class="cls-1" points="533.04 496.75 488.52 472.1 408.9 313.88 410.11 429.81 380.23 413.24 378.97 262.47 422.99 282.92 498.44 429.51 498.15 317.83 533.03 333.85 533.04 496.75"/><polygon class="cls-1" points="547.01 496.74 546.57 333.86 583.46 316.76 583.64 381.1 668.63 338.64 668.47 277.36 700.65 262.44 701.03 411.55 668.87 429.33 668.71 368.73 583.73 412.68 583.9 476.3 547.01 496.74"/><path class="cls-1" d="M539.86,176.58l153,59.75c3.57,1.39,2,4-2.39,4H632.36A41.59,41.59,0,0,1,617,237.45l-77.1-31.18-76.78,31.06a38.82,38.82,0,0,1-14.88,2.7h-58c-4.4,0-6-2.66-2.39-4Z"/><path class="cls-1" d="M539.85,325.32,383.93,253.43c-3.13-1.43-.6-4.16,3.84-4.16h58.65a37.6,37.6,0,0,1,15.05,3L539.86,287,618,252.4a35.2,35.2,0,0,1,14.55-2.77h58.67c4.45,0,7,2.72,3.84,4.16Z"/><path class="cls-2" d="M593.4,708.15h-61q-6.79,0-9.73.93-5.75,1.8-6.75,9a77.28,77.28,0,0,0-.54,10.71q0,8.57,1.37,12.76a9.22,9.22,0,0,0,6.52,6.52,33.44,33.44,0,0,0,8.87.93h61.46l.07,19.64h-65a101.53,101.53,0,0,1-17.57-1.28q-10.9-1.92-15.71-10.52a29.67,29.67,0,0,1-3.09-10.36,139.62,139.62,0,0,1-1-17.56,141.32,141.32,0,0,1,1.08-19.95,22.93,22.93,0,0,1,6.24-13,19.05,19.05,0,0,1,10.29-5.58,86.47,86.47,0,0,1,16.41-1.17h68.09Z"/><polygon class="cls-1" points="444.72 689.22 487.01 768.63 460.58 768.63 429.27 708.65 408.04 748.99 397.7 768.63 382.21 768.63 370.98 768.63 414.31 689.22 444.72 689.22"/><path class="cls-1" d="M609.24,768.67,609,689.22h24.11l.29,79.45Zm37.19-49.79,32.43-29.66H711.8l-45.09,39.25,49.82,40.2H681.69L646.5,738.18Z"/><polygon class="cls-1" points="254.29 768.63 254 689.22 278.1 689.22 278.22 721.24 337.73 721.24 337.61 689.22 361.71 689.22 362 768.63 337.9 768.63 337.78 736.96 278.28 736.96 278.39 768.63 254.29 768.63"/><path class="cls-2" d="M727.91,751.71c.58,0,31.07.09,31.71.12q8.4.34,23.23.06,11-.18,14-1.72,2.85-1.5,2.84-5.34,0-5.18-4-6.5a28.47,28.47,0,0,0-7.95-.87c-.72,0-3,0-6.86-.05H759.39q-8.73,0-15.13-.58-10.34-.86-14.69-6.59-3.8-5.12-3.83-16.06t3.54-15.95a15.8,15.8,0,0,1,7.22-5.51q6.82-2.69,21-3.27,5.52-.23,15.85-.23c3.7,0,42.6,0,45.64,0l.06,16.81c-1.4,0-38.44-.05-40.07-.05q-14,0-21.49.51-5.54.4-7.07,2.28A6.49,6.49,0,0,0,749.1,713q0,4.9,5.09,6.22c.95.26,4.13.45,9.52.57h22.08q5.81,0,16.58.57,12.42.63,16.89,7.06,3.84,5.51,3.88,16.07,0,13.2-5.75,18.76-4.38,4.18-14.81,5.28-11.18,1.15-29.42,1.15c-5.8,0-40.79,0-45.19-.15Z"/><polygon class="cls-1" points="397.3 664.67 358.44 664.67 283.87 590.28 285.06 664.65 255.28 664.65 254 566.08 297.57 566.08 367.26 634.45 367.01 566.08 396.94 566.08 397.3 664.67"/><polygon class="cls-2" points="634.54 664.65 634.18 566.08 664.11 566.08 664.47 664.65 634.54 664.65"/><polygon class="cls-1" points="515.91 658.32 498.89 642.49 446.11 591.88 447.29 664.65 417.63 664.65 416.33 566.08 459.81 566.08 515.77 620.99 571.33 566.08 614.8 566.08 615.14 664.65 585.48 664.65 585.22 591.88 532.8 642.49 515.91 658.32"/><polygon class="cls-1" points="740.35 664.65 740.08 590.03 737.68 590.03 683.6 590.03 683.51 566.11 825.91 566.11 826 590.03 774.64 590.03 769.52 590.03 769.78 664.65 740.35 664.65"/><path class="cls-2" d="M429,876.54l.05,13H359.64l-.07-17.31c0-3.65.69-6.51,2.1-8.6q3.12-4.65,9.9-5.6,3.26-.48,8-.82l22.61-1.74a28.78,28.78,0,0,0,7.21-1.09c1.94-.75,2.91-2.66,2.89-5.73s-.81-4.85-2.41-5.6q-1.69-.78-6.74-.87c-2.76-.06-5.7-.09-8.84-.09-3.72,0-34.82.23-34.82.23l0-12.21s32-.12,35.61-.12q13.17,0,20.13.65,8.91.87,11.89,6.52a15.15,15.15,0,0,1,1.72,5.78,41.39,41.39,0,0,1,.23,4.58q0,7.38-1.43,10.73c-1.3,3-3.52,6.15-6.67,7.45-2.49,1-6.74.73-12.74,1.11l-22.4,1.48c-2.89.23-4.69.4-5.39.52q-4.51.74-4.5,5.43c0,.61,0,1.36.11,2.26Z"/><path class="cls-2" d="M591.79,876.54l.05,13H522.41l-.06-17.31c0-3.65.68-6.51,2.1-8.6q3.1-4.65,9.89-5.6,3.25-.48,8-.82l22.6-1.74a28.69,28.69,0,0,0,7.21-1.09q2.91-1.12,2.9-5.73c0-3-.82-4.85-2.42-5.6q-1.7-.78-6.74-.87-4.14-.09-8.83-.09c-3.73,0-34.82.23-34.82.23l0-12.21s32-.12,35.61-.12q13.17,0,20.13.65,8.93.87,11.9,6.52a15.32,15.32,0,0,1,1.71,5.78,43.77,43.77,0,0,1,.24,4.58c0,4.92-.46,8.5-1.44,10.73-1.3,3-3.52,6.15-6.67,7.45-2.49,1-6.74.73-12.74,1.11l-22.39,1.48c-2.9.23-4.7.4-5.39.52q-4.53.74-4.51,5.43c0,.61,0,1.36.11,2.26Z"/><path class="cls-2" d="M671.45,876.54l0,13H602.06L602,872.27c0-3.65.68-6.51,2.1-8.6q3.1-4.65,9.89-5.6,3.25-.48,8-.82l22.6-1.74a28.89,28.89,0,0,0,7.22-1.09c1.93-.75,2.9-2.66,2.89-5.73s-.82-4.85-2.42-5.6q-1.69-.78-6.74-.87-4.14-.09-8.83-.09c-3.73,0-34.82.23-34.82.23l0-12.21s32-.12,35.61-.12q13.17,0,20.13.65,8.92.87,11.9,6.52A15.51,15.51,0,0,1,671.2,843a44,44,0,0,1,.23,4.58q0,7.38-1.44,10.73c-1.29,3-3.52,6.15-6.67,7.45-2.49,1-6.74.73-12.74,1.11l-22.39,1.48c-2.9.23-4.7.4-5.39.52q-4.53.74-4.51,5.43c0,.61,0,1.36.11,2.26Z"/><path class="cls-2" d="M476.08,830q14.09,0,21.24,1.12,10.81,1.73,13.3,10.93,1.53,5.82,1.57,17.48T511,877.09q-2.11,9.64-12.14,11.32-6.93,1.17-21.87,1.17-15.81,0-20.76-.48-7.59-.68-11-3.53-4.44-3.62-5.51-12.52a125.79,125.79,0,0,1-.57-13.43q-.06-15.37,2.9-20.88a12.19,12.19,0,0,1,5.32-5.34,27,27,0,0,1,9-2.54A176.78,176.78,0,0,1,476.08,830Zm-.59,13.67a68.26,68.26,0,0,0-12.68.82q-4.4.9-5.73,3.92-1.18,2.85-1.16,12a53.91,53.91,0,0,0,.51,8.46,7,7,0,0,0,6.4,6.13,95.53,95.53,0,0,0,13.33.73,87.66,87.66,0,0,0,11.74-.65q6.12-.86,7-6.25a65.56,65.56,0,0,0,.44-9.71q0-7.59-.81-10-1.3-3.84-6.1-4.79Q485,843.63,475.49,843.63Z"/><path class="cls-1" d="M293.25,859.88l43.24-43.25c.94-.94,2.72-.37,2.72.87v16.35a6.1,6.1,0,0,1-2,4.26l-21.76,21.77,21.68,21.69a5.61,5.61,0,0,1,1.81,4.12V902c0,1.24-1.79,1.81-2.72.87Z"/><path class="cls-1" d="M786.75,859.65,743.51,902.9c-.94.94-2.72.37-2.72-.87V885.69a6.1,6.1,0,0,1,2-4.27l21.76-21.77L742.83,838a5.63,5.63,0,0,1-1.81-4.13V817.5c0-1.24,1.79-1.81,2.72-.87Z"/><path class="cls-1" d="M716.4,816.19l15.8,0L697.3,903.4l-15.81,0Z"/></svg>
      </section>
      <DevfolioComponent />
    </header>
</template>


<script>

  import DevfolioComponent from "./DevfolioComponent.vue";
    export default {
      name : "NavbarComponent",
      components: {
        DevfolioComponent
      }
      ,
      methods : {
        handleClick(){
          this.$refs.icon1.classList.toggle("a");
          this.$refs.icon2.classList.toggle("c");
          this.$refs.icon3.classList.toggle("b");
          this.$refs.nav.classList.toggle("show");
          this.$refs.blue.classList.toggle("blue");
        }
      }
    }
</script>


<style>
    @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
    .cls-1,.cls-2{
      fill:#ecf27c;
      height:400px;
      width : 400px;
    }
    .cls-2{
      fill-rule:evenodd;
    }
body {
  font-family: "montserrat", roboto;
}

header {
  width: 100%;
  height:100vh;
  background: #080518;
  overflow: auto;
  color:#ecf27c;
}

.icon-1, .icon-2, .icon-3 {
  position: absolute;
  left: 20%;
  top: 50%;
  width: 32px;
  height: 3px;
  background-color: #080518;
  transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
}

.icon-1 {
  transform: translateY(-8px);
  -webkit-animation-delay: 100ms;
          animation-delay: 100ms;
}

.icon-3 {
  transform: translateY(8px);
  -webkit-animation-delay: 250ms;
          animation-delay: 250ms;
}

.hamburger-icon {
  position: absolute;
  height: 50px;
  width: 50px;
  top: 10%;
  left: 3%;
  z-index: 1000;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  background: #ecf27c;
  opacity: 0.6;
}
.hamburger-icon:hover {
  transform: scale(1.2);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
}

.icon-1.a {
  transform: rotate(40deg);
}

.icon-3.b {
  transform: rotate(-40deg);
}

.icon-2.c {
  opacity: 0;
}

.clear {
  clear: both;
}

@-webkit-keyframes slideIn {
  0% {
    width: 0%;
    opacity: 0;
  }
  100% {
    width: 10%;
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    width: 0%;
    opacity: 0;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
}
nav {
  background: #ecf27c;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  z-index: 10;
  opacity: 0;
  transition: all 600ms cubic-bezier(0.62, 0.04, 0.3, 1.56);
  transition-delay: 100ms;
}
nav ul {
  margin: 0;
  position: absolute;
  top: 30%;
  left: 5%;
}
nav ul li {
  list-style: none;
  font-size: 18px;
  color: #080518;
  line-height: 2.2;
  text-transform: uppercase;
  letter-spacing: 1.7px;
  font-weight: bolder;
  cursor: pointer;
}

nav.show {
  width: 30%;
  opacity: 1;
}

.dark-blue {
  position: absolute;
  top: 0;
  left: 0;
  background: #080518;
  height: 100%;
  width: 0%;
  transition: all 500ms cubic-bezier(0.62, 0.04, 0.3, 1.8);
  transition-delay: 50ms;
  z-index: 5;
  opacity: 1;
}

.dark-blue.slide {
  width: 30%;
  opacity: 1;
}

@-webkit-keyframes shotup {
  0% {
    transform: translateY(300%);
    opacity: 0;
  }
  90% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(100%);
    opacity: 1;
  }
}

@keyframes shotup {
  0% {
    transform: translateY(300%);
    opacity: 0;
  }
  90% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(100%);
    opacity: 1;
  }
}
.content {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.content svg{
  position: relative;
  font-size: 70px;
  -webkit-animation: shotup 1000ms ease-in-out;
          animation: shotup 1000ms ease-in-out;
  -webkit-animation-delay: 300ms;
          animation-delay: 300ms;
}




@media (max-width: 480px) {
  nav ul li {
    font-size : 18px;
  }
  
  nav ul {
    margin: 0;
    position: absolute;
    top: 30%;
  }
  nav.show {
    width: 50%;
    opacity: 1;
  }
  .dark-blue.slide {
    width: 50%;
    opacity: 1;
  }
}

.logo{
  height : 720px;
}


nav ul li {
  background-image: linear-gradient(
    to right,
    #6102ba,
    #000 80%
  ); 
  background-size: 200% 100%;
  background-position: -100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease-in-out;
}


/* nav ul li:before {
  content: '';
  background: #54b3d6;
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
} */


nav ul li:hover {
  background-position: 0;

 }

 nav ul li:hover::before {
  width: 100%;
  background-color: black;
  color:white;
 }
</style>