import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LandingPage } from "@/components/landing/landing-page";
import { getServerAuthSession } from "@/server/auth";

export const metadata: Metadata = {
  title: "Jackdaw — Keep everything you find",
  description:
    "Jackdaw is a free, hosted bookmark and knowledge manager by DHDTech.io. Save links, notes, images and PDFs; let AI tag and summarise them; find anything again with full-text and semantic search.",
};

export default async function Home() {
  const session = await getServerAuthSession();
  if (session) {
    redirect("/dashboard/bookmarks");
  }
  return <LandingPage />;
}
