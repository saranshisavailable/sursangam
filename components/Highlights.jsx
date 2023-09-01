import { Carousel } from "@material-tailwind/react";
import { highlights } from "../lib/highlights.js";
import rkm from '/public/assets/highlights/rkm.jpeg'
import rangoli from '../public/assets/highlights/bits-audi.e4618e10f28d3264622b.jpeg'



export function Highlights() {
    return (
        <div className="pt-40 bg-center bg-cover bg-no-repeat   bg-neutral-500 ">
            {/* <img src={rangoli.src}
                alt="" className="absolute w-100% h-auto" /> */}
            <h1 className="text-white w-full text-5xl font-semibold text-center pb-20 font-monofont ">Sursangam Highlights</h1>

            <Carousel transition={{ duration: 2 }} className="rounded-xl pb-40   ">
                {highlights.map((highlights) => (
                    <img
                        src={highlights.path}
                        alt="image1"
                        className="h-1/2 w-1/2 object-cover m-auto " />
                ))}



            </Carousel>
        </div>
    );
}