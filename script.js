// gsap.registerPlugin(ScrollTrigger);


var blured = document.querySelector(".main-viewport1");
var nav = document.querySelector(".nav");
var cardsreveal = document.querySelectorAll(".cards");
var tl = gsap.timeline();

function loaderstay(){

  document.addEventListener("readystatechange",function(){
      function scrollbarhide(){
          document.body.style.overflow = 'hidden';
      }
      scrollbarhide();
  
  
      function disableScroll() {
      // Get the current page scroll position
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    
          // if any scroll is attempted, set this to the previous value
          window.onscroll = function() {
              window.scrollTo(scrollLeft, scrollTop);
          };
      }
  disableScroll();
      if(document.readyState === "complete"){
          setTimeout(loaderHide,300);
          function loaderHide(){ 
              document.querySelector(".preloader").style.opacity = "0"
          }


          function scrollbarvisible(){
              document.body.style.overflow = 'visible';
          }
          scrollbarvisible();
  
          function enableScroll() {
              window.onscroll = function() {};
          }
          enableScroll();
      }
      
  })
}
loaderstay();
function loader(){
  let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 100;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #3f3f3f ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

}
loader(); 

function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

  
  }
  
  // loco();  


// text animation 1
const myText = new SplitType('.heading')

tl.to(' .heading .char', {
    y:0,
    stagger:0.05,
    delay:.2,
    duration:.1,
})

tl.from('.common_para',{
    y:100,
    opacity:0,
    duration:3,
  ease: Expo.easeOut,


})
tl.from('.cta',{
    opacity:1, 
    duration:3,   

})

// text animation 2 heading1

gsap.from(".first_heading", {
    scrollTrigger: {
        trigger: ".first_heading",
        // markers: true,
        start: "top 50%",
        end: "top 20%",
        scrub: 3,
    },

    x:200,
    opacity:0,
  ease: Expo.easeOut,
})
gsap.from(".first_para", {
    scrollTrigger: {
      trigger: ".first_heading",
      // markers: true,
      start: "top 50%",
      end: "top 20%",
      scrub: 3,
    },

    x:200,
    opacity:0,
  ease: Expo.easeOut,
})
gsap.from(".btn1", {
    scrollTrigger: {
      trigger: ".first_heading",
      // markers: true,
      start: "top 50%",
      end: "top 20%",
      scrub: 3,
    },
    x:200,
    opacity:0,
  ease: Expo.easeOut,
})


// text animation 2 heading1 2

gsap.from(".second_heading", {
  scrollTrigger: {
      trigger: ".second_heading",
      // markers: true,
      start: "top 80%",
      end: "top 20%",
      scrub: 3,
  },

  x:100,
  opacity:0,
ease: Expo.easeOut,
})
gsap.from(".second_para", {
  scrollTrigger: {
      trigger: ".second_para",
      // markers: true,
      start: "top 80%",
      end: "top 0%",
      scrub:4,
  },

  x:100,
  opacity:0,
  delay:1,
ease: Expo.easeOut,
})

gsap.from(".btn2", {
  scrollTrigger: {
      trigger: ".second_heading",
      // markers: true,
      start: "top 60%",
      end: "top 40%",
      scrub:1,
  },
  x:60,
  opacity:0,
  delay:1,
ease: Expo.easeOut,
})


// image scale


gsap.from(".banner_images", {
  scrollTrigger: {
      trigger: ".rightsides_1",
      // markers: true,
      start: "top 30%",
      end: "top -30%",
      scrub:4,
  },
  x:50,
  opacity:0,
  scale:"0",
delay:1,
ease: Expo.easeOut,
})



// nav bar animation

gsap.from(nav, {
  y: -100,
  duration: 4,
  ease: Expo.easeOut,
});

// blured animation

gsap.to(blured, {
  scrollTrigger: {
    trigger: blured,
    // markers: true,
    start: "top 0%",
    end: "top 0%",
    scrub: 1,
  },

  duration: 1,
  ease: Expo.easeInOut,
  backdropFilter: "blur(10px)",
});



  

   


//      ScrollTrigger.create({
//     trigger: ".background",
//     scroller:"#main",
//     start:"top 0%", 
//     end:"top -300%",
//     pin: true
//   });

cardsreveal.forEach((card,i) => {
    gsap.from(card.children, { 
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            // markers: true,
            scrub:2
        },
        x:100,
        opacity:0,
        delay:1,
        stagger:0.05,
        duration:1,
        ease: Expo.easeOut,


    })

   


});


// top banner

gsap.from(".leftsides",{
  scrollTrigger:{
      trigger:".main_box",
      // scroller:"#main",
      start:"top 50%",
      end:"bottom -50%",
      scrub:3,
      // markers:true
  },
    x:-200,
    opacity:0,
    duration:3,
  ease:"expo.out"
})


// scroller


gsap.to("#scroll-line2",{
    scrollTrigger:{
        trigger:"#scroll-line2",
        // scroller:"#main",
        start:"top 100%",
        end:"bottom -100%",
        scrub:1,
        // markers:true
    },
    x:-300,
})
gsap.to("#scroll-line3",{
    scrollTrigger:{
        trigger:"#scroll-line3",
        // scroller:"#main",
        start:"top 100%",
        end:"bottom -100%",
        scrub:1,
        // markers:true
    },
    x:300,
    // ease:"elastic"
})

// mystry box

gsap.from(".mysterybox_images",{
  scrollTrigger:{
      trigger:".fifth_section",
      // scroller:"#main",
      start:"top 100%",
      end:"bottom -50%",
      scrub:1,
      // markers:true
  },
  rotate:"20deg",
  scale:"0.7",
  ease:"slow(0.7, 0.7, false)"
})


// fifth section

const myText2 = new SplitType('.heading_5-anim')

gsap.to(' .heading_5-anim .char', {
  scrollTrigger:{
    trigger:".fifth_section",
    start:"top 60%",
    end:"top 60%",
    // scrub:1,
    // markers:true
},
    y:0,
    stagger:0.05,
    delay:.2,
    duration:.1,
})
const myText3 = new SplitType('.heading_5-anim2')

gsap.to(' .heading_5-anim2 .char', {
  scrollTrigger:{
    trigger:".footer_section",
    // scroller:"#main",
    start:"top 100%",
    end:"top 100%",
    // scrub:1,
    // markers:true
},
    y:0,
    stagger:0.05,
    delay:.2,
    duration:.1,
})
