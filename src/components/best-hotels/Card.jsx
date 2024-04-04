import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { format } from "currency-formatter";

const Card = ({place}) => {
  return (
    <Link href={"/details/1"} className="h-[500px] w-[350px] flex flex-wrap rounded-xl cursor-pointer shadow-md ">
     <div className="relative h-2/3 w-full">
      <Image src={place.image} className="h-full w-full overflow-hidden rounded-tl-xl rounded-tr-xl object-cover" alt=""/>
      <div className="absolute right-0 bottom-0 px-4 py-2 bg-blue-700 text-white rounded-tl-xl font-semibold">{place.location}</div>
     </div>
     {/* {data} */}
     <div className="w-full flex-col gap-4 p-4">
      <div className="mt-2 flex justify-between items-center">
        <h2 className="text-left text-2xl text-slate-800 font-semibold">{place.name}</h2>
        <span className="p-2 rounded-full bg-blue-600 text-white flex items-center gap-2">
          <AiFillStar size={20}/>
          <span className="text-white">{place.reviews}</span>
        </span>
      </div>
      {/* {pice & reviews} */}
      <div className="mt-6 flex justify-between items-center">
        <span className="text-slate-600">{format(place.price, {locale: "en-US"})}
         <span className="ml-2">Per night</span>
        </span>
        <button className="cursor-pointer py-2 px-6 text-white bg-blue-600 rounded-lg">Book</button>
      </div>
     </div>
    </Link>
  )
}

export default Card;