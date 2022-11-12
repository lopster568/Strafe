import { useState } from 'react';
import { useNavigate } from 'react-router';
import { loginUser } from '../../api/user';
import img from '../../images/auth.jpg'
import { setCurrentUser } from '../../redux/actions/user.actions';
import Button from "../button/button.component";
import Navbar from "../navbar/navbar.component";
import { useDispatch } from 'react-redux'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const user = loginUser({
                email, password
            })
            const response = await user
            dispatch(setCurrentUser(response.data))
            navigate('/')
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <div className="mx-auto"  >
                <div className="flex w-full bg-bg items-top justify-center">
                    <div className="hidden sm:block" >
                        <img className="object-cover shadow-lg rounded mb-20" height={"500"} width="512" src={img} alt="" />
                    </div>
                    <div className="flex flex-col justify-center ml-[-30px] mb-20" data-aos="fade-left" >
                        <form className="bg-s max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg" >
                            <h2 className="text-4xl dark:text-white font-bold text-center font-Raleway" >Login</h2>
                            <div>
                                <label className="flex flex-col text-gray:400 py-2">Email</label>
                                <input placeholder="Enter your Email" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label className="flex flex-col text-gray:400 py-2">Password</label>
                                <input placeholder="Enter your Password" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="mt-4" >
                                <Button color="p" handleClick={(e) => handleSubmit(e)} >Login</Button>
                            </div>
                            <div className="flex justify-between py-2 space-x-4 text-text-grey" >
                                <div>
                                    <p>Don't have an account?</p>
                                    <p className="text-blue" > <button onClick={() => navigate("/signup")} >Register here ... </button> </p>
                                </div>
                                <p> <a href=""> Forgot Password?</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;