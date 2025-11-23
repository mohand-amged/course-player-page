"use client";

import { useState, useEffect } from "react";
import { Maximize2, Minimize2, Play, Pause, Volume2, Settings } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface VideoPlayerProps {
    isWideMode: boolean;
    toggleWideMode: () => void;
}

export function VideoPlayer({ isWideMode, toggleWideMode }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Mock scroll listener to detect when video should be sticky (if we wanted more complex logic than CSS sticky)
    // For now, we'll rely on CSS sticky, but we can add logic here if needed.

    return (
        <div
            className={cn(
                "relative w-full transition-all duration-300 ease-in-out z-50",
                // Mobile: Sticky at top
                "sticky top-0 md:static",
                // Desktop: Wide mode logic handled by parent grid, but here we ensure full width
                isWideMode ? "col-span-12" : "col-span-12 lg:col-span-8"
            )}
        >
            {/* Video Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-black shadow-lg rounded-b-xl md:rounded-xl group">
                {/* Placeholder for actual video */}
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                    <span className="text-zinc-500">Video Player Placeholder</span>
                </div>

                {/* Custom Controls Overlay (Mock) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-4">
                            <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-primary">
                                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                            </button>
                            <Volume2 size={20} />
                            <span className="text-sm">00:00 / 10:00</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Settings size={20} />
                            {/* Wide Mode Toggle (Desktop Only) */}
                            <button
                                onClick={toggleWideMode}
                                className="hidden md:block hover:text-primary"
                                title={isWideMode ? "Exit Wide Mode" : "Wide Mode"}
                            >
                                {isWideMode ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                            </button>
                            <Maximize2 size={20} className="md:hidden" /> {/* Fullscreen for mobile */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sticky Hint (Optional) */}
            <div className="md:hidden absolute -bottom-8 left-0 right-0 text-center text-xs text-zinc-500 opacity-0 transition-opacity duration-300">
                Scroll to dock
            </div>
        </div>
    );
}
