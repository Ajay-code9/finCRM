import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

let engineInitialized = false;

export function SectionParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (engineInitialized) {
      setReady(true);
      return;
    }

    let cancelled = false;

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      if (!cancelled) {
        engineInitialized = true;
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
          value: 90,
          density: { enable: true, area: 700 },
        },
        color: { value: ["#f9fafb", "#e5e7eb"] },
        links: {
          enable: true,
          distance: 130,
          color: "#e5e7eb",
          opacity: 0.3,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          enable: true,
          speed: 0.7,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "bounce" },
        },
        opacity: {
          value: 0.45,
        },
        size: {
          value: { min: 1.2, max: 3 },
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
            distance: 120,
            duration: 0.4,
          },
        },
      },
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: {
                value: 55,
              },
              links: {
                distance: 110,
                opacity: 0.28,
              },
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
      id="section-particles"
      className="absolute inset-0 pointer-events-none opacity-70"
      options={options}
    />
  );
}

