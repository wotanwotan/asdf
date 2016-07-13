// fadeIn / fadeOut
// http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/

// cookies http://www.w3schools.com/js/js_cookies.asp
// http://www.w3schools.com/js/js_cookies.asp

var popup = document.querySelector(".popup");
popup.addEventListener('click', function() {
   fadeOut( this )
});

function fadeOut(el){
   el.style.opacity = 1;
   (function fade() {
      if ((el.style.opacity -= .1) < 0) {
         el.style.display = "none";
      } else {
         requestAnimationFrame(fade);
      }
   })();
}

function fadeIn(el, display){
 el.style.opacity = 0;
 el.style.display = display || "block";

   (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
   }
   })();
}

function setCookie(cname, cvalue, exdays) {
   var d = new Date();
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
   var expires = "expires="+d.toUTCString();
   document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
   var name = cname + "=";
   var ca = document.cookie.split(';');
   for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
         c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
      }
   }
   return "";
}

if( getCookie( 'popup' ) == "" ) {
   fadeIn( popup )
   setCookie( 'popup', true )
}
