import { dirtImg, grassImg, glassImg, woodImg, logImg } from "./images";
import * as THREE from "three";
import { NearestFilter } from "three";

const dirtTexture = new THREE.TextureLoader().load(dirtImg);
const grassTexture = new THREE.TextureLoader().load(grassImg);
const glassTexture = new THREE.TextureLoader().load(glassImg);
const woodTexture = new THREE.TextureLoader().load(woodImg);
const logTexture = new THREE.TextureLoader().load(logImg);
const groundTexture = new THREE.TextureLoader().load(grassImg);

dirtTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = THREE.RepeatWrapping;
groundTexture.wrapT = THREE.RepeatWrapping;

export { dirtTexture, grassTexture, glassTexture, woodTexture, logTexture, groundTexture };