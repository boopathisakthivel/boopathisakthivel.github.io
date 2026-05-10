import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary/15 text-primary-foreground hover:bg-primary/20',
        secondary:
          'border-white/10 bg-white/[0.04] text-foreground/90 hover:bg-white/[0.08]',
        outline: 'border-white/15 text-foreground',
        gradient:
          'border-transparent bg-ai-gradient text-white shadow-lg shadow-primary/30',
        soft:
          'border-white/10 bg-ai-gradient-soft text-foreground/90',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
