// Auto Lightbox Posts
$(".entry-content img").parents("a").on("click",function(a){a.preventDefault();a.stopPropagation();return $(this).lighter()});

// jQuery Lighter Plugin Posts
(function(){var g,h,e,f=function(b,a){return function(){return b.apply(a,arguments)}};g=jQuery;h=(function(){function a(){}a.transitions={webkitTransition:"webkitTransitionEnd",mozTransition:"mozTransitionEnd",oTransition:"oTransitionEnd",transition:"transitionend"};a.transition=function(k){var c,l,d,b;c=k[0];b=this.transitions;for(d in b){l=b[d];if(c.style[d]!=null){return l}}};a.execute=function(d,b){var c;c=this.transition(d);if(c!=null){return d.one(c,b)}else{return b()}};return a})();e=(function(){a.settings={padding:40,dimensions:{width:960,height:540},template:"<div class='lighter fade'>\n  <div class='lighter-container'>\n    <span class='lighter-content'></span>\n    <a class='lighter-close'>&#215;</a>\n    <a class='lighter-prev'>&#8249;</a>\n    <a class='lighter-next'>&#8250;</a>\n  </div>\n  <div class='lighter-overlay'></div>\n</div>"};a.lighter=function(c,d){var b;if(d==null){d={}}b=c.data("_lighter");if(!b){b=new a(c,d);c.data("_lighter",b)}return b};a.prototype.$=function(b){return this.$lighter.find(b)};function a(c,b){if(b==null){b={}}this.show=f(this.show,this);this.hide=f(this.hide,this);this.toggle=f(this.toggle,this);this.keyup=f(this.keyup,this);this.align=f(this.align,this);this.resize=f(this.resize,this);this.process=f(this.process,this);this.href=f(this.href,this);this.type=f(this.type,this);this.image=f(this.image,this);this.prev=f(this.prev,this);this.next=f(this.next,this);this.close=f(this.close,this);this.$=f(this.$,this);this.$el=c;if((this.$el.data("width")!=null)&&(this.$el.data("height")!=null)){if(b.dimensions==null){b.dimensions={width:this.$el.data("width"),height:this.$el.data("height")}}}this.settings=g.extend({},a.settings,b);this.$lighter=g(this.settings.template);this.$overlay=this.$(".lighter-overlay");this.$content=this.$(".lighter-content");this.$container=this.$(".lighter-container");this.$close=this.$(".lighter-close");this.$prev=this.$(".lighter-prev");this.$next=this.$(".lighter-next");this.$body=this.$(".lighter-body");this.width=this.settings.dimensions.width;this.height=this.settings.dimensions.height;this.align();this.process()}a.prototype.close=function(b){if(b!=null){b.preventDefault()}if(b!=null){b.stopPropagation()}return this.hide()};a.prototype.next=function(b){if(b!=null){b.preventDefault()}return b!=null?b.stopPropagation():void 0};a.prototype.prev=function(){if(typeof event!=="undefined"&&event!==null){event.preventDefault()}return typeof event!=="undefined"&&event!==null?event.stopPropagation():void 0};a.prototype.image=function(b){return b.match(/\.(jpeg|jpg|jpe|gif|png|bmp)$/i)};a.prototype.type=function(b){if(b==null){b=this.href()}return this.settings.type||(this.image(b)?"image":void 0)};a.prototype.href=function(){return this.$el.attr("href")};a.prototype.process=function(){var j,c,d,b=this;d=this.type(j=this.href());this.$content.html((function(){switch(d){case"image":return g("<img/>").attr({src:j});default:return g(j)}})());switch(d){case"image":c=new Image();c.src=j;return c.onload=function(){return b.resize(c.width,c.height)}}};a.prototype.resize=function(b,c){this.width=b;this.height=c;return this.align()};a.prototype.align=function(){var d,b,c;b=Math.max((d=this.height)/(g(window).height()-this.settings.padding),(c=this.width)/(g(window).width()-this.settings.padding));if(b>1){d=Math.round(d/b)}if(b>1){c=Math.round(c/b)}return this.$container.css({height:d,width:c,margin:"-"+(d/2)+"px -"+(c/2)+"px"})};a.prototype.keyup=function(b){if(b.target.form!=null){return}if(b.which===27){this.close()}if(b.which===37){this.prev()}if(b.which===39){return this.next()}};a.prototype.toggle=function(b){if(b==null){b="on"}g(window)[b]("resize",this.align);g(document)[b]("keyup",this.keyup);this.$overlay[b]("click",this.close);this.$close[b]("click",this.close);this.$next[b]("click",this.next);return this.$prev[b]("click",this.prev)};a.prototype.hide=function(){var d,b,c=this;d=function(){return c.toggle("off")};b=function(){return c.$lighter.remove()};d();this.$lighter.removeClass("fade");this.$lighter.position();this.$lighter.addClass("fade");return h.execute(this.$container,b)};a.prototype.show=function(){var d,b,c=this;b=function(){return c.toggle("on")};d=function(){return g(document.body).append(c.$lighter)};d();this.$lighter.addClass("fade");this.$lighter.position();this.$lighter.removeClass("fade");return h.execute(this.$container,b)};return a})();g.fn.extend({lighter:function(a){if(a==null){a={}}return this.each(function(){var b,c,d;b=g(this);d=g.extend({},g.fn.lighter.defaults,typeof a==="object"&&a);c=typeof a==="string"?a:a.action;if(c==null){c="show"}return e.lighter(b,d)[c]()})}})}).call(this);

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

