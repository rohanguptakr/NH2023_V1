<template>
  <div class="info-hacks">
    <p class="text-hacks">Hackathon by The Dept. of CSE, NMIT</p>
    <br />
    <div class="cont-text-hacks">
      <p class="text-hacks">
        12th-14th May, 2023 <br /><a
          class="map"
          href="https://www.google.com/maps/place/Nitte+Meenakshi+Institute+of+Technology/@13.1284641,77.5851193,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae170d10bb559b:0x2bb3892a626cf9ba!8m2!3d13.1284641!4d77.587308?shorturl=1"
        >
          <p class="text-hacks">
            Nitte Meenakshi Institute of Technology, Bengaluru
          </p>
        </a>
      </p>
    </div>
    <div
      class="apply-button devfolio"
      ref="button-devfolio"
      data-hackathon-slug="nmithacks"
      data-button-theme="light"
      :style="{ height: `10px`, width: `312px`, padding: `2vh` }"
    ></div>
    <p class="end-date">Registration ends on: 2nd April,2023</p>
  </div>
</template>

<script>
// import { withHooks, useState, useEffect } from "vue-hooks";
import { watchEffect } from "vue";
export default {
  name: "DevfolioComponent",
  setup() {
    watchEffect(() => {
      const script = document.createElement("script");
      script.src = "https://apply.devfolio.co/v2/sdk.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
h3 {
  position: relative;
  top: 29vh;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.devfolio {
  height: 10vh;
}
.info-hacks {
  color: white;
  margin-top: 1%;
  font-size: 1rem;
  position: relative;
  top: 10vh;
  padding: 5vw;
  z-index: 1;
}

.end-date{
  font-family: "Roboto", sans-serif;
  z-index: 99;
  position: relative;
  bottom: 2vh;
  top: 2vh;
}
.text-hacks {
  font-family: "Roboto", sans-serif;
  z-index: 99;
  position: relative;
  bottom: 2vh;
}
.cont-text-hacks {
  margin-bottom: 5vh;
}
.logo-dev {
  height: 20px;
}

.pos-for-button {
  position: absolute;
  top: 50vh;
  left: 43vw;
}

.pos-for-button-2 {
  position: absolute;
  top: 40vh;
  left: 43vw;
}

.map {
  text-decoration: none;
  color: white;
  font-family: "Roboto", sans-serif;
  position: relative;
  top: 2vh;
}

.apply-button {
  height: 10vh;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
@media (max-width: 480px) {
  h3 {
    top: 55vw;
  }
  .pos-for-button {
    position: absolute;
    top: 50vh;
    left: 22vw;
  }

  .pos-for-button-2 {
    position: absolute;
    top: 40vh;
    left: 22vw;
  }
  .info-hacks {
    font-size: 0.8rem;
  }
}

@media (max-width: 900px) {
  h3 {
    top: 55vw;
  }
  .pos-for-button {
    position: absolute;
    top: 50vh;
    left: 22vw;
  }

  .pos-for-button-2 {
    position: absolute;
    top: 40vh;
    left: 22vw;
  }
  .info-hacks {
    position: relative;
    top: 15vh;
  }
}
</style>
