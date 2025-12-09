import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link: _link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group relative flex flex-col h-full rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden",
        "hover:border-border/80 hover:bg-card/80 transition-all duration-300",
        className
      )}
    >
      {/* Media Section */}
      {(video || image) && (
        <Link href={href || "#"} className="block overflow-hidden">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="h-36 w-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
          )}
          {image && !video && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-36 w-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </Link>
      )}

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-4 space-y-3">
        {/* Title & Date */}
        <div>
          <Link href={href || "#"} className="hover:underline">
            <h3 className="font-semibold text-base leading-tight">{title}</h3>
          </Link>
          {dates && (
            <time className="text-xs text-muted-foreground">{dates}</time>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tags - Compact */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary/50 text-secondary-foreground/70"
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary/50 text-secondary-foreground/70">
                +{tags.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Links - Push to bottom */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 mt-auto">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.icon}
                <span>{link.type}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
