<template>
    <section class="sponhead">
        <h1 class="contain">Sponsors</h1>
    </section>
    <div class="fade-in-image">
    <img class="spons" :src="require('C:/Git upload/NH2023_V1/src/assets/devfolio-temp.png')" alt="">
    </div>
</template>

<script>
import $ from "jquery";

export default {
    mounted(){
        $(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".spons");

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
        padding-left: 10rem;
        font-weight: 900;
        color: #080518;
        padding-bottom: 5rem;
    }     
    body{
        margin:0;
        padding: 0;
}
    .fade-in-image{
        height: 100vh;
    }
    .spons{
        opacity: 0;
        transform: translate(0, 10vh);
        transition: all 1s;
        width: 300px;
        margin: auto;
    }
    .spons.visible {
        opacity: 1;
        transform: translate(0, 0);
    }
</style>