import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">MyCompany</h3>
          <p className="text-sm">
            Building solutions for a better digital experience. Powered by Next.js and Tailwind.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-medium mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><FooterLink href="/">Home</FooterLink></li>
            <li><FooterLink href="/about">About Us</FooterLink></li>
            <li><FooterLink href="/services">Services</FooterLink></li>
            <li><FooterLink href="/contact">Contact</FooterLink></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-medium mb-2">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><FooterLink href="/blog">Blog</FooterLink></li>
            <li><FooterLink href="/docs">Docs</FooterLink></li>
            <li><FooterLink href="/terms">Terms</FooterLink></li>
            <li><FooterLink href="/privacy">Privacy</FooterLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-medium mb-2">Contact</h4>
          <p className="text-sm">Email: support@example.com</p>
          <p className="text-sm">Phone: +123 456 789</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="hover:text-white transition-colors">
      {children}
    </Link>
  );
}
