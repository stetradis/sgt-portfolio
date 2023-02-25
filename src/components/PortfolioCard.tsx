import Image from 'next/image';
import Tag from './Tag';

const PortfolioCard = () => {
    return (
        <section id='portfolio'>
          <div className='p-10 text-center'>
              <h3 className='text-2xl py-2 font-semibold'>Portfolio</h3>
              <p className='text-md py-4 text-gray-600 max-w-xl mx-auto'>Being a software engineer in financial technology often means that the projects I've worked on cannot be shared publicly due to NDAs and access requirements. Here you can find a handful of publicly available projects that I have developed.</p>
          </div>

          <div className='flex flex-wrap gap-4'>

            <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg relative">
              <Image className="w-full" src="/bweditorial.png" alt="Blockworks Editorial" width={300} height={0} priority/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Blockworks</div>
                <p className="text-gray-700 text-base">
                  Designed and developed multiple features according to business requirements. Built a nodejs backend for 
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Tag tagNames={['javascript','nodejs', 'php', 'heroku', 'wordpress', 'css', 'mysql', 'seo']}></Tag>
              </div>
              <div className="px-6 pb-2 mt-20">
                <button className="bg-teal-500 text-white px-4 py-2 gap-2 hover:bg-teal-600 rounded absolute bottom-6">
                 Visit Website
                </button>
              </div>
            </div>

            <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg relative">
              <Image className="w-full" src="/bwresearch.png" alt="Blockworks Research" width={300} height={0}/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Blockworks Research</div>
                <p className="text-gray-700 text-base">
                  News and insights about digital assets. 
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Tag tagNames={['javascript','typescript', 'php', 'mysql', 'nextjs', 'react', 'tailwind', 'aws', 'docker', 'vercel', 'graphql', 'mixpanel']}></Tag>
              </div>
              <div className="px-6 pb-2 mt-20">
                <button className="bg-teal-500 text-white px-4 py-2 gap-2 hover:bg-teal-600 rounded absolute bottom-6">
                 Visit Website
                </button>
              </div>
            </div>

            <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg relative">
              <Image className="w-full" src="/saspeakup.png" alt="SA Speak Up" width={300} height={30}/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">San Antonio Speak Up</div>
                <p className="text-gray-700 text-base">
                  Lead developer on the city of San Antonio's engagement portal and representative backend system.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Tag tagNames={['javascript', 'jquery', 'ajax', 'c#', '.net', 'mvc', 'azure', 'sqlserver', 'css']}></Tag>
              </div>
              <div className="px-6 pb-2 mt-20">
                <button className="bg-teal-500 text-white px-4 py-2 gap-2 hover:bg-teal-600 rounded absolute bottom-6">
                 Visit Website
                </button>
              </div>
            </div>

            <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg relative">
              <Image className="w-full" src="/ninetyone.png" alt="Ninety One" width={300} height={0} priority/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Ninety One</div>
                <p className="text-gray-700 text-base">
                  Rebranded 'Investec Asset Management' to Ninety One. Developed the end user website as well as rewriting the investment management backend system. 
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Tag tagNames={['javascript', 'typescript', 'angular', 'c#', '.net', 'azure', 'sqlserver', 'cosmosdb', 'aws', 'docker']}></Tag>
              </div>
              <div className="px-6 pb-2 mt-20">
                <button className="bg-teal-500 text-white px-4 py-2 gap-2 hover:bg-teal-600 rounded absolute bottom-6">
                 Visit Website
                </button>
              </div>
            </div>
          </div>
        </section>
    )
}

export default PortfolioCard;