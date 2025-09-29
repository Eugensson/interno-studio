import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";

import { projectList } from "@/lib/data";

export const OurWork = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="mb-8 h2 text-center">Follow Our Projects</h2>
        <p className="mb-8 md:text-lg text-center max-w-200 mx-auto">
          Discover our interior design projects where style meets comfort. Each
          space is thoughtfully planned to reflect modern trends, enhance
          functionality, and create inspiring, practical living environments
          that feel stylish and welcoming.
        </p>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-26 gap-y-14">
          {projectList.map(({ id, title, category, image }) => (
            <li key={id} className="w-full h-full max-w-137 mx-auto">
              <Image
                src={image}
                alt={title}
                width={548}
                height={525}
                className="mb-6"
              />
              <div className="w-full flex items-center justify-between">
                <div>
                  <h3 className="h3">{title}</h3>
                  <p>{category}</p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center size-17.5 bg-accent-secondary rounded-full cursor-pointer hover:bg-accent/20 transition-colors duration-300"
                >
                  <RiArrowRightSLine size={30} className="text-primary pl-1" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
