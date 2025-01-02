import { Event } from "@/lib/types";

// TODO: replace with google spreadsheets
const UPCOMING_EVENTS: Event[] = [
  {
    name: "Martial Arts Open House",
    date: new Date("January 25, 2025"),
    from: new Date("January 25, 2025, 10:00 AM"),
    to: new Date("January 25, 2025, 4:00 PM"),
    location: "RSF, Combatives Room"
  },
  {
    name: "Chinese New Years Demonstration",
    date: new Date("January 26, 2025"),
    from: new Date("January 26, 2025, 11:00 AM"),
    to: new Date("January 26, 2025, 4:00 PM"),
    location: "SF Chinatown"
  },
  {
    name: "Chinese Martial Arts Tournament",
    date: new Date("Feb 16, 2025"),
    from: new Date("Feb 16, 2025, 11:00 AM"),
    to: new Date("Feb 16, 2025, 4:00 PM"),
    location: "Sunnyvale, CA"
  },
  {
    name: "EAU Night Market",
    date: new Date("Feb 26, 2025"),
    from: new Date("Feb 26, 2025, 11:00 AM"),
    to: new Date("Feb 26, 2025, 4:00 PM"),
    location: "UCB, Lower Sproul"
  }
];

export default UPCOMING_EVENTS;
