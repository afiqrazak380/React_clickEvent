// Button function base component

function Button() {
  const handleClick = (e) => (e.target.textContent = "Why You Click Me 👿");

  return (
    <>
      <button onClick={(e) => handleClick(e)}>Click Me 🥱</button>
    </>
  );
}

export default Button;
