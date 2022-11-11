import heroImg from '../../images/hero/hero-img.png'
import showcase3 from '../../images/showcase/3.png'
import line from '../../images/line.svg'
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom'
import "./hero.styles.css"

const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full bg-bg" style={{ backgroundImage: `url(${line})` }} >
            <div className="mx-auto flex justify-around items-top">
                <div>
                    <img src={heroImg} alt="" width="460" height="690" />
                </div>
                <div style={{ marginTop: "100px" }} >
                    <h1 className='text-6xl text-text-grey' >A new form of ART</h1>
                    <h1 className='text-6xl text-text-grey'>to <span className='text-p blink' >.</span></h1>
                    <div className='pt-20 flex space-x-4' >
                        <Button color="a" handleClick={() => navigate("/explore")} >Explore</Button>
                        <Button color="a" handleClick={() => navigate("/signup")} >Get Started</Button>
                    </div>
                </div>
                <div>
                    <img src={showcase3} alt="" height="630" width="450" />
                </div>
            </div>
        </div>
    );
}

export default Hero;