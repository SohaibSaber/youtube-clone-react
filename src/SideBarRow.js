import React from 'react'
import "./SideBarRow.css";

function SideBarRow({selected, Icon, title}) {
  return (
    <div className={`SidebarRow ${selected && "selected"}`} >
      <Icon className="SideBarRow_Icon" />
      <h2 className='SideBarRow_Title'>
        {title}
      </h2>
    </div>
  )
}

export default SideBarRow
