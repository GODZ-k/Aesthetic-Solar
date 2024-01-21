function ShowSidebar(){
    const sidebar = Document.querySelector(".sidebar")
    sidebar.style.display = "flex"
};

function HideSidebar(){
    const hide = Document.querrySelector(".sidebar")
    hide.style.display = 'none'
}

gsap.registerPlugin(ScrollTrigger) 
gsap.to(".service-head", {
    scrollTrigger: ".service-head", // start animation when ".box" enters the viewport
    x: 500,
    duration: 500
  });