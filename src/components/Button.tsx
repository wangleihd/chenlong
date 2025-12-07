import * as React from "react"
import { Button as ShadcnButton } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export type ButtonProps = React.ComponentProps<typeof ShadcnButton> & {
    isLoading?: boolean
}

const Button = ({
    className,
    children,
    isLoading,
    disabled,
    asChild,
    ...props
}: ButtonProps) => {
    if (asChild) {
        return (
            <ShadcnButton
                className={className}
                disabled={isLoading || disabled}
                asChild
                {...props}
            >
                {children}
            </ShadcnButton>
        )
    }

    return (
        <ShadcnButton
            className={className}
            disabled={isLoading || disabled}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </ShadcnButton>
    )
}
Button.displayName = "Button"

export { Button }
