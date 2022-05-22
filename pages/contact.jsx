import Head from "next/head";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Certified_Rice</title>
                <link rel="icon" href="https://avatars.githubusercontent.com/certifiedrice" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
                      crossOrigin="anonymous" referrerPolicy="no-referrer"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                      crossOrigin="anonymous"></link>
            </Head>

            <div className="topnav">
                <a className="active">Certified_Rice</a>
                <a href="./">Home</a>
                <a href="./contact">Contact</a>
                <a href="./portfolio">Portfolio/Work</a>
                <a href="./hire">Hire me!</a>
                <a href="https://github.com/CertifiedRice/certifiedrice-website"><i className="fa-brands fa-github"></i>&nbsp; Source</a>
            </div>


            <h1>Certified_Rice</h1>
            <img src="https://avatars.githubusercontent.com/certifiedrice" className="profile-picture"></img>
            <h3 className="underline">Contact</h3>
            <p>Ways to contact me!</p>

            <h3 className="underline">Contact Methods</h3>

            <ul>
                <li>Discord: Certified Rice#8386</li>

                <a href="mailto:certifiedricee@gmail.com">
                    <button>Email</button>
                </a>


                <a href="https://twitter.com/Certified_Rice">
                    <button>Twitter</button>
                </a>

                <a href="https://steamcommunity.com/id/certified_rice/">
                    <button>Steam</button>
                </a>

                <a href="https://github.com/CertifiedRice">
                    <button>Github</button>
                </a>
            </ul>
        </div>
    )
}
