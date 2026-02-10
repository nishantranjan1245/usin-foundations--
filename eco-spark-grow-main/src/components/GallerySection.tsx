import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import volunteersImg from "@/assets/volunteers-planting.jpg";
import saplingsImg from "@/assets/saplings-field.jpg";
import ecoAwarenessImg from "@/assets/eco-education.jpg";
import banyanImg from "@/assets/banyan-tree.jpg";
import saveEarthImg from "@/assets/save-earth.jpg";
import womanGardeningImg from "@/assets/woman-gardening.jpg";
import elderTreeImg from "@/assets/elder-tree.jpg";
import communityDriveImg from "@/assets/community-drive.jpg";
import womenVolunteersImg from "@/assets/women-volunteers-planting.jpg";
import childrenPlantsImg from "@/assets/children-holding-plants.jpg";

const galleryImages = [
  { src: volunteersImg, alt: "Young volunteers planting trees together in rural India", caption: "Community Plantation Drive" },
  { src: saplingsImg, alt: "Farmer walking through sapling nursery at golden hour", caption: "Saplings Nursery Project" },
  { src: ecoAwarenessImg, alt: "School children holding potted plants in garden", caption: "Eco-Awareness Program" },
  { src: elderTreeImg, alt: "Elder sitting peacefully under a neem tree", caption: "Wisdom Under Trees" },
  { src: banyanImg, alt: "Peacock in golden morning light near ancient tree", caption: "Wildlife & Nature" },
  { src: womanGardeningImg, alt: "Young woman gardening in her terrace garden", caption: "Urban Green Living" },
  { src: saveEarthImg, alt: "Misty green river valley with terraced fields", caption: "Preserving Our Valleys" },
  { src: communityDriveImg, alt: "Large community group at tree plantation event", caption: "Together For Green India" },
  { src: womenVolunteersImg, alt: "Young women volunteers planting saplings in golden hour light", caption: "Women Leading Change" },
  { src: childrenPlantsImg, alt: "Smiling village children holding potted plants", caption: "Seeds of Tomorrow" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Our Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Moments of <span className="text-gradient-green italic">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into our drives, programs, and the beautiful green world we're building together.
          </p>
        </motion.div>

        {/* Masonry-style Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.caption}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                index === 0 || index === 3 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <div>
                  <p className="font-display text-lg font-bold text-primary-foreground">
                    {image.caption}
                  </p>
                  <p className="text-xs text-primary-foreground/70 mt-1">
                    USIN Foundation
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
