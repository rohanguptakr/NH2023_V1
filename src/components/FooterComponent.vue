<template>
  <div class="footer-basic" id="footer">
    <footer>
      <h1 class="contact">Contact Us</h1>
      <div class="logos">
        <div class="nmitlogo">
          <a href="https://www.nmit.ac.in/" target="_blank">
            <img
              :src="require('../assets/nitte_nmit_logo.png')"
              alt=""
              class="nitte-logo"
          /></a>
        </div>
        <img
          :src="require('../assets/NHCenterLogo.png')"
          alt=""
          class="hacks-logo"
        />
      </div>
      <p class="text">Follow Us</p>
      <div class="social">
        <a href="https://www.instagram.com/nmit_hacks/" target="_blank"
          ><i class="fa-brands fa-instagram"></i></a
        ><a href="https://twitter.com/NMIT_Hacks" target="_blank"
          ><i class="fa-brands fa-twitter"></i></a
        ><a href="https://www.facebook.com/nmit.hacks.50" target="_blank"
          ><i class="fa-brands fa-facebook"></i></a
        ><a
          href="https://www.linkedin.com/company/nmit-hacks/posts/?feedView=all"
          target="_blank"
          ><i class="fa-brands fa-linkedin"></i
        ></a>
      </div>
      <p class="code">
        <a
          href="https://devfolio.co/code-of-conduct"
          class="conduct"
          target="_blank"
          >Code of Conduct</a
        >
      </p>
      <p class="code">
        <a href="mailto: hackathon@nmit.ac.in" class="conduct"
          >Email us at: hackathon@nmit.ac.in</a
        >
      </p>
      <div class="code visitors-total">Visitors : 
        <p class="code visitors counter">{{ count }}</p>
      </div>
      <p class="end">Made with ❤️ by NMIT Hacks</p>
    </footer>
  </div>
</template>

<script>

import axios from "axios";

/* eslint-disable */
export default {
  data() {
    return {
      count : 1,
    }
  },
  methods: {
    async getCount() {
      try {
        const res = await axios.get("https://api.countapi.xyz/update/nmithacksAshwin/nmitHacksAshwin/?amount=1");
        this.count = res.data.value;
      }
      catch(err){
        console.log(err);
      }
    }
  },

  mounted() {
    this.getCount();
  }
}

</script>

<style>
.footer-basic {
  padding: 40px 0;
  background-color: var(--bgBlue);
  color: var(--bgYellow);
  position: relative;
  bottom: 0%;
  width: 100%;
  /* margin-top : 95vh; */
}

.contact {
  margin-top: 5%;
  font-weight: 900;
  padding-left: 10rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.5rem;
}

.logos {
  display: flex;
  justify-content: space-evenly;
  margin-top: -86px;
}

.visitors{
  color : white;
  font-weight: bold;
  display:inline;
}
.visitors-total{
  margin-left : 0vw;
}
.nmitlogo {
  margin-top: 170px;
}
.nitte-logo {
  width: auto;
}

.hacks-logo {
  margin-top: 8%;
  margin-bottom: 5%;
}

.footer-basic .social {
  text-align: center;
  padding-bottom: 30px;
}

.footer-basic .social > a {
  font-size: 24px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin: 0 8px;
  color: inherit;
  opacity: 0.75;
}

.footer-basic .social > a:hover {
  opacity: 0.9;
}

.footer-basic .text {
  margin-bottom: 20px;
  margin-top: 15px;
  text-align: center;
  font-size: 18px;
  color: #aaa;
}

.footer-basic .code {
  margin-bottom: 20px;
  margin-top: 15px;
  text-align: center;
  font-size: 16px;
  color: #aaa;
}

.footer-basic .conduct {
  color: #aaa;
  text-decoration: none;
}

.footer-basic .conduct:hover {
  text-decoration: underline;
}

.footer-basic .end {
  margin-top: 3%;
  text-align: center;
  font-size: 20px;
  color: #fff;
}

@media (max-width: 480px) {
  .logos {
    display: flex;
  }
  .nitte-logo {
    padding-top: 5vh;
  }
  .contact {
    padding-left: 0;
    margin-left: 10%;
  }
}

@media (max-width: 900px) {
  .logos {
    display: flex;
    margin-top: -140px;
  }
  .nmitlogo {
    margin-top: 135px;
  }
  .nitte-logo {
    width: 175px;
    margin-top: 8%;
    padding-left: 2rem;
    margin-bottom: 5%;
  }

  .hacks-logo {
    width: 175px;
    padding-left: 2rem;
    margin-top: 45%;
    padding-right: 10px;
    margin-bottom: 5%;
  }
  .contact {
    padding-left: 0;
    margin-left: 10%;
  }
}
</style>
