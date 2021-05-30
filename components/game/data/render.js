function renderUserInfo() {
  // console.log(InfoUserData);
  let level = InfoUserData.currLevel;
  let currExp = InfoUserData.currExp;
  let need = InfoUserData.expNeededForNextLvl;
  let gold = InfoUserData.gold;
  const expGreenWidth = expBlack.clientWidth;
  let lvlPercent = (currExp / need) * expGreenWidth;
  // console.log(expBlack.clientWidth);
  currLevel.innerHTML = `Level: ${level}`;
  expText.innerHTML = `${currExp}/${need}`;
  goldText.innerHTML = `${gold}`;
  expGreen.style.width = `${lvlPercent}px`;
}

function renderSeedDisplay() {
  console.log();
  plantIdOfSelectedIvenItem = InfoSeedInventory[selectedSeedID].id;
  seedName = plantsName[plantIdOfSelectedIvenItem].name;
  let element = InfoSeedInventory.find((s) => s.id === plantIdOfSelectedIvenItem);
  // console.log(InfoSeedInventory);
  seedAmt = element.amount;
  currSeedInfo.innerHTML = `${seedName} Seeds: ${seedAmt}`;
}
