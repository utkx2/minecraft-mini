import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
import { useStore } from "../hooks/useStore";

export const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0]
    }));
    const [addCube] = useStore((state) => [state.addCube]);
    groundTexture.repeat.set(100, 100);
    return (
        <mesh ref={ref} onClick={(element) => {
            element.stopPropagation();
            const [x, y, z] = Object.values(element.point).map(val => Math.ceil(val));
            addCube(x, y, z);
        }}>
            <planeBufferGeometry attach="geometry" args={[100, 100]}></planeBufferGeometry>
            <meshStandardMaterial attach="material" map={groundTexture}></meshStandardMaterial>
        </mesh>
    )
};
