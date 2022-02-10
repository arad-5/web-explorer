import { CgSearch } from "react-icons/cg";
import { BsImageFill, BsFillCameraVideoFill } from "react-icons/bs";
const Secondary_header = () => {
  const list_style =
    "px-2 pb-1 border-t-2 border-sky-500 bg-slate-500 rounded-xl rounded-t-md cursor-pointer  text-white flex items-center shadow-xl";
  const icons_style = " ml-1";
  return (
    <div className="w-full">
      <ul className="flex mr-auto justify-between max-w-[20rem] flex-wrap">
        <li className={list_style}>
          All
          <CgSearch className={icons_style} />
        </li>
        <li className={list_style}>
          Images
          <BsImageFill className={icons_style} />
        </li>
        <li className={list_style}>
          Videos
          <BsFillCameraVideoFill className={icons_style} />
        </li>
        <li className={list_style + "mr-0"}>
          News
          <CgSearch className={icons_style} />
        </li>
      </ul>
    </div>
  );
};

export default Secondary_header;
