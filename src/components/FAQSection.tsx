import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is USIN Foundation's primary mission?",
    answer:
      "USIN Foundation is dedicated to environmental restoration across India. Our primary mission includes large-scale tree plantation, water conservation, eco-awareness in schools, and promoting sustainable living practices in communities.",
  },
  {
    question: "How can I participate in a tree plantation drive?",
    answer:
      "You can join our drives by registering on our website or reaching out to us via email at info@usinfoundation.org.in. We conduct regular drives across multiple states and welcome volunteers of all ages.",
  },
  {
    question: "Where does my donation go?",
    answer:
      "100% of your donations go directly towards our environmental projects — purchasing saplings, organizing drives, running eco-awareness programs, and supporting water conservation efforts. We maintain full transparency with regular impact reports.",
  },
  {
    question: "Can I sponsor a tree in someone's name?",
    answer:
      "Yes! Our 'Plant a Tree' program allows you to sponsor tree plantations in your name or dedicate them to loved ones. You'll receive a certificate and regular updates on the growth of your sponsored trees.",
  },
  {
    question: "Do you work with schools and colleges?",
    answer:
      "Absolutely! Our Eco-Awareness program partners with schools and colleges to conduct workshops, tree plantation activities, and environmental awareness campaigns. We've already reached over 5,000 students across India.",
  },
  {
    question: "In which states does USIN Foundation operate?",
    answer:
      "We currently operate in 15+ states across India, with a growing presence in both rural and urban areas. Our flagship programs are active in Uttar Pradesh, Rajasthan, Maharashtra, Gujarat, Delhi NCR, and more.",
  },
  {
    question: "How do I become a regular volunteer?",
    answer:
      "You can sign up as a volunteer through our Get Involved section. Regular volunteers get access to exclusive events, training workshops, and leadership opportunities within our community projects.",
  },
];

const FAQItem = ({
  faq,
  index,
  isOpen,
  toggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      className="border border-border rounded-xl overflow-hidden bg-card"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-muted/50 transition-colors duration-200"
      >
        <span className="font-display text-base sm:text-lg font-semibold text-foreground pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            {faq.answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
              Common Questions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Frequently Asked{" "}
              <span className="text-gradient-green italic">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Everything you need to know about USIN Foundation, our programs, 
              and how you can contribute to a greener India.
            </p>
            <div className="bg-card rounded-2xl border border-border p-6">
              <p className="text-sm text-muted-foreground mb-3">Still have questions?</p>
              <a
                href="mailto:info@usinfoundation.org.in"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-accent transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right - FAQ items */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                toggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
