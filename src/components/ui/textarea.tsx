import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-lg border border-cyber/20 bg-void-light px-4 py-3 text-sm text-ghost ring-offset-void placeholder:text-ghost-dim focus-visible:outline-none focus-visible:border-cyber focus-visible:ring-2 focus-visible:ring-cyber/20 focus-visible:shadow-glow-sm disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
