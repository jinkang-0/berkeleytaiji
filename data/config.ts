if (!process.env.NODE_ENV)
  throw new Error("NODE_ENV is not set in environment variables.");

const CONFIG = {
  siteUrl:
    process.env.NODE_ENV === "production"
      ? "https://berkeleytaiji.vercel.app"
      : "http://localhost:3000",
  siteName: "Berkeley Taiji",
  siteDescription: "The official Taiji club at UC Berkeley."
};

export default CONFIG;
