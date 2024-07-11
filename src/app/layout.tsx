import type { Metadata } from "next";
import { Roboto } from "next/font/google";
// 전역 CSS
import "@/styles/globals.css";
import SideNavigation from "@/components/ui/common/navigation/SideNavigation";

const roboto = Roboto({ subsets: ["latin"],weight:["400","500","700"] });

export const metadata: Metadata = {
	title: "Shadcn UI - Todoboard",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<SideNavigation />
				{children}
			</body>
		</html>
	);
}
