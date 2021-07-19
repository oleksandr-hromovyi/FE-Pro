let gradation = [
    [0,20],
    [20,55],
    [55,85],
    [85,100]
  ];

let marks = {
  20: `satisfactory`,
  55: `good`,
  85: `very good`,
  100: `excellent` 
}

let roles = {
    "admin": "https://www.flaticon.com/svg/static/icons/svg/1424/1424453.svg",
    "student": "https://www.flaticon.com/svg/static/icons/svg/1424/1424424.svg",
    "lector": "https://www.flaticon.com/svg/static/icons/svg/1424/1424450.svg"
  };

let users = [
    {
      "name": "Jack Smith",
      "age": 23,
      "img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922522.svg",
      "role": "student",
      "courses": [
        {
          "title": "Front-end Pro",
          "mark": 20
        },
        {
          "title": "Java Enterprise",
          "mark": 100
        }
      ]
    },
    {
      "name": "Amal Smith",
      "age": 20,
      "img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922656.svg",
      "role": "student"
    },
    {
      "name": "Noah Smith",
      "age": 43,
      "img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922616.svg",
      "role": "student",
      "courses": [
        {
          "title": "Front-end Pro",
          "mark": 50
        }
      ]
    },
    {
      "name": "Charlie Smith",
      "age": 18,
      "img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922688.svg",
      "role": "student",
      "courses": [
        {
          "title": "Front-end Pro",
          "mark": 75
        },
        {
          "title": "Java Enterprise",
          "mark": 23
        }]
    },
    {
      "name": "Emily Smith",
      "age": 30,
      "img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922565.svg",
      "role": "admin",
      "courses": [
        {
          "title": "Front-end Pro",
          "score": 10,
          "lector": "Leo Smith"
        },
        {
          "title": "Java Enterprise",
          "score": 50,
          "lector": "David Smith"
        },
        {
          "title": "QA",
          "score": 75,
          "lector": "Emilie Smith"
        }]
    },
    {
      "name": "Leo Smith",
      "age": 253,
      "img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922719.svg",
      "role": "lector",
      "courses": [
        {
          "title": "Front-end Pro",
          "score": 78,
          "studentsScore": 79
        },
        {
          "title": "Java Enterprise",
          "score": 85,
          "studentsScore": 85
        }
      ]
    }
  ]


class User {
  constructor (name, age, img, role, courses){
    this.name = name;
    this.age = age;
    this.img = img;
    this.role = role;
    this.courses = courses;


  }
  getName(){
    return ` <p>Name: <b>${this.name}</b></p>`
  }
  getAge(){
    return `<p>Age: <b>${this.age}</b></p>`
  }
  getImg(){
    return `<img src="${this.img}" alt="${this.name}" height="50">`
  }
  getRole(){
    return `<div class="user__info--role ${this.role}">
                    <img src="${roles[this.role]}" alt="${this.role}" height="25">
                    <p>${this.role}</p>
                    </div>`
  }
  getRender(){ 
        return `<div class="user__info">
          <div class="user__info--data">
            ${this.getImg()}
            <div class="user__naming">
              ${this.getName()}
              ${this.getAge()}
            </div>
          </div>
          ${this.getRole()}
        </div>
       `;
 }}

class Student extends User {
   constructor (name, age, img, role, courses){
   super(name, age, img, role, courses)}

	getCourses(){

		let newRole = this.role
		let coursesRender = ``
				if(this.courses !== undefined){

				let coursesArr = [...this.courses]

				coursesArr.map(function (item){
					let gradesArr
					for( let key in marks){
						if(item.mark <= key){
							gradesArr = marks[key]
							//console.log(marks[key])
							break; 
						}
					}
				return coursesRender += `<p class="user__courses--course ${newRole}">
									${item.title} <span class="${gradesArr}">${gradesArr}</span>
								</p>`
				
			})
		}
		//console.log(coursesRender)
		return coursesRender
   	}

    getRender() {
     	return `<div class="user">${super.getRender()} <div class="user__courses">${this.getCourses()}</div></div>` 
    }
}

class Admin extends User {
   constructor (name, age, img, role, courses){
   super(name, age, img, role, courses)}


	getCourses(){
		let newRole = this.role
		//console.log(newRole)
		let coursesRender = ``
				if(this.courses !== undefined){

				let coursesArr = [...this.courses]

				coursesArr.map(function (item){
					let gradesArr
					for( let key in marks){
						if(item.score <= key){
							gradesArr = marks[key]
							//console.log(marks[key])
							break; 
						}
					}
				return coursesRender += `<div class="user__courses--course ${newRole}">
				 <p>Title: <b>${item.title}</b></p>
                    <p>Admin's score: <span class="${gradesArr}">${gradesArr}</span></p>
                   <p>Lector: <b>${item.lector}</b></p>
                   </div>`

				
			})
		}
		//console.log(coursesRender)
		return coursesRender
   }

    getRender() {
      return `<div class="user">${super.getRender()}<div class="user__courses ${this.role}--info">${this.getCourses()}</div></div>`
      
   }}

  class Lector extends User {
   constructor (name, age, img, role, courses){
   super(name, age, img, role, courses)}

	getCourses(){

		let newRole = this.role
		let coursesRender = ``
				if(this.courses !== undefined){

				let coursesArr = [...this.courses]

				coursesArr.map(function (item){
					let gradesArr,
		            studentsScoreArr
					for( let key in marks){
						if(item.score <= key){
							gradesArr = marks[key]
							
							//console.log(marks[key])
							break; 
						} }
					for ( let key in marks){
						if (item.studentsScore <=key) {
							studentsScoreArr = marks[key]
							console.log (studentsScoreArr)
							break;
					}
		
					}
				return coursesRender += `<div class="user__courses--course ${newRole}">
				<p>Title: <b>${item.title}</b></p>
                <p>Lector's score: <span class="${gradesArr}">${gradesArr}</span></p>
                <p>Average student's score: <span class="${studentsScoreArr}">${studentsScoreArr}</span></p>
				</div>`
				
			})
		}
		//console.log(coursesRender)
		return coursesRender
   	}

    getRender() {

      return `<div class="user">
      ${super.getRender()}
      <div class="user__courses admin--info">
      ${this.getCourses()}
      </div>
      </div>
      `
      
   }}

let render = users.map(function (item){

 switch(item.role) {
    case `student`: User = new Student (item.name, item.age, item.img, item.role, item.courses)
    return User.getRender();
 
    case `admin`: User = new Admin (item.name, item.age, item.img, item.role, item.courses)
   return User.getRender();
   
    case `lector`: User = new Lector (item.name, item.age, item.img, item.role, item.courses)
     return User.getRender();
  

  }

});


console.log(render.join(""))
document.write(`<div class="users">${render.join("")}</div>`)
