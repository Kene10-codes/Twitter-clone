import React from 'react'
import  { SidebarOption } from '../sidebarOption/SidebarOption'
import { 
  Twitter, 
  Home, 
  Search, 
  NotificationsNone, 
  MailOutline, 
  BookmarkBorder, 
  ListAlt, 
  PermIdentity, 
  MoreHoriz } from '@mui/icons-material'
import { Button } from '@mui/material'
import "./Sidebar.css"



export function Sidebar() {
  return (
    <div className='sidebar'>
      <Twitter className="sidebar__twitter" />
      <SidebarOption active text="Home" Icon={Home} />
      <SidebarOption text="Explore" Icon={Search} />
      <SidebarOption text="Notifications" Icon={NotificationsNone} />
      <SidebarOption text="Messages" Icon={MailOutline} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorder} />
      <SidebarOption text="Lists" Icon={ListAlt} />
      <SidebarOption text="Profile" Icon={PermIdentity} />
      <SidebarOption text="More" Icon={MoreHoriz} />

      <Button variant='outlined' fullWidth className='sidebar__tweet'>Tweet</Button>
    </div>
  )
}


