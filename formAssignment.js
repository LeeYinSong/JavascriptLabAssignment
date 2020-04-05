function formValidation() {
	let int = document.registration.intakeYear;
	let fchoice = document.registration.firstChoice;
	let schoice = document.registration.secondChoice;
	let tchoice = document.registration.thirdChoice;
	let yhos = document.registration.yhostel;
	let nhos = document.registration.nhostel;
	let enname = document.registration.englishName;
	let mgend = document.registration.mgender;
	let fgend = document.registration.fgender;
	let dob = document.registration.dateOfBirth;
	let nation = document.registration.nationality;
	let idno = document.registration.identityNo;
	let race = document.registration.race;
	let reli = document.registration.religion;
	let mno = document.registration.mobileNumber;
	let email = document.registration.eMail;
	let add = document.registration.address;
	let area = document.registration.area;
	let pcode = document.registration.postcode;
	let state = document.registration.state;
	let fenname = document.registration.familyEnglishName;
	let fidno = document.registration.familyIdentityNo;
	let pno = document.registration.phoneNumber;
	let rela = document.registration.relationship;
	let inc = document.registration.income;
	let sschplace = document.registration.secondarySchoolPlace;
	let sschname = document.registration.secondarySchoolName;
	let sschyear = document.registration.secondarySchoolYear;
	let cert = document.registration.certificate;
	let fsubname = document.registration.firstSubjectName;
	let fsubgrade = document.registration.firstSubjectGrade;
	let ssubname = document.registration.secondSubjectName;
	let ssubgrade = document.registration.secondSubjectGrade;
	let tsubname = document.registration.thirdSubjectName;
	let tsubgrade = document.registration.thirdSubjectGrade;
	let fosubname = document.registration.fourthSubjectName;
	let fosubgrade = document.registration.fourthSubjectGrade;
	let fisubname = document.registration.fifthSubjectName;
	let fisubgrade = document.registration.fifthSubjectGrade;

	if(true) {
		let y = 0;
		if(validint(int)) {
		if(validfchoice(fchoice)) {
		if(validschoice(schoice)) {
		if(validtchoice(tchoice)) {
		if(validhos(yhos,nhos)) {
			if(validenname(enname,1,50)) {
			if(validgend(mgend,fgend)) {
			if(validdob(dob)) {
			if(validnation(nation)) {
			if(valididno(idno)) {
			if(validrace(race)) {
			if(validreli(reli)) {
			if(validmno(mno)) {
			if(validemail(email)) {
			if(validadd(add)) {
			if(validarea(area)) {
			if(validpcode(pcode)) {
			if(validstate(state)) {
				if(validfenname(fenname,1,50)) {	
				if(validfidno(fidno)) {	
				if(validpno(pno)) {	
				if(validrela(rela)) {
				if(validinc(inc)) {	
					if(validsschplace(sschplace)) {	
					if(validsschname(sschname)) {
					if(validsschyear(sschyear)) {
						y++;
					}
					}
					}
				}
				}
				}
				}
				}
			}
			}
			}
			}
			}
			}
			}
			}
			}
			}
			}
			}
			}
		}
		}
		}
		}
		}
		if(y === 1){
			if(validsschyear(sschyear)) {
				if(validcert(cert)) {
				if(validfsubname(fsubname)) {
				if(validfsubgrade(fsubgrade,1,2)) {
				if(validssubname(ssubname)) {
				if(validssubgrade(ssubgrade,1,2)) {
				if(validtsubname(tsubname)) {
				if(validtsubgrade(tsubgrade,1,2)) {
				if(validfosubname(fosubname)) {
				if(validfosubgrade(fosubgrade,1,2)) {
				if(validfisubname(fisubname)) {
				if(validfisubgrade(fisubgrade,1,2)) {

				}
				}
				}
				}
				}
				}
				}
				}
				}
				}
				}
			}
		}
	}
	return false;

function validint(int) {
	let x = 0;
	if(int.checked) {
		x++;
	}
	if(x == 0) {
		alert('Select intake year');
		int.focus();
		return false;
	}else {
		return true;
	}
}

function validfchoice(fchoice) {
	if(fchoice.value == "Default") {
		alert('Select your first choice from the list');
		fchoice.focus();
		return false;
	}else {
		return true;
	}
}

function validschoice(schoice) {
	if(schoice.value == "Default") {
		alert('Select your second choice from the list');
		schoice.focus();
		return false;
	}else {
		return true;
	}
}

function validtchoice(tchoice) {
	if(tchoice.value == "Default") {
		alert('Select your third choice from the list');
		tchoice.focus();
		return false;
	}else {
		return true;
	}
}

function validhos(yhos,nhos) {
	let x = 0;
	if(yhos.checked) {
		x++;
	}
	if(nhos.checked) {
		x++;
	}
	if(x == 0) {
		alert('Select Yes/No');
		yhos.focus();
		return false;
	}else {
		return true;
	}
}

function validenname(enname,mn,mx) {
	let enname_len = enname.value.length;
	if(enname_len == 0 || enname >= mx || enname < mn) {
		alert("Your english name should not be empty / length be between " + mn + " to " + mx);
		enname.focus();
		return false;
	}else {
		return true;
	}
}

function validgend(mgend,fgend) {
	let x = 0;
	if(mgend.checked) {
		x++;
	}
	if(fgend.checked) {
		x++;
	}
	if(x == 0) {
		alert('Select Male/Female');
		mgend.focus();
		return false;
	}else {
		return true;
	}
}

function validdob(dob) {
	let letters = /^[0-9]+$/;
	if(dob.value.match(letters)) {
		return true;
	}else {
		alert('Date of birth must have numeric characters only');
		dob.focus();
		return false;
	}
}

function validnation(nation) {
	let letters = /^[A-Za-z]+$/;
	if(nation.value.match(letters)) {
		return true;
	}else {
		alert('Nationality must have alphabet characters only');
		nation.focus();
		return false;
	}
}

function valididno(idno) {
	let letters = /^[0-9a-zA-Z]+$/;
	if(idno.value.match(letters)) {
		return true;
	}else {
		alert('Identity number/Passport number must have alphanumeric characters only');
		idno.focus();
		return false;
	}
}

function validrace(race) {
	if(race.value == "Default") {
		alert('Select your race from the list');
		race.focus();
		return false;
	}else {
		return true;
	}
}

function validreli(reli) {
	if(reli.value == "Default") {
		alert('Select your religion from the list');
		reli.focus();
		return false;
	}else {
		return true;
	}
}

function validmno(mno) {
	let letters = /^[0-9]+$/;
	if(mno.value.match(letters)) {
		return true;
	}else {
		alert('Mobile number must have numeric characters only');
		mno.focus();
		return false;
	}
}

function validemail(email) {
	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(mailformat)) {
		return true;
	}else {
		alert('Your have entered an invalid email address');
		email.focus();
		return false;
	}
}

