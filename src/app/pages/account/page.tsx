"use client";

export default function AccountPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Configuración de la cuenta</h1>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-medium">Información personal</h2>
          <p className="text-sm text-gray-600">Edita tu información personal aquí</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-medium">Preferencias</h2>
          <p className="text-sm text-gray-600">Configura tus preferencias de la aplicación</p>
        </div>
      </div>
    </div>
  );
}
