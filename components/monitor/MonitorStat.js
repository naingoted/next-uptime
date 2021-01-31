import React from 'react'
import { useMonitorState } from '../../contexts/monitorContext'

const MonitorStat = () => {
    const { selectedItem } = useMonitorState();
    return (
        <div>
            {selectedItem && selectedItem.url}
        </div>
    )
}

export default MonitorStat
