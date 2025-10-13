import "./globals.css";

export const metadata = {
    title: "Dead Cells",
    description: "Projeto pra mostrar tudo que eu sei",
    icons: {
        icon: "/icons/icon-dead-cells.jpg",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </head>
            <body>{children}</body>
        </html>
    );
}

