import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber focus-visible:ring-offset-2 focus-visible:ring-offset-void disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-void-light border border-cyber/30 text-ghost hover:bg-cyber/10 hover:border-cyber hover:shadow-glow-sm",
        destructive: "bg-danger/20 border border-danger/50 text-danger hover:bg-danger/30 hover:border-danger hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]",
        outline: "border-2 border-cyber text-cyber bg-transparent hover:bg-cyber hover:text-void hover:shadow-glow-md",
        secondary: "bg-gradient-to-r from-cyber to-cyber-light text-void font-bold hover:from-cyber-light hover:to-cyber hover:shadow-glow-md",
        ghost: "text-ghost-muted hover:text-ghost hover:bg-cyber/10",
        link: "text-cyber underline-offset-4 hover:underline",
        plasma: "bg-gradient-to-r from-plasma to-plasma-light text-white font-bold hover:from-plasma-light hover:to-plasma hover:shadow-glow-purple",
        matrix: "bg-gradient-to-r from-matrix to-matrix-light text-void font-bold hover:from-matrix-light hover:to-matrix hover:shadow-glow-matrix",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
