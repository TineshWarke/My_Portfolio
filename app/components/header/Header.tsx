"use client";
import {
  memo,
  PointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  MotionValue,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { contacts } from "../data";
import Contacts from "./Contacts";
import BackgroundVideo from "../ui/BackgroundVideo";

const CURSOR_SIZE = 120;

const cursorScale = { off: 0, title: 1, subtitle: 50 / CURSOR_SIZE } as const;
type CursorMode = keyof typeof cursorScale;

const cursorTransition = {
  off: { duration: 0.2 },
  title: { type: "spring", damping: 8, stiffness: 80 },
  subtitle: { type: "spring", damping: 10, stiffness: 90 },
} as const;

const followSpring = { stiffness: 220, damping: 28, mass: 0.5 };

const ENTER_DELAY = 70;
const LEAVE_DELAY = 90;

const floatingCards = [
  {
    video: "/videos/game-bg-9.mp4",
    rotate: 16,
    box: "left-2 top-40 h-[250px] sm:h-[310px]",
    focus: "object-bottom",
  },
  {
    video: "/videos/game-bg-6.mp4",
    rotate: -14,
    box: "right-2 top-40 h-[250px] sm:top-60 sm:h-[310px]",
    focus: "object-bottom",
  },
  {
    video: "/videos/game-bg-7.mp4",
    rotate: 20,
    box: "-right-8 top-[600px] h-[200px] sm:top-[700px] sm:h-[250px] md:top-[800px] md:h-[310px] lg:top-[1150px]",
    focus: "object-center",
  },
  {
    video: "/videos/game-bg-8.mp4",
    rotate: -25,
    box: "-left-24 top-[500px] h-[200px] sm:top-[600px] sm:h-[250px] md:top-[700px] md:h-[310px] lg:top-[1050px]",
    focus: "object-center",
  },
];

const FloatingCard = memo(
  ({
    scrollY,
    video,
    rotate,
    box,
    focus,
  }: {
    scrollY: MotionValue<number>;
    video: string;
    rotate: number;
    box: string;
    focus: string;
  }) => {
    const y = useTransform(scrollY, (value) => value * -1.2);

    return (
      <motion.div
        aria-hidden="true"
        style={{ y, rotate }}
        className={`glass absolute hidden w-[90%] max-w-[360px] cursor-pointer rounded-box p-5 will-change-transform md:block md:opacity-50 lg:opacity-75 xl:opacity-100 ${box}`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-box">
          <BackgroundVideo src={video} className={focus} />
        </div>
      </motion.div>
    );
  }
);
FloatingCard.displayName = "FloatingCard";

const Header = () => {
  const [cursorMode, setCursorMode] = useState<CursorMode>("off");
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const cursorX = useSpring(pointerX, followSpring);
  const cursorY = useSpring(pointerY, followSpring);
  const { scrollY } = useScroll();
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  const track = useCallback(
    (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    },
    [pointerX, pointerY]
  );

  const schedule = (mode: CursorMode, delay: number) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCursorMode(mode), delay);
  };

  const hover = (mode: CursorMode) => (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    if (cursorMode === "off") {
      cursorX.jump(event.clientX);
      cursorY.jump(event.clientY);
    }
    track(event);
    schedule(mode, ENTER_DELAY);
  };

  const leave = () => schedule("off", LEAVE_DELAY);

  return (
    <div className="relative w-full overflow-x-clip">
      {floatingCards.map((card) => (
        <FloatingCard key={card.video} scrollY={scrollY} {...card} />
      ))}

      <div className="hero pb-8">
        <div className="hero-content w-full text-center text-neutral-content">
          <motion.div
            aria-hidden="true"
            initial={{ scale: 0 }}
            animate={{ scale: cursorScale[cursorMode] }}
            transition={cursorTransition[cursorMode]}
            style={{
              x: cursorX,
              y: cursorY,
              width: CURSOR_SIZE,
              height: CURSOR_SIZE,
              marginLeft: -CURSOR_SIZE / 2,
              marginTop: -CURSOR_SIZE / 2,
            }}
            className="pointer-events-none fixed left-0 top-0 rounded-full bg-white opacity-70 mix-blend-difference"
          />
          <div className="w-full" onPointerMove={track}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  type: "spring",
                  damping: 4,
                  stiffness: 100,
                },
              }}
              viewport={{ once: true }}
              className="m-auto w-fit cursor-none"
            >
              <h1
                className="font-Sofadi-One text-7xl font-bold lg:text-9xl"
                onPointerEnter={hover("title")}
                onPointerLeave={leave}
              >
                Tinesh Warake
              </h1>
            </motion.div>
            <div className="m-auto w-fit cursor-none">
              <p
                className="font-Sofadi-One text-2xl font-medium tracking-widest sm:text-4xl"
                onPointerEnter={hover("subtitle")}
                onPointerLeave={leave}
              >
                Coding the Future: Full-Stack
              </p>
            </div>
            <div className="m-auto mb-8 w-fit cursor-none">
              <p
                className="mb-5 font-Sofadi-One text-2xl font-medium tracking-widest sm:text-4xl"
                onPointerEnter={hover("subtitle")}
                onPointerLeave={leave}
              >
                Developer at Work
              </p>
            </div>

            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3 px-4 sm:gap-4 md:gap-1">
              {contacts.map((contact) => (
                <Contacts key={contact.name} contact={contact} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
