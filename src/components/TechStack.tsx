import { AiOutlineConsoleSql } from 'react-icons/ai';
import { SiTypescript, SiJavascript, SiReact, SiGithub, SiDotnet, SiCsharp, SiNextdotjs, SiAngularjs, SiVuedotjs, SiAmazonaws, SiAzuredevops } from 'react-icons/si';

const TechStack = () => {
    return (
        <section id='techstack' className='mt-10'>
            <div className='p-10 text-center'>
                <h3 className='text-2xl py-2 font-semibold'>Tech Stack</h3>
                <p className='text-md py-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto'>The tech stack that I use consists of a combination of programming languages, frameworks, libraries, and tools that enable me to build robust and scalable applications. This is an overview of my experience with various technologies that I have used throughout my career. </p>
            </div>
            <div className='flex flex-wrap gap-4'>
                <div className="stack">
                    <SiCsharp className='icon' size={40}/>
                </div>
                <div className="stack">
                    <SiDotnet className='icon' size={40}/>
                </div>
                <div className="stack">
                    <SiJavascript className='icon' size={40}/>
                </div>
                <div className="stack">
                    <SiTypescript className='icon' size={40}/>
                </div>
                <div className="stack">
                    <SiReact className='icon' size={40}/>
                </div>
                <div className="stack">
                    <SiNextdotjs className='icon' size={40}/>
                </div>
                <div className="stack">
                    <AiOutlineConsoleSql className='icon' size={40}/>
                </div>
                <div className="stack">
                    <SiGithub className='icon' size={40}/>
                </div>
                <div className="stack">
                    <SiAngularjs className='icon' size={40}/>
                </div>
                <div className="stack">
                    <SiVuedotjs className='icon' size={40}/>
                </div>
                <div className="stack">
                    <SiAmazonaws className='icon' size={40}/>
                </div>
                <div className="stack">
                    <SiAzuredevops className='icon' size={40}/>
                </div>
            </div>
        </section>
    );
}

export default TechStack;