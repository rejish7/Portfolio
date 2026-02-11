import cors from "cors";

// Configure CORS for production with specific origins
const allowedOrigins = [
  "https://rejishkhanal.com.np",
  "https://www.rejishkhanal.com.np",
  "http://localhost:3000", // For local development
];

export default cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg =
        "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
});
