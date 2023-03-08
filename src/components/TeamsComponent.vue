<template>
  <div class="transkew-2">
    <div class="wrapper" id="teams">
      <h1 class="team">Our Team</h1>

      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :loop="true"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 3,
          slideShadows: true,
        }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :navigation="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide><img src="../assets/Aditya.png" /> </swiper-slide
        ><swiper-slide><img src="../assets/Ekeswar.png" /></swiper-slide
        ><swiper-slide><img src="../assets/Madhumitha.png" /></swiper-slide
        ><swiper-slide><img src="../assets/Onkar.png" /></swiper-slide
        ><swiper-slide><img src="../assets/Tejashree.png" /></swiper-slide
        ><swiper-slide><img src="../assets/Ashwin.png" /></swiper-slide
        ><swiper-slide><img src="../assets/Nitin.png" /></swiper-slide
        ><swiper-slide><img src="../assets/Shravan.png" /></swiper-slide
        ><swiper-slide><img src="../assets/Smita.png" /></swiper-slide>
        <swiper-slide><img src="../assets/Vikitha.png" /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, EffectCoverflow, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation, EffectCoverflow, Pagination],
    };
  },
};
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Trykker);
:root {
  --swiper-theme-color: #ecf27c;
}
.frame {
  background-color: #fff;
}

.transkew-2 {
  -webkit-clip-path: polygon(0 0, 100% 3%, 100% 96%, 0 100%);
  clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 96%);
}
.team {
  color: var(--bgYellow);
  padding-top: 5vh;
  font-weight: 900;
  margin-left: 10%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.7rem;
}
.swiper {
  width: 48%;
  padding-top: 100px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
  filter: blur(3px);
  opacity: 0.6;
}
.swiper-slide-active {
  filter: blur(0px);
  opacity: 1;
}

.swiper-slide img {
  display: flex;
  width: 100%;
  height: 100%;
}

.wrapper {
  background-color: var(--bgBlue);
  max-width: 100vw;
  max-height: 100vh;
  padding-bottom: 10vh;
}

img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}
.swiper-pagination-bullet {
  background: white;
}
.swiper-button-prev {
  top: 53%;
}
.swiper-button-next {
  top: 53%;
}
@media (max-width: 480px) {
  .team {
    padding-left: 8%;
    margin-bottom: -10vh;
  }
  .swiper {
    padding-top: 130px;
  }
  .swiper-button-prev {
    top: 53%;
  }
  .swiper-button-next {
    top: 53%;
    right: 0px;
  }
}

@media (max-width: 900px) {
  /* .carousel-inner {
    margin-top: -147px;
  } */

  .team {
    padding-left: 8%;
    margin-bottom: -10vh;
  }
  .swiper {
    padding-top: 130px;
    width: 95%;
  }
}
</style>
