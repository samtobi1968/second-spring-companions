import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  Users,
  Video,
  Handshake,
  CalendarHeart,
  RefreshCw,
  CalendarCheck,
  CalendarDays,
  MessageCircle,
  UserRoundCheck,
  FileText,
  Search,
  PhoneCall,
  Gift,
  Heart,
  Headphones,
} from "lucide-react";

export const MATCHING_QUESTIONNAIRE_HREF = "/#kindred-spirit";

export type MatchingStep = {
  step: number;
  icon: LucideIcon;
  title: string;
  text: string;
  highlight?: string;
};

export const matchingSteps: MatchingStep[] = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Tell us about you",
    text: "Complete our short matching questionnaire and tell us about your personality, interests, routine, preferences and the kind of companionship you're looking for.",
  },
  {
    step: 2,
    icon: Users,
    title: "We find your companion",
    text: "We review your answers and identify a companion from our network based on compatibility, personality, interests, availability and the type of companionship you need. You are not choosing from a public directory.",
  },
  {
    step: 3,
    icon: Video,
    title: "Meet your potential match",
    text: "We arrange an introductory video call so you and your potential companion can meet, have a conversation and see whether you feel comfortable together.",
  },
  {
    step: 4,
    icon: Handshake,
    title: "Try before you commit",
    text: "Enjoy a free trial visit before your regular companionship begins. If you both feel the match is right, your companionship can then begin.",
    highlight: "Free trial visit included",
  },
];

export type HighlightCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const afterMatchCards: HighlightCard[] = [
  {
    icon: CalendarHeart,
    title: "Support when you need it",
    text: "Our £30 monthly support service includes regular check-ins, booking coordination and help resolving any administrative questions that may arise.",
  },
  {
    icon: RefreshCw,
    title: "One free companion change",
    text: "Sometimes a match doesn't work out as expected. Your monthly support includes one free companion change, so you don't have to worry about starting the matching process again from scratch.",
  },
];

export type SupportFeature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const supportFeatures: SupportFeature[] = [
  {
    icon: CalendarCheck,
    title: "Monthly check-ins",
    text: "Regular check-ins to make sure you're happy with your companion and that the arrangement continues to work for you.",
  },
  {
    icon: CalendarDays,
    title: "Booking & Admin Management",
    text: "We can help coordinate schedules and administrative details between you and your companion.",
  },
  {
    icon: MessageCircle,
    title: "Communication Assistance",
    text: "If any scheduling or administrative issues arise, we'll help facilitate practical solutions.",
  },
  {
    icon: UserRoundCheck,
    title: "One free companion change",
    text: "If your first match isn't right for you, one companion re-matching is included with your monthly support.",
  },
];

export type PricingTier = {
  price: string;
  period?: string;
  title: string;
  description: string;
  features: string[];
  cta?: string;
  note?: string;
};

export const pricingTiers: PricingTier[] = [
  {
    price: "£95",
    title: "One-Off Match Fee",
    description: "Your one-off introduction fee covers the personalised matching process.",
    features: [
      "Matching questionnaire review",
      "Personalised companion matching",
      "Introductory video call",
      "Free trial coordination",
      "Initial introduction support",
    ],
    cta: "Start Your Match",
  },
  {
    price: "£30",
    period: "/month",
    title: "Ongoing Support",
    description: "Once you're matched, our monthly support keeps things simple and supported.",
    features: [
      "Monthly check-ins",
      "Schedule and admin coordination",
      "Ongoing support & communication assistance",
      "One free companion re-match",
    ],
    note: "Paid to Second Spring Companions for ongoing administrative support. This is not a fee for your companion's visit hours, which are agreed directly between you and your companion.",
  },
];

export type JourneyStage = {
  icon: LucideIcon;
  label: string;
};

export const journeyStages: JourneyStage[] = [
  { icon: FileText, label: "Questionnaire" },
  { icon: Search, label: "Match" },
  { icon: PhoneCall, label: "Video Call" },
  { icon: Gift, label: "Free Trial" },
  { icon: Heart, label: "Start Companionship" },
  { icon: Headphones, label: "Ongoing Support" },
];
