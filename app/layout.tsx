import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
	subsets: ['latin'],
	weight: ['300', '400', '600'],
	variable: '--font-outfit',
})

export const metadata = {
	title: 'NFT Preview Card',
	description:
		'Front End Mentor Challenge | NFT Preview Card | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${outfit.variable} bg-blue-950 text-white font-outfit`}>{children}</body>
		</html>
	)
}
