import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export function HeroParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      if (!cancelled) {
        setReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: "transparent",
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: 45,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: ["#6d28d9", "#7c3aed", "#8b5cf6"],
        },
        links: {
          enable: true,
          distance: 140,
          color: "#8b5cf6",
          opacity: 0.18,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        opacity: {
          value: 0.35,
        },
        size: {
          value: { min: 1, max: 2.5 },
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
            distance: 130,
            links: {
              opacity: 0.3,
            },
          },
        },
      },
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: {
                value: 24,
              },
              links: {
                distance: 110,
                opacity: 0.16,
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
      id="hero-particles"
      className="absolute inset-0 -z-10"
      options={options}
    />
  );
}

