import { MessagesSquare, Palette, Home, Smartphone, type LucideIcon } from "lucide-react";

export type Pillar = {
  number: string;
  title: string;
  subtitle: string;
  hook: string;
  icon: LucideIcon;
  description: string[];
};

export const pillars: Pillar[] = [
  {
    number: "01",
    title: "Connection & Conversation",
    subtitle: "The Heart of the Home",
    hook: "Real talk, shared memories and intellectual company.",
    icon: MessagesSquare,
    description: [
      "At the centre of every Springer visit is the simple, profound act of being heard. Our companions are chosen for their conversational depth — people who delight in stories of childhood, careers, love, loss and the small absurdities of life.",
      "Whether it is a long discussion about Sunday papers, a debate over a favourite novelist, or quiet reminiscence over old photographs, Connection & Conversation is where genuine friendship is built.",
    ],
  },
  {
    number: "02",
    title: "Hobbies & Games",
    subtitle: "Passion & Play",
    hook: "Galleries, gardens, books. Rediscover your spark.",
    icon: Palette,
    description: [
      "Later life should never be the end of curiosity. Our Springers actively rekindle the hobbies that once brought your loved one joy — and gently introduce new ones.",
      "A morning at the Royal Academy, an afternoon tending the rose bed, a weekly book club for two, or a competitive game of Scrabble. Passion and play are central to feeling alive.",
    ],
  },
  {
    number: "03",
    title: "Everyday Support",
    subtitle: "Domestic Harmony & Comfort",
    hook: "Light help, meal prep and a Cornetto run on a hot day.",
    icon: Home,
    description: [
      "The little things matter most. Our Springers help bring quiet order to the home — a tidy kitchen, a freshly prepared meal, the laundry folded, the post sorted.",
      "And on a warm afternoon, perhaps a stroll to the corner shop for a Cornetto. This is not domestic labour; it is gentle, attentive companionship that keeps the home feeling like home.",
    ],
  },
  {
    number: "04",
    title: "Help with Tech",
    subtitle: "Bridging the Digital Gap",
    hook: "Video calls, social media and personal music playlists.",
    icon: Smartphone,
    description: [
      "Modern technology can feel overwhelming — but it is also the thread that keeps families close. Our Springers patiently help with WhatsApp video calls to grandchildren, Facebook updates, online shopping and email.",
      "We will set up a Spotify playlist of the songs your loved one danced to in their twenties, organise treasured photos into albums, and make sure the iPad never becomes a stranger.",
    ],
  },
];
