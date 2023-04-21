import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

function StudioNavbar(props: any) {
  return (
    <div>
      <Link
        href='/'
        className='bg-[#101112] p-4 flex items-center gap-1 cursor-pointer hover:text-gray-500 font-bold text-gray-100'
      >
        <FiChevronLeft />
        Go Back
      </Link>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
