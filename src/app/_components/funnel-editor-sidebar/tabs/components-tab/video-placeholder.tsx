import { Youtube } from "lucide-react";
import React from "react";
import { v4 } from "uuid";



const VideoPlaceholder = () => {
  //Draggable from sidebar to editor
  //Functionalities will be implemented in editor components
  const handleDragState = (e: React.DragEvent, type: string) => {
    if (type === null) return;
    e.dataTransfer.setData("componentType", type);
  };

  return (
    <div
      draggable
      onDragStart={(e) => {
        handleDragState(
          e,
          `ADD_ELEMENT*&#^$${JSON.stringify({
            content: {
              src: "https://www.youtube.com/embed/6R6CUN3q7kI?si=u4aPMjSHJcUSRmds",
            },
            id: v4(),
            name: "Video",
            styles: {},
            type: "video",
          })}`
        );
      }}
      className=" h-14 w-14 bg-muted rounded-lg flex items-center justify-center"
    >
      <Youtube size={40} className="text-muted-foreground" />
    </div>
  );
};

export default VideoPlaceholder;
