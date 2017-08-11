/**
 * code to use cookies
 */

var timetableCookiePath = "/timetable/";
var cookieTeacher = "teachers";
var cookieClass = "classes";
var cookieSubject = "subjects";


function setCookie(cname, cvalue ) {
	var cookieString = cname + "=" + encodeURIComponent(cvalue) + ";"; 
    document.cookie = cookieString; 
}

function getCookieArray(cname) {
	var cvalue = getCookie(cname);
	var carray = cvalue.split(",");
	return carray;
}

function saveCookieArray(cname, cArray) {
	var cvalue = cArray.toString();
	setCookie(cname, cvalue);
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
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

function uploadCookies(){
	getCookies();
	if (!teachers){
		teachers = ["Sujata", "Samita", "Suman", "Sunita"];
	}
	if (!classes){
		classes = ["Grade I", "Grade II", "IIIrd", "IVth", "Vth", "VIth"];
	}
	if (!subjects){
		subjects = ["English", "Mathematics", "Hindi", "Science", "Drawing"];		
	}
}

function getCookies() {
	teachers = getCookieArray(cookieTeacher);
	classes = getCookieArray(cookieClass);
	subjects = getCookieArray(cookieSubject);
}

function saveCookies() {
	saveCookieArray(cookieTeacher, teachers);
	saveCookieArray(cookieClass, classes);
	saveCookieArray(cookieSubject, subjects);
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}