import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-paper flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-4 text-ink">
        <div className="w-12 h-12 rounded-full border-2 border-champagne border-t-transparent animate-spin" />
        <div className="text-center">
          <p className="font-editorial text-xl font-medium tracking-wide">ShineWoods</p>
          <p className="editorial-tag text-[0.62rem] text-mute tracking-widest mt-1">
            Loading Cinema Experience...
          </p>
        </div>
      </div>
    </div>
  );
}
