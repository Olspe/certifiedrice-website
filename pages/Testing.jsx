import Head from "next/head";
import Image from 'next/image'
import {motion, AnimatePresence} from "framer-motion";
import {Img} from "@chakra-ui/react";
import Script from 'next/script' //Olspe: imported this in so I could import fontawesome on line 23-27
import lifejs from '../public/lifejs.gif'

export default function Home() {

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
            {/*Olspe: Added Script tag to access fontawesome */}
            <Script
                src="https://kit.fontawesome.com/a076d05399.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossOrigin="anonymous"
            ></Script>

            <h1 className="underline">This is the Testing page to test out new features!</h1>


            <button>Light theme</button>
        </div>
    )
}
