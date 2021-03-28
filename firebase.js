
  var firebaseConfig = {
    apiKey: "AIzaSyCEQ04A2gZLwz_ZuIvh9RDsBLZ9yKhAZGo",
    authDomain: "meganews-2e61a.firebaseapp.com",
    projectId: "meganews-2e61a",
    storageBucket: "meganews-2e61a.appspot.com",
    messagingSenderId: "841321554072",
    appId: "1:841321554072:web:1e3e33ad3541bc862df0ed"
  };

  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  function signUp(){
	var email = document.getElementById("email").value;
	var passwordd = document.getElementById("password").value;

	const promise = auth.createUserWithEmailAndPassword(email, passwordd);
	promise.catch(e => alert(e.message));
    signInByPass();
  }
  
  function signIn(){
	var email = document.getElementById("email").value;
	var passwordd = document.getElementById("password").value;

	const promise = auth.signInWithEmailAndPassword(email, passwordd);
	promise.catch(e => alert(e.message));
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        window.location.replace("index.html");
      } else {
        // No user is signed in.
      }
    });
  }
  
  function signOut(){
      auth.signOut();
      alert('Bye! See you later.');
      window.location.replace("login.html");
  }

  
  function forgot(){
    var auth = firebase.auth();
    var emailAddress = document.getElementById('emailid').value;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
    alert('Reset password link sent to: ' + emailAddress);
    window.location.replace("login.html");
    }).catch(function(error) {
    // An error happened.
    alert('This email id is not registered with Mega News.');
    });
  }
    
    
  function showPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    }
    else {
      x.type = "password";
    }
  }  
  
  function signInByPass(){
	var email = document.getElementById("email").value;
	var passwordd = document.getElementById("password").value;

	const promise = auth.signInWithEmailAndPassword(email, passwordd);
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        window.location.replace("index.html");
      } else {
        // No user is signed in.
      }
    });
  }
  
  function delAcc(){
      
    var user = firebase.auth().currentUser;
    var txt;
    var r = confirm("Are you sure you want to delete the account?");
    if (r == true) {
      user.delete().then(function() {
        // User deleted.
        window.location.replace("register.html");
      })
      .catch(function(error) {
          // An error happened.
      });
    } 
    else {
      // Cancel button was pressed.
    }
  }
  