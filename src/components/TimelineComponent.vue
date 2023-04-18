<!-- After  -->
<template>
  <div class="timeline-container">
    <section class="intro">
      <h1 class="containers">Timeline</h1>
    </section>

    <div>
      <ul class="ul1">
        <li class="li1" @click="changeDay1"><button>DAY-1</button></li>
        <li class="li1" @click="changeDay2"><button>DAY-2</button></li>
        <li class="li1" @click="changeDay3"><button>DAY-3</button></li>
      </ul>
    </div>

    <!-- desktop view -->
    <section class="ps-timeline-sec" v-if="Day == 1">
      <div class="date"><h5>5th May 2023</h5></div>
      <div class="container">
        <ol class="ps-timeline">
          <li>
            <div class="img-handler-top">
              <h5>Check-in</h5>
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_MzwgIsCvZg.json"
                background="transparent"
                speed="1"
                style="width: 100px; height: 100px"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="ps-bot">
              <h6>1:30 PM</h6>
            </div>
            <span class="ps-sp-top"></span>
          </li>
          <li>
            <div class="img-handler-bot">
              <h5>Inauguration</h5>
              <img class="inaug" src="..//assets/inauguration.png" />
            </div>
            <div class="ps-top">
              <h6>2:30 PM</h6>
            </div>
            <span class="ps-sp-bot"></span>
          </li>
          <li>
            <div class="img-handler-top">
              <h5>Partner Session</h5>
              <lottie-player
                src="https://assets8.lottiefiles.com/packages/lf20_1pjemuh2.json"
                background="transparent"
                speed="1"
                style="width: 100px; height: 100px"
                autoplay
                loop
              ></lottie-player>
            </div>
            <div class="ps-bot">
              <h6>3:00 PM</h6>
            </div>
            <span class="ps-sp-top"></span>
          </li>
          <li>
            <div class="img-handler-bot">
              <h5>Snacks</h5>
              <lottie-player
                src="https://assets5.lottiefiles.com/private_files/lf30_1jta1v1j.json"
                background="transparent"
                speed="1"
                style="width: 100px; height: 100px"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="ps-top">
              <h6>4:00 PM-4:30 PM</h6>
            </div>
            <span class="ps-sp-bot"></span>
          </li>
          <li>
            <div class="img-handler-top">
              <h5>Hack begins</h5>
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_PgWzCB9W9i.json"
                background="transparent"
                speed="1"
                style="width: 100px; height: 100px"
                hover
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="ps-bot">
              <h6>4:30 PM</h6>
            </div>
            <span class="ps-sp-top"></span>
          </li>
          <li>
            <div class="img-handler-bot">
              <h5>Mentoring Session 1</h5>
              <lord-icon
                src="https://cdn.lordicon.com/kjkiqtxg.json"
                trigger="loop"
                delay="2000"
                style="width: 100px; height: 100px"
              >
              </lord-icon>
            </div>
            <div class="ps-top">
              <h6>7:00 PM-9:00 PM</h6>
            </div>
            <span class="ps-sp-bot"></span>
          </li>
          <li>
            <div class="img-handler-top">
              <h5>Dinner</h5>
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_ChM6vU.json"
                background="transparent"
                speed="0.7"
                style="width: 100px; height: 100px"
                hover
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="ps-bot">
              <h6>8:00 PM</h6>
            </div>
            <span class="ps-sp-top"></span>
          </li>
        </ol>
      </div>
    </section>

    <section class="ps-timeline-sec" v-if="Day == 2">
      <div class="date"><h5>6th May 2023</h5></div>
      <div class="container">
        <ol class="ps-timeline">
          <li style="width: 12%">
            <div class="img-handler-top">
              <h5>Midnight surprise</h5>
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_8sq6uc4a.json"
                background="transparent"
                speed="1"
                style="width: 100px; height: 100px"
                hover
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="ps-bot">
              <h6>12:00 AM</h6>
            </div>
            <span class="ps-sp-top"></span>
          </li>
          <li style="width: 12%">
            <div class="img-handler-bot">
              <h5>Breakfast</h5>
              <img src="../assets/dosa.png" width="100px" height="100px" />
            </div>
            <div class="ps-top">
              <h6>8:00 AM</h6>
            </div>
            <span class="ps-sp-bot"></span>
          </li>
          <li style="width: 12%">
            <div class="img-handler-top">
              <h5>Judging round 1</h5>
              <img src="../assets/judge.png" width="100px" height="100px" />
            </div>
            <div class="ps-bot">
              <h6>9:00 AM - 10:30 AM</h6>
            </div>
            <span class="ps-sp-top"></span>
          </li>
          <li style="width: 12%">
            <div class="img-handler-bot">
              <h5>Partner session (Quine)</h5>
              <lottie-player
                src="https://assets8.lottiefiles.com/packages/lf20_1pjemuh2.json"
                background="transparent"
                speed="1"
                style="width: 100px; height: 85px"
                hover
                loop
              ></lottie-player>
            </div>
            <div class="ps-top">
              <h6>12:30 PM - 1:00 PM</h6>
            </div>
            <span class="ps-sp-bot"></span>
          </li>
          <li style="width: 12%">
            <div class="img-handler-top">
              <h5>Lunch</h5>
              <lottie-player
                src="https://assets8.lottiefiles.com/private_files/lf30_fqBsFC.json"
                background="transparent"
                speed="1"
                style="width: 100px; height: 100px"
                hover
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="ps-bot">
              <h6>1:00 PM</h6>
            </div>
            <span class="ps-sp-top"></span>
          </li>
          <li style="width: 12%">
            <div class="img-handler-bot">
              <h5>Snacks</h5>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_7chz2lvf.json"
                background="transparent"
                speed="1"
                style="width: 100px; height: 100px"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="ps-top">
              <h6>4:00 PM - 4:30 PM</h6>
            </div>
            <span class="ps-sp-bot"></span>
          </li>
          <li style="width: 12%">
            <div class="img-handler-top">
              <h5>Mentoring session 2</h5>
              <lord-icon
                src="https://cdn.lordicon.com/kjkiqtxg.json"
                trigger="hover"
                style="width: 100px; height: 100px"
              >
              </lord-icon>
            </div>
            <div class="ps-bot">
              <h6>7:00 PM - 9:00 PM</h6>
            </div>
            <span class="ps-sp-top"></span>
          </li>
          <li style="width: 12%">
            <div class="img-handler-bot">
              <h5>Dinner</h5>
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_ChM6vU.json"
                background="transparent"
                speed="0.7"
                style="width: 100px; height: 100px"
                hover
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="ps-top">
              <h6>8:00 PM</h6>
            </div>
            <span class="ps-sp-bot"></span>
          </li>
        </ol>
      </div>
    </section>

    <section class="ps-timeline-sec" v-if="Day == 3">
      <div class="date"><h5>7th May 2023</h5></div>
      <div class="container">
        <ol class="ps-timeline">
          <li>
            <div class="img-handler-top">
              <h5>Breakfast</h5>
              <img src="../assets/dosa.png" width="100px" height="100px" />
            </div>
            <div class="ps-bot">
              <h6>8:00 AM</h6>
            </div>
            <span class="ps-sp-top"></span>
          </li>
          <li>
            <div class="img-handler-bot">
              <h5>Judging round 2</h5>
              <img src="../assets/judge.png" width="100px" height="100px" />
            </div>
            <div class="ps-top">
              <h6>8:30 AM - 10:30 AM</h6>
            </div>
            <span class="ps-sp-bot"></span>
          </li>
          <li>
            <div class="img-handler-top">
              <h5>Project submission</h5>
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_uD9rw972y0.json"
                background="transparent"
                speed="1"
                style="width: 100px; height: 100px"
                hover
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="ps-bot">
              <h6>11:00 AM</h6>
            </div>
            <span class="ps-sp-top"></span>
          </li>
          <li>
            <div class="img-handler-bot">
              <h5>Lunch</h5>
              <lottie-player
                src="https://assets8.lottiefiles.com/private_files/lf30_fqBsFC.json"
                background="transparent"
                speed="1"
                style="width: 100px; height: 100px"
                hover
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="ps-top">
              <h6>12:00 PM</h6>
            </div>
            <span class="ps-sp-bot"></span>
          </li>
          <li>
            <div class="img-handler-top">
              <h5>Results</h5>
              <lottie-player
                src="https://assets6.lottiefiles.com/private_files/lf30_76cdwejr.json"
                background="transparent"
                speed="1"
                style="width: 100px; height: 100px"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="ps-bot">
              <h6>1:00 PM</h6>
            </div>
            <span class="ps-sp-top"></span>
          </li>
          <li>
            <div class="img-handler-bot">
              <h5>Final Judging round</h5>
              <lottie-player
                src="https://assets2.lottiefiles.com/private_files/lf30_npltd3cq.json"
                background="transparent"
                speed="1"
                style="width: 100px; height: 90px"
                hover
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="ps-top">
              <h6>1:30 PM</h6>
            </div>
            <span class="ps-sp-bot"></span>
          </li>
          <li>
            <div class="img-handler-top">
              <h5>Vote of thanks</h5>
              <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_jDVcZ8ZdVb.json"  background="transparent"  speed="1"  style="width: 150px; height: 130px;" loop  autoplay></lottie-player>
            </div>
            <div class="ps-bot">
              <h6>4:00 PM</h6>
            </div>
            <span class="ps-sp-top"></span>
          </li>
        </ol>
      </div>
    </section>

    <!-- mobile and tab view -->
    <section class="timeline-section" v-if="Day == 1">
      <div class="date"><h5>5th May 2023</h5></div>
      <br />
      <div class="timeline-items">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">1:30 PM</div>
          <div class="timeline-content">
            <h4>Check in</h4>
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_MzwgIsCvZg.json"
              background="transparent"
              speed="1"
              style="width: 150px; height: 150px"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">2:30 PM</div>
          <div class="timeline-content">
            <h4>Inaugaration</h4>
            <img
              src="../assets/inauguration.png"
              width="150px"
              height="150px"
            />
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">3:00 PM</div>
          <div class="timeline-content">
            <h4 class="snacks">Partner session</h4>
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_1pjemuh2.json"
              background="transparent"
              speed="1"
              style="width: 150px; height: 150px"
              autoplay
              loop
            ></lottie-player>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">4:00 PM - 4:30 PM</div>
          <div class="timeline-content">
            <h4>Snacks</h4>
            <lottie-player
              src="https://assets5.lottiefiles.com/private_files/lf30_1jta1v1j.json"
              background="transparent"
              speed="1"
              style="width: 150px; height: 150px"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">4:30 PM</div>
          <div class="timeline-content">
            <h4>Hack begins</h4>

            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_PgWzCB9W9i.json"
              background="transparent"
              speed="1"
              style="width: 150px; height: 150px"
              hover
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">7:00 PM - 9:00 PM</div>
          <div class="timeline-content">
            <h4>Mentoring session 1</h4>
            <lord-icon
              src="https://cdn.lordicon.com/kjkiqtxg.json"
              trigger="loop"
              delay="2000"
              style="width: 150px; height: 150px"
            >
            </lord-icon>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">8:00 PM</div>
          <div class="timeline-content">
            <h4>Dinner</h4>
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_ChM6vU.json"
              background="transparent"
              speed="0.7"
              style="width: 150px; height: 150px"
              hover
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline-section" v-if="Day == 2">
      <div class="date"><h5>6th May 2023</h5></div>
      <br />
      <div class="timeline-items">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">12:00 AM</div>
          <div class="timeline-content">
            <h4>Midnight surprise</h4>
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_8sq6uc4a.json"
              background="transparent"
              speed="1"
              style="width: 150px; height: 150px"
              hover
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">8:00 AM</div>
          <div class="timeline-content">
            <h4>Breakfast</h4>
            <img src="../assets/dosa.png" width="150px" height="150px" />
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">9:00 AM - 10:30 AM</div>
          <div class="timeline-content">
            <h4 class="snacks">Judging round 1</h4>
            <img src="../assets/judge.png" width="150px" height="150px" />
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">12:30 PM - 1:00 PM</div>
          <div class="timeline-content">
            <h4>Partner session (Quine)</h4>
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_1pjemuh2.json"
              background="transparent"
              speed="1"
              style="width: 150px; height: 150px"
              hover
              loop
            ></lottie-player>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">1:00 PM</div>
          <div class="timeline-content">
            <h4>Lunch</h4>
            <lottie-player
              src="https://assets8.lottiefiles.com/private_files/lf30_fqBsFC.json"
              background="transparent"
              speed="1"
              style="width: 150px; height: 150px"
              hover
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">4:00 PM - 4:30 PM</div>
          <div class="timeline-content">
            <h4>Snacks</h4>
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_7chz2lvf.json"
              background="transparent"
              speed="1"
              style="width: 150px; height: 150px"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">7:00 PM - 9:00 PM</div>
          <div class="timeline-content">
            <h4>Mentoring session 2</h4>
            <lord-icon
              src="https://cdn.lordicon.com/kjkiqtxg.json"
              trigger="hover"
              style="width: 150px; height: 150px"
            >
            </lord-icon>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">8:00 PM</div>
          <div class="timeline-content">
            <h4>Dinner</h4>
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_ChM6vU.json"
              background="transparent"
              speed="0.7"
              style="width: 150px; height: 150px"
              hover
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline-section" v-if="Day == 3">
      <div class="date"><h5>7th May 2023</h5></div>
      <br />
      <div class="timeline-items">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">8:00 AM</div>
          <div class="timeline-content">
            <h4>Breakfast</h4>
            <img src="../assets/dosa.png" width="150px" height="150px" />
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">8:30 AM - 10:30 AM</div>
          <div class="timeline-content">
            <h4>Judging round 2</h4>
            <img src="../assets/judge.png" width="150px" height="150px" />
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">11:00 AM</div>
          <div class="timeline-content">
            <h4 class="snacks">Project submission</h4>
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_uD9rw972y0.json"
              background="transparent"
              speed="1"
              style="width: 150px; height: 150px"
              hover
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">12:00 PM</div>
          <div class="timeline-content">
            <h4>Lunch</h4>
            <lottie-player
              src="https://assets8.lottiefiles.com/private_files/lf30_fqBsFC.json"
              background="transparent"
              speed="1"
              style="width: 150px; height: 150px"
              hover
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">1:00 PM</div>
          <div class="timeline-content">
            <h4>Results&nbsp;</h4>
            <lottie-player
              src="https://assets6.lottiefiles.com/private_files/lf30_76cdwejr.json"
              background="transparent"
              speed="1"
              style="width: 150px; height: 150px"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">1:30 PM</div>
          <div class="timeline-content">
            <h4>Final Judging round</h4>
            <lottie-player
              src="https://assets2.lottiefiles.com/private_files/lf30_npltd3cq.json"
              background="transparent"
              speed="1"
              style="width: 150px; height: 150px"
              hover
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">4:00 PM</div>
          <div class="timeline-content">
            <h4>Vote of thanks</h4>
            <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_jDVcZ8ZdVb.json"  background="transparent"  speed="1"  style="width: 175px; height: 175px;" hover loop  autoplay></lottie-player>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="filler4" id="newSponsors"></div>
