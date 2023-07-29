import Image from "next/image";
import Tag from "./Tag";

const CurrentProject = () => {
  return (
    <section id="portfolio" className="mt-10">
      <div className="p-10 text-center">
        <h3 className="text-2xl py-2 font-semibold">
          What am I working on now?
        </h3>
        <p className="text-md py-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Apart from my side projects (building an NFT gallery and an AI powered
          smart contract reader), I am currently contracted as a Software
          Engineer at BuildLegends, specializing in creating confidence-building
          tools for children.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 pb-6">
        <div className="darkcard max-w-xs mx-auto rounded overflow-hidden shadow-lg relative">
          <Image
            className="w-full"
            src="/legends.png"
            alt="Build Legends"
            width={300}
            height={0}
            priority
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">BuildLegends</div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Implementing new features based on Figma designs and significantly
              enhancing the initial product version. Currently engaged in
              developing value-add features with a strong emphasis on UX.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Tag
              tagNames={[
                "react",
                "javascript",
                "nextjs",
                "nodejs",
                "typescript",
                "tailwind",
                "firebase",
                "figma",
                "vercel",
              ]}
            ></Tag>
          </div>
          <div className="px-6 pb-2 mt-20">
            <a
              href="https://confidence.buildlegends.com/"
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

export default CurrentProject;
