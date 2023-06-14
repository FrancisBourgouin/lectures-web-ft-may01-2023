# Watering Plants V - Water Strikes Back

Show a list of plants with their name, watering interval, lastwatered. Have a possiblity of watering one plant, and watering all the plants.

## Data

### Plant

```jsx
const plant = {
  id: 1,
  name: "Fern",
  wateringInterval: 2,
  lastWateredDate: "Wed, 14 Jun 2017 07:00:00 GMT",
};
```

### PlantList

```jsx
const plants = {
  1: plant,
  2: plant,
};

const plants = [plant, plant];

// Array of objects  => Order matters, kinda slow to access one object, easy to iterate over all of it
// Object of objects => Order doesn't matter, easy to access a specific object, harder to iterate over all of it
```

## Seed Data

```jsx
export const plant1 = {
  id: "1",
  name: "Monstera",
  lastWatered: "2023-05-20",
  wateringInterval: 7,
};
export const plant2 = {
  id: "2",
  name: "Tulips",
  lastWatered: "2023-02-10",
  wateringInterval: 4,
};
export const plant3 = {
  id: "3",
  name: "Cherry",
  lastWatered: "2023-03-20",
  wateringInterval: 60,
};
export const plant4 = {
  id: "4",
  name: "Money Tree",
  lastWatered: "2021-01-20",
  wateringInterval: 1000,
};

export const plantsArr = [plant1, plant2, plant3, plant4];
export const plantsObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };
```

## Structure

### HTML

- body
  - header
    - h1 Super Watering World
    - button WATER EVERYTHING
  - main
    - section
      - h1 List of plants
      - ul
        - li (background red/green if well watered or not)
          - h1 Name of plant
          - h2 Type - Last Watered Date
          - button WATER

### Components

- App
  - Header
  - PlantList
    - PlantListItem

### Component Data

State: Current situation / condition of your data, who holds the state is responsible for it.
Props:

State of plants (array)
-> waterPlantById (will affect state)
-> waterEVERYTHING (will affect state)

- App (S: plants{} P: null)
  - Header (S: null P: waterEVERYTHING)
  - PlantList (S: null P: plants[], waterPlantById )
    - PlantListItem (S: null P: id, name, lastWatered, wateringInterval, waterPlantById)

### Helper functions!

```jsx
// View helper.js file
```
