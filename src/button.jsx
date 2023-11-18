// Button function base component

function Button() {
  let count = 3; // add condition
  const handleClick = (name) => {
    if (count >= 0) {
      console.log(`Hey! ${name} the count is ${count}`);
      count--;
    } else {
      console.log(`Stop clicking the button ${name}!`);
    }
  };

  return (
    <>
      <button onClick={() => handleClick("Lucifer")}>Click Me 🥱</button>
    </>
  );
}

export default Button;
