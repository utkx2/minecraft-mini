import { useThree, useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import * as react from "react";
import * as THREE from "three";
import { KeyBoard } from "../hooks/KeyBoard";

const JUMP_INTENSITY = 5;
const SPEED = 4;

export const User = () => {
    const { moveForward, moveBackward, moveLeft, moveRight, jump } = KeyBoard();

    const { camera } = useThree();
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0, 5, 0]
    }));
    const userVelocity = react.useRef([0, 0, 0]);
    react.useEffect(() => {
        api.velocity.subscribe((v) => { userVelocity.current = v })
    }, [api.velocity]);
    const userPosition = react.useRef([0, 0, 0]);
    react.useEffect(() => {
        api.position.subscribe((p) => { userPosition.current = p })
    }, [api.position]);
    useFrame(() => {
        camera.position.copy(new THREE.Vector3(userPosition.current[0], userPosition.current[1], userPosition.current[2]));

        const direction = new THREE.Vector3();

        const frontVector = new THREE.Vector3(
            0, 0, (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
        );

        const sideVector = new THREE.Vector3(
            (moveLeft ? 1 : 0) - (moveRight ? 1 : 0), 0, 0
        );

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED)
            .applyEuler(camera.rotation);
        api.velocity.set(direction.x, userVelocity.current[1], direction.z);

        if (jump && Math.abs(userVelocity.current[1] < 0.05)) {
            api.velocity.set(userVelocity.current[0], JUMP_INTENSITY, userVelocity.current[2]);
        }
    })
    return (
        <mesh ref={ref}></mesh>
    );
};
