"use client";

import type { SVGProps } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const SOURCE_URL = "https://github.com/dhdtech/karakeep";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

function BrandMark(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="3" width="18" height="18" />
      <path d="M9 7h6v10l-3-2-3 2V7z" />
    </Icon>
  );
}

function ArrowRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  );
}

function SunIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </Icon>
  );
}

function MoonIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z" />
    </Icon>
  );
}

function BookmarkIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 4h12v16l-6-4-6 4V4z" />
    </Icon>
  );
}

function SparkleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3l2.1 6.9L21 12l-6.9 2.1L12 21l-2.1-6.9L3 12l6.9-2.1L12 3z" />
    </Icon>
  );
}

function SearchIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="6" />
      <path d="M16 16l5 5" />
    </Icon>
  );
}

function DevicesIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="13" height="10" />
      <path d="M7 19h9" />
      <rect x="17" y="10" width="5" height="9" />
    </Icon>
  );
}

function ArchiveIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" />
      <path d="M3 9h18M8 5v14" />
    </Icon>
  );
}

function ImportIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 4v10M8 10l4 4 4-4" />
      <path d="M4 17v3h16v-3" />
    </Icon>
  );
}

function LinkIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M10 14a4 4 0 006 0l3-3a4 4 0 00-6-6l-1 1" />
      <path d="M14 10a4 4 0 00-6 0l-3 3a4 4 0 006 6l1-1" />
    </Icon>
  );
}

function ImageIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="4" width="18" height="16" />
      <path d="M3 15l5-5 4 4 3-3 6 6" />
    </Icon>
  );
}

function NoteIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 4h14v16H5z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </Icon>
  );
}

function PdfIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M15 3v4h4" />
    </Icon>
  );
}

function VideoIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="4" width="18" height="16" />
      <path d="M10 9l5 3-5 3z" />
    </Icon>
  );
}

function ListIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 6h16M4 12h16M4 18h10" />
    </Icon>
  );
}

const FEATURES = [
  {
    index: "01",
    title: "Save anything",
    body: "Links, notes, images and PDFs all land in one library — from the share sheet, the browser button, or a single input.",
    icon: BookmarkIcon,
    wide: true,
  },
  {
    index: "02",
    title: "AI tags & summaries",
    body: "Every save is tagged and summarised automatically. Point it at a local model if you would rather keep inference on your own machine.",
    icon: SparkleIcon,
    wide: false,
    accent: true,
  },
  {
    index: "03",
    title: "Search that finds it",
    body: "Full-text and semantic search across everything you have saved. Describe it badly; it will still find it.",
    icon: SearchIcon,
    wide: false,
  },
  {
    index: "04",
    title: "Everywhere you browse",
    body: "Chrome, Firefox and Safari extensions, plus iOS and Android apps with offline reading for the commute.",
    icon: DevicesIcon,
    wide: true,
  },
  {
    index: "05",
    title: "Never lose a page",
    body: "Full-page archive and video archive keep a copy of the original, even after the source changes or disappears.",
    icon: ArchiveIcon,
    wide: true,
  },
  {
    index: "06",
    title: "Bring your library",
    body: "Import from Chrome, Pocket, Linkwarden, Omnivore and others. RSS auto-hoarding pulls in the feeds you follow.",
    icon: ImportIcon,
    wide: false,
  },
] as const;

