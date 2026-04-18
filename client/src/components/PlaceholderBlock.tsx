/*
Design philosophy for this file: placeholders should still feel gracious and readable inside the Storybook Editorial system.
Use softer framing, sentence-style readability, and warm visual texture instead of harsh all-caps utility blocks.
*/
type PlaceholderBlockProps = {
  label: string;
  className?: string;
};

export default function PlaceholderBlock({ label, className = "" }: PlaceholderBlockProps) {
  return (
    <div
      className={`grain-overlay relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-[1.85rem] border border-white/12 bg-[#5C7050] p-8 text-center shadow-[0_26px_50px_rgba(52,62,41,0.24)] ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_40%,rgba(200,164,91,0.14))]" />
      <div className="relative max-w-lg text-base font-semibold leading-8 text-white/95 sm:text-lg">{label}</div>
    </div>
  );
}
