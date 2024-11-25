import { useEffect, useState } from 'react'
import './style.css'
import { CirclePlay } from 'lucide-react'

export default function Carousel () {
    const [currentIndex , setCurrentIndex]=useState(0)
    const carouselItems=[
        {url:"https://cms.ezylegal.in/wp-content/uploads/2022/07/right-to-property-is-a-legal-right.jpg"},
        {url:"https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {url:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
    ]

    
    useEffect(()=>{
        const intervalId=setInterval(() => {
            if(currentIndex <carouselItems.length-1){
                setCurrentIndex(currentIndex+1)
                return
            }
            setCurrentIndex(0)
        }, 4000)
        return () => clearInterval(intervalId)
    })

    return(
        <div className="carousel flex justify-center w-full overflow-hidden">
            <div className="carousel-container bg-BgPrimary  relative overflow-hidden max-w-[1400px]  h-svh md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-xl w-full bg-cover ">
                <svg className="clippath ">
                    <defs>
                        <clipPath id="svg-clip" clipPathUnits="objectBoundingBox">
                        <path d="M32.1429 756.757H1167.86C1185.61 756.757 1200 742.236 1200 724.324V97.3549C1200 89.5381 1197.2 81.9843 1192.12 76.0836L1136.22 11.1611C1130.11 4.07138 1121.26 0 1111.95 0H32.1429C14.3908 0 0 14.5205 0 32.4325V724.324C0 742.236 14.3909 756.757 32.1429 756.757Z" fill="#1C2D37"/>
                        </clipPath>
                    </defs>
                </svg>

                {/* background image */}
                <img src={carouselItems[currentIndex].url} alt={currentIndex.toString()} className=" w-full h-full absolute top-0 object-cover zoomInOut"/>

                <div className='overlay bg-black bg-opacity-60 w-[1920px] h-[1080px] absolute top-0 left-0'>

                </div>


                <div className=' title-container content absolute top-0  w-full h-full flex flex-col md:flex-row  md:items-center text-center md:text-start md:gap-0 text-white gap-10 justify-center px-5'>
                    <section className='flex flex-col gap-10 md:gap-10 items-center md:items-start justify-center md:h-full md:px-5'>
                        <h1 className='title text-5xl font-bold xl:text-8xl'>Top notch living space</h1>
                        <p className='paragraph text-lg xl:text-xl'>Bringing together a team with passion, dedication, and resources to help our clients reach their buying and selling goals. We are with you every step of the way.</p>
                        <button className='font-semibold bg-BgButton text-PrimaryText rounded-md w-fit py-3 px-10'>Explore Properties</button>
                    </section>
                    <section className=' flex justify-center items-center w-full md:flex md:justify-center md:items-center  md:h-full'>
                        <div className='relative mt-5'>
                            <div className='absolute inset-0 animate-ping border rounded-full'></div>
                            <div className='relative p-3 sm:p-5 xl:p-7  rounded-full'>
                                <CirclePlay size={60} />
                            </div>
                        </div>

                    </section>
                </div>
                <div className='absolute w-full z-20 flex gap-2  h-full top-0 items-end justify-center md:justify-end'>
                    {carouselItems.map((_, index)=>{
                        return <section className={`w-[50px] md:w-[100px] ${currentIndex == index ? "bg-BgButton" : "bg-white"} h-[2px]  mb-5 mr-5 cursor-pointer`} onClick={()=> setCurrentIndex(index)} key={index}></section>
                    })}
                </div>
                
            </div>
        </div>
    )
}