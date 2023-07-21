// navbar javaScript function
let menu = document.querySelector('nav'); 
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', function(){
    menu.classList.add('active');
})

closeBtn.addEventListener('click', function(){
    menu.classList.remove('active');
})



let jobCount = document.getElementById("jobCount");

var database = firebase.database();
var usersRef = firebase.database().ref('users/');

usersRef.on('value', (snapshot) => {
    const users = snapshot.val();
    // console.log(users);

    for(user in users)
    {
      // console.log(users[user].name);
      // console.log(users[user].phone);
      // console.log(users[user].email);
  
      let add = `
      <div>
        <h2>Position: ${users[user].name}</h2>
        <h3>Last Date: ${users[user].phone}</h3>
        <p>Description: ${users[user].email}</p>
      </div>
      `
        jobCount.innerHTML += add;
  
    }
});
   