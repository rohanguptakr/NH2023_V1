<template>
    <div class="info-hacks">
        <p class="text-hacks">
        Hackathon by The Dept. of CSE, NMIT 
    </p>
    <br>
    <p class="text-hacks">
        21st-22nd April, 2023 <br><a class="map" href="https://www.google.com/maps/place/Nitte+Meenakshi+Institute+of+Technology/@13.1284641,77.5851193,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae170d10bb559b:0x2bb3892a626cf9ba!8m2!3d13.1284641!4d77.587308?shorturl=1">
        <p class="text-hacks">Nitte Meenakshi Institute of Technology, Bengaluru</p>
        </a>
    </p>
    </div>
    <div class="pos-for-button">
        <button class="glow-on-hover" type="button">    <svg class="logo-dev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.46 123.46" fill="#27333f">
        <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 
            12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 
            13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 
            2.18.08 3.34z"></path>
        <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 
            104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 
            55.41 0 0 1 50.58 55.34z"></path>
      </svg>  Apply with Devfolio</button>
    </div>
    <div class="pos-for-button-2">
        <button class="glow-on-hover" type="button">

View Results</button>
    </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    h3{
        position: relative;
        top: 29vh;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
    .info-hacks{
        color: white; margin-top:1%; font-size:1rem;
        position: relative;
        top:30vh;
        padding : 5vw;
    }
    .text-hacks{
        font-family: 'Roboto', sans-serif;
    }
    button{
        display:none;
        position: absolute;
        top: 85%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        text-align: center;    
        color: black;
        background-color: white;
        z-index : 100;
    }
    .logo-dev{
        height : 20px;
    }

    .pos-for-button{
        position: absolute;
        top: 50vh;
        left:43vw;
    }

    .pos-for-button-2{
        position: absolute;
        top: 40vh;
        left:43vw;
    }
.glow-on-hover {
    text-decoration: none;
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.map{
    text-decoration: none;
    color: white;
    font-family: 'Roboto', sans-serif;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #3770ff, #002bff);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
    @media (max-width: 480px) {
        h3{
            top:55vw
        }
        .pos-for-button{
        position: absolute;
        top: 50vh;
        left:22vw;
    }

    .pos-for-button-2{
        position: absolute;
        top: 40vh;
        left:22vw;
    }
    .info-hacks{
        font-size:0.8rem;
    }
    }

    @media (max-width: 900px) {
        h3{
            top:55vw
        }
        .pos-for-button{
        position: absolute;
        top: 50vh;
        left:22vw;
    }

    .pos-for-button-2{
        position: absolute;
        top: 40vh;
        left:22vw;
    }
    .info-hacks{
        position: relative;
        top:30vh;
    }
    }
</style>