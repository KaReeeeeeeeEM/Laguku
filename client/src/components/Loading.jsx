import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Loading = () => (
    <div className='flex items-center justify-center h-screen bg-purple-300'>
        <Spin
            indicator={
            <LoadingOutlined
                style={{
                fontSize: 48,
                color: '#6B46C1',
                }}
                spin
            />
            }
        />
    </div>
);
export default Loading;