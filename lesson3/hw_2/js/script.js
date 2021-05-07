alert ('Create your account');
do{
	userName = prompt('Your Name (must be at least six characters, e.g. Anna Ivanova)');
} while (userName.length<6);

do {
	nickName = prompt('Nick Name (must be at least six characters, without whitespaces and must begin with a letter, e.g. annaivanova)');
} while (nickName.length<6 || nickName.indexOf(' ')!==-1 || !isNaN(nickName[0])); 


do {
	userEmail= prompt('Email Address (must be at least six characters, without whitespaces, begin with a letter and contains @, e.g. annaivanova@gmail.com)');
} while (userEmail.length<6 || userEmail.indexOf(' ')!==-1 || userEmail.indexOf('@') ==-1 || !isNaN(userEmail[0])); 


do {
	userYearOfBirth= prompt('Year of Birth (must be a number, e.g. 1990)');
} while (isNaN(userYearOfBirth) || userYearOfBirth<1900 || (userYearOfBirth>=new Date().getFullYear())); 	

userYearOfBirth = new Date().getFullYear() - userYearOfBirth;

document.write(`<ul>
	<li><b>Your Name:</b> ${userName}</li>
	<li><b>Nick Name:</b> ${nickName}</li>
	<li><b>Email Address:</b> <a href="mailto:${userEmail}">${userEmail}</a></li>
	<li><b>Age:</b> ${userYearOfBirth}</li>
</ul>`)