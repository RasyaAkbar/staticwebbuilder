import { ImageIcon } from 'lucide-react';
import React from 'react'
import { useEditor } from "@/providers/editor/editor-provider";
import { v4 } from "uuid";

type Props = {}

const ImagePlaceholder = (props: Props) => {
    const { state, dispatch } = useEditor();
    const handleDragState = (e: React.DragEvent, type: string) => {
    if (type === null) return;
    e.stopPropagation();
    e.dataTransfer.setData("componentType", type);
    };
    return (
    <div
            className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center"
            draggable={!state.editor.liveMode}
            onDragStart={(e) => {
              handleDragState(
                e,
                `ADD_ELEMENT*&#^$${JSON.stringify({
                  content: {
                    src: '/',
                  },
                  id: v4(),
                  name: "Image",
                  styles: {},
                  type: "image",
                })}`
              );
            }}
          >
            <ImageIcon size={40} className="text-muted-foreground"/>
          </div>
  )
}

export default ImagePlaceholder