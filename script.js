// тапшырма 1

const createStudent = {
    firstName: "baktiyar",
    lastName: "Asanbekov",
    age: "24",
    education: {
      university: "city Himki",
      faculty: "JS",
      gpa: "50",
    },
    sayHello: () => {
      console.log("Asanbekov Baktiyar");
    },
  };
  console.log(createStudent);
  
  //тапшырма 2
  
  function deleteKey(object, key) {
    if (key in object) {
      delete object[key];
      return object;
    }
  }
  
  const obj = { name: "baktiyar", age: 24, city: "himki" };
  
  console.log(deleteKey(obj, "age"));
  console.log(deleteKey(obj, "country"));
  
  //тапшырма 3
  
  const user = {
    name: "Baha",
    email: "baha@gmail.com",
    age: "24",
    password: "222222",
  };
  
  let sum = 5;
  
  let userEmail = prompt("айтыныз email:");
  
  if (userEmail !== user.email) {
    alert("кечиресиз, мындай email жок");
  } else {
    let userPassword = prompt("айтыныз парольду:");
  
    if (userPassword !== user.password) {
      alert("туура эмес пароль");
    } else {
      let userAnswer = prompt("5 + 7 = ?");
  
      if (parseInt(userAnswer) === sum) {
        user.sum = 12;
      }
    }
  }
    
  