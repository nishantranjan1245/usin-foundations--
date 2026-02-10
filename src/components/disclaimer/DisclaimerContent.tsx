import { motion } from "framer-motion";
import { Info, AlertTriangle, ExternalLink, Scale, BarChart3, HandCoins, Shield, Mail } from "lucide-react";
import disclaimerTransparencyImg from "@/assets/disclaimer-transparency.jpg";

const sections = [
  {
    icon: Info,
    title: "General Information",
    content: [
      "The information provided on the USIN Foundation website is for general informational purposes only.",
      "While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied.",
      "We do not guarantee the completeness, accuracy, reliability, or availability of any information, products, services, or related graphics on the website.",
      "Any reliance you place on such information is therefore strictly at your own risk."
    ]
  },
  {
    icon: AlertTriangle,
    title: "No Professional Advice",
    content: [
      "The content on this website does not constitute professional, legal, financial, or environmental advice of any kind.",
      "You should consult with appropriate professionals before taking any action based on the information provided.",
      "USIN Foundation does not assume responsibility for decisions made based on the information on this website.",
      "For specific environmental or legal guidance, please consult certified professionals in the respective fields."
    ]
  },
  {
    icon: ExternalLink,
    title: "External Links",
    content: [
      "Our website may contain links to external websites that are not provided or maintained by USIN Foundation.",
      "We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on external websites.",
      "The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.",
      "We strongly advise you to read the privacy policies and terms of service of any external websites you visit."
    ]
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    content: [
      "In no event shall USIN Foundation be liable for any loss or damage, including indirect or consequential loss or damage.",
      "We are not responsible for any loss arising from the use of this website or reliance on information provided herein.",
      "Through this website, you may link to other websites not under USIN Foundation's control — we have no control over their nature, content, or availability.",
      "We shall not be held liable for any technical issues, downtime, or data loss resulting from the use of our website."
    ]
  },
  {
    icon: BarChart3,
    title: "Accuracy of Information",
    content: [
      "While we endeavor to keep information accurate and up to date, impact statistics and project details are based on our records and estimates.",
      "Actual results may vary from the figures presented on our website or promotional materials.",
      "We reserve the right to make changes to the information at any time without prior notice.",
      "Photographs and media used on our website represent our actual programs but may not cover every aspect of our initiatives."
    ]
  },
  {
    icon: HandCoins,
    title: "Donations & Contributions",
    content: [
      "All donations are subject to our Refund & Cancellation Policy published on this website.",
      "USIN Foundation reserves the right to allocate funds to projects and initiatives as deemed appropriate by the organization's leadership.",
      "Fund allocation decisions are made in alignment with our mission, objectives, and the needs of the communities we serve.",
      "Tax benefits on donations are subject to applicable Indian tax laws and regulations."
    ]
  }
];

const DisclaimerContent = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Committed to Transparency
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                USIN Foundation (CIN: U91990DL2017NPL326287) is committed to maintaining the highest standards of transparency 
                and accountability. This disclaimer outlines important information regarding the 
                use of our website and the nature of our content.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                <strong className="text-foreground">Registered Office:</strong> C-2, Vasant Vihar Main Market, New Delhi, Delhi - 110057
                <br />
                <strong className="text-foreground">NGO ID:</strong> DL/2020/0261619 | <strong className="text-foreground">FCRA:</strong> 231662067
                <br />
                <strong className="text-foreground">Effective Date:</strong> January 1, 2024
                <br />
                <strong className="text-foreground">Last Updated:</strong> February 1, 2026
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={disclaimerTransparencyImg}
                alt="USIN Foundation team discussing impact reports transparently"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Shield className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/10"
        >
          <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
            Questions About This Disclaimer?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            If you have any questions or concerns regarding this disclaimer or any of the 
            information presented on our website, please feel free to contact us.
          </p>
          <a
            href="mailto:info@usinfoundation.org.in"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@usinfoundation.org.in
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DisclaimerContent;
