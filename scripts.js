gsap.registerPlugin(ScrollTrigger);




gsap.fromTo(
    'path',
    { y: -200, opacity: 0 },
    {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        stagger: .12,
    }
);

let scrollDirection = 0;

gsap.fromTo(
    'path',
    { y: 0 },
    {
        y: -700,
        duration: () => (scrollDirection === 1 ? 1 : 2),
        ease: 'power2.out',
        stagger: .14,
        scrollTrigger: {
            trigger: '.hero_section',
            start: '30% top',
            end: 'bottom 55%',
            scrub: 2,
            onUpdate: (self) => {
                scrollDirection = self.direction;
            },
        },
    }
);



gsap.fromTo(
    ".section-title",
    { opacity: 0, y: 50 },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".vr-section",
            start: "20% center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
        }
    }
);

gsap.fromTo(
    ".text-standard",
    { opacity: 0, y: 50 },
    {
        opacity: 1,
        y: 0,
        delay: .5,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".vr-section",
            start: "20% center",
            end: "bottom bottom",
            onEnter: () => gsap.to(".text-standard", { opacity: 1, y: 0, delay: .5, duration: 1, ease: "power3.out" }),
            onLeaveBack: () => gsap.to(".text-standard", { opacity: 0, y: 50, delay: .5, duration: 1, ease: "power3.out" }),
        }
    }
);

gsap.fromTo(
    "img",
    { opacity: 0, x: 50 },
    {
        opacity: 1,
        x: 0,
        delay: .8,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".vr-section",
            start: "20% center",
            end: "bottom bottom",
            onEnter: () => gsap.to("img", { opacity: 1, x: 0, delay: .8, duration: 1, ease: "power3.out" }),
            onLeaveBack: () => gsap.to("img", { opacity: 0, x: 50, delay: .8, duration: 1, ease: "power3.out" }),
        }
    }
);