function validadd(add) {
	let letters = /^[0-9a-zA-Z]+$/;
	if(add.value.match(letters)) {
		return true;
	}else {
		alert('Address must have alphanumeric characters only');
		add.focus();
		return false;
	}
}

function validarea(area) {
	let letters = /^[A-Za-z]+$/;
	if(area.value.match(letters)) {
		return true;
	}else {
		alert('Area must have alphabet characters only');
		area.focus();
		return false;
	}
}

function validpcode(pcode) {
	let letters = /^[0-9]+$/;
	if(pcode.value.match(letters)) {
		return true;
	}else {
		alert('Postcode must have numeric characters only');
		pcode.focus();
		return false;
	}
}

function validstate(state) {
	if(state.value == "Default") {
		alert('Select your state from the list');
		state.focus();
		return false;
	}else {
		return true;
	}
}

function validfenname(fenname,mn,mx) {
	let fenname_len = fenname.value.length;
	if(fenname_len == 0 || fenname >= mx || fenname < mn) {
		alert("Your family english name should not be empty / length be between " + mn + " to " + mx);
		fenname.focus();
		return false;
	}else {
		return true;
	}
}

function validfidno(fidno) {
	let letters = /^[0-9a-zA-Z]+$/;
	if(fidno.value.match(letters)) {
		return true;
	}else {
		alert('Family identity number/passport number must have alphanumeric characters only');
		fidno.focus();
		return false;
	}
}

function validpno(pno) {
	let letters = /^[0-9]+$/;
	if(pno.value.match(letters)) {
		return true;
	}else {
		alert('Phone number must have numeric characters only');
		pno.focus();
		return false;
	}
}

function validrela(rela) {
	if(rela.value == "Default") {
		alert('Select your relationship from the list');
		rela.focus();
		return false;
	}else {
		return true;
	}
}

function validinc(inc) {
	if(inc.value == "Default") {
		alert('Select your family annual income from the list');
		inc.focus();
		return false;
	}else {
		return true;
	}
}

