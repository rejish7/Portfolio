import cors from "cors";

// Configure CORS for production with specific origins
const allowedOrigins = [
  "https://rejishkhanal.com.np",
  "https://www.rejishkhanal.com.np",
  "http://localhost:3000",
];

export default cors({
  origin: function (origin, callback) {
    console.log("[CORS] Request origin:", origin || "(no origin header)");
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `CORS blocked origin: ${origin}. Allowed: ${allowedOrigins.join(", ")}`;
      console.error("[CORS]", msg);
      return callback(new Error(msg), false);
    }
    console.log("[CORS] Origin allowed:", origin);
    return callback(null, true);
  },
  credentials: true,
});
