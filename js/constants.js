/*
var api_url = 'http://10.0.0.8/terrazas_tv/services/app/api/';
var img_url = 'ttp://10.0.0.8/terrazas_tv/';
var thumb_url = 'http://10.0.0.8/terrazas_tv/services/app/api/helpers/timthumb.php?w=%width%&h=%height%&src=';
*/


var api_url = 'http://lasterrazasdebecerril.es/services/app/api/';
var img_url = 'http://lasterrazasdebecerril.es/';
var thumb_url = 'http://lasterrazasdebecerril.es/services/app/api/helpers/timthumb.php?w=%width%&h=%height%&src=';


var applicationLanguage = 'es';



var userData = null;

try {
    userData = (localStorage.getItem("user") !== null || localStorage.getItem("user") !== undefined) ? JSON.parse(localStorage.getItem("user")) : null;
}catch(error) {
    userData = null;
}


var TOKEN_PUSH_NOTIFICATION = 0;

try {
    TOKEN_PUSH_NOTIFICATION = (localStorage.getItem("push_token") !== null || localStorage.getItem("push_token") !== undefined) ? JSON.parse(localStorage.getItem("push_token")) : 0;;
} catch(error) {
    TOKEN_PUSH_NOTIFICATION = 0;
}

if( TOKEN_PUSH_NOTIFICATION == '' || TOKEN_PUSH_NOTIFICATION == undefined || TOKEN_PUSH_NOTIFICATION == 'undefined' ){
    TOKEN_PUSH_NOTIFICATION = 0;
}

var PUSH_NOTIFICATION_REGISTER;
var PUSH_NOTIFICATION_TOKEN;

/*try {
    TOKEN_PUSH_NOTIFICATION = (localStorage.getItem("push_token") !== null || localStorage.getItem("push_token") !== undefined) ? JSON.parse(localStorage.getItem("push_token")) : 0;;
} catch(error) {
    TOKEN_PUSH_NOTIFICATION = 0;
}*/

var DEVICE_UUID;// = (localStorage.getItem("uuid") !== null || localStorage.getItem("uuid") !== undefined) ? JSON.parse(localStorage.getItem("uuid")) : 0;


var HAVE_NOTIFICATION = false;
var TYPE_NOTIFICATION = '';
var EVENT;
var APP_INITIALIZED = false;

var offline_data = undefined;

var fileSystem;

var isonline = false;

$(document).ready(function() {
    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
});