const friendContainer = document.querySelector(".friends-container");
const addFriendBtn = document.querySelector(".add-friend-btn");
const closeFriendBtn = document.querySelector(".close-friend-btn");

const usersContainer = document.querySelector(".users-container");
const backAddFriendBtn = document.querySelector(".back-add-friend-btn");

const usersList = document.querySelector(".users-list");

closeFriendBtn.addEventListener("click", () => {
  cover4.style.display = "none";
  friendContainer.style.display = "none";
});

addFriendBtn.addEventListener("click", () => {
  usersContainer.style.display = "block";
  displayAllUsers();
});

backAddFriendBtn.addEventListener("click", () => {
  usersContainer.style.display = "none";
});

function openFriends() {
  cover4.style.display = "block";
  friendContainer.style.display = "block";
  displayFriends();
}

function displayFriends() {
  console.log(user);
  //   db.collection("users").doc(user.uid).get().then((doc) => {
  //       doc.data().
  //   })
}

function displayAllUsers() {
  //
}

const setupAllUsers = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const user = doc.data();
      const element = `
            <div class="users-element friend-element-box">
                <div class="users-name-container friend-name-container-box">
                    <div class="users-name friend-name-box">${user.userName}</div>
                    <div class="friend-id friend-id-box">${user.userID}</div>
                </div>
                <div class="action-btns action-btns-box">
                    <button class="add-user-btn">Add</button>
                </div>
            </div> 
            `;
      html += element;
    });
    usersList.innerHTML = html;
  } else {
    usersList.innerHTML = ``;
  }
};
