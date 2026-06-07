import { LogOut, MessageSquare, LayoutDashboard, Leaf } from "lucide-react";

interface AdminSidebarProps {
  activeTab: 'plants' | 'messages';
  onTabChange: (tab: 'plants' | 'messages') => void;
  unreadMessagesCount: number;
  onLogout: () => void;
}

export function AdminSidebar({ activeTab, onTabChange, unreadMessagesCount, onLogout }: AdminSidebarProps) {
  return (
    <aside className="w-full md:w-64 shrink-0 space-y-2">
      <div className="bg-slate-900 text-white rounded-3xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-6">
          <div className="bg-emerald-500 p-2 rounded-xl">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg leading-tight">Panel Admin</h2>
            <p className="text-slate-400 text-xs">Gestión del Huerto</p>
          </div>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => onTabChange('plants')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium ${
              activeTab === 'plants' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <LayoutDashboard className="h-5 w-5" />
            Inventario Plantas
          </button>
          <button
            onClick={() => onTabChange('messages')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors text-sm font-medium ${
              activeTab === 'messages' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5" />
              Mensajes
            </div>
            {unreadMessagesCount > 0 && (
              <span className="bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {unreadMessagesCount}
              </span>
            )}
          </button>
        </nav>
      </div>

      <button
        onClick={onLogout}
        className="w-full flex items-center justify-center gap-2 bg-white text-rose-600 hover:bg-rose-50 border border-slate-200 px-4 py-3 rounded-2xl font-bold transition-colors shadow-sm"
      >
        <LogOut className="h-5 w-5" />
        Cerrar Sesión
      </button>
    </aside>
  );
}
