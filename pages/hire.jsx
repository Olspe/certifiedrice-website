import Head from "next/head";

export default function Hire() {
    return (
        <div>
            <Head>
                <title>Certified_Rice</title>
                <link rel="icon" href="https://avatars.githubusercontent.com/certifiedrice" />
            </Head>

            <h1>Certified_Rice</h1>
            <img src="https://avatars.githubusercontent.com/certifiedrice" className="profile-picture"></img>
            <h3 className="underline">Hire me!</h3>

            <p>I do commission(sometimes), I can code stuff.</p>

            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>I'm available for hire!</p>

            <a href="./contact">
                <button>Contact</button>
            </a>

            <h3 className="underline">Payment options</h3>
            <ul>
                <li>USD</li>
                <li>BTC</li>
                <li>Doge Coin</li>
            </ul>

            <h3 className="underline">Payment Methods</h3>

            <ul>
                <li>Cashapp</li>
                <li>BTC Wallet</li>
                <li>Doge Coin Wallet</li>
            </ul>
        </div>
    )
}