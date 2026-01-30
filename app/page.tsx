'use client';

import { spring } from "animejs/easings/spring";
import { createDraggable } from "animejs/draggable";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    createDraggable('.Vincent', {
      container: [0, 0, 0, 0],
      releaseEase: spring({ bounce: 0.95, stiffness: 0.1, mass: 0.2, velocity: 20}),
    });
  })


  return (
    <>
      <main className="flex min-w-screen flex-col min-h-screen items-center align-center justify-between p-24">
        <div className="flex items-center align-center justify-center justify-content-center w-screen" style={{ height: '80vh' }}>
          <div className="Vincent w-32 h-32 text-5xl select-none cursor-pointer flex items-center justify-center text-white font-bold">
            Sleepbare Vincent
          </div>
        </div>
      </main>
    </>
  );
}