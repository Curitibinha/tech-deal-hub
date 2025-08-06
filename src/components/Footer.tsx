import { Mail, Phone, MapPin, Youtube, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Categorias",
      links: [
        "Smartphones",
        "Notebooks",
        "Componentes PC",
        "Periféricos",
        "Gaming",
        "Câmeras"
      ]
    },
    {
      title: "Conteúdo",
      links: [
        "Reviews",
        "Comparativos",
        "Guias de Compra",
        "Notícias Tech",
        "Tutoriais",
        "Top Lists"
      ]
    },
    {
      title: "Empresa",
      links: [
        "Sobre Nós",
        "Contato",
        "Política de Privacidade",
        "Termos de Uso",
        "Trabalhe Conosco",
        "Imprensa"
      ]
    }
  ];

  const socialLinks = [
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand & Contact */}
            <div className="lg:col-span-1 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-tech-gradient rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-xl font-bold bg-tech-gradient bg-clip-text text-transparent">
                  TechBrasil
                </span>
              </div>

              <p className="text-muted-foreground">
                O melhor conteúdo sobre tecnologia do Brasil. Reviews imparciais, 
                comparativos detalhados e as melhores ofertas do mercado.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>contato@techbrasil.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>São Paulo, Brasil</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 hover:text-primary"
                      asChild
                    >
                      <a href={social.href} aria-label={social.name}>
                        <IconComponent className="w-4 h-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-bold text-foreground">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`/${link.toLowerCase().replace(' ', '-')}`}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="font-bold text-foreground mb-2">
                Fique por dentro das novidades
              </h4>
              <p className="text-sm text-muted-foreground">
                Receba reviews exclusivos e ofertas diretamente no seu email
              </p>
            </div>
            <Button className="bg-tech-gradient hover:opacity-90 transition-opacity">
              Assinar Newsletter
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} TechBrasil. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="/privacidade" className="hover:text-primary transition-colors">
                Privacidade
              </a>
              <a href="/termos" className="hover:text-primary transition-colors">
                Termos
              </a>
              <a href="/cookies" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* AdSense Footer Banner */}
        <div className="py-4">
          <div className="bg-muted/50 border-2 border-dashed border-muted-foreground/20 rounded-xl p-4 text-center">
            <p className="text-muted-foreground text-xs">
              📊 Google AdSense - Banner Footer 728x90
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;