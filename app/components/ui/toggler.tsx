import React, { useEffect, useCallback } from "react";
import { useToggleStore } from "../../store/toggleStore";
import { cn } from "../../lib/utils";
import type { LucideIcon } from "lucide-react";
import Button from "./button";

type Option =
  | string
  | {
      value?: string;
      text?: string;
      icon?: LucideIcon;
      callToAction?: string;
    };

type TogglerProps = {
  name: string;
  options: Option[];
  defaultValue?: string;
  direction?: "row" | "col";
  itemsAlign?: "start" | "center" | "end";
  buttonVariant?: "default" | "outline" | "danger";
};

const Toggler: React.FC<TogglerProps> = ({
  name,
  options,
  defaultValue,
  direction = "row",
  itemsAlign = "start",
  buttonVariant = "default",
}) => {
  const { toggles, setToggle } = useToggleStore();
  const selected = toggles[name];

  useEffect(() => {
    if (defaultValue && !toggles[name]) {
      setToggle(name, defaultValue);
    }
  }, [name, defaultValue, toggles, setToggle]);

  const handleClick = useCallback(
    (value: string) => {
      setToggle(name, value);
    },
    [name, setToggle]
  );

  return (
    <div
      className={cn(
        "flex gap-2 flex-wrap",
        direction === "col" ? "flex-col" : "flex-row",
        itemsAlign === "end" && "justify-end"
      )}
    >
      {options.map((opt, index) => {
        const isSimple = typeof opt === "string";
        const value = isSimple ? opt : opt.value;
        const text = isSimple ? opt : opt.text;
        const Icon = isSimple ? undefined : opt.icon;
        const callToAction = isSimple ? undefined : opt.callToAction;
        const isSelected = selected === value;

        return (
          <Button
            key={value ?? index}
            onClick={() => handleClick(value ?? "")}
            className={cn(
              "px-4 py-2 w-fit rounded-md text-sm font-medium border flex flex-col items-center justify-center text-center min-w-[80px]",
              buttonVariant === "default" &&
                isSelected &&
                "bg-blue-500 text-white border-blue-500",
              buttonVariant === "outline" &&
                isSelected &&
                "bg-blue-100 text-blue-500 border-blue-500",
              buttonVariant === "outline" &&
                !isSelected &&
                "bg-transparent text-blue-500 border-blue-500 hover:bg-blue-50",
              !isSelected &&
                buttonVariant !== "outline" &&
                "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            )}
            variant={buttonVariant}
            aria-selected={isSelected}
            role="button"
          >
            {Icon && <Icon className="w-5 h-5 mb-1" />}
            {text && <span>{text}</span>}
            {callToAction && (
              <span className="block text-xs text-gray-500 mt-1">
                {callToAction}
              </span>
            )}
            {isSimple && !text && <span>{opt}</span>}
          </Button>
        );
      })}
    </div>
  );
};

export default Toggler;
