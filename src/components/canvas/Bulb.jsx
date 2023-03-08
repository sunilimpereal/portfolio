import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Bulb = () => {
    const bulb = useGLTF("./bulb/scene.gltf");

    return (
        <primitive object={bulb.scene} scale={2.5} position-y={0} rotation-y={0} />
    );
};

const BulbCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Bulb />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default BulbCanvas;
