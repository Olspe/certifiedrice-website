const Navbar = () => {
    return (
        <nav className="hamburger-menu">  {/* Olspe: Added classNames and html elements to make the burger icon */}
            <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" htmlFor="menu__toggle">
      <span className="myspan"></span>
    </label>
            <div className="nav menu__box">
                <a className="active ricebowl">🍚</a>
                <a className="active">Certified_Rice</a>
                <a href="../" className='menu__item'>Home</a>
                <a href="../about" className="text menu__item">About</a>
                <a href="../contact" className='menu__item'>Contact</a>
                <a href="../portfolio" className='menu__item'>Portfolio/Work</a>
                <a href="../hire" className='menu__item'>Hire me!</a>
                <a href="../blog" className='menu__item'>Blog</a>
                <a href="https://github.com/CertifiedRice/certifiedrice-website" className='menu-item'><i className="fa-brands fa-github"></i>&nbsp; Source</a>
            </div>
        </nav>
    )
}

export default Navbar;