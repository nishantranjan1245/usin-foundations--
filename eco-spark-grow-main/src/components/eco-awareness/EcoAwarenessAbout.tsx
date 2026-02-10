import { motion } from "framer-motion";
import { Lightbulb, Users, Megaphone, Heart } from "lucide-react";
import streetCampaign from "@/assets/eco-street-campaign.jpg";

const highlights = [
  {
    icon: Users,
    title: "Community Workshops",
    desc: "Interactive sessions on waste management, composting, and sustainable living practices.",
  },
  {
    icon: Megaphone,
    title: "Street Campaigns",
    desc: "Youth-led awareness rallies and campaigns reaching thousands in urban and rural areas.",
  },
  {
    icon: Lightbulb,
    title: "Green School Programs",
    desc: "Eco-clubs and hands-on activities that nurture environmental consciousness in children.",
  },
  {
    icon: Heart,
    title: "Women Empowerment",
    desc: "Training women's self-help groups in organic farming, composting, and eco-friendly livelihoods.",
  },
];

const EcoAwarenessAbout = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={streetCampaign}
                alt="Young Indians conducting an eco-awareness street campaign"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <p className="font-display text-3xl font-bold">1L+</p>
              <p className="text-sm text-primary-foreground/80">People Reached</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-2 block">
              Why Awareness Matters
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Changing Mindsets,{" "}
              <span className="text-accent">Protecting Nature</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Environmental destruction often stems from a lack of awareness. 
              Our programs bridge this gap by bringing eco-consciousness to 
              every doorstep — from villages to cities, from children to 
              elders. When people understand nature's value, they become 
              its strongest protectors.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcoAwarenessAbout;
