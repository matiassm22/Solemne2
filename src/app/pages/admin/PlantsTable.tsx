import { Plus, Edit, Trash2, AlertTriangle } from "lucide-react";
import { Plant } from "../../data";

interface PlantsTableProps {
  plants: Plant[];
  onAdd: () => void;
  onEdit: (plant: Plant) => void;
  onDelete: (id: string) => void;
}

export function PlantsTable({ plants, onAdd, onEdit, onDelete }: PlantsTableProps) {
  return (
    <div>
      <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Inventario de Plantas</h1>
          <p className="text-slate-500">Gestiona las especies registradas en el sistema</p>
        </div>
        <button
          onClick={onAdd}
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-medium transition-colors flex items-center gap-2 shadow-sm"
        >
          <Plus className="h-5 w-5" />
          Agregar Planta
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <th className="py-4 px-6 font-bold">Código</th>
              <th className="py-4 px-6 font-bold">Planta</th>
              <th className="py-4 px-6 font-bold">Estado / Stock</th>
              <th className="py-4 px-6 font-bold text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {plants.map(plant => (
              <tr key={plant.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6">
                  <span className="font-mono text-sm font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded">
                    {plant.codigo}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img src={plant.image} alt={plant.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <p className="font-semibold text-slate-800">{plant.name}</p>
                      <p className="text-xs text-slate-500">{plant.scientificName}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-col gap-1">
                    <span className={`inline-flex w-fit items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border ${
                      plant.estado === 'Crítico' ? 'bg-red-50 text-red-700 border-red-200' :
                      plant.estado === 'Estable' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                      'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      {plant.estado === 'Crítico' && <AlertTriangle className="w-3 h-3" />}
                      {plant.estado}
                    </span>
                    <span className="text-sm font-medium text-slate-600 pl-1">{plant.cantidad} un.</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => onEdit(plant)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button onClick={() => onDelete(plant.id)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
