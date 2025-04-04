import MobileDrawer from "./ui/mobileDrawer";
import { useDrawerStore } from "~/store/drawerStore";

interface Metric {
  label: string;
  value: string;
  unit?: string;
}

export default function Topbar({ metrics }: { metrics: Metric[] }) {
  const { isDrawerOpen, toggleDrawer } = useDrawerStore(); // Use Zustand store

  return (
    <>
      <div className="bg-gray-900 text-white px-6 py-3 shadow-md hidden md:block">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-start w-fit  gap-1">
              <span className="text-xs text-gray-400">{metric.label}</span>
              <span className="font-semibold text-sm">
                {metric.value}
                {metric.unit && <span className="ml-1">{metric.unit}</span>}
              </span>
            </div>
          ))}
        </div>
      </div>

      <MobileDrawer isOpen={isDrawerOpen} onClose={() => toggleDrawer()}>
        <div className="flex flex-col gap-4">
          {metrics.map(({ label, value, unit }) => (
            <div key={label}>
              <p className="text-sm font-semibold">{label}</p>
              <p className="text-gray-700">
                {value} {unit}
              </p>
            </div>
          ))}
        </div>
      </MobileDrawer>
    </>
  );
}
