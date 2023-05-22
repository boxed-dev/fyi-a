var firebaseConfig = {
    apiKey: "AIzaSyB6nauQMQ4FM5xEops5K171TJOc3J9n9D4",
    authDomain: "auth-bc035.firebaseapp.com",
    projectId: "auth-bc035",
    storageBucket: "auth-bc035.appspot.com",
    messagingSenderId: "36977431007",
    appId: "1:36977431007:web:dcfb9e684068cfe467f46a",
    measurementId: "G-88Y13FSFVC"
};

firebase.initializeApp(firebaseConfig);
var usernameField = document.getElementById('username');
var passwordField = document.getElementById('password');

document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = usernameField.value;
    var password = passwordField.value;
    var email = username + "@solve.com";
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function() {
            var nusername = encrypt(username)
            window.location.href = 'home.html?username=' + encodeURIComponent(nusername);
        })
        .catch(function(error) {
            errorMessage.textContent = error.message;
        });
        function encrypt(text) {
            var encryptedText = '';
            for (var i = 0; i < text.length; i++) {
              var hexCode = text.charCodeAt(i).toString(16);
              encryptedText += hexCode;
            }
            
            var randomValue = generateRandomValue();
            encryptedText += randomValue;
            
            return encryptedText;
          }
          
          
          
          function generateRandomValue() {
            var randomValue = '';
            for (var i = 0; i < 20; i++) {
              randomValue += Math.floor(Math.random() * 10);
            }
            return randomValue;
          }
          

});