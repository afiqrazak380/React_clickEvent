// Button function base component

function Button() {
  const handleClick = () => console.log("You summon me 👺"); // with out parameter

  const handleClick2 = (name) => console.log(`You have summon the ${name}`); // with parameter

  return (
    <>
      <button onClick={() => handleClick2("Lucifer")}>Click Me 🥱</button>
    </>
  );
}

export default Button;
