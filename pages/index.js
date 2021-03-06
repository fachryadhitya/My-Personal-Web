import Head from "next/head";
import About from "../components/About";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>@fachryadhitya</title>
      </Head>

      <header className="text-gray-500 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-xl">
            <span
              onClick={() => router.push("/")}
              className="mr-5 hover:text-white cursor-pointer"
            >
              About
            </span>
            <span
              onClick={() => router.push("/projects")}
              className="mr-5 hover:text-white cursor-pointer"
            >
              Projects
            </span>
            <span
              onClick={() => router.push("/contact")}
              className="mr-5 hover:text-white cursor-pointer"
            >
              Contact
            </span>
          </nav>
        </div>
      </header>

      <About />
    </div>
  );
}
