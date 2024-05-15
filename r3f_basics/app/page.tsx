'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
export default function Home() {
    return (
		<Canvas >
		<directionalLight position={[0, 0, 3]} intensity={1} />
		<mesh position={[1, 0, 0]}>
			<boxGeometry />
			<meshStandardMaterial  color={'yellow'} />
		</mesh>
		<mesh position={[-1, 0, 0]}>
			<boxGeometry />
			<meshStandardMaterial  color={'red'} />
		</mesh>
		<mesh position={[-1, 2, 0]}>
			<boxGeometry />
			<meshStandardMaterial  color={'red'} />
		</mesh>
		<mesh position={[1, 2, 0]}>
			<boxGeometry />
			<meshStandardMaterial  color={'red'} />
		</mesh>
		<OrbitControls />
	</Canvas>
    );
}
