import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

let nebulaEngineInitialized = false;

export function NebulaParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (nebulaEngineInitialized) {
      setReady(true);
      return;
    }

    let cancelled = false;

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      if (!cancelled) {
        nebulaEngineInitialized = true;
        setReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const options = useMemo(
    () => ({
      background: { color: "transparent" },
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: 70,
          density: { enable: true, area: 900 },
        },
        color: {
          value: ["#f9fafb", "#c4b5fd", "#a5b4fc"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.6,
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.2,
            sync: false,
          },
        },
        size: {
          value: { min: 0.6, max: 2.2 },
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 0.25,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: false,
          },
          resize: true,
        },
      },
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: { value: 40 },
            },
          },
        },
      ],
    }),
    []
  );

  if (!ready) return null;

  return (
    <Particles
      id="nebula-particles"
      className="absolute inset-0 pointer-events-none opacity-80"
      options={options}
    />
  );
}

