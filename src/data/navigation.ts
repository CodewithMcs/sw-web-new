export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Talent", href: "/talent" },
  { label: "Stars", href: "/stars-shine" },
  { label: "Casting", href: "/#casting" },
  { label: "Editorial", href: "/editorial" },
  { label: "Motion", href: "/#motion", badge: "Live" },
  { label: "Events", href: "/#events" },
  { label: "About", href: "/about" },
];

export const MOBILE_DRAWER_LINKS = [
  { number: "01", label: "Home", href: "/" },
  { number: "02", label: "Talent", href: "/talent" },
  { number: "03", label: "Stars", href: "/stars-shine" },
  { number: "04", label: "Casting Desk", href: "/#casting" },
  { number: "05", label: "Editorial", href: "/editorial" },
  { number: "06", label: "Motion", href: "/#motion" },
  { number: "07", label: "Events", href: "/#events" },
  { number: "08", label: "About Us", href: "/about" },
  { number: "09", label: "Open Jobs", href: "/jobs" },
  { number: "10", label: "Seeker Plans", href: "/plans" },
  { number: "11", label: "Submit Profile", href: "/apply" },
  { number: "12", label: "Contact", href: "/contact" },
];
