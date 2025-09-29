import Link from "next/link";

import { socialsData } from "@/lib/data";

export const Socials = () => {
  return (
    <ul className="flex items-center justify-center xl:justify-start gap-13.5 text-primary">
      {socialsData.map(({ label, icon: Icon, href }) => (
        <li key={label}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-primary hover:text-accent transition-colors duration-300"
            aria-label={`${label} link`}
          >
            <Icon size={24} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
