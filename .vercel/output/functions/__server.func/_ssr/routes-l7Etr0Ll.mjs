import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Check, i as ChevronRight, n as Phone, o as ArrowRight, r as Menu, s as ArrowDown, t as X } from "../_libs/lucide-react.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-l7Etr0Ll.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("group inline-flex items-center justify-center gap-3 border text-xs font-bold uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			default: "border-primary bg-primary text-primary-foreground hover:bg-foreground hover:text-background",
			primary: "border-primary bg-primary text-primary-foreground hover:bg-foreground hover:text-background",
			outline: "border-foreground/35 bg-transparent text-foreground hover:border-primary hover:text-primary",
			ghost: "border-transparent bg-transparent text-foreground hover:text-primary",
			secondary: "border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80",
			destructive: "border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/90",
			link: "min-h-0 border-transparent bg-transparent px-0 text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "min-h-12 px-6",
			sm: "min-h-9 px-3",
			lg: "min-h-14 px-8",
			icon: "size-10",
			"icon-sm": "size-8",
			"icon-lg": "size-12"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = (0, import_react.forwardRef)(function Button({ asChild, className, variant, size, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		ref,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
});
var gymConfig = {
	name: "FORGE",
	tagline: "Train hard. Move better.",
	phone: "",
	whatsapp: "",
	address: "",
	googleMapsUrl: "",
	instagram: "",
	facebook: "",
	youtube: ""
};
var principles = [
	{
		index: "01",
		name: "Training",
		copy: "Purpose-led sessions built around strength, movement and measurable progress."
	},
	{
		index: "02",
		name: "Equipment",
		copy: "A performance floor designed to keep every rep focused and uninterrupted."
	},
	{
		index: "03",
		name: "Community",
		copy: "Serious energy without the ego. Show up, put in the work and belong."
	},
	{
		index: "04",
		name: "Results",
		copy: "Consistent coaching, clear intent and the environment to keep moving forward."
	}
];
var facilities = [
	{
		index: "01",
		name: "Strength",
		copy: "Racks, platforms and free weights for focused strength work.",
		crop: "object-center"
	},
	{
		index: "02",
		name: "Performance",
		copy: "Open training lanes built for power, speed and conditioning.",
		crop: "object-[70%_center]"
	},
	{
		index: "03",
		name: "Cardio",
		copy: "A dedicated zone for steady work and high-output intervals.",
		crop: "object-right"
	},
	{
		index: "04",
		name: "Functional",
		copy: "Space to move freely, train dynamically and build real capacity.",
		crop: "object-[30%_center]"
	}
];
var membershipPlans = [
	{
		name: "Essential",
		duration: "Flexible membership",
		price: "Enquire",
		features: [
			"Gym floor access",
			"Strength equipment",
			"Locker access"
		]
	},
	{
		name: "Performance",
		duration: "Full training access",
		price: "Enquire",
		featured: true,
		features: [
			"Full gym access",
			"Functional training zone",
			"Coach onboarding"
		]
	},
	{
		name: "Coached",
		duration: "Personalised training",
		price: "Enquire",
		features: [
			"Full facility access",
			"Personal coaching",
			"Progress reviews"
		]
	}
];
var trainers = [{
	index: "01",
	name: "Coach profile",
	role: "Strength & conditioning",
	align: "left"
}, {
	index: "02",
	name: "Coach profile",
	role: "Performance training",
	align: "right"
}];
var gym_hero_default = "/assets/gym-hero-BH94TGaR.jpg";
var gym_functional_default = "/assets/gym-functional-CAIP9VRk.jpg";
var gym_facilities_default = "/assets/gym-facilities-BiiNg9FV.jpg";
var gym_coaches_default = "/assets/gym-coaches-DBw9nqFm.jpg";
var navItems = [
	"About",
	"Facilities",
	"Membership",
	"Trainers",
	"Gallery",
	"Contact"
];
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#home",
		className: "flex items-center gap-2",
		"aria-label": "FORGE home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-8 place-items-center border border-primary text-sm font-extrabold text-primary",
			children: "F"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-xl font-bold uppercase",
			children: gymConfig.name
		})]
	});
}
function GymPage() {
	const root = (0, import_react.useRef)(null);
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("home");
	(0, import_react.useEffect)(() => {
		const timer = window.setTimeout(() => setLoaded(true), 1250);
		return () => window.clearTimeout(timer);
	}, []);
	(0, import_react.useEffect)(() => {
		gsapWithCSS.registerPlugin(ScrollTrigger);
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const onScroll = () => setScrolled(window.scrollY > 48);
		window.addEventListener("scroll", onScroll, { passive: true });
		if (reduced) return () => window.removeEventListener("scroll", onScroll);
		const lenis = new Lenis({
			lerp: .09,
			smoothWheel: true
		});
		const tick = (time) => lenis.raf(time * 1e3);
		gsapWithCSS.ticker.add(tick);
		lenis.on("scroll", ScrollTrigger.update);
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".hero-reveal", {
				y: 60,
				opacity: 0,
				duration: 1,
				stagger: .12,
				delay: 1.1,
				ease: "power3.out"
			});
			gsapWithCSS.fromTo(".hero-media", { scale: 1.08 }, {
				scale: 1,
				duration: 2.2,
				delay: .8,
				ease: "power2.out"
			});
			gsapWithCSS.to(".hero-content", {
				y: -100,
				opacity: .1,
				scrollTrigger: {
					trigger: "#home",
					start: "top top",
					end: "bottom top",
					scrub: 1
				}
			});
			gsapWithCSS.utils.toArray(".reveal").forEach((element) => {
				gsapWithCSS.from(element, {
					y: 55,
					opacity: 0,
					duration: .9,
					ease: "power3.out",
					scrollTrigger: {
						trigger: element,
						start: "top 88%"
					}
				});
			});
			gsapWithCSS.utils.toArray(".parallax-image").forEach((image) => {
				gsapWithCSS.fromTo(image, {
					scale: 1.12,
					yPercent: -4
				}, {
					scale: 1,
					yPercent: 4,
					ease: "none",
					scrollTrigger: {
						trigger: image.parentElement,
						start: "top bottom",
						end: "bottom top",
						scrub: 1
					}
				});
			});
			gsapWithCSS.matchMedia().add("(min-width: 1024px)", () => {
				const track = document.querySelector(".facility-track");
				if (track) gsapWithCSS.to(track, {
					x: () => -(track.scrollWidth - window.innerWidth + 80),
					ease: "none",
					scrollTrigger: {
						trigger: ".facilities-pin",
						start: "top top",
						end: () => `+=${track.scrollWidth}`,
						pin: true,
						scrub: 1,
						invalidateOnRefresh: true
					}
				});
				const gallery = document.querySelector(".gallery-track");
				if (gallery) gsapWithCSS.to(gallery, {
					x: () => -(gallery.scrollWidth - window.innerWidth + 80),
					ease: "none",
					scrollTrigger: {
						trigger: ".gallery-pin",
						start: "top top",
						end: () => `+=${gallery.scrollWidth * .8}`,
						pin: true,
						scrub: 1,
						invalidateOnRefresh: true
					}
				});
			});
			navItems.concat("Home").forEach((item) => {
				const id = item.toLowerCase();
				ScrollTrigger.create({
					trigger: `#${id}`,
					start: "top center",
					end: "bottom center",
					onToggle: (self) => self.isActive && setActive(id)
				});
			});
		}, root);
		return () => {
			ctx.revert();
			gsapWithCSS.ticker.remove(tick);
			lenis.destroy();
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	const goTo = (id) => {
		setMenuOpen(false);
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: root,
		className: "overflow-clip bg-background text-foreground selection:bg-primary selection:text-primary-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `preloader ${loaded ? "preloader-done" : ""}`,
				"aria-hidden": loaded,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-5xl font-bold tracking-normal",
						children: "FORGE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-[10px] font-bold uppercase text-muted-foreground",
						children: "Train hard. Move better."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "preloader-bar mt-8 h-px w-48 bg-primary" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: `fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${scrolled ? "border-border bg-background/90 py-3 backdrop-blur-md" : "border-transparent bg-transparent py-5"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1600px] items-center justify-between px-5 lg:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-6 lg:flex",
							"aria-label": "Main navigation",
							children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => goTo(item.toLowerCase()),
								className: `nav-link ${active === item.toLowerCase() ? "text-primary" : "text-foreground/70"}`,
								children: item
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => goTo("contact"),
								className: "min-h-10 px-5",
								children: ["Join now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid size-11 place-items-center lg:hidden",
							onClick: () => setMenuOpen(!menuOpen),
							"aria-label": "Toggle menu",
							children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mobile-menu ${menuOpen ? "translate-y-0" : "-translate-y-full"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4 pt-24",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "block font-display text-4xl font-bold uppercase",
						onClick: () => goTo(item.toLowerCase()),
						children: item
					}, item))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "home",
					className: "relative min-h-[100svh] overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: gym_hero_default,
							alt: "Athlete performing a barbell squat at FORGE",
							width: 1920,
							height: 1088,
							fetchPriority: "high",
							className: "hero-media absolute inset-0 h-full w-full object-cover object-[64%_center]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-overlay" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-content relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-5 pb-20 pt-32 lg:px-10 lg:pb-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hero-reveal mb-5 flex items-center gap-3 text-[10px] font-bold uppercase text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-primary" }), "Strength · Performance · Community"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "max-w-5xl font-display text-[clamp(4.3rem,11vw,10.5rem)] font-bold uppercase leading-[0.78] tracking-normal",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hero-reveal block",
										children: "Built"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hero-reveal block",
										children: "for more."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hero-reveal mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-md text-sm leading-7 text-foreground/75 md:text-base",
										children: "Train with purpose. Build strength. Become your strongest version."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											onClick: () => goTo("contact"),
											children: ["Join now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											onClick: () => goTo("facilities"),
											children: "Explore the gym"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => goTo("about"),
									className: "hero-reveal mt-10 flex w-fit items-center gap-3 text-[9px] font-bold uppercase text-foreground/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-8 place-items-center rounded-full border border-foreground/30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { size: 13 })
									}), "Scroll to explore"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "about",
					className: "section-pad mx-auto max-w-[1600px] px-5 lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-14 grid gap-6 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow reveal",
							children: "01 / Our philosophy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "section-title reveal",
							children: [
								"More than",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"a gym."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-[1.1fr_.9fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sticky-media overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: gym_functional_default,
								loading: "lazy",
								alt: "Athlete training with battle ropes",
								width: 1280,
								height: 1600,
								className: "parallax-image h-full w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:pt-24",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "reveal mb-16 max-w-xl text-2xl font-medium leading-snug md:text-4xl",
								children: "An environment built for people who want to train harder, move better and make progress."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: principles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "reveal grid grid-cols-[3.5rem_1fr] gap-4 border-t border-border py-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-primary",
									children: item.index
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-bold uppercase",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-md text-sm leading-6 text-muted-foreground",
									children: item.copy
								})] })]
							}, item.index)) })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "facilities",
					className: "facilities-pin min-h-screen bg-surface py-20 lg:overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mb-12 flex max-w-[1600px] items-end justify-between px-5 lg:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "02 / The space"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "section-title mt-5",
							children: [
								"Built to",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"perform."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden max-w-xs text-sm text-muted-foreground md:block",
							children: "Vertical motion. Horizontal impact. Explore a floor designed around the work."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "facility-track flex flex-col gap-5 px-5 lg:w-max lg:flex-row lg:px-10",
						children: facilities.map((facility, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "facility-card group relative h-[62vh] min-h-[480px] overflow-hidden lg:h-[58vh] lg:w-[62vw] lg:max-w-4xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: i === 3 ? gym_functional_default : gym_facilities_default,
									loading: "lazy",
									width: i === 3 ? 1280 : 1920,
									height: i === 3 ? 1600 : 1088,
									alt: `${facility.name} training area`,
									className: cn("h-full w-full object-cover transition-transform duration-700 group-hover:scale-105", facility.crop)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-card-overlay" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-6 top-6 text-xs font-bold text-primary",
									children: facility.index
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-6 bottom-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-4xl font-bold uppercase md:text-6xl",
										children: facility.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-md text-sm text-foreground/70",
										children: facility.copy
									})]
								})
							]
						}, facility.name))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "membership",
					className: "section-pad mx-auto max-w-[1600px] px-5 lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow reveal",
							children: "03 / Membership"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "section-title reveal mt-5",
							children: [
								"Choose your",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"commitment."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "reveal max-w-md self-end text-sm leading-6 text-muted-foreground",
							children: "Choose the level of support that fits your training. Pricing is tailored to the gym and available on enquiry."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-px bg-border lg:grid-cols-3",
						children: membershipPlans.map((plan, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: `plan-card reveal relative flex min-h-[520px] flex-col bg-background p-7 md:p-10 ${plan.featured ? "featured-plan" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted-foreground",
									children: ["0", index + 1]
								}),
								plan.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute right-7 top-7 bg-primary px-3 py-1 text-[9px] font-bold uppercase text-primary-foreground",
									children: "Most complete"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-16 font-display text-4xl font-bold uppercase",
									children: plan.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: plan.duration
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "my-9 text-3xl font-semibold text-primary",
									children: plan.price
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-4",
									children: plan.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											size: 16,
											className: "text-primary"
										}), feature]
									}, feature))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: plan.featured ? "primary" : "outline",
									onClick: () => goTo("contact"),
									className: "mt-auto w-full",
									children: ["Enquire now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
								})
							]
						}, plan.name))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "trainers",
					className: "bg-foreground text-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-[1600px] lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative min-h-[75vh] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: gym_coaches_default,
								loading: "lazy",
								alt: "FORGE coaching team placeholders",
								width: 1600,
								height: 1200,
								className: "parallax-image absolute inset-0 h-full w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-center px-5 py-20 lg:px-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-background/50",
									children: "04 / The coaches"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "section-title mt-5",
									children: [
										"Meet your",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"coaches."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 max-w-lg text-sm leading-7 text-background/60",
									children: "Great training starts with people who pay attention. Coach details are ready for the gym owner to add."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12",
									children: trainers.map((trainer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "reveal flex items-end justify-between border-t border-background/20 py-7",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-lime-dark",
												children: trainer.index
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-display text-2xl font-bold uppercase",
												children: trainer.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs uppercase text-background/50",
												children: trainer.role
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									}, trainer.index))
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "gallery",
					className: "gallery-pin relative min-h-screen overflow-hidden bg-background py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mb-12 flex max-w-[1600px] items-end justify-between px-5 lg:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "05 / Inside FORGE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "section-title mt-5",
							children: [
								"Train. Push.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Repeat."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-xs uppercase text-muted-foreground md:block",
							children: "A place for the work"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gallery-track flex flex-col gap-5 px-5 lg:w-max lg:flex-row lg:px-10",
						children: [
							gym_hero_default,
							gym_functional_default,
							gym_facilities_default,
							gym_coaches_default
						].map((image, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: `gallery-frame overflow-hidden ${i % 2 ? "lg:w-[34vw]" : "lg:w-[48vw]"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: image,
								loading: "lazy",
								width: 1600,
								height: 1200,
								alt: [
									"Strength training",
									"Functional training",
									"Gym floor",
									"Coaching team"
								][i],
								className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "absolute bottom-5 left-5 text-xs font-bold uppercase",
								children: [
									"0",
									i + 1,
									" / ",
									[
										"Strength",
										"Movement",
										"Space",
										"Coaching"
									][i]
								]
							})]
						}, image))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "final-cta relative min-h-[90vh] overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: gym_hero_default,
							loading: "lazy",
							alt: "Strength training at FORGE",
							width: 1920,
							height: 1088,
							className: "parallax-image absolute inset-0 h-full w-full object-cover object-[65%_center]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-final-overlay" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 mx-auto flex min-h-[90vh] max-w-[1600px] flex-col justify-center px-5 lg:px-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow reveal",
									children: "Your next chapter"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "reveal mt-6 max-w-5xl font-display text-[clamp(3.5rem,9vw,8.5rem)] font-bold uppercase leading-[.82]",
									children: [
										"Your strongest",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"version",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "starts here."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => goTo("contact"),
									className: "reveal mt-10 w-fit",
									children: ["Join the gym ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
								})
							]
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border px-5 py-12 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1600px] flex-col justify-between gap-10 md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-xs leading-5 text-muted-foreground",
						children: "A premium environment for strength, performance and community."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-12 text-xs uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-muted-foreground",
							children: "Explore"
						}), navItems.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => goTo(item.toLowerCase()),
							className: "mb-2 block",
							children: item
						}, item))] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-4 text-muted-foreground",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => goTo("contact"),
								className: "mb-2 block",
								children: "Enquire"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "Details available soon"
							})
						] })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-14 flex max-w-[1600px] flex-wrap justify-between gap-3 border-t border-border pt-6 text-[10px] uppercase text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© 2026 ",
						gymConfig.name,
						". All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Train hard. Move better." })]
				})]
			}),
			(gymConfig.phone || gymConfig.whatsapp) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-5 right-5 z-30 flex flex-col gap-2",
				children: gymConfig.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `tel:${gymConfig.phone}`,
					className: "floating-action",
					"aria-label": "Call now",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 18 })
				})
			})
		]
	});
}
function ContactSection() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const submit = (event) => {
		event.preventDefault();
		setStatus("sending");
		window.setTimeout(() => setStatus("success"), 800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "section-pad bg-surface px-5 lg:px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[.8fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow reveal",
					children: "06 / Start here"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "section-title reveal mt-5",
					children: [
						"Ready to",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"start?"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "reveal mt-8 max-w-md text-sm leading-7 text-muted-foreground",
					children: "Tell us what you want from your training. The team will help you find the right way in."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal mt-14 border-t border-border py-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase text-muted-foreground",
							children: "Location"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid h-44 place-items-center border border-border bg-background text-xs font-bold uppercase text-muted-foreground",
							children: "Google map location"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							children: "Address available from the gym"
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "reveal grid gap-5 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Name",
						name: "name",
						required: true,
						placeholder: "Your name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone number",
						name: "phone",
						type: "tel",
						required: true,
						placeholder: "Your number"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						name: "email",
						type: "email",
						required: true,
						placeholder: "you@email.com"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "field-label",
						children: ["Interested membership", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							required: true,
							name: "plan",
							className: "field",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Choose a plan"
							}), membershipPlans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: plan.name }, plan.name))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "field-label md:col-span-2",
						children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							rows: 5,
							className: "field resize-none",
							placeholder: "Tell us about your training goals"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-h-12 items-center gap-3 border border-primary px-5 text-sm text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 17 }), " Enquiry captured for this demo."]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							disabled: status === "sending",
							className: "w-full md:w-auto",
							children: [status === "sending" ? "Sending..." : "Send enquiry", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[10px] text-muted-foreground",
							children: "Demo form — connect a delivery service before launch."
						})]
					})
				]
			})]
		})
	});
}
function Field({ label, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "field-label",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			...props,
			className: "field"
		})]
	});
}
//#endregion
export { GymPage as component };
