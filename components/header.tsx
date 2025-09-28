import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";

export const Header = () => {
  return (
    <header className="sticky top-0 z-30 h-22.5 bg-white shadow-xl">
      <div className="container h-full flex items-center justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};
