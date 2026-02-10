import { motion } from "framer-motion";
import { Search, Lightbulb, Hand, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Community Assessment",
    description:
      "We survey villages and urban areas to understand existing environmental awareness levels, key concerns, and cultural context.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Program Design",
    description:
      "Custom workshops, campaigns, and activities are designed for each community — from street plays to hands-on composting sessions.",
  },
  {
    icon: Hand,
    step: "03",
    title: "Community Engagement",
    description:
      "Local volunteers and youth leaders are trained as eco-champions who conduct awareness programs in their own communities.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Impact & Follow-Up",
    description:
      "We track behavioral changes — waste reduction, tree planting, water saving — and provide ongoing support to sustain the momentum.",
  },
];

const EcoAwarenessProcess = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-2 block">
            Our Approach
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            From <span className="text-accent">Awareness</span> to{" "}
            <span className="text-accent">Action</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Our 4-step methodology turns environmental awareness into 
            lasting behavioral change at the community level.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-5 border-2 border-accent/20">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-gold mb-2">
                  Step {step.step}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoAwarenessProcess;
