/**
 * This file is used for entity manipulations
 * The entity could be subject names, teacher names or class names, etc.
 */

var entity="Name";

/*
var teachers = ["Sujata", "Samita", "Suman", "Sunita"];
var classes = ["Grade I", "Grade II", "IIIrd", "IVth", "Vth", "VIth"];
var subjects = ["English", "Mathematics", "Hindi", "Science", "Drawing"];
*/

const ENTITY_ID = "entity";
const TEACHER_SUBJECT_ID = "teacherSubject";
const CLASS_SUBJECT_ID = "classSubject";
const TS_TEACHER_LIST = "tsTeacherList";
const CS_CLASS_LIST = "csClassList";
const CS_ALL_SUBJECTS = "csAllSubjects";
const TS_ALL_SUBJECTS = "tsAllSubjects";
const TS_ALL_CLASSES = "tsAllClassess";
	
const TEACHER_PAGE = 1;
const CLASS_PAGE = 2;
const SUBJECT_PAGE = 3;
const CLASS_SUBJECT_PAGE = 4;
const TEACHER_SUBJECT_PAGE = 5;

var teachers = [];
var classes = [];
var subjects = [];
var classSubjects = [];
var entityArray = [];
var currentPage = -1

var entityValues = "";

function defaultSettings() {
	uploadCookies();
	fillTeachers();
}

function loadEntityList(listValues) {
	entityList = listValues;
}

function changeListLabel(caption) {
	changeLabel("listTitle", caption);
}

function fillTeachers(){ 
	fillData(teachers); 
	currentPage = TEACHER_PAGE;
	changeListLabel("Teachers List")
	pageSettings(currentPage);
}
function fillClasses(){ 
	fillData(classes); 
	currentPage = CLASS_PAGE;
	changeListLabel("Classes List")
	pageSettings(currentPage);
}
function fillSubjects(){ 
	fillData(subjects); 
	currentPage = SUBJECT_PAGE;
	changeListLabel("Subjects List")
	pageSettings(currentPage);
}

function clearData(){
	document.getElementById("entityTextBox").value = "";
	var list = document.getElementById("entityList");
	removeOptions(list);
};

/*
 * Saves data from common array to page specific array like teachers, subjects, etc.
 * This data is then saved in cookie
 */
function saveData() {
	saveEntityData();
	if (currentPage == TEACHER_PAGE) {
		teachers = entityArray.slice(0);
	} else if (currentPage == CLASS_PAGE) {
		classes = entityArray.slice(0);
	}  else if (currentPage == SUBJECT_PAGE) {
		subjects = entityArray.slice(0);
	}
}

/*
 * first saves current page data to arrays
 * then saves all arrays to cookies.
 */
function saveDataAndCookies() {
	saveData();
	saveCookies();
}

/*
 * Saves data from listbox to a common array for all pages like teacher, classes, subjects  
 */
function saveEntityData() {
	 var listBox = document.getElementById("entityList");
	 
	 // clears common array from old values
	 for (var i=entityArray.length-1; i >=0 ; i-- ) {
		 entityArray.pop();
	 }
	 
	 // fill common array with current values
	 for (var i=0; i < listBox.length; i++ ) {
		 entityArray.push(listBox.options[i].text);
	 }
}

function removeOptions(selectbox) {
	var i; 
	for(i = selectbox.options.length - 1 ; i >= 0 ; i--) { 
		selectbox.remove(i); 
	} 
}

function fillData(entities) {
	saveData();	// saves existing page (teacher, subject, class) data, before showing data of new page (teacher, subject, class)
	clearData();
	var listBox = document.getElementById("entityList");
	for (var i = 0; i < entities.length; i++) {
		var option = document.createElement("option");
		option.text = entities[i];
		option.value = entities[i];
		listBox.add(option);
	}
	if (listBox.length > 0){
		listBox.options[0].selected = true;
		document.getElementById("entityTextBox").value = listBox.options[0].text; 
	}
}

function addEntity() {
	var tb = document.getElementById("entityTextBox");
	var listBox = document.getElementById("entityList");
	if (checkIfNotExistInListBox(listBox, tb.value)) {
		var option = document.createElement("option");
		option.text = tb.value;
		listBox.add(option);
	} else {
		alert (tb.value + " already exists!");
	}
}

function checkIfNotExistInListBox(lb, value) {
	for (var i = 0; i < lb.length; i++){
		if (lb.options[i].text == value) {
			return false;
		}
	}
	return true;
}

function deleteEntity (){
	var listBox = document.getElementById("entityList");
	 for (var i=0; i < listBox.length; i++ ) {
		 if (listBox.options[i].selected) {
			 listBox.remove(i);
			 if (i < listBox.length) {
				 listBox.selectedIndex = i;
			 }
			 break;
		 }
	 }
	
}

function updateEntity(){
	 var value = document.getElementById("entityTextBox").value;
	 if (value) {
		 var listBox = document.getElementById("entityList");
		 for (var i=0; i < listBox.length; i++ ) {
			 if (listBox.options[i].selected) {
				 listBox.options[i].value = value; 
				 listBox.options[i].text = value; 
				 break;
			 }
		 }
	 } else {
		 alert("please enter a value in textbox first"); 
	 }
}

function displaySelected(){
	 var listBox = document.getElementById("entityList");
	 for (var i=0; i < listBox.length; i++ ) {
		 if (listBox.options[i].selected) {
			 document.getElementById("entityTextBox").value = listBox.options[i].text; 
			 break;
		 }
	 }
}

function pageSettings(page) {
	document.getElementById(ENTITY_ID).style.visibility = "hidden";
	document.getElementById(TEACHER_SUBJECT_ID).style.visibility = "hidden";
	document.getElementById(CLASS_SUBJECT_ID).style.visibility = "hidden";

	if ( page == TEACHER_SUBJECT_PAGE) {
		document.getElementById(TEACHER_SUBJECT_ID).style.visibility = "visible";
	} else if (page == CLASS_SUBJECT_PAGE){
		document.getElementById(CLASS_SUBJECT_ID).style.visibility = "visible";
	} else if (page == TEACHER_PAGE || page == CLASS_PAGE || page == SUBJECT_PAGE){
		document.getElementById(ENTITY_ID).style.visibility = "visible";
	}  
}
