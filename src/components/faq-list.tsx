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
    <div className="space-y-4">
      {items.map((item) => (
        <GlassPanel key={item.question} className="p-6">
          <h3 className="text-lg font-semibold text-white">{item.question}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
        </GlassPanel>
      ))}
    </div>
  );
}
