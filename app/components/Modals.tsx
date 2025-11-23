"use client";

import { X, Trophy, FileText, GraduationCap } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/app/lib/utils";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children, icon }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-6 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3">
                        {icon}
                        <h3 className="text-xl font-bold">{title}</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>
                <div className="p-6 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}

export function LeaderboardModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Leaderboard"
            icon={<Trophy className="text-yellow-500" />}
        >
            <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((rank) => (
                    <div key={rank} className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50">
                        <div className="flex items-center gap-4">
                            <span className={cn(
                                "font-bold w-6 text-center",
                                rank === 1 ? "text-yellow-500" : rank === 2 ? "text-zinc-400" : rank === 3 ? "text-amber-600" : "text-zinc-500"
                            )}>
                                #{rank}
                            </span>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                                <span className="font-medium">Student Name</span>
                            </div>
                        </div>
                        <span className="font-mono font-bold text-blue-600 dark:text-blue-400">2,450 XP</span>
                    </div>
                ))}
            </div>
        </Modal>
    );
}

export function ExamModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Course Exam"
            icon={<GraduationCap className="text-blue-500" />}
        >
            <div className="text-center py-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap size={32} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Ready to test your knowledge?</h4>
                <p className="text-zinc-500 mb-6">This exam consists of 20 questions and will take approximately 30 minutes.</p>
                <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                    Start Exam
                </button>
            </div>
        </Modal>
    );
}

export function PDFModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Course Resources"
            icon={<FileText className="text-red-500" />}
        >
            <div className="space-y-3">
                {["Course Syllabus", "Cheatsheet", "Project Files"].map((item, i) => (
                    <a
                        key={i}
                        href="#"
                        className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <FileText size={20} className="text-zinc-400 group-hover:text-blue-500 transition-colors" />
                            <span className="font-medium">{item}.pdf</span>
                        </div>
                        <span className="text-xs text-zinc-400">2.5 MB</span>
                    </a>
                ))}
            </div>
        </Modal>
    );
}
