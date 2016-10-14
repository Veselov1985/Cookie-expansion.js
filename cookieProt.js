var cook = this.cook = this.$$=(function() {




function Cook () {};



    Cook.prototype.deleteAll = function(){

    document.cookie.split(";").forEach(function(c) { 
 cook.deleteCookie(c.split("=")[0].trim());

})

}


    Cook.prototype.delete= function(name) {
    cook.setCookie(name, "", {
    expires: -1
   

  })
     }



   Cook.prototype.get= function (name) {
     var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
     ));


     var JSON_object = !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(
matches[1].replace(/"(\\.|[^"\\])*"/g, ''))) && eval('(' + matches[1] + ')');

  



     if(JSON_object) {
    
        return JSON.parse(matches[1]);
     } else {
    return matches ? decodeURIComponent(matches[1]) : undefined;
    }
}


    Cook.prototype.set =function (name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

   if(Array.isArray(value) || value instanceof Object ) {


    value = JSON.stringify(value);
    



   } else {  value = encodeURIComponent(value);

   }

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}



     Cook.prototype.check = function () {

    if(navigator.cookieEnabled) {
  
     return true;


    } else 

    cook.setCookie("test","1");
    if(cook.getCookie("test")!=undefined) {
    cook.deleteCookie("test");
     return true;

    } else  return false;


       }


var cook =new Cook();


return cook;

	
}());
