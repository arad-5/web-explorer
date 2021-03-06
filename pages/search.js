import { useRef } from "react";
import Head from "next/head";
import Secondary_header from "../components/Secondary_header";
import { useRouter } from "next/router";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";
import Results from "../components/Results";
//icons
import { CgSearch, CgClose } from "react-icons/cg";

const search = ({ results }) => {
  console.log(results);
  const router = useRouter();
  const search_input = useRef(null);
  const handle_search = e => {
    e.preventDefault();
    const query = search_input.current.value;
    if (!query) return;
    router.push(`/search?query=${query}`);
  };
  return (
    <div>
      <Head>
        <title>{router.query.query} - search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="my-2 mx-5 sm:flex xl:mx-[20rem] lg:mx-[10rem] md:mx-[5rem] sticky top-0 flex-wrap space-y-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 100 100"
          version="1.1"
          viewBox="0 0 100 100"
          xmlSpace="preserve"
          className="h-10"
          onClick={() => router.push("/")}
        >
          <path
            d="M61 44.6c0 5.9-5 10.8-11 10.8s-11-4.9-11-10.8v-5.4c0-5.9 5-10.8 11-10.8 3 0 5.8 1.2 7.8 3.2 2 1.9 3.3 4.6 3.3 7.6v5.4zm38.6-18.3c-.1-.3-.3-.6-.5-.9-1.4-2.8-3.1-5.4-5-7.8-.3-.4-.7-.9-1-1.3-2.1-2.6-5.4-4.1-8.7-4.1h-51c-6.1 0-11 4.9-11 10.8v32.4c0 5.9-5 10.8-11 10.8H5.5c-3 0-5.5 2.4-5.5 5.4 0 .8.2 1.5.4 2.1.1.3.3.6.5.9 1.4 2.8 3.1 5.4 5 7.8.3.4.7.9 1 1.3 2.1 2.6 5.4 4.1 8.7 4.1h17.8c6.1 0 11-4.9 11-10.8 0-3 2.5-5.4 5.5-5.4s5.5 2.4 5.5 5.4c0 3 1.2 5.7 3.3 7.6 2 2 4.7 3.2 7.8 3.2H72c6.1 0 11-4.9 11-10.8V44.6c0-5.9 5-10.8 11-10.8h.3c3 0 5.5-2.4 5.5-5.4.2-.8 0-1.5-.2-2.1z"
            fill="#38bdf8"
          ></path>
        </svg>
        <form
          className="relative flex items-center  md:w-6/12 sm:w-8/12 mx-auto "
          onSubmit={e => handle_search(e)}
        >
          <input
            type="text"
            className=" w-full  p-2 rounded-full bg-slate-300 text-gray-800 px-[3rem] shadow-md focus:outline-sky-300 focus:shadow-lg "
            ref={search_input}
          />
          <CgClose
            className="absolute  text-xl right-3 h-full text-sky-900 cursor-pointer transform hover:scale-125 transition-transform"
            onClick={() => (search_input.current.value = "")}
          />
          <button className="absolute text-xl left-3 h-full" type="submit">
            <CgSearch className=" text-sky-800 cursor-pointer transform hover:scale-125 transition-transform" />
          </button>
        </form>
        <Secondary_header />
      </header>
      <Results results={results} />
  </div>
  );
};

export default search;
export async function getServerSideProps(context) {
  const TestData = false;
  const page = context.query.page ? context.query.page  : 0 ;

  const data = TestData ? Response :  await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.query}&start=${page}`
  ).then(response => response.json());    
  return {
    props: {
      results: data,
    },
  };
}
