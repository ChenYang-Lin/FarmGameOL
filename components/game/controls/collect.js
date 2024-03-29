function collect(e) {
  let parentDiv = e.target.parentNode;
  indexOfCurrLand = Array.prototype.indexOf.call(parentDiv.children, e.target);

  if (InfoFarmSquares[indexOfCurrLand] != null) {
    if (InfoFarmSquares[indexOfCurrLand].status !== STAT.READY) {
      alertWindow("nothing to harvest");
      return;
    }
  } else {
    alertWindow("nothing to harvest");
    return;
  }

  // update user info
  let expReceieved = 2;
  let goldChanged = 0;

  idOfPlant = InfoFarmSquares[indexOfCurrLand].plantID;
  expReceieved = storeData[idOfPlant].exp;

  collectPlant(InfoFarmSquares[indexOfCurrLand].plantID);
  rewardUser(expReceieved, goldChanged);
  renderUserInfo();
  saveUserData();

  // modify land color for harvested
  // let currSquare = e.target;
  // currSquare.style.background = harvestedLand;

  // update info plant
  let currPlant = farmContainer.childNodes[indexOfCurrLand].childNodes[2];
  let currPlantID = InfoFarmSquares[indexOfCurrLand].plantID;
  // console.log(currPlantID);

  currPlant.style.backgroundImage = getImage(currPlantID, 0);
  // currPlant.style.backgroundImage = getImage(0, 0);
  // currPlant.style.backgroundImage = `url(${plantsURL.potato0URL})`;
  currPlant.parentElement.classList.remove("plant-ready");

  InfoFarmSquares[indexOfCurrLand].status = STAT.HARVESTED;
  save();
}

function collectPlant(id) {
  let ID = id;
  // console.log("id: ", ID);

  let e = InfoBag.find((e) => e.id === ID);
  let index = InfoBag.indexOf(e);
  // console.log(e);
  if (e === undefined) {
    InfoBag.push({ id: ID, amount: 1 });
  } else {
    // console.log("this");
    InfoBag[index].amount++;
  }
  // console.log(index);

  saveInfoBag();
}
