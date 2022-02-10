import { useRouter } from "next/router";
import Link from "next/link";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
const Paginator = () => {
  const router = useRouter();
  const number = Number(router.query.page) || 0;
  return (
    <div className="flex justify-center space-x-5 mb-10">
        <hr />
      {number >= 10 && (
        <Link href={`/search?query=${router.query.query}&page=${number - 10}`}>
          <div className="flex items-center cursor-pointer">
            <TiArrowLeftOutline className="text-xl text-sky-600 mx-2"/>
            <p className="text-gray-700" >previous</p>
          </div>
        </Link>
      )}
        <Link href={`/search?query=${router.query.query}&page=${number + 10}`}>
          <div className="flex items-center flex-row-reverse  cursor-pointer">
            <TiArrowRightOutline className="text-xl text-sky-600 mx-2"/>
            <p className="text-gray-700" >next</p>
          </div>
        </Link>
    </div>
  );
};

export default Paginator;
