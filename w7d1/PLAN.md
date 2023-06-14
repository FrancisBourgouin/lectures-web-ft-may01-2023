# Watering Plant App

Show a list of plants, with their name, type, last watered and a warning if they are dangerously dry.

## Data

## Plant

```jsx
const plant = {
  id: "",
  name: "",
  type: "",
  lastWatered: "date",
  wateringInterval: 0,
};
```

## Plants

Depends on what we want, sometimes an array will be a good choice, sometimes an object will be the way to go.

- Array of arrays => Easy to iterate over the entirety of the array, harder to access / modify specific values
- Object of arrays => Easy to access or iterate on a part of the object, easier/faster to access specific values

```jsx
const plantsArr = [plant, plant]; // Good enough
const plantsObj = { 1: plant, 2: plant }; // Overkill

Object.values(plantsObj);
```

## Seed

```jsx
const plant1 = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2023-06-10",
  wateringInterval: 7,
};
const plant2 = {
  id: "2",
  type: "Paper or real?",
  name: "Tulips",
  lastWatered: "2023-02-10",
  wateringInterval: 4,
};
const plant3 = {
  id: "3",
  type: "Blossoms are nice",
  name: "Cherry",
  lastWatered: "2023-05-20",
  wateringInterval: 60,
};
const plant4 = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2021-01-20",
  wateringInterval: 1000,
};

const plantsArr = [plant1, plant2, plant3, plant4];
const plantsObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };
```

## Structure

### HTML

ul / li vs article

- body
  - header
    - h1 Title of the app
    - p Saving X plants from dehydration
  - main
    - section
      - h1 All the plants
      - ul
        - li
          - h1 Plant name
          - p type - watering interval
          - p
            - emojis
            - span color RED / GREEN (if well watered or not)
            - emojis

### Components

- App
  - Header
  - PlantList
    - PlantListItem

### Component Data

The data goes as high as the first common parent of everybody who needs the data

- App - provides plants[]
  - Header - needs plantCount(Num)
  - PlantList - needs plants[]
    - PlantListItem - needs plant{}

Props will be everything that the components need.
