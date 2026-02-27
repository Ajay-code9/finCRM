import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

let molecularEngineInitialized = false;

export function MolecularParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (molecularEngineInitialized) {
      setReady(true);
      return;
    }

    let cancelled = false;

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      if (!cancelled) {
        molecularEngineInitialized = true;
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
          value: 85,
          density: { enable: true, area: 800 },
        },
        color: {
          value: ["#c4b5fd", "#a855f7", "#f9fafb"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.75,
        },
        size: {
          value: { min: 1.2, max: 3 },
        },
        links: {
          enable: true,
          distance: 130,
          color: "#a855f7",
          opacity: 0.35,
          width: 1.2,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        collisions: {
          enable: true,
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 110,
            duration: 0.3,
          },
        },
      },
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: { value: 55 },
              links: { distance: 110 },
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
      id="molecular-particles"
      className="absolute inset-0 pointer-events-none opacity-80"
      options={options}
    />
  );
}

