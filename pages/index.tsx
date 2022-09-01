import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>W.accountant</title>
        <meta name="description" content="Accountant application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>W.accountant</h1>
    </div>
  );
};

export default Home;
