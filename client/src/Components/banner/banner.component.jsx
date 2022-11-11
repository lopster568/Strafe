const Banner = ({ heading, subHeading, customText, height }) => {
    return (
        <div className="w-full bg-a cursor-default" style={{ minHeight: `${height ? height : "450px"}` }} >
            <div className="mx-auto flex justify-around items-top relative right-40">
                <div style={{ marginTop: "100px" }} className="text-white font-Raleway text-5xl" >
                    {customText ? customText : heading}
                </div>
            </div>
            <div className="mx-auto flex justify-around items-top">
                <div style={{ marginTop: "20px" }} className="text-white text-6xl uppercase " >
                    {subHeading}
                </div>
            </div>
        </div>
    );
}

export default Banner;