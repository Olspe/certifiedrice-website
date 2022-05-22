import Head from "next/head";

export default function Portfolio() {
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
            <h3 className="underline">Portfolio and works</h3>

            <div className="projects">
            <div className="box">
                <h1>Razer Chroma Roblox Integration</h1>

                <p>Razer Chroma RGB with Roblox</p>

                <a href="https://www.youtube.com/watch?v=0CGDJt5zSPM">
                    <button>Video Example</button>
                </a>

                <a href="https://github.com/CertifiedRice/Razer-Chroma-Roblox">
                    <button>Project Code</button>
                </a>
            </div>


            <div className="box">
                <h1>Rusted Engine</h1>
                <p>2d game engine made in Java.</p>

                <a href="https://youtu.be/OF-beb1AVB4">
                    <button>Video Example</button>
                </a>

                <a href="https://github.com/Rusted-Studio/Rusted-Engine">
                    <button>Project Code</button>
                </a>
            </div>

                <div className="box">
                    <h1>Rusted Script</h1>
                    <p>High Level programming language made in Python.</p>

                    <a href="https://github.com/Rusted-Script/Rusted-Script">
                        <button>Project Code</button>
                    </a>

                    <a href="https://rusted-script.github.io">
                        <button>Project Website</button>
                    </a>
                </div>

            </div>

            <a href="https://github.com/CertifiedRice">
                <button>View more projects on my Github!</button>
            </a>
        </div>
    )
}