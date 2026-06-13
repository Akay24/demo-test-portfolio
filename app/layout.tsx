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
  title: "Abhijeet Mishra | Software Developer",
  description:
    "Software Developer with ~1.5 years of experience in Python, Node.js, REST APIs, and cloud-native applications. Expert in backend microservices, test automation, and CI/CD pipelines.",
  keywords: [
    "Software Developer",
    "Backend Developer",
    "Python",
    "Node.js",
    "REST APIs",
    "AWS",
    "Robot Framework",
    "MERN Stack",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Abhijeet Mishra" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abhijeet Mishra | Software Developer",
    description:
      "Software Developer specializing in Python, Node.js, REST APIs, and scalable backend microservices.",
    siteName: "Abhijeet Mishra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijeet Mishra | Software Developer",
    description:
      "Software Developer specializing in Python, Node.js, REST APIs, and scalable backend microservices.",
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
