import { useState } from "react";
import { useNavigate } from "react-router";
import { plantsData, Plant } from "../data";
import { ContactMessage, mockMessages } from "../data/messages";
import { AdminSidebar } from "./admin/AdminSidebar";
import { PlantsTable } from "./admin/PlantsTable";
import { MessagesPanel } from "./admin/MessagesPanel";
import { PlantFormModal } from "./admin/PlantFormModal";

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

   
      <section className="flex-1 min-w-0" aria-label="Panel administrativo">
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
      </section>

    
      {isModalOpen && (
        <PlantFormModal
          isEditing={editingPlant !== null}
          formData={formData}
          onChange={setFormData}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSavePlant}
        />
      )}
    </div>
  );
}