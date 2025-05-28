import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Anas Yakubu | Software Engineer & Problem Solver - Portfolio",
    description:
        "I craft clean, scalable, and user-focused web applications using modern technologies across the stack",

    keywords: "Anas Yakubu, Portfolio, Web Developer, Anas Yakubu, Frontend Developer, anasyakubu, Anas Dev, Anas Yakubu Front-End Developer, Backend Developer, Anas Yakubu Programmer, Nigeria Programmer, Anas Yakubu Portfolio",
    robots: "index, follow",
    icons: [
        { rel: "icon", url: "/images/favicon.ico" },
        { rel: "apple-touch-icon", url: "/images/favicon.ico" },
    ],
    openGraph: {
        title: "Anas Yakubu - Portfolio",
        description: "4+ years of experience in software development.",
        url: "https://anasyakubu.netlify.app/",
        images: [
            {
                url: "https://anasyakubu.netlify.app/images/preview.png",
                alt: "Anas Yakubu Portfolio Preview",
            },
        ],
    },
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* for google-site-generation, generate yours from google cloud console, for seo */}
                <meta name="google-site-verification" content="ZuNx7mDeY7yQfX8ZKLR4FBsXcFZPFWzbXILnaAGmdMo" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Lexend&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                />
                <meta name="theme-color" content="#061417" />
            </head>
            <body>{children}</body>
        </html>
    );
}
