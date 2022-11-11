import Card from "../card/card.component";
import cardImg from '../../images/card1.webp'

const CardList = ({ withoutBtn }) => {
    return (
        <div className="w-full" >
            <div className="mx-auto flex justify-items-center items-center space-x-8">
                {
                    withoutBtn ? (
                        <div className="mx-auto w-full flex flex justify-center hover:text-p" />
                    ) : (
                        <button className="mx-auto w-full flex flex justify-center hover:text-p" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                            </svg>
                        </button>
                    )
                }
                <Card img={cardImg} title={"Cherry Chill"} subtitle={"Viscinity of the cherry chill garden"} />
                <Card img={cardImg} title={"Cherry Chill"} subtitle={"Viscinity of the cherry chill garden"} />
                <Card img={cardImg} title={"Cherry Chill"} subtitle={"Viscinity of the cherry chill garden"} />
                {
                    withoutBtn ? (
                        <div className="mx-auto w-full flex flex justify-center hover:text-p" />
                    ) : (
                        <button className="mx-auto w-full flex flex justify-center hover:text-p" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>

                    )
                }
            </div>
        </div>
    );
}

export default CardList;