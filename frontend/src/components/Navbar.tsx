"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import useLogout from "../hooks/useLogout";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const {logout} = useLogout();
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
          </div>
        </MenuItem>
         */}
        <HoveredLink to="/home">Home</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="New Event"
              href="/home/newevent"
              src=""
              description="Create a new Event"
            />
            <ProductItem
              title="Scanner"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Open QR scanner for existing evnet"
            />
            {/* <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            /> */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Account">
          <div className="flex flex-col space-y-4 text-sm">
            {/* <div>hihi</div> */}
            <ProductItem title="User" description="sam" href="" src="" />
            {/* <HoveredLink to="/hobby"></HoveredLink> */}
            {/* <HoveredLink href="/individual">Individual</HoveredLink> */}
            {/* <HoveredLink href="/team">Team</HoveredLink> */}
            <HoveredLink href="/enterprise" className="text-xl">
              <button onClick={logout}>Logout</button>
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
