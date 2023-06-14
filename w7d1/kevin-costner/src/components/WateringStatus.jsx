export default function WateringStatus(props) {
  const { isWellWatered } = props;
  return (
    <p>
      {isWellWatered && (
        <>
          <span>🚿🚿🚿💧💧💧🌊🌊🌊</span>
          <span>Well watered</span>
        </>
      )}
      {!isWellWatered && (
        <>
          <span>🔥🔥🔥🏜️🏜️🏜️🏝️🏝️🏝️</span>
          <span>Not well watered</span>
        </>
      )}
    </p>
  );
}
