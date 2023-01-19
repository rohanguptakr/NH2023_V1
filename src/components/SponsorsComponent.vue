<template>
  <section class="sponhead">
    <h1 class="contain" id="sponsors">Sponsors</h1>
  </section>
  <div class="container3-platinum">
    <a href="https://devfolio.co/" target="_blank"
      ><img class="logo" :src="require('../assets/Devfolio_Logo-Colored.png')"
    /></a>
    <a href="https://polygon.technology/" target="_blank"
      ><img class="logo" :src="require('../assets/Polygon_Logo-Colored.png')"
    /></a>
  </div>
  <div class="container3-gold">
    <a href="https://filecoin.io/" target="_blank"
      ><img
        class="logo"
        :src="require('../assets/Filecoin Coloured White Text.png')"
    /></a>
    <a href="https://solana.com/" target="_blank"
      ><img class="logo" :src="require('../assets/Solana-Colored.png')"
    /></a>
    <a href="https://replit.com/" target="_blank"
      ><img
        class="logo"
        :src="require('../assets/Replit-light-background.png')"
    /></a>
  </div>

  <!-- <div class="container-sponsors">
  <div class="wrapper-sponsors">
    <div class="content-sponsors">
      <div class="item-sponsors"> -->
  <!-- Place your content here to have it be centered vertically and horizontally  -->
  <!-- <h1 class="h1-sponsors logo">Revealing shortly!!!</h1>
        <p class="p-sponsors">For personalised sponsorship benefits contact us on <a href="mailto:Hackathon@nmit.ac.in" class="email">Hackathon@nmit.ac.in</a></p>
      </div>
    </div>
  </div>
</div> -->
  <section class="sponhead">
    <h1 class="contain" id="sponsors">Platform Sponsors</h1>
  </section>
  <div class="platform-sponsors">
    <a href="https://www.wolfram.com/language/" target="_blank"
      ><img
        class="logo wolfram"
        :src="
          require('../assets/Hackathon Logo Wolfram 2022 resizable Vector-1.png')
        "
    /></a>
    <a href="https://givemycertificate.com/" target="_blank"
      ><img class="logo" :src="require('../assets/GMC LogoS.png')"
    /></a>
    <a href="https://www.taskade.com/" target="_blank"
      ><img class="logo" :src="require('../assets/logo_taskade_black.png')"
    /></a>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  mounted() {
    $(document).on("scroll", function () {
      var pageTop = $(document).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var tags = $(".logo");

      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom) {
          $(tag).addClass("visible");
        } else {
          $(tag).removeClass("visible");
        }
      }
    });
  },
};
</script>

<style>
.container3-platinum {
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10vh;
}
.container3-gold {
  width: 85vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10vh;
}
.platform-sponsors {
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10vh;
}
.email {
  text-decoration: none;
  font-weight: 900;
  color: #1e1e1e;
}
.email:hover {
  text-decoration: underline;
}
.contain {
  margin-left: 10%;
  font-weight: 900;
  color: var(--bgBlue);
  padding-bottom: 5rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.8rem;
}

/* .container3 {
	display: grid;
	grid-gap: 5%;
	grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
	grid-template-rows: repeat(2, 150px);
    margin-bottom: 8%;
    margin-left: 20%;
    margin-right: 20%;
} */

/* .container3 div{
    margin: 0 auto;
    padding: 8%;
} */

body {
  margin: 0;
  padding: 0;
}
.fade-in-image {
  height: 100vh;
}
.logo {
  opacity: 1;
  transform: translate(0, 2vh);
  transition: all 0.5s;
  height: 10vh;

  /* width: 500px; */
  /* Use the width as 500px when removing the placeholder  */
  /* margin: auto; */
  margin: 3vh;
}
.logo.visible {
  opacity: 1;
  transform: translate(0, 0);
}
@media (max-width: 480px) {
  .contain {
    padding-left: 8%;
  }
  /* .container3{
        margin : 0 auto;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-template-rows: repeat(6, 120px);
    } */
  .container3-platinum {
    margin-right: 20vw;
    margin-bottom: 0;
  }
  .container3-gold {
    margin-right: 10vw;
  }
  .logo {
    height: 8vh;
  }
}

@media (max-width: 900px) {
  .contain {
    padding-left: 8%;
  }
  /* .container3{
        margin :5vw auto;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-template-rows: repeat(6, 120px);
    } */
}

@import url(https://fonts.googleapis.com/css?family=Montserrat);
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);

.h1-sponsors {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 2em;
  color: #333;
  /* -webkit-text-shadow: 0 2px 1px rgba(0, 0, 0, 0.6), 0 0 2px rgba(0, 0, 0, 0.7);
  -moz-text-shadow: 0 2px 1px rgba(0, 0, 0, 0.6), 0 0 2px rgba(0, 0, 0, 0.7);
  text-shadow: 0 2px 1px rgba(0, 0, 0, 0.6), 0 0 2px rgba(0, 0, 0, 0.7); */
  word-spacing: 16px;
}

.p-sponsors {
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  font-weight: bold;
  color: #222;
  text-shadow: 0 0 40px #ffffff, 0 0 30px #ffffff, 0 0 20px #ffffff;
}

.container-sponsors {
  width: 100%;
  background-size: cover;
  padding-bottom: 10vh;
}

.wrapper-sponsors {
  width: 100%;
  min-height: 100%;
  height: auto;
  display: table;
}

.content-sponsors {
  display: table-cell;
  vertical-align: middle;
}

.item-sponsors {
  width: auto;
  height: auto;
  margin: 0 auto;
  text-align: center;
  padding: 8px;
}

@media only screen and (min-width: 800px) {
  .h1-sponsors {
    font-size: 2em;
  }
  .p-sponsors {
    font-size: 1em;
  }
}

@media only screen and (max-width: 320px) {
  .h1-sponsors {
    font-size: 2em;
  }
  .p-sponsors {
    font-size: 1em;
  }
}
</style>
