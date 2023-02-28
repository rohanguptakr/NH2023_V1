<template>
    <div class="con" id="about-us">
        <h1 class="h4">About Us</h1>
        <div class="para2">
           <p> NMIT Hacks, the Annual National Level Hackathon of CSE Department, NMIT, has been going strong since the year 2015 and has been providing all the enthusiastic participants with a platform to bring their ideas, small or big, to life.</p><br>
            <p>The theme of this Hackathon is Open-Innovation, which gives you the liberty to find innovative solutions to your own problem statements. Whether you’re a rookie coder or a seasoned veteran, all you need is a laptop, an idea, and the passion to code, to be a part of this event!</p><br>
            <p>To all the aspiring technopreneurs out there, here is your perfect opportunity to deal with a real-time problem that can bring about a change, and give wings to your imagination by providing the most innovative solution in the due course of 36 hours.</p><br>
        </div>
    </div>
    <div class="filler6" id="newFaq">
    </div>
    
</template>
    
    <style>
    .filler6{
        margin-bottom: 2%;
    }
    .h4{
        margin-left : 9%;
        font-weight: 900;
        color: var(--bgBlue);
        margin-top : 0;
        position: relative;
        top :50px;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size:1.5rem;
    }
    .para2{
        font-family: 'Lucida Sans', 'Lucida Sans Regular';
        font-size: 1.25rem;
        text-align: left;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 11%;
        margin-bottom: 0%;
        color:var(--bgBlue);
        position: relative;
        top : -80px;
     }

     .con{
        background-color: white;
     }
     @media (max-width: 480px) {

     .filler6{
        margin-bottom: 7%;
    }
        .p{
        padding-top: 15%;
    }
    .h4{
        padding-bottom: 15%;
        position: relative;
        left: 0px;
        font-size:1.5rem;
    }

    .para2 p{
        font-size : 0.8rem;
    }

    .para2{
        padding-top : 5vh;
    }
     }

     @media (max-width: 900px) {
        .p{
        padding-top: 20%;
    }
    .h4{
        padding-bottom: 20%;
    }
     }
    
    </style>