
import EditorProvider from '@/providers/editor/editor-provider'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import FunnelEditorNavigation from './_components/funnel-editor-navigation'
import FunnelEditorSidebar from './_components/funnel-editor-sidebar'
import FunnelEditor from './_components/funnel-editor'

type Props = {
  params: {
    subaccountId: string
    funnelId: string
    funnelPageId: string
  }
}

const Page = async ({ params }: Props) => {
  
    
  
  return (
    <div className="fixed max-h-screen top-0 bottom-0 left-0 right-0 z-[20] bg-background overflow-hidden">
      <EditorProvider
        subaccountId={params.subaccountId}
        funnelId={params.funnelId}
        pageDetails={null}
      >
        <FunnelEditorNavigation
          funnelId={params.funnelId}
          funnelPageDetails={null}
          subaccountId={params.subaccountId}
        />
        <div className="h-full flex justify-center ">
          <FunnelEditor funnelPageId={params.funnelPageId} initialData={null} /> 
          
        </div>
        <FunnelEditorSidebar subaccountId={params.subaccountId}/> 
        
      </EditorProvider>
    </div>
  )
}

export default Page