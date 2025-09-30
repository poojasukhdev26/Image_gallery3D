// SpectacularGallery.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Stars } from "@react-three/drei";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ================= IMAGE DATA =================
const images = [
  // 🌿 Nature
  { src: "/gallery/nature1_0.jpg", category: "Nature" },
  { src: "/gallery/nature1_1.jpg", category: "Nature" },
  { src: "/gallery/nature1_2.jpg", category: "Nature" },
  { src: "/gallery/nature1_3.jpg", category: "Nature" },
  { src: "/gallery/nature1_4.jpg", category: "Nature" },
  { src: "/gallery/nature1_5.jpg", category: "Nature" },
  { src: "/gallery/nature1_6.jpg", category: "Nature" },
  { src: "/gallery/nature1_7.jpg", category: "Nature" },
  { src: "/gallery/nature1_8.jpg", category: "Nature" },
  { src: "/gallery/nature1_9.jpg", category: "Nature" },
  { src: "/gallery/nature1_10.jpg", category: "Nature" },
  { src: "/gallery/nature1_11.jpg", category: "Nature" },
  { src: "/gallery/nature1_12.jpg", category: "Nature" },
  { src: "/gallery/nature2_0.jpg", category: "Nature" },
  { src: "/gallery/nature2_1.jpg", category: "Nature" },
  { src: "/gallery/nature2_2.jpg", category: "Nature" },
  { src: "/gallery/nature2_3.jpg", category: "Nature" },
  { src: "/gallery/nature2_4.jpg", category: "Nature" },
  { src: "/gallery/nature2_5.jpg", category: "Nature" },
  { src: "/gallery/nature2_6.jpg", category: "Nature" },
  { src: "/gallery/nature2_7.jpg", category: "Nature" },

  // ✈️ Travel
  { src: "/gallery/travel1_0.jpg", category: "Travel" },
  { src: "/gallery/travel1_1.jpg", category: "Travel" },
  { src: "/gallery/travel1_2.jpg", category: "Travel" },
  { src: "/gallery/travel1_3.jpg", category: "Travel" },
  { src: "/gallery/travel1_4.jpg", category: "Travel" },
  { src: "/gallery/travel1_5.jpg", category: "Travel" },
  { src: "/gallery/travel1_6.jpg", category: "Travel" },
  { src: "/gallery/travel1_7.jpg", category: "Travel" },
  { src: "/gallery/travel1_8.jpg", category: "Travel" },
  { src: "/gallery/travel2_0.jpg", category: "Travel" },
  { src: "/gallery/travel2_1.jpg", category: "Travel" },
  { src: "/gallery/travel2_2.jpg", category: "Travel" },
  { src: "/gallery/travel2_3.jpg", category: "Travel" },
  { src: "/gallery/travel2_4.jpg", category: "Travel" },
  { src: "/gallery/travel2_5.jpg", category: "Travel" },
  { src: "/gallery/travel2_6.jpg", category: "Travel" },

  // 🎨 Art
  { src: "/gallery/art1_0.jpg", category: "Art" },
  { src: "/gallery/art1_1.jpg", category: "Art" },
  { src: "/gallery/art1_2.jpg", category: "Art" },
  { src: "/gallery/art1_3.jpg", category: "Art" },
  { src: "/gallery/art1_4.jpg", category: "Art" },
  { src: "/gallery/art1_5.jpg", category: "Art" },
  { src: "/gallery/art1_6.jpg", category: "Art" },
  { src: "/gallery/art1_7.jpg", category: "Art" },
  { src: "/gallery/art2_0.jpg", category: "Art" },
  { src: "/gallery/art2_1.jpg", category: "Art" },
  { src: "/gallery/art2_2.jpg", category: "Art" },
  { src: "/gallery/art2_3.jpg", category: "Art" },
  { src: "/gallery/art2_4.jpg", category: "Art" },
  { src: "/gallery/art2_5.jpg", category: "Art" },
  { src: "/gallery/art2_6.jpg", category: "Art" },
];

const categories = ["All", "Nature", "Travel", "Art"];

// ================= 3D SHAPES =================
function FloatingSphere({ position, color, size = 0.6 }) {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
      <mesh position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
      </mesh>
    </Float>
  );
}

function RotatingCube({ position, color, size = 0.8 }) {
  return (
    <Float speed={2.5} rotationIntensity={3} floatIntensity={1.2}>
      <mesh position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position, color }) {
  return (
    <Float speed={2} rotationIntensity={2.5} floatIntensity={1}>
      <mesh position={position}>
        <torusGeometry args={[0.6, 0.2, 16, 100]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} />
      </mesh>
    </Float>
  );
}

function FloatingCone({ position, color }) {
  return (
    <Float speed={2} rotationIntensity={2.5} floatIntensity={1.2}>
      <mesh position={position}>
        <coneGeometry args={[0.5, 1.2, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </Float>
  );
}

// ================= MAIN COMPONENT =================
export default function SpectacularGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* 3D BACKGROUND */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -3, 5]} intensity={0.5} />
        <Stars radius={50} depth={50} count={1500} factor={4} saturation={0} fade />

        <FloatingSphere position={[-2, 1, -2]} color="hotpink" />
        <FloatingSphere position={[2, -1, -3]} color="cyan" />
        <RotatingCube position={[0, 2, -4]} color="orange" />
        <FloatingSphere position={[-3, -2, -5]} color="lime" size={0.5} />
        <FloatingSphere position={[3, 2, -6]} color="violet" size={0.7} />
        <FloatingTorus position={[1, -2, -4]} color="gold" />
        <FloatingCone position={[-1, 2, -3]} color="deepskyblue" />
        <RotatingCube position={[4, -1, -5]} color="red" size={0.6} />

        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.3} />
      </Canvas>

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -40, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
        className="text-5xl md:text-6xl font-extrabold text-center pt-16 text-yellow-400 drop-shadow-xl"
      >
        🌌 My Animated Gallery
      </motion.h2>

      {/* CATEGORY BUTTONS */}
      <motion.div className="flex gap-4 mb-10 mt-8 flex-wrap justify-center">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-yellow-400 text-black shadow-lg scale-105"
                : "bg-white/20 hover:bg-white/40"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* MAIN GALLERY - 5 IMAGES PER ROW */}
      <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-7xl mx-auto px-6 pb-20">
        <AnimatePresence>
          {filteredImages.map((img, idx) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              className="relative cursor-pointer group overflow-hidden border-4 border-white rounded-xl shadow-lg aspect-[4/3]"
            >
              <motion.img
                src={img.src}
                alt={img.category}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-black/50 opacity-0 flex items-center justify-center"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-white text-sm md:text-lg font-semibold">{img.category}</p>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
