import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur-lg md:hidden">
      <Button variant="outline" asChild className="h-12 border-border font-bold">
        <a href="tel:+12146064631" className="flex items-center justify-center gap-2">
          <Phone className="size-4 text-primary" /> Call Now
        </a>
      </Button>
      <Button asChild className="h-12 bg-primary hover:bg-primary/90 text-white font-bold">
        <a href="#contact" className="flex items-center justify-center gap-2">
          <Calendar className="size-4" /> Free Inspection
        </a>
      </Button>
    </div>
  );
}
