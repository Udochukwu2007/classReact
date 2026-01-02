import { link } from 'react-router-dom';

function Nicepghead() {
  return (
    <div className='move'>
        <br /><br />

        <ul className='flex justify-center items-center gap-[20px]  text-1xl text-white'>
            <li> <link to="/Home">Home</link></li>
            <li> <link to="/About">About</link></li>
            <li> <link to="/Contact">Contact</link></li>
            <li> <link to="/Gallery">Gallery</link></li>
            <li> <link to="/Team">Team</link></li>

        </ul>
    </div>
  )
}

export default Nicepghead