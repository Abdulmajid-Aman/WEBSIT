import '../Main.css'
import NavBar from './NavBar'

const Main = () => {
  return (
    <>
    <header className="header">
    <NavBar />
        <div className="head">
        <h1 className="writings">Raining Offers For <br /> Hot Summer!</h1>
        <h3 className="offer">25% Off On All Products</h3>
        <div className="buttons">
            <button className="shop">SHOP NOW</button>
            <button className="find">FIND MORE</button>
        </div>
        </div>
    </header>
    </>
  )
}

export default Main