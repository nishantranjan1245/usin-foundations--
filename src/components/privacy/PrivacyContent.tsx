import { motion } from "framer-motion";
import { Shield, Eye, Lock, UserCheck, Database, Bell, Globe, Mail } from "lucide-react";
import privacyDataSecurityImg from "@/assets/privacy-data-security.jpg";

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "Personal details such as name, email address, phone number, and mailing address when you donate, volunteer, or sign up for newsletters.",
      "Payment information processed securely through trusted third-party payment gateways — we do not store credit/debit card details on our servers.",
      "Usage data such as IP address, browser type, and pages visited to improve website experience.",
      "Cookies and tracking technologies to analyze site traffic and personalize content."
    ]
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    content: [
      "Process donations and issue tax receipts as per Indian tax regulations.",
      "Send updates about our environmental initiatives, events, and impact stories.",
      "Communicate with volunteers about upcoming tree plantation drives and conservation programs.",
      "Improve our website, services, and outreach campaigns based on user feedback and behavior analytics."
    ]
  },
  {
    icon: Lock,
    title: "Data Protection & Security",
    content: [
      "We employ industry-standard SSL encryption for all data transmissions across our website.",
      "Access to personal data is restricted to authorized personnel only, on a need-to-know basis.",
      "Regular security audits and vulnerability assessments are conducted to safeguard your information.",
      "We do not sell, rent, or trade your personal information to any third parties."
    ]
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: [
      "You can request access to the personal data we hold about you at any time.",
      "You have the right to correct, update, or delete your personal information by contacting us.",
      "You may opt out of receiving promotional communications by clicking 'unsubscribe' in our emails.",
      "You can disable cookies through your browser settings, though some site features may be affected."
    ]
  },
  {
    icon: Globe,
    title: "Third-Party Services",
    content: [
      "We may use trusted third-party services for payment processing, email marketing, and website analytics.",
      "These partners are bound by confidentiality agreements and are not permitted to use your data beyond the stated purpose.",
      "External links on our website lead to third-party sites with their own privacy policies — we are not responsible for their practices.",
      "Social media integrations (Facebook, Instagram, Twitter) may collect data as per their respective privacy policies."
    ]
  },
  {
    icon: Bell,
    title: "Policy Updates",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
      "Any significant changes will be communicated through our website and email notifications.",
      "Continued use of our website after changes constitutes acceptance of the updated policy.",
      "We encourage you to review this page periodically for the latest information on our privacy practices."
    ]
  }
];

const PrivacyContent = () => {
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
                We Value Your Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At USIN Foundation (CIN: U91990DL2017NPL326287), we are committed to protecting the privacy of our donors, 
                volunteers, and supporters. This Privacy Policy outlines how we collect, use, 
                and safeguard your personal information.
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
                src={privacyDataSecurityImg}
                alt="USIN Foundation team ensuring data security"
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

        {/* Contact for Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/10"
        >
          <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
            Questions About Your Privacy?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            If you have any questions, concerns, or requests regarding this Privacy Policy 
            or how we handle your data, please don't hesitate to reach out to us.
          </p>
          <a
            href="mailto:privacy@usinfoundation.org.in"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            privacy@usinfoundation.org.in
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyContent;
