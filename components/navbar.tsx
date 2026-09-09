import NextLink from "next/link";

export const Navbar = () => {
  return (
    <nav className="hotel-nav">
      <header className="hotel-nav__inner">
        <NextLink className="brand" href="/">
          <span>Hotel Apple Rosa</span>
        </NextLink>
        <div className="hotel-nav__links">
          <a href="#stay">Stay</a>
          <a href="#events">Events</a>
          <a href="#dining">Dining</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="button button--primary hotel-nav__book" href="#contact">Book a stay</a>
      </header>
    </nav>
  );
};
