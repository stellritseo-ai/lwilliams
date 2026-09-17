import { trustBarItems } from "@/data/site-data";

export function TrustBar() {
  return (
    <div className="section-shell relative z-20 -mt-10 sm:-mt-12">
      <div className="grid grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-card p-2 shadow-2xl sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
        {trustBarItems.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 px-6 py-5 transition-colors hover:bg-muted/50"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <item.icon className="size-6" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-foreground sm:text-base">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
