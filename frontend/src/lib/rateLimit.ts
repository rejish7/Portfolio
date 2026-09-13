import { LRUCache } from "lru-cache";

const rateLimitCache = new LRUCache<string, number[]>({
  max: 500,
  ttl: 60 * 60 * 1000, // 1 hour
});

const MAX_REQUESTS = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
}

export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();
  const timestamps = rateLimitCache.get(ip) ?? [];

  const recent = timestamps.filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    rateLimitCache.set(ip, recent);
    return { allowed: false, remaining: 0 };
  }

  recent.push(now);
  rateLimitCache.set(ip, recent);

  return { allowed: true, remaining: MAX_REQUESTS - recent.length };
}
