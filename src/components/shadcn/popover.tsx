'use client';

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '@/lib/utils';

function Popover(props: React.ComponentProps<typeof PopoverPrimitive.Root>) {
    return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
    id,
    ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
    const generatedId = React.useId();
    const finalId = id ?? generatedId;

    return (
        <PopoverPrimitive.Trigger
            id={finalId}
            aria-controls={`${finalId}-content`}
            data-slot="popover-trigger"
            {...props}
        />
    );
}

function PopoverContent({
    id,
    className,
    align = 'center',
    sideOffset = 4,
    ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
    const generatedId = React.useId();
    const finalId = id ?? `${generatedId}-content`;

    return (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
                id={finalId}
                data-slot="popover-content"
                align={align}
                sideOffset={sideOffset}
                className={cn(
                    'bg-background/30 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-[--radix-popover-content-transform-origin] rounded-md border p-4 shadow-md outline-hidden',
                    className
                )}
                {...props}
            />
        </PopoverPrimitive.Portal>
    );
}

function PopoverAnchor({
    ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
    return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
