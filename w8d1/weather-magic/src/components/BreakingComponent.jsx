import { useEffect, useState } from "react";

export default function BreakingComponent(props) {
  const [count, setCount] = useState(0);

  const [bob, setBob] = useState("");

  console.log("Hello!", count);

  // useEffect(() => {
  //   setBob(count + "bob");
  // }, [count]);

  // setCount(count + 1);

  // Escape hatch =>
  // Handle side effects
  // useEffect();

  const dependencyArray = [count]; // List of values that we should check if we need to run the useEffect again
  useEffect(() => {
    console.log("Running the content inside the useEffect");
    const report = (event) => console.log(event.clientX, event.clientY, count); // Will happen on render
    document.addEventListener("click", report); // Will happen on render

    return () => {
      console.log("Running the cleanup of the useEffect");
      document.removeEventListener("click", report);
    }; // Will happen between re-renders (cleanup)
  }, dependencyArray);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <span>
        Count is {count}, Bob is {bob}
      </span>
    </div>
  );
}
