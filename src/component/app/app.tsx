import React from "react";
import { css } from "styled-components";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { GlobalReset } from "@m87wheeler/sc-reset";
import { Hotspot, Scene } from "../3d";
import { Chat, RoomModal, Stream } from "../2d";
import { useAppStore } from "../../stores/app-store";
import LoadingScreen from "../3d/loading-screen/loading-screen";
import Sponsors from "../3d/sponsors/sponsors";

export default function App() {
  const { loading, hotspots } = useAppStore();

  return (
    <>
      <GlobalReset
        vars={css`
          :root {
            --color-primary: 221 87 28;
            --video-width: clamp(20rem, 30vw, 40rem);
            --font-size-md: clamp(0.75rem, 0.7rem + 0.25vw, 1rem);
          }
          canvas {
            width: 100vw;
            height: 100vh;
          }
        `}
      />

      {!loading && (
        <>
          <Stream />
          <Chat />
          <RoomModal />
        </>
      )}
      <Canvas>
        <React.Suspense fallback={<></>}>
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              <Sponsors />
              <Scene />
              {hotspots.map(({ id, position, scale, properties }) => (
                <Hotspot
                  key={id}
                  id={id}
                  position={position}
                  scale={scale}
                  room={properties}
                />
              ))}
            </>
          )}
        </React.Suspense>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight />
        <pointLight intensity={0.5} />
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
}
