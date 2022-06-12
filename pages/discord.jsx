import Head from "next/head";
import Image from 'next/image'
import {motion, AnimatePresence} from "framer-motion";

export default function Discord() {
    return(
        <motion.div  initial="hidden" animate="visible" variants={{
            hidden: {
                scale: .20,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .25
                }
            }
        }}>
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

                <img src="https://avatars.githubusercontent.com/certifiedrice" className="profile-picture"></img>
                <h1 className="underline">Certified Rice</h1>
                <hr></hr>

                <h1 className="underline">Discord Server</h1>

                <div>
                    <iframe src="https://discord.com/widget?id=871903795624419338&theme=dark" width="350" height="500"
                            allowTransparency="true" frameBorder="0"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
            </div>
        </motion.div>
    )
}