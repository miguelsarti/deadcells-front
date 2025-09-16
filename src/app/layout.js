import "./globals.css";

export const metadata = {
    title: "Dead Cells",
    description: "Projeto pra mostrar tudo que eu sei",
    icons: {
        icon: "/icons/deadcells.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}

