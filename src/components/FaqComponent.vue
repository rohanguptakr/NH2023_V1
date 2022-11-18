<template>
    
    <div class="maindiv" id="faq">
        <h1 class="faq">Frequently Asked Questions</h1>
<main>
  <div class="topic">
    <div class="open">
      <h2 class="question">1. What is a Hackathon?</h2>
      <span class="faq-t"></span>
    </div>
    <p class="answer">In general a Hackathon is a social coding event that brings together computer programmers like software developers, graphic designers and user interface specialists along with industry process experts and professionals to identify issues and create software solutions within a stipulated time.</p>
  </div>
  <div class="topic">
    <div class="open">
    <h2 class="question">2. Is this an online event?
</h2><span class="faq-t"></span>
    </div>
    <p class="answer">We don't like online hackathons, so this is a complete offline event.</p>
  </div>
  <div class="topic">
    <div class="open">
    <h2 class="question">3. Who can participate?
</h2><span class="faq-t"></span>
    </div>
    <p class="answer">Everybody is welcome. No matter if you are an entrepreneur, a professional or a student. You don't have to be a programmer and you certainly don't need to have a degree in Computer Science! Specifically, we are looking for hackers, coders, makers but also for innovators, Engineers, creative people, designers, data geeks and startups. Because our challenges are not only limited to programming!.</p>
  </div>
  <div class="topic">
    <div class="open">
    <h2 class="question">4. What large should a team be?
</h2><span class="faq-t"></span>
    </div>
    <p class="answer">A team should be between 2-5 people, if you don't have a team yet you can still apply because you will have the chance to join a team onsight.</p>
  </div>
  <div class="topic">
    <div class="open">
    <h2 class="question">5. How are the winners selected?
</h2><span class="faq-t"></span>
    </div>
    <p class="answer">There will be an independent Jury selecting the winners with a rating system: Implementation ability, financial benefits, presentation skills, creativity.</p>
  </div>
  <div class="topic">
    <div class="open">
    <h2 class="question">6. How can I get involved?
</h2><span class="faq-t"></span>
    </div>
    <p class="answer">Go ahead and visit the NMITHacks page and book your place. Have another question that didn't get answered here - send us an email
on hackathon@nmit.ac.in
</p>
  </div>
  <div class="topic">
    <div class="open">
    <h2 class="question">7. Can i start working on my hack before the event?
</h2><span class="faq-t"></span>
    </div>
    <p class="answer">No. That would amount to cheating and you would be disqualified.</p>
  </div>
</main>
    </div> 
</template>

<script>
 import $ from 'jquery';
//   import 'selectize';

  export default {
    mounted: function() {
        $(".open").click( function () {
  var container = $(this).parents(".topic");
  var answer = container.find(".answer");
  var trigger = container.find(".faq-t");
  
  answer.slideToggle(200);
  
  if (trigger.hasClass("faq-o")) {
    trigger.removeClass("faq-o");
  }
  else {
    trigger.addClass("faq-o");
  }
  
  if (container.hasClass("expanded")) {
    container.removeClass("expanded");
  }
  else {
    container.addClass("expanded");
  }
});
    }}
     
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);
.faq{
    color:var(--bgBlue);
    font-weight: bold;
    text-align: left;
    margin-left : 10%;
}
.maindiv{
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
  color:var(--bgBlue);
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 0;
}
main{
  display:block;
  position:relative;
  box-sizing:border-box;
  padding:30px;
  width:100%;
  max-width:920px;
  background-color:var(--bgYellow);
  margin:0 auto;
  margin-top:50px;
  box-shadow:0px 0px 5px rgba(0,0,0,0.1);
  border-radius: 10px;
}
h1{
  padding-left:20px;
  padding-right:20px;
  font-size:32px;
  font-weight:300;
}
.topic{
  padding:20px;
  padding-top:0px;
  padding-bottom:0px;
  border-bottom:solid 1px var(--bgBlue);
  border-radius: 10px;
}
.open{
  cursor:pointer;
  display:block;
  padding:0px;
}
.open:hover{
  opacity:0.7;
}
.expanded{
  color:#000;
  background-color: #dae157;
  border:solid var(--bgBlue);
  transition: all .3s ease-in-out;
  margin-bottom: 0.5%;
}
.question{
  padding-top:30px;
  padding-right: 40px;
  padding-bottom:20px;
  font-size: 18px;
  font-weight:500;

}
.answer{
  font-size:16px;
  line-height:26px;
  display:none;
  margin-bottom:30px;
  text-align:justify;
  padding-left:20px;
  padding-right:20px;
  color: #000;
}
.faq-t{
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  display: inline-block;
  float: right;
  position:relative;
  top:-55px;
  right:10px;
  width: 10px;
  height: 10px;
  background: transparent;
  border-left: 2px solid var(--bgBlue);
  border-bottom: 2px solid var(--bgBlue); 
  transition: all .3s ease-in-out;
  color:var(--bgBlue);
}
.faq-o{
  top:-50px;
   -moz-transform: rotate(-224deg);
  -ms-transform: rotate(-224deg);
  -webkit-transform: rotate(-224deg);
  transform: rotate(-224deg);
  border-left: 2px solid var(--bgBlue);
  border-bottom: 2px solid var(--bgBlue); 
  color: var(--bgYellow);
}
@media only screen and (max-width: 480px) {
  .question{
  padding-right: 0px;
}
  main{
  padding:10px;
}
  .answer{
  margin-bottom:30px;
  padding-left:0px;
  padding-right:0px;
}
.maindiv{
  margin : 10px;
}

.faq{
  padding-left:8%;
}
}

@media only screen and (max-width: 900px) {
  .question{
  padding-right: 0px;
}
  main{
  padding:10px;
}
  .answer{
  margin-bottom:30px;
  padding-left:0px;
  padding-right:0px;
}
.maindiv{
  margin : 10px;
}

.faq{
  padding-left:8%;
}
}

@media (min-width:1500px){
  main{
    width: 50vw;
    max-height: 80vh;
  }
}

</style>

        