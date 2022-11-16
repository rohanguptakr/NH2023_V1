import anime from "animejs";

export function draw(){
    anime({
        targets: '#logo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        fill:"#ecf27c",
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: false
      });
}