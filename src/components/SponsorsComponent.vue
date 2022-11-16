<template>
    <section class="sponhead">
        <h1 class="contain">Sponsors</h1>
  </section>
    <div class="container3">
    <div><img class="logo" :src="require('../assets/devfolio-temp.png')"></div>
    <div><img class="logo" :src="require('../assets/polygon-temp.png')"></div>
    <div><img class="logo" :src="require('../assets/Sakha-Global-temp.png')"></div>
    <div><img class="logo" :src="require('../assets/devfolio-temp.png')"></div>
</div>
</template>

<script>
import $ from "jquery";

export default {
    mounted(){
        $(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".logo");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});
    }
}
</script>

<style>
.contain{
        margin-left: 10%;
        font-weight: 900;
        color: #080518;
        padding-bottom: 5rem;
    }    

.container3 {
	display: grid;
	grid-gap: 5px;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-template-rows: repeat(10, 150px);
    margin-bottom: 8%;
    margin-left: 20%;
    margin-right: 20%;
}

.container3 div{
    margin: 0 auto;
    padding: 8%;
}

body{
        margin:0;
        padding: 0;
}
    .fade-in-image{
        height: 100vh;
    }
    .logo{
        opacity: 0;
        transform: translate(0, 10vh);
        transition: all 0.5s;
        width: 500px;
        margin: auto;

    }
    .logo.visible {
        opacity: 1;
        transform: translate(0, 0);
    }

    @media (max-width : 480px){
        .contain{
            padding-left : 8%;
        }

        .container3{
            margin : 0 auto;
        }
    }

</style>>