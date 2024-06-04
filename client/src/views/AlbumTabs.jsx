import React from 'react';
import { Tabs } from 'antd';

//views
import AlbumUploadTable from '../views/AlbumUploadTable';

const onChange = (key) => {
  
};


const items = [
  {
    key: '1',
    label: 'Created',
    children: <AlbumUploadTable />,
  },
  {
    key: '2',
    label: 'Waiting Approval',
    children: 'Waiting Approval',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Live',
  },
];
const TabsSection = () => {
  return (
    <div className='pl-2 lg:px-2 lg:overflow-x-hidden'>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange}  />
    </div>
    );
}
export default TabsSection;