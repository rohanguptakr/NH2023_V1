<template>
    <div class="con">
        <h1 class="h3">About</h1>
        <div class="p">
            <p>NMITHacks is a 36 hour hackathon event organized by the CS Department at NMIT, one of the most prestigious college in Bangalore. It's an event for people to come together and innovate by pushing their limits to create something new and showcase their unique skillsets!Want to learn something new, network with like-minded computer scientists, and push the boundaries of your skill? Come join us at NMITHacks to solve real-life problems, explore new possibilities, and shoot for the stars!</p>
        </div>
    </div>
</template>
    
    <style>
    .h3{
        padding-left: 10rem;
        font-weight: 900;
        color: #080518;
        margin-top : 0;
        position: relative;
        top :50px;
    }
    .p{
        font-family: sans-serif;
        text-align: center;
        margin-left: 20%;
        margin-right: 20%;
        margin-top: 15%;
        margin-bottom: 10%;
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
        .p{
        padding-top: 15%;
    }
    .h3{
        padding-bottom: 15%;
        position: relative;
        left: 0px;
    }
     }

     @media (max-width: 700px) {
        .p{
        padding-top: 20%;
    }
    .h3{
        padding-bottom: 20%;
    }
     }
    
    </style>