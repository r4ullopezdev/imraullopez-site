type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#dccfbe] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a5320] shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
      {children}
    </span>
  );
}
