import Delhi from "../../../public/assets/maison1.jpg";
import Berlin from "../../../public/assets/maison6.jpg";
import Paris from "../../../public/assets/maison7.jpg";
import Dubai from "../../../public/assets/maison3.jpg";
import Card from "./Card";

const PopularLocations = () => {

  const data = [
    {
      image: Delhi,
      city: "Hammamet",
      numOfPlace: 5
    },
    {
      image: Berlin,
      city: "Tozeur",
      numOfPlace: 6
    },
    {
      image: Paris,
      city: "Tunis",
      numOfPlace: 4
    },
    {
      image: Dubai,
      city: "Tatouine",
      numOfPlace: 10
    }
  ]

  return (
    <div className="h-full w-full my-20">
      <div className="h-full w-5/6 mx-auto flex flex-col justify-start">
        <h5 className="text-[20px] bg-blue-500 text-white rounded-full p-4 w-max">Explore Top</h5>
        <h2 className="text-4xl text-slate-800 font-bold mt-6 mb-12">Popular locations</h2>
        <div className="flex flex-wrap items-center justify-center gap-14">
          {data?.map((place, idx)=>(
            <Card key={idx} place={place}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularLocations;