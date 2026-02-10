import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import volunteersImg from "@/assets/volunteers-planting.jpg";
import communityImg from "@/assets/community-drive.jpg";
import saplingsImg from "@/assets/saplings-field.jpg";

const stories = [
  {
    image: volunteersImg,
    imageAlt: "Volunteers planting trees in a rural area",
    tag: "Tree Plantation",
    title: "Restoring Green Cover in Rural Rajasthan",
    description:
      "In 2023, USIN Foundation organized a massive plantation drive in drought-affected villages of Rajasthan, planting 2,000+ native trees. Today, these trees are transforming the landscape and providing shade to local communities.",
    stats: [
      { value: "2,000+", label: "Trees Planted" },
      { value: "5", label: "Villages Impacted" },
    ],
  },
  {
    image: communityImg,
    imageAlt: "Community gathering for eco-awareness",
    tag: "Water Conservation",
    title: "Saving Rivers, Saving Lives in Maharashtra",
    description:
      "Our river cleaning campaign in Maharashtra mobilized 500+ volunteers across 3 districts. Together, we removed tons of waste, installed rainwater harvesting systems, and trained communities in water conservation techniques.",
    stats: [
      { value: "500+", label: "Volunteers" },
      { value: "3", label: "Districts Covered" },
    ],
  },
  {
    image: saplingsImg,
    imageAlt: "Young saplings growing in a nursery",
    tag: "Eco-Awareness",
    title: "Building Eco-Leaders in Delhi NCR Schools",
    description:
      "Our school awareness program in Delhi NCR reached 1,500+ students across 30 schools. Students participated in tree plantation, waste management workshops, and environmental art competitions.",
    stats: [
      { value: "1,500+", label: "Students Reached" },
      { value: "30", label: "Schools Covered" },
    ],
  },
];

const ImpactStories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Real Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Stories of <span className="text-gradient-green italic">Change</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Behind every statistic is a real story of transformation. 
            Here are some of our most impactful projects.
          </p>
        </motion.div>

        <div className="space-y-16">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * index }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center`}
            >
              {/* Image */}
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    className="w-full h-[350px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-gold-foreground text-xs font-semibold">
                    {story.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {story.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {story.description}
                </p>
                <div className="flex gap-8 mb-6">
                  {story.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-2xl sm:text-3xl font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
