<template>
  <div class="timeline-container">
    <section class="intro" id="timeline">
        <h1 class="container">Timeline</h1>
  </section>
    
    <section class="timeline">
      <ul>
        <li v-if="Day==1">
          <div>
            <p class="day">Day 1</p><time>9:00 AM</time><p class="events">Reporting and Registration</p>
          </div>
        </li>
        <li v-if="Day==1">
          <div>
            <time>11:00 AM</time><p class="events">Inaugration ceremony</p>
          </div>
        </li>
        <li v-if="Day==1">
          <div>
            <time>11:40 AM</time><p class="events">Hack begins!!!</p>
          </div>
        </li>
        <li v-if="Day==1">
          <div>
            <time>1:00 PM - 1:45PM</time><p class="events">Lunch</p>
          </div>
        </li>
        <li v-if="Day==1">
          <div>
            <time>4:30 PM - 5:00 PM</time><p class="events">Snacks</p>
          </div>
        </li>
        <li v-if="Day==1">
          <div>
            <time>7:00 PM - 8:00 PM</time><p class="events">Judging round 1</p>
          </div>
        </li>
        <li v-if="Day==1">
          <div>
            <time>8:15 PM - 9:00 PM</time><p class="events">Dinner</p>
          </div>
        </li >
        <li v-if="Day==2">
          <div>
            <p class="day">Day 2</p><time>1:30 AM - 2:30 AM</time><p class="events">Midnight surprise and snacks</p>
          </div>
        </li>
        <li v-if="Day==2">
          <div>
            <time>7:30 AM -8:30 AM</time><p class="events">Breakfast</p>
          </div>
        </li>
        <li v-if="Day==2">
          <div>
            <time>11:00 AM - 12:00 PM</time><p class="events">Judging round 2</p>
          </div>
        </li>
        <li v-if="Day==2">
          <div>
            <time>12:15 PM - 1:00 PM</time>Lunch
          </div>
        </li>
        <li v-if="Day==2">
          <div>
            <time>4:00 PM - 6:00 PM</time><p class="events">Final judging round, closing ceremony and prize distribution</p>
          </div>
        </li>
      </ul>
    </section>
    <div class="btnTimeLineContainer" @click="changeDay">

    <div class="btnTimeline" >
     Day {{Day}}
      </div>
    </div>
    <!-- <div class="coming-img">
      <img :src="require('../assets/TimelineTBA.png')" alt="To be announced"/>
      <p class="ann">To be announced</p>
    </div> -->
  </div>
 
</template>

<script>
export default{
  data(){
    return{
      Day:1
    }
  },
  methods:{
    changeDay(){
      if(this.Day==1) this.Day = 2;
      else this.Day = 1;
    }
  }
}
</script>


<style>
.btnTimeLineContainer{
  background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s;
}
.btnTimeline{
  border: 2px solid black;
    color: black;
    background-color: #ecf27c;
    padding: 1rem 2rem;
    border-radius: 8%;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.4s;

}

.timeline-container{
  background-color : var(--bgBlue);
  margin-bottom : 5vh;
  padding-bottom : 7vh;
   -webkit-clip-path: polygon(0 0, 100% 3%, 100% 96%, 0 100%);
  clip-path: polygon(0 0, 100% 3%, 100% 96%, 0 100%);
}
.coming-img{
  padding-bottom : 0vh;
  display:flex;
  justify-content: space-evenly;
  flex-wrap : wrap;
}
.ann{
  padding-top:25vh;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight:900;
  font-size:1rem;
  color : var(--bgYellow)
}
.coming-img img{
  height : auto;
  width : 50%;
}
  *,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}
.container{
  padding-top : 5vh;
  margin-left : 10%;
  margin-bottom : 5vh;
  font-weight: 900;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size:1.5rem;
  color : var(--bgYellow);
}

.intro{
  margin-top: 15vh;
}
/* TIMELINE
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.timeline ul {
background: #fff;
padding: 50px 0;
display: block;
}

.timeline ul li {
list-style-type: none;
position: relative;
width: 6px;
margin: 0 auto;
padding-top: 0px;
font-size:0.6rem;
background: #080518;
}

.timeline ul li::after {
content: "";
position: absolute;
left: 50%;
bottom: 0;
transform: translateX(-50%);
width: 30px;
height: 30px;
border-radius: 50%;
background: #ecf27c;
z-index: 1;
}

.timeline ul li div {
position: relative;
bottom: 0;
width: 200px;
padding: 15px;
background: #ecf27c;
}

.timeline ul li div::before {
content: "";
position: absolute;
bottom: 7px;
width: 0;
height: 0;
border-style: solid;
}

.events{
  font-size:0.8rem;
}

.timeline ul li:nth-child(odd) div {
left: 45px;
}

.timeline ul li:nth-child(odd) div::before {
left: -15px;
border-width: 8px 16px 8px 0;
border-color: transparent #ecf27c transparent transparent;
}

.timeline ul li:nth-child(even) div {
left: -240px;
}

.timeline ul li:nth-child(even) div::before {
right: -15px;
border-width: 8px 0 8px 16px;
border-color: transparent transparent transparent #ecf27c;
}

.day{
  font-size: 0.8rem;
}

time {
display: block;
font-size: 0.9rem;
font-weight: bold;
margin-bottom: 8px;
}

/* GENERAL MEDIA QUERIES
–––––––––––––––––––––––––––––––––––––––––––––––––– */

@media screen and (max-width: 900px) {
.timeline ul li div {
  width: 250px;
}
.timeline ul li:nth-child(even) div {
  left: -289px;
  /* /250+45-6/ */
}
}

@media screen and (max-width: 600px) {
.timeline ul li {
  margin-left: 20px;
  padding-top: 10px;
}
.coming-img img{
  width : 100%;
  height : auto;
}
.timeline ul li div {
  width: calc(100vw - 91px);
}
.timeline ul li:nth-child(even) div {
  left: 45px;
}
.timeline ul li:nth-child(even) div::before {
  left: -15px;
  border-width: 8px 16px 8px 0;
  border-color: transparent #ecf27c transparent transparent;
}
.container{
  padding-left : 8%;
}
.ann{
  font-size : 1.3rem;
  padding-bottom : 5vh;
  padding-top : 5vh;
}
}
</style>