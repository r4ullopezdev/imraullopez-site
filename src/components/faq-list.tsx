import { GlassPanel } from "./glass-panel";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <GlassPanel key={item.question} className="p-6">
          <div className="flex gap-3">
            <span className="mt-0.5 font-mono text-sm font-semibold text-accent">
              Q.
            </span>
            <div>
              <h3 className="text-lg font-semibold text-copy">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
            </div>
          </div>
        </GlassPanel>
      ))}
    </div>
  );
}
