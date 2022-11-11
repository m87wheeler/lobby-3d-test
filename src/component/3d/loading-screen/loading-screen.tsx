import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as React from "react";
import { Mesh } from "three";
import { useAppStore } from "../../../stores/app-store";

type Props = {};

const LoadingScreen = ({}: Props) => {
  const boxRef = React.useRef<Mesh | null>(null);
  const { handleLoading } = useAppStore();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      handleLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useFrame(() => {
    if (!boxRef?.current) return;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <group>
      <mesh>
        <planeBufferGeometry args={[10, 6]} />
        <meshBasicMaterial color={0x333333} />
      </mesh>
      <mesh ref={boxRef}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={0xdd571c} />
      </mesh>
      <Text color={0x000000} fontSize={0.15} position={[0, 0, 1]}>
        Loading...
      </Text>
    </group>
  );
};

export default LoadingScreen;
