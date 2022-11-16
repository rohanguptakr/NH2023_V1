<template>
  <body>
  <section class="intro" id="time">
        <h1 class="container">Timeline</h1>
  </section>
    
    <section class="timeline">
      <ul>
        <li>
          <div>
            <p class="day">Day 1</p><time>9:00 AM</time><p class="events">Reporting and Registration</p>
          </div>
        </li>
        <li>
          <div>
            <time>11:00 AM</time><p class="events">Inaugration ceremony</p>
          </div>
        </li>
        <li>
          <div>
            <time>11:40 AM</time><p class="events">Hack begins!!!</p>
          </div>
        </li>
        <li>
          <div>
            <time>1:00 PM - 1:45PM</time><p class="events">Lunch</p>
          </div>
        </li>
        <li>
          <div>
            <time>4:30 PM - 5:00 PM</time><p class="events">Snacks</p>
          </div>
        </li>
        <li>
          <div>
            <time>7:00 PM - 8:00 PM</time><p class="events">Judging round 1</p>
          </div>
        </li>
        <li>
          <div>
            <time>8:15 PM - 9:00 PM</time><p class="events">Dinner</p>
          </div>
        </li>
        <li>
          <div>
            <p class="day">Day 2</p><time>1:30 AM - 2:30 AM</time><p class="events">Midnight surprise and snacks</p>
          </div>
        </li>
        <li>
          <div>
            <time>7:30 AM -8:30 AM</time><p class="events">Breakfast</p>
          </div>
        </li>
        <li>
          <div>
            <time>11:00 AM - 12:00 PM</time><p class="events">Judging round 2</p>
          </div>
        </li>
        <li>
          <div>
            <time>12:15 PM - 1:00 PM</time>Lunch
          </div>
        </li>
        <li>
          <div>
            <time>4:00 PM - 6:00 PM</time><p class="events">Final judging round, closing ceremony and prize distribution</p>
          </div>
        </li>
      </ul>
    </section>
</body>
</template>

<style>
  *,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}
.container{
  padding-left: 10rem;
  font-weight: 900;
}

.intro{
  margin-top: 8vh;
}
/* TIMELINE
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.timeline ul {
background: #fff;
padding: 50px 0;
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
}
</style>