import React from "react";
import { X } from "lucide-react";

type MobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 md:hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div className="absolute left-0 top-0 h-full w-3/4 bg-white shadow-lg p-4 overflow-y-auto">
        <button
          onClick={onClose}
          className="text-black"
          aria-label="Close drawer"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
};

export default MobileDrawer;
