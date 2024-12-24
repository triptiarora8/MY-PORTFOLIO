"use client";
import React, { ElementType, ReactNode, MouseEventHandler } from "react";
// import {
//   motion,
//   useAnimationFrame,
//   useMotionTemplate,
//   useMotionValue,
//   useTransform,
// } from "framer-motion";
import { cn } from "../../lib/utils";
interface ButtonProps {
  borderRadius?: string;
  children: ReactNode;
  as?: ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;  
}

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,

  className,
  onClick,  // Accept onClick prop here
  ...otherProps
}: ButtonProps) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl h-16 w-40 p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      onClick={onClick}  // Pass onClick to the Component
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {/* <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder> */}
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}
