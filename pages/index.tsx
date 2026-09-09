import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="hero">
        <div className="hero__copy">
          <span className="eyebrow">A little more than a stay</span>
          <h1>Stay where<br /><em>good days</em> begin.</h1>
          <p>Hotel Apple Rosa is a warm, easy-going stay in the heart of Goa, made for unhurried mornings, generous meals, and memories worth keeping.</p>
          <div className="hero__actions">
            <a className="button button--primary button--lg" href="#stay">Explore the hotel <span>↗</span></a>
            <a className="text-link" href="#contact">Plan your visit <span>→</span></a>
          </div>
          <div className="hero__details"><span>✦</span> A home base for every kind of day</div>
        </div>
        <div className="hero__image" role="img" aria-label="Hotel Apple Rosa exterior at sunset"><span className="hero__caption">Where the road slows down <b>•</b> Goa, India</span></div>
      </section>
      <section className="intro-band" id="about">
        <span className="eyebrow">The Apple Rosa way</span>
        <h2>Three reasons to<br /><em>linger a little longer.</em></h2>
        <p>Whether you are checking in for a night, gathering your favourite people, or sitting down for a plate of something delicious, there is always a warm welcome waiting here.</p>
      </section>
      <section className="experiences" id="stay">
        <article className="experience experience--stay">
          <div className="experience__image" />
          <div className="experience__copy"><span className="experience__number">01</span><span className="eyebrow">The Lodge</span><h3>Rest easy.<br /><em>Wake gently.</em></h3><p>Comfortable rooms, thoughtful details, and the quiet you came for. Settle in and let the day find its own pace.</p><a className="text-link" href="#contact">View rooms <span>→</span></a></div>
        </article>
        <article className="experience experience--events" id="events">
          <div className="experience__copy"><span className="experience__number">02</span><span className="eyebrow">Terrace Top Hall</span><h3>Make room<br />for <em>together.</em></h3><p>From intimate celebrations to big-hearted occasions, our open-air terrace gives every gathering room to shine.</p><a className="text-link" href="#contact">Plan an event <span>→</span></a></div>
          <div className="experience__image" />
        </article>
        <article className="experience experience--dining" id="dining">
          <div className="experience__image" />
          <div className="experience__copy"><span className="experience__number">03</span><span className="eyebrow">Apple Rosa Restaurant</span><h3>Come hungry.<br /><em>Leave happy.</em></h3><p>Local flavours, generous portions, and a table that always has room for one more. Dine in, linger on.</p><a className="text-link" href="#contact">See the menu <span>→</span></a></div>
        </article>
      </section>
      <section className="goa-band">
        <div className="goa-band__image" role="img" aria-label="A relaxed Goa afternoon" />
        <div className="goa-band__copy">
          <span className="eyebrow">A little Goa, every day</span>
          <h2>Take the scenic<br /><em>way home.</em></h2>
          <p>Start with a slow breakfast, wander towards the sea, and come back when the lights are warm. Apple Rosa is your easy base for the best kind of Goa day.</p>
          <a className="text-link" href="#contact">Let us plan your day <span>→</span></a>
        </div>
      </section>
      <section className="quote-band"><p>“A lovely place to pause, reconnect, and enjoy the simple things.”</p><span>— Our guests, always</span></section>
      <section className="review-strip" aria-label="Guest reviews">
        <article className="review-card">
          <p>“Beautiful rooms,<br />and the perfect Goa feeling.”</p>
          <span className="review-strip__rating" aria-label="Five stars">★★★★</span>
        </article>
        <article className="review-card">
          <p>“Warm hospitality,<br />delicious food, lovely stay.”</p>
          <span className="review-strip__rating" aria-label="Five stars">★★★★</span>
        </article>
        <article className="review-card">
          <p>“A peaceful place<br />to slow down and reconnect.”</p>
          <span className="review-strip__rating" aria-label="Five stars">★★★★</span>
        </article>
      </section>
      <section className="contact-band" id="contact">
        <div className="contact-band__intro">
          <span className="eyebrow">Come say hello</span>
          <h2>Good plans<br /><em>start here.</em></h2>
          <p>Tell us what brings you to Goa. We will help you find the right room, table, or celebration space.</p>
        </div>
        <div className="contact-band__actions">
          <a className="contact-card" href={siteConfig.contact.whatsapp.href} target="_blank" rel="noreferrer">
            <span className="contact-card__icon contact-card__icon--whatsapp" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img"><path d="M20.5 3.5A11.9 11.9 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.58 0 11.94-5.35 11.94-11.93 0-3.19-1.24-6.2-3.48-8.4ZM12.04 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.22-3.71.97.99-3.61-.23-.37a9.87 9.87 0 1 1 8.35 4.61Zm5.42-7.4c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.91 8.91 0 0 1-1.64-2.04c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35Z" /></svg>
            </span>
            <span><b>{siteConfig.contact.whatsapp.label}</b><small>{siteConfig.contact.whatsapp.detail}</small></span>
            <span className="contact-card__arrow">↗</span>
          </a>
          <a className="contact-card" href={siteConfig.contact.email.href}>
            <span className="contact-card__icon contact-card__icon--email" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img"><path d="M2.5 5.5h19v13h-19v-13Zm1.6 1.7 7.9 6.03 7.9-6.03H4.1Zm15.3 9.6V9.31l-7.4 5.65-7.4-5.65v7.49h14.8Z" /></svg>
            </span>
            <span><b>{siteConfig.contact.email.label}</b><small>{siteConfig.contact.email.detail}</small></span>
            <span className="contact-card__arrow">↗</span>
          </a>
        </div>
      </section>
    </DefaultLayout>
  );
}
