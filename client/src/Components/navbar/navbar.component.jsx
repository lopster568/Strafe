import logo from '../../images/logo.png'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux'
import AuthorHeader from '../authorHeader/author-header.component';
const Navbar = () => {
    const navigate = useNavigate()
    const currentUser = useSelector(state => state.user.currentUser)
    return (
        <div className="bg-bg p-8">
            {/* //container */}
            <div className="max-w-6xl xl:max-w-7xl mx-auto ">
                <div className="flex justify-between items-center">
                    {/* logo */}
                    <div>
                        <button onClick={() => navigate("/")} className="cursor-pointer p-0 m-0">
                            <img src={logo} alt="" height="90" width="220" />
                        </button>
                    </div>

                    {/* secondary */}
                    <div className="flex space-x-4 font-Raleway" >
                        {
                            currentUser ? (
                                <>
                                    <AuthorHeader />
                                    <button onClick={() => navigate("/explore")}>Explore</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => navigate("/explore")}>Discover</button>
                                    <button onClick={() => { }}>Contact Us</button>
                                    <button onClick={() => navigate("/signup")} className="underline font-light" >Login/SignUp</button>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;