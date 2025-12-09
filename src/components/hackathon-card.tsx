import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <li className="relative py-4 ml-10 sm:ml-16 md:ml-28">
      {/* Avatar - responsive positioning */}
      <div className="absolute -left-8 sm:-left-12 md:-left-[120px] top-0 flex items-center justify-center bg-white dark:bg-background rounded-full">
        <Avatar className="border h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10">
          <AvatarImage src={image} alt={title} className="object-contain p-1 sm:p-2" />
          <AvatarFallback className="text-[10px] sm:text-xs">{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-[10px] sm:text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none text-sm sm:text-base">{title}</h2>
        {location && (
          <p className="text-xs sm:text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-xs sm:text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-1.5 sm:gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-1 sm:gap-2 text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1">
                {link.icon}
                <span className="hidden sm:inline">{link.title}</span>
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
