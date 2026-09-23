import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, Check, ChevronRight, Menu, Phone, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Button } from "@/components/ui/button";
import { facilities, gymConfig, membershipPlans, principles, trainers } from "@/data/gym-config";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/gym-hero.jpg";
import functionalImage from "@/assets/gym-functional.jpg";
import facilitiesImage from "@/assets/gym-facilities.jpg";
import coachesImage from "@/assets/gym-coaches.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FORGE — Strength, Performance & Community" },
      { name: "description", content: "Train with purpose in a premium performance gym built for strength, movement and lasting progress." },
      { property: "og:title", content: "FORGE — Built for More" },
      { property: "og:description", content: "A premium training environment for strength, performance and community." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GymPage,
});

const navItems = ["About", "Facilities", "Membership", "Trainers", "Gallery", "Contact"];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2" aria-label="FORGE home">
      <span className="grid size-8 place-items-center border border-primary text-sm font-extrabold text-primary">F</span>
      <span className="font-display text-xl font-bold uppercase">{gymConfig.name}</span>
    </a>
  );
}

function GymPage() {
  const root = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 1250);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (reduced) return () => window.removeEventListener("scroll", onScroll);

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", { y: 60, opacity: 0, duration: 1, stagger: 0.12, delay: 1.1, ease: "power3.out" });
      gsap.fromTo(".hero-media", { scale: 1.08 }, { scale: 1, duration: 2.2, delay: 0.8, ease: "power2.out" });
      gsap.to(".hero-content", { y: -100, opacity: 0.1, scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: 1 } });
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, { y: 55, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%" } });
      });
      gsap.utils.toArray<HTMLElement>(".parallax-image").forEach((image) => {
        gsap.fromTo(image, { scale: 1.12, yPercent: -4 }, { scale: 1, yPercent: 4, ease: "none", scrollTrigger: { trigger: image.parentElement, start: "top bottom", end: "bottom top", scrub: 1 } });
      });
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const track = document.querySelector<HTMLElement>(".facility-track");
        if (track) gsap.to(track, { x: () => -(track.scrollWidth - window.innerWidth + 80), ease: "none", scrollTrigger: { trigger: ".facilities-pin", start: "top top", end: () => `+=${track.scrollWidth}`, pin: true, scrub: 1, invalidateOnRefresh: true } });
        const gallery = document.querySelector<HTMLElement>(".gallery-track");
        if (gallery) gsap.to(gallery, { x: () => -(gallery.scrollWidth - window.innerWidth + 80), ease: "none", scrollTrigger: { trigger: ".gallery-pin", start: "top top", end: () => `+=${gallery.scrollWidth * 0.8}`, pin: true, scrub: 1, invalidateOnRefresh: true } });
      });
      navItems.concat("Home").forEach((item) => {
        const id = item.toLowerCase();
        ScrollTrigger.create({ trigger: `#${id}`, start: "top center", end: "bottom center", onToggle: (self) => self.isActive && setActive(id) });
      });
    }, root);

    return () => { ctx.revert(); gsap.ticker.remove(tick); lenis.destroy(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={root} className="overflow-clip bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className={`preloader ${loaded ? "preloader-done" : ""}`} aria-hidden={loaded}>
        <div className="font-display text-5xl font-bold tracking-normal">FORGE</div>
        <div className="mt-3 text-[10px] font-bold uppercase text-muted-foreground">Train hard. Move better.</div>
        <div className="preloader-bar mt-8 h-px w-48 bg-primary" />
      </div>

      <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${scrolled ? "border-border bg-background/90 py-3 backdrop-blur-md" : "border-transparent bg-transparent py-5"}`}>
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 lg:px-10">
          <Logo />
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => <button key={item} onClick={() => goTo(item.toLowerCase())} className={`nav-link ${active === item.toLowerCase() ? "text-primary" : "text-foreground/70"}`}>{item}</button>)}
          </nav>
          <div className="hidden lg:block"><Button onClick={() => goTo("contact")} className="min-h-10 px-5">Join now <ArrowRight size={15} /></Button></div>
          <button className="grid size-11 place-items-center lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>
      <div className={`mobile-menu ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="space-y-4 pt-24">{navItems.map((item) => <button className="block font-display text-4xl font-bold uppercase" key={item} onClick={() => goTo(item.toLowerCase())}>{item}</button>)}</div>
      </div>

      <main>
        <section id="home" className="relative min-h-[100svh] overflow-hidden">
          <img src={heroImage} alt="Athlete performing a barbell squat at FORGE" width={1920} height={1088} fetchPriority="high" className="hero-media absolute inset-0 h-full w-full object-cover object-[64%_center]" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="hero-content relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-5 pb-20 pt-32 lg:px-10 lg:pb-16">
            <div className="hero-reveal mb-5 flex items-center gap-3 text-[10px] font-bold uppercase text-primary"><span className="h-px w-10 bg-primary" />Strength · Performance · Community</div>
            <h1 className="max-w-5xl font-display text-[clamp(4.3rem,11vw,10.5rem)] font-bold uppercase leading-[0.78] tracking-normal">
              <span className="hero-reveal block">Built</span><span className="hero-reveal block">for more.</span>
            </h1>
            <div className="hero-reveal mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <p className="max-w-md text-sm leading-7 text-foreground/75 md:text-base">Train with purpose. Build strength. Become your strongest version.</p>
              <div className="flex flex-wrap gap-3"><Button onClick={() => goTo("contact")}>Join now <ArrowRight size={16} /></Button><Button variant="outline" onClick={() => goTo("facilities")}>Explore the gym</Button></div>
            </div>
            <button onClick={() => goTo("about")} className="hero-reveal mt-10 flex w-fit items-center gap-3 text-[9px] font-bold uppercase text-foreground/50"><span className="grid size-8 place-items-center rounded-full border border-foreground/30"><ArrowDown size={13} /></span>Scroll to explore</button>
          </div>
        </section>

        <section id="about" className="section-pad mx-auto max-w-[1600px] px-5 lg:px-10">
          <div className="mb-14 grid gap-6 lg:grid-cols-2"><p className="eyebrow reveal">01 / Our philosophy</p><h2 className="section-title reveal">More than<br />a gym.</h2></div>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div className="sticky-media overflow-hidden"><img src={functionalImage} loading="lazy" alt="Athlete training with battle ropes" width={1280} height={1600} className="parallax-image h-full w-full object-cover" /></div>
            <div className="lg:pt-24">
              <p className="reveal mb-16 max-w-xl text-2xl font-medium leading-snug md:text-4xl">An environment built for people who want to train harder, move better and make progress.</p>
              <div>{principles.map((item) => <article key={item.index} className="reveal grid grid-cols-[3.5rem_1fr] gap-4 border-t border-border py-7"><span className="text-xs font-bold text-primary">{item.index}</span><div><h3 className="font-display text-2xl font-bold uppercase">{item.name}</h3><p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">{item.copy}</p></div></article>)}</div>
            </div>
          </div>
        </section>

        <section id="facilities" className="facilities-pin min-h-screen bg-surface py-20 lg:overflow-hidden">
          <div className="mx-auto mb-12 flex max-w-[1600px] items-end justify-between px-5 lg:px-10"><div><p className="eyebrow">02 / The space</p><h2 className="section-title mt-5">Built to<br />perform.</h2></div><p className="hidden max-w-xs text-sm text-muted-foreground md:block">Vertical motion. Horizontal impact. Explore a floor designed around the work.</p></div>
          <div className="facility-track flex flex-col gap-5 px-5 lg:w-max lg:flex-row lg:px-10">
            {facilities.map((facility, i) => <article key={facility.name} className="facility-card group relative h-[62vh] min-h-[480px] overflow-hidden lg:h-[58vh] lg:w-[62vw] lg:max-w-4xl"><img src={i === 3 ? functionalImage : facilitiesImage} loading="lazy" width={i === 3 ? 1280 : 1920} height={i === 3 ? 1600 : 1088} alt={`${facility.name} training area`} className={cn("h-full w-full object-cover transition-transform duration-700 group-hover:scale-105", facility.crop)} /><div className="absolute inset-0 bg-card-overlay" /><span className="absolute left-6 top-6 text-xs font-bold text-primary">{facility.index}</span><div className="absolute inset-x-6 bottom-6"><h3 className="font-display text-4xl font-bold uppercase md:text-6xl">{facility.name}</h3><p className="mt-3 max-w-md text-sm text-foreground/70">{facility.copy}</p></div></article>)}
          </div>
        </section>

        <section id="membership" className="section-pad mx-auto max-w-[1600px] px-5 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2"><div><p className="eyebrow reveal">03 / Membership</p><h2 className="section-title reveal mt-5">Choose your<br />commitment.</h2></div><p className="reveal max-w-md self-end text-sm leading-6 text-muted-foreground">Choose the level of support that fits your training. Pricing is tailored to the gym and available on enquiry.</p></div>
          <div className="mt-16 grid gap-px bg-border lg:grid-cols-3">{membershipPlans.map((plan, index) => <article className={`plan-card reveal relative flex min-h-[520px] flex-col bg-background p-7 md:p-10 ${plan.featured ? "featured-plan" : ""}`} key={plan.name}><span className="text-xs text-muted-foreground">0{index + 1}</span>{plan.featured && <span className="absolute right-7 top-7 bg-primary px-3 py-1 text-[9px] font-bold uppercase text-primary-foreground">Most complete</span>}<h3 className="mt-16 font-display text-4xl font-bold uppercase">{plan.name}</h3><p className="mt-2 text-sm text-muted-foreground">{plan.duration}</p><div className="my-9 text-3xl font-semibold text-primary">{plan.price}</div><ul className="space-y-4">{plan.features.map((feature) => <li className="flex gap-3 text-sm" key={feature}><Check size={16} className="text-primary" />{feature}</li>)}</ul><Button variant={plan.featured ? "primary" : "outline"} onClick={() => goTo("contact")} className="mt-auto w-full">Enquire now <ArrowRight size={15} /></Button></article>)}</div>
        </section>

        <section id="trainers" className="bg-foreground text-background">
          <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2"><div className="relative min-h-[75vh] overflow-hidden"><img src={coachesImage} loading="lazy" alt="FORGE coaching team placeholders" width={1600} height={1200} className="parallax-image absolute inset-0 h-full w-full object-cover" /></div><div className="flex flex-col justify-center px-5 py-20 lg:px-16"><p className="eyebrow text-background/50">04 / The coaches</p><h2 className="section-title mt-5">Meet your<br />coaches.</h2><p className="mt-8 max-w-lg text-sm leading-7 text-background/60">Great training starts with people who pay attention. Coach details are ready for the gym owner to add.</p><div className="mt-12">{trainers.map((trainer) => <div key={trainer.index} className="reveal flex items-end justify-between border-t border-background/20 py-7"><div><span className="text-xs text-lime-dark">{trainer.index}</span><h3 className="mt-2 font-display text-2xl font-bold uppercase">{trainer.name}</h3><p className="mt-1 text-xs uppercase text-background/50">{trainer.role}</p></div><ArrowRight /></div>)}</div></div></div>
        </section>

        <section id="gallery" className="gallery-pin relative min-h-screen overflow-hidden bg-background py-20">
          <div className="mx-auto mb-12 flex max-w-[1600px] items-end justify-between px-5 lg:px-10"><div><p className="eyebrow">05 / Inside FORGE</p><h2 className="section-title mt-5">Train. Push.<br />Repeat.</h2></div><span className="hidden text-xs uppercase text-muted-foreground md:block">A place for the work</span></div>
          <div className="gallery-track flex flex-col gap-5 px-5 lg:w-max lg:flex-row lg:px-10">
            {[heroImage, functionalImage, facilitiesImage, coachesImage].map((image, i) => <figure className={`gallery-frame overflow-hidden ${i % 2 ? "lg:w-[34vw]" : "lg:w-[48vw]"}`} key={image}><img src={image} loading="lazy" width={1600} height={1200} alt={["Strength training", "Functional training", "Gym floor", "Coaching team"][i]} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" /><figcaption className="absolute bottom-5 left-5 text-xs font-bold uppercase">0{i + 1} / {['Strength', 'Movement', 'Space', 'Coaching'][i]}</figcaption></figure>)}
          </div>
        </section>

        <ContactSection />

        <section className="final-cta relative min-h-[90vh] overflow-hidden">
          <img src={heroImage} loading="lazy" alt="Strength training at FORGE" width={1920} height={1088} className="parallax-image absolute inset-0 h-full w-full object-cover object-[65%_center]" /><div className="absolute inset-0 bg-final-overlay" /><div className="relative z-10 mx-auto flex min-h-[90vh] max-w-[1600px] flex-col justify-center px-5 lg:px-10"><p className="eyebrow reveal">Your next chapter</p><h2 className="reveal mt-6 max-w-5xl font-display text-[clamp(3.5rem,9vw,8.5rem)] font-bold uppercase leading-[.82]">Your strongest<br />version<br /><span className="text-primary">starts here.</span></h2><Button onClick={() => goTo("contact")} className="reveal mt-10 w-fit">Join the gym <ArrowRight size={16} /></Button></div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-12 lg:px-10"><div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-10 md:flex-row"><div><Logo /><p className="mt-4 max-w-xs text-xs leading-5 text-muted-foreground">A premium environment for strength, performance and community.</p></div><div className="grid grid-cols-2 gap-12 text-xs uppercase"><div><p className="mb-4 text-muted-foreground">Explore</p>{navItems.slice(0, 4).map((item) => <button onClick={() => goTo(item.toLowerCase())} className="mb-2 block" key={item}>{item}</button>)}</div><div><p className="mb-4 text-muted-foreground">Contact</p><button onClick={() => goTo("contact")} className="mb-2 block">Enquire</button><p className="text-muted-foreground">Details available soon</p></div></div></div><div className="mx-auto mt-14 flex max-w-[1600px] flex-wrap justify-between gap-3 border-t border-border pt-6 text-[10px] uppercase text-muted-foreground"><span>© 2026 {gymConfig.name}. All rights reserved.</span><span>Train hard. Move better.</span></div></footer>

      {(gymConfig.phone || gymConfig.whatsapp) && <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-2">{gymConfig.phone && <a href={`tel:${gymConfig.phone}`} className="floating-action" aria-label="Call now"><Phone size={18} /></a>}</div>}
    </div>
  );
}

function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setStatus("sending");
    window.setTimeout(() => setStatus("success"), 800);
  };
  return (
    <section id="contact" className="section-pad bg-surface px-5 lg:px-10"><div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow reveal">06 / Start here</p><h2 className="section-title reveal mt-5">Ready to<br />start?</h2><p className="reveal mt-8 max-w-md text-sm leading-7 text-muted-foreground">Tell us what you want from your training. The team will help you find the right way in.</p><div className="reveal mt-14 border-t border-border py-6"><p className="text-[10px] uppercase text-muted-foreground">Location</p><div className="mt-4 grid h-44 place-items-center border border-border bg-background text-xs font-bold uppercase text-muted-foreground">Google map location</div><p className="mt-3 text-xs text-muted-foreground">Address available from the gym</p></div></div>
      <form onSubmit={submit} className="reveal grid gap-5 md:grid-cols-2"><Field label="Name" name="name" required placeholder="Your name" /><Field label="Phone number" name="phone" type="tel" required placeholder="Your number" /><Field label="Email" name="email" type="email" required placeholder="you@email.com" /><label className="field-label">Interested membership<select required name="plan" className="field"><option value="">Choose a plan</option>{membershipPlans.map((plan) => <option key={plan.name}>{plan.name}</option>)}</select></label><label className="field-label md:col-span-2">Message<textarea name="message" rows={5} className="field resize-none" placeholder="Tell us about your training goals" /></label><div className="md:col-span-2">{status === "success" ? <div className="flex min-h-12 items-center gap-3 border border-primary px-5 text-sm text-primary"><Check size={17} /> Enquiry captured for this demo.</div> : <Button type="submit" disabled={status === "sending"} className="w-full md:w-auto">{status === "sending" ? "Sending..." : "Send enquiry"}<ChevronRight size={16} /></Button>}<p className="mt-3 text-[10px] text-muted-foreground">Demo form — connect a delivery service before launch.</p></div></form></div></section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return <label className="field-label">{label}<input {...props} className="field" /></label>;
}