import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

let techGridEngineInitialized = false;

export function TechGridParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (techGridEngineInitialized) {
      setReady(true);
      return;
    }

    let cancelled = false;

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      if (!cancelled) {
        techGridEngineInitialized = true;
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
          value: 55,
          density: { enable: true, area: 750 },
        },
        color: {
          value: ["#4b5563", "#64748b"],
        },
        shape: {
          type: "square",
        },
        opacity: {
          value: 0.7,
        },
        size: {
          value: { min: 1, max: 2 },
        },
        links: {
          enable: true,
          distance: 120,
          color: "#6366f1",
          opacity: 0.4,
          width: 1.1,
        },
        move: {
          enable: true,
          speed: 0.35,
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
            enable: true,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 110,
            links: {
              opacity: 0.4,
            },
          },
        },
      },
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: { value: 22 },
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
      id="tech-grid-particles"
      className="absolute inset-0 pointer-events-none opacity-70"
      options={options}
    />
  );
}

