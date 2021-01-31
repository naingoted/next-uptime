import React, {useEffect, useState} from 'react'
import Card from '../common/Card'
import MonitorList from './MonitorList';
import MonitorStat from './MonitorStat';
import { useMonitorState, useMonitorDispatch, MonitorProvider } from '../../contexts/monitorContext'
import { getUpDownApi } from '../../actions/hookActions';

const Services = () => {
    const { data, page, total } = useMonitorState();
    const dispatch = useMonitorDispatch();
    const setServerError = (isServerError) => 
        dispatch({ type: "setServerError", payload: isServerError }
    )
    const  setData = (data) => {
        dispatch({ type: "setData", payload: data });
    }
    useEffect(() => {
        // side effect.
        getUpDownApi(setData, setServerError); 
    }, [])

    return (
        <Card>
            <h2>Monitors</h2>
            {console.log(data)}
            <MonitorList data={data}/>
            <MonitorStat />
        </Card>
    )
}

export default Services


