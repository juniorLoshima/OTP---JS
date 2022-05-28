let user =
{
    nom: ['junior', 'loshima'],
    password: 'hemi@dakar',
    email: 'juniorloshima0@gmail.com'
}
function validation() {
    let expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    document.getElementById('error_mail').innerHTML = "";
    if (expressionReguliere.test(document.getElementById('adress').value)) {
        document.getElementById('error_mail').innerHTML = "L'email est valide";
        document.getElementById('error_mail').style.color = "darkgreen";
    }
    else {
        document.getElementById('error_mail').innerHTML = "L'email n'est pas valide";
        document.getElementById('error_mail').style.color = "red";
    }
    return false;
}
function pass() {
    document.getElementById('error_pwd').innerHTML = "";
    document.getElementById('error_mail').innerHTML = "";
}
let y=0;
function login() {
    let mail = document.getElementById('adress').value;
    let pwd = document.getElementById('motpass').value;
    if (mail === "") {
        document.getElementById('error_mail').innerHTML = "Veillez saisir votre email";
    }
    else if (pwd === "") {
        document.getElementById('error_pwd').innerHTML = "Veillez saisir votre mot de passe";
    }
    else if (mail === user.email && pwd === user.password) {
        document.getElementById('login').innerHTML = ``;
        minutage();
        let x = document.getElementById("txt");
        setTimeout(function () { x.value = Math.random() * 10000; 
            y = Math.trunc(x.value);
            document.getElementById('code').innerHTML=`Code de confirmation: ${y}, valide : 60s`; 
            console.log(y); 
            admin();

        });
        setTimeout(function () { 
            x.value = Math.random() * 10000; 
            y = Math.trunc(x.value);
            console.log(y);
        }, 60000);
    }
    else {
        document.getElementById('login').innerHTML = `login ou mot de passe incorrect`;
    }
}

i = 0;
function minutage() {
  document.getElementById('seconde').innerHTML = i+"s";
  i++;
  if (i > 60) {
    document.getElementById('seconde').innerHTML = "ce code vient d'expirer";
    document.getElementById('code').innerHTML = "";
  }
  else {
    setTimeout(minutage, 1000);
  }
}


function admin() {
    swal({
      text: "Veillez saisir le code confirmation",
      position: 'right',
      content: {
        element: "input",
        attributes: {
          type: "password",
          placeholder: "code de confirmation",
        },
      },
    })

    .then((ok) => {
            if(ok==y)
            {
                window.location.href = "./page/dashboard.html";
            }
            else{
                swal({
                    title: "code de confirmation incorrect!",
                    text: "vous n'êtes pas autorisé",
                    icon: "error",
                  });
            }
          
        
    });
  }
