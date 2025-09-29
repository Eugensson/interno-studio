import {
  RiCompasses2Line,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMagicLine,
  RiToolsLine,
  RiTwitterXFill,
} from "react-icons/ri";

export const navLinks = [
  { name: "Home", path: "home", offset: -100 },
  { name: "About", path: "about", offset: -150 },
  { name: "Testimonials", path: "testimonials", offset: -120 },
  { name: "Our Work", path: "projects", offset: -120 },
  { name: "News", path: "blog", offset: -150 },
  { name: "Contact", path: "contact", offset: -120 },
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

export const brandList = [
  { id: "1", label: "ModernHome", image: "/assets/brands/01.svg" },
  { id: "2", label: "Style Vintage Interior", image: "/assets/brands/02.svg" },
  { id: "3", label: "Brand", image: "/assets/brands/03.svg" },
  { id: "4", label: "Nature Home", image: "/assets/brands/04.svg" },
  { id: "5", label: "Classic Design Studio", image: "/assets/brands/05.svg" },
];

export const projectList = [
  {
    id: "1",
    title: "Modern Kitchen",
    category: "Decor/Architecture",
    image: "/assets/work/01.png",
  },
  {
    id: "2",
    title: "Modern Living Room 01",
    category: "Decor/Architecture",
    image: "/assets/work/02.png",
  },
  {
    id: "3",
    title: "Modern Living Room 02",
    category: "Decor/Architecture",
    image: "/assets/work/03.png",
  },
  {
    id: "4",
    title: "Modern Living Room 03",
    category: "Decor/Architecture",
    image: "/assets/work/04.png",
  },
];

export const statsData = [
  { id: "1", value: 12, label: "Years of Experience" },
  { id: "2", value: 85, label: "Projects Completed" },
  { id: "3", value: 15, label: "Active Projects" },
  { id: "4", value: 95, label: "Happy Customers" },
];

export const newsData = [
  {
    id: 1,
    image: "/assets/news/01.png",
    title: "Let’s Get Solution For Building Construction Work",
    date: "15 May, 2025",
    href: "/",
  },
  {
    id: 2,
    image: "/assets/news/02.png",
    title: "Low Cost Latest Invented Interior Designing Ideas",
    date: "21 June, 2025",
    href: "/",
  },
  {
    id: 3,
    image: "/assets/news/03.png",
    title: "Best For Any Office & Business Interior Solution",
    date: "07 July, 2025",
    href: "/",
  },
];

export const socialsData = [
  { label: "Facebook", icon: RiFacebookFill, href: "https://www.facebook.com" },
  { label: "TwitterX", icon: RiTwitterXFill, href: "https://www.x.com" },
  { label: "LinkedIn", icon: RiLinkedinFill, href: "https://www.linkedin.com" },
  {
    label: "Instagram",
    icon: RiInstagramFill,
    href: "https://www.instagram.com",
  },
];
