import  "../styles/Banner.scss"

function Banner({image, text}) {
  return (
  <div className="banner">
    <img src={image} alt="bannière" />
    {text && <h1>{text}</h1>}
  </div>
  );
}
export default Banner;
