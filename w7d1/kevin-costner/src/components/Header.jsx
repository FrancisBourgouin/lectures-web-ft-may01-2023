export default function Header(props) {
  return (
    <header>
      <h1>Super Watering Plant App of Destiny</h1>
      {props.plantCount === 1 && <p>Saving a single plant from dehydration</p>}
      {props.plantCount > 1 && <p>Saving {props.plantCount} plants from dehydration</p>}
      {!props.plantCount && <p>Not saving any plants from dehydration</p>}
    </header>
  );
}
