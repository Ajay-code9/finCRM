import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

let dataNetworkEngineInitialized = false;

export function DataNetworkParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (dataNetworkEngineInitialized) {
      setReady(true);
      return;
    }

    let cancelled = false;

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      if (!cancelled) {
        dataNetworkEngineInitialized = true;
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
          value: 60,
          density: { enable: true, area: 900 },
        },
        color: {
          value: ["#a855f7", "#22d3ee", "#38bdf8"],
        },
        shape: {
          type: ["circle", "triangle"],
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 1, max: 3 },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#4f46e5",
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.45,
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
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 120,
            duration: 0.3,
          },
        },
      },
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: { value: 36 },
              links: { distance: 120 },
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
      id="data-network-particles"
      className="absolute inset-0 pointer-events-none opacity-75"
      options={options}
    />
  );
}

