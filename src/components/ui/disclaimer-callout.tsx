import { ShieldAlert } from "lucide-react";
import { disclaimer } from "@/lib/utils";
import { Card } from "./card";

export function DisclaimerCallout({ text = disclaimer }: { text?: string }) {
  return (
    <Card className="flex gap-3 p-5 text-sm leading-7 text-slate-300">
      <ShieldAlert className="mt-1 h-5 w-5 shrink-0 text-cyan-200" aria-hidden="true" />
      <p>{text}</p>
    </Card>
  );
}
