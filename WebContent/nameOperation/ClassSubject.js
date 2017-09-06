/**
 * Teacher Subjects 
 */

function fillClassSubject(){ 
	fillData(teachers); 
	currentPage = CLASS_SUBJECT_PAGE;
	pageSettings(currentPage);
	fillCsClassList();
	fillClassSubjectList();
}

function fillSelectListFromArray(listBox, array) {
	removeOptions(listBox);
	for (var i = 0; i < array.length; i++) {
		var option = document.createElement("option");
		option.text = array[i];
		option.value = array[i];
		listBox.add(option);
	}
}

function fillCsClassList() {
	var listBox = document.getElementById(CS_CLASS_LIST);
	fillSelectListFromArray(listBox, classes);
}

function fillClassSubjectList() {
	var classIndex = classFound();  // pass it class name obtained from listbox 
	var listBox = document.getElementById(CS_ALL_SUBJECTS);
	fillSelectListFromArray(listBox, subjects);
}

function assignClassSubjectList() {
	var className = document.getElementById("csClassList").value;
	classFound(className);
	classSubjects.push()
	var listBox = document.getElementById(CS_ALL_SUBJECTS);
	fillSelectListFromArray(listBox, subjects);
}

function  classFound( className) {
	for ( i = 0; i < classSubjects.length; i++) {
		if (Array.isArray(classSubjects[i])) {
			if (classSubjects[i][0] == "className") {
				return i;
			}
		}	
	}
	return -1;
}