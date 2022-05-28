const Navbar = () => {
    return (
        <nav>
            <div className="topnav">
                <a className="active ricebowl">🍚</a>
                <a className="active">Certified_Rice</a>
                <a href="../">Home</a>
                <a href="../contact">Contact</a>
                <a href="../portfolio">Portfolio/Work</a>
                <a href="../hire">Hire me!</a>
                <a href="../blog">Blog</a>
                <a href="https://github.com/CertifiedRice/certifiedrice-website"><i className="fa-brands fa-github"></i>&nbsp; Source</a>
            </div>
        </nav>
    )
}

export default Navbar;