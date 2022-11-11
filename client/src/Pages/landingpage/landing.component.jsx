import Navbar from "../../Components/navbar/navbar.component";
import { loginUser } from "../../api/user.js";
import { useEffect } from 'react'
import Hero from "../../Components/hero/hero.component";
import CardList from "../../Components/card-list/card-list.component";
import Banner from "../../Components/banner/banner.component";
import Footer from "../../Components/footer/footer.component";
import Discussion from "../../Components/discussion/discussion.component";
import cardImg from '../../images/card1.webp'
import Card from "../../Components/card/card.component";
import mapImg from '../../images/map.jpg'
import Button from "../../Components/button/button.component";

const LandingPage = () => {
    useEffect(() => {
    }, [])
    return (
        <>
            <Navbar />
            <Hero />
            <Banner heading={"Trending Promps This Week"} subHeading="Showcase" />
            <div className="mt-[-150px] ">
                <CardList />
            </div>
            <Banner customText={
                <div className="text-6xl" >
                    J<span className="text-s" >O</span>I<span className="text-p" >N </span><span className="text-s" > T</span>H<span className="text-p" >E </span>N<span className="text-s" >O</span>IS<span className="text-p" >E </span>
                </div>
            } height={"350px"} />
            <div className="max-w-4xl mx-auto mt-[-120px]" >
                <div className="flex space-x-0">
                    <Card img={cardImg} title={"Cherry Chill"} subtitle={"Viscinity of the cherry chill garden"} />
                    <Discussion />
                </div>
            </div>
            <div className="w-full bg-a" >
                <div className="mx-auto py-8 flex justify-around items-top">
                    <div>
                        <div className="text-white font-Raleway text-5xl my-8" >
                            Reach us at:
                            <div className="my-4 space-x-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <span className="text-sm" >helpdesk@strafe.in</span>
                            </div>
                            <div className="my-4 space-x-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <span className="text-sm" >+91 8800429989</span>
                            </div>
                        </div>
                        <div className="text-white font-Raleway text-5xl my-8" >
                            Get in touch!
                            <div className="my-4 flex space-x-4 justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                                <input type="text" className="text-a text-lg rounded-md p-2" placeholder="Write here!" />
                            <Button color={"s"} className="shrink-50" >Send</Button>
                            </div>
                        </div>
                    </div>
                    <div className="text-white font-Raleway shadow-lg text-5xl my-8 " >
                        <img className="transition ease-in-out delay-200 hover:scale-110" src={mapImg} height={"300"} width="300" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}

export default LandingPage;