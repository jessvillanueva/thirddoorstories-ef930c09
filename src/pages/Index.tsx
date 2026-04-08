import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import VideoCard from "@/components/VideoCard";
import EssayCard from "@/components/EssayCard";
import FeaturedPost from "@/components/FeaturedPost";


import logo1517 from "@/assets/1517-logo.png";
import logoResidency from "@/assets/residency-logo.png";
import essayTherapy from "@/assets/essay-therapy.jpeg";
import socraticaSymposium from "@/assets/socratica-symposium.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container-content py-12 md:py-20 flex flex-col gap-16 md:gap-20">
        {/* Hero */}
        <section className="flex flex-col gap-6 animate-fade-in">
          <h1>
            These paths exist. They're invisible unless you stumble onto them.
          </h1>
        </section>

        {/* Pilot Video */}
        <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <VideoCard
            label="Pilot Episode"
            caption="Cold email → shoot → edit → launch in 24 days."
            videoId="sf-SUwdZN3A"
            type="youtube"
          />
        </section>

        {/* Canopy Video Pitch */}
        <section className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <VideoCard
            label="Canopy Video Pitch Application"
            caption="direct-to-camera · raw."
            videoId="eRlNemFoI0w"
            type="youtube"
          />
        </section>

        {/* Start Here */}
        <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="card-surface p-6 md:p-8 flex flex-col gap-3">
            <span className="overline text-primary">New here?</span>
            <h3 className="text-lg font-bold text-foreground">Start with the pilot episode above</h3>
            <p className="body-small text-foreground/[0.65]">
              Watch the founders inc pitch, then the pilot. That's the fastest way to understand what Third Door Stories is building.
            </p>
          </div>
        </section>

        {/* Social Proof */}
        <section className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <div className="card-surface p-6 md:p-8">
            <span className="overline text-foreground/[0.35] mb-6 block">Supported by</span>
            <div className="flex items-center justify-center gap-8">
              <img src={logo1517} alt="1517 Fund" className="h-10 object-contain" />
              <img
                src={logoResidency}
                alt="The Residency"
                className="h-12 object-contain"
              />
            </div>
          </div>
        </section>

        {/* From the Studio */}
        <section className="flex flex-col gap-6">
          <span className="overline text-foreground/[0.35]">From the Studio</span>

          {/* Featured Launch Post */}
          <FeaturedPost />

          <div className="grid md:grid-cols-2 gap-6">
            <EssayCard
              readTime="8 min read"
              title="Why Therapy Expansion Will Never Catch Gen Z in Time"
              thesis="The mental health crisis isn't just clinical. It's structural. Not enough therapists. Too many kids in crisis. And 85% who need help can't imagine self-identifying as patients. The case for why microgrants, residencies, and hacker houses implicitly connect to mental health infrastructure in disguise."
              href="https://medium.com/@jess.villanueva/why-therapy-expansion-will-never-catch-up-to-gen-z-in-time-e5ca165d71c5"
              image={essayTherapy}
              external
            />
            <EssayCard
              readTime="Coming soon"
              title="The Origins of the Underworld: How the Builder Scene Actually Started"
              thesis="buildspace. 1517. Emergent Ventures. Y Combinator. The Thiel Fellowship's chaotic early years. The weird little rooms, Discord servers, and SF apartments where this whole ecosystem started, and why most of it stays invisible unless you're already in."
              href="/essays/building-in-public"
              image={socraticaSymposium}
            />
          </div>

          {/* Socratica Symposium W26 */}
          <EssayCard
            readTime="Coming soon"
            title="Socratica Symposium W26"
            thesis="A look inside one of the most interesting builder gatherings happening right now. What happens when you put curious people in a room and let them figure it out together."
            href="/essays/socratica-symposium-w26"
            image={socraticaSymposium}
          />
        </section>

        {/* Bottom Substack CTA */}
        <section className="animate-fade-in">
          <SubstackCTA />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
