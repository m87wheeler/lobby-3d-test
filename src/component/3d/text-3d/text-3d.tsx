import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import helvetiker from "three/examples/fonts/helvetiker_regular.typeface.json";

const Text3D = () => {
  extend({ TextGeometry });

  const helvetikerRegular = new FontLoader().parse(helvetiker);
  console.log("helvetiker regular ->", helvetikerRegular);

  const textOptions = {
    font: helvetikerRegular,
    size: 0.5,
    height: 0.2,
  };

  return (
    <mesh position={[0, 2, 0]} rotation={[0, 0, 0]}>
      {/** @ts-ignore */}
      <textGeometry attach="geometry" args={["Sponsors", textOptions]} />
      <meshLambertMaterial attach="material" color={0x444444} />
    </mesh>
  );
};

export default Text3D;
