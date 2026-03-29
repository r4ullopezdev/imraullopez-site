type RepoCardProps = {
  name: string;
  description: string;
  url: string;
};

export function RepoCard({ name, description, url }: RepoCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.06]"
    >
      <div className="space-y-3">
        <h3 className="text-lg font-semibold tracking-tight text-white">{name}</h3>
        <p className="text-sm leading-6 text-slate-300">{description}</p>
        <p className="text-sm font-medium text-cyan-200 transition group-hover:text-cyan-100">Open repository</p>
      </div>
    </a>
  );
}

