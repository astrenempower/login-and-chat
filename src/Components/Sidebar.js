import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar flex-[0.35]'>
        {/* side bar header */}
        <div className='sidebar-header flex justify-between p-[20px] border-r-2 border-r-slate-200'>
            <IconButton>
                <AccountCircleIcon/>
            </IconButton>
            <div className='sidebarheader-right flex items-center justify-between min-w-[10vw]'>
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        {/* side bar search */}
        <div className='sidebar-search'>

        </div>
        {/* side bar chat */}
        <div className='sidebar-chart'>

        </div>
    </div>
  )
}

export default Sidebar