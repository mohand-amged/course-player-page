"use client";

import { useState } from "react";
import { VideoPlayer } from "./components/VideoPlayer";
import { Curriculum } from "./components/Curriculum";
import { Comments } from "./components/Comments";
import { LeaderboardModal, ExamModal, PDFModal } from "./components/Modals";
import { Trophy, FileText, GraduationCap, Share2 } from "lucide-react";
import { cn } from "@/app/lib/utils";

export default function CoursePlayerPage() {
  const [isWideMode, setIsWideMode] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showExam, setShowExam] = useState(false);
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans">
      {/* Navigation / Header Placeholder */}
      <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center px-4 lg:px-8 sticky top-0 z-40">
        <h1 className="text-lg font-bold">Course Player</h1>
      </header>

      <main className="max-w-[1600px] mx-auto p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Main Content Area (Video + Comments) */}
          <div className={cn(
            "transition-all duration-300 ease-in-out",
            isWideMode ? "col-span-12" : "col-span-12 lg:col-span-8"
          )}>
            <VideoPlayer
              isWideMode={isWideMode}
              toggleWideMode={() => setIsWideMode(!isWideMode)}
            />

            {/* Video Info & Actions */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">Lesson Title</h2>
                <p className="text-zinc-500">Lesson 4 • 12 mins</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors font-medium text-sm">
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </div>

            <div className="my-8 border-b border-zinc-200 dark:border-zinc-800" />

            <Comments />
          </div>

          {/* Sidebar Area (Curriculum + Tools) */}
          <div className={cn(
            "space-y-6 transition-all duration-300 ease-in-out",
            isWideMode ? "col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6 space-y-0" : "col-span-12 lg:col-span-4"
          )}>

            {/* Progress Card */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Course Progress</h3>
                <span className="text-sm font-bold text-blue-600">35%</span>
              </div>
              <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                <div className="bg-blue-600 h-2.5 rounded-full w-[35%]" />
              </div>
              <p className="text-xs text-zinc-500 mt-2">12 of 45 lessons completed</p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setShowLeaderboard(true)}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:border-yellow-500 transition-colors gap-2 group"
              >
                <Trophy className="text-yellow-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">Leaderboard</span>
              </button>
              <button
                onClick={() => setShowExam(true)}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 transition-colors gap-2 group"
              >
                <GraduationCap className="text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">Exams</span>
              </button>
              <button
                onClick={() => setShowPDF(true)}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:border-red-500 transition-colors gap-2 group"
              >
                <FileText className="text-red-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">Resources</span>
              </button>
            </div>

            <Curriculum />
          </div>
        </div>
      </main>

      {/* Modals */}
      <LeaderboardModal isOpen={showLeaderboard} onClose={() => setShowLeaderboard(false)} />
      <ExamModal isOpen={showExam} onClose={() => setShowExam(false)} />
      <PDFModal isOpen={showPDF} onClose={() => setShowPDF(false)} />
    </div>
  );
}
