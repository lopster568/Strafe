import { useNavigate } from "react-router";
import Navbar from "../../Components/navbar/navbar.component";
import Button from "../../Components/button/button.component";
import CardList from "../../Components/card-list/card-list.component";

const CreatePage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full bg-a text-white p-10 flex" >
                <div className="mx-8 space-y-4 mb-8" data-aos="fade-left" >
                    <h1 className="text-5xl" >Generate a Theme<span className="text-p" >.</span></h1>
                    <Button handleClick={() => navigate("/create")} color={"s"}>Create Thread</Button>
                    <div className="flex space-x-4">
                        <h1 className="text-xl" >or enter custom prompt</h1>
                        <button className="text-p rounded-full bg-white p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-[-40px]" data-aos="fade-left" >
                <CardList />
            </div>
        </>
    );
}

export default CreatePage;