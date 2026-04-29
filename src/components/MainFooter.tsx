import Link from 'next/link';
import Image from 'next/image';

export default function MainFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Coluna 1: Branding */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <Image 
                src="/logo-r3creative.png" 
                alt="R3 Creative" 
                width={180} 
                height={38} 
                className="footer-logo-img" 
                style={{ filter: 'none' }}
              />
            </Link>
            <p className="footer-desc">
              Transformamos presença digital em lucro real através de dados, criatividade e tecnologia.
            </p>
          </div>

          {/* Coluna 2: Plataforma */}
          <div className="footer-links">
            <h4 className="footer-title">Plataforma</h4>
            <ul>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#solucoes">Nossas Soluções</a></li>
              <li><a href="#especialidades">Especialidades</a></li>
              <li><a href="#cases">Cases de Sucesso</a></li>
            </ul>
          </div>

          {/* Coluna 3: Crescimento */}
          <div className="footer-links">
            <h4 className="footer-title">Crescimento</h4>
            <ul>
              <li><Link href="/briefing">Diagnóstico Estratégico</Link></li>
              <li><a href="mailto:contato@r3creative.com.br">contato@r3creative.com.br</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Localização */}
          <div className="footer-links">
            <h4 className="footer-title">Conecte-se</h4>
            <ul className="footer-contact-info">
              <li>
                <span className="contact-label">WhatsApp</span>
                <a href="https://wa.me/5521993197567" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                  (21) 99319-7567
                </a>
              </li>
              <li>
                <span className="contact-label">Endereço</span>
                <address>
                  Av. Principal, Edifício Premium<br/>
                  Rio de Janeiro, RJ - Brasil
                </address>
              </li>
              <li className="footer-social-icons">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; {new Date().getFullYear()} R3 Creative. Todos os direitos reservados.</p>
            <span className="footer-tagline">Alta Performance & Design</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
