
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, Decal, useTexture, } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const SocialBall = (props) => {
    const ref = useRef();
    const [decal] = useTexture([props]);
    const [sphere] = useState(() => random.inSphere(new Float32Array(100), { radius: 10.2 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;

    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color='#f272c8'
                    size={2.82}
                    sizeAttenuation={true}
                    depthWrite={false}
                >sdfsdfsdf</PointMaterial>
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />
            </Points>
        </group>
    );

};
const SocailCanvas = () => {
    return (
        <div className='w-full h-auto absolute inset-0 z-[-1]'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <SocialBall />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
};

export default SocailCanvas;
