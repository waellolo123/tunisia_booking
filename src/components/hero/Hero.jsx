import Image from "next/image";

const Hero = ({image, mainHeader, secondHeader}) => {
  return (
    <div>
      <div className="relative h-screen w-full">
        <Image src={image} alt="" className="brightness-50 h-full w-full object-cover"/>
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center gap-8">
          <h2 className="text-white text-center text-3xl font-bold md:text-6xl">{mainHeader}</h2>
          <h2 className="text-white text-center text-2xl md:text-4xl font-semibold">{secondHeader}</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero;