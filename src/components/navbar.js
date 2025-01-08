'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
    const router = useRouter();
    const path = usePathname();
    let auth = false;

    return (
        <nav className="bg-blue-700 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <button
                    onClick={() => router.back()}
                    className={`text-gray-300 hover:text-white flex items-center ${path !== '/' ? 'block' : 'hidden'}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="size-5 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>

                    Go Back
                </button>
                <div className="text-white text-lg font-bold">
                    <Link href="/">
                        Employee Management
                    </Link>
                </div>
                <div className="space-x-4 flex items-center">
                    <Link href="/" className="text-gray-300 hover:text-white flex items-center m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="size-5 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Home
                    </Link>
                    <Link href="/login"
                        className={`text-gray-300 hover:text-white ${auth ? 'hidden' : 'block'}`}>
                        Login
                    </Link>
                    <Link href="/login"
                        className={`text-gray-300 hover:text-white ${auth ? 'block' : 'hidden'}`}>
                        Logout
                    </Link>
                    <Link href="/chat"
                        className={`text-gray-300 hover:text-white `}>
                        Chat
                    </Link>
                </div>
            </div>
        </nav>
    );
}