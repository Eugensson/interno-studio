import { RiCompasses2Line, RiMagicLine, RiToolsLine } from "react-icons/ri";

export const navLinks = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Testimonials", path: "testimonials" },
  { name: "Our Work", path: "projects" },
  { name: "News", path: "blog" },
  { name: "Contact", path: "contact" },
];

export const stepList = [
  {
    id: 1,
    icon: RiCompasses2Line,
    title: "Project Planning",
    description:
      "Project planning defines the vision, builds a clear roadmap, and aligns ideas with client goals to ensure a structured workflow and efficient design process.",
    href: "/",
  },
  {
    id: 2,
    icon: RiMagicLine,
    title: "Gaining Materials",
    description:
      "Gaining materials focuses on selecting durable, stylish, and sustainable resources that match the concept and guarantee quality results in every interior detail.",
    href: "/",
  },
  {
    id: 3,
    icon: RiToolsLine,
    title: "Project Execution",
    description:
      "Project execution turns plans into reality by coordinating tasks, managing timelines, and delivering creative solutions with precision, quality, and client satisfaction.",
    href: "/",
  },
];
