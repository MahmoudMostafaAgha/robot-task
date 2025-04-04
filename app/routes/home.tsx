import type { Route } from "./+types/home";
import Topbar from "~/components/tobBar";
import RobotSection from "~/components/robot-section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "robot app" },
    { name: "robot", content: "Welcome to robot app!" },
  ];
}
const metrics = [
  { label: "Distance", value: "124", unit: "m" },
  { label: "Runtime", value: "02:45", unit: "min" },
  { label: "Location", value: "Sector 5" },
  { label: "Battery", value: "85", unit: "%" },
  { label: "Status", value: "Operational" },
  { label: "Speed", value: "1.2", unit: "m/s" },
  { label: "Signal", value: "Good" },
  { label: "CPU Temp", value: "54", unit: "°C" },
  { label: "Voltage", value: "12.4", unit: "V" },
  { label: "Errors", value: "0" },
  { label: "Uptime", value: "1h 14m" },
];
export default function Home() {

  return (
    <div className="flex flex-col h-screen">
      <Topbar metrics={metrics} />
      <RobotSection />
    </div>
  );
}

