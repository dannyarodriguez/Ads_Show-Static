const tl = gsap.timeline({
    default: {duration: 2, opacity: 1, yoyo: true}
});

tl 
    .from(['.ad #ad01_60x600','.ad #ad04_300x250','.ad #ad02_300x50','.ad #ad03_468x60','.ad #ad05_728x90','.ad #ad06_970x90'], {opacity:0, ease: 'power1.out',stagger: 0.9})
    .from(['.v-title','.h-title'],{rotation:"+=360"})
    .from(['.v-ad-logo','.h-ad-logo'],{y:-200})
    .from('.v-cta',{x:-200})
    .from('.h-cta',{y:-200})
    .from(['.v-cta a','.h-cta a'],{opacity:0})