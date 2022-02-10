import Paginator from "../components/Paginator"
const Results = ({ results }) => {
  console.log(results);
  return (
    <div className="mx-auto xl:mx-[20rem] lg:mx-[10rem] md:mx-[5rem] ">
      <p className=" text-gray-500 text-center sm:text-left">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items.map(result => (
        <div className="max-w-xl my-8" key={result.link}>
          <div className="group">
            <a href={result.link} className="text-sm w-full">
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2 className="text-lg text-sky-800 group-hover:underline ">{result.title}</h2>
            </a>
          </div>
          <p className="line-clamp-3">{result.snippet}</p>
        </div>
      ))}
    
      <Paginator/>
    </div>
  );
};

export default Results;
