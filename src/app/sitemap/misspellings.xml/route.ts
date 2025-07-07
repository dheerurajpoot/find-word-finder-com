import { NextResponse } from "next/server";
import { baseUrl } from "@/lib/constant";
import { misspellingFolders } from "@/lib/misspellings";

export async function GET() {
	const now = new Date().toISOString();

	const urls = misspellingFolders
		.map(
			(folder: string) =>
				`  <url>\n    <loc>${baseUrl}spelling/${folder}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>`
		)
		.join("\n");

	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

	return new NextResponse(xml, {
		headers: {
			"Content-Type": "application/xml",
			"Cache-Control": "public, max-age=3600, s-maxage=3600",
		},
	});
}
