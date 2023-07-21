let tableBody = document.querySelector("tbody");
let addUser = document.querySelector(".add-user"),
    popup = document.querySelector(".popup"),
    addForm = document.querySelector(".add form"),
    updateForm = document.querySelector(".update form");


var database = firebase.database();
var usersRef = firebase.database().ref('users/');

// write data 
function writeUserData(name, phone, email) {
    let userId = usersRef.push().key;
    usersRef.child(userId).set({
      name: name,
      phone: phone,
      email: email,   
    }).then((onFullFilled) => {
        console.log("writed");
    },(onRejected) => {
        console.log(onRejected);
    });
}

// writeUserData(0, "hjk", "6578909876", "email@email.com")
// writeUserData(1, "dhj", "34348909876", "xyz@email.com")
// writeUserData(2, "vansh", "78909876", "email@email.com")
// writeUserData("tipi", "88789098", "tpiemail@email.com")

// read data 

usersRef.on('value', (snapshot) => {
  const users = snapshot.val();
  console.log(users);

  for(user in users)
  {
    // console.log(users[user]);

    let tr = `
    <tr data-id = ${user}>
        <td>${users[user].name}</td>
        <td>${users[user].phone}</td>
        <td>${users[user].email}</td>
        <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>
    </tr>
    `

    tableBody.innerHTML += tr;

  }

  //edit

  let editButtons = document.querySelectorAll(".edit");
  editButtons.forEach(edit => {
    edit.addEventListener("click", () => {
        document.querySelector(".update").classList.add("active");
        let userId = edit.parentElement.parentElement.dataset.id;
        usersRef.child(userId).get().then((snapshot => {
            // console.log(snapshot.val());
             updateForm.name.value = snapshot.val().name;
             updateForm.phone.value = snapshot.val().phone;
             updateForm.email.value = snapshot.val().email; 
        }));

        updateForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            usersRef.child(userId).update({
                name:  updateForm.name.value,
                phone:  updateForm.phone.value,
                email:  updateForm.email.value,   
              }).then((onFullFilled) => {
                  alert("Changes Updated");
                  document.querySelector(".update").classList.remove("active");
                  updateForm.reset()
              },(onRejected) => {
                  console.log(onRejected);
              });
          })

    })
  })

  //Delete
  let deleteButton = document.querySelectorAll(".delete");
  deleteButton.forEach(deleteBtn => {
    deleteBtn.addEventListener("click", () => {
        let userId = deleteBtn.parentElement.parentElement.dataset.id;
        usersRef.child(userId).remove().then(() => {
            alert("Job post Deleted");
        })
    })
  })

});


//Write dynamic Data

addUser.addEventListener("click", () => {
    document.querySelector(".add").classList.add('active');

    addForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        writeUserData(addForm.name.value, addForm.phone.value, addForm.email.value);
    })
})

//close popup
window.addEventListener("click", (e) => {
    if(e.target == popup){
        popup.classList.remove("active");
        addForm.reset();
        updateForm.reset();

    }
})