"use client";
import {
  memo,
  PointerEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { ISkills } from "../type";
import BackgroundVideo from "../ui/BackgroundVideo";
import CircularBar from "./CircularProgress";

interface Point {
  x: number;
  y: number;
}

const BUBBLE = 128;
const MIN_DISTANCE = BUBBLE + 8;
const ATTEMPTS = 300;
const RETRIES = 40;
const PUSH_RANGE = 120;
const PUSH_DISTANCE = 50;

const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);

const clamp = (value: number, max: number) => Math.max(0, Math.min(value, max));

const isFree = (point: Point, others: Point[], ignore = -1) =>
  others.every(
    (other, index) => index === ignore || distance(point, other) >= MIN_DISTANCE
  );

const scatterOnce = (count: number, maxX: number, maxY: number) => {
  const placed: Point[] = [];
  let packed = true;

  while (placed.length < count) {
    let best: Point = { x: 0, y: 0 };
    let bestGap = -1;

    for (let i = 0; i < ATTEMPTS && bestGap < MIN_DISTANCE; i++) {
      const candidate = { x: Math.random() * maxX, y: Math.random() * maxY };
      const gap = placed.reduce(
        (min, other) => Math.min(min, distance(candidate, other)),
        Infinity
      );
      if (gap > bestGap) {
        best = candidate;
        bestGap = gap;
      }
    }

    packed &&= bestGap >= MIN_DISTANCE;
    placed.push(best);
  }

  return { placed, packed };
};

const scatter = (count: number, width: number, height: number): Point[] => {
  const maxX = Math.max(0, width - BUBBLE);
  const maxY = Math.max(0, height - BUBBLE);
  let result = scatterOnce(count, maxX, maxY);

  for (let retry = 0; retry < RETRIES && !result.packed; retry++) {
    result = scatterOnce(count, maxX, maxY);
  }

  return result.placed;
};

const SkillSet = ({ skills }: { skills: ISkills[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodes = useRef<(HTMLDivElement | null)[]>([]);
  const positions = useRef<Point[]>([]);
  const pointer = useRef<Point>({ x: 0, y: 0 });
  const frame = useRef(0);

  const paint = useCallback((index: number) => {
    const node = nodes.current[index];
    const { x, y } = positions.current[index];
    if (node) node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }, []);

  const shuffle = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    positions.current = scatter(
      skills.length,
      container.clientWidth,
      container.clientHeight
    );
    positions.current.forEach((_, index) => paint(index));
  }, [skills.length, paint]);

  useLayoutEffect(() => {
    const setTransition = (value: string) =>
      nodes.current.forEach((node) => {
        if (node) node.style.transition = value;
      });

    setTransition("none");
    shuffle();
    let settle = requestAnimationFrame(() => {
      settle = requestAnimationFrame(() => setTransition(""));
    });

    return () => cancelAnimationFrame(settle);
  }, [shuffle]);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const repel = useCallback(() => {
    frame.current = 0;
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mouse = {
      x: pointer.current.x - rect.left,
      y: pointer.current.y - rect.top,
    };
    const maxX = container.clientWidth - BUBBLE;
    const maxY = container.clientHeight - BUBBLE;
    const current = positions.current;

    current.forEach((position, index) => {
      const dx = position.x + BUBBLE / 2 - mouse.x;
      const dy = position.y + BUBBLE / 2 - mouse.y;
      if (Math.hypot(dx, dy) >= PUSH_RANGE) return;

      const angle = Math.atan2(dy, dx);
      const next = {
        x: clamp(position.x + Math.cos(angle) * PUSH_DISTANCE, maxX),
        y: clamp(position.y + Math.sin(angle) * PUSH_DISTANCE, maxY),
      };

      if (isFree(next, current, index)) {
        current[index] = next;
        paint(index);
      }
    });
  }, [paint]);

  const onPointerMove = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    pointer.current = { x: event.clientX, y: event.clientY };
    if (!frame.current) frame.current = requestAnimationFrame(repel);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={onPointerMove}
      className="relative flex h-[550px] w-[1200px] items-center justify-center overflow-hidden rounded-box"
    >
      <BackgroundVideo src="/videos/game-bg-10.mp4" />

      <h2 className="btn glass z-30 cursor-default mt-2 border-solid bg-base-300/80 text-3xl opacity-90">
        My Tech Stack
      </h2>

      {skills.map((skill, index) => (
        <div
          key={skill.name}
          ref={(node) => {
            nodes.current[index] = node;
          }}
          className="absolute left-0 top-0 transition-transform duration-[400ms] ease-in-out will-change-transform"
        >
          <CircularBar data={skill} />
        </div>
      ))}
    </div>
  );
};

export default memo(SkillSet);
