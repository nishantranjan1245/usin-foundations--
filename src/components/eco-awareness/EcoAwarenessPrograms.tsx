import { motion } from "framer-motion";
import { Palette, Users, Recycle, Sprout } from "lucide-react";
import muralPainting from "@/assets/eco-mural-painting.jpg";
import villageMeeting from "@/assets/eco-village-meeting.jpg";
import womenWorkshop from "@/assets/eco-women-workshop.jpg";
import streetCampaign from "@/assets/eco-street-campaign.jpg";

const programs = [
  {
    icon: Palette,
    title: "Green Art & Mural Campaigns",
    description:
      "Students and artists paint environmental murals across schools, villages, and public spaces — turning walls into powerful messages about nature conservation and sustainability.",
    image: muralPainting,
    stats: "500+ Murals",
  },
  {
    icon: Users,
    title: "Village Eco-Awareness Meets",
    description:
      "Community gatherings where villagers learn about waste segregation, composting, water conservation, and chemical-free farming through interactive demonstrations.",
    image: villageMeeting,
    stats: "800+ Villages",
  },
  {
    icon: Sprout,
    title: "Women's Green Livelihoods",
    description:
      "Training women's self-help groups in organic composting, vermicompost production, and sustainable agriculture — creating eco-friendly income sources.",
    image: womenWorkshop,
    stats: "5,000+ Women",
  },
  {
    icon: Recycle,
    title: "Youth Eco-Campaigns",
    description:
      "Student-led street rallies, nukkad naataks (street plays), and social media campaigns spreading awareness about pollution, deforestation, and climate action.",
    image: streetCampaign,
    stats: "25,000+ Youth",
  },
];

const EcoAwarenessPrograms = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-2 block">
            Our Programs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How We Spread <span className="text-accent">Eco-Awareness</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            From village-level workshops to youth-driven campaigns, our 
            programs make environmental awareness accessible and actionable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-border"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                  {program.stats}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <program.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {program.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoAwarenessPrograms;
