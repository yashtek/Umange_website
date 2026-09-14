export const PLAY_STORE_URL = "https://play.google.com/store/apps";

const dashboardImage = "/app-dashboard.png";
const addPropertyImage = "/app-add-property.png";
const residentsImage = "/app-residents.png";
const operationsImage = "/app-operations.png";
const recordsImage = "/app-records.png";
const pgOwnerImage = "/user-pg-owner.jpg";
const hotelManagerImage = "/user-hotel-manager.jpg";
const propertyManagerImage = "/user-property-manager.jpg";

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Users", href: "#users" },
  { label: "Reviews", href: "#reviews" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Download", href: "#download" },
];

export const navItems = navigation;

export const users = [
  { name: "Arjun Mehta", role: "PG Owner", description: "Runs 4 co-living properties", image: pgOwnerImage },
  { name: "Maya Iyer", role: "Hotel Manager", description: "Manages a 42-room boutique stay", image: hotelManagerImage },
  { name: "Rohan Kapoor", role: "Property Manager", description: "Oversees homes across Bengaluru", image: propertyManagerImage },
  { name: "Nikhil Rao", role: "Flat Manager", description: "Keeps multi-family rentals organized", image: pgOwnerImage },
  { name: "Priya Nair", role: "Service Provider", description: "Coordinates on-site service teams", image: hotelManagerImage },
  { name: "Vikram Shah", role: "Rental Manager", description: "Tracks tenants and collections", image: propertyManagerImage },
];

export const reviews = [
  {
    name: "Arjun Mehta",
    role: "PG Owner",
    image: pgOwnerImage,
    rating: 5,
    review: "Umanage replaced three spreadsheets and a long chain of messages. I can now see rent, residents, and pending work before my day begins.",
  },
  {
    name: "Maya Iyer",
    role: "Hotel Manager",
    image: hotelManagerImage,
    rating: 5,
    review: "The team adopted it quickly because everything feels clear. Daily operations are easier to review and nothing important gets buried.",
  },
  {
    name: "Rohan Kapoor",
    role: "Property Manager",
    image: propertyManagerImage,
    rating: 5,
    review: "Having every property in one place has made follow-ups much faster. Umanage gives me a calm, reliable view of the whole portfolio.",
  },
  {
    name: "Priya Nair",
    role: "Service Provider",
    image: hotelManagerImage,
    rating: 5,
    review: "From requests to records, the workflow stays simple. My team knows what needs attention without calling me for every update.",
  },
  {
    name: "Vikram Shah",
    role: "Rental Manager",
    image: propertyManagerImage,
    rating: 5,
    review: "It gives our rental operation the structure we were missing. Resident details and payment status are always close at hand.",
  },
  {
    name: "Nikhil Rao",
    role: "Flat Owner",
    image: pgOwnerImage,
    rating: 5,
    review: "I wanted something powerful without being complicated. Umanage delivers exactly that and helps me stay on top of every property.",
  },
];

export const appSteps = [
  { number: "01", title: "Add Your Property", description: "Add your PG, flat, hotel or rental property in a few simple steps.", image: addPropertyImage, alt: "Umanage add property screen" },
  { number: "02", title: "Manage Residents & Customers", description: "Keep resident and customer information organized, searchable and close at hand.", image: residentsImage, alt: "Umanage residents management screen" },
  { number: "03", title: "Track Operations", description: "Follow collections, maintenance and everyday property activity from one place.", image: operationsImage, alt: "Umanage operations overview screen" },
  { number: "04", title: "Stay Organized", description: "Keep agreements, invoices and important records accessible whenever you need them.", image: recordsImage, alt: "Umanage records screen" },
  { number: "05", title: "Manage Everything Smarter", description: "See the bigger picture with a simple, centralized view of your entire operation.", image: dashboardImage, alt: "Umanage management dashboard" },
];

export const workflowSteps = appSteps;

export const footerLinks = [
  { label: "Email", href: "mailto:hello@umanage.app", type: "link" as const },
  { label: "Terms & Conditions", href: "/terms", type: "link" as const },
  { label: "Privacy Policy", href: "/privacy", type: "link" as const },
];

export const legalContent = {
  terms: {
    title: "Terms & Conditions",
    intro: "These placeholder terms explain the intended structure for Umanage. Replace them with legal copy reviewed for your business before launch.",
    sections: [
      { title: "Using Umanage", body: "You are responsible for keeping your account information accurate and for using Umanage only for lawful property and service management activities." },
      { title: "Your information", body: "You retain ownership of the information you add. You must have the right to collect and manage any resident, customer, or property data entered into the service." },
      { title: "Service availability", body: "We aim to keep Umanage reliable, but availability may occasionally be affected by maintenance, updates, or circumstances outside our control." },
      { title: "Changes", body: "These terms may be updated as the product evolves. Material updates should be communicated through the app or the contact details associated with your account." },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    intro: "This placeholder policy outlines how Umanage is expected to handle information. Replace it with a policy reviewed for your final data practices before launch.",
    sections: [
      { title: "Information we collect", body: "Umanage may collect account details, property information, operational records, and technical data needed to provide and improve the service." },
      { title: "How information is used", body: "Information is used to operate the app, support users, improve performance, maintain security, and communicate important service updates." },
      { title: "Sharing and security", body: "Information should only be shared with service providers required to operate Umanage, under appropriate safeguards. We use reasonable controls to protect stored information." },
      { title: "Your choices", body: "Users may request access, correction, or deletion of their personal information, subject to applicable legal and operational requirements." },
    ],
  },
};

export type LegalType = keyof typeof legalContent;

export { dashboardImage };