export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Hotel Apple Rosa",
  description: "A warm stay, terrace-top celebrations, and generous dining in Goa.",
  contact: {
    whatsapp: {
      label: "WhatsApp",
      href: "https://wa.me/91",
      detail: "Chat with our team",
    },
    email: {
      label: "Email us",
      href: "mailto:hotelapplerosa@gmail.com",
      detail: "hotelapplerosa@gmail.com",
    },
    google: {
      label: "Google",
      href: "https://www.google.com/search?q=Hotel+Apple+Rosa+Goa",
    },
    phone: "+91 00000 00000",
  },
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
