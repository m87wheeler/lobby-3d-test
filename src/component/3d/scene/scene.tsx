import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export default function Scene() {
  const texture = useTexture("/assets/360.jpeg");
  // texture.mapping = THREE.EquirectangularReflectionMapping;
  // texture.encoding = THREE.sRGBEncoding;
  // texture.minFilter = texture.magFilter = THREE.LinearFilter;

  return (
    <mesh>
      <sphereBufferGeometry args={[Math.PI * 2, 32, 32]} />
      <meshPhysicalMaterial side={THREE.BackSide} map={texture} />
    </mesh>
  );
}
