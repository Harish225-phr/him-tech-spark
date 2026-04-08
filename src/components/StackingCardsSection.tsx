import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, BarChart3, Smartphone, Cloud } from "lucide-react";
import stackCard1 from "@/assets/stack-card-1.jpg";
import stackCard2 from "@/assets/stack-card-2.jpg";
import stackCard3 from "@/assets/stack-card-3.jpg";
import stackCard4 from "@/assets/stack-card-4.jpg";

const cards = [
  {
    title: "Web Development",
    description:
      "We craft stunning, high-performance websites and web apps using React, TypeScript, and modern frameworks. From landing pages to complex SaaS platforms — we build it all with pixel-perfect precision.",
    icon: Code2,
    image: stackCard1,
    color: "hsl(150 100% 50% / 0.15)",
    accentColor: "hsl(150 100% 50%)",
  },
  {
    title: "Business Automation",
    description:
      "Streamline your operations with custom dashboards, MIS systems, and workflow automation. We eliminate repetitive tasks so your team can focus on what truly matters — growing the business.",
    icon: BarChart3,
    image: stackCard2,
    color: "hsl(200 100% 50% / 0.15)",
    accentColor: "hsl(200 100% 60%)",
  },
  {
    title: "App Development",
    description:
      "From concept to launch, we design and develop mobile-first applications that users love. Clean UI, smooth performance, and seamless experiences across every device and platform.",
    icon: Smartphone,
    image: stackCard3,
    color: "hsl(280 100% 60% / 0.15)",
    accentColor: "hsl(280 100% 65%)",
  },
  {
    title: "Cloud & DevOps",
    description:
      "We deploy and manage scalable cloud infrastructure that keeps your applications running at peak performance. CI/CD pipelines, serverless architectures, and 99.9% uptime guaranteed.",
    icon: Cloud,
    image: stackCard4,
    color: "hsl(170 100% 40% / 0.15)",
    accentColor: "hsl(170 100% 50%)",
  },
];

const StackCard = ({
  card,
  index,
  totalCards,
}: {
  card: (typeof cards)[0];
  index: number;
  totalCards: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (totalCards - index) * 0.02]
  );

  const Icon = card.icon;

  return (
    <div ref={cardRef} className="sticky top-24 h-[80vh] md:h-[85vh]" style={{ zIndex: index + 1 }}>
      <motion.div
        style={{ scale }}
        className="relative mx-auto h-full max-w-6xl overflow-hidden rounded-3xl border border-border/50"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={card.image}
            alt={card.title}
            className="h-full w-full object-cover"
            loading="lazy"
            width={1280}
            height={720}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        </div>

        {/* Content */}
        <div className="relative flex h-full flex-col justify-center px-8 md:px-16 lg:px-20">
          <div className="max-w-xl">
            {/* Icon badge */}
            <div
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ background: card.color }}
            >
              <Icon className="h-7 w-7" style={{ color: card.accentColor }} />
            </div>

            {/* Number */}
            <span
              className="mb-3 block font-display text-sm font-bold tracking-widest uppercase"
              style={{ color: card.accentColor }}
            >
              0{index + 1} / 0{totalCards}
            </span>

            {/* Title */}
            <h3 className="mb-5 font-display text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {card.description}
            </p>

            {/* Decorative line */}
            <div
              className="mt-8 h-1 w-20 rounded-full"
              style={{ background: card.accentColor }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const StackingCardsSection = () => {
  return (
    <section className="relative px-4 py-16 md:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">
            What We Do
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            Scroll down to explore our core capabilities that drive digital
            transformation for businesses worldwide.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 px-2 md:px-8">
        {cards.map((card, i) => (
          <StackCard
            key={card.title}
            card={card}
            index={i}
            totalCards={cards.length}
          />
        ))}
      </div>
    </section>
  );
};

export default StackingCardsSection;
