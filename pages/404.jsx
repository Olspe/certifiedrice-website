import Head from "next/head";
import {motion, AnimatePresence} from "framer-motion";
import Image from "next/image"

export default function Custom404() {
    return (
        <div>
            <Head>d
                <title>Certified_Rice</title>
                <link rel="icon" href="https://avatars.githubusercontent.com/certifiedrice" />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
                      crossOrigin="anonymous" referrerPolicy="no-referrer"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                      crossOrigin="anonymous"></link>
            </Head>

            <motion.div inital="hidden" animate="visible" varoamts={{
                hidden: {
                    scale: .20,
                    opacity: 0
                },
                visible: {
                    scale: [1, 1.2, 1.1, 1],
                    opacity: 1,
                    transition: {
                        delay: .25
                    }
                }
            }}>
                <div className="header">
                    <motion.div inital="hidden" animate="visible" varoamts={{
                        hidden: {
                            scale: .20,
                            opacity: 0
                        },
                        visible: {
                            scale: [1, 1.2, 1.1, 1.5, 1],
                            opacity: 1,
                            transition: {
                                delay: 4.5
                            }
                        }
                    }}>
                    <div>
                    <h1 className="underline">404 Error!</h1>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h3>Oops! Looks like this page doesn't exist!</h3>
                    <h3>Want to return to home?</h3>

                    <a href="./">
                        <button>Go Back Home!</button>
                    </a>
                    </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}