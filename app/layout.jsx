import { Inter } from 'next/font/google';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import './globals.css';
import '../src/views/LandingPage.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'CoDeC - Competitive Programming & Technical Club',
    description: 'The premier competitive programming and technical club. Building the future of tech, one line of code at a time.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Navbar />
                    <main style={{ flex: 1 }}>
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
