import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IContact } from "../type";

const logoBackground: Record<string, string> = {
  LeetCode: "bg-black",
  Github: "bg-white",
};

const Contacts = ({ contact: { name, logo, link } }: { contact: IContact }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={name}>
    {name !== "Chess" ? (
      <motion.div
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.8 }}
        className="btn glass mx-1.5 rounded-full border-solid pl-0"
      >
        <div className="flex rounded-full">
          <div
            className={`${logoBackground[name] ?? ""} h-[43px] w-[43px] rounded-full`}
          >
            <Image src={logo} alt={name} height={43} width={43} />
          </div>
          <div className="p-2 text-center text-lg">{name}</div>
        </div>
      </motion.div>
    ) : (
      <div>
        <motion.div
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.8 }}
          className="peer btn glass mx-1.5 rounded-full border-solid p-0 pl-0"
        >
          <div className="flex rounded-full p-1">
            <div className="rounded-full">
              <Image height={35} width={35} src={logo} alt={name} />
            </div>
          </div>
        </motion.div>
        <div className="invisible absolute mt-4 rounded-md p-2 shadow-lg peer-hover:visible">
          <div className="absolute -top-2 left-[30px] h-0 w-0 -translate-x-1/2 transform border-b-[6px] border-l-[6px] border-r-[6px] border-b-gray-800 border-l-transparent border-r-transparent" />
          Challenge !
        </div>
      </div>
    )}
  </a>
);

export default memo(Contacts);
