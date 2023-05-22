import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Table } from 'antd';
import { useState, useEffect } from 'react';
import { Empty } from 'antd';
const Orderlist = ({ price, hotelname, checkindate, checkoutdate, roommodel }) => {
    const [data, setData] = useState([]); // 状态变量，用于存储表格数据
    const [isEmpty, setIsEmpty] = useState(false);
    useEffect(() => {
        // 每次传入新参数时，创建新的数据行并添加到数据数组中
        const newRow = {
            Price: price,
            Hotelname: hotelname,
            Checkindate: checkindate,
            Checkoutdate: checkoutdate,
            Roommodel: roommodel,
        };

        setData(prevData => [...prevData, newRow]);
        setIsEmpty(prevIsEmpty => prevIsEmpty || data.length === 0);
    }, [price, hotelname, checkindate, checkoutdate, roommodel]);
    const columns = [
        {
            title: '价格',
            dataIndex: 'Price',
            key: 'Price',
        },
        {
            title: '酒店名',
            dataIndex: 'Hotelname',
            key: 'Hotelname',
        },
        {
            title: '入住时间',
            dataIndex: 'Checkindate',
            key: 'Checkindate',
            //render: () => <a>Delete</a>,
        },
        {
            title: '离店时间',
            dataIndex: 'Checkoutdate',
            key: 'Checkoutdate',
            //render: () => <a>Delete</a>,
        },
        {
            title: '房间型号',
            dataIndex: 'Roommodel',
            key: 'Roommodel',
            //render: () => <a>Delete</a>,
        },
    ];

    return (
        <div className='container'>
            <Navbar />
            {isEmpty ? (
                <Empty style={{justifyContent: 'center',marginTop:'150px'}}/>
            ) : (
                <Table columns={columns} dataSource={data} />
            )}
        </div>
    );
};

export default Orderlist;
