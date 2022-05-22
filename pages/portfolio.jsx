import Head from "next/head";

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Certified_Rice</title>
                <link rel="icon" href="https://avatars.githubusercontent.com/certifiedrice" />
            </Head>

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