"use strict";

const mailTxt = document.querySelector(".mailTxt");

// GSAP Animation
let animatonTimeline = gsap.timeline();

animatonTimeline
  .from(".abb", 1, {
    y: -40,
    opacity: 0,
  })
  .from(
    ".mainHead",
    1,
    {
      x: -20,
      opacity: 0,
    },
    "<0.5"
  )
  .from(
    ".imageDis",
    1,
    {
      x: 40,
      opacity: 0,
    },
    "<0.5"
  )
  .from(".waves", {
    y: 10,
    opacity: 0,
  }),
  "=-1";

let t1 = gsap.timeline();

t1.to(".mailTxt", 1, {
  y: 4,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
  delay: 2,
});

// Hover & Click Animation for Email text
mailTxt.addEventListener("mouseenter", () => {
  t1.pause();
  gsap.to(".mailTxt", {
    scale: 1.08,
  });
});
mailTxt.addEventListener("mouseleave", () => {
  t1.resume();
  gsap.to(".mailTxt", {
    scale: 1,
  });
});
mailTxt.addEventListener("click", () => {
  gsap.to(".mailTxt", 0.2, {
    scale: 0.98,
    y: -2,
    yoyo: true,
  });
});

// Image floating animation
gsap.to(".imageDis", 1, {
  y: -13,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
});

// Video Player
const videoPlayer = new Plyr("video", { captions: { active: true } });

window.player = videoPlayer;
