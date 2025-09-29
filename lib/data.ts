import { RiCompasses2Line, RiMagicLine, RiToolsLine } from "react-icons/ri";

export const navLinks = [
  { name: "Home", path: "home", offset: -100 },
  { name: "About", path: "about", offset: 0 },
  { name: "Testimonials", path: "testimonials", offset: 0 },
  { name: "Our Work", path: "projects", offset: 0 },
  { name: "News", path: "blog", offset: 0 },
  { name: "Contact", path: "contact", offset: 0 },
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

export const testimonialList = [
  {
    id: "1",
    name: "Emily Carter",
    location: "New York, USA",
    image: "/assets/testimonial/01.png",
    message:
      "The team exceeded expectations, creating a stylish and cozy apartment. Their creativity, detail, and professionalism truly impressed us all.",
  },
  {
    id: "2",
    name: "Jane Robinson",
    location: "Toronto, Canada",
    image: "/assets/testimonial/02.png",
    message:
      "Working with this studio was a pleasure. Their modern approach made our home inspiring, functional, and stylish. We highly recommend them!",
  },
  {
    id: "3",
    name: "Daniel Hughes",
    location: "London, UK",
    image: "/assets/testimonial/03.png",
    message:
      "The designers showed real professionalism, turning our house into a modern, welcoming space. Every detail feels elegant, stylish, and comfortable.",
  },
  {
    id: "4",
    name: "Sophia Mitchell",
    location: "Sydney, Australia",
    image: "/assets/testimonial/04.png",
    message:
      "This studio transformed our home into a dream interior. Their ideas combined style and comfort, leaving us with a modern, cozy, and functional space.",
  },
];
