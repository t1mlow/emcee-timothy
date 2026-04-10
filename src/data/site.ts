type PhotoItem = {
  title: string;
  location: string;
  description: string;
  image: string;
};

type VideoItem = {
  title: string;
  date: string;
  description: string;
  embedUrl?: string;
  poster: string;
  duration: string;
};

type PackageItem = {
  title: string;
  price: string;
  features: string[];
};

export const siteData = {
  name: "Emcee Timothy",
  shortName: "Timothy",
  tagline: "The right words for every crowd.",
  heroTitle:
    "Mic up your event with a calm voice, quick wit, and confident crowd energy.",
  heroText:
    "Timothy hosts community celebrations, private events, and corporate gatherings with a warm stage presence that keeps the room engaged from the first introduction to the closing line.",
  about: [
    "It started in primary school, when Timothy realised singing was not quite his lane, but his voice, presence, and energy often stood out. That early encouragement grew into a genuine love for public speaking, hosting, and creating the right atmosphere for a room.",
    "Today, emceeing is a passion project alongside his career in shipping. With a calm delivery, clear communication, and an engaging stage presence, Timothy brings fresh energy to celebrations, corporate gatherings, and community events without losing the sense of professionalism they require.",
    "He is excited to keep growing in this space, take on new opportunities, and contribute to programmes that feel smooth, memorable, and enjoyable for both organisers and audiences.",
  ],
  highlights: [
    {
      value: "50+",
      label: "crowds hosted across community, school, and event settings",
    },
    {
      value: "3 styles",
      label: "corporate polish, festive energy, and youth-friendly hosting",
    },
    {
      value: "1 focus",
      label: "clear communication and a crowd that stays with you",
    },
  ],
  services: [
    {
      title: "Corporate and formal",
      description:
        "Steady pacing, clear scripting, and a composed delivery for launches, dinners, and ceremonies.",
    },
    {
      title: "Community celebrations",
      description:
        "Warm hosting that keeps families, mixed-age audiences, and public events feeling connected.",
    },
    {
      title: "Youth and energetic shows",
      description:
        "Lighter banter, stronger audience interaction, and a tempo that feels lively without becoming chaotic.",
    },
  ],
  testimonials: [
    {
      quote:
        "Timothy absolutely shone as the emcee of my company's Christmas party two years ago. He was confident, witty, and effortlessly engaging, keeping the energy up all night while the programme flowed smoothly. He was also able to improvise when needed. A standout host with a real flair for the mic.",
      author: "Selwyn",
    },
    {
      quote:
        "Timothy was an outstanding co-emcee at our recent badminton tournament, bringing a strong mix of professionalism, energy, and charisma to the event. He handled player and official introductions smoothly, kept the event on schedule, and led the prize ceremony with confidence and clarity. His stage presence, clear communication, and ability to engage the crowd added real value to the event. The feedback from both the audience and clients was overwhelmingly positive. Whether it's a sports event, corporate function, or social gathering, Timothy is a reliable and engaging emcee who makes the entire experience more enjoyable and stress-free.",
      author: "Sureen",
    },
    {
      quote:
        "Professional and charismatic emceeing that brought our event to life. Timothy holds an engaging energy with refined stage presence. An assured choice we'd be glad to work with again.",
      author: "Joshua",
    },
  ],
  award:
    "Public Speaking Award / Certificate - Rochester Institute of Technology 2020",
  recentEvents: [
    "Network Couriers Pte Ltd – Dinner and Dance",
    "Vida City Christmas Pasir Ris Community Event",
    "JK Tech Badminton Tournament",
    "Braemar Shipping Christmas Party – Corporate Event",
    "Pentecost Methodist Church Camp Dinner",
    "Anglo-Chinese School (Barker Road) Scouts Graduation Night",
    "Anglo-Chinese School (Barker Road) Class of 2014 Graduation Night",
  ],
  contact: {
    instagramUrl: "https://www.instagram.com/mceetimothy/",
    whatsappUrl: "https://wa.me/6596917191",
    email: "mceetimothy@gmail.com",
  },
  packages: [
    {
      title: "Standard Mic",
      price: "Starting from $350",
      features: [
        "Over the phone or Zoom call to run through the event",
        "Basic script aligned to your template and flow",
        "Up to 2 games for crowd engagement",
      ],
    },
    {
      title: "Golden Mic",
      price: "Starting from $450",
      features: [
        "In-person meetup to run through event flow",
        "Fully customizable flow with client input",
        "Curated playlist for the event theme",
        "Up to 4 games for crowd engagement",
        "DJ playlist and background slides provided",
      ],
    },
  ] as PackageItem[],
  heroPortrait: "/portraits/timothy-hero.jpg",
  photos: [
    {
      title: "Stage-side connection",
      location: "Community event",
      description: "A closer, people-first hosting moment.",
      image: "/gallery/event-01.jpg",
    },
    {
      title: "Crowd energy",
      location: "Live gathering",
      description: "Quick smiles, easy engagement, and a relaxed atmosphere.",
      image: "/gallery/event-02.jpg",
    },
    {
      title: "On the mic",
      location: "Hosted programme",
      description: "Focused delivery during the programme flow.",
      image: "/gallery/event-03.jpg",
    },
    {
      title: "Family audience",
      location: "Festive celebration",
      description: "Interactive hosting for a mixed-age crowd.",
      image: "/gallery/event-04.jpg",
    },
    {
      title: "Team celebration",
      location: "Sports and social night",
      description: "A candid post-event moment with the crew.",
      image: "/gallery/event-05.jpg",
    },
  ] as PhotoItem[],
  videos: [
    {
      title: "Vida City Christmas Community Celebration",
      date: "Dec 14, 2025",
      description:
        "Recommended setup: replace this card with a compressed MP4 or a YouTube/Vimeo embed.",
      duration: "00:53",
      poster: "/gallery/event-01.jpg",
    },
    {
      title: "Network Courier Dinner and Dance",
      date: "Dec 13, 2025",
      description:
        "Use this slot for a short highlight reel or host it externally to keep the site fast.",
      duration: "01:20",
      poster: "/gallery/event-03.jpg",
    },
    {
      title: "JK Tech Badminton Event",
      date: "Dec 13, 2024",
      description:
        "If the raw file is very large, compress it first and keep the website version under web-friendly sizes.",
      duration: "02:00",
      poster: "/gallery/event-05.jpg",
    },
  ] as VideoItem[],
};
