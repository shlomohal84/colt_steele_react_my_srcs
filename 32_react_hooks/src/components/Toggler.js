import useToggle from "./hooks/useToggle";

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(false);
  const [isBanana, toggleIsBanana] = useToggle(true);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? "๐" : "๐ซ"}</h1>
      <h1 onClick={toggleIsHeartBroken}>{isHeartBroken ? "๐" : "๐งก"}</h1>
      <h1 onClick={toggleIsBanana}>{isBanana ? "๐" : "๐"}</h1>
    </div>
  );
}
export default Toggler;
