import { LRUCache } from "lru-cache";

const rateLimitCache = new LRUCache<string, number[]>({
  max: 500,
  ttl: 60 * 60 * 1000, // 1 hour
});

export interface RateLimitOptions {
  maxRequests?: number;
  windowMs?: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
}

export function checkRateLimit(
  ip: string,
  { maxRequests = 5, windowMs = 60 * 60 * 1000 }: RateLimitOptions = {}
): RateLimitResult {
  const now = Date.now();
  const timestamps = rateLimitCache.get(ip) ?? [];

  const recent = timestamps.filter((t) => now - t < windowMs);

  if (recent.length >= maxRequests) {
    rateLimitCache.set(ip, recent);
    return { allowed: false, remaining: 0 };
  }

  recent.push(now);
  rateLimitCache.set(ip, recent);

  return { allowed: true, remaining: maxRequests - recent.length };
}
