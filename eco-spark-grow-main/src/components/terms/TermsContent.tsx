import { motion } from "framer-motion";
import { FileText, Scale, Heart, AlertTriangle, RefreshCw, Gavel, HandshakeIcon, Mail } from "lucide-react";
import termsAgreementImg from "@/assets/terms-agreement.jpg";

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the USIN Foundation website (usinfoundation.org.in), you agree to be bound by these Terms of Service.",
      "If you do not agree with any part of these terms, you must discontinue use of our website immediately.",
      "These terms apply to all visitors, donors, volunteers, and any other users who access or use our services.",
      "We reserve the right to update these terms at any time — continued use after changes constitutes acceptance."
    ]
  },
  {
    icon: Heart,
    title: "Donations & Contributions",
    content: [
      "All donations made to USIN Foundation are voluntary and non-refundable unless otherwise stated by law.",
      "Donors will receive tax exemption receipts under Section 80G of the Indian Income Tax Act, where applicable.",
      "USIN Foundation reserves the right to allocate donated funds to the programs and initiatives where they are most needed.",
      "Recurring donations can be cancelled at any time by contacting us at info@usinfoundation.org.in."
    ]
  },
  {
    icon: HandshakeIcon,
    title: "Volunteer Participation",
    content: [
      "Volunteers participate in USIN Foundation activities at their own risk and must follow all safety guidelines provided.",
      "By volunteering, you grant USIN Foundation permission to use photographs and videos taken during events for promotional purposes.",
      "Volunteers must be at least 18 years of age, or accompanied by a parent/guardian if below 18.",
      "USIN Foundation reserves the right to refuse or terminate volunteer participation at its discretion."
    ]
  },
  {
    icon: Scale,
    title: "Intellectual Property",
    content: [
      "All content on this website — including text, images, logos, graphics, and videos — is the property of USIN Foundation.",
      "You may not reproduce, distribute, or create derivative works without prior written permission from USIN Foundation.",
      "The USIN Foundation name, logo, and tagline are registered trademarks and may not be used without authorization.",
      "User-submitted content (stories, photos) grants USIN Foundation a non-exclusive license to use for promotional purposes."
    ]
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content: [
      "USIN Foundation shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our website.",
      "We do not guarantee that our website will be error-free, uninterrupted, or free from viruses or harmful components.",
      "Information provided on this website is for general informational purposes only and should not be considered legal or financial advice.",
      "USIN Foundation is not responsible for the content, privacy policies, or practices of any linked third-party websites."
    ]
  },
  {
    icon: RefreshCw,
    title: "Use of Website",
    content: [
      "You agree to use our website only for lawful purposes and in a manner that does not infringe on the rights of others.",
      "Unauthorized attempts to access, alter, or damage our website or its data systems are strictly prohibited.",
      "You must not use our website to transmit spam, malware, or any material that is defamatory, obscene, or offensive.",
      "We reserve the right to restrict or terminate access for users who violate these terms without prior notice."
    ]
  },
  {
    icon: Gavel,
    title: "Governing Law & Disputes",
    content: [
      "These Terms of Service shall be governed by and construed in accordance with the laws of India.",
      "Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in New Delhi, India.",
      "USIN Foundation (Registered Office: C-2, Vasant Vihar Main Market, New Delhi - 110057) encourages resolution of disputes through mutual discussion before resorting to legal action.",
      "If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect."
    ]
  }
];

const TermsContent = () => {
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
                Our Commitment to Transparency
              </h2>
               <p className="text-muted-foreground leading-relaxed mb-4">
                USIN Foundation (CIN: U91990DL2017NPL326287) is committed to maintaining the highest standards of integrity 
                and transparency. These Terms of Service govern your use of our website and 
                participation in our environmental conservation programs.
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
                src={termsAgreementImg}
                alt="USIN Foundation community agreement and partnership"
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
                        <FileText className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
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

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/10"
        >
          <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
            Have Questions About These Terms?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            If you have any questions or concerns regarding these Terms of Service, 
            please feel free to contact our team. We're here to help.
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

export default TermsContent;
