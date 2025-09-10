import {
  Linkedin,
  Mail,
  Send,
  Github,
  Link,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com"

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
    .sendForm(
      "service_l78lw4w",
      "template_7v8npfu",
      e.target,
      "RFpAmSO8Ko9Wan5AF"
    )
    .then (
      (result) => {
        console.log(result.text);
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
      },
      (error) => {
        console.log(error.text);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      }
    )
    // setTimeout(() => {
    //   toast({
    //     title: "Message sent!",
    //     description: "Thank you for your message. I'll get back to you soon.",
    //   });
    //   setIsSubmitting(false);
    // }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Interested in working together or starting a new project? Don’t hesitate to reach out, I’m always open to new ideas and collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact icons */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Connect With Me
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
              <a
                href="https://www.linkedin.com/in/mumu-aina/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a
                href="https://github.com/Ainah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition transform hover:scale-110"
              >
                <Github className="w-6 h-6 text-primary" />
              </a>
              <a
                href="mailto:ainah.murielle@gmail.com"
                className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition transform hover:scale-110"
              >
                <Mail className="w-6 h-6 text-primary" />
              </a>
              <a
                href="https://hashnode.com/@Ainah30"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition transform hover:scale-110"
              >
                <Link className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Mumu A..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="toto@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
