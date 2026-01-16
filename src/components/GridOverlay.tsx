export function GridOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-8 select-none">
      {/* 5 vertical lines to create 4 major columns matching the design feel */}
      <div className="h-full w-[1px] bg-neutral-900/50" />
      <div className="h-full w-[1px] bg-neutral-900/50" />
      <div className="h-full w-[1px] bg-neutral-900/50" />
      <div className="h-full w-[1px] bg-neutral-900/50" />
      <div className="h-full w-[1px] bg-neutral-900/50" />
    </div>
  );
}
