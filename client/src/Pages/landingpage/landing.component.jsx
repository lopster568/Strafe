import Navbar from "../../Components/navbar/navbar.component";
import { loginUser } from "../../api/user.js";
import { useEffect } from 'react'
const LandingPage = () => {
    useEffect(() => {
        loginUser().then(resp => console.log(resp.data.msg))
    }, [])
    return ( 
        <Navbar />
     );
}
 
export default LandingPage;