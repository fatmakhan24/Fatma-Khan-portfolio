import { useEffect, useRef,useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";



const PROFILE = {
  name: "Fatma Khan",
  role: "Full stack Developer",
  tagline: "I build bold, fast and clean web interfaces.",
  about:
     "Hi, I'm Fatma, a passionate Full-Stack Developer who loves building modern and responsive websites. I enjoy turning creative ideas into beautiful digital experiences with clean code and user-friendly designs. I'm always excited to learn new technologies and explore innovative ideas....",
  email: "khanfatma78987@gmail.com",
  github: "https://github.com/fatmakhan24",
  linkedin:
    "https://www.linkedin.com/in/fatma-khan-b18842315/?isSelfProfile=true",
    instagram:"https://www.instagram.com/fatma_khan24/",
};

const SKILLS = [
  "Html",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Python",
  "MySQL",
  "SQL",
  "Firebase",
];

const PROJECTS = [
  {
    title: "E-Commerce Website",
    text: "A complete online store frontend with product listing, cart and a clean shopping flow.",
    tags: [" React.js", "Tailwind CSS",],
    link: "",
  },
  {
    title: "Employee Management",
    text: "A frontend dashboard to view, add and manage employee records in an easy interface.",
    tags: ["React.js", "JavaScript", "MySQL"],
    link: "", 
  },
    
    {
    title: "Dashboard for a Real Time Application",
    text: "Designed and developed a comprehensive e-commerce website using React.js, HTML, CSS, Tailwind, npm packages and JavaScript. The site features product listings, a shopping cart, user authentication, order tracking and a responsive design to enhance user experience across devices.",
    tags: ["React.js", "TypeScript", "JavaScript", "MySQL"],
    link: "", 
  },
  {
    title: "",
    text: "Currently Working on it .",
    tags: ["Next.js", "JavaScript",],
    link: "", 
  },

];


// const NAV = ["About", "Skills", "Projects", "Contact"];

function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
 
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let rafId;

    const place = (el, px, py) => {
      el.style.transform = `translate(${px}px, ${py}px) translate(-50%, -50%)`;
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      dot.current.style.opacity = 1;
      ring.current.style.opacity = 1;
      place(dot.current, x, y);
    };

    const onOver = (e) => {
      const hovering = !!e.target.closest("a, button, input, textarea");
      ring.current.classList.toggle("cursor-hover", hovering);
    };

    const loop = () => {
      rx += (x - rx) * 0.15; 
      ry += (y - ry) * 0.15;
      place(ring.current, rx, ry);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
    </>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-xl tracking-wide">
          {PROFILE.name.split(" ")[0].toUpperCase()}
          <span className="text-brand">.</span>
        </a>
        {/* <nav className="flex gap-5 text-sm font-medium sm:gap-8">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors hover:text-brand"
            >
              {item}
            </a>
          ))}
        </nav> */}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-10 pt-12 sm:pt-20">
      {" "}
      <p className="mb-4 inline-block bg-brand px-3 py-1 text-xs font-bold uppercase tracking-widest">
        Available for work
      </p>
      <h1 className="font-display text-5xl uppercase leading-[0.95] sm:text-7xl lg:text-8xl">
        {" "}
        Hi, I'm
        <br />
        <span className="text-brand">{PROFILE.name}</span>
      </h1>
      <p className="mt-6 text-xl font-bold sm:text-3xl">{PROFILE.role}</p>
      <p className="mt-3 max-w-xl text-lg text-white/70">{PROFILE.tagline}</p>
      <div className="mt-10 flex flex-wrap gap-4 sm:flex-row">
        <a
          href="#projects"
          className="bg-brand px-7 py-3 font-bold uppercase tracking-wide transition-transform hover:-translate-y-1"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="border-2 border-white/20 text-center sm:w-autoborder-5 px-7 py-3 font-bold uppercase tracking-wide transition-colors  hover:border-brand-50 hover:bg-white hover:text-brand"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}

function Heading({ children }) {
  return (
    <h2 className="mb-8 font-display text-3xl uppercase sm:mb-10 sm:text-5xl lg:text-6xl">
      {" "}
      {children}
      <span className="text-brand">.</span>
    </h2>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-white/10 bg-panel">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:py-20">
        <Heading>About</Heading>
        <p className="max-w-3xl border-l-4 border-brand pl-4 text-base leading-relaxed text-white/85 sm:pl-6 sm:text-lg lg:text-xl">
          {" "}
          {PROFILE.about}
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-14 sm:py-20">
      {" "}
      <Heading>Skills</Heading>
      <ul className="flex flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <li
            key={skill}
            className="border-2 border-white/20 px-4 py-2 text-base font-bold transition-colors hover:border-brand hover:bg-brand sm:px-5 sm:py-3 sm:text-lg"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 bg-panel">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-20">
        <Heading>Projects</Heading>
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="group border-2 border-white/10 bg-ink p-5 transition-colors hover:border-brand sm:p-7"
            >
              <span className="font-display text-5xl text-brand">0{i + 1}</span>
              <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-white/70">{p.text}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="bg-white px-3 py-1 text-xs font-bold uppercase text-ink"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block font-bold text-brand underline-offset-4 hover:underline"
                >
                  View project →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const send = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `Message from ${form.name || "your portfolio"}`,
    );
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full border-2 border-white/20 bg-ink px-4 py-3 text-white outline-none transition-colors placeholder:text-white/40 focus:border-brand";

  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-14 sm:py-20">
      {" "}
      <Heading>Contact</Heading>
      <p className="mb-8 max-w-xl text-lg text-white/70">
        Have a project or an opportunity? Send me an email and I'll get back to
        you.
      </p>
      <form onSubmit={send} className="grid max-w-2xl gap-4">
        <input
          name="name"
          required
          placeholder="Your name"
          value={form.name}
          onChange={update}
          className={field}
        />
        <input
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={update}
          className={field}
        />
        <textarea
          name="message"
          required
          rows="5"
          placeholder="Your message"
          value={form.message}
          onChange={update}
          className={field}
        />
        <button
          type="submit"
          className="bg-brand px-7 py-3 font-bold uppercase tracking-wide transition-transform hover:-translate-y-1"
        >
          Send email
        </button>
      </form>
      <p className="mt-6 text-white/60">
        Or write directly: {""}
        <a
          href={`mailto:${PROFILE.email}`}
          className="font-bold text-white underline decoration-brand decoration-2 underline-offset-4"
        >
          {PROFILE.email}
        </a>
      </p>
    </section>
  );
}

function Footer() {
  return (

    <footer className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-white/10 px-4 py-8 text-center text-sm text-white/50">
      <a href={PROFILE.github} className="hover:text-brand">
        GitHub
      </a>
      <a href={PROFILE.linkedin} className="hover:text-brand">
        LinkedIn
      </a>
      <a href={PROFILE.instagram} className="hover:text-brand">
        Instagram
      </a>
      <span>
        © {new Date().getFullYear()} {PROFILE.name}
      </span>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ anchors: true });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
