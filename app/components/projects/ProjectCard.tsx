import { memo } from "react";
import Image from "next/image";
import { IProject } from "../type";

const linkButton =
  "btn glass my-2 mt-1 h-12 w-12 rounded-full border-solid p-0";

const ProjectCard = ({
  project: {
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    key_techs,
  },
}: {
  project: IProject;
}) => (
  <article className="card glass relative m-auto h-[500px] overflow-hidden bg-gradient-to-b from-white/40 to-base-300/80 to-80% shadow-xl">
    <figure className="px-10 pt-10">
      <Image
        src={image_path}
        alt={name}
        height={350}
        width={450}
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h3 className="card-title">{name}</h3>
      <p className="text-justify">{description[0]}</p>
    </div>

    <div className="glass absolute z-10 m-0 h-0 w-full rounded-box bg-base-300 p-0 opacity-0 duration-500 hover:h-full hover:opacity-100">
      <div className="card-body">
        <h3 className="card-title text-center">{name}</h3>
        {description.slice(1).map((point) => (
          <p key={point} className="text-justify">
            {point}
          </p>
        ))}

        <div className="flex flex-wrap justify-center gap-2">
          {key_techs.map((tech) => (
            <button
              key={tech}
              className="btn glass m-1 cursor-default border-solid"
            >
              {tech}
            </button>
          ))}
          {github_url && (
            <a
              href={github_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on GitHub`}
              className={linkButton}
            >
              <Image src="/icons/github-1.png" alt="" height={40} width={40} />
            </a>
          )}
          {deployed_url && (
            <a
              href={deployed_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} live site`}
              className={linkButton}
            >
              <Image src="/icons/link.png" alt="" width={25} height={25} />
            </a>
          )}
        </div>
      </div>
    </div>
  </article>
);

export default memo(ProjectCard);
