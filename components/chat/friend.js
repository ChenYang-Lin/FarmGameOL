const friendContainer = document.querySelector(".friends-container");
const addFriendBtn = document.querySelector(".add-friend-btn");
const closeFriendBtn = document.querySelector(".close-friend-btn");

const usersContainer = document.querySelector(".users-container");
const backAddFriendBtn = document.querySelector(".back-add-friend-btn");

const usersList = document.querySelector(".users-list");
const friendList = document.querySelector(".friend-list");

let clickedUserID;

// Close User Friend modal
closeFriendBtn.addEventListener("click", () => {
  cover4.style.display = "none";
  friendContainer.style.display = "none";
});

// Back to User Friend Modal
backAddFriendBtn.addEventListener("click", () => {
  usersContainer.style.display = "none";
  displayAllFriends();
});

// open ALL users modal
addFriendBtn.addEventListener("click", () => {
  usersContainer.style.display = "block";
});

// ADD a new user from "all user collection"
usersList.addEventListener("click", (e) => {
  if (!e.target.classList.contains("add-user-btn")) {
    return;
  }

  clickedUserID = e.target.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML;
  if (InfoUserData.userID === clickedUserID) {
    alert("cannot add yourself to friends list");
    return;
  }
  if (InfoFriendList.includes(clickedUserID)) {
    alert("Already in the friends list");
    return;
  } else {
    alert("added");
    InfoFriendList.push(clickedUserID);
    //   console.log(clickedUserID);
    saveInfoFriendList();
  }
});

function openFriends() {
  cover4.style.display = "block";
  friendContainer.style.display = "block";
  // Database
  displayAllFriends();
}

function displayAllFriends() {
  friendList.innerHTML = "";
  db.collection("allUsers")
    .get()
    .then((snapshot) => {
      let data = snapshot.docs;
      let html = "";
      data.forEach((doc) => {
        if (!InfoFriendList.includes(doc.data().userID)) {
          return;
        }
        // console.log(doc.data().userName);
        const element = `
        <div class="friend-element friend-element-box">
          <div class="friend-name-container friend-name-container-box">
            <div class="friend-name friend-name-box">${doc.data().userName}</div>
            <div class="friend-id friend-id-box">${doc.data().userID}</div>
          </div>
          <div class="action-btns action-btns-box">
            <button class="goto-farm-btn">Visit</button>
            <button class="delete-friend-btn">delete</button>
          </div>
        </div>
        `;
        html += element;
      });
      friendList.innerHTML = html;
    });
}

function displayAllUsers(data) {
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
}

// delete or visit a friend from friend list
friendList.addEventListener("click", (e) => {
  if (e.target.classList.contains("goto-farm-btn")) {
    visitFriend(e);
  } else if (e.target.classList.contains("delete-friend-btn")) {
    deleteFriend(e);
  }
});

function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

function deleteFriend(e) {
  deleteID = e.target.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML;
  removeItemAll(InfoFriendList, deleteID);
  saveInfoFriendList();
  displayAllFriends();
}

function visitFriend(e) {
  visitID = e.target.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML;
}
