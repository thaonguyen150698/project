 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBpEAMD-f-k_P_3bX7Q80w1FRrXkDDrInc",
    authDomain: "login-29b54.firebaseapp.com",
    databaseURL: "https://login-29b54.firebaseio.com",
    projectId: "login-29b54",
    storageBucket: "login-29b54.appspot.com",
    messagingSenderId: "346130738120",
    appId: "1:346130738120:web:96d41090ea9ab2d7d0aefd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);
  var database = firebase.database();
  var ref = database.ref('Mens');
  var data = ["T-Shirts", "Casual Shirts", "Jeans", "Accessories","Casual Shoes","Sports Shoes", "Innerwear"];
  ref.push(data);
  const auth = firebase.auth();

function signUpForm(){
	var email=document.getElementById("email");
	var passWord = document.getElementById("password");
	const promise = auth.createUserWithEmailAndPassword(email.value,passWord.value);
	promise.catch(e=>alert(e.message));
	alert("Signed Up");
}
function signInForm(){
	var email = document.getElementById("email");
	var password = document.getElementById("password");
		
	const promise = auth.signInWithEmailAndPassword(email.value,password.value);		promise.catch(e => alert(e.message));

}
function signOutForm(){
	auth.signOut();
	alert("Signed out");
}
auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});
	