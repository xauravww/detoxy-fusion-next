
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

import { SidebarProvider, SidebarTrigger } from "@/app/components/ui/sidebar"
import { AppSidebar } from "@/app/components/app-sidebar"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
       <SidebarProvider>
      <AppSidebar />
      <main className="flex w-full">
        <SidebarTrigger />
       <div className="flex-grow">
       {children}
       </div>
      </main>
    </SidebarProvider>
  );
}
