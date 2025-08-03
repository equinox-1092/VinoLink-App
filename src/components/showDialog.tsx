"use client";

import { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IconArrowLeft } from "@tabler/icons-react";

interface ShowDialogProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

export function ShowDialog({ isOpen, children, onClose }: ShowDialogProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          {/* Fondo semitransparente */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            leave="ease-in duration-150"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm pointer-events-none" />
          </Transition.Child>

          {/* Contenedor del modal */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 translate-y-4 scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-4 scale-95"
          >
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 mx-auto relative z-10">
              <button
                onClick={onClose}
                className="absolute -top-3 -left-3 flex items-center space-x-1 p-2 text-gray-600 hover:text-gray-900 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                aria-label="Cerrar"
              >
                <IconArrowLeft size={20} stroke={1.5} />
              </button>
              <div className="mt-4">{children}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
