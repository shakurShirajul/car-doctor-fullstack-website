import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div>
            <div className="card w-96 border rounded-xl p-6 space-y-5">
                <figure className="">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="space-y-5">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between">
                        <p className="text-xl font-semibold text-[#FF3811]">Price: ${price}</p>
                        <Link><FaArrowRight className="text-[#FF3811]"></FaArrowRight></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;