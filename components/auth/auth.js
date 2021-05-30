// Listen for auth status changes
auth.onAuthStateChanged((user) => {
  if (user) {
    // console.log("user logged in: ", user.email);
    setupUI(user);
    setupGame(user);
    // getUserData()
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        // console.log("doc: ", doc.data());
      });
  } else {
    console.log("user logged out");
    loginModal.style.display = "block";
    gameContent.style.display = "none";
    setupUI(user);
  }
});

// Signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  const passwordConfirm = signupForm["signup-confirm-password"].value;
  const userName = signupForm["signup-userName"].value;

  // check if password equal
  if (password !== passwordConfirm) {
    alert("password not equal!");
    return;
  }

  // Signup the user
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      return db
        .collection("users")
        .doc(cred.user.uid)
        .set(initializeUserData(cred.user.uid, userName));
    })
    .then(() => {
      signupModal.style.display = "none";
      signupForm.reset();
    })
    .catch((error) => {
      console.log(error.message);
    });
});

// Logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();

  auth.signOut();
});

// Login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      loginModal.style.display = "none";
      loginForm.reset();
    })
    .catch((error) => {
      console.log(error.message);
      alert(error.message);
    });
});
