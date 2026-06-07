import { Outlet, Link } from "react-router";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import { MenuNav } from "./MenuNav";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Inicio", path: "/" },
    { label: "Materiales", path: "/materiales" },
    { label: "Chatbot", path: "/chatbot" },
    { label: "Contacto", path: "/contacto" },
    { label: "Admin", path: "/login" },
  ];

  return (
    <div className="layout-principal">
      <header className="layout-header bg-emerald-700 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <Leaf className="h-8 w-8 text-emerald-300" />
                <span className="font-bold text-xl tracking-tight">Huerto CESFAM</span>
              </Link>
            </div>
            
          
            <nav aria-label="Menú principal" className="hidden md:flex items-center space-x-8">
               <MenuNav links={links} />
            </nav>

          
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-nav"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                className="inline-flex items-center justify-center p-2 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

     
        {isMenuOpen && (
          <nav id="mobile-nav" aria-label="Menú móvil" className="md:hidden bg-emerald-800 shadow-inner p-4">
            <MenuNav links={links} />
          </nav>
        )}
      </header>

      <main className="layout-main">
        <Outlet />
      </main>

      <aside className="layout-sidebar">
        <div className="sticky top-24 space-y-4">
        
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <Leaf className="h-4 w-4 text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">Huerto Comunitario</h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Mantenido por voluntarios y profesionales del CESFAM Las Condes para la comunidad.
            </p>
            <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl text-xs text-emerald-800">
              <p className="font-semibold mb-1">Horario de atención</p>
              <p>Lun – Vie: 08:00 – 17:00 hrs.</p>
            </div>
          </div>

          
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-800 text-sm mb-3">Accesos rápidos</h3>
            <nav aria-label="Accesos rápidos" className="flex flex-col gap-1">
              <Link to="/materiales" className="flex items-center gap-2 text-xs text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-lg transition-colors">
                <span className="text-emerald-500">🌿</span> Catálogo de plantas
              </Link>
              <Link to="/contacto" className="flex items-center gap-2 text-xs text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-lg transition-colors">
                <span className="text-emerald-500">✉</span> Formulario de contacto
              </Link>
              <Link to="/chatbot" className="flex items-center gap-2 text-xs text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-lg transition-colors">
                <span className="text-emerald-500">💬</span> Asistente virtual
              </Link>
              <Link to="/login" className="flex items-center gap-2 text-xs text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-lg transition-colors">
                <span className="text-emerald-500">🔒</span> Acceso administrador
              </Link>
            </nav>
          </div>

        
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-5 rounded-2xl text-white">
            <p className="text-xs font-semibold opacity-80 uppercase tracking-wider mb-1">Sabías que</p>
            <p className="text-sm leading-relaxed">
              La manzanilla es una de las plantas medicinales más antiguas del mundo, usada por más de 2.000 años.
            </p>
          </div>
        </div>
      </aside>

      <footer className="layout-footer bg-emerald-900 text-emerald-200 py-8 text-center text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-emerald-400" />
            <span className="font-semibold text-white">Huerto Comunitario CESFAM Las Condes</span>
          </div>
          <p>© {new Date().getFullYear()} Todos los derechos reservados. Proyecto Educativo.</p>
        </div>
      </footer>
    </div>
  );
}