</template>
<script>
export default {
  data() {
    return {
      Day: 1,
    };
  },
  methods: {
    changeDay1() {
      this.Day = 1;
    },
    changeDay2() {
      this.Day = 2;
    },
    changeDay3() {
      this.Day = 3;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
.inaug {
  max-height: 100px;
  max-width: 100px;
}
body {
  background-color: var(--bgBlue);
}
h6 {
  color: #ecf27c;
}
.ps-timeline-sec {
  position: relative;
}
.ps-timeline-sec .container {
  position: relative;
}
/* desktop */
.ps-timeline-sec .container ol:before {
  background: #ecf27c;
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: absolute;
  left: 8px;
  top: 49.5%;
}
.ps-timeline-sec .container ol:after {
  background: #ecf27c;
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: absolute;
  right: 8px;
  top: 49.5%;
}
.ps-timeline-sec .container ol.ps-timeline {
  margin: 320px 0;
  padding: 0;
  border-top: 2px solid #ecf27c;
  list-style: none;
}
.ps-timeline-sec .container ol.ps-timeline li {
  float: left;
  width: 14%;
  padding-top: 30px;
  position: relative;
}
.ps-timeline-sec .container ol.ps-timeline li span {
  width: 15px;
  height: 15px;
  margin-left: -25px;
  background: #fff;
  border: 10px solid #ecf27c;
  border-radius: 50%;
  box-shadow: 0 0 0 0px #fff;
  text-align: center;
  line-height: 50px -10;
  color: #df8625;
  font-size: 2em;
  font-style: normal;
  position: absolute;
  top: -11px;
  left: 67%;
}
.ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:before {
  content: "";
  color: #ecf27c;
  width: 2px;
  height: 88px;
  background: #ecf27c;
  position: absolute;
  top: -93px;
  left: 50%;
}
.ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:after {
  content: "";
  color: #ecf27c;
  width: 8px;
  height: 8px;
  background: #ecf27c;
  position: absolute;
  bottom: 90px;
  margin-left: -0.4vh;
  border-radius: 100%;
}
.ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:before {
  content: "";
  color: #ecf27c;
  width: 2px;
  height: 87px;
  background: #ecf27c;
  position: absolute;
  bottom: -93px;
  left: 50%;
}
.ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:after {
  content: "";
  color: #ecf27c;
  width: 8px;
  height: 8px;
  background: #ecf27c;
  position: absolute;
  top: 90px;
  margin-left: -0.3vh;
  border-radius: 100%;
}
.ps-timeline-sec .container ol.ps-timeline li .img-handler-top {
  position: absolute;
  bottom: 0;
  margin-bottom: 130px;
  width: 95%;
  height: 542%;
  left: 3vh;
  box-shadow: 0px 0px 15px 0px;
  background: #ecf27c;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}
.ps-timeline-sec .container ol.ps-timeline li .img-handler-top img {
  display: table;
  margin: 0 auto;
  text-align: center;
}
.ps-timeline-sec .container ol.ps-timeline li .img-handler-bot {
  position: absolute;
  margin-top: 72px;
  width: 95%;
  height: 542%;
  left: 3vh;
  box-shadow: 0px 0px 15px 0px;
  background: #ecf27c;
  padding: 10px;
  border-radius: 10px;
}
.ps-timeline-sec .container ol.ps-timeline li .img-handler-bot img {
  display: table;
  margin: 0 auto;
}
.ps-timeline-sec .container ol.ps-timeline li p {
  text-align: center;
  width: 80%;
  margin: 0 auto;
}
.ps-timeline-sec .container ol.ps-timeline li .ps-top {
  position: absolute;
  bottom: 0;
  margin-bottom: 53px;
  left: 46px;
  text-align: center;
}
.ps-timeline-sec .container ol.ps-timeline li .ps-bot {
  position: absolute;
  margin-top: -8px;
  left: 6vh;
  text-align: center;
}

/* mobile view */

.date {
  color: #ecf27c;
  text-align: center;
  margin: 20px auto;
}
.filler4 {
  margin-bottom: 7%;
}
.ul1 {
  display: flex;
  list-style: none;
  margin-bottom: 0rem;
  background: #ecf27c;
  padding: 10px;
  margin: auto;
  max-width: 40vh;
  justify-content: center;
  border-radius: 10px;
}
.ul1 .li1 {
  margin: 0 5px;
}
.ul1 .li1 button {
  color: var(--bgBlue);
  background: var(--bgYellow);

  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;

  padding: 5px 10px;
  border-radius: 5px;

  transition: all 0.5s ease;
  border: none;
}
.ul1 .li1 button:hover {
  background: #dae157;
  color: var(--bgBlue);
}
.timeline-button {
  padding: 10px;
  background: var(--bgYellow);
  color: black;
  border-radius: 10%;
}
.timeline-button:hover {
  background: #dae157;
}
.snacks {
  margin-right: 32px;
}
.timeline-section {
  display: none;
  background-color: var(--bgBlue);
  min-height: 100vh;
  padding: 10px 15px;
}
.timeline-items {
  max-width: 435px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.timeline-items::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: var(--bgYellow);
  left: calc(50% - 1px);
}
.timeline-item {
  margin-bottom: 40px;
  width: 100%;
  position: relative;
}
.timeline-item:last-child {
  margin-bottom: 0;
}
.timeline-item:nth-child(odd) {
  padding-right: calc(50% + 30px);
  text-align: right;
}
.timeline-item:nth-child(even) {
  padding-left: calc(50% + 30px);
}
.timeline-dot {
  height: 16px;
  width: 16px;
  background-color: var(--bgYellow);
  position: absolute;
  left: calc(50% - 8px);
  border-radius: 50%;
  top: 10px;
}
.timeline-date {
  font-size: 18px;
  color: var(--bgYellow);
  margin: 6px 0 15px;
}
.timeline-content {
  text-align: center;
  background-color: var(--bgYellow);
  padding: 10px;
  border-radius: 5px;
}

h5{
  line-height: 0.9;
}

/* responsive */
@media (max-width: 768px) {
  .ps-timeline-sec {
    display: none;
  }
  .timeline-section {
    display: block;
  }
  .timeline-items::before {
    left: 7px;
  }
  .timeline-item:nth-child(odd) {
    padding-right: 0;
    text-align: left;
  }
  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    padding-left: 37px;
  }
  .timeline-dot {
    left: 0;
  }
  .ul1 {
    max-width: 35vh;
    margin: auto;
  }
  .timeline-items {
    margin: 2vh;
    max-width: 29vh;
  }
}

.timeline-container {
  background-color: var(--bgBlue);
  margin-bottom: 5vh;
  padding-bottom: 17vh;
  -webkit-clip-path: polygon(0 0, 100% 3%, 100% 96%, 0 100%);
  clip-path: polygon(0 0, 100% 3%, 100% 96%, 0 100%);
}
.containers {
  padding-top: 5vh;
  margin-left: 10%;
  margin-bottom: 5vh;
  font-weight: 900;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  color: var(--bgYellow);
}
.intro {
  margin-top: 15vh;
}

.container {
  padding: 10px 16px;
  position: relative;
  width: 100%;
  /* background-color:#080518; */
  animation: movedown 1s linear forwards;
  margin : 0 auto;
  opacity: 0;
}
@keyframes movedown {
  0% {
    opacity: 1;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(00px);
  }
}

.text-box {
  padding: 20px 30px;
  background: #dae157;
  position: relative;
  border-radius: 6px;
  font-size: 15px;
}

@keyframes moveline {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}

@media screen and (max-width: 600px) {
  .container {
    width: 100%;
    padding-right: 80px;
  }
  .ps-timeline-sec {
    display: none;
  }
}
</style>