import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeSidebar } from "@/components/home/HomeSidebar";
import { HomePulse } from "@/components/home/HomePulse";
import { HomeHealingNote } from "@/components/home/HomeHealingNote";
import { HomeArchiveTimeline } from "@/components/home/HomeArchiveTimeline";
import { HomeMuseumTeaser } from "@/components/home/HomeMuseumTeaser";
import { HomeInterviewRoom } from "@/components/home/HomeInterviewRoom";
import { HomeCalendarBooks } from "@/components/home/HomeCalendarBooks";
import { SiteFooter } from "@/components/SiteFooter";
import { TOKENS as T } from "@/lib/tokens";

export default function HomePage() {
  return (
    <div
      style={{
        background: T.paper,
        color: T.ink,
        fontFamily: "var(--korean)",
      }}
    >
      <HomeHeader />
      <section
        style={{
          padding: "40px 64px 56px",
          display: "grid",
          gridTemplateColumns: "240px 1fr",
          gap: 40,
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <HomeSidebar />
        <div>
          <HomePulse />
          <HomeHealingNote />
          <HomeArchiveTimeline />
          <HomeMuseumTeaser />
          <HomeInterviewRoom />
          <HomeCalendarBooks />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
