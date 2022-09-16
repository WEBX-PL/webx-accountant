import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ACCOUNTANT</title>
        <meta name="description" content="Accountant application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-100 h-screen pt-[150px] relative">
        <Image
          src={"/living-room-have-orange-leather-sofa-decoration-minimal.jpg"}
          sizes="100vw"
          fill
          className="object-cover absolute -z-10"
          alt={"hero background sofa"}
        />
        <h1 className="text-center text-5xl leading-normal">
          <span className="text-orange-700">Optimize your company budget.</span>
          <br />
          Create your first invoice.
          <br />
          Add your first spending.
          <br />
          <span className="text-orange-700">
            We will start counting for you...
          </span>
        </h1>
      </section>
    </>
  );
};

export default Home;
