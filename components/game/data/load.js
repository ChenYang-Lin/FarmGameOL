function load() {
  if (InfoStore.length === 0) {
    InfoStore = storeData;
    saveInfoStore();
  }
  // _________lead user data from local storage
  if (InfoUserData === null) {
    // intro gameplay - if possible
    // init data
    InfoUserData = {
      currLevel: 1,
      currExp: 0,
      expNeededForNextLvl: 10,
      gold: 10000,
    };
    saveUserData();
    console.log(InfoSeedInventory);

    // inti inventory
    InfoSeedInventory = [
      {
        seedID: 0,
        seedAmount: 200,
      },
      {
        seedID: 1,
        seedAmount: 100,
      },
      {
        seedID: 2,
        seedAmount: 50,
      },
    ];
    saveSeedInventory();

    // Bag
    InfoBag = [
      {
        vegeID: 0,
        vegeAmount: 2,
        name: "Potato",
      },
    ];
    saveInfoBag();
  }
  // update display
  renderUserInfo();
  renderSeedDisplay();

  farmContainer.innerHTML = "";
  // init or load land squares
  for (let i = 0; i < numFarmSquare; i++) {
    const farmSquare = document.createElement("div");
    farmSquare.classList.add("square-box");

    const plantDiv = document.createElement("div");
    plantDiv.classList.add("plant");

    const timeTopDiv = document.createElement("div");
    // timeTopDiv.classList.add("time-top");
    const timeBotDiv = document.createElement("div");
    // timeBotDiv.classList.add("time-bot");

    const timeDiv = document.createElement("div");

    farmSquare.appendChild(timeTopDiv);
    farmSquare.appendChild(timeBotDiv);
    farmSquare.appendChild(plantDiv);
    farmSquare.appendChild(timeDiv);

    // farmSquare.childNodes[0].classList.remove('time-top')
    farmContainer.appendChild(farmSquare);

    //_________Load data from local storage
    if (InfoFarmSquares[i] == null) continue;

    let currSquareStatus = InfoFarmSquares[i].status;
    let currPlant = farmContainer.childNodes[i].childNodes[2];
    let currPlantID = InfoFarmSquares[i].plantID;

    switch (currSquareStatus) {
      case STAT.EMPTY:
        break;
      case STAT.GROWING:
        updateGrowingData(i);
        break;
      case STAT.READY:
        // console.log(currPlant);
        // currPlant.style.backgroundImage = `url(${plantsURL.potatoURL})`;
        currPlant.style.backgroundImage = getImage(currPlantID, 4);
        currPlant.parentNode.classList.add("plant-ready");
        break;
      case STAT.HARVESTED:
        currPlant.style.backgroundImage = getImage(currPlantID, 0);
        break;
      default:
        console.log("initData error");
    }
    //______-End local storage

    if (!InfoFarmSquares[i]) {
      InfoFarmSquares[i] = {};
      save();
    }
  }
  // End inti land squares
}
