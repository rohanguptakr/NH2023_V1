<template>
  <section class="sponhead">
    <h1 class="contain" id="sponsors">Sponsors</h1>
  </section>
  <h1 class="platinum">Platinum sponsors</h1>
  <div class="container3-platinum">
    <a href="http://quine.sh/" target="_blank"
      ><img
        class="logo quine"
        :src="require('../assets/Quine logo.svg')"
    /></a>
    <a href="https://devfolio.co/" target="_blank"
      ><img
        class="logo"
        :src="require('../assets/Devfolio_Logo-Colored (1).svg')"
    /></a>
    <a href="https://polygon.technology/" target="_blank"
      ><img
        class="logo"
        :src="require('../assets/Polygon_Logo-Colored(1).svg')"
    /></a>
  </div>
  <h1 class="gold">Gold sponsors</h1>
  <div class="container3-gold">
    <a href="https://filecoin.io/" target="_blank"
      ><img
        class="gold-logo"
        :src="require('../assets/Filecoin-Coloured-White-Text.png')"
    /></a>
    <a href="https://solana.com/" target="_blank"
      ><img class="gold-logo" :src="require('../assets/Solana-Colored.png')"
    /></a>
    <a href="https://replit.com/" target="_blank"
      ><img
        class="gold-logo"
        :src="require('../assets/Replit-light-background.png')"
    /></a>
    <a href="https://campalin.com/" target="_blank"
      ><img class="gold-logo" :src="require('../assets/campalin-logo.png')"
    /></a>
    <a href="https://swiftride.in/" target="_blank"
      ><img class="gold-logo" :src="require('../assets/SwiftRide-Black.svg')"
    /></a>
    <a href="https://www.idp.com/india/" target="_blank"
      ><img class="gold-logo" :src="require('../assets/idp-logo.svg')"
    /></a>
    <a href="http://jumbochain.org/" target="_blank"
      ><img class="jumbo" :src="require('../assets/JumboChain-Black.svg')"
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
        class="platform-logo"
        :src="
          require('../assets/Hackathon_Logo_Wolfram_2022_resizable_Vector-1-removebg-preview.png')
        "
    /></a>
    <a href="https://givemycertificate.com/" target="_blank"
      ><img
        class="platform-logo"
        :src="require('../assets/give my certificate-logo.png')"
    /></a>
    <a href="https://www.taskade.com/" target="_blank"
      ><img class="platform-logo" :src="require('../assets/logo_taskade_black.png')"
    /></a>
    <a href="https://gen.xyz/" target="_blank"
      ><img class="platform-logo" :src="require('../assets/xyz-logo-color.png')"
    /></a>
    <a href="https://hoverrobotix.com/" target="_blank"
      ><img class="platform-logo special-logo" :src="require('../assets/HoverRobotix Logo png.png')"
    /></a>
    <a href="https://thementorx.com/" target="_blank"
      ><img class="platform-logo special-logo" :src="require('../assets/MENTORx logo black with white tag line - Round.png')"
    /></a>
    <a href="https://nancyjuneja.com/rev-up-life-skill/" target="_blank"
      ><img class="platform-logo" :src="require('../assets/RevUp Logo png clean.png')"
    /></a>
    <a href="https://www.threeway.studio/" target="_blank"
      ><img class="platform-logo" :src="require('../assets/threeway black.svg')"
    /></a>
  </div>
  <div>
    <div class="downLoadButton mx-auto text-center">
      <button
        type="button"
        class="btn btn-primary btn-outline-primary hover_button"
        :style="buttonStyle"
      >
        <a
          href="https://firebasestorage.googleapis.com/v0/b/nmit-hacks-f2830.appspot.com/o/NH'23_CompanyBrochure%20(1).pdf?alt=media&token=32e76ffe-cc6e-46a8-bf7a-4dcec1a65d25"
          target="_blank"
          class="download-buttton"
          :style="linkStyle"
          ><b>Download Brochure</b></a
        >
      </button>
    </div>

    <div class="sponsorship">
      <p class="sponsorship__text">
        For Custom Sponsorships, please contact
        <a
          class="sponsorship__link"
          href="mailto:hackathon@nmit.ac.in"
          target="_blank"
          >hackathon@nmit.ac.in</a
        >
      </p>
    </div>
  </div>

  <div class="filler5" id="newTeams"></div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      buttonStyle: {
        padding: "10px 25px 10px 25px",
        backgroundColor: "black",
        border: "5px solid #ecf27c",
      },
      linkStyle: {
        color: "#ecf27c",
        fontWeight: "900",
        fontFamily:
          "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        fontSize: "1.3rem",
        textDecoration: "none",
      },
    };
  },
  mounted() {
    if (window.innerWidth <= 600) {
      (this.buttonStyle.padding = "5px 15px 5px 15px"),
        (this.linkStyle.fontSize = "0.7rem");
    }
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

    $(document).on("scroll", function () {
      var pageTop = $(document).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var tags = $(".gold-logo");

      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom) {
          $(tag).addClass("visible");
        } else {
          $(tag).removeClass("visible");
        }
      }
    });

    $(document).on("scroll", function () {
      var pageTop = $(document).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var tags = $(".platform-logo");

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
.card {
  padding: 10px;
  margin-left: 50px;
  box-shadow: 0px 0px 0px 2px;
  color: gray;
  border-radius: 25px;
}
.card-wraper {
  display: flex;

  margin: 45px 195px;
  /* 
  margin: 0 auto;
  align-items: center;
  
  font-family: sans-serif;
  background-color: #fff; */
}
.platinum {
  text-align: center;
  font-weight: 700;
  color: skyblue;
}
.gold {
  text-align: center;
  font-weight: 700;
  color: goldenrod;
}
/* .container3-platinum a {
  transition-duration: 0.8s;
  transition-timing-function: cubic-bezier(0, 1.02, 1, 1.48);
}
.container3-gold a {
  transition-duration: 0.8s;

  transition-timing-function: cubic-bezier(0.5, 0, 0.9, 1);
}
.platform-sponsors a {
  transition-duration: 0.8s;
} */
.container3-platinum a:hover {
  filter: drop-shadow(0 6mm 3mm #6adcf2);
  border-radius: 25px;
}
.container3-gold a:hover {
  filter: drop-shadow(0 6mm 3mm goldenrod);
  border-radius: 25px;
}
.platform-sponsors a:hover {
  filter: drop-shadow(0 6mm 2mm gray);
  border-radius: 25px;
}
.filler5 {
  margin-bottom: 7%;
}
.sponsorship__text {
  font-size: 1.25rem;
  font-family: "Lucida Sans", "Lucida Sans Regular";
  margin-top: 15px;
  text-align: center;
}

.sponsorship__link {
  font-size: 1.25rem;
  font-family: "Lucida Sans", "Lucida Sans Regular";
  text-align: center;
}

@media (max-width: 600px) {
  .sponsorship__text {
    font-size: 1rem;
    margin-top: 10px;
    text-align: center;
  }

  .sponsorship__link {
    font-size: 1rem;
    text-align: center;
  }
}
.hover_button:hover {
  background-color: rgb(59, 60, 58) !important;
  text-decoration: underline;
}
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
.jumbo{
  opacity: 1;
  transform: translate(0, 2vh);
  transition: all 0.5s;
  height: 9vh;
  margin : 3vh;
}
.gold-logo{
  opacity: 1;
  transform: translate(0, 2vh);
  transition: all 0.5s;
  height: 7vh;
  margin : 3vh;
}
.quine{
  opacity: 1;
  transform: translate(0, 2vh);
  transition: all 0.5s;
  height: 8vh;

  /* width: 500px; */
  /* Use the width as 500px when removing the placeholder  */
  /* margin: auto; */
  margin: 3vh;
}
.gold-logo.visible {
  opacity: 1;
  transform: translate(0, 0);
}
.platform-logo{
  opacity: 1;
  transform: translate(0, 2vh);
  transition: all 0.5s;
  height: 7vh;
  margin : 3vh;
}
.platform-logo.visible {
  opacity: 1;
  transform: translate(0, 0);
}
.logo.visible {
  opacity: 1;
  transform: translate(0, 0);
}
@media (max-width: 480px) {
  .filler5 {
    margin-bottom: 30%;
  }
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
    margin-bottom: 40px;
  }
  .container3-gold {
    margin-right: 10vw;
  }
  .logo {
    height: 7vh;
  }
  .gold-logo{
    height : 5vh;
  }
  .platform-logo{
    height : 5vh;
  }
  .special-logo{
    height : 6vh;
  }
  .container3-platinum a:hover {
    filter : none;
    color: none;
    border-radius: none;
  }
  .container3-gold a:hover {
    filter : none;
    color: none;
    border-radius: none;
  }
  .platform-sponsors a:hover {
    filter : none;
    color: none;
    border-radius: none;
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