const plant1 = {
  id: "1",
  name: "Monstera",
  lastWatered: "2023-05-20",
  wateringInterval: 7,
};
const plant2 = {
  id: "2",
  name: "Tulips",
  lastWatered: "2023-02-10",
  wateringInterval: 4,
};
const plant3 = {
  id: "3",
  name: "Cherry",
  lastWatered: "2023-03-20",
  wateringInterval: 60,
};
const plant4 = {
  id: "4",
  name: "Money Tree",
  lastWatered: "2021-01-20",
  wateringInterval: 1000,
};

const plantsArr = [plant1, plant2, plant3, plant4];
const plantsObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };

// Immutability => mutation

const waterPlantById = (plantId) => {
  const updatedPlantList = [...plantsArr]; // Shallow copying (1 layer)

  const plantIndex = updatedPlantList.findIndex((plant) => plant.id === plantId);
  const plant = updatedPlantList[plantIndex];
  const today = new Date();

  const newPlant = { ...plant };
  newPlant.lastWatered = today.toDateString();

  updatedPlantList[plantIndex] = newPlant;

  return updatedPlantList;
};

const waterPlantByIdObj = (plantId, plantsObj) => {
  const today = new Date();
  const todayString = today.toDateString();
  return { ...plantsObj, [plantId]: { ...plantsObj[plantId], lastWatered: todayString } };

  // const newPlant = { ...plantsObj[plantId], lastWatered: todayString };

  // const updatedPlantList = { ...plantsObj, [plantId]: newPlant };
};

const waterEVERYTHING = (plantsObj) => {
  const today = new Date();
  const todayString = today.toDateString();
  const updatedPlantList = { ...plantsObj };

  for (const key in updatedPlantList) {
    const newPlant = { ...plantsObj[key], lastWatered: todayString };
    updatedPlantList[key] = newPlant;
  }

  return updatedPlantList;
};

const checkIfWellWatered = (wateringInterval, lastWatered) => {
  const todayDate = new Date();
  const lastWateredDate = new Date(lastWatered);

  const diffInS = (todayDate.getTime() - lastWateredDate.getTime()) / 1000;
  const diffInDays = diffInS / 86400;

  return diffInDays < wateringInterval;
};

const result = waterPlantById("1");
console.log(result, plantsArr);
