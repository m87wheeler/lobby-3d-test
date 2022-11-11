import { useFrame } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";
import { Group } from "three";
import SponsorItem from "./sponsor-item";

type Props = {};

const TEMP_SPONSORS = [
  { id: 1, name: "Glisser", logo: "/assets/glisser.png" },
  { id: 2, name: "Barclays", logo: "/assets/barclays.png" },
  { id: 3, name: "EY", logo: "/assets/ey.png" },
  { id: 4, name: "Glisser", logo: "/assets/glisser.png" },
  { id: 5, name: "Barclays", logo: "/assets/barclays.png" },
  { id: 6, name: "EY", logo: "/assets/ey.png" },
  { id: 7, name: "Glisser", logo: "/assets/glisser.png" },
  { id: 8, name: "Barclays", logo: "/assets/barclays.png" },
  { id: 9, name: "EY", logo: "/assets/ey.png" },
];

const Sponsors = ({}: Props) => {
  const groupRef = React.useRef<Group | null>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.00025;
  });

  return (
    <group ref={groupRef}>
      {TEMP_SPONSORS.map((sponsor, i) => (
        <group
          key={sponsor.id}
          position={[0, 1.5, 0]}
          rotation={[0, ((Math.PI * 2) / TEMP_SPONSORS.length) * i, 0]}
        >
          <SponsorItem
            textureSrc={sponsor.logo}
            position={[0, 0, -5.5]}
            rotation={[0.25, 0, 0]}
          />
        </group>
      ))}
    </group>
  );
};

export default Sponsors;
