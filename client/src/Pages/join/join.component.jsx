import { useNavigate } from "react-router";
import CardList from "../../Components/card-list/card-list.component";
import ScrollToTop from "../../Components/scroll-to-top/scroll-to-top.component";
import PillButton from "../../Components/pill-button/pill-button.component";

const JoinPage = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="w-full bg-a text-white p-20 flex" >
                <div className="mx-8 space-y-4 mb-8"  >
                    <h1 className="text-5xl" data-aos="fade-left" >Join the Noise<span className="text-p" >.</span></h1>
                </div>
            </div>
            <div className="flex-col space-y-8 mt-[-40px]"  >
                <div data-aos="fade-left">
                    <CardList withoutBtn />
                </div>
                <div data-aos="fade-left">
                    <CardList withoutBtn />
                </div>
                <div data-aos="fade-left">
                    <CardList withoutBtn />
                </div>
                <div data-aos="fade-left">
                    <CardList withoutBtn />
                </div>
            </div>
            <div className="flex justify-center my-16 space-x-4" >
                <PillButton color={"a"} >
                    1
                </PillButton>
                <PillButton color={"a"} >
                    2
                </PillButton>
                <PillButton color={"a"} >
                    3
                </PillButton>
            </div>
            <ScrollToTop />
        </>
    );
}

export default JoinPage;