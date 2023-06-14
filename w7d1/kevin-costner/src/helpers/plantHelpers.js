export const checkIfWellWatered = (lastWatered, wateringInterval) => {
  const todayDate = new Date();
  const lastWateredDate = new Date(lastWatered);

  const diffInMs = todayDate.getTime() - lastWateredDate.getTime();
  const diffInS = diffInMs / 1000;
  const diffInDays = diffInS / 86400;

  return diffInDays < wateringInterval;
};
