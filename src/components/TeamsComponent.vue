<template>
  <div class="transkew-2">
    <div class="wrapper" id="teams">
      <h1 class="team">Our Team</h1>
      <figure class="frame">
        <div class="carousel dissolve">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="true"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button
              ><button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button
              ><button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="6"
                aria-label="Slide 7"
              ></button
              ><button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="7"
                aria-label="Slide 8"
              ></button
              ><button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="8"
                aria-label="Slide 9"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="9"
                aria-label="Slide 10"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/Aditya.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/Ekeswar.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/Madhumitha.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/Onkar.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/Tejashree.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/Ashwin.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/Nitin.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/Shravan.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>

              <div class="carousel-item">
                <img
                  src="../assets/Smita.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/Vikitha.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              color
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.frame {
  background-color: #fff;
}
.carousel-inner {
  margin-left: -5px;
}
.carousel-indicators [data-bs-target] {
  height: 5px;
  background-color: white;
  width: 18px;
  margin-bottom: -23px;
}
.carousel-indicators .active {
  background-color: #080518;
}
.carousel-control-prev-icon {
  background-color: #27333f66;
  border-radius: 0;
  padding: 20px;
  height: 60px;
}
.carousel-control-next-icon {
  background-color: #27333f66;
  border-radius: 0;
  padding: 20px;
  height: 60px;
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
@import url(https://fonts.googleapis.com/css?family=Trykker);
.dissolve {
  margin-top: 10vh;
  margin-bottom: 10vh;
  width: 400px;
  height: 400px;
  position: relative;
  overflow: hidden;
}
.dissolve .item {
  position: absolute;
  left: 0;
  right: 0;
  opacity: 0;
  animation: dissolve 36s linear infinite;
}
.wrapper {
  background-color: var(--bgBlue);
  max-width: 100vw;
  max-height: 100vh;
  padding-bottom: 10vh;
}

@-webkit-keyframes dissolve {
  0%,
  30%,
  100% {
    opacity: 0;
  }
  5%,
  25% {
    opacity: 1;
  }
}
@-moz-keyframes dissolve {
  0%,
  30%,
  100% {
    opacity: 0;
  }
  5%,
  25% {
    opacity: 1;
  }
}
@-ms-keyframes dissolve {
  0%,
  30%,
  100% {
    opacity: 0;
  }
  5%,
  25% {
    opacity: 1;
  }
}
@keyframes dissolve {
  0%,
  30%,
  100% {
    opacity: 0;
  }
  5%,
  25% {
    opacity: 1;
  }
}
img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}

figure {
  width: 400px;
  margin: 10px auto 0;
}
figure .carousel {
  width: 400px;
  box-shadow: 0 0 0 10px white, 0 0.3em 0.8em 10px black;
  border-radius: 0;
}
figure figcaption {
  text-transform: uppercase;
  margin-top: 10px;
  padding-top: 0.5em;
  font-size: 1.2em;
  text-align: center;
  color: #999;
  text-shadow: 0 -0.1em 0 rgba(0, 0, 0, 0.6);
}
figure figcaption:before,
figure figcaption:after {
  content: "\2014";
  font-family: "Times New Roman", serif;
  text-shadow: none;
  color: rgba(255, 255, 255, 0.2);
}
figure figcaption:before {
  margin-right: 0.3em;
}
figure figcaption:after {
  margin-left: 0.3em;
}
/* figure p {
	color: #999;
	text-align: center;
}
figure p a {
	color: #06afd8;
} */



@media (max-width: 480px) {
  figure {
    width: 300px;
    height: 300px;
    margin-bottom: 20%;
  }
  figure .carousel {
    width: 250px;
    height: 300px;
    box-shadow: 0 0 0 10px #fff, 0 0.3em 0.8em 10px black;
    margin-top: 50%;
  }
  .team {
    padding-left: 8%;
    margin-bottom: -10vh;
  }
  .carousel-inner {
    margin-top: -147px;
  }
}

@media (max-width: 900px) {
  figure {
    width: 300px;
    height: 300px;
    margin-bottom: 20%;
    margin-top: 20%;
  }
  /* .carousel-inner {
    margin-top: -147px;
  } */
  .carousel-indicators {
    bottom: 12px;
  }
  figure .carousel {
    width: 300px;
    height: 300px;
    box-shadow: 0 0 0 10px #fff, 0 0.3em 0.8em 10px black;
  }

  .team {
    padding-left: 8%;
    margin-bottom: -10vh;
  }
}
</style>
