import { defaultStyles } from "@/lib/constants";
import React from "react";
import { v4 } from "uuid";


const ContainerPlaceholder = () => {
  const handleDragStart = (e: React.DragEvent, type: string) => {
    if (type === null) return;
    e.dataTransfer.setData("componentType", type);
  };
  return (
    <div
      draggable
      onDragStart={(e) =>
        handleDragStart(
          e,
          `ADD_ELEMENT*&#^$${JSON.stringify({
            content: [],
            id: v4(),
            name: "Container",
            styles: { ...defaultStyles },
            type: "container",
          })}`
        )
      }
      className=" h-14 w-14 bg-muted/70 rounded-lg p-2 flex flex-row gap-[4px]"
    >
      <div className="border-dashed border-[1px] h-full rounded-sm bg-muted border-muted-foreground/50 w-full"></div>
    </div>
  );
};

export default ContainerPlaceholder;
