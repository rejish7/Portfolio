import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://rejishkhanal.com.np";

  return {
    rules: [
      {
        userAgent: [
          // OpenAI - Training
          "GPTBot",
          // OpenAI - Search & Citations
          "OAI-SearchBot",
          // OpenAI - User-triggered fetch
          "ChatGPT-User",
          // Anthropic - Training
          "ClaudeBot",
          "anthropic-ai",
          // Anthropic - Retrieval
          "Claude-User",
          "Claude-Web",
          // Perplexity - Search & Citations
          "PerplexityBot",
          "Perplexity-User",
          // Google - AI Training (Gemini)
          "Google-Extended",
          // Apple - AI Training
          "Applebot-Extended",
          // Common Crawl - Training corpus
          "CCBot",
          // Amazon
          "Amazonbot",
          // Meta - Llama Training
          "Meta-ExternalAgent",
          "FacebookBot",
          // ByteDance
          "Bytespider",
          // Cohere
          "cohere-ai",
          // You.com
          "YouBot",
          // Phind
          "PhindBot",
          // DuckDuckGo
          "DuckAssistBot",
          // Kagi
          "KagiBot",
          // Mistral
          "MistralAI-User",
          // xAI
          "GrokBot",
        ],
        allow: ["/"],
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/login/",
          "/register/",
          "/preview/",
          "/private/",
          "/_next/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
