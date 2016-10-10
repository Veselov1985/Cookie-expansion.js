var cook = window.cook = window.$$=(function() {


var cook = {};


    cook.AlldeleteCookie = function(){

    document.cookie.split(";").forEach(function(c) { 
 cook.deleteCookie(c.split("=")[0].trim());

})

}


    cook.deleteCookie= function(name) {
    cook.setCookie(name, "", {
    expires: -1
   

  })
     }



    cook.getCookie= function (name) {
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


    cook.setCookie =function (name, value, options) {
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
    console.log(value);

    alert("fo");


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



     cook.checkCookie = function () {

    if(navigator.cookieEnabled) {
  
     return true;


    } else 

    cook.setCookie("test","1");
    if(cook.getCookie("test")!=undefined) {
    cook.deleteCookie("test");
     return true;

    } else  return false;


       }



return  {
check: cook.checkCookie,
get: cook.getCookie,
delete:cook.deleteCookie,
deleteAll:cook.AlldeleteCookie,
set:cook.setCookie
}

	
}());
