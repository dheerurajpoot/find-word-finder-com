import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { baseUrl } from "@/lib/constant";

export async function GET() {
  const now = new Date().toISOString();
  
  // Path to the spelling directory
  const spellingDir = path.join(process.cwd(), "src/app/spelling");
  
  // Get all subfolders (misspelling pages)
  const folders = fs.readdirSync(spellingDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // Generate sitemap entries with proper formatting
  const urls = folders.map((folder) => `  <url>
    <loc>${baseUrl}spelling/${folder}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
} 