/* HTML Pembayaran */
document.getElementById('add-pembayaran').innerHTML = 
"<div class='pay-box'><center>"+
"<img class='lazy' data-src='https://4.bp.blogspot.com/-rSqBLYiCtzY/XHPu3YxP1pI/AAAAAAAALZw/RxX5OvoedZYWooGS6JNf-L6-9fpK_S98wCLcBGAs/s120/BCA.png' alt='BCA'/></center>"+
"No.Rek: 5475228712<br/>A/N: Rio Ilham Hadi"+
"</div>"+
"<div class='pay-box'><center>"+
"<img class='lazy' data-src='https://2.bp.blogspot.com/-lnYTxUzqIr0/XHPu4K8PwEI/AAAAAAAALZ0/XJmZk6hnIMQ9N4GfKQ0oYqRWGwQaKLchQCLcBGAs/s120/Paypal.png' alt='Paypal'/></center>"+
"rioblanter@gmail.com<br/>paypal.me/rioblanter"+
"</div>"+
"<div class='pay-box'><center>"+
"<img class='lazy' data-src='https://2.bp.blogspot.com/-mI-aL3sl5os/XHPu3QtwyMI/AAAAAAAALZo/GIFPWqdlReMiDDX8DBw0OOXxUMaCrg-bQCLcBGAs/s120/Ovo.jpg' alt='OVO'/></center>"+
"0888-8905-441<br/>A/N: Rio Ilham Hadi"+
"</div>"+
"<div class='pay-box'><center>"+
"<img class='lazy' data-src='https://2.bp.blogspot.com/-LeThx0u94EQ/XHPu4o7WjUI/AAAAAAAALZ4/9hfwvfHeBe8JSyKeXQnbDr1-sd8rWfTyQCLcBGAs/s120/Smartfren.png' alt='Smartfren'/></center>"+
"Chat before use this method.<br/>"+
"</div>"+
"<div class='pay-box'><center>"+
"<img class='lazy' data-src='https://2.bp.blogspot.com/-8a-TGOw8cbc/XHPxbB239ZI/AAAAAAAALaU/s497aWKkELgeApVy1luFjNNahmJ6IsPygCLcBGAs/s120/XL.jpg' alt='XL Axiata'/></center>"+
"Chat before use this method.<br/>"+
"</div>"+
"<div class='pay-box'><center>"+
"<img class='lazy' data-src='https://2.bp.blogspot.com/-rr1zXLu-xpI/XHPu3cYwxoI/AAAAAAAALZs/yqp_MCwpTlYfiV0yRWbzmn2-SrGQoqEQwCLcBGAs/s120/GoPay.png' alt='GoPay'/></center>"+
"0888-8905-441<br/>A/N: Rio Ilham Hadi"+
"</div>";

/* HTML Pemesanan */
document.getElementById('add-pemesanan').innerHTML = 
"<form id='payment_confirm' name='contact-form'>"+
"<div class='theme-grid'><i class='icon ion-ios-contact'></i><input class='validate' id='pembeliform' placeholder='Nama' name='name' required='' type='text' value=''/></div>"+
"<div class='theme-grid'><i class='icon ion-ios-mail'></i><input class='validate' id='emailform' placeholder='Email' name='email' required='' type='email' value=''/></div>"+
"<div class='theme-grid'><i class='icon ion-ios-card'></i><select id='pembayaran'>"+
"<option hidden='hidden' selected='selected' value='default'>Metode Pembayaran</option>"+
'<option value="1">BCA : 5475228712 A/N Rio Ilham Hadi</option>'+
'<option value="2">Paypal : rioblanter@gmail.com</option>'+
'<option value="3">OVO : 08888905441</option>'+
'<option value="4">GoPay : 08888905441</option>'+
'<option value="5">Pulsa Smartfren : 08888905441</option>'+
'</select><a type="submit" class="captchaid" href="javascript:void"><span class="box-captcha"></span>Setuju Syarat dan Ketentuan</a></div>'+
'<div class="theme-grid"><i class="icon ion-ios-globe"></i><input class="validate" id="linkform" placeholder="URL Blog *www.example.com" name="url" required="" type="url" value=""/><span class="badge text-info">Jika lebih dari 1, Pisahkan dengan spasi.</span></div>'+
"</form>";

