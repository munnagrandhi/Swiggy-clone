function Navbar() {
    return (
        <header className="navbar">
            <div className="nav-left">
                <img src="icon.png" alt="logo" />
                <h2>Swiggy</h2>
            </div>

            <div className="nav-right">
                <h3>Swiggy Corporate</h3>
                <h3>Partner with us</h3>
                <button className="get-app">Get the App ↗</button>
                <button className="sign-in">Sign in</button>
            </div>
        </header>
    );
}

export default Navbar;