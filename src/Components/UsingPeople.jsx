import Container from "./Container";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"

const UsingPeople = () => {
    return (
        <div className="bg-green-200">
            <Container>
                <div className="text-center py-10">
                    <h2 className="text-4xl font-bold text-emerald-700 ">What Type of People Using This</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 max-md:grid-cols-1 max-md:px-5 gap-5 py-5">
                    <div className="p-5 shadow-md shadow-emerald-800 " >
                        <img className="w-full h-[250px]" src={img1} alt="" />
                        <p className="text-2xl text-emerald-950 font-medium text-center">Developers</p>
                    </div>
                    <div className="p-5 shadow-md shadow-emerald-800 " >
                        <img className="w-full  h-[250px]" src={img2} alt="" />
                        <p className="text-2xl text-emerald-950 font-medium text-center">Corporate Professionals</p>
                    </div>
                    <div className="p-5 shadow-md shadow-emerald-800 " >
                        <img className="w-full  h-[250px]" src={img4} alt="" />
                        <p className="text-2xl text-emerald-950 font-medium text-center">Corporate Professionals</p>
                    </div>
                    <div className="p-5 shadow-md shadow-emerald-800 " >
                        <img className="w-full  h-[250px]" src={img5} alt="" />
                        <p className="text-2xl text-emerald-950 font-medium text-center">Corporate Professionals</p>
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default UsingPeople;