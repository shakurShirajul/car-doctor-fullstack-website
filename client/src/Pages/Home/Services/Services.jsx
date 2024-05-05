import { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => setServices(res.data));
    }, [])

    console.log(services);

    return (
        <div className="mt-4">
            <div className="text-center space-y-5 mb-14">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
                {
                    services.map(service =>
                        <ServiceCard service={service}></ServiceCard>
                    )
                }
            </div>
            <div className="flex justify-center mt-12">
                <button className="text-[#FF3811] border border-[#FF3811] py-4 px-6 text-xl font-semibold rounded-xl">More Services</button>
            </div>
        </div >
    );
};

export default Services;