const TRUST_POINTS = [
  "AGPL-3.0",
  "Self-hostable",
  "No credit card",
  "Free while hosted",
] as const;

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle color theme"
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center border border-border text-foreground transition-colors hover:bg-accent hover:text-accent-foreground motion-reduce:transition-none ${FOCUS_RING}`}
    >
      <SunIcon className="hidden size-[18px] dark:block" />
      <MoonIcon className="block size-[18px] dark:hidden" />
    </button>
  );
}

function Tag({
  accent = false,
  children,
}: {
  accent?: boolean;
  children: string;
}) {
  return (
    <span
      className={
        accent
          ? "border border-primary bg-primary/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] text-foreground"
          : "border border-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] text-muted-foreground"
      }
    >
      {children}
    </span>
  );
}

function BrowserMock() {
  return (
    <div className="min-w-0" aria-hidden="true">
      <div className="border border-border bg-card">
        <div className="flex items-center gap-3 border-b border-border bg-muted px-3.5 py-2.5">
          <span className="flex shrink-0 gap-1.5">
            <i className="block size-[7px] bg-border" />
            <i className="block size-[7px] bg-border" />
            <i className="block size-[7px] bg-border" />
          </span>
          <span className="min-w-0 flex-1 truncate border border-border bg-card px-2 py-1 font-mono text-[9px] tracking-[0.04em] text-muted-foreground">
            grugbrain.dev/the-tao-of-grug
          </span>
          <span className="inline-flex shrink-0 items-center gap-1.5 border border-primary bg-primary/10 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-foreground">
            <BookmarkIcon className="size-3" />
            Saved
          </span>
        </div>
        <div className="relative overflow-hidden bg-card p-[18px] pb-6 sm:min-h-[452px] sm:p-7">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
            Essay · Engineering
          </p>
          <div className="mt-3 h-3.5 w-[78%] bg-border" />
          <div className="mt-2.5 h-3.5 w-[52%] bg-border" />
          <div className="mt-[18px] h-2 w-[94%] bg-muted" />
          <div className="mt-[9px] h-2 w-[88%] bg-muted" />
          <div className="mt-[9px] h-2 w-[66%] bg-muted" />
          <div className="my-4 h-[84px] border border-border bg-muted" />
          <div className="h-2 w-[94%] bg-muted" />
          <div className="mt-[9px] h-2 w-[88%] bg-muted" />
          <div className="mt-[9px] h-2 w-[66%] bg-muted" />

          <div className="mt-6 grid gap-3 sm:absolute sm:top-14 sm:right-6 sm:mt-0 sm:block sm:h-[340px] sm:w-[min(300px,86%)]">
            <article className="border border-border bg-card p-[18px] sm:absolute sm:inset-x-0 sm:top-0 sm:-translate-x-2 sm:-rotate-[4deg]">
              <div className="flex items-center justify-between gap-3">
                <span className="border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-foreground">
                  PDF
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-muted-foreground">
                  Saved 09:12
                </span>
              </div>
              <p className="mt-3 text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] text-foreground">
                Designing calm interfaces
              </p>
              <p className="mt-1 break-words font-mono text-[9px] tracking-[0.04em] text-muted-foreground">
                read.cv/essays/calm-interfaces
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <Tag>#design</Tag>
                <Tag>#reading</Tag>
              </div>
            </article>

            <article className="border border-border bg-card p-[18px] sm:absolute sm:inset-x-0 sm:top-[66px] sm:translate-x-[7px] sm:rotate-[2.5deg]">
              <div className="flex items-center justify-between gap-3">
                <span className="border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-foreground">
                  Image
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-muted-foreground">
                  Saved 11:48
                </span>
              </div>
              <p className="mt-3 text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] text-foreground">
                Studio wall, Lisbon
              </p>
              <p className="mt-1 break-words font-mono text-[9px] tracking-[0.04em] text-muted-foreground">
                are.na/block/studio-wall
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <Tag>#reference</Tag>
              </div>
            </article>

            <article className="border border-border border-t-2 border-t-primary bg-card p-[18px] sm:absolute sm:inset-x-0 sm:top-[136px]">
              <div className="flex items-center gap-2 border-b border-border pb-2.5">
                <BrandMark className="size-4 text-foreground" />
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-foreground">
                  Jackdaw
                </span>
                <span className="ml-auto border border-primary px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-foreground">
                  Saved
                </span>
              </div>
              <p className="mt-3 text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] text-foreground">
                The Grug Brained Developer
              </p>
              <p className="mt-1 break-words font-mono text-[9px] tracking-[0.04em] text-muted-foreground">
                grugbrain.dev
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <Tag accent>#ai-tagged</Tag>
                <Tag>#engineering</Tag>
                <Tag>#classic</Tag>
              </div>
              <p className="mt-3 text-[12px] leading-[1.5] text-muted-foreground">
                AI summary: a short essay on keeping software simple, with tags
                and a full-page archive attached.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <a
        href="#main"
        className={`sr-only focus:not-sr-only focus:bg-foreground focus:px-4 focus:py-2 focus:font-mono focus:text-[11px] focus:uppercase focus:tracking-[0.12em] focus:text-background ${FOCUS_RING}`}
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-3 px-6 lg:px-12">
          <Link
            href="/"
            aria-label="Jackdaw home"
            className={`flex min-w-0 items-center gap-2.5 ${FOCUS_RING}`}
          >
            <BrandMark className="size-[26px] shrink-0 text-foreground" />
            <span className="text-base font-semibold tracking-[-0.02em] whitespace-nowrap sm:text-[18px]">
              Jackdaw
            </span>
            <span className="hidden border-l border-border pl-2.5 font-mono text-[9px] uppercase tracking-[0.14em] whitespace-nowrap text-foreground md:inline">
              Hosted free
            </span>
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/signin"
              className={`hidden text-sm text-foreground transition-opacity hover:opacity-80 sm:inline motion-reduce:transition-none ${FOCUS_RING}`}
            >
              Sign in
            </Link>
            <ThemeToggle />
            <Link
              href="/signup"
              className={`inline-flex items-center justify-center border border-border px-2 py-2.5 text-[11px] font-semibold whitespace-nowrap text-foreground transition-colors hover:border-foreground hover:bg-accent motion-reduce:transition-none sm:px-4 sm:text-sm ${FOCUS_RING}`}
            >
              Create your free account
            </Link>
          </nav>
        </div>
      </header>

      <main id="main">
        <section aria-labelledby="hero-title">
          <div className="mx-auto grid w-full max-w-[1240px] items-center gap-11 px-6 pt-16 pb-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:px-12 lg:pt-[88px] lg:pb-24">
            <div className="min-w-0">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground">
                Free tool · Hosted by DHDTech.io
              </p>
              <h1
                id="hero-title"
                className="text-[2.75rem] leading-[0.94] font-semibold tracking-[-0.05em] sm:text-[3.5rem] md:text-[4.25rem] lg:text-[5rem] xl:text-[6rem]"
              >
                Keep everything you find<span className="text-primary">.</span>
              </h1>
              <p className="mt-7 max-w-[54ch] text-[17px] leading-[1.6] text-foreground sm:text-[18px]">
                Save links, notes, images and PDFs in one library. AI tags and
                summarises every save, and full-text plus semantic search finds
                it again in seconds. Hosted free by DHDTech.io.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/signup"
                  className={`inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-xl font-bold leading-none text-primary-foreground transition-[filter] hover:brightness-95 motion-reduce:transition-none ${FOCUS_RING}`}
                >
                  Create your free account
                  <ArrowRightIcon className="size-4" />
                </Link>
                <a
                  href={SOURCE_URL}
                  className={`inline-flex items-center justify-center border border-border px-5 py-3 text-base font-semibold leading-none text-foreground transition-colors hover:border-foreground hover:bg-accent motion-reduce:transition-none ${FOCUS_RING}`}
                >
                  View the source
                </a>
              </div>
              <p className="mt-5 text-sm text-foreground">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className={`text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground motion-reduce:transition-none ${FOCUS_RING}`}
                >
                  Sign in
                </Link>
              </p>
            </div>

            <BrowserMock />
          </div>
        </section>

        <div className="border-y border-border bg-card">
          <ul
            aria-label="At a glance"
            className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-[18px] lg:px-12"
          >
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        <section aria-labelledby="library-title" className="pt-16 pb-20 lg:pt-[88px] lg:pb-24">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-12">
            <div className="mb-8 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end sm:gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground">
                  The library
                </p>
                <h2
                  id="library-title"
                  className="mt-2.5 max-w-[24ch] text-[1.7rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[2.2rem] lg:text-[2.6rem]"
                >
                  Links, images, notes, PDFs — one place.
                </h2>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] whitespace-nowrap text-foreground sm:pb-1">
                6 items · 1 library
              </p>
            </div>

            <div className="columns-1 gap-[18px] md:columns-2 lg:columns-3">
              <article className="mb-[18px] break-inside-avoid border border-border bg-card p-[18px] transition-colors hover:border-foreground motion-reduce:transition-none">
                <p className="mb-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  <LinkIcon className="size-3.5 shrink-0 text-foreground" />
                  Link · 2h ago
                </p>
                <h3 className="text-[16px] font-semibold leading-[1.35] tracking-[-0.02em]">
                  The Grug Brained Developer
                </h3>
                <p className="mt-1.5 break-words font-mono text-[10px] tracking-[0.04em] text-muted-foreground">
                  grugbrain.dev
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Tag>#engineering</Tag>
                  <Tag>#classic</Tag>
                </div>
              </article>

              <article className="mb-[18px] break-inside-avoid border border-border bg-card p-[18px] transition-colors hover:border-foreground motion-reduce:transition-none">
                <p className="mb-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  <ImageIcon className="size-3.5 shrink-0 text-foreground" />
                  Image · #reference
                </p>
                <svg
                  viewBox="0 0 400 260"
                  role="img"
                  aria-label="Flat abstract poster: stone rectangles, a dark panel and an indigo square"
                  className="mb-3 block h-auto w-full border border-border fill-muted"
                >
                  <rect width="400" height="260" className="fill-muted" />
                  <rect x="36" y="36" width="118" height="188" className="fill-border" />
                  <rect x="170" y="76" width="194" height="112" className="fill-primary" />
                  <rect x="286" y="32" width="72" height="72" className="fill-muted-foreground" />
                  <rect x="170" y="204" width="194" height="4" className="fill-border" />
                </svg>
                <h3 className="text-[16px] font-semibold leading-[1.35] tracking-[-0.02em]">
                  Studio wall, Lisbon
                </h3>
                <p className="mt-1.5 break-words font-mono text-[10px] tracking-[0.04em] text-muted-foreground">
                  are.na/block/studio-wall
                </p>
              </article>

              <article className="mb-[18px] break-inside-avoid border border-border bg-card p-[18px] transition-colors hover:border-foreground motion-reduce:transition-none">
                <p className="mb-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  <NoteIcon className="size-3.5 shrink-0 text-foreground" />
                  Note · today
                </p>
                <p className="text-[15px] leading-[1.55] text-muted-foreground">
                  Try semantic search before importing two thousand bookmarks.
                  It finds the messy ones.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Tag>#workflow</Tag>
                </div>
              </article>

              <article className="mb-[18px] break-inside-avoid border border-border bg-card p-[18px] transition-colors hover:border-foreground motion-reduce:transition-none">
                <p className="mb-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  <PdfIcon className="size-3.5 shrink-0 text-foreground" />
                  PDF · 4.2 MB
                </p>
                <div className="flex items-center gap-3">
                  <div className="grid size-10 shrink-0 place-items-center border border-border bg-muted text-foreground">
                    <PdfIcon className="size-[18px]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="break-words text-sm font-semibold leading-[1.35]">
                      Systems design primer.pdf
                    </h3>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.08em] text-muted-foreground">
                      Archived · #systems
                    </p>
                  </div>
                </div>
              </article>

              <article className="mb-[18px] break-inside-avoid border border-border bg-card p-[18px] transition-colors hover:border-foreground motion-reduce:transition-none">
                <p className="mb-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  <VideoIcon className="size-3.5 shrink-0 text-foreground" />
                  Video · archived
                </p>
                <h3 className="text-[16px] font-semibold leading-[1.35] tracking-[-0.02em]">
                  The lost art of reading
                </h3>
                <p className="mt-1.5 break-words font-mono text-[10px] tracking-[0.04em] text-muted-foreground">
                  talks.local/reading
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Tag>#talks</Tag>
                  <Tag>#video</Tag>
                </div>
              </article>

              <article className="mb-[18px] break-inside-avoid border border-border bg-card p-[18px] transition-colors hover:border-foreground motion-reduce:transition-none">
                <p className="mb-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  <ListIcon className="size-3.5 shrink-0 text-foreground" />
                  Note · pinned
                </p>
                <p className="text-[15px] leading-[1.55] text-muted-foreground">
                  A library is a tool for thinking later. Save the thing now;
                  let the AI tags do the filing.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Tag>#method</Tag>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section aria-labelledby="features-title" className="pb-20 lg:pb-28">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-12">
            <div className="mb-8 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end sm:gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground">
                  What it does
                </p>
                <h2
                  id="features-title"
                  className="mt-2.5 text-[1.7rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[2.2rem] lg:text-[2.6rem]"
                >
                  A library that keeps up.
                </h2>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] whitespace-nowrap text-foreground sm:pb-1">
                06 capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
              {FEATURES.map((feature) => {
                const FeatureIcon = feature.icon;
                const isAccent = "accent" in feature && feature.accent;
                return (
                  <article
                    key={feature.index}
                    className={`flex min-h-[252px] flex-col border bg-card p-7 transition-colors hover:border-foreground motion-reduce:transition-none ${
                      feature.wide ? "lg:col-span-7" : "lg:col-span-5"
                    } ${isAccent ? "border-primary" : "border-border"}`}
                  >
                    <div className="mb-auto flex items-start justify-between gap-4">
                      <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
                        {feature.index}
                      </span>
                      {isAccent ? (
                        <span className="grid size-11 place-items-center bg-primary text-primary-foreground">
                          <FeatureIcon className="size-6" />
                        </span>
                      ) : (
                        <FeatureIcon className="size-6 text-foreground" />
                      )}
                    </div>
                    <h3 className="mt-8 mb-2.5 text-xl font-semibold tracking-[-0.02em]">
                      {feature.title}
                    </h3>
                    <p className="max-w-[48ch] text-base leading-[1.6] text-muted-foreground">
                      {feature.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section aria-labelledby="why-title" className="pb-20 lg:pb-28">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-5 border border-border bg-card p-6 sm:gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12 lg:p-12">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground">
                  No catch
                </p>
                <h2
                  id="why-title"
                  className="mt-3 text-[1.8rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[2.4rem]"
                >
                  Why free, and who hosts it?
                </h2>
              </div>
              <div className="space-y-[18px] text-[17px] leading-[1.65] text-muted-foreground">
                <p>
                  DHDTech.io runs Jackdaw on its own infrastructure as part of
                  its free tools. There is no paid tier, no credit card, and no
                  data business behind it.
                </p>
                <p>
                  The software is open source under AGPL-3.0, so you can
                  self-host your own instance or export your data and leave at
                  any time.
                </p>
                <p>
                  <a
                    href={SOURCE_URL}
                    className={`text-foreground underline decoration-primary underline-offset-4 transition-colors hover:decoration-foreground motion-reduce:transition-none ${FOCUS_RING}`}
                  >
                    Read the source on GitHub →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto w-full max-w-[1240px] px-6 py-10 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-border pb-6">
            <div className="flex items-center gap-2.5 text-base font-semibold">
              <BrandMark className="size-[22px] text-foreground" />
              <span>Jackdaw</span>
              <span className="font-mono text-[9px] font-normal tracking-[0.1em] text-muted-foreground">
                Hosted by DHDTech.io
              </span>
            </div>
            <nav
              aria-label="Footer"
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground"
            >
              <Link
                href="/signin"
                className={`transition-colors hover:text-foreground motion-reduce:transition-none ${FOCUS_RING}`}
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className={`transition-colors hover:text-foreground motion-reduce:transition-none ${FOCUS_RING}`}
              >
                Create account
              </Link>
              <a
                href={SOURCE_URL}
                className={`transition-colors hover:text-foreground motion-reduce:transition-none ${FOCUS_RING}`}
              >
                Source
              </a>
              <a
                href="https://jackdaw.dhdtech.io"
                className={`transition-colors hover:text-foreground motion-reduce:transition-none ${FOCUS_RING}`}
              >
                jackdaw.dhdtech.io
              </a>
            </nav>
          </div>
          <div className="flex flex-col items-start justify-between gap-3 pt-5 sm:flex-row sm:items-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
              Free tool · Hosted by DHDTech.io
            </p>
            <a
              href={SOURCE_URL}
              className={`font-mono text-[9px] uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:text-foreground motion-reduce:transition-none ${FOCUS_RING}`}
            >
              Built on Karakeep · AGPL-3.0
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
