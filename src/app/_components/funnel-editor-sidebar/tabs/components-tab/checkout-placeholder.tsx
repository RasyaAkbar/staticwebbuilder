import { EditorBtns } from '@/lib/constants'
import { Link, Link2Icon, ShoppingCartIcon, TypeIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const CheckoutPlaceholder = (props: Props) => {
    
    //Draggable from sidebar to editor
    //Functionalities will be implemented in editor components
  const handleDragState = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return
    e.dataTransfer.setData('componentType', type)
  }

  return (
    <div
      draggable
      onDragStart={(e) => {
        handleDragState(e, 'paymentForm')
      }}
      className=" h-14 w-14 bg-muted rounded-lg flex items-center justify-center"
    >
      <ShoppingCartIcon
        size={40}
        className="text-muted-foreground"
      />
    </div>
  )
}

export default CheckoutPlaceholder