/* Posts */
$(document).on('click','.belisekarang', function(){
$("#order-wrapper").toggleClass("aktif");
});
$(document).ready(function(){$(".close_order").click(function(){$("#order-wrapper").removeClass("aktif");});});

if (get_developer == false){
$('.developer,.pilih-lisensi,.back1').hide();
$('.detail-pemesanan').show();
$('.lisensi b').text('Personal');
}

$(document).on('click','.beli-std', function(){
$('.harga b').text(personal);
$('.lisensi b').text('Personal');
$('.detail-pemesanan').show();
$('.pilih-lisensi').hide();
});

$(document).on('click','.beli-dev', function(){
$('.harga b').text(developer);
$('.lisensi b').text('Developer');
$('.detail-pemesanan').show();
$('.pilih-lisensi').hide();
});

$(document).on('click','.back1', function(){
$('.detail-pemesanan').hide();
$('.pilih-lisensi').show();
});

$(document).on('click','.back2', function(){
$('.checkout').show();
$('.last-order').hide();
});

$(document).on('click','.next_last', function(){
$('.checkout').hide();
$('.last-order').show();
});

$("#walink,#emaillink").toggleClass("disabled");
$(document).on('click','#walink.disabled,#emaillink.disabled', function(){
  $(".text-gagal").show();
});

$(document).on('click','.captchaid', function(){
  var input = document.getElementById('emailform');
  if("" != input.value){
    /* WA Support */
  var walink = 'https://web.whatsapp.com/send',
      phone = '628888905441',
      walink2 = '&text=Halo saya ingin konfirmasi Pembelian ';
    /* Mail Support */
  var maillink = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=',
      email = 'rioblanter@gmail.com',
      mailsubject = '&subject=Konfirmasi Pembelian ',
      maillink1 = '',
      maillink2 = '&body=Halo saya ingin konfirmasi Pembelian ';
    /* Smartphone Support */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  var walink = 'whatsapp://send',
      maillink = 'mailto:',
      maillink1 = '?cc=rioblanter@gmail.com&bcc=rioblanter@gmail.com';
  }
  /* Form Value */
  var namaform = $('.blanter-asli h5').text(),
      pembeliform = $('#pembeliform').val(),
      emailform = $('#emailform').val(),
      metodeform = $("#pembayaran :selected").text(),
      jumlahform = $('.harga b').text(),
      jenislisensi = $('.lisensi b').text(),
      linkform = $('#linkform').val();
  /* Final WA URL */
  var wa_link = walink + '?phone=' + phone + walink2 + '*' + namaform + '*%0A%0A' +
      '*Nama* : ' + pembeliform + '%0A' +
      '*Email* : ' + emailform + '%0A' +
      '*Metode Pembayaran* : ' + metodeform + '%0A' +
      '*Lisensi* : ' + jenislisensi + '%0A' +
      '*Jumlah Pembayaran* : ' + jumlahform + '%0A' +
      '*Link Blog* : ' + linkform;
  /* Final Mail URL */
  var mail_link = maillink + email + maillink1 + mailsubject + namaform + maillink2 + '*' + namaform + '*%0A%0A' +
      '*Nama* : ' + pembeliform + '%0A' +
      '*Email* : ' + emailform + '%0A' +
      '*Metode Pembayaran* : ' + metodeform + '%0A' +
      '*Lisensi* : ' + jenislisensi + '%0A' +
      '*Jumlah Pembayaran* : ' + jumlahform + '%0A' +
      '*Link Blog* : ' + linkform;
      document.getElementById('walink').href = wa_link;
      document.getElementById('emaillink').href = mail_link;
      $('#walink,#emaillink').attr("target","_blank");
      $("span.box-captcha,.pemesanan").toggleClass("aktif");
      $("span.box-captcha,.pemesanan").removeClass("gagal");
      $("#walink,#emaillink").removeClass("disabled");
      $(".text-gagal").hide();
    } else {
      $("span.box-captcha,.pemesanan").toggleClass("gagal");
      $(".text-gagal").show();
    }
    });

/* Pemanggil Data */
$('.hargapersonal,.harga-personal-lic,.harga b').text(personal);
$('.hargadeveloper,.harga-developer-lic').text(developer);
$('.coret-personal-lic').text(c_personal);
$('.coret-developer-lic').text(c_developer);
$('.listlisensi').text(lisensi);
$('.listrilis').text(rilis);
$('.listversi').text(versi);
$('.listupdate').text(update);
document.getElementById('preview').href = preview;
var changelog = document.getElementById('go-changelog').innerHTML;
document.getElementById('add-changelog').innerHTML = changelog;
document.getElementById('go-changelog').innerHTML = '';
