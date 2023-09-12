import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Sidebar() {
  return (
    <div className='sidebar flex flex-col flex-[0.35]'>
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
        <div className='sidebar-search flex items-center bg-[#f6f6f6] h-[39px] p-[10px]'>
            <div className='search-container flex items-center bg-white w-full h-9 rounded-[20px]'>
                <SearchOutlinedIcon/>
                <input className='border-none ml-[10px] text-xs ' placeholder='Search or start new chat' type="text" />
            </div>

        </div>
        {/* side bar chat */}
        <div className='sidebar-chat'>

        </div>
    </div>
  )
}

export default Sidebar