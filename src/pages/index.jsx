import '../assets/css/main.css';
import  { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MainPage = () => {
    useEffect(() => {
        const windowH = window.innerHeight;

        const handleScroll = () => {
            const scrollTop = Math.floor(window.scrollY);
            if (scrollTop > windowH / 3) {
                document.querySelector('.fix-bg').classList.add('scroll');
            } else {
                document.querySelector('.fix-bg').classList.remove('scroll');
            }
        };

        document.addEventListener('scroll', handleScroll);

        gsap.registerPlugin(ScrollTrigger);

        const randomX = random(-400, 400);
        const randomY = random(-200, 200);
        const randomScale = random(0.9, 1.5);
        const randomTime = random(2, 4);
        const randomTime2 = random(4, 6);
        const randomAngle = random(-30, 150);

        const items = gsap.utils.toArray('.fix-object');
        items.forEach((item) => {
            gsap.set(item, {
                x: randomX(),
                y: randomX(),
                rotation: randomAngle(),
            });

            moveX(item, 1);
            moveY(item, -1);
            rotate(item, 1);
            scaleChange(item, 1);
        });

        function rotate(target, direction) {
            gsap.to(target, {
                rotation: randomAngle(direction),
                duration: randomTime2(),
                ease: 'sine.inOut',
                onComplete: rotate,
                onCompleteParams: [target, direction * -1],
            });
        }

        function moveX(target, direction) {
            gsap.to(target, {
                x: randomX(direction),
                duration: randomTime(),
                ease: 'sine.inOut',
                onComplete: moveX,
                onCompleteParams: [target, direction * -1],
            });
        }

        function moveY(target, direction) {
            gsap.to(target, {
                y: randomY(direction),
                duration: randomTime(),
                ease: 'sine.inOut',
                onComplete: moveY,
                onCompleteParams: [target, direction * -1],
            });
        }
        function scaleChange(target, direction) {
            gsap.to(target, {
              scale: randomScale(direction),
                duration: randomTime(),
                ease: 'sine.inOut',
                onComplete: scaleChange,
                onCompleteParams: [target, direction],
            });
        }

        function random(min, max) {
            const delta = max - min;
            return (direction = 1) => (min + delta * Math.random()) * direction;
        }

        gsap.fromTo(
            ".letter",
            {
                filter: "blur(10px)",
                opacity: 0,
                y: 50,
            },
            {
                filter: "blur(0px)",
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power4.out",
            }
        );

        gsap.fromTo(
            ".balloon",
            {
                filter: "blur(10px)",
                opacity: 0,
                y: 50,
            },
            {
                filter: "blur(0px)",
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#about",
                    start: "top top",
                    end: "+=500",
                    pin: true,
                    scrub: 1,
                    // markers:true,
                },
            }
        );


        gsap.fromTo(
            ".keyword",
            {
                filter: "blur(10px)",
                opacity: 0,
                y: 50,
            },
            {
                filter: "blur(0px)",
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".keyword-list-wrap",
                    start: "top 90%",
                },
            }
        );

        gsap.matchMedia()
            .add("(min-width: 768px)", () => {
                return gsap.fromTo(
                    ".project-card",
                    { filter: "blur(10px)", opacity: 0, y: 50, rotate: "2deg" },
                    {
                        filter: "blur(0px)",
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 1,
                        rotate: "0deg",
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: "#work",
                            start: "top 90%",
                            end: "bottom bottom",
                            scrub: 1,
                           // markers:true,
                        },
                    }
                );
            })
            .add("(max-width: 767px)", () => {
                return gsap.fromTo(
                    ".project-card",
                    { filter: "blur(10px)", opacity: 0, y: 50, rotate: "2deg" },
                    {
                        filter: "blur(0px)",
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 1,
                        rotate: "0deg",
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: "#work",
                            start: "top 90%",
                            scrub: false, // 모바일에서는 scrub 제거
                        },
                    }
                );
            });
        const cursor = document.querySelector(".cursor");
        const listShow = document.querySelectorAll('.project-card');

        if (!cursor) return;

        const handleMouseEnter = () => cursor.classList.add("in");
        const handleMouseLeave = () => cursor.classList.remove("in");

        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mousemove", function (e) {
            const w = cursor.offsetWidth / 2;
            const h = cursor.offsetHeight / 2;

            gsap.to(cursor, {
                duration: 0.1,
                x: e.clientX - w,
                y: e.clientY - h,
            });
        });
        listShow.forEach(function (list, i) {
            list.addEventListener("mouseenter", function () {
                cursor.classList.add(`show`);
                cursor.querySelector(`.img-area:nth-child(${i + 1}) > *`).style.height = '100%';


            });

            list.addEventListener("mouseleave", function () {
                cursor.classList.remove(`show`);
                cursor.querySelector(`.img-area:nth-child(${i + 1}) > *`).style.height = '0px';
            });

        });

        return () => {
            document.removeEventListener('scroll', handleScroll);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);


    const text = "UI Developer".split('');

    const keywords = [
         '꼼꼼한', '열정적인', '협동 좋아', '소통 적극',
    ]
    const skills = [
        {
            name: 'VUE',
            type: 1,
        },
        {
            name: 'NUXT',
            type: 1,
        },
        {
            name: 'SCSS',
            type: 1,
        },
        {
            name: 'VUETIFY',
            type: 1,
        },
        {
            name: 'JAVASCRIPT',
            type: 1,
        },
        {
            name: 'GSAP',
            type: 1,
        },
        {
            name: 'HTML',
            type: 1,
        },
        {
            name: 'CSS',
            type: 1,
        },
        {
            name: 'JSON',
            type: 1,
        },
        {
            name: 'GIT',
            type: 1,
        },
        {
            name: 'GITHUB',
            type: 1,
        },
        {
            name: 'GITLAB',
            type: 1,
        },
        {
            name: 'IntelliJ',
            type: 1,
        },
        {
            name: 'VScode',
            type: 1,
        },
        {
            name: 'JIRA',
            type: 2,
        },
        {
            name: 'Confluence',
            type: 2,
        },
        {
            name: 'Figma',
            type: 3,
        },
        {
            name: 'Zeplin',
            type: 3,
        },
        {
            name: 'Adobe XD',
            type: 3,
        },
    ]
    const projects = [
        {
            title: "2025 포트폴리오",
            type: "구축",
            skill: ["VITE", "REACT", "CSS", "JAVASCRIPT", "GSAP"],
            contribution: 100,
            date: "2025.02.17 ~ 2024.03.03",
            desc: "저의 2025ver 포트폴리오 작업입니다. 배경에 GSAP로 랜덤으로 수치를 부여해 세개의 원형이 크기와 위치가 수시로 바뀌는 역동적인 디자인으로 구현했으며, 최대한 한눈에 보여지기 쉽게 UI를 간략하게 설계했습니다.",
            link:'https://yeonk1.github.io/portfolio25/',
            image: 'portfoilo'
        },
        {
            title: "Samsung MONIMO",
            type: "어플리케이션 운영 및 신규 파트 구축",
            skill: ["VUE", "NUXT","VUETIFY", "SCSS", "JAVASCRIPT", "LOTTIE"],
            contribution: 100,
            date: "2024.01.01 ~ 2024.07.31",
            desc: "삼성그룹의 통합 금융 어플리케이션으로써, 금융사 특유의 다양한 CASE 구현을 직접 경험할 수 있었습니다. VUE를 사용한 하이브리드 앱이며, 사용자 데이터에 따른 케이스 분리와 다양한 진입 화면, 아토믹 디자인에 따른 컴포넌트 기반 UI 설계 및 코드 모듈화 등 어플리케이션 운영을 관리했습니다. 특히, 신규로 오픈되는 주니어 파트를 맡아 구축을 진행한 바가 있습니다.",
            link:'https://www.monimo.com/',
            image: 'monimo-01'
        },
        {
            title: "LG KOOROO",
            type: "구축",
            skill: ["VUE", "NUXT", "CSS", "GSAP", "JAVASCRIPT", "FULLPAGE"],
            contribution: 100,
            date: "2023.10 ~ 2023.11",
            desc: "LG 전기 스쿠터 배터리 벤처 기업으로 신규 구축 작업을 진행했습니다. VUE, NUXT 기초 셋팅부터 작업하였으며, GSAP로 자연스러운 인터렉션을 구현했습니다. ",
            link:'https://www.kooroo.co.kr',
            image:'kooroo-01'
        },
        {
            title: "동아일보",
            type: "전체 리뉴얼",
            skill: ["HTML", "CSS", "JAVASCRIPT"],
            contribution: 100,
            date: "2023.09 ~ 2023.10",
            desc: "메인페이지와 각 카테고리별 메인 페이지를 리뉴얼 작업했습니다. 언론사 페이지 특성상 다양한 레이아웃의 디자인으로 진행됐습니다. 추후 유지보수성의 효율을 높이기 위해 레이아웃들을 case별로 구분하여 class를 부여해 작업했습니다.",
            link:'https://www.donga.com',
            image: 'donga-01'
        },
        {
            title: "Hanwha Science Challenge",
            type: "전체 리뉴얼",
            skill: ["HTML", "CSS", "JAVASCRIPT"],
            contribution: 100,
            date: "2022.12 ~ 2023.01",
            desc: "hanwha에서 주최하는 고등학교 과학 공모전 홈페이지로, 전체 리뉴얼 퍼블리싱 진행했습니다. 스크롤 인터랙션 및 반응형 작업에 신경썼던 프로젝트입니다.",
            link:'https://www.sciencechallenge.or.kr',
            image: 'hanwhasc-01'
        },
        {
            title: "Hanwha System",
            type: "전체 리뉴얼",
            skill: ["HTML", "CSS", "JAVASCRIPT"],
            contribution: 40,
            date: "2022.07",
            desc: "Hanwha System 전체 리뉴얼 프로젝트에서 반응형 작업을 진행했습니다.",
            link:'https://www.hanwhasystems.com',
            image: 'hanwhasystem-01'
        },
        {
            title: "Hanwha Connect",
            type: "전체 리뉴얼",
            skill: ["HTML", "CSS", "JAVASCRIPT"],
            contribution: 40,
            date: "2022.07",
            desc: "Hanwha Connect 전체 리뉴얼 프로젝트에서 반응형 작업을 진행했습니다.",
            link:'https://www.hanwhaconnect.co.kr',
            image: 'hanwhaconnect-01'
        },
        {
            title: "매일경제",
            type: "전체 리뉴얼",
            skill: ["HTML", "CSS", "JAVASCRIPT"],
            contribution: 100,
            date: "2022.02",
            desc: "신문사 매일경제의 전체적인 리뉴얼 작업을 맡았으며, 적응형으로 진행하였습니다. 해당 퍼블리싱 작업물은 매일경제 웹 뿐만 아니라 매일경제 하이브리드 어플리케이션에도 동일 적용되었습니다.",
            link:'https://www.mk.co.kr',
            image: 'mk-01'
        },
    ];

    return (
        <div>
            <div className="fix-bg">
                <div className="fix-object item1"></div>
                <div className="fix-object item2"></div>
                <div className="fix-object item3"></div>
                <div className="noise"></div>
            </div>
            <section id="home" className="main-section">
                <h2 className="title">
                    JIYEON
                    <p className="sub-title">
                        {text.map((letter, index) => (
                            <span key={index} className={'letter'}>
                            {letter}
                        </span>
                        ))}
                    </p>
                </h2>
            </section>
            <section id="about">
                <h2>About</h2>
                <div className="wrap">
                    <div className="img-area">
                        <img src={`${import.meta.env.BASE_URL}assets/images/works/profile.png`} alt="Profile"/>
                    </div>
                    <div className="keyword-list-wrap">
                        <div className="balloon">
                            <p>안녕하세요?<br/>
                                저는 3년차 UI developer 강지연입니다.<br/>
                                저를 소개하자면 {keywords.map((keyword, index) => (
                                    <span className="keyword" key={index}>&#34;{keyword}&#34;</span>))}
                                이란 키워드로 설명드릴 수 있을 것 같습니다.<br/>
                                제가 프로젝트에서 경험해본 SKILL은 {skills.map((skill, index) => (
                                    <span
                                        className={`keyword skill ${skill.type === 1 ? 'dev' : skill.type === 2 ? 'comm' : 'design'}`}
                                        key={index}>
                                            {skill.name}
                                        </span>
                                ))}
                                등이 있습니다.
                            </p>
                            <p>저는 문제에 대해 두려움보단 흥미를 느낍니다.
                                문제 하나하나 해결해 나아가는 과정을 즐기는 마음으로 임하다보니 저에게 어려움은 곧 성취로 다가왔습니다.<br/>
                                <b>제가 일을 하며 가장 희열을 느끼는 순간은 새로운 지식과 배움을 얻는 순간</b>이라고 말하고 싶네요 :)
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            <section id="work">
                <h2>Works</h2>
                <p className="desc">진행했던 프로젝트 목록입니다.</p>
                <ul className="project-list">
                    {projects.map((project, index) => (
                        <li key={index} className="project-card">
                            <a href={project.link} target="_blank">
                                <p className="type">{project.type}</p>
                                <h3 className="title">{project.title}</h3>
                                <p className="date">{project.date}</p>
                                <div className="skills">
                                    {project.skill.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="badge">
                                {skill}
                              </span>
                                    ))}
                                </div>
                                <div className="progress-area">
                                    <label>기여도 <span>{project.contribution}%</span></label>
                                    <progress value={project.contribution} max="100"></progress>
                                </div>
                                <p className="desc">{project.desc}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
            <section id="contact">
                <h2>Contact</h2>
                <div className="info-area">
                    <p className="txt">(+82)10.3453.0311</p>
                    <p className="txt">wlwlwl1256@naver.com</p>
                </div>
            </section>
            <div className="cursor">
                {projects.map((object, i) => (
                    <div className="img-area" key={i}>
                        <img src={`${import.meta.env.BASE_URL}assets/images/works/${object.image}.jpg`} alt=""/>
                    </div>
                ))}
                {/* 리스트 hover 시 커서에 보이는 효과 삽입 */}
            </div>
        </div>
    );
}

export default MainPage;