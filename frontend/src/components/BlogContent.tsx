"use client";

import { useMemo } from "react";
import { BlogTOC } from "@/components/BlogTOC";

interface ParsedBlock {
  type: "heading" | "paragraph";
  text: string;
  id?: string;
  level?: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

/**
 * Detect headings in plain-text blog content.
 * Supports:
 *   - Markdown-style: ## Heading, ### Heading
 *   - Standalone short lines that read as titles (no trailing period, < 80 chars)
 */
function parseContent(content: string): ParsedBlock[] {
  const lines = content.split("\n");
  const blocks: ParsedBlock[] = [];
  let paragraphBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      blocks.push({ type: "paragraph", text: paragraphBuffer.join("\n") });
      paragraphBuffer = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line === "") {
      flushParagraph();
      continue;
    }

    // Markdown heading: ## Title
    const mdMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (mdMatch) {
      flushParagraph();
      const level = mdMatch[1].length;
      const text = mdMatch[2].trim();
      blocks.push({ type: "heading", text, level, id: slugify(text) });
      continue;
    }

    // Heuristic: standalone short line with no trailing period → heading
    const isShort = line.length < 80;
    const noPeriod = !line.endsWith(".");
    const startsCapital = /^[A-Z0-9]/.test(line);
    const hasNoComma = !line.includes(",");

    if (isShort && noPeriod && startsCapital && hasNoComma && line.split(" ").length <= 10) {
      flushParagraph();
      blocks.push({ type: "heading", text: line, level: 2, id: slugify(line) });
      continue;
    }

    paragraphBuffer.push(rawLine);
  }

  flushParagraph();
  return blocks;
}

export function BlogContent({ content }: { content: string }) {
  const blocks = useMemo(() => parseContent(content), [content]);

  const headings = useMemo(
    () =>
      blocks
        .filter((b): b is ParsedBlock & { id: string } => b.type === "heading" && !!b.id)
        .map((b) => ({
          id: b.id,
          label: b.text.length > 40 ? b.text.slice(0, 40) + "…" : b.text,
          level: b.level ?? 2,
        })),
    [blocks]
  );

  return (
    <>
      <BlogTOC items={headings} />

      <div id="blog-content" className="prose prose-lg dark:prose-invert max-w-none">
        <div className="space-y-6">
          {blocks.map((block, i) => {
            if (block.type === "heading") {
              const Tag = (block.level ?? 2) >= 3 ? "h3" : "h2";
              return (
                <Tag
                  key={i}
                  id={block.id}
                  className="text-2xl font-bold tracking-tight mt-10 mb-2 scroll-mt-24"
                >
                  {block.text}
                </Tag>
              );
            }
            return (
              <p key={i} className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                {block.text}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}
