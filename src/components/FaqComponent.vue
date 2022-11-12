<template>
    
    <div class="maindiv">
        <h1 class="faq">Frequently Asked Questions</h1>
<main>
  <div class="topic">
    <div class="open">
      <h2 class="question">1. How can i delete my complaint/comment?</h2>
      <span class="faq-t"></span>
    </div>
    <p class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div class="topic">
    <div class="open">
    <h2 class="question">2. I have posted a complaint/comment, but it doesn't appear on the website. Why? When my complaint will be posted?
</h2><span class="faq-t"></span>
    </div>
    <p class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div class="topic">
    <div class="open">
    <h2 class="question">3. How can I edit a complaint I posted?
</h2><span class="faq-t"></span>
    </div>
    <p class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div class="topic">
    <div class="open">
    <h2 class="question">4. How can i find out personal information of another user?
</h2><span class="faq-t"></span>
    </div>
    <p class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div class="topic">
    <div class="open">
    <h2 class="question">5. How can i contact another user?
</h2><span class="faq-t"></span>
    </div>
    <p class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div class="topic">
    <div class="open">
    <h2 class="question">2. I have posted a complaint/comment, but it doesn't appear on the website. Why? When my complaint will be posted?
</h2><span class="faq-t"></span>
    </div>
    <p class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div class="topic">
    <div class="open">
    <h2 class="question">3. How can I edit a complaint I posted?
</h2><span class="faq-t"></span>
    </div>
    <p class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div class="topic">
    <div class="open">
    <h2 class="question">4. How can i find out personal information of another user?
</h2><span class="faq-t"></span>
    </div>
    <p class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div class="topic">
    <div class="open">
    <h2 class="question">5. How can i contact another user?
</h2><span class="faq-t"></span>
    </div>
    <p class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
    color:#080518;
    font-weight: bold;
    text-align: left;
    padding-left: 10rem;
}
.maindiv{
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
  color:#080518;
  padding-top: 40px;
  padding-bottom: 40px;
}
main{
  display:block;
  position:relative;
  box-sizing:border-box;
  padding:30px;
  width:100%;
  max-width:920px;
  background-color:#ecf27c;
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
  border-bottom:solid 1px #080518;
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
  color: #ecf27c;
  background-color:#080518;
  border-bottom:solid#ecf27c;
  transition: all .3s ease-in-out;
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
  border-left: 2px solid #080518;
  border-bottom: 2px solid #080518; 
  transition: all .3s ease-in-out;
  color:#080518;
}
.faq-o{
  top:-50px;
   -moz-transform: rotate(-224deg);
  -ms-transform: rotate(-224deg);
  -webkit-transform: rotate(-224deg);
  transform: rotate(-224deg);
  border-left: 2px solid #ecf27c;
  border-bottom: 2px solid #ecf27c; 
  color: #ecf27c;
}
@media only screen and (max-width: 480px) {
  .faq-t{display:none;}
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
}

</style>

        