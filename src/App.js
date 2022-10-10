import React from "react";
import { User } from "./components/User";
import { Ground } from "./components/Ground";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Pov } from "../src/components/Pov";
import { Cubes } from "./components/Cubes";
import { TextureSelector } from "./components/TextureSelector";
import { Menu } from "./components/Menu";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]}></Sky>
        <ambientLight intensity={0.5}></ambientLight>
        <Pov></Pov>
        <Physics>
          <User></User>
          <Cubes></Cubes>
          <Ground></Ground>
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
      <TextureSelector></TextureSelector>
      <Menu></Menu>
    </>
  );
}

export default App;
