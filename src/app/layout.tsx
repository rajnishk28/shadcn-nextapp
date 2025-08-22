import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/appSidebar"
import { Toaster } from "@/components/ui/sonner"
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <SidebarProvider>
            <AppSidebar />
          <main className="w-full ml-4">
            <Navbar />
            <Toaster />
            {children}
          </main>
        </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
