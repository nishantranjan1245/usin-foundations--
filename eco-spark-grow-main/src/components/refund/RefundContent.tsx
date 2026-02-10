import { motion } from "framer-motion";
import { Heart, RefreshCw, Clock, XCircle, CreditCard, ShieldCheck, Mail } from "lucide-react";
import refundTrustImg from "@/assets/refund-trust.jpg";

const sections = [
  {
    icon: Heart,
    title: "Donation Policy",
    content: [
      "All donations made to USIN Foundation are voluntary contributions towards our environmental and social initiatives.",
      "We deeply appreciate every contribution made towards our mission of environmental restoration and community development.",
      "Donations support tree plantation drives, water conservation, eco-awareness campaigns, and wildlife protection programs.",
      "Tax receipts are issued for all eligible donations as per Indian Income Tax Act, Section 80G."
    ]
  },
  {
    icon: ShieldCheck,
    title: "Refund Eligibility",
    content: [
      "Duplicate transactions or technical errors during payment processing.",
      "Unauthorized transactions reported within 7 days of the transaction date.",
      "Incorrect amount charged due to system or gateway error.",
      "Refund requests must be accompanied by valid transaction proof (receipt, email confirmation, or bank statement)."
    ]
  },
  {
    icon: RefreshCw,
    title: "Refund Process",
    content: [
      "Contact us at info@usinfoundation.org.in with your transaction details including date, amount, and transaction ID.",
      "Our finance team will review your request and acknowledge receipt within 48 hours.",
      "A thorough verification process will be conducted to validate the refund claim.",
      "You will be notified via email about the status of your refund request within 7-10 business days."
    ]
  },
  {
    icon: XCircle,
    title: "Cancellation of Recurring Donations",
    content: [
      "If you have set up a recurring donation, you may cancel it at any time by contacting us via email.",
      "Cancellations will take effect from the next billing cycle after your request is processed.",
      "No refunds will be issued for donations already processed in previous billing cycles.",
      "You will receive a confirmation email once your recurring donation has been successfully cancelled."
    ]
  },
  {
    icon: CreditCard,
    title: "Non-Refundable Contributions",
    content: [
      "Donations that have already been utilized for ongoing projects, tree plantations, or community programs are non-refundable.",
      "Once funds are allocated to a specific initiative, they cannot be reversed.",
      "Sponsorship contributions for specific events or campaigns are non-refundable after the event commencement.",
      "In-kind donations (materials, equipment, services) are not eligible for monetary refunds."
    ]
  },
  {
    icon: Clock,
    title: "Processing Time",
    content: [
      "Approved refunds will be processed within 15-30 business days from the date of approval.",
      "Refunds will be credited back to the original payment method used during the transaction.",
      "Bank processing times may vary — please allow additional 5-7 days for the amount to reflect in your account.",
      "For UPI/Net Banking refunds, the timeline may vary based on your bank's processing schedule."
    ]
  }
];

const RefundContent = () => {
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
                Fair & Transparent
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At USIN Foundation (CIN: U91990DL2017NPL326287), we believe in complete transparency with our donors and supporters. 
                This policy outlines how we handle refund and cancellation requests to ensure 
                a fair and trustworthy experience for everyone.
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
                src={refundTrustImg}
                alt="USIN Foundation donors and volunteers building trust together"
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
                        <ShieldCheck className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
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
            Need Help With a Refund?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            If you have any questions or need to request a refund, our team is here to help. 
            Please reach out to us with your transaction details and we'll respond promptly.
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

export default RefundContent;
