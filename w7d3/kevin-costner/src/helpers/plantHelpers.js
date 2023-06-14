export const waterPlantById = (plantId, plantsObj) => {
  const today = new Date();
  const todayString = today.toDateString();
  return { ...plantsObj, [plantId]: { ...plantsObj[plantId], lastWatered: todayString } };

  // const newPlant = { ...plantsObj[plantId], lastWatered: todayString };

  // const updatedPlantList = { ...plantsObj, [plantId]: newPlant };
};

export const waterEVERYTHING = (plantsObj) => {
  const today = new Date();
  const todayString = today.toDateString();
  const updatedPlantList = { ...plantsObj };

  for (const key in updatedPlantList) {
    const newPlant = { ...plantsObj[key], lastWatered: todayString };
    updatedPlantList[key] = newPlant;
  }

  return updatedPlantList;
};

export const checkIfWellWatered = (wateringInterval, lastWatered) => {
  const todayDate = new Date();
  const lastWateredDate = new Date(lastWatered);

  const diffInS = (todayDate.getTime() - lastWateredDate.getTime()) / 1000;
  const diffInDays = diffInS / 86400;

  return diffInDays < wateringInterval;
};
