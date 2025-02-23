'use client'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cssFormat, cssFormatCompiler, htmlFormat, htmlFormatCompiler, reactFormat, reactFormatCompiler, resetCssFormat, resetHtmlFormat, resetReactFormat } from '@/lib/utils'
import { DeviceTypes, EditorElement, useEditor } from '@/providers/editor/editor-provider'
import clsx from 'clsx'
import {
  ArrowLeftCircle,
  DownloadCloud,
  EyeIcon,
  Laptop,
  Redo2,
  Smartphone,
  Tablet,
  Undo2,
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'




const FunnelEditorNavigation = () => {
  const { state, dispatch } = useEditor()
  const [loading, setLoading] = useState(false)
  

 

  const handleDownloadHtml = () => {
    htmlFormatCompiler(state.editor.elements[0])
    const data = htmlFormat + "</body> \n</html>";
    const blob = new Blob([data], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "GreatWebsite.html";
    a.click();
    URL.revokeObjectURL(url);
    resetHtmlFormat()
    cssFormatCompiler(state.editor.elements[0])
    const cssdata = cssFormat;
    const cssblob = new Blob([cssdata], { type: "text/css" });
    const cssurl = URL.createObjectURL(cssblob);
    const cssa = document.createElement("a");
    cssa.href = cssurl;
    cssa.download = "styles.css";
    cssa.click();
    URL.revokeObjectURL(cssurl);
    resetCssFormat()
  };

  const handleDownloadReact = () => {
    reactFormatCompiler(state.editor.elements[0])
    const data = reactFormat;
    const blob = new Blob([data], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "GreatWeb.html";
    a.click();
    URL.revokeObjectURL(url);
    resetReactFormat()
  };

  const handleDownloadCss = () => {
    
  };



  


  

  const handlePreviewClick = () => {
    dispatch({ type: 'TOGGLE_PREVIEW_MODE' })
    dispatch({ type: 'TOGGLE_LIVE_MODE' })
  }

  const handleUndo = () => {
    dispatch({ type: 'UNDO' })
  }

  const handleRedo = () => {
    dispatch({ type: 'REDO' })
  }

  
  return (
    <TooltipProvider>
      <nav
        className={clsx(
          'border-b-[1px] flex items-center justify-between p-6 gap-2 transition-all',
          { '!h-0 !p-0 !overflow-hidden': state.editor.previewMode }
        )}
      >
        <aside className="flex items-center gap-4 max-w-[260px] w-[300px]">
          <Link href={`/`}>
            <ArrowLeftCircle />
          </Link>
          <div className="flex flex-col w-full ">
          </div>
        </aside>
        <aside>
          {/**set default value */}
          <Tabs
            defaultValue="Desktop" 
            className="w-fit "
            value={state.editor.device}
            onValueChange={(value) => {
              dispatch({
                type: 'CHANGE_DEVICE',
                // set payload
                payload: { device: value as DeviceTypes },
              })
            }}
          >
            <TabsList className="grid w-full grid-cols-3 bg-transparent h-fit">
              <Tooltip>
                <TooltipTrigger>
                  <TabsTrigger
                    value="Desktop"
                    className="data-[state=active]:bg-muted w-10 h-10 p-0"
                  >
                    <Laptop />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Desktop</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <TabsTrigger
                    value="Tablet"
                    className="w-10 h-10 p-0 data-[state=active]:bg-muted"
                  >
                    <Tablet />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tablet</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <TabsTrigger
                    value="Mobile"
                    className="w-10 h-10 p-0 data-[state=active]:bg-muted"
                  >
                    <Smartphone />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Mobile</p>
                </TooltipContent>
              </Tooltip>
            </TabsList>
          </Tabs>
        </aside>
        <aside className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
          <Button
            variant={'ghost'}
            size={'icon'}
            className="hover:bg-slate-800"
          >
          <DownloadCloud/>
          </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            
            <DropdownMenuItem>
              <Button
              variant={'ghost'}
              size={'default'}
              className="hover:bg-slate-800"
              onClick={handleDownloadHtml}
              >
                <Image 
                  src={'./assets/icons8-html.svg'}
                  width={32}
                  height={32}
                  alt='html logo'
                  />
                  <span>Html</span>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
              variant={'ghost'}
              size={'default'}
              className="hover:bg-slate-800"
              onClick={handleDownloadReact}
              >
                <Image 
                  src={'./assets/icons8-react.svg'}
                  width={32}
                  height={32}
                  alt='react logo'
                  />
                  <span>React</span>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
          <Button
            variant={'ghost'}
            size={'icon'}
            className="hover:bg-slate-800"
            onClick={handlePreviewClick}
          >
            <EyeIcon />
          </Button>
          <Button
            disabled={!(state.history.currentIndex > 0)}
            onClick={handleUndo}
            variant={'ghost'}
            size={'icon'}
            className="hover:bg-slate-800"
          >
            <Undo2 />
          </Button>
          <Button
            disabled={
              !(state.history.currentIndex < state.history.history.length - 1)
            }
            onClick={handleRedo}
            variant={'ghost'}
            size={'icon'}
            className="hover:bg-slate-800 mr-4"
          >
            <Redo2 />
          </Button>
          <div className="flex flex-col item-center mr-4">
            <div className="flex flex-row items-center gap-4">
              Draft
              <Switch
                disabled
                defaultChecked={true}
              />
              Publish
            </div>
          </div>
        </aside>
      </nav>
    </TooltipProvider>
  )
}

export default FunnelEditorNavigation