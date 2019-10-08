/* Settings */
let get_judul = 'Design Vue.JS HTML';
let get_judul2 = 'Learn And Write';
let get_desk = 'Membangun Generasi yang Kreatif, Cerdas dan Berbudi pekerti luhur.';

let link_about = '#aboutabout.us';
let link_contact = '#contactcontact.us';

let best_column_title = 'Our Best <span>Templates</span>';
let best_column_desc = "The Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 Design System.";
let best_btn_title = "Beli Sekarang";
let best_btn_link = "#link";
let best_btn2_title = "Live Preview";
let best_btn2_link = "#link";
/* Settings End */

/* Header Script */
  var global_header = new Vue({
    el: '#header',
    data: {
       htmlheader : 
       "<div class='header-one'>" + 
       "<h1>{{judul}} - {{judul2}}</h1>"+
       "<p>{{deskripsi}}</p>"+
       "<a class='button' href='"+link_about+"'>About Us</a>"+
       "<a class='button' href='"+link_contact+"'>Contact Us</a>"+
       '<svg class="wave" height="50px" preserveAspectRatio="none" viewBox="0 0 1920 75" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="a"><rect class="a" height="75" width="1920"></rect></clipPath></defs><g class="b"><path class="c" d="M1963,327H-105V65A2647.49,2647.49,0,0,1,431,19c217.7,3.5,239.6,30.8,470,36,297.3,6.7,367.5-36.2,642-28a2511.41,2511.41,0,0,1,420,48"></path></g><g class="b"><path class="d" d="M-127,404H1963V44c-140.1-28-343.3-46.7-566,22-75.5,23.3-118.5,45.9-162,64-48.6,20.2-404.7,128-784,0C355.2,97.7,341.6,78.3,235,50,86.6,10.6-41.8,6.9-127,10"></path></g><g class="b"><path class="d" d="M1979,462-155,446V106C251.8,20.2,576.6,15.9,805,30c167.4,10.3,322.3,32.9,680,56,207,13.4,378,20.3,494,24"></path></g><g class="b"><path class="d" d="M1998,484H-243V100c445.8,26.8,794.2-4.1,1035-39,141-20.4,231.1-40.1,378-45,349.6-11.6,636.7,73.8,828,150"></path></g></svg>'+
       "</div>"
    }
 })
 /* Header Script End */

 /* Content Script */
 var global_content = new Vue({
  el: '#content',
  data: {
     htmlcontent : 
     "<div id='grid' class='wrapper'>"+
     "<div class='column'></div>"+
     "<div class='column'></div>"+
     "<div class='column'></div>"+
     "<div class='column'></div>"+
     "<div class='column'></div>"+
     "<div class='column'></div>"+
     "</div>"
  }
})
/* Content Script End */

/* Best Wrapper Script */
var global_wrap = new Vue({
  el: '#best-wrapper',
  data: {
     htmlbest : 
     "<div class='best-column'><div class='shape'></div><div class='wrapper'>"+
     "<div class='left-column'>"+
     "<h3>"+best_column_title+"</h3>"+
     "<p>"+best_column_desc+"</p>"+
     "<a class='button wajib' href='"+best_btn_link+"'>"+best_btn_title+"</a>"+
     "<a class='button' href='"+best_btn2_link+"'>"+best_btn2_title+"</a>"+
     "</div>"+
     "<div class='right-column'>"+
     "<div class='image-test'></div>"+
     "</div></div>"+
     "</div>"
  }
})
/* Best Wrapper Script End */

 var judul = new Vue({
  el: '.header-one h1',
  data: {
    judul: get_judul,
    judul2: get_judul2,
  }
})

var deskripsi = new Vue({
  el: '.header-one p',
  data: {
      deskripsi: get_desk
  }
})