import Banner from "../components/Banner"
import Card from "../components/Card"
import "../styles/Home.scss"
import homeBanner from "../images/homeBanner.png"

function Home()  {
  return (
    <div className="home">
    <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
    <Card />
    </div>
  )
}

export default Home;