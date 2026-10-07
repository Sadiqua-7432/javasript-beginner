var time=gsap.timeline();
var timeline=gsap.timeline();
var tline=gsap.timeline();
tline.from("#nav h2",{
    y:-50,
    opacity:0,
    duration:1,
    delay:0.3,
    stagger:0.2
})
timeline.from("#bottom h1",{
    x:-500,
    duration:0.8,
    delay:0.2,
    opacity:0,
    stagger:0.3
})
time.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})