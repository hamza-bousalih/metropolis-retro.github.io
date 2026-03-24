import { MessageSquare } from "lucide-react"

import type { BlogComment } from "@/hooks/use-blog-comments-api"

type CommentsListProps = {
  comments: BlogComment[]
  isLoading: boolean
}

function formatCommentDate(date: string) {
  return new Intl.DateTimeFormat("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date))
}

export function CommentsList({ comments, isLoading }: CommentsListProps) {
  if (isLoading && comments.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-secondary/30 px-5 py-4 text-sm text-muted-foreground">
        Loading comments...
      </div>
    )
  }

  if (comments.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-secondary/20 px-5 py-8 text-center text-sm text-muted-foreground">
        <MessageSquare className="mx-auto mb-3 size-5" />
        No comments yet. Be the first to start the conversation.
      </div>
    )
  }

  return (
    <>
      {comments.map((comment) => (
        <article key={comment.id} className="rounded-2xl border border-border bg-background px-5 py-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold tracking-tight">{comment.authorName}</p>
            <p className="text-xs text-muted-foreground">{formatCommentDate(comment.createdAt)}</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{comment.content}</p>
        </article>
      ))}
    </>
  )
}
