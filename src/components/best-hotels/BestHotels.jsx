import Delhi from '../../../public/assets/delhi.jpg'
import Dubai from '../../../public/assets/dubai.jpg'
import Berlin from '../../../public/assets/berlin.jpg'
import Paris from '../../../public/assets/paris.jpg'
import AbuDhabi from '../../../public/assets/AbuDhabi.jpg'
import Mumbai from '../../../public/assets/Mumbai.jpg'
import Hamburg from '../../../public/assets/Hamburg.jpg'
import StTropez from '../../../public/assets/StTropez.jpg'
import Card from './Card'


const BestHotels = () => {

  const data = [
    {
      name: "Kelibia Houses",
      image: Delhi,
      category: "Luxury",
      reviews: 4.7,
      location: "Kelibia, Nabeul"
    },
    {
      name: "Kelibia Houses",
      image: Dubai,
      category: "Luxury",
      reviews: 4.7,
      location: "Kelibia, Nabeul"
    },
    {
      name: "Kelibia Houses",
      image: Berlin,
      category: "Luxury",
      reviews: 4.7,
      location: "Kelibia, Nabeul"
    },
  ]

  return (
    <div className="h-full w-full my-20">
      <div className="h-full w-5/6 mx-auto flex flex-col justify-start">
       <h5 className="text-[20px] bg-blue-500 text-white rounded-full p-4 w-max">Explore Top</h5>
       <h2 className="text-4xl text-slate-800 font-bold mt-6 mb-12">Best Houses</h2>
       <div className="flex flex-wrap items-center justify-center gap-14">
        {data?.map((place, idx)=>(
          <Card place={place} key={idx} />
        ))}
       </div>
      </div>
    </div>
  )
}

export default BestHotels