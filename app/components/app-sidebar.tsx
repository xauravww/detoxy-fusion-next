"use client"

import { Calendar, Home, Inbox, Search, Settings  , PersonStandingIcon ,LogOutIcon} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/app/components/ui/sidebar"
import { useState } from "react"
import clsx from "clsx"
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Profile",
    url: "#",
    icon: PersonStandingIcon,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Logout",
    url: "/login",
    icon: LogOutIcon,
  },
]




export function AppSidebar() {
  const [checked , setChecked] = useState("Home")
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Detoxy Fusion</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} onClick={()=>setChecked(item.title)} className={clsx({"bg-black dark:bg-gray-200 text-white hover:bg-black hover:text-white dark:hover:bg-gray-200 dark:text-black":checked==item.title})}  >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
