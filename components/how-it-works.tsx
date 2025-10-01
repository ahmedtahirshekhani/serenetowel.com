"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProductsSection() {
  const products = [
    {
      name: "Towels",
      id: "towels", // ✅ anchor id
      image: "/images/towels.png",
      description: (
        <>
          <p className="mb-4">
            Serene Towels stands among the leading exporters of terry products
            from Pakistan to international markets. We specialize in crafting
            premium-quality towels and lightweight healthcare textiles, serving
            a diverse global clientele. Our products are trusted by renowned
            hotels and healthcare institutions across North America and beyond.
          </p>
          <p className="mb-4">
            Our wide-ranging collection includes towels, bathrobes, bath mats,
            slippers, kitchen and tea towels, bedding, baby essentials, and
            waffle weaves. This versatile portfolio allows us to meet the
            demands of different markets worldwide, consistently delivering
            reliable and high-standard products.
          </p>
          <p>
            With a dedicated in-house design team, Serene Towels launches fresh
            collections every year, introducing innovative designs aligned with
            evolving consumer preferences. From sustainable and eco-conscious
            options to ultra-soft, highly absorbent cotton ranges, we ensure
            that every product combines functionality with elegance.
          </p>

          {/* Two image placeholders */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Image
              src="/images/towels1.png"
              alt="Towel Placeholder 1"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-80"
            />
            <Image
              src="/images/towels2.png"
              alt="Towel Placeholder 2"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-80"
            />
          </div>
        </>
      ),
    },
    {
      name: "Bathrobes",
      id: "bathrobes", // ✅ anchor id
      image: "/images/bathrobes.png",
      description: (
        <>
          <h4 className="font-semibold italic mb-2">
            Comfortable, Cozy, and Cotton-Carefree
          </h4>
          <p className="mb-4">
            Serene Towels is recognized as one of Pakistan’s premier bathrobe
            manufacturers, delivering superior craftsmanship through advanced
            production processes and a fully integrated setup that guarantees
            excellence in every piece.
          </p>
          <p className="mb-4">
            We take pride in offering a wide range of specialized bathrobe
            designs, including Jacquard Bathrobes, Yarn-Dyed Bathrobes, and
            Waffle Bathrobes, each tailored to meet the diverse needs of our
            global clients.
          </p>
          <p className="mb-4">
            Our strict quality assurance standards and streamlined operations
            ensure that every order maintains consistent quality, providing
            customers with confidence and ease of collaboration.
          </p>
          <p>
            As an active supporter of sustainable initiatives such as the Better
            Cotton Initiative, Serene Towels is committed to exploring
            innovative and eco-friendly approaches, making luxury both
            responsible and renewable.
          </p>

          {/* Two image placeholders */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Image
              src="/images/bathrobes1.png"
              alt="Bathrobe Placeholder 1"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-80"
            />
            <Image
              src="/images/bathrobes2.png"
              alt="Bathrobe Placeholder 2"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-80"
            />
          </div>
        </>
      ),
    },
    {
      name: "Bath Mats",
      id: "bath-mats", // ✅ anchor id
      image: "/images/bathmats.png",
      description: (
        <>
          <h4 className="font-semibold italic mb-2">
            Step into Comfort, Step into Luxury
          </h4>
          <p className="mb-4">
            For over 35 years, Hasham Towel has been a trusted name in the home
            textile industry, leading the way in innovative bath mat designs and
            uncompromising quality.
          </p>
          <p className="mb-4">
            We have proudly met global demands for premium cotton bath mats with
            consistency and dedication, ensuring comfort and durability in every
            piece.
          </p>
          <p>
            From households to hospitality, Hasham Towel continues to be part of
            countless journeys, helping create luxurious and lasting experiences
            for customers worldwide.
          </p>

          {/* Two image placeholders */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Image
              src="/images/bathmats1.png"
              alt="Bath Mat Placeholder 1"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-80"
            />
            <Image
              src="/images/bathmats2.png"
              alt="Bath Mat Placeholder 2"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-80"
            />
          </div>
        </>
      ),
    },
    {
      name: "Made-ups",
      id: "made-ups", // ✅ anchor id
      image: "/images/madeups.png",
      description: (
        <>
          <h4 className="font-semibold italic mb-2">
            Softness That Lasts, Elegance That Defines
          </h4>
          <p className="mb-4">
            Serene Towels presents a refined collection of <b>Terry Made-ups</b>,
            designed to bring together the comfort of premium cotton and the
            excellence of skilled craftsmanship. Our range includes bed sheets,
            pillow covers, cushion covers, and other home essentials—each woven
            with high-quality terry fabric for unmatched softness, durability,
            and absorbency.
          </p>
          <p>
            With innovative designs and a strong focus on detail, Serene Towels
            ensures that every terry made-up product transforms spaces into
            havens of comfort and style. Whether for homes, hotels, or
            institutions, our made-ups are tailored to deliver a touch of luxury
            and a long-lasting experience of serenity.
          </p>

          {/* Two image placeholders */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Image
              src="/images/madeups1.png"
              alt="Made-ups Placeholder 1"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-80"
            />
            <Image
              src="/images/madeups2.png"
              alt="Made-ups Placeholder 2"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-80"
            />
          </div>
        </>
      ),
    },
  ];

  const [selected, setSelected] = useState<number | null>(null);

  // ✅ Open accordion if hash in URL matches a product ID
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const index = products.findIndex((p) => p.id === hash);
      if (index !== -1) {
        setSelected(index);
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    };

    handleHashChange(); // run on mount
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [products]);

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Products
        </h2>

        {/* Product Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              id={product.id} // ✅ anchor id here
              className="relative cursor-pointer group"
              onClick={() => setSelected(index)}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="rounded-lg object-cover w-full h-48 md:h-64 group-hover:opacity-90 transition"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                <span className="text-white text-lg md:text-xl font-semibold">
                  {product.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Section */}
        <AnimatePresence mode="wait">
          {selected !== null && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              className="mt-10 bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto border border-gray-200"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {products[selected].name}
              </h3>

              {/* Render description */}
              <div className="text-gray-700 leading-relaxed">
                {products[selected].description}
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
