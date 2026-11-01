import React from "react";
import { EDITORIAL_STAGES } from "@/constants/steps";
import { Film, ShieldCheck, Award } from "lucide-react";

export default function StepOverview() {
  const stageIcons = [Film, ShieldCheck, Award];

  return (
    <div className="space-y-8 sticky top-28">
      <div>
        <p className="editorial-tag text-champagne-dark flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
          Talent Submission Protocol
        </p>
        <h2 className="font-editorial text-3xl sm:text-4xl text-ink mt-3 leading-tight">
          How casting <br />
          <span className="italic font-normal">intake works.</span>
        </h2>
        <p className="text-sm text-charcoal/80 mt-3 leading-relaxed">
          Applications are evaluated privately by our South Indian casting
          directors and unit coordinators for ongoing feature films, OTT originals, and commercial spots.
        </p>
      </div>

      <div className="border-t border-line pt-6">
        <ol className="space-y-7">
          {EDITORIAL_STAGES.map((stage, idx) => {
            const Icon = stageIcons[idx] || Film;
            return (
              <li key={stage.number} className="group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full border border-line bg-paper-2 flex items-center justify-center text-xs font-mono font-medium text-charcoal group-hover:border-champagne group-hover:text-champagne transition-colors">
                    {stage.number}
                  </div>
                  <div>
                    <h3 className="font-editorial text-lg text-ink font-semibold flex items-center gap-2">
                      {stage.title}
                      <Icon className="w-3.5 h-3.5 text-mute opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="p-4 bg-paper-2/70 border border-line rounded-lg">
        <p className="text-xs text-charcoal/80 leading-relaxed">
          <strong className="text-ink font-semibold">Privacy Note:</strong> All showreels and submitted motion tests remain confidential to casting heads unless approved for public roster publication.
        </p>
      </div>
    </div>
  );
}
