// Selectors
const navBtns = document.querySelector("#nav-btns");
const signupModal = document.querySelector(".signup-modal");
const loginModal = document.querySelector(".login-modal");
const gameContent = document.querySelector(".game-content");

// Listeners
// Navbars
navBtns.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "home":
      console.log("clicked: home");
      break;
    case "profile":
      console.log("clicked: profile");
      break;
    case "logout":
      // auth.signOut();
      console.log("clicked: log out");
      break;
    case "friends":
      // console.log("open friends box");
      openFriends();
      break;
    case "signup":
      loginModal.style.display = "none";
      signupModal.style.display = "block";
      gameContent.style.display = "none";
      break;
    case "login":
      signupModal.style.display = "none";
      loginModal.style.display = "block";
      gameContent.style.display = "none";
      break;
    default:
      return;
  }
});

const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const accountDetails = document.querySelector(".account-details");

const setupUI = (user) => {
  //   console.log("user: " + user);
  if (user) {
    // Account Info
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        const html = `
            <div>User: ${user.email}</div>
            `;
        accountDetails.innerHTML = html;
      });
    // Toggle UI elemnts
    loggedOutLinks.forEach((item) => (item.style.display = "none"));
    loggedInLinks.forEach((item) => (item.style.display = "block"));
    // console.log(loggedInLinks);
  } else {
    console.log("logged out auth");
    // Hide account info
    accountDetails.innerHTML = "";
    // Toggle UI elements
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
  }
};
