const firebaseConfig = {
  apiKey: "AIzaSyAprsAU0ehPmQ2iaf50nRoESoXK439PNgQ",
  authDomain: "web-app-c03a1.firebaseapp.com",
  databaseURL: "https://web-app-c03a1-default-rtdb.firebaseio.com",
  projectId: "web-app-c03a1",
  storageBucket: "web-app-c03a1.appspot.com",
  messagingSenderId: "321225390228",
  appId: "1:321225390228:web:231f76d8733b07ad2a9c81"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

function register() {
  var username = document.getElementById('user_name').value
  var  email= document.getElementById('email').value
  var password = document.getElementById('password').value
  database.ref('users/' + username).set({
    email : email,
    username : username,
    end_time:0,
    score:0,
    accuracy:0,
    password:password
  })

  alert('Saved')
  
}

function get() {
  var username = document.getElementById('username').value

  var user_ref = database.ref('users/' + username)
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val()

    alert(data.email)

  })

}

function update() {

  var updates = {
    score:50,
    accuracy:85,
    end_time:5
  }

  database.ref('users/' + username).update(updates)

  alert('updated')
}

function remove() {
  var username = document.getElementById('username').value

  database.ref('users/' + username).remove()

  alert('deleted')
}
function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Retrieve the user data from the database
  database.ref('users/' + username).once('value').then(function(snapshot) {
    var userData = snapshot.val();

    // Check if the user exists
    if (userData) {
      // Check if the password is correct
      if (password === userData.password) {
        // Password is correct, redirect to the main page or do whatever you need to do
        alert('Login successful!');
        window.location.href = 'main.html';
      } else {
        alert('Incorrect password. Please try again.');
      }
    } else {
      alert('User does not exist. Please register first.');
    }
  });
}
