import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { stepList } from "@/lib/data";

export const Steps = () => {
  return (
    <section className="mt-20 zl:mt-50 relative z-20">
      <div className="container">
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {stepList.map(({ id, icon: Icon, title, description, href }) => (
            <li key={id} className="text-center">
              <Icon size={48} className="mb-4 text-accent mx-auto" />
              <h3 className="h3 mb-5">{title}</h3>
              <p className="mb-5 max-w-md mx-auto">{description}</p>
              <Link
                href={href}
                className="flex items-center justify-center gap-2 text-primary hover:text-accent transition-colors duration-300 font-medium"
              >
                Read More
                <ArrowRight size={22} className="text-accent" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
