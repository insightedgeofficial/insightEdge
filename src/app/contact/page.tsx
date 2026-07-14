import { ContactForm } from "@/components/contact/ContactForm";
import { PageTitle } from "@/components/shared/PageTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { socialLinks } from "@/lib/data";
import { Envelope, Phone } from '@phosphor-icons/react/dist/ssr';
import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      <SectionWrapper className="bg-secondary/30">
        <PageTitle title="Let's Connect" subtitle="Have a question or want to work together? We'd love to hear from you." />
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <ContactForm />
          <div className="bg-primary/10 p-8 rounded-lg">
            <h3 className="font-headline text-2xl font-bold mb-6">Reach Us Directly</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-4">
                <Envelope className="h-5 w-5 text-primary" weight="regular" />
                <a href="mailto:insightedge.contact@gmail.com" className="hover:text-primary">insightedge.contact@gmail.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" weight="regular" />
                <div>
                  <p>+91 98404 21104</p>
                </div>
              </div>
              <div>
                <p className="font-semibold mt-6 mb-2">Office Hours:</p>
                <p>Monday–Friday, 10:00 AM – 6:00 PM</p>
              </div>
              <div className="pt-6">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                      <social.icon className="h-6 w-6" weight="regular" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
