import Carousel from "../../ui/carousel";

export default function Main () {
    return(
        <>
            <main className=" w-full">
               <div className="flex w-full flex-col">
                    <section className="px-3">
                        <Carousel/>
                    </section>

                    <section className="w-full bg-BgSecondary flex -mt-32 justify-center ">
                       <div className="h-auto w-full max-w-[1400px] gap-5  md:flex-row md:justify-around md:items-end border border-red-400 bg-BgSecondary text-BgPrimary flex flex-col items-center text-center py-10">
                       <span className="mt-40 flex flex-col gap-3 py-3">
                            <h2 className="font-bold text-3xl">850+</h2>
                            <p>ELEGANT APARTMENTS</p>
                        </span>
                        <span className="flex flex-col gap-3 py-3">
                            <h2 className="font-bold text-3xl">950+</h2>
                            <p>LUXURY HOUSES</p>
                        </span>

                        <span className="flex flex-col gap-3 py-3">
                            <h2 className="font-bold text-3xl">18K+</h2>
                            <p>SATISFIED GUESTS</p>
                        </span>
                        <span className="flex flex-col gap-3 py-3">
                            <h2 className="font-bold text-3xl">2K+</h2>
                            <p>HAPPY OWNERS</p>
                        </span>
                       </div>

                    </section>
               </div>
            </main>
        </>
    )
}