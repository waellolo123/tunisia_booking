

const BestHotels = () => {

  const data = [
    {
      name: "Kelibia Houses",
      image: "",
      category: "Luxury",
      reviews: 4.7,
      location: "Kelibia, Nabeul"
    }
  ]

  return (
    <div className="h-full w-full my-20">
      <div className="h-full w-5/6 mx-auto flex flex-col justify-start">
       <h5 className="text-[20px] bg-blue-500 text-white rounded-full p-4 w-max">Explore Top</h5>
       <h2 className="text-4xl text-slate-800 font-bold mt-6 mb-12">Best Houses</h2>
       <div className="flex flex-wrap items-center gap-14">

       </div>
      </div>
    </div>
  )
}

export default BestHotels