import { IndianRupee, LandPlot, MapPinHouse } from "lucide-react";
import "./style.css";
export default function About () {
    return(
        <div className="about flex justify-center">
            <div className="wrapper w-full max-w-[1400px] px-5">
                <div className="about-info flex flex-col gap-5 py-10 md:flex-row">
                    <section className="flex flex-col items-center md:items-start md:flex-1 ">
                        <h1 className="font-bold text-gray-700 text-5xl">Aboout</h1>
                        <h2 className="font-bold text-white -mt-5 text-2xl">About Us</h2>
                        <p className="text-center md:text-start">With over 20 years of experience, we are a real estate firm dedicated to offering exceptional locations to our partners.</p>
                    </section>
                    
                    <section className="flex justify-center md:flex-1 md:justify-end md:items-end ">
                        <button className="bg-BgButton w-fit h-fit  text-BgPrimary py-2 px-10 rounded-md">Learn More</button>
                    </section>
                
                </div>

                <section className="px-3 flex flex-col gap-5 py-10 md:flex-row">
                    <div className="about-caro h-[250px] sm:h-[300px] bg-BgPrimary relative overflow-hidden rounded-xl w-full bg-cover">
                        <svg className="clippath ">
                        <defs>
                            <clipPath id="svg-clip" clipPathUnits="objectBoundingBox">
                            <path d="M32.1429 756.757H1167.86C1185.61 756.757 1200 742.236 1200 724.324V97.3549C1200 89.5381 1197.2 81.9843 1192.12 76.0836L1136.22 11.1611C1130.11 4.07138 1121.26 0 1111.95 0H32.1429C14.3908 0 0 14.5205 0 32.4325V724.324C0 742.236 14.3909 756.757 32.1429 756.757Z" fill="#1C2D37"/>
                            </clipPath>
                        </defs>
                        </svg>
                        <img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/about_1_1.jpg" alt="img1"
                        className="w-full h-full absolute top-0 object-cover"
                        />
                    </div>
                    <div className="about-caro h-[250px]  sm:h-[300px] bg-BgPrimary relative overflow-hidden rounded-xl w-full bg-cover">
                        <svg className="clippath ">
                        <defs>
                            <clipPath id="svg-clip" clipPathUnits="objectBoundingBox">
                            <path d="M32.1429 756.757H1167.86C1185.61 756.757 1200 742.236 1200 724.324V97.3549C1200 89.5381 1197.2 81.9843 1192.12 76.0836L1136.22 11.1611C1130.11 4.07138 1121.26 0 1111.95 0H32.1429C14.3908 0 0 14.5205 0 32.4325V724.324C0 742.236 14.3909 756.757 32.1429 756.757Z" fill="#1C2D37"/>
                            </clipPath>
                        </defs>
                        </svg>
                        <img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/about_1_1.jpg" alt="img1"
                        className="w-full h-full absolute top-0 object-cover"
                        />
                    </div>
                </section>

                <section className="flex flex-col-reverse px-3 gap-10 py-10 md:flex-row md:items-center">
                    <h3 className="text-4xl">Complete real estate services designed to make the purchase, sale, and management of your properties simple and confident.</h3>
                    <div className="rounded-full overflow-hidden w-[150px] h-[150px] md:min-w-[250px] md:h-[250px] ">
                        <img src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" alt="profile" className="w-full h-full object-cover" />
                    </div>

                </section>


                <section className="flex flex-col md:flex-row md:items-center">
                <div className="flex flex-col gap-3 py-10 px-3 ">
                        <LandPlot size={40} />
                        <h1 className="text-xl font-bold">Property Valuation</h1>
                        <p>Comprehensive real estate services that simplify and instill confidence in the purchase, sale, and management of your properties.</p>
                    </div>

                    <div className="flex flex-col gap-3 py-5 px-3">
                        
                    <MapPinHouse size={40} />
                    <h1 className="text-xl font-bold">Property Management</h1>
                    <p>Business consulting provides expert advice and services to improve real estate performance and achieve desired outcomes</p>
                    </div>

                    <div className="flex flex-col gap-3 py-5 px-3">
                    <IndianRupee size={40}   />
                    <h1 className="text-xl font-bold">Invest Opportunities</h1>
                    <p>Real estate services that enable the seamless and confident purchase, sale, and management of your growing properties.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}