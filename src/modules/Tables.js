import React, {useEffect} from "react";
import Table from 'rc-table';
import "./Tables.css"

/**
 * 表現 Table data
 * 
 * @param {Array} dataTable 現在正打開的 data  
 * @param {(Array) => void} setClickedTable 設定現在正打開的 Table
 */
const Tables = (props) => {

    const mappedDataTable = props.dataTable.map((data) => {
        return {
            ...data,
            interval: `${data.lowerLimit} - ${data.upperLimit}`,
        }
    });

    const columns = [{
        title: "Test",
        dataIndex: "test",
        width: 100,
    },{
        title: "Result",
        dataIndex: "result",
        width: 100,
    },{
        title: "Unit",
        dataIndex: "unit",
        width: 100,
    },{
        title: "Ref. interval",
        dataIndex: "interval",
        width: 200,
    }];

    return (

        <>
        <div className="Tables-overlay">
        </div>
        <div className="Tables-container" onClick={() => props.setClickedTable([])}>
            <Table columns={columns} data={mappedDataTable} className="Tables-table" />
        </div>
        </>
    )

};

export default Tables;