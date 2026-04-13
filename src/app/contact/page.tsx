import { CardSpotlight } from "../../components/ui/card-spotlight";
import { Instagram, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    icon: <Mail size={20} />,
    href: "https://mail.google.com/mail/?view=cm&to=ghalibabdillah.ga2@gmail.com",
    label: "Email",
    color: "#EA4335",
    handle: "ghalibabdillah.ga2@gmail.com",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/ghalib-abdillah-1b0b2313b",
    label: "LinkedIn",
    color: "#0A66C2",
    handle: "Ghalib Abdillah",
  },
  {
    icon: <Instagram size={20} />,
    href: "https://instagram.com/ghalib.ga",
    label: "Instagram",
    color: "#E1306C",
    handle: "@ghalib.ga",
  },
];

function ContactPage() {
  return (
    <div
      className="max-w-7xl mx-auto px-8"
      style={{ viewTransitionName: "career" }}
    >
      <div className="pt-15 mx-2">
        <h1 className="mb-4 text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl text-slate-700 dark:text-slate-300 max-w-4xl">
          Contact
        </h1>
        <div className="mt-6 text-zinc-400 max-w-2xl">
          Let’s build something great together.
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-12 md:grid-cols-3 lg:gap-16">
        {socials.map((s) => (
          <CardSpotlight
            key={s.label}
            href={s.href}
            color={s.color}
            className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  md:pb-48"
          >
            <span
              className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />
            <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
              {s.icon}
            </span>
            <div className="z-10 flex flex-col items-center">
              <span className="lg:text-xl text-center font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display">
                {s.handle}
              </span>
              <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                {s.label}
              </span>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
}

export default ContactPage;
