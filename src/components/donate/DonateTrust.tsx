import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Eye, Heart, FileText, BadgeCheck, Clock } from "lucide-react";
import donateCommunity from "@/assets/donate-community.jpg";

const trustFeatures = [
  {
    icon: Shield,
    title: "100% Transparency",
    description: "Every rupee is tracked. You get detailed reports on how your donation is utilized.",
  },
  {
    icon: Eye,
    title: "Open Audits",
    description: "Our financials are audited annually and reports are publicly accessible.",
  },
  {
    icon: FileText,
    title: "80G Tax Benefits",
    description: "All donations are eligible for tax deduction under Section 80G of the Income Tax Act.",
  },
  {
    icon: BadgeCheck,
    title: "Certified NGO",
    description: "Registered under CIN: U91990DL2017NPL326287 | NGO ID: DL/2020/0261619 | FCRA: 231662067.",
  },
  {
    icon: Clock,
    title: "Quarterly Reports",
    description: "Receive quarterly updates on your sponsored trees with photos and GPS data.",
  },
  {
    icon: Heart,
    title: "Zero Overhead",
    description: "Administrative costs are covered separately — your donation goes directly to projects.",
  },
];

const DonateTrust = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Why Trust Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Built on{" "}
            <span className="text-gradient-green italic">Trust & Transparency</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe in complete accountability. Here's why thousands of donors trust us with their contributions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Trust Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card rounded-xl border border-border p-5 hover:shadow-lg transition-all duration-300"
              >
                <feature.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Community Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={donateCommunity}
                alt="Community celebrating a successful tree plantation drive"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonateTrust;
