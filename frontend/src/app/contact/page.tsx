import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rejish Khanal for project inquiries, collaborations, or just to say hello.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@rejishkhanal.com.np",
    href: "mailto:contact@rejishkhanal.com.np",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kathmandu, Nepal",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 9862766994",
    href: "tel:+9779862766994",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out. 
            I am always open to discussing new opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              );

              return info.href ? (
                <a key={info.label} href={info.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
