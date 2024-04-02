import Link from "next/link";
import Image from "next/image";

const Card = ({place}) => {
  return (
    <Link href="/catalog" className="h-[500px] w-[350px] flex flex-wrap rounded-xl shadow-md ">
     <div className="relative h-2/3 w-full">
      <Image src={place.image} alt="" className="h-full w-full overflow-hidden rounded-tl-xl rounded-tr-xl object-cover"/>
      <div className="absolute right-0 bottom-0 px-6 py-2 bg-blue-700 text-white rounded-tl-xl font-semibold">{place.city}</div>
     </div>
     <div className="flex flex-col gap-4 p-4">
      <h2 className="text-center text-2xl text-slate-800 font-semibold">{place.numOfPlace} Places to stay</h2>
      <p className="text-center mt-2 text-lg text-slate-700">Discover the best hotel or apartement for you adventurous journey.</p>
     </div>
    </Link>
  )
}

export default Card