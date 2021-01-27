const tl = gsap.timeline({ defaults: { ease: "power1.out"} });

tl.to(".text", { y:"0%", duration: 1, stagger: 0.25 });

tl.to(".slider" ,{ y:"-100%", duration:1.5, delay: 0.5});

tl.to(".intro", { y:"-100%", duration: 1}, "-=1");

let progress = document.getElementById('progress_bar');

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;

    progress.style.height = progressHeight + "%";
}


document.querySelector('#relive').scrollIntoView({ 
  behavior: 'smooth' 
});

window.onload = function (){

    window.scrollTo(0,0);

}