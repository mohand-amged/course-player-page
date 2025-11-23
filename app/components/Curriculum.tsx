"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, PlayCircle, CheckCircle, Lock } from "lucide-react";
import { cn } from "@/app/lib/utils";

// Mock Data
const courseData = [
    {
        id: 1,
        title: "Section 1: Introduction",
        lessons: [
            { id: 101, title: "Welcome to the Course", duration: "2:00", status: "completed" },
            { id: 102, title: "Course Overview", duration: "5:30", status: "active" },
            { id: 103, title: "Setting up your environment", duration: "10:00", status: "locked" },
        ],
    },
    {
        id: 2,
        title: "Section 2: Core Concepts",
        lessons: [
            { id: 201, title: "Understanding React", duration: "15:00", status: "locked" },
            { id: 202, title: "State and Props", duration: "12:00", status: "locked" },
            { id: 203, title: "Component Lifecycle", duration: "18:00", status: "locked" },
        ],
    },
    {
        id: 3,
        title: "Section 3: Advanced Topics",
        lessons: [
            { id: 301, title: "Hooks in Depth", duration: "20:00", status: "locked" },
            { id: 302, title: "Performance Optimization", duration: "25:00", status: "locked" },
        ],
    },
];

export function Curriculum() {
    const [openSections, setOpenSections] = useState<number[]>([1, 2]);
    const activeLessonRef = useRef<HTMLDivElement>(null);

    const toggleSection = (id: number) => {
        setOpenSections((prev) =>
            prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
        );
    };

    // Scroll to active lesson on mount
    useEffect(() => {
        if (activeLessonRef.current) {
            activeLessonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, []);

    return (
        <div className="flex flex-col w-full bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                <h2 className="text-lg font-semibold">Course Content</h2>
            </div>

            <div className="flex-1 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
                {courseData.map((section) => (
                    <div key={section.id} className="border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                        <button
                            onClick={() => toggleSection(section.id)}
                            className="w-full flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                            <span className="font-medium text-sm text-left">{section.title}</span>
                            {openSections.includes(section.id) ? (
                                <ChevronUp size={16} className="text-zinc-500" />
                            ) : (
                                <ChevronDown size={16} className="text-zinc-500" />
                            )}
                        </button>

                        {openSections.includes(section.id) && (
                            <div className="bg-white dark:bg-zinc-950">
                                {section.lessons.map((lesson) => (
                                    <div
                                        key={lesson.id}
                                        ref={lesson.status === "active" ? activeLessonRef : null}
                                        className={cn(
                                            "flex items-center gap-3 p-4 cursor-pointer transition-colors border-l-4",
                                            lesson.status === "active"
                                                ? "bg-blue-50 dark:bg-blue-900/20 border-blue-500"
                                                : "hover:bg-zinc-50 dark:hover:bg-zinc-900 border-transparent"
                                        )}
                                    >
                                        <div className="flex-shrink-0">
                                            {lesson.status === "completed" ? (
                                                <CheckCircle size={18} className="text-green-500" />
                                            ) : lesson.status === "locked" ? (
                                                <Lock size={18} className="text-zinc-400" />
                                            ) : (
                                                <PlayCircle size={18} className="text-blue-500" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <p className={cn(
                                                "text-sm font-medium",
                                                lesson.status === "active" ? "text-blue-600 dark:text-blue-400" : "text-zinc-700 dark:text-zinc-300"
                                            )}>
                                                {lesson.title}
                                            </p>
                                            <span className="text-xs text-zinc-500">{lesson.duration}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
