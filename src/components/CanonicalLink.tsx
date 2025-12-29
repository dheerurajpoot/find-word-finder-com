"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";
import { baseUrl } from "@/lib/constant";

export function CanonicalLink() {
	const pathname = usePathname() || "";
	const href = `${baseUrl}${pathname}`;
	return (
		<Head>
			<link rel='canonical' href={href} />
		</Head>
	);
}
