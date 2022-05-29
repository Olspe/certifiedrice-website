import Head from "next/head";
import Image from 'next/image'
import {motion, AnimatePresence} from "framer-motion";


export default function About() {
    return(
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

          <img src="https://avatars.githubusercontent.com/certifiedrice" alt="profile picture" className="profile-picture"/>
          <h1 className="underline">Certified Rice</h1>
          <hr></hr>

          <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                  scale: .20,
                  opacity: 0
              },
              visible: {
                  scale: [1, 1.9, 1.2, 1.1, 1.05, 1.02, 1.01, 1],
                  opacity: 1,
                  transition: {
                      delay: .25
                  }
              }
          }}>

          <h3 className="underline">About me!</h3>
          <hr></hr>

          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                  scale: .20,
                  opacity: 0
              },
              visible: {
                  scale: [1, 1.2, 1.1, 1.02, 1.01, 1],
                  opacity: 1,
                  transition: {
                      delay: .40
                  }
              }
          }}>

          <div className="ilove" id="ilove">
              <h3 className="underline">I Love</h3>

              <ul>
                  <li>Music: Vaporwave/or Chill/Lofi</li>
                  <li>Video Game: First person shooters, mania, and open world sandboxes</li>
                  <li>Playing my flute or creating music</li>
                  <li>Learning new things!</li>
              </ul>
          </div>

          <div className="bio" id="bio">
              <h3 className="underline">Bio</h3>

              <h3>[Undisclosed year] Born in Columbus, Ohio.</h3>
              <h3>[2019] Started Programming</h3>
              <h3>[2020] Started making games</h3>
              <h3>[2021] Joined and started working at TacoByte</h3>
              <h3>[2022-present] Indie game developer and Web developer working on numerous projects and freelance</h3>

              <div className="work" id="work">
                  <h3 className="underline">Work</h3>

                  <li>Freelancer and Indie developer</li>

                  <p>Certified_Rice is a Freelance/Indie game developer and Full-Stack web developer.</p>
                  <p>Based in Columbus, Ohio, Certified_Rice is making opensource projects with passion!</p>
                  <p>He is great with working in a team and is always looking for new challenges!</p>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <p>Is currently contributing to <a href="https://tacobyte.dev">TacoByte's</a> Projects</p>

                  <a href="./portfolio">
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      <button>My portfolio and past work -> </button>
                  </a>
              </div>
          </div>
          </motion.div>

      </div>
    );
}