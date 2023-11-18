// ProfilePic component

function ProfilePic() {
  const imgUrl = "./src/assets/profilePic.jpg";

  const handleClick = () => console.log("You click this image!🥸");

  return (
    <>
      <img onClick={handleClick} src={imgUrl}></img>
    </>
  );
}

export default ProfilePic;
