/**
 * Teacher Subjects 
 */

function fillTeacherSubject(){ 
	fillData(teachers); 
	currentPage = TEACHER_SUBJECT_PAGE;
	pageSettings(currentPage);
	fillTsTeacherList();
	fillTeacherSubjectList();
	fillTeacherClassList();
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

function fillTsTeacherList() {
	var listBox = document.getElementById(TS_TEACHER_LIST);
	fillSelectListFromArray(listBox, teachers);
}

function fillTeacherSubjectList() {
	var listBox = document.getElementById(TS_ALL_SUBJECTS);
	fillSelectListFromArray(listBox, subjects);
}

function fillTeacherClassList() {
	var listBox = document.getElementById(TS_ALL_CLASSES);
	fillSelectListFromArray(listBox, classes);
}
