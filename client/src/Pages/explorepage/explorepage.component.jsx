import Navbar from "../../Components/navbar/navbar.component";
import Button from "../../Components/button/button.component";
import CardList from "../../Components/card-list/card-list.component";
import Discussion from "../../Components/discussion/discussion.component";
import Card from "../../Components/card/card.component";
import cardImg from '../../images/card1.webp'
import PillButton from "../../Components/pill-button/pill-button.component";
import { useNavigate } from "react-router";

const ExplorePage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className="w-full bg-a text-white p-10 flex" >
                <div className="mx-8 space-y-4" >
                    <h1 className="text-5xl" >Start Something NEW<span className="text-p" >.</span></h1>
                    <Button handleClick={() => navigate("/create")} color={"s"}>Create Thread</Button>
                    <h1 className="text-5xl" >Or Join a thread<span className="text-s" >.</span></h1>
                    <Button handleClick={() => navigate("/join")} color={"p"}>Join Thread</Button>
                </div>
            </div>
            <div className="bg-white border m-5 text-p text-2xl mt-[-35px] rounded-full p-5 flex justify-center items-center w-52 mx-auto" >
                <h1>EXPLORE</h1>
            </div>
            <div className="flex flex-col space-y-8 mb-16">
                <CardList withoutBtn />
                <CardList withoutBtn />
                <CardList withoutBtn />
                <div className="mx-auto flex justify-around items-center">
                    <PillButton color="a" >Load More</PillButton>
                </div>
            </div>
            
            <div className="w-full bg-a text-white p-2 flex" />
            <div className="bg-white border m-5 text-p text-2xl mt-[-35px] rounded-full p-5 flex justify-center items-center w-52 mx-auto" >
                <h1>DISCUSSIONS</h1>
            </div>
            <div className="max-w-4xl mx-auto flex-col space-y-4 mb-16" >
                <div className="flex space-x-0">
                    <Card img={cardImg} title={"Cherry Chill"} subtitle={"Viscinity of the cherry chill garden"} />
                    <Discussion />
                </div>
                <div className="flex space-x-0">
                    <Card img={cardImg} title={"Cherry Chill"} subtitle={"Viscinity of the cherry chill garden"} />
                    <Discussion />
                </div>
                <div className="mx-auto flex justify-around items-center">
                    <PillButton color="a" >Load More</PillButton>
                </div>
            </div>
            <div className="w-full bg-p" >
                <div className="mx-auto flex justify-around items-center ">
                    <div className="p-4" >
                        <PillButton color="ip" >Scroll To Top</PillButton>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExplorePage;