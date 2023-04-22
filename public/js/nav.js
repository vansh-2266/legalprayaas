let ul = document.querySelector('.links-container');

auth.onAuthStateChanged((user) => {
    if(user){
        //user is logged in
        ul.innerHTML += `
        <li class="link-item"><a href="/editor" class="link">Editor</a></li>
        <li class="link-item"><a href="/adminDash" class="link">Dashboard</a></li>
        <li class="link-item"><a href="#" onclick="logoutUser()" class="link">LogOut</a></li>

        `;
    } else{
        //no one is logged in
        ul.innerHTML += `
        
        <li class="link-item"><a href="/adminDash" class="link">LogIn</a></li>

        `
    }
})