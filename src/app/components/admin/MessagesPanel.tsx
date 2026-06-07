import { MessageSquare, Eye } from "lucide-react";
import { ContactMessage } from "../../data/messages";

interface MessagesPanelProps {
  messages: ContactMessage[];
  onMarkAsRead: (id: string) => void;
}

export function MessagesPanel({ messages, onMarkAsRead }: MessagesPanelProps) {
  return (
    <div>
      <div className="p-6 md:p-8 border-b border-slate-100">
        <h1 className="text-2xl font-bold text-slate-800">Mensajes Recibidos</h1>
        <p className="text-slate-500">Consultas y sugerencias de la comunidad</p>
      </div>

      <div className="divide-y divide-slate-100">
        {messages.map(msg => (
          <div key={msg.id} className={`p-6 hover:bg-slate-50 transition-colors flex gap-4 ${!msg.read ? 'bg-emerald-50/30' : ''}`}>
            <div className="shrink-0 pt-1">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg ${
                !msg.read ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
              }`}>
                {msg.name.charAt(0)}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className={`font-medium ${!msg.read ? 'text-slate-900 font-bold' : 'text-slate-700'}`}>
                    {msg.name}
                  </h3>
                  <p className="text-sm text-slate-500">{msg.email}</p>
                </div>
                <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-md">{msg.date}</span>
              </div>
              <p className={`mt-2 text-sm leading-relaxed ${!msg.read ? 'text-slate-800 font-medium' : 'text-slate-600'}`}>
                {msg.message}
              </p>
              <div className="mt-4 flex gap-2">
                <button className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" /> Responder
                </button>
                {!msg.read && (
                  <button
                    onClick={() => onMarkAsRead(msg.id)}
                    className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-1"
                  >
                    <Eye className="h-3 w-3" /> Marcar leído
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
