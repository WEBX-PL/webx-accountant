import Head from "next/head";
import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav className="fixed w-full z-50">
        <div className="border-solid rounded-md text-gray-700 backdrop-blur-md bg-white/60 m-5 flex">
          <Link href="/" passHref>
            <a className="my-2 mr-2 px-4 hover:opacity-80 border-r-[1px] border-gray-400 rounded-l-md justify-center items-center flex">
              <div className="leading-none text-xs text-center">
                <span className="font-semibold text-sm block f1">
                  ACCOUNTANT
                </span>
                <span className="font-semibold block f1 opacity-50 tracking-wider">
                  <span className="text-orange-700">▲</span>WEBX
                </span>
              </div>
            </a>
          </Link>
          <Link href="/features" passHref>
            <a className="my-2 rounded-md font-semibold px-4 py-2 hover:bg-white flex">
              FEATURES
            </a>
          </Link>
          <Link href="/pricing" passHref>
            <a className="my-2 rounded-md font-semibold px-4 py-2 hover:bg-white flex">
              PRICING
            </a>
          </Link>
          <Link href="/signin" passHref>
            <a className="my-2 mr-2 rounded-md font-semibold px-4 py-2 hover:opacity-70 ml-auto bg-orange-700 text-white">
              SIGN IN
            </a>
          </Link>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="bg-gray-200 w-full p-5 font-semibold text-sm flex flex-row justify-between">
        <div>MADE WITH ♥ BY WEBX</div>
        <div className="font-light">Work in progress</div>
      </footer>
    </>
  );
};

export default Layout;
