// This reads from .env.local through Next.js environment variable system
// Variables must be prefixed with NEXT_PUBLIC_ to be accessible in client components
export const config = {
  appTitle: process.env.NEXT_PUBLIC_APP_TITLE || "Aquila Hospitality",
  appDescription:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
    "Book your perfect stay with ease",
};
