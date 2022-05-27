import Head from "next/head";
import {motion, AnimatePresence} from "framer-motion";


export default function Blog() {
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
                <a className="active ricebowl">🍚</a>
                <a className="active">Certified_Rice</a>
                <a href="./">Home</a>
                <a href="./contact">Contact</a>
                <a href="./portfolio">Portfolio/Work</a>
                <a href="./hire">Hire me!</a>
                <a href="./blog">Blog</a>
                <a href="https://github.com/CertifiedRice/certifiedrice-website">
                    <i className="fa-brands fa-github"></i>&nbsp; Source
                </a>
            </div>

            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .20,
                    opacity: 0
                },
                visible: {
                    scale: [1, 1.25, 1],
                    opacity: 1,
                    transition: {
                        delay: .25
                    }
                }
            }}>

            <div className="header">
                <img src="https://avatars.githubusercontent.com/certifiedrice" alt="profile picture" className="profile-picture"/>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1>Certified Rice's Blog</h1>

                <h3>Indie game developer and Front-end Web Developer</h3>
                <ul>
                    <li>Programmer</li>
                    <li>Game Developer</li>
                    <li>Designer</li>
                </ul>

                <hr></hr>
            </div>

            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .20,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .30
                    }
                }
            }}>
            <div>
                <h3 className="underline">Blog</h3>


                <p>No posts right now! Please come back later!</p>
            </div>
            </motion.div>

            <footer>
                <p>© 2022-Present Certified_Rice. All Rights Reserved.</p>
            </footer>
        </div>
    )
}