import { motion } from "framer-motion";
import { Cookie, Shield, Settings, BarChart3, Clock, ToggleRight, Globe, Mail } from "lucide-react";

const sections = [
  {
    icon: Cookie,
    title: "What Are Cookies?",
    content: [
      "Cookies are small text files placed on your device when you visit our website. They help us recognize your browser and remember certain information.",
      "Cookies are widely used across the internet to make websites work more efficiently and provide a better user experience.",
      "Some cookies are essential for the website to function, while others help us understand how visitors interact with our site.",
      "You can control cookie preferences through your browser settings at any time."
    ]
  },
  {
    icon: Settings,
    title: "Types of Cookies We Use",
    content: [
      "Essential Cookies: Required for core website functionality such as page navigation, secure areas, and form submissions. These cannot be disabled.",
      "Analytics Cookies: Help us understand how visitors interact with our website by collecting information like pages visited, time spent, and navigation patterns.",
      "Functionality Cookies: Remember your preferences (such as language or region) to provide a more personalized experience on return visits.",
      "Performance Cookies: Collect anonymous data to help us improve website speed, loading times, and overall user experience."
    ]
  },
  {
    icon: BarChart3,
    title: "How We Use Cookie Data",
    content: [
      "To analyze website traffic patterns and identify areas for improvement using tools like Google Analytics.",
      "To remember your donation preferences and pre-fill forms for a smoother experience during future visits.",
      "To measure the effectiveness of our awareness campaigns and outreach programs.",
      "To ensure our website remains secure and to detect any unauthorized access or fraudulent activity."
    ]
  },
  {
    icon: Clock,
    title: "Cookie Duration",
    content: [
      "Session Cookies: Temporary cookies that are deleted when you close your browser. Used for essential functions like maintaining your session.",
      "Persistent Cookies: Remain on your device for a set period (up to 12 months) or until you manually delete them.",
      "We review and update cookie expiration periods regularly to ensure they are not retained longer than necessary.",
      "You can clear all cookies from your browser at any time through your browser's privacy settings."
    ]
  },
  {
    icon: Globe,
    title: "Third-Party Cookies",
    content: [
      "We may use third-party services such as Google Analytics, YouTube, and social media platforms that set their own cookies.",
      "These third-party cookies are governed by the respective privacy policies of those services, not by USIN Foundation.",
      "Social media sharing buttons (Facebook, Twitter, LinkedIn) may track your browsing activity even if you don't click them.",
      "We carefully select third-party partners and only work with those that maintain high privacy and security standards."
    ]
  },
  {
    icon: ToggleRight,
    title: "Managing Your Cookie Preferences",
    content: [
      "Most web browsers allow you to control cookies through their settings. You can block or delete cookies at any time.",
      "Google Chrome: Settings → Privacy and Security → Cookies and other site data.",
      "Mozilla Firefox: Settings → Privacy & Security → Cookies and Site Data.",
      "Please note that disabling certain cookies may impact your experience on our website and limit some functionality."
    ]
  }
];

const CookiePolicyContent = () => {
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
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Our Commitment to Transparency
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At USIN Foundation (CIN: U91990DL2017NPL326287), we believe in complete transparency about how 
            we use technology on our website. This Cookie Policy explains what cookies are, how we use them, 
            and how you can manage your preferences.
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
            Questions About Our Cookie Policy?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            If you have any questions about how we use cookies or wish to learn more about 
            our data practices, please contact us.
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

export default CookiePolicyContent;
