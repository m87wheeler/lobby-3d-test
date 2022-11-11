import { Text } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import * as React from "react";
import { animated, useSpring, config } from "@react-spring/three";
import { Group } from "three";
import { RoomPropertiesType, useAppStore } from "../../../stores/app-store";

type Props = {
  id: number;
  scale?: number;
  position?: [number, number, number];
  room: RoomPropertiesType;
};

const Hotspot = ({ id, scale = 1, position = [0, 0, 0], room }: Props) => {
  const { selectedRoom, handleSelectedRoom } = useAppStore();
  const ref = React.useRef<Group>(null);
  const [hovered, setHovered] = React.useState(false);
  const { scale: springScale } = useSpring({
    scale: selectedRoom === id ? 1.5 : 1,
    config: config.wobbly,
  });

  useFrame(() => {
    if (!ref?.current) return;
    ref.current.rotation.z += 0.01;
  });

  React.useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const capArgs = React.useMemo(() => {
    return [0.4 * scale, 0.4 * scale, 0.04 * scale, 32];
  }, [scale]);

  const centerArgs = React.useMemo(() => {
    return [0.5 * scale, 0.5 * scale, 0.04 * scale, 32];
  }, [scale]);

  const handleClick = React.useCallback(
    (e: ThreeEvent<MouseEvent>) => {
      e.stopPropagation();
      handleSelectedRoom(selectedRoom === id ? null : id);
    },
    [id, selectedRoom]
  );

  return (
    <animated.group
      ref={ref}
      position={position}
      rotation={[Math.PI / 2, 0, 0]}
      scale={springScale}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/** front cap */}
      <mesh position={[0, 0.04 * scale, 0]}>
        <cylinderBufferGeometry args={capArgs} />
        <meshPhongMaterial color={0xdd571c} />
      </mesh>
      {/** center */}
      <mesh position={[0, 0, 0]}>
        <cylinderBufferGeometry args={centerArgs} />
        <meshPhongMaterial color={0x777777} />
      </mesh>
      {/** back cap */}
      <mesh position={[0, -0.04 * scale, 0]}>
        <cylinderBufferGeometry args={capArgs} />
        <meshPhongMaterial color={0xdd571c} />
      </mesh>
      <group>
        <Text
          color={0x000000}
          fontSize={0.2 * scale}
          rotation={[(Math.PI / 2) * -1, 0, 0]}
          position={[0, 0.04 * 3 * scale, 0]}
        >
          {room.title}
        </Text>
      </group>
    </animated.group>
  );
};

export default Hotspot;
