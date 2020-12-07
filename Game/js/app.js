

function Create_user(user, mail, age, password){
  axios.post('https://mysterious-oasis-39340.herokuapp.com/Users/new',{
    "name": user,
  	"password": password,
  	"age": age,
  	"mail": mail
  }).then(response => {
    console.log(response);
  })

};


function get_localstorage() {
  var users = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    users.push(JSON.parse(localStorage.getItem(keys[i])));
  }
  return users;
}

function checkLogIn(mail, pass) {
  const users = get_localstorage();

  for (let user in users) {
    if (users[user]["mail"] == mail) {
      if (users[user]["pass"] == pass) {
        return true;
      }
    }
  }
  return false;
}

function GetUsername(mail) {
  const users = get_localstorage();

  for (let user in users) {
    if (users[user]["mail"] == mail) {
      return users[user]["user"];
    }
  }
}

function login_post(mail, password){
  axios.post('https://mysterious-oasis-39340.herokuapp.com/auth/login',{
    "mail": mail,
  	"password": password
  }).then(response => {
    if (response['data']['msg'] == "Has iniciado sesion correctamente"){
      alert(response['data']['msg']);
      localStorage.setItem("token", response['data']['user']['token']);
      return true;
    }
    else {
      alert(response['data']['msg'])
      return false;
    }

  })
}

function getToken() {
  var local = [],
    keys = Object.keys(localStorage),
    i = keys.length;
  if (localStorage.getItem("token")){
    return localStorage.getItem("token");
  }
  else {
    return false
  }

}

function Cerrar_sesion(){
  axios.delete('https://mysterious-oasis-39340.herokuapp.com/auth/logout', {
    headers: {
      Authorization:  "Bearer " + getToken()}
}
).then(response => {
    alert(response);
})
};

function Login() {
  var mail = document.getElementById("mail").value;
  var pass = document.getElementById("myPass").value;

  login_post(mail, pass)
  return true
}

function MostrarPass() {
  var x = document.getElementById("myPass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function CreateUser() {
  var user = document.getElementById("user").value;
  var mail = document.getElementById("mail").value;
  var age = document.getElementById("age").value;
  var pass1 = document.getElementById("myPass1").value;
  var pass2 = document.getElementById("myPass2").value;

  if (user == false) {
    alert("Error: Nombre de usuario no ingresado");
    return false;
  }
  if (mail == false) {
    alert("Error: Mail no ingresado");
    return false;
  }
  if (age == false) {
    alert("Error: Edad no ingresada");
    return false;
  }
  if (pass1 == false) {
    alert("Error: Contraseña no ingresada");
    return false;
  }
  if (pass1 != pass2) {
    console.log("Error: Contraseñas no coinciden");
    return false;
  }
  Create_user(user, mail, age, pass1)
  alert("Cuenta creada exitosamente");
  console.log("Cuenta creada exitosamente");
}
