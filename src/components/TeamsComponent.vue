<template>
	<div class="transkew-2">
		<div class="wrapper" id="teams">
		<h1 class="team">Our Team</h1>
    <figure class="frame">
        <div class="carousel dissolve">
          <div class="items">
            <img class="item" src="../assets/Aditya.png" alt="Aditya">
            <img class="item" :src="require('../assets/Ekeswar.png')" alt="Ekeswar">
            <img class="item" :src="require('../assets/Madhumitha.png')" alt="Madhumitha">
            <img class="item" :src="require('../assets/Onkar.png')" alt="Onkar">
            <img class="item" :src="require('../assets/Tejashree.png')" alt="Tejashree">
            <img class="item" :src="require('../assets/Ashwin.png')" alt="Ashwin">
			<img class="item" :src="require('../assets/Nitin.png')" alt="Nitin">
			<img class="item" :src="require('../assets/Shravan.png')" alt="Shravan">
			<img class="item" :src="require('../assets/SmitaCarousel.png')" alt="Smita">
			<img class="item" :src="require('../assets/Vikitha.png')" alt="Vikitha">
           </div>
        </div>
    </figure>
	</div>
	</div>
</template>

<script>
    export default{

    }
</script>

<style>
.transkew-2 {
   -webkit-clip-path: polygon(0 0, 100% 3%, 100% 96%, 0 100%);
  clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 96%);
}
.team{
	color:var(--bgYellow);
	padding-top: 5vh;
	font-weight: 900;
	margin-left : 10%;
	font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size:1.7rem;
}
    @import url(https://fonts.googleapis.com/css?family=Trykker);
.dissolve {
	margin-top: 10vh;
    margin-bottom: 10vh;
	width: 400px;
	height: 400px;
	position: relative;
	overflow: hidden;
}
.dissolve .item {
    position: absolute;
	left: 0;
	right: 0;
	opacity: 0;
	animation: dissolve 36s linear infinite;
}
.wrapper{
	background-color: var(--bgBlue);
	max-width: 100vw;
	max-height: 100vh;
	padding-bottom: 10vh;
}
.frame{
	background-color : #fff;
}
.dissolve .item:nth-child(2) {
	animation-delay: 3s;
}
.dissolve .item:nth-child(3) {
	animation-delay: 6s;
}
.dissolve .item:nth-child(4) {
	animation-delay: 9s;
}
.dissolve .item:nth-child(5) {
    animation-delay: 12s;
}
.dissolve .item:nth-child(6) {
    animation-delay: 15s;
}
.dissolve .item:nth-child(7) {
    animation-delay: 18s;
}
.dissolve .item:nth-child(8) {
    animation-delay: 21s;
}
.dissolve .item:nth-child(9) {
    animation-delay: 24s;
}
.dissolve .item:nth-child(10) {
    animation-delay: 27s;
}
.dissolve .item:nth-child(11) {
    animation-delay: 30s;
}
.dissolve .item:nth-child(12) {
    animation-delay: 33s;
}

@-webkit-keyframes dissolve {
	0%, 30%, 100% {
		opacity: 0;
	}
	5%, 25% {
		opacity: 1;
	}
}
@-moz-keyframes dissolve {
	0%, 30%, 100% {
		opacity: 0;
	}
	5%, 25% {
		opacity: 1;
	}
}
@-ms-keyframes dissolve {
	0%, 30%, 100% {
		opacity: 0;
	}
	5%, 25% {
		opacity: 1;
	}
}
@keyframes dissolve {
	0%, 30%, 100% {
		opacity: 0;
	}
	5%, 25% {
		opacity: 1;
	}
}
img {
	max-width: 100%;
    max-height: 100%;
	display: block;
}

figure {
	width: 400px;
	margin: 10px auto 0;
}
figure .carousel {
	width: 400px;
	box-shadow: 0 0 0 10px #fff, 0 .3em .8em 10px black;
}
figure figcaption {
	text-transform: uppercase;
	margin-top: 10px;
	padding-top: .5em;
	font-size: 1.2em;
	text-align: center;
	color: #999;
	text-shadow: 0 -0.1em 0 rgba(0,0,0,0.6);
}
figure figcaption:before, figure figcaption:after {
	content: "\2014";
	font-family: "Times New Roman", serif;
	text-shadow: none;
	color: rgba(255,255,255,0.2);
}
figure figcaption:before {
	margin-right: .3em;
}
figure figcaption:after {
    margin-left: .3em;
}
/* figure p {
	color: #999;
	text-align: center;
}
figure p a {
	color: #06afd8;
} */

@media (max-width: 480px) {
    figure {
        width: 300px;
        height: 300px;
		margin-bottom: 20%;
}
    figure .carousel {
        width: 300px;
        height: 300px;
        box-shadow: 0 0 0 10px #fff, 0 .3em .8em 10px black;
		margin-top: 50%;
    }
	.team{
		padding-left : 8%;
		margin-bottom : -10vh;
	}
}

@media (max-width: 900px) {
    figure {
        width: 300px;
        height: 300px;
		margin-bottom: 20%;
}
    figure .carousel {
        width: 300px;
        height: 300px;
        box-shadow: 0 0 0 10px #fff, 0 .3em .8em 10px black;
    }
	.team{
		padding-left : 8%;
		margin-bottom : -10vh;
	}
}

 
</style>