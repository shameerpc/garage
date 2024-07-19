import { useState } from "react";
import * as Switch from "@radix-ui/react-switch";

const SwitchDemo = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <form>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Switch.Root
          className="w-7 h-4 bg-[#F7AD01] rounded-full relative"
          id="airplane-mode"
          checked={isChecked}
          onCheckedChange={handleToggle}
        >
          <Switch.Thumb
            className="block w-3 h-3
            bg-white rounded-full shadow-md transition-transform duration-200"
            style={{
              transform: isChecked ? "translateX(1rem)" : "translateX(0)",
            }}
          />
        </Switch.Root>
        <label
          className="pl-2 font-light text-sm text-gray-700"
          htmlFor="airplane-mode"
        >
          Remember me
        </label>
      </div>
    </form>
  );
};

export default SwitchDemo;
