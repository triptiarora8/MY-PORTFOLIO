"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "../components/ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";


export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed dark top-10  inset-x-0 max-w-2xl mx-auto z-50 ", className)}>
      <Menu setActive={setActive} >
        <Link href="/"><MenuItem setActive={setActive} active={active} item="Home"></MenuItem></Link>
        <MenuItem setActive={setActive} active={active} item="Services">
        <div className=" flex flex-col p-2 text-sm">
          <HoveredLink href="/">Web development</HoveredLink>
          <HoveredLink href="/">Interface Design</HoveredLink>
          <HoveredLink href="/">Search Engine Optimization</HoveredLink>
          <HoveredLink href="/">Branding</HoveredLink>

        </div>
        </MenuItem>
        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact us"></MenuItem>
        </Link>

      </Menu>
        </div>
  )
}
