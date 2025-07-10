import Link from "next/link";

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning="true" data-qb-installed="true">
        <nav className="p-4 bg-gray-800 text-white flex justify-center">
          <Link href="/" className="text-white font-bold">
            Home
          </Link>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
