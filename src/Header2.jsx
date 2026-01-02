
import { Link } from "react-router-dom";
import Combtn from "./Combtn";

function Header2() {
  return (
    <div className='head'>
        <br /><br />
        
        <ul className='flex justify-center items-center gap-[20px]  text-1xl text-white sobber'>
          <li> <Link to="/Home"><img src="ha.jpg" className="h-[50px] w-[300px] ml-[50px] "></img></Link></li>
            <li> <Link to="/About" className="ml-[400px] sm:hidden  lg:block lx:block">About</Link></li>
            <li> <Link to="/Blog" className="sm:hidden  lg:block lx:block">Blog</Link></li>
            <li> <Link to="/Service" className="sm:hidden  lg:block lx:block">Service</Link></li>
            <li> <Link to="/Shop" className="mr-[60px] sm:hidden  lg:block lx:block">Shop</Link></li>
            <li> <Link to="/Schedule" className="sm:hidden  lg:block lx:block"><Combtn leg="Schedule a call"/></Link></li>
            

        </ul>
    </div>
  )
}

export default Header2