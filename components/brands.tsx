import Image from "next/image";

import { brandList } from "@/lib/data";

export const Brands = () => {
  return (
    <section className="section">
      <ul className="container flex flex-col xl:flex-row items-center justify-between gap-12">
        {brandList.map(({ label, image }) => (
          <li key={label}>
            <Image src={image} alt={label} width={150} height={40} />
          </li>
        ))}
      </ul>
    </section>
  );
};
