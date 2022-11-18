<template>
    <h1 class="prize">Prizes</h1>
    <div class="prize-container">
      <div class="wrapper-prizes first-place" id="prizes">
      <div class="card-prizes" onclick="this.classList.toggle('expanded')">
        <img :src="require('../assets/1stPlace.png')">
        <div class="text1">
            <div class="text-content-prizes">
            <h1 class="title">₹ 40,000</h1>
            </div>
            </div>
            <svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="var(--bgYellow)" stroke-width="5"/></svg>
        </div>
    </div>

    <div class="wrapper-prizes second-place">
      <div class="card-prizes" onclick="this.classList.toggle('expanded')">
        <img :src="require('../assets/2ndPlace.png')">
            <div class="text2">
            <div class="text-content-prizes">
            <h1 class="title">₹ 20,000</h1>
            </div>
            </div>
            <svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="var(--bgYellow)" stroke-width="5"/></svg>
        </div>

        <div class="card-prizes" onclick="this.classList.toggle('expanded')">
        <img :src="require('../assets/3rdPlace.png')">
            <div class="text2">
            <div class="text-content-prizes">
            <h1 class="title">₹ 15,000</h1>
            </div>
            </div>
            <svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="var(--bgYellow)" stroke-width="5"/></svg>
        </div>
    </div>
    </div>
</template>
    
<style>
        @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:900');
    .wrapper-prizes{
        width : 75vw;
        margin : 0 auto;
        align-items: center;
        display: flex;
        font-family: sans-serif;
        background-color: #fff;
    }
    
    .first-place{
      justify-content: center;
    }

    .second-place{
      justify-content: center;
    }

    .third-place{
      justify-content: cemter;
    }
    .prize{
        color: var(--bgBlue);
        margin-left : 10%;
        margin-bottom : 5vh;
        margin-top: 40px;
        font-weight: 900;
    }
    
    #second{
        margin-top: 50vh;
    }
    @media (max-width: 500px) {
        .wrapper-prizes{
        display: block;
      }
      .card-prizes{
        max-height :350px;
        max-width : 220px; 
      }
      .prize{
        padding-left : 8%;
        margin-bottom : 8vh;
      }
    }

    @media (max-width: 900px) {
        .wrapper-prizes{
        display: block;
      }
      .card-prizes{
        max-height :350px;
        max-width : 220px; 
      }
      .prize{
        padding-left : 8%;
        margin-bottom : 8vh;
      }
    }
    .card-prizes {
      background: var(--bgBlue);
      border-radius: 8px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      cursor: pointer;
      height: 250px;
      margin: 20px;
      padding: 20px 20px;
      position: relative;
      -webkit-tap-highlight-color: rgba(0,0,0,0.025);
      text-align: center;
      transition: height 1000ms;
      width: 210px;
    }
    img{
        padding-left: 10px;
    }
    @media (max-width: 500px) {
      .card-prizes {
        left: calc(50% - 20px);
        transform: translateX(-50%);
      }
    }
    @media (max-width: 900px) {
      .card-prizes {
        left: calc(50% - 20px);
        transform: translateX(-50%);
      }
    }
    .card-prizes.expanded {
      height: 300px;
    }
    .label {
      margin-top: 30px;
      transform: translateY(10px);
      transition: transform 1000ms;
    }
    .card-prizes.expanded .label {
      transform: translateY(0);
    }
    .text1 {
      clip-path: polygon(0% 100%, 0 -90%, 50% -5%, 100% -90%, 100% 100%);
      -webkit-clip-path: polygon(0% 100%, 0 -90%, 50% -5%, 100% -90%, 100% 100%);
      transition: clip-path 1000ms;
    }
    .card-prizes.expanded .text1 {
      clip-path: polygon(0% 100%, 0 -100%, 50% -15%, 100% -100%, 100% 100%);
      -webkit-clip-path: polygon(0% 100%, 0 -100%, 50% -15%, 100% -100%, 100% 100%);
    }
    .text2 {
      clip-path: polygon(0% 100%,0% -80%,15% -70%,17.23% -53.59%,23% -40%,27.23% -28.94%,35% -20%,41.09% -13.59%,50% -10%,58.91% -13.23%,65% -20%,72.77% -28.23%,77% -40%,82.77% -54.65%,85% -70%,100% -80%,100% 100%);
      -webkit-clip-path: polygon(0% 100%,0% -80%,15% -70%,17.23% -53.59%,23% -40%,27.23% -28.94%,35% -20%,41.09% -13.59%,50% -10%,58.91% -13.23%,65% -20%,72.77% -28.23%,77% -40%,82.77% -54.65%,85% -70%,100% -80%,100% 100%);
      transition: clip-path 1000ms;
    }
    .card-prizes.expanded .text2 {
      clip-path: polygon(0% 100%,0% -90%,15% -80%,17.23% -63.59%,23% -50%,27.23% -38.94%,35% -30%,41.09% -23.59%,50% -20%,58.91% -23.23%,65% -30%,72.77% -38.23%,77% -50%,82.77% -64.65%,85% -80%,100% -90%,100% 100%);
      -webkit-clip-path: polygon(0% 100%,0% -90%,15% -80%,17.23% -63.59%,23% -50%,27.23% -38.94%,35% -30%,41.09% -23.59%,50% -20%,58.91% -23.23%,65% -30%,72.77% -38.23%,77% -50%,82.77% -64.65%,85% -80%,100% -90%,100% 100%);
    }
    .text-content-prizes {
      transform: translateY(-140px);
      transition: transform 1000ms;
      display: block;
      margin: auto;
    }
    .card-prizes.expanded .text-content-prizes {
      transform: translateY(-15px);
    }
    .chevron {
      position: absolute;
      bottom: 20px;
      left: calc(50% - 15px);
      transform-origin: 50%;
      transform: rotate(180deg);
      transition: transform 1000ms;
    }
    .card-prizes.expanded .chevron {
      transform: rotate(0deg);
    }
    .title {
      font-family: 'Alegreya Sans', sans-serif;
      font-weight: 900;
      margin-top: 40px;
      color: var(--bgYellow);
    }
    
    
    </style>