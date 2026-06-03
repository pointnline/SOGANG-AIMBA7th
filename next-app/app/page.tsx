import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeSidebar } from "@/components/home/HomeSidebar";
import { HomeHealingNote } from "@/components/home/HomeHealingNote";
import { HomeArchiveTimeline } from "@/components/home/HomeArchiveTimeline";
import { HomeMuseumTeaser } from "@/components/home/HomeMuseumTeaser";
import { HomeContestsTeaser } from "@/components/home/HomeContestsTeaser";
import { HomeInterviewRoom } from "@/components/home/HomeInterviewRoom";
import { HomeCalendarBooks } from "@/components/home/HomeCalendarBooks";
import { HomeAimbaPulse } from "@/components/home/HomeAimbaPulse";
import { SiteFooter } from "@/components/SiteFooter";
import { SubscribeCTA } from "@/components/SubscribeCTA";
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
        className="home-shell"
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
          <HomeArchiveTimeline />
          <HomeHealingNote />
          <SubscribeCTA />
          <HomeMuseumTeaser />
          <HomeCalendarBooks />
          <HomeAimbaPulse />
          <HomeContestsTeaser />
          <HomeInterviewRoom />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
