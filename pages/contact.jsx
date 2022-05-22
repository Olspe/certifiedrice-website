import Head from "next/head";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Certified_Rice</title>
                <link rel="icon" href="https://avatars.githubusercontent.com/certifiedrice" />
            </Head>

            <h1>Certified_Rice</h1>
            <img src="https://avatars.githubusercontent.com/certifiedrice" className="profile-picture"></img>
            <h3 className="underline">Contact</h3>
            <p>Ways to contact me!</p>

            <h3 className="underline">Contact Methods</h3>

            <ul>
                <li>Discord: Certified Rice#8386</li>

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
