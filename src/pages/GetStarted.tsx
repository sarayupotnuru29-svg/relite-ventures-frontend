import { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const serviceOptions = [
  'UPVC Windows & Doors',
  'Aluminium Windows & Doors',
  'Interior Solutions',
  'Wallpapers',
  'Civil Works',
  'End-to-End Turnkey Construction',
  'Other',
];

const WHATSAPP_NUMBER = '8985501476';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (formData.email.length > 255) {
      newErrors.email = 'Email must be less than 255 characters';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const whatsappMessage = `Hello! I'm interested in your services.

*Name:* ${formData.name.trim()}
*Phone:* ${formData.phone.trim()}
*Email:* ${formData.email.trim()}
*Service:* ${formData.service}
*Message:* ${formData.message.trim()}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="section-padding-sm bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
              Get Started
            </p>
            <h1 className="heading-page text-primary-foreground mb-4">
              Let's Begin Your Project
            </h1>
            <p className="text-primary-foreground/80 leading-relaxed">
              Fill out the form below and we'll get back to you shortly. Your vision is our priority.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
              <SectionHeading
                title="Tell Us About Your Project"
                subtitle="Share your requirements and we'll connect with you on WhatsApp"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                      errors.name ? 'border-destructive' : 'border-input'
                    }`}
                    placeholder="Enter your full name"
                    maxLength={100}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                      errors.phone ? 'border-destructive' : 'border-input'
                    }`}
                    placeholder="Enter your phone number"
                    maxLength={15}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                      errors.email ? 'border-destructive' : 'border-input'
                    }`}
                    placeholder="Enter your email address"
                    maxLength={255}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Select Service <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                      errors.service ? 'border-destructive' : 'border-input'
                    }`}
                  >
                    <option value="">Choose a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-destructive text-sm mt-1">{errors.service}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none ${
                      errors.message ? 'border-destructive' : 'border-input'
                    }`}
                    placeholder="Tell us about your project requirements"
                    maxLength={1000}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                  <p className="text-muted-foreground text-xs mt-1">
                    {formData.message.length}/1000 characters
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full btn-accent flex items-center justify-center gap-2 rounded-lg"
                >
                  <Send className="w-5 h-5" />
                  Submit via WhatsApp
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting, you'll be redirected to WhatsApp to complete your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GetStarted;
