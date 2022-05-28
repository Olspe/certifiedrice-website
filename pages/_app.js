import '../styles/globals.css'
import {motion, AnimatePresence} from "framer-motion";
import Layout from '../comps/Layout'
import Navbar from '../comps/Navbar'

function MyApp({ Component, pageProps, router }) {
  return (
      <AnimatePresence>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" transition={{duration: .7, type: 'easeInOut'}} style={{position: 'relative'}} variants={{
          pageInitial: {
              opacity: 0
          },
          pageAnimate: {
              opacity: 1
          },
          pageExit: {
              backgroundColor: 'white',
              filter: `invert()`,
              opacity: 0,
          }
      }}>
          <Layout>
          <Component {...pageProps} />
          </Layout>
      </motion.div>
      </AnimatePresence>
  )
}

export default MyApp
