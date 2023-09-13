import img from "../assets/img.png"
const Header = () => {
    return (
        <div className="container d-flex flex-column align-items-center font-monospace fw-bold">
            <img src={img} alt="img" height={"150px"}/>
            <h1>Investment Calculator</h1>
        </div>
    )
}

export default Header;