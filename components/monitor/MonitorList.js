import React from 'react'
import { useMonitorDispatch } from '../../contexts/monitorContext'

const MonitorList = ({data}) => {
    const dispatch = useMonitorDispatch();
    const handleOnClick = (item) => {
        console.log("haha")
        // dispatch({ type : "setSelectedItem" , payload : item})
    }
    return (
        <div>
            {data && data.monitors.map((item, index) => {
               return <div key={index} onClick={(e) => {
                dispatch({ type : "setSelectedItem" , payload : item})
               }} >{item.friendly_name}</div> 
            })}
        </div>
    )
}

export default MonitorList
