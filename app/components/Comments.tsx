"use client";

import { MessageSquare, ThumbsUp, MoreHorizontal } from "lucide-react";

const comments = [
    {
        id: 1,
        user: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/150?u=1",
        content: "This explanation really helped clarify the concept of state management. Thanks!",
        likes: 12,
        time: "2 hours ago",
    },
    {
        id: 2,
        user: "Mike Chen",
        avatar: "https://i.pravatar.cc/150?u=2",
        content: "Could you elaborate more on the useEffect dependency array in the next video?",
        likes: 5,
        time: "5 hours ago",
    },
    {
        id: 3,
        user: "Alex Doe",
        avatar: "https://i.pravatar.cc/150?u=3",
        content: "Great pacing, loving the course so far.",
        likes: 8,
        time: "1 day ago",
    },
];

export function Comments() {
    return (
        <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold flex items-center gap-2">
                    <MessageSquare size={20} />
                    Comments <span className="text-zinc-500 text-sm font-normal">(24)</span>
                </h3>
            </div>

            {/* Comment Input */}
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex-shrink-0" />
                <div className="flex-1">
                    <textarea
                        placeholder="Add a comment..."
                        className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] resize-none"
                    />
                    <div className="mt-2 flex justify-end">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                            Post Comment
                        </button>
                    </div>
                </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
                {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-4">
                        <img
                            src={comment.avatar}
                            alt={comment.user}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-semibold text-sm">{comment.user}</h4>
                                    <span className="text-xs text-zinc-500">{comment.time}</span>
                                </div>
                                <button className="text-zinc-400 hover:text-zinc-600">
                                    <MoreHorizontal size={16} />
                                </button>
                            </div>
                            <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                                {comment.content}
                            </p>
                            <div className="flex items-center gap-4 pt-1">
                                <button className="flex items-center gap-1.5 text-zinc-500 hover:text-blue-600 text-xs font-medium transition-colors">
                                    <ThumbsUp size={14} />
                                    {comment.likes}
                                </button>
                                <button className="text-zinc-500 hover:text-blue-600 text-xs font-medium transition-colors">
                                    Reply
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
