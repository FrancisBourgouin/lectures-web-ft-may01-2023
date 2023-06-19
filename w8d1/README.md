# Data Fetching & Other Side Effects

## Today's menu

- Recap on hooks (useState, rules)
- Fetching information from an api
- The useEffect hook!

## Immutable Data Patterns with Arrays and Objects

Immutability is an important concept of `Functional Programming`.

From Wikipedia

> In computing, a persistent data structure is a data structure that always preserves the previous version of itself when it is modified. Such data structures are effectively immutable, as their operations do not (visibly) update the structure in-place, but instead always yield a new updated structure.

In other words...

- Don’t mutate data, and if you have to – create a clone and mutate it.
- Reuse unchanged parts. Only changed parts should be changed.

### Benefits of immutability

- Immutable data structure are simpler to construct, test, and use
- Truly immutable values are always thread-safe
- Immutable data is side-effect free (avoids unexpected bugs hard to detect)
- You can quicky compare the previous and the new version

Some libraries enforce immutability

- [immutable js](https://immutable-js.github.io/immutable-js/)
- [mori](https://swannodette.github.io/mori/)
- [Rambda js](https://ramdajs.com/)

### Arrays

- An array is not immutable in JavaScript
- we need to use only the pure array methods and the spread operator
- The pure array methods are the ones that create a new array when something changes

  - pop(), push() and splice() are not pure
  - concat(), slice() are pure

[Immutable Arrays](https://codesandbox.io/s/strange-neumann-j5g5y)

### Objects

[Immutable Objects](https://codesandbox.io/s/modest-pare-28lgm)

## What are Side Effects

Think of it as, when an action occurs, a reaction will happen. Very simularly, in react context, when a component mounts, something sort of action can potentialy be fired ( which in our case is controlled by the useEffect). In short, React encapsulates side effects with useEffect.

setting up useEffect like this will fire the app any time its re-rendered ( whenever theres a state change)

```jsx

useEffect( () => {
console.log("welcome")
})
setting up useEffect like this will make the app only ONCE ( only on first render)

useEffect( () => {
console.log("ONLY ONCE")
}, [] )// notice the empty array
setting up useEffect like this make the app render only when the state siren changes

useEffect( () => {
console.log("woop woop")
}, [siren] )// notice the array now has one value which is a state

useEffect( () => {
console.log("TO INFINITY AND BEYOND!!!!")
setValue(12) // setValue alters the value state
}, [ value ] )// value is a state

```

useEffect runs initial when the state gets set, then useEffect sets the state, which then runs useEffect which then runs useEffect which then sets the state...... ( etc etc etc ). Make sure to avoid this as this is very bad. We never want infinite loops.
