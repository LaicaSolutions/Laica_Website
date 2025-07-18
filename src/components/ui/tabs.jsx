import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../../utils/utils.js';

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'inline-flex h-14 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground md:h-10',
        className
      )}
      {...rest}
    />
  );
});
TabsList.displayName = 'TabsList';

export const TabsTrigger = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
        className
      )}
      {...rest}
    />
  );
});
TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
      {...rest}
    />
  );
});
TabsContent.displayName = 'TabsContent';
