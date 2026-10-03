import type { Metadata } from "next";
import { Geist, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Navigation } from "@/components/navigation";
import { CursorGlow } from "@/components/cursor-glow";
import { ThemeFab } from "@/components/theme-picker";
import { themes } from "@/lib/themes";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhijeet-mishra.vercel.app"),
  title: "Abhijeet Mishra | Software Engineer — Backend & Python Automation",
  description:
    "Software Engineer with 2+ years of experience architecting scalable automation solutions, FastAPI and Node.js API ecosystems, and cloud-native applications on AWS.",
  keywords: [
    "Abhijeet Mishra",
    "Software Engineer",
    "Backend Developer",
    "Python Automation",
    "FastAPI",
    "Node.js",
    "REST APIs",
    "AWS",
    "Robot Framework",
    "Workflow Automation",
    "Microservices Architecture",
  ],
  authors: [{ name: "Abhijeet Mishra" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhijeet-mishra.vercel.app",
    title: "Abhijeet Mishra | Software Engineer — Backend & Python Automation",
    description:
      "Software Engineer with 2+ years of experience specializing in Python, FastAPI, Node.js, and cloud-native backend architecture.",
    siteName: "Abhijeet Mishra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijeet Mishra | Software Engineer — Backend & Python Automation",
    description:
      "Software Engineer with 2+ years of experience specializing in Python, FastAPI, Node.js, and cloud-native backend architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Build theme lookup for the pre-paint script
const themeMap: Record<string, Record<string, string>> = {};
themes.forEach((theme) => {
  themeMap[theme.id] = { ...theme.vars, group: theme.group };
});

const prePaintScript = `
(function() {
  try {
    var saved = localStorage.getItem('__portfolio_theme__');
    if (!saved) return;
    var themes = ${JSON.stringify(themeMap)};
    var theme = themes[saved];
    if (!theme) return;
    var root = document.documentElement;
    Object.keys(theme).forEach(function(key) {
      if (key === 'group') return;
      root.style.setProperty(key, theme[key]);
    });
    if (theme.group === 'light') {
      root.classList.remove('dark');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} dark antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-prepaint"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: prePaintScript }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <CursorGlow />
        <Navigation />
        <ThemeFab />
        <main>{children}</main>
        <div className="noise" />
      </body>
    </html>
  );
}
