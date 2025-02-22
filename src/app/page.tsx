
import EditorProvider from '@/providers/editor/editor-provider'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import FunnelEditorNavigation from './_components/funnel-editor-navigation'
import FunnelEditorSidebar from './_components/funnel-editor-sidebar'
import FunnelEditor from './_components/funnel-editor'



const Page = () => {
  
    
  
  return (
    <div className="fixed max-h-screen top-0 bottom-0 left-0 right-0 z-[20] bg-background overflow-hidden">
      <EditorProvider
        pageDetails={null}
      >
        <FunnelEditorNavigation
        />
        <div className="h-full flex justify-center ">
          <FunnelEditor initialData={null} /> 
          
        </div>
        <FunnelEditorSidebar /> 
        
      </EditorProvider>
    </div>
  )
}

export default Page