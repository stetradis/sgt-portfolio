import {BsFillMoonStarsFill, BsDownload} from 'react-icons/bs';
const Navigation = (props: any) => {
    const { mode, setMode } = props;

    return (
        <>
        <nav className='py-4 px-2 flex justify-between'>
            <ul className='flex text-xl font-semibold gap-8 nav-links'>
                <li><a href='#about'>About</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-xl' onClick={() => {setMode(!mode)}}/></li>
              <li><a href='#' className='flex bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded ml-8 gap-2'>Download Resum&eacute; <BsDownload className='text-xl'/></a></li>
            </ul>
        </nav>
        <hr className='h-1 bg-teal-600'/>
        </>
        
    );
}

export default Navigation;