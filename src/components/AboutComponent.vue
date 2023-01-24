<template>
    <div class="con" id="about">
        <h1 class="h3">About</h1>
        <div>
            <p class="paragraph">NMITHacks is a 36 hour hackathon event organized by the CS Department at NMIT, one of the most prestigious college in Bangalore. It's an event for people to come together and innovate by pushing their limits to create something new and showcase their unique skillsets! Want to learn something new, network with like-minded computer scientists, and push the boundaries of your skill? Come join us at NMITHacks to solve real-life problems, explore new possibilities, and shoot for the stars!</p>
        </div>
    </div>
    <div class="filler1" id="newTracks">
    </div>
    
</template>
    
    <style>
    .filler1{
        margin-bottom: 5%;
    }
    .h3{
        margin-left: 10%;
        font-weight: 900;
        color: #080518;
        margin-top : 0;
        position: relative;
        top :50px;
        padding-bottom:5vh;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size:1.5rem;
    }
    .paragraph{
        font-family: 'Lucida Sans', 'Lucida Sans Regular';
        font-size: 1.25rem;
        text-align: left;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 10%;
        margin-bottom: 2%;
        color:#080518;
        position: relative;
        top : -80px;
     }

     .con{
        background-color: white;
     }
     @media (max-width: 480px) {
        /* .p{
        font-family: sans-serif;
        text-align: center;
        margin: 10%;
        color:#080518;
        position: relative;
        top : -80px;
     } */
     .filler1{
        margin-bottom: 0%;
    }
        .paragraph{
        padding-top: 15%;
        font-size:0.8rem;
    }
    .h3{
        /* padding-bottom: 15%; */
        padding : 0px;
        margin-bottom: 5vh;
        text-align: left;
    }
     }

     @media (max-width: 900px) {
        .p{
        padding-top: 20%;
    }
    .h3{
        padding-bottom: 20%;
    }
     }
    
    </style>