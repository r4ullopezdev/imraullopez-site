import { Badge } from "./badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <Badge>{eyebrow}</Badge>
      <div className="space-y-3">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#102033] sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-pretty text-base leading-7 text-[#5a6472] sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
