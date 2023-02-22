import {BsFillMoonStarsFill} from 'react-icons/bs';
const Navigation = () => {
    return (
        <>
        <nav className='py-10 px-2 flex justify-between'>
            <ul className='flex text-xl font-semibold gap-8 nav-links'>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-xl'/></li>
              <li><a href='#' className='flex bg-teal-500 text-white px-4 py-2 rounded-md ml-8 gap-2'>Download Resum&eacute;</a></li>
            </ul>
        </nav>
        <hr className='h-1 bg-teal-600'/>
        </>
        
    );
}

export default Navigation;