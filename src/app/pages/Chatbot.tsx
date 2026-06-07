import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, HelpCircle, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router";

export function Chatbot() {
  const [messages, setMessages] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: '¡Hola! Soy el asistente virtual del Huerto Medicinal CESFAM Las Condes. ¿En qué te puedo ayudar hoy? Puedes preguntarme sobre beneficios de plantas, cuidados, o cómo ubicar el huerto.' }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput("");

  
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = userMessage.toLowerCase();
      
      if (lowerInput.includes("aloe") || lowerInput.includes("quemadura")) {
        botResponse = "El Aloe Vera es excelente para quemaduras y heridas leves por sus propiedades cicatrizantes e hidratantes. Puedes encontrar más detalles en nuestro catálogo.";
      } else if (lowerInput.includes("estomago") || lowerInput.includes("guata") || lowerInput.includes("menta") || lowerInput.includes("digestivo")) {
        botResponse = "Para problemas digestivos o de estómago, te recomiendo consultar sobre la Menta o el Boldo en nuestro huerto. Ambas son excelentes para la digestión en formato de infusión.";
      } else if (lowerInput.includes("dormir") || lowerInput.includes("insomnio") || lowerInput.includes("relajar")) {
        botResponse = "Para ayudar a dormir o relajarte, la Manzanilla y la Lavanda son opciones fantásticas que cultivamos aquí. Una infusión antes de dormir puede hacer la diferencia.";
      } else if (lowerInput.includes("horario") || lowerInput.includes("ubicacion") || lowerInput.includes("donde")) {
        botResponse = "El Huerto Comunitario está ubicado en el patio central del CESFAM. Está abierto de lunes a viernes de 09:00 a 16:00 hrs.";
      } else {
        botResponse = "Esa es una excelente pregunta. Si mi respuesta no es suficiente o es una consulta más compleja, te recomiendo que nos envíes un mensaje directamente.";
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 800);
  };

  return (
    <div className="max-w-3xl mx-auto h-[calc(100vh-140px)] flex flex-col animate-in fade-in duration-500">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-extrabold text-slate-800 flex items-center justify-center gap-3">
          <Bot className="h-8 w-8 text-emerald-600" />
          Asistente del Huerto
        </h1>
        <p className="text-slate-600 mt-2">Resuelve tus dudas rápidas sobre las plantas y el CESFAM</p>
      </div>

      <div className="flex-1 bg-white rounded-t-2xl border-t border-l border-r border-slate-200 shadow-sm overflow-y-auto p-4 md:p-6 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-[80%] md:max-w-[70%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                msg.role === 'user' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-emerald-600 border border-slate-200'
              }`}>
                {msg.role === 'user' ? <User className="h-5 w-5" /> : <Bot className="h-6 w-6" />}
              </div>
              <div className={`p-4 rounded-2xl ${
                msg.role === 'user' 
                  ? 'bg-emerald-600 text-white rounded-tr-none' 
                  : 'bg-slate-50 text-slate-700 border border-slate-200 rounded-tl-none'
              }`}>
                <p className="text-sm md:text-base leading-relaxed">{msg.text}</p>
                
                {msg.role === 'bot' && msg.text.includes('envíes un mensaje') && (
                  <Link to="/contacto" className="mt-3 inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800 bg-emerald-100/50 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors">
                    <LinkIcon className="h-3 w-3 mr-1.5" />
                    Ir al Formulario de Contacto
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white p-4 border border-slate-200 rounded-b-2xl shadow-sm">
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 text-slate-800 placeholder-slate-400"
            placeholder="Escribe tu pregunta aquí..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl px-5 py-3 transition-colors flex items-center justify-center font-medium"
          >
            <Send className="h-5 w-5 md:mr-2" />
            <span className="hidden md:inline">Enviar</span>
          </button>
        </div>
        <p className="text-xs text-center text-slate-400 mt-3 flex items-center justify-center gap-1">
          <HelpCircle className="h-3 w-3" />
          Respuestas automáticas. Para consultas de salud, siempre consulta a un profesional.
        </p>
      </div>
    </div>
  );
}