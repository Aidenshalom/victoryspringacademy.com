
function StickyNav() {
    var headerHeight = document.querySelector("#breakpoint").offsetHeight / 10;
    var Stickynavbar = document.querySelector("#sticky-nav");
    var scrollvalue = window.scrollY;

    if(scrollvalue > headerHeight){
        Stickynavbar.classList.add("sticky-header");
    } else {
        Stickynavbar.classList.remove("sticky-header");
    }
}

window.addEventListener("scroll", StickyNav);

function StickyNav2() {
    var headerHeight = document.querySelector("#breakpoint").offsetHeight / 14;
    var Stickynavbar2 = document.querySelector("#sticky-nav-sm");
    var scrollvalue = window.scrollY;

    if(scrollvalue > headerHeight){
        Stickynavbar2.classList.add("sticky-header-sm");
    } else {
        Stickynavbar2.classList.remove("sticky-header-sm");
    }
}

window.addEventListener("scroll", StickyNav2);


function shownav(){
		// var hamburger = document.querySelector(".hamburger");
		var mobileMenu = document.querySelector(".mobile-menu");
		
		mobileMenu.classList.toggle("show");

	}


    