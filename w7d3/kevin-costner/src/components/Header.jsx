export default function Header(props) {
  const { handleClick } = props;
  return (
    <header>
      <h1>Super Watering World</h1>
      <button onClick={handleClick}>WATER EVERYTHING</button>
    </header>
  );
}
