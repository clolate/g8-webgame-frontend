crear_localstorage_demo();

function crear_localstorage_demo() {
  let user1 = {
    user: "Matias",
    age: 26,
    mail: "masoto2@uc.cl",
    pass: "12345678",
  };
  let user2 = {
    user: "Joaco",
    age: 26,
    mail: "jysoto@uc.cl",
    pass: "12345678",
  };
  //nuevousuario()
  localStorage.setItem("Matias", JSON.stringify(user1));
  localStorage.setItem("Joaco", JSON.stringify(user2));
}

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

function Login() {
  var mail = document.getElementById("mail").value;
  var pass = document.getElementById("myPass").value;

  if (checkLogIn(mail, pass)) {
    alert("Session inciada exitosamente");
    return true;
  } else {
    alert("Contraseña o usario incorrecto");
    return false;
  }
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
    alert("Error: Contraseñas no coinciden");
    return false;
  }
  let nUser = {
    user: user,
    age: age,
    mail: mail,
    pass: pass1,
  };
  localStorage.setItem(user, JSON.stringify(nUser));
  alert("Cuenta creada exitosamente");
}
