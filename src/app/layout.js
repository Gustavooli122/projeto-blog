import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const metadata = {
title: "Evolução na Programação | Mentalidade, Produtividade e Carreira Dev",

description:
"Blog sobre evolução na programação, mentalidade de desenvolvedor, produtividade, fundamentos da programação e erros comuns que iniciantes cometem. Conteúdos para ajudar programadores a crescer na carreira e melhorar suas habilidades.",

keywords: [
"programação",
"mentalidade de programador",
"produtividade para programadores",
"fundamentos da programação",
"como evoluir na programação",
"carreira de programador",
"erros comuns na programação",
"aprendizado em programação",
"disciplina para estudar programação",
"como melhorar na programação",
"dicas para programadores iniciantes",
"hábitos de programadores",
"crescimento como desenvolvedor",
"mindset de programador",
"desenvolvimento pessoal para programadores"
],

authors: [{ name: "Gustavo Oliveira" }],
creator: "Gustavo Oliveira",

robots: {
index: true,
follow: true,
},

openGraph: {
title: "Evolução na Programação",
description:
"Dicas, mentalidade e estratégias para evoluir na programação e crescer como desenvolvedor.",
type: "website",
locale: "pt_BR",
siteName: "Evolução Dev",
},

icons: {
icon: "/icon.svg",
},
};

export default function RootLayout({ children }) {
return ( <html lang="pt-BR">
<body
className={`${geistSans.variable} ${geistMono.variable} antialiased`}
> <ScrollToTop />
{children} </body> </html>
);
}
