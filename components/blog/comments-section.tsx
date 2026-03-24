"use client"

import { useEffect, useMemo } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Loader2, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CommentsForm } from "@/components/blog/comments/comments-form"
import { CommentsList } from "@/components/blog/comments/comments-list"
import { useBlogCommentsApi } from "@/hooks/use-blog-comments-api"
import { blogCommentSchema, type BlogCommentFormValues } from "@/lib/validators/blog-comment"

const defaultValues: BlogCommentFormValues = {
  authorName: "",
  authorEmail: "",
  content: "",
}

type CommentsSectionProps = {
  postSlug: string
}

export function CommentsSection({ postSlug }: CommentsSectionProps) {
  const {
    comments,
    isLoading,
    isSubmitting,
    isError,
    error,
    successMessage,
    loadComments,
    submitComment,
    resetFeedback,
  } = useBlogCommentsApi(postSlug)

  const form = useForm<BlogCommentFormValues>({
    resolver: zodResolver(blogCommentSchema),
    defaultValues,
    mode: "onTouched",
    reValidateMode: "onChange",
  })

  useEffect(() => {
    void loadComments()
  }, [loadComments])

  const contentLength = form.watch("content")?.length ?? 0

  const statusTone = useMemo(() => {
    if (successMessage) {
      return "text-emerald-700 bg-emerald-50 border-emerald-200"
    }

    if (isError) {
      return "text-red-700 bg-red-50 border-red-200"
    }

    return ""
  }, [isError, successMessage])

  const onSubmit = async (values: BlogCommentFormValues) => {
    const result = await submitComment(values)

    if (result.ok) {
      form.reset(defaultValues)
    }
  }

  return (
    <section className="mt-16 rounded-3xl border border-border bg-card p-6 md:p-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl md:text-3xl tracking-tight">Comments</h2>
          <p className="mt-2 text-sm text-muted-foreground">Share your ideas, questions, or analysis about this post.</p>
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={() => {
            resetFeedback()
            void loadComments()
          }}
          disabled={isLoading}
          className="rounded-full"
        >
          {isLoading ? <Loader2 className="size-4 animate-spin" /> : <RefreshCw className="size-4" />}
          Refresh
        </Button>
      </div>

      {(successMessage || isError) && (
        <div className={`mt-6 rounded-xl border px-4 py-3 text-sm ${statusTone}`}>
          {successMessage ?? error}
        </div>
      )}

      <CommentsForm
        form={form}
        isSubmitting={isSubmitting}
        isError={isError}
        hasSuccess={Boolean(successMessage)}
        contentLength={contentLength}
        onSubmit={onSubmit}
        onInputChange={resetFeedback}
      />

      <div className="mt-10 space-y-4">
        <CommentsList comments={comments} isLoading={isLoading} />
      </div>
    </section>
  )
}
