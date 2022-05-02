// //////////////////////////////////////BURGER FUNCTION///////////////////////////////////////////////////////////////

function myFunction(x) {
  x.classList.toggle("change");
  let burger = document.getElementById('nav__list');
  burger.classList.toggle("active-menu");
}

// //////////////////////////////////////SMOOTH SCROLL FUNCTION///////////////////////////////////////////////////////////////

const userAgentIsMobile =
    /Mobile|Iphone|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
        navigator.userAgent
    );

let menu = document.getElementById('burger');
let burger = document.getElementById('nav__list');
let anim_Enabled = true;
$("a").click(function (keyframes, options) {
    let elementClick;
    let destination;
    if (anim_Enabled) {
        anim_Enabled = false;
        if (userAgentIsMobile) {
            burger.classList.remove("active-menu")
            menu.classList.remove("change")
        }
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top - window.innerHeight / 6;
        $("body,html").animate({
            scrollTop: destination
        }, 750, () => anim_Enabled = true);
    }
});
