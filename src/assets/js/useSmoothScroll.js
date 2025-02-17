import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useSmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // ScrollTrigger와 Lenis 연결
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                return value !== undefined ? lenis.scrollTo(value) : lenis.scroll;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: document.body.style.transform ? 'transform' : 'fixed',
        });

        lenis.on('scroll', ScrollTrigger.update);

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);
};

export default useSmoothScroll;
