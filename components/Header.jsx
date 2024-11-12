
"use client";

import Link from "next/link";
import { Navbar, } from "flowbite-react";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
  <>
      <Navbar fluid rounded >
            <div className="flex gap-6 " >
            <Sidebar />
                  <Navbar.Brand as={Link} href="https://flowbite-react.com" >
                  <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Suguna PIP School</span>
                </Navbar.Brand>
            </div>
          <Navbar.Toggle />
          <Navbar.Collapse>
            
            <Navbar.Link as={Link} href="/">
              Home
            </Navbar.Link>
            <Navbar.Link as={Link} href="/about">About</Navbar.Link>
            <Navbar.Link href="/admission">Admission</Navbar.Link>
            <Navbar.Link href="#" >Contact</Navbar.Link>
          </Navbar.Collapse>
      </Navbar>
  </>
    
  );
}
