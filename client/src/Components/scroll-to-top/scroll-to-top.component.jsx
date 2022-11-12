import PillButton from "../../Components/pill-button/pill-button.component";

const ScrollToTop = () => {
    return (
        <div className="w-full bg-p" >
            <div className="mx-auto flex justify-around items-center ">
                <div className="p-4" >
                    <PillButton color="ip" >Scroll To Top</PillButton>
                </div>
            </div>
        </div>
    );
}

export default ScrollToTop;