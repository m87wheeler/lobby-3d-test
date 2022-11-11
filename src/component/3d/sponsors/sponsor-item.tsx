import { useTexture } from "@react-three/drei";
import * as React from "react";
import { animated, useSpring, config } from "@react-spring/three";

type Vector3Type = [number, number, number];

type Props = {
  textureSrc: string;
  position: Vector3Type;
  rotation?: Vector3Type;
};

const SponsorItem = ({ textureSrc, position, rotation = [0, 0, 0] }: Props) => {
  const [hovered, setHovered] = React.useState(false);
  const { scale: springScale } = useSpring({
    scale: hovered ? 1.5 : 1,
    config: config.wobbly,
  });

  const texture = useTexture(textureSrc);
  texture.repeat.set(1, 2);
  texture.offset.set(0, -0.5);

  React.useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <animated.mesh
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={springScale}
    >
      {/* <planeBufferGeometry args={[1.5, 0.75]} /> */}
      <circleBufferGeometry args={[0.75, 32]} />
      <meshBasicMaterial map={texture} />
    </animated.mesh>
  );
};

export default SponsorItem;
