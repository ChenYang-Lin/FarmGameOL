document.querySelector(".clear").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

function save() {
  // localStorage.setItem(LOCAL_STORAGE_FARM_STAT, JSON.stringify(InfoFarmSquares));
  db.collection("users").doc(user.uid).update({
    InfoFarmSquares: InfoFarmSquares,
  });
}

function saveUserData() {
  // localStorage.setItem(LOCAL_STORAGE_FARM_USER_DATA, JSON.stringify(InfoUserData));
  db.collection("users").doc(user.uid).update({
    InfoUserData: InfoUserData,
  });
}

function saveSeedInventory() {
  // localStorage.setItem(LOCAL_STORAGE_FARM_SEED_INVENTORY, JSON.stringify(InfoSeedInventory));
  db.collection("users").doc(user.uid).update({
    InfoSeedInventory: InfoSeedInventory,
  });
}

function saveInfoStore() {
  localStorage.setItem(LOCAL_STORAGE_FARM_STORE, JSON.stringify(InfoStore));
  // db.collection("users").doc(user.uid).update({
  //   InfoStore: InfoStore,
  // });
}

function saveInfoBag() {
  // localStorage.setItem(LOCAL_STORAGE_FARM_BAG, JSON.stringify(InfoBag));
  db.collection("users").doc(user.uid).update({
    InfoBag: InfoBag,
  });
}

function saveInfoFriendList() {
  db.collection("users").doc(user.uid).update({
    InfoFriendList: InfoFriendList,
  });
}
