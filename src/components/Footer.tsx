import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="mb-4 inline-block">
              <img
                src={logoHorizontal}
                alt="TechHim Solutions"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Building powerful digital solutions for modern businesses.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Phone: 8278771093</p>
              <p>tech.himtech@gmail.com</p>
              <p>harish.pariihar@gmail.com</p>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.linkedin.com/in/harish-parihar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/harish.phr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 TechHim Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
