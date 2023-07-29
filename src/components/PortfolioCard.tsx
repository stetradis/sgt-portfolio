import Image from "next/image";
import Tag from "./Tag";

const PortfolioCard = () => {
  return (
    <section className="mt-10">
      <div className="p-10 text-center">
        <h3 className="text-2xl py-2 font-semibold">Past Projects</h3>
        <p className="text-md py-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Being a software engineer in financial technology often means that the
          projects I&apos;ve worked on cannot be shared publicly due to NDAs and
          access requirements. Here you can find a handful of publicly available
          projects that I have developed.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 pb-6">
        <div className="darkcard max-w-xs mx-auto rounded overflow-hidden shadow-lg relative">
          <Image
            className="w-full"
            src="/bweditorial.png"
            alt="Blockworks Editorial"
            width={300}
            height={0}
            priority
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Blockworks</div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Designed and developed multiple features according to business
              requirements.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Tag
              tagNames={[
                "javascript",
                "nodejs",
                "php",
                "heroku",
                "wordpress",
                "css",
                "mysql",
                "seo",
              ]}
            ></Tag>
          </div>
          <div className="px-6 pb-2 mt-20">
            <a
              href="https://blockworks.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-white px-4 py-2 gap-2 hover:bg-teal-600 rounded absolute bottom-6"
            >
              Visit Website
            </a>
          </div>
        </div>

        <div className="darkcard max-w-xs mx-auto rounded overflow-hidden shadow-lg relative">
          <Image
            className="w-full"
            src="/bwresearch.png"
            alt="Blockworks Research"
            width={300}
            height={0}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Blockworks Research</div>
            <p className="text-gray-700 dark:text-gray-300 text-base ">
              Full stack development on creating the research platform from a
              figma design.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Tag
              tagNames={[
                "javascript",
                "typescript",
                "php",
                "mysql",
                "nextjs",
                "react",
                "tailwind",
                "aws",
                "docker",
                "vercel",
                "graphql",
                "mixpanel",
              ]}
            ></Tag>
          </div>
          <div className="px-6 pb-2 mt-20">
            <a
              href="https://app.blockworksresearch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-white px-4 py-2 gap-2 hover:bg-teal-600 rounded absolute bottom-6"
            >
              Visit Website
            </a>
          </div>
        </div>

        <div className="darkcard max-w-xs mx-auto rounded overflow-hidden shadow-lg relative">
          <Image
            className="w-full"
            src="/saspeakup.png"
            alt="SA Speak Up"
            width={300}
            height={30}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">San Antonio Speak Up</div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Lead engineer on the city of San Antonio&apos;s engagement portal
              and representative backend system.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Tag
              tagNames={[
                "javascript",
                "jquery",
                "ajax",
                "c#",
                ".net",
                "mvc",
                "azure",
                "sqlserver",
                "css",
                "bootstrap",
              ]}
            ></Tag>
          </div>
          <div className="px-6 pb-2 mt-20">
            <a
              href="https://www.saspeakup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-white px-4 py-2 gap-2 hover:bg-teal-600 rounded absolute bottom-6"
            >
              Visit Website
            </a>
          </div>
        </div>

        <div className="darkcard max-w-xs mx-auto rounded overflow-hidden shadow-lg relative">
          <Image
            className="w-full"
            src="/ninetyone.png"
            alt="Ninety One"
            width={300}
            height={0}
            priority
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Ninety One</div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Developed the end user website as well as rewriting the investment
              management backend system.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Tag
              tagNames={[
                "javascript",
                "typescript",
                "angular",
                "c#",
                ".net",
                "azure",
                "sqlserver",
                "cosmosdb",
                "aws",
                "docker",
              ]}
            ></Tag>
          </div>
          <div className="px-6 pb-2 mt-20">
            <a
              href="https://ninetyone.com/en/south-africa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-white px-4 py-2 gap-2 hover:bg-teal-600 rounded absolute bottom-6"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCard;
