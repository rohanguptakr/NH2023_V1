<template>
	<div class="transkew-2">
		<div class="wrapper" id="teams">
		<h1 class="team">Our Team</h1>
    <figure class="frame">
        <div class="carousel dissolve">
          <div class="items">
			<button class="btn prev" @click="prev">{{prevSign}}</button>
			<img :src="require('../assets/'+imgs[counter]+'.png')" alt="">
			<button class="btn next" @click="next">{{nextSign}}</button>
           </div>
        </div>
    </figure>
	</div>
	</div>
</template>

<script>
    export default{
		name:"TeamsComponent",
		data(){
			return{
				timer:null,
				counter:0,
				prevSign:"<",
				nextSign:">",
				imgs: ['Aditya','Ekeswar','Ashwin','Madhumitha','Nitin','Onkar','Shravan','Smita','Tejashree','Vikitha']
			}
		},
		mounted: function()
		{
			this.startShow();
		},
		methods:{
			startShow: function(){
					this.timer = setInterval(this.next, 6000);
			},
			next(){
				if(this.counter==this.imgs.length-1) this.counter=0;
				else this.counter++;
			},
			prev(){
				if(this.counter==0) this.counter = this.imgs.length-1;
				else this.counter--;
			}
		},
    }
</script>

<style>
.btn{
	height: 5%;
	width:3.5%;
	border: 0;
	cursor: pointer;
}
.btn:hover{
	background-color: rgb(128, 128, 128);
}
.next{
	margin-left: 2%;
}
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
.items{
	display: flex;
	justify-content: center;
	align-items: center;
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
img {
	max-width: 100%;
    max-height: 100%;
	display: block;
}

figure {
	width: 475px;
	margin: 10px auto 0;
}
figure .carousel {
	width: 475px;
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
button{
	margin: 0;
	padding: 0;
}

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