function validsschplace(sschplace) {
	let letters = /^[A-Za-z]+$/;
	if(sschplace.value.match(letters)) {
		return true;
	}else {
		alert('Secondary school place must have alphabet characters only');
		sschplace.focus();
		return false;
	}
}

function validsschname(sschname) {
	let letters = /^[0-9a-zA-Z]+$/;
	if(sschname.value.match(letters)) {
		return true;
	}else {
		alert('Secondary school name must have alphanumeric characters only');
		sschname.focus();
		return false;
	}
}

function validsschyear(sschyear) {
	let letters = /^[0-9]+$/;
	if(sschyear.value.match(letters)) {
		return true;
	}else {
		alert('Secondary school graduate year must have numeric characters only');
		sschyear.focus();
		return false;
	}
}

function validcert(cert) {
	let letters = /^[0-9a-zA-Z]+$/;
	if(cert.value.match(letters)) {
		return true;
	}else {
		alert('Certificate must have alphanumeric characters only');
		cert.focus();
		return false;
	}
}

function validfsubname(fsubname) {
	let letters = /^[0-9a-zA-Z]+$/;
	if(fsubname.value.match(letters)) {
		return true;
	}else {
		alert('First subject name must have alphanumeric characters only');
		fsubname.focus();
		return false;
	}
}

function validfsubgrade(fsubgrade,mn,mx) {
	let fsubgrade_len = fsubgrade.value.length;
	if(fsubgrade_len == 0 || fsubgrade >= mx || fsubgrade < mn) {
		alert("Your first suubject grade should not be empty / length be between " + mn + " to " + mx);
		fsubgrade.focus();
		return false;
	}else {
		return true;
	}
}

function validssubname(ssubname) {
	let letters = /^[0-9a-zA-Z]+$/;
	if(ssubname.value.match(letters)) {
		return true;
	}else {
		alert('Second subject name must have alphanumeric characters only');
		ssubname.focus();
		return false;
	}
}

function validssubgrade(ssubgrade,mn,mx) {
	let ssubgrade_len = ssubgrade.value.length;
	if(ssubgrade_len == 0 || ssubgrade >= mx || ssubgrade < mn) {
		alert("Your second subject grade should not be empty / length be between " + mn + " to " + mx);
		ssubgrade.focus();
		return false;
	}else {
		return true;
	}
}

function validtsubname(tsubname) {
	let letters = /^[0-9a-zA-Z]+$/;
	if(tsubname.value.match(letters)) {
		return true;
	}else {
		alert('Third subject name must have alphanumeric characters only');
		tsubname.focus();
		return false;
	}
}

function validtsubgrade(tsubgrade,mn,mx) {
	let tsubgrade_len = tsubgrade.value.length;
	if(tsubgrade_len == 0 || tsubgrade >= mx || tsubgrade < mn) {
		alert("Your third subject grade should not be empty / length be between " + mn + " to " + mx);
		tsubgrade.focus();
		return false;
	}else {
		return true;
	}
}

function validfosubname(fosubname) {
	let letters = /^[0-9a-zA-Z]+$/;
	if(fosubname.value.match(letters)) {
		return true;
	}else {
		alert('Fourth subject name must have alphanumeric characters only');
		fosubname.focus();
		return false;
	}
}

function validfosubgrade(fosubgrade,mn,mx) {
	let fosubgrade_len = fosubgrade.value.length;
	if(fosubgrade_len == 0 || fosubgrade >= mx || fosubgrade < mn) {
		alert("Your fourth subject grade should not be empty / length be between " + mn + " to " + mx);
		fosubgrade.focus();
		return false;
	}else {
		return true;
	}
}

function validfisubname(fisubname) {
	let letters = /^[0-9a-zA-Z]+$/;
	if(fisubname.value.match(letters)) {
		return true;
	}else {
		alert('Fifth subject name must have alphanumeric characters only');
		fisubname.focus();
		return false;
	}
}

function validfisubgrade(fisubgrade,mn,mx) {
	let fisubgrade_len = fisubgrade.value.length;
	if(fisubgrade_len == 0 || fisubgrade >= mx || fisubgrade < mn) {
		alert("Your fifth subject grade should not be empty / length be between " + mn + " to " + mx);
		fisubgrade.focus();
		return false;
	}else {
		alert('Form successfully submitted');
		window.location.reload();
		return true;
	}
}
}