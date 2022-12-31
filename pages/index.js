import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'

const inter = Inter({ subsets: ["latin"] });

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


export default function Home() {
  const [width, height] = useWindowSize()

  const steps = [
    {
      content: "demographics",
      number: 1,
    },
    {
      content: "interests",
      number: 2,
    },
    {
      content: "flavors",
      number: 3,
    },
  ];
  const [step, setStep] = useState(steps[0]);

  return (
    <div>
      <Head>
        <title>Coconut</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
        <div className={styles.navigation}>
          <div className={styles.topNavigation}>
          <p onClick={() => {
            if(step["number"] - 2 >= 0) {
              setStep(steps[step["number"] - 2])
            }
          }}>back</p>
          <p>{step["content"]}</p>
          <p>{step["number"]}/3</p>
          </div>
          <div>
          <div style={{width: "100%", left: "0px", top: "0px", backgroundColor: "#fff", height: 12, borderRadius: 16}}>
          <div style={{width: step["number"] == 1 ? (0.333 * (width - 32)) : ((0.333 * (step["number"])) * (width - 32)), backgroundColor: "#EC1663", height: "12px", borderRadius: step["number"] == 3 ? ("16px 16px 16px 16px") : ("16px 0px 0px 16px")}}/>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
