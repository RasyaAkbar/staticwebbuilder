import { EditorElement } from '@/providers/editor/editor-provider'
import React from 'react'

import VideoComponent from './video'
import LinkComponent from './link-component'
import TextComponent from './text'
import Container from './container'
import ContactFormComponent from './contact-form-component'
import TwoColumns from './two-columns'
import ImageComponent from './image-component'
//import Checkout from './checkout'

type Props = {
  element: EditorElement
  index? : number
}
/*
const Recursive = (props: Props)=>{
  return <p>Hello</p>
} */

const Recursive = ({ element, index }: Props) => {
  switch (element.type) {
    /*
    case 'paymentForm':
      return <Checkout element={element} />
    */
    case 'video':
      return <VideoComponent element={element} />
    case '2Col':
      return <TwoColumns element={element} />
    case 'link':
      return <LinkComponent element={element} />
    case '__body':
        return <Container element={element} />
    case 'text':
      return <TextComponent element={element} />
    case 'container':
      return <Container element={element} index={index} />
    case 'contactForm':
        return <ContactFormComponent element={element} />
    case 'image':
      return <ImageComponent element={element}/>
    default:
      return null
  }
}

export default Recursive