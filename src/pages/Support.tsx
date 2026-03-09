import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

const PATREON_JOIN = "https://www.patreon.com/15019639/join";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-content py-12 md:py-20 max-w-[720px] animate-fade-in">
        <span className="overline text-foreground/[0.35]">Support Third Door Stories</span>
        <h1 className="mt-6 mb-8">
          Help document the paths that matter.
        </h1>
        <p className="body-base text-foreground/[0.65] mb-12">
          Third Door Stories is independent media. No ads, no sponsors dictating content.
          Your support directly funds production, travel, and keeping this free for everyone.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Underdog Supporter */}
          <div className="card-surface p-6 flex flex-col gap-4">
            <span className="overline text-primary">CA$6.97 / month</span>
            <h3>Underdog Supporter</h3>
            <p className="body-small text-foreground/[0.45]">
              For people who want to quietly keep this series alive and see more than just the final trailer. Founding supporters are recognized as the OG underdogs.
            </p>
            <ul className="flex flex-col gap-2 body-small text-foreground/[0.65]">
              <li>• Early releases (videos & written pieces, 1–2 weeks early)</li>
              <li>• Monthly personal updates (longform essays or video reflections)</li>
              <li>• Raw cuts & director's commentary</li>
              <li>• Case study deep dives on education, work & creativity</li>
              <li>• Behind-the-scenes content</li>
            </ul>
            <a href={PATREON_JOIN} target="_blank" rel="noopener noreferrer" className="mt-2">
              <Button variant="outline" size="lg" className="w-full">
                Join on Patreon
              </Button>
            </a>
          </div>

          {/* Third Door Circle */}
          <div className="card-highlight p-6 flex flex-col gap-4 border border-primary/20">
            <span className="overline text-primary">CA$14.97 / month</span>
            <h3>Third Door Circle</h3>
            <p className="body-small text-foreground/[0.45]">
              For those who live in the builder and creator world, and want closer access and community.
            </p>
            <p className="body-small text-foreground/[0.65] font-medium">Everything in Underdog Supporter, plus:</p>
            <ul className="flex flex-col gap-2 body-small text-foreground/[0.65]">
              <li>• Monthly office hours call (group Zoom, coming soon)</li>
              <li>• Early access to unedited interviews</li>
              <li>• Private creator chat (coming soon)</li>
              <li>• Credit in episodes</li>
            </ul>
            <a href={PATREON_JOIN} target="_blank" rel="noopener noreferrer" className="mt-2">
              <Button variant="gold" size="lg" className="w-full">
                Become a Member
              </Button>
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Support;
