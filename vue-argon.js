/* Search */
$(document)
  .ready(function() {
    $(".show-search,.close-search")
      .click(function() {
        $("#search-box")
          .slideToggle("normal");
        $(".tombol-utama")
          .slideToggle("normal");
      });
  });

/* Navigation */
$(document)
.ready(function() {
  $('.navigation li.sub-menu')
    .click(function() {
$('.navigation li.sub-menu.active',this)
.removeClass("active");
      $(this)
        .toggleClass("active");
    });
});
$(document)
  .ready(function() {
    $(".show-navigation,.close-navigation")
      .click(function() {
        $(".navigation")
          .slideToggle("normal");
        $(".close-navigation")
          .slideToggle("normal");
      });
  });

/* Whatsapp Chat Widget by www.idblanter.com */
$(document).on("click","#send-it",function(){var a=document.getElementById("chat-input");if(""!=a.value){var b=$("#get-number").text(),c=document.getElementById("chat-input").value,d="https://web.whatsapp.com/send",e=b,f="&text="+c;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))var d="whatsapp://send";var g=d+"?phone="+e+f;window.open(g, '_blank')}}),$(document).on("click",".informasi",function(){document.getElementById("get-number").innerHTML=$(this).children(".my-number").text(),$(".start-chat,.get-new").addClass("show").removeClass("hide"),$(".home-chat,.head-home").addClass("hide").removeClass("show"),document.getElementById("get-nama").innerHTML=$(this).children(".info-chat").children(".chat-nama").text(),document.getElementById("get-label").innerHTML=$(this).children(".info-chat").children(".chat-label").text()}),$(document).on("click",".close-chat",function(){$("#whatsapp-chat").addClass("hide").removeClass("show")}),$(document).on("click",".blantershow-chat",function(){$("#whatsapp-chat").addClass("show").removeClass("hide")});

/* Lazy Load */
function lazyLoad(){for(var e=document.getElementsByClassName("lazy"),t=0;t<e.length;t++)isInViewport(e[t])&&(e[t].src=e[t].getAttribute("data-src"))}function isInViewport(e){var t=e.getBoundingClientRect();return t.bottom>=0&&t.right>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.left<=(window.innerWidth||document.documentElement.clientWidth)}function registerListener(e,t){window.addEventListener?window.addEventListener(e,t):window.attachEvent("on"+e,t)}registerListener("load",lazyLoad),registerListener("scroll",lazyLoad);
for(i=0; i<1; i++){
lazyLoad();
};
$("img.lazy").toggleClass("show");
