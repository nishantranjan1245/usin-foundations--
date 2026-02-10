import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import contactOfficeImg from "@/assets/contact-office.jpg";
import contactCommunityImg from "@/assets/contact-community.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    details: ["C-2, Vasant Vihar Main Market", "New Delhi, Delhi, India - 110057"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@usinfoundation.org.in", "volunteer@usinfoundation.org.in"],
    links: ["mailto:info@usinfoundation.org.in", "mailto:volunteer@usinfoundation.org.in"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 XXXX XXXXXX"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic placeholder
    alert("Thank you for reaching out! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {item.title}
              </h3>
              {item.details.map((detail, i) => (
                item.links ? (
                  <a
                    key={i}
                    href={item.links[i]}
                    className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {detail}
                  </a>
                ) : (
                  <p key={i} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                )
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form + Image Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24-48 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXX XXXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="donation">Donation Related</option>
                      <option value="partnership">Partnership / Collaboration</option>
                      <option value="media">Media / Press</option>
                      <option value="feedback">Feedback / Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-accent transition-colors text-sm"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={contactOfficeImg}
                  alt="USIN Foundation office team welcoming visitors"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={contactCommunityImg}
                  alt="USIN Foundation volunteers in community discussion"
                  className="w-full h-72 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ-style section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/10"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
            Want to Visit Us?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We welcome visitors to our office and project sites. Whether you're a donor, volunteer, 
            or just someone who cares about the environment — you're always welcome. 
            Please schedule an appointment before visiting.
          </p>
          <a
            href="mailto:info@usinfoundation.org.in"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            Schedule a Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactContent;
