# Odd or Even

Play a game of odd or even.

- Add a list of players
- We want a form to know who plays, and who chooses odd or even

## Data

### Player

```jsx
const player = {
  id: 1,
  name: "",
  wins: 0,
};
```

### Players

```jsx
const playersObj = { 1: player, 2: player };
const playersArr = [player, player];
```

## Mock Data

```jsx
const player1 = {
  id: 1,
  name: "Abdul",
  wins: 0,
};

const player2 = {
  id: 2,
  name: "Tamara",
  wins: 0,
};

const player3 = {
  id: 3,
  name: "Joyce",
  wins: 0,
};

const players = { 1: player1, 2: player2, 3: player3 };
```

## Structure

### HTML

- body
  - header
    - h1 Odd or Even v.0.1
  - main
    - section
      - form (add new player)
        - input name
        - button
      - ul
        - li
          - p Name
          - p Wins
    - section
      - form
        - select player1
        - select player 2
        - select choice player 1
        - button

### Components

- App
  - Header
  - Player
    - PlayerForm
    - PlayerList
      - PlayerListItem
  - GameForm

### Component Data

- App (playerData)
  - Header (nothing)
  - Player (playerData)
    - PlayerForm (a way to update the player object)
    - PlayerList (list of players, player[])
      - PlayerListItem (name, wins)
  - GameForm (access to players, a way to update the win)
