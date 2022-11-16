<template>
	<h1 class="team">Teams</h1>
    <figure class="frame">
        <div class="carousel dissolve" id="teams">
          <div class="items">
            <img class="item" :src="require('../assets/ArchitaNew.png')" alt="Random">
            <img class="item" :src="require('../assets/AdityaNew.png')" alt="Seven to ten at Leeds &amp; Holbeck">
            <img class="item" :src="require('../assets/ArchitaNew.png')" alt="Banksy">
            <img class="item" :src="require('../assets/AdityaNew.png')" alt="Bristol autumn">
            <img class="item" :src="require('../assets/ArchitaNew.png')" alt="Bristol autumn">
            <img class="item" :src="require('../assets/AdityaNew.png')" alt="Bristol autumn">
           </div>
        </div>
    </figure>
</template>

<script>
    export default{

    }
</script>

<style>
.team{
	color: #080518;
	font-weight: 900;
	padding-left: 10rem;
}
    @import url(https://fonts.googleapis.com/css?family=Trykker);
.dissolve {
	margin-top: 20vh;
    margin-bottom: 20vh;
	width: 400px;
	height: 500px;
	position: relative;
	overflow: hidden;
}
.dissolve .item {
    position: absolute;
	left: 0;
	right: 0;
	opacity: 0;
	animation: dissolve 25s linear infinite;
}

.dissolve .item:nth-child(2) {
	animation-delay: 5s;
}
.dissolve .item:nth-child(3) {
	animation-delay: 10s;
}
.dissolve .item:nth-child(4) {
	animation-delay: 15s;
}
.dissolve .item:nth-child(5) {
    animation-delay: 20s;
}
.dissolve .item:nth-child(6) {
    animation-delay: 25s;
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
figure p {
	color: #999;
	text-align: center;
}
figure p a {
	color: #06afd8;
}

@media (max-width: 500px) {
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
}
 
</style>