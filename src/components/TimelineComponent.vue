<template>
<h3>Timeline</h3>
<div class="cont">
        <div class="wrapper">
          <h1>Day 1</h1>
          <ul class="sessions">
            <li>
              <div class="time">09:00 AM</div>
              <p>Reporting and Registration</p>
            </li>
            <li>
              <div class="time">11:00 AM</div>
              <p>Inaugration Ceremony</p>
            </li>
            <li>
              <div class="time">11:40</div>
              <p>Hack Begins</p>
            </li>
            <li>
              <div class="time">7:00 PM - 8:00PM</div>
              <p>Judging Round 1</p>
            </li>
          </ul>
          <h1>Day 2</h1>
          <ul class="sessions">
             <li>
              <div class="time">11:00 AM - 12:00 PM</div>
              <p>Judging Round 2</p>
            </li>
            <li>
              <div class="time">4:00 - 6:00PM</div>
              <p>Final Judging Round,Closing ceremony and Prize Distribution</p>
            </li>
          </ul>
        </div>
      </div> 
</template>



<style>

h3{
    font-family: "Poppins", sans-serif;
    text-align: center;
    margin-top: 100px;
    font-weight : bold;
    font-size: 50px;
    color: #080518;
    position: relative;
}
ul, li {
  list-style: none;
  padding: 0;
}

.cont {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  padding: 3rem 0;
  /* background-color: #080518;*/
  margin: 0 auto;
}

.wrapper {
  background: #ecf27c;
  padding: 2rem;
  border-radius: 15px;
  position: relative;
}

h1 {
  font-size: 1.1rem;
  font-family: sans-serif;
}

.sessions {
  margin-top: 2rem;
  border-radius: 12px;
  position: relative;
}

.sessions li {
  padding-bottom: 1.5rem;
  border-left: 1px solid #080518;
  position: relative;
  padding-left: 20px;
  margin-left: 0px;
}
li:last-child {
  border: 0px;
  padding-bottom: 0;
}
.sessions li:before {
  content: "";
  width: 15px;
  height: 15px;
  background: white;
  border: 1px solid #4e5ed3;
  box-shadow: 3px 3px 0px #080518;
  border-radius: 50%;
  position: absolute;
  left: -10px;
  top: 0px;
}

.time {
  color: #2a2839;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}
@media screen and (min-width: 601px) {
  .time {
    font-size: 0.9rem;
  }
  .cont{
    margin : 0 10px;
  }
}
@media screen and (max-width: 600px) {
  .time {
    margin-bottom: 0.3rem;
    font-size: 0.85rem;
  }
}

p {
  color: #4f4f4f;
  font-family: sans-serif;
  line-height: 1.5;
  margin-top: 0.4rem;
}
@media screen and (max-width: 600px) {
  p {
    font-size: 0.9rem;
  }
}

</style>