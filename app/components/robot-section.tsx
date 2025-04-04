import Toggler from "~/components/ui/toggler";
import JoystickPad from "~/components/ui/JoystickPad";
import { ZoomIn, ZoomOut, Expand } from "lucide-react";
import Button from "~/components/ui/button";
import { useDrawerStore } from "~/store/drawerStore";


export default function RobotSection() {
  const {  toggleDrawer } = useDrawerStore();  
  return (

      <div className="flex-1 bg-[url(/public/tunnel.jpg)] gap-4 bg-cover bg-center bg-no-repeat px-5 flex flex-col justify-between py-4">
        <div className="flex justify-between items-start mt-5">
          <div className="flex flex-col gap-4">
            <Button variant="primary" className="w-fit" onClick={toggleDrawer}>
              Menu
            </Button>
            <Toggler
              name="driveMode"
              options={["Auto", "Semi-Auto", "Manual"]}
              defaultValue="Manual"
            />
            <Toggler
              name="speed"
              options={["2x", "1x", "0.5x"]}
              defaultValue="1x"
              direction="col"
              buttonVariant="outline"
            />
          </div>

          <div className="flex items-end flex-col gap-4">
            <Button variant="danger" className="w-fit">
              Stop
            </Button>
            <Toggler
              name="Lighting"
              options={["Light", "Spot Light", "Laser"]}
              defaultValue="Laser"
              itemsAlign="end"
            />
            <div className="flex flex-col gap-2 flex-wrap">
              <Button variant="outline" className="w-fit">
                <ZoomIn className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="w-fit">
                <ZoomOut className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="w-fit">
                <Expand className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end w-full">
          <JoystickPad />
          <div className="flex flex-col items-center justify-center gap-1">
            <h3 className="text-4xl font-bold">0.5</h3>
            <div className="text-sm">m/s</div>
          </div>
          <JoystickPad />
        </div>

        <div className="flex justify-center items-center w-full">
          <Toggler
            name="Map toggle"
            options={["3D Map", "2D Map", "Camera"]}
            defaultValue="2D Map"
          />
        </div>
      </div>
  );
}

