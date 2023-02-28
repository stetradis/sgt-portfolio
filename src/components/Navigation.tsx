import {BsFillMoonStarsFill, BsSun, BsDownload} from 'react-icons/bs';

const Navigation = (props: any) => {
    const { mode, setMode } = props;

    const toggleDarkMode = () => {
        setMode(!mode);
        try {
            localStorage.setItem('dark', JSON.stringify(!mode));
        }
        catch (error: any) {
            console.log(error.message);
        }
    }

    return (
        <>
        <nav className='py-4 px-2 flex justify-between'>
            <ul className='flex text-xl font-semibold gap-8 nav-links'>
                <li><a href='#about'>About</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
            </ul>
            <ul className='flex items-center'>
                <li className='rounded-full shadow-md border border-zinc-200 bg-zinc-100 dark:bg-zinc-800 dark:text-gray-300 px-3 py-2'>
                    {mode ? 
                    <BsFillMoonStarsFill className='cursor-pointer text-xl' onClick={toggleDarkMode}/> : 
                    <BsSun className='cursor-pointer text-xl' onClick={toggleDarkMode}/>
                    }
                </li>
              <li><a href='/webresume.pdf' target="_blank" download="Stella Tetradis - Resume" className='flex bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded ml-8 gap-2'>Download Resum&eacute; <BsDownload className='text-xl'/></a></li>
            </ul>
        </nav>
        <hr className='h-1 bg-teal-600'/>
        </>
        
    );
}

export default Navigation;