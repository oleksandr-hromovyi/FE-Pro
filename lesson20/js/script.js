
class User {
  constructor (array, roles){
    this.array = array;
    this.roles = roles;


  }


  getCourse (){


      }

  getInfo(){
  	 	

    let renders = this.array
          .map((item) => {
            return `<div class="user">
            <div class="user__info">
                <div class="user__info--data">
                    <img src="${item.img}" alt="${item.name}" height="50">
                    <div class="user__naming">
                        <p>Name: <b>${item.name}</b></p>
                        <p>Age: <b>${item.age}</b></p>
                    </div>
                </div>
                    <div class="user__info--role ${item.role}">
                    <img src="${roles[item.role]}" alt="${item.role}" height="25">
                    <p>${item.role}</p>
                </div>
            </div>

                </div>
                </div>
            `
          })
          .join(` `);
      document.write(renders);

  }
}

class Admin extends User{
  constructor(array, roles){
    super(array, roles);
    
}
  render (){
   
  }
}

class Lector extends User{
  constructor(array, roles){
    super(array, roles);
}
  render (){

}
}

class Student extends User{
  constructor(array, roles){
    super(array, roles);
}


      }


let gradation = [
    [0,20],
    [20,55],
    [55,85],
    [85,100]
  ];

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




let Admins = new User (users, roles);
Admins.getInfo();



Admins.getCourse()
