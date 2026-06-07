import { X, Save } from "lucide-react";
import { Plant } from "../../data";

interface PlantFormModalProps {
  isEditing: boolean;
  formData: Partial<Plant>;
  onChange: (data: Partial<Plant>) => void;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function PlantFormModal({ isEditing, formData, onChange, onClose, onSubmit }: PlantFormModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col relative z-10 shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-800">
            {isEditing ? 'Editar Planta' : 'Nueva Planta'}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1 hide-scrollbar">
          <form id="plant-form" onSubmit={onSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <div>
                <label htmlFor="f-codigo" className="block text-sm font-semibold text-slate-700 mb-1">Código</label>
                <input id="f-codigo" required type="text" value={formData.codigo || ''} onChange={e => onChange({...formData, codigo: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="PL-001" />
              </div>
              <div>
                <label htmlFor="f-cantidad" className="block text-sm font-semibold text-slate-700 mb-1">Cantidad (Stock)</label>
                <input id="f-cantidad" required type="number" min="0" value={formData.cantidad || 0} onChange={e => onChange({...formData, cantidad: Number(e.target.value)})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <div>
                <label htmlFor="f-estado" className="block text-sm font-semibold text-slate-700 mb-1">Estado del Stock</label>
                <select id="f-estado" required value={formData.estado || 'Abundante'} onChange={e => onChange({...formData, estado: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none">
                  <option value="Abundante">Abundante</option>
                  <option value="Estable">Estable</option>
                  <option value="Crítico">Crítico</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="f-name" className="block text-sm font-semibold text-slate-700 mb-1">Nombre Común</label>
                <input id="f-name" required type="text" value={formData.name || ''} onChange={e => onChange({...formData, name: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <div>
                <label htmlFor="f-scientific" className="block text-sm font-semibold text-slate-700 mb-1">Nombre Científico</label>
                <input id="f-scientific" required type="text" value={formData.scientificName || ''} onChange={e => onChange({...formData, scientificName: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <div>
                <label htmlFor="f-category" className="block text-sm font-semibold text-slate-700 mb-1">Categoría</label>
                <input id="f-category" required type="text" value={formData.category || ''} onChange={e => onChange({...formData, category: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Ej. Digestivo, Relajante" />
              </div>
              <div>
                <label htmlFor="f-image" className="block text-sm font-semibold text-slate-700 mb-1">URL de Imagen</label>
                <input id="f-image" required type="text" value={formData.image || ''} onChange={e => onChange({...formData, image: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="https://..." />
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="f-benefits" className="block text-sm font-semibold text-slate-700 mb-1">Beneficios (separados por coma)</label>
                <textarea id="f-benefits" required rows={2} value={Array.isArray(formData.benefits) ? formData.benefits.join(', ') : formData.benefits || ''} onChange={e => onChange({...formData, benefits: e.target.value.split(',')})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none resize-none" placeholder="Cicatrizante, Antiinflamatorio..." />
              </div>
              <div>
                <label htmlFor="f-usage" className="block text-sm font-semibold text-slate-700 mb-1">Forma de Uso</label>
                <textarea id="f-usage" required rows={2} value={formData.usage || ''} onChange={e => onChange({...formData, usage: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none resize-none" />
              </div>
              <div>
                <label htmlFor="f-principles" className="block text-sm font-semibold text-slate-700 mb-1">Principios Activos</label>
                <textarea id="f-principles" required rows={2} value={formData.activePrinciples || ''} onChange={e => onChange({...formData, activePrinciples: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none resize-none" />
              </div>
              <div>
                <label htmlFor="f-care" className="block text-sm font-semibold text-slate-700 mb-1">Cuidados y Mantención</label>
                <textarea id="f-care" required rows={2} value={formData.care || ''} onChange={e => onChange({...formData, care: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none resize-none" />
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50 rounded-b-3xl flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-xl font-semibold text-slate-600 hover:bg-slate-200 transition-colors">
            Cancelar
          </button>
          <button type="submit" form="plant-form" className="px-5 py-2.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center gap-2">
            <Save className="h-4 w-4" /> Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
