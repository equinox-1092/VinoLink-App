"use client";

import { usePathname } from 'next/navigation';

export function HeaderContent() {
  const pathname = usePathname();
  
  // Función para formatear el nombre de la ruta
  const formatPageTitle = (path: string) => {
    // Si es la ruta raíz del dashboard
    if (path === '/' || path === '/dashboard') return 'Dashboard';
    
    // Obtener el último segmento de la ruta
    const segments = path.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    
    // Formatear el texto: reemplazar guiones por espacios y capitalizar primera letra
    return lastSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const title = formatPageTitle(pathname);

  return (
    <h1 className="text-2xl font-semibold mb-6">{title}</h1>
  );
}
