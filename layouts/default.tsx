import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hotel-shell">
      <Head />
      <Navbar />
      <main className="hotel-main">
        {children}
      </main>
      <footer className="hotel-footer">
        <div className="hotel-footer__brand">
          <div className="brand"><span>Hotel Apple Rosa</span></div>
          <p>Thoughtful stays, terrace-top celebrations, and generous dining in the heart of Goa.</p>
        </div>
        <div className="hotel-footer__column">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#stay">Stay</a>
          <a href="#events">Events</a>
          <a href="#dining">Dining</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hotel-footer__column hotel-footer__contact">
          <h4>Contact</h4>
          <a href={siteConfig.contact.email.href}>{siteConfig.contact.email.detail}</a>
          <a href={siteConfig.contact.whatsapp.href} target="_blank" rel="noreferrer">{siteConfig.contact.phone}</a>
          <span>Goa, India</span>
        </div>
        <div className="hotel-footer__column hotel-footer__connect">
          <h4>Connect</h4>
          <div className="hotel-footer__socials">
            <a className="hotel-footer__social hotel-footer__social--whatsapp" href={siteConfig.contact.whatsapp.href} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.58 0 11.94-5.35 11.94-11.93 0-3.19-1.24-6.2-3.48-8.4ZM12.04 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.22-3.71.97.99-3.61-.23-.37a9.87 9.87 0 1 1 8.35 4.61Zm5.42-7.4c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.91 8.91 0 0 1-1.64-2.04c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35Z" /></svg>
            </a>
            <a className="hotel-footer__social hotel-footer__social--email" href={siteConfig.contact.email.href} aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 5.5h19v13h-19v-13Zm1.6 1.7 7.9 6.03 7.9-6.03H4.1Zm15.3 9.6V9.31l-7.4 5.65-7.4-5.65v7.49h14.8Z" /></svg>
            </a>
            <a className="hotel-footer__social hotel-footer__social--google" href={siteConfig.contact.google.href} target="_blank" rel="noreferrer" aria-label="Search Hotel Apple Rosa on Google">
              <span aria-hidden="true">G</span>
            </a>
          </div>
        </div>
        <div className="hotel-footer__bottom">
          <span>© {new Date().getFullYear()} Hotel Apple Rosa. All rights reserved.</span>
          <span>Based in Goa, India <b>•</b> Made for slow, sunny days.</span>
        </div>
      </footer>
    </div>
  );
}
