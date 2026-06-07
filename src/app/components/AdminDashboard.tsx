import { useState } from "react";
import { X, Save } from "lucide-react";
import { useNavigate } from "react-router";
import { plantsData, Plant } from "../data";
import { ContactMessage, mockMessages } from "../data/messages";
import { AdminSidebar } from "./admin/AdminSidebar";
import { PlantsTable } from "./admin/PlantsTable";
import { MessagesPanel } from "./admin/MessagesPanel";

export function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'plants' | 'messages'>('plants');
  const [plants, setPlants] = useState<Plant[]>(plantsData);
  const [messages, setMessages] = useState<ContactMessage[]>(mockMessages);
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlant, setEditingPlant] = useState<Plant | null>(null);
  

  const [formData, setFormData] = useState<Partial<Plant>>({});

  const handleDelete = (id: string) => {
    if (confirm("¿Estás seguro de eliminar esta planta?")) {
      setPlants(plants.filter(p => p.id !== id));
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  const openAddModal = () => {
    setEditingPlant(null);
    setFormData({
      id: "", codigo: "", name: "", scientificName: "", category: "", image: "", estado: "Abundante", cantidad: 0, benefits: [], usage: "", activePrinciples: "", care: ""
    });
    setIsModalOpen(true);
  };

  const openEditModal = (plant: Plant) => {
    setEditingPlant(plant);
    setFormData(plant);
    setIsModalOpen(true);
  };

  const handleSavePlant = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPlant) {
      setPlants(plants.map(p => p.id === editingPlant.id ? formData as Plant : p));
    } else {
      const newPlant = {
        ...formData,
        id: formData.name?.toLowerCase().replace(/\s+/g, '-') || Math.random().toString(),
        benefits: typeof formData.benefits === 'string' 
          ? (formData.benefits as string).split(',').map(b => b.trim()) 
          : formData.benefits
      } as Plant;
      setPlants([newPlant, ...plants]);
    }
    setIsModalOpen(false);
  };

  const unreadMessagesCount = messages.filter(m => !m.read).length;

  return (
    <div className="max-w-7xl mx-auto pb-8 flex flex-col md:flex-row gap-8">
      <AdminSidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        unreadMessagesCount={unreadMessagesCount}
        onLogout={handleLogout}
      />

   
      <main className="flex-1 min-w-0">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          
          {activeTab === 'plants' && (
            <PlantsTable
              plants={plants}
              onAdd={openAddModal}
              onEdit={openEditModal}
              onDelete={handleDelete}
            />
          )}

          {activeTab === 'messages' && (
            <MessagesPanel
              messages={messages}
              onMarkAsRead={(id) => setMessages(messages.map(m => m.id === id ? { ...m, read: true } : m))}
            />
          )}

        </div>
      </main>

    
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col relative z-10 shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-800">
                {editingPlant ? 'Editar Planta' : 'Nueva Planta'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 hide-scrollbar">
              <form id="plant-form" onSubmit={handleSavePlant} className="space-y-6">
             
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <div>
                    <label htmlFor="f-codigo" className="block text-sm font-semibold text-slate-700 mb-1">Código</label>
                    <input id="f-codigo" required type="text" value={formData.codigo || ''} onChange={e => setFormData({...formData, codigo: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="PL-001" />
                  </div>
                  <div>
                    <label htmlFor="f-cantidad" className="block text-sm font-semibold text-slate-700 mb-1">Cantidad (Stock)</label>
                    <input id="f-cantidad" required type="number" min="0" value={formData.cantidad || 0} onChange={e => setFormData({...formData, cantidad: Number(e.target.value)})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="f-estado" className="block text-sm font-semibold text-slate-700 mb-1">Estado del Stock</label>
                    <select id="f-estado" required value={formData.estado || 'Abundante'} onChange={e => setFormData({...formData, estado: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none">
                      <option value="Abundante">Abundante</option>
                      <option value="Estable">Estable</option>
                      <option value="Crítico">Crítico</option>
                    </select>
                  </div>
                </div>

               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="f-name" className="block text-sm font-semibold text-slate-700 mb-1">Nombre Común</label>
                    <input id="f-name" required type="text" value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="f-scientific" className="block text-sm font-semibold text-slate-700 mb-1">Nombre Científico</label>
                    <input id="f-scientific" required type="text" value={formData.scientificName || ''} onChange={e => setFormData({...formData, scientificName: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="f-category" className="block text-sm font-semibold text-slate-700 mb-1">Categoría</label>
                    <input id="f-category" required type="text" value={formData.category || ''} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Ej. Digestivo, Relajante" />
                  </div>
                  <div>
                    <label htmlFor="f-image" className="block text-sm font-semibold text-slate-700 mb-1">URL de Imagen</label>
                    <input id="f-image" required type="text" value={formData.image || ''} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="https://..." />
                  </div>
                </div>

              
                <div className="space-y-5">
                  <div>
                    <label htmlFor="f-benefits" className="block text-sm font-semibold text-slate-700 mb-1">Beneficios (separados por coma)</label>
                    <textarea id="f-benefits" required rows={2} value={Array.isArray(formData.benefits) ? formData.benefits.join(', ') : formData.benefits || ''} onChange={e => setFormData({...formData, benefits: e.target.value.split(',')})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none resize-none" placeholder="Cicatrizante, Antiinflamatorio..." />
                  </div>
                  <div>
                    <label htmlFor="f-usage" className="block text-sm font-semibold text-slate-700 mb-1">Forma de Uso</label>
                    <textarea id="f-usage" required rows={2} value={formData.usage || ''} onChange={e => setFormData({...formData, usage: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none resize-none" />
                  </div>
                  <div>
                    <label htmlFor="f-principles" className="block text-sm font-semibold text-slate-700 mb-1">Principios Activos</label>
                    <textarea id="f-principles" required rows={2} value={formData.activePrinciples || ''} onChange={e => setFormData({...formData, activePrinciples: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none resize-none" />
                  </div>
                  <div>
                    <label htmlFor="f-care" className="block text-sm font-semibold text-slate-700 mb-1">Cuidados y Mantención</label>
                    <textarea id="f-care" required rows={2} value={formData.care || ''} onChange={e => setFormData({...formData, care: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none resize-none" />
                  </div>
                </div>
              </form>
            </div>
            
            <div className="p-6 border-t border-slate-100 bg-slate-50 rounded-b-3xl flex justify-end gap-3">
              <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl font-semibold text-slate-600 hover:bg-slate-200 transition-colors">
                Cancelar
              </button>
              <button type="submit" form="plant-form" className="px-5 py-2.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center gap-2">
                <Save className="h-4 w-4" /> Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}