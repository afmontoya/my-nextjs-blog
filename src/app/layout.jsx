import "./globals.css";

export const metadata = {
  title: "My Next.js Blog",
  description: "A simple blog built with Next.js and GitHub Codespaces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container">
            <nav className="nav">
              <a href="/" className="logo">My Blog</a>
              <div className="nav-links">
                <a href="/">Home</a>
                <a href="#">About</a>
              </div>
            </nav>
          </div>
        </header>
        
        {children}
        
        <footer className="footer">
          <div className="container">
            © {new Date().getFullYear()} My Next.js Blog. Built with Next.js and GitHub Codespaces.
          </div>
        </footer>
      </body>
    </html>
  );
}
