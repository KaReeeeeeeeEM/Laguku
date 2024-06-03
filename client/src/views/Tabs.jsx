import React from 'react';
import { Tabs } from 'antd';

//views
import SongUploadTable from '../views/SongUploadTable';

const onChange = (key) => {
  
};


const items = [
  {
    key: '1',
    label: 'Created',
    children: <SongUploadTable />,
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
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
    );
}
export default TabsSection;