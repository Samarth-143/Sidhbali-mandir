"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa6";

const links = [
  { Icon: FaFacebookF, href: "https://www.facebook.com/sidhbalidham/", label: "Facebook" },
  { Icon: FaInstagram, href: "https://www.instagram.com/shrisidhbalibabadham/", label: "Instagram" },
  { Icon: FaXTwitter, href: "https://x.com/sidhbalibaba", label: "X" },
  { Icon: FaYoutube, href: "https://www.youtube.com/@ShreeSidhbaliBaba", label: "YouTube" },
  { Icon: FaPinterestP, href: "https://www.pinterest.com/sidhbalibaba/", label: "Pinterest" },
];

export default function SocialIcons({ size = 16, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="transition-transform duration-200 hover:scale-125 hover:text-saffron"
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}
