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
                <div className="blogposts">

            <div>
                <h3 className="underline">Blog Posts</h3>

                <div className="box">
                    <h1>Why you should learn Lua!</h1>

                    <p>2:19 PM EDT</p>
                    <a href="../posts/learnlua">
                        <button>View Post</button>
                    </a>
                </div>

                <div className="box">
                    <h1>Using MDX with Next.js</h1>

                    <p>5:40 PM EDT</p>
                    <a href="../posts/nextjs-mdx">
                        <button>View Post</button>
                    </a>
                </div>
            </div>
                </div>

            </motion.div>
        </div>
    )
}