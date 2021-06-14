import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { proxy } from "valtio";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";
// COMPONENTS
import Picker from "./components/picker";

// MODEL
import Shoe from "./components/Shoe-draco";
import "./App.css";

export const colorState = proxy({
  current: null,
  items: {
    laces: "#ffffff",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
  },
});

function App() {
  return (
    <div className="app">
      <Picker colorState={colorState} />
      <div className="model-viewer">
        <Canvas shadowMap camera={{ position: [0.5, 1, 0.7] }}>
          <ambientLight intensity={0.5} />
          <spotLight intensity={0.3} position={[5, 20, 20]} />
          <Suspense fallback={null}>
            <Shoe colorState={colorState} />
            <Environment files="royal_esplanade_1k.hdr" />
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -0.8, 0]}
              opacity={0.25}
              width={10}
              height={10}
              blur={2}
              far={1}
            />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
