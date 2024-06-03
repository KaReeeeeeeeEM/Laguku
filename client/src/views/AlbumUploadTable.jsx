import React, { useState } from 'react';
import { Table } from 'antd';
import { CheckIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/outline';

const columns = [
    {
      title: 'No',
      dataIndex: 'key'
    }
  ,{
    title: 'Album ID',
    dataIndex: 'songId'
  },
  {
    title: 'Album Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'A',
        value: 'A',
      },
      {
        text: 'B',
        value: 'B',
      },
      {
        text: 'C',
        value: 'C',
      },
      {
        text: 'D',
        value: 'D',
      },
      {
        text: 'E',
        value: 'E',
      },
      {
        text: 'F',
        value: 'F',
      },
      {
        text: 'G',
        value: 'G',
      },
      {
        text: 'H',
        value: 'H',
      },
      {
        text: 'I',
        value: 'I',
      },
      {
        text: 'J',
        value: 'J',
      },
      {
        text: 'K',
        value: 'K',
      },
      {
        text: 'L',
        value: 'L',
      },
      {
        text: 'M',
        value: 'M',
      },
      {
        text: 'N',
        value: 'N',
      },
      {
        text: 'P',
        value: 'P',
      },
      {
        text: 'Q',
        value: 'Q',
      },
      {
        text: 'R',
        value: 'R',
      },
      {
        text: 'S',
        value: 'S',
      },
      {
        text: 'T',
        value: 'T',
      },
      {
        text: 'U',
        value: 'U',
      },
      {
        text: 'V',
        value: 'V',
      },
      {
        text: 'W',
        value: 'W',
      },
      {
        text: 'X',
        value: 'X',
      },
      {
        text: 'Y',
        value: 'Y',
      },
      {
        text: 'Z',
        value: 'Z',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: '20%',
  },
  {
    title: 'Artist',
    dataIndex: 'artist',
    filters: [
      {
        text: 'A',
        value: 'A',
      },
      {
        text: 'B',
        value: 'B',
      },
      {
        text: 'C',
        value: 'C',
      },
      {
        text: 'D',
        value: 'D',
      },
      {
        text: 'E',
        value: 'E',
      },
      {
        text: 'F',
        value: 'F',
      },
      {
        text: 'G',
        value: 'G',
      },
      {
        text: 'H',
        value: 'H',
      },
      {
        text: 'I',
        value: 'I',
      },
      {
        text: 'J',
        value: 'J',
      },
      {
        text: 'K',
        value: 'K',
      },
      {
        text: 'L',
        value: 'L',
      },
      {
        text: 'M',
        value: 'M',
      },
      {
        text: 'N',
        value: 'N',
      },
      {
        text: 'P',
        value: 'P',
      },
      {
        text: 'Q',
        value: 'Q',
      },
      {
        text: 'R',
        value: 'R',
      },
      {
        text: 'S',
        value: 'S',
      },
      {
        text: 'T',
        value: 'T',
      },
      {
        text: 'U',
        value: 'U',
      },
      {
        text: 'V',
        value: 'V',
      },
      {
        text: 'W',
        value: 'W',
      },
      {
        text: 'X',
        value: 'X',
      },
      {
        text: 'Y',
        value: 'Y',
      },
      {
        text: 'Z',
        value: 'Z',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.artist.includes(value),
  },{
    title: 'Song',
    dataIndex: 'name',
    filters: [
      {
        text: 'A',
        value: 'A',
      },
      {
        text: 'B',
        value: 'B',
      },
      {
        text: 'C',
        value: 'C',
      },
      {
        text: 'D',
        value: 'D',
      },
      {
        text: 'E',
        value: 'E',
      },
      {
        text: 'F',
        value: 'F',
      },
      {
        text: 'G',
        value: 'G',
      },
      {
        text: 'H',
        value: 'H',
      },
      {
        text: 'I',
        value: 'I',
      },
      {
        text: 'J',
        value: 'J',
      },
      {
        text: 'K',
        value: 'K',
      },
      {
        text: 'L',
        value: 'L',
      },
      {
        text: 'M',
        value: 'M',
      },
      {
        text: 'N',
        value: 'N',
      },
      {
        text: 'P',
        value: 'P',
      },
      {
        text: 'Q',
        value: 'Q',
      },
      {
        text: 'R',
        value: 'R',
      },
      {
        text: 'S',
        value: 'S',
      },
      {
        text: 'T',
        value: 'T',
      },
      {
        text: 'U',
        value: 'U',
      },
      {
        text: 'V',
        value: 'V',
      },
      {
        text: 'W',
        value: 'W',
      },
      {
        text: 'X',
        value: 'X',
      },
      {
        text: 'Y',
        value: 'Y',
      },
      {
        text: 'Z',
        value: 'Z',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: '20%',
  }
  ,{
    title: 'Issue Date',
    dataIndex: 'issueDate',
    // sorter: (a, b) => a.issueDate.slice(0,2) - b.issueDate,
  },
  {
    title: 'Reg Date',
    dataIndex: 'regDate',
    // sorter: (a, b) => a.issueDate - b.issueDate,
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    render: (_, record) => (
      <div className="flex space-x-2">
        <CheckIcon className='w-6 h-6 text-green-600 font-bold cursor-pointer border-2 border-green-600 rounded-full' />
        <EyeIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
        <TrashIcon className="w-6 h-6 text-red-500 cursor-pointer" />
      </div>
    ),
    width: '5%',
  },
];

const data = [
  {
    key: '1',
    songId:'123',
    name: 'The Rockers',
    artist: 'Raisa Andriana',
    issueDate: new Date(2023,4,4).toUTCString().slice(4,16),
    regDate: new Date(2023,4,2).toUTCString().slice(4,16),
    location: 'New York Studio 1',
  },
  {
    key: '2',
    songId:'134',
    name: 'Jazz Masters',
    artist: 'Pitbull',
    issueDate: new Date(2023,2,4).toUTCString().slice(4,16),
    regDate: new Date(2023,2,2).toUTCString().slice(4,16),
    location: 'London Studio 2',
  },
  {
    key: '3',
    songId:'345',
    name: 'Pop Sensations',
    artist: '2 Chainz',
    issueDate: new Date(2023,2,1).toUTCString().slice(4,16),
    regDate: new Date(2023,1,31).toUTCString().slice(4,16),
    location: 'Los Angeles Studio 1',
  },
  {
    key: '4',
    songId:'346',
    name: 'Classical Tunes',
    artist: 'Chris Brown',
    issueDate: new Date(2023,1,3).toUTCString().slice(4,16),
    regDate: new Date(2023,1,1).toUTCString().slice(4,16),
    location: 'New York Studio 3',
  },
  {
    key: '5',
    songId:'567',
    name: 'Hip Hop Heroes',
    artist: 'Rihanna',
    issueDate: new Date(2023,1,2).toUTCString().slice(4,16),
    regDate: new Date(2022,11,31).toUTCString().slice(4,16),
    location: 'London Studio 4',
  },
  {
    key: '6',
    songId:'765',
    name: 'Country Stars',
    artist: 'Kenny Rogers',
    issueDate: new Date(2023,1,1).toUTCString().slice(4,16),
    regDate: new Date(2023,11,30).toUTCString().slice(4,16),
    location: 'Los Angeles Studio 2',
  },
  {
    key: '7',
    songId: '876',
    name: 'Rock Legends',
    artist: 'Linkin Park',
    issueDate: new Date(2022, 12, 12).toUTCString().slice(4, 16),
    regDate: new Date(2022, 12, 10).toUTCString().slice(4, 16),
    location: 'San Francisco Studio 1',
  },
  {
    key: '8',
    songId: '987',
    name: 'Soul Divas',
    artist: 'Adele',
    issueDate: new Date(2023, 3, 15).toUTCString().slice(4, 16),
    regDate: new Date(2023, 3, 13).toUTCString().slice(4, 16),
    location: 'Chicago Studio 1',
  },
  {
    key: '9',
    songId: '432',
    name: 'Blues Kings',
    artist: 'BB King',
    issueDate: new Date(2023, 5, 20).toUTCString().slice(4, 16),
    regDate: new Date(2023, 5, 18).toUTCString().slice(4, 16),
    location: 'Memphis Studio 2',
  },
  {
    key: '10',
    songId: '543',
    name: 'Funk Masters',
    artist: 'James Brown',
    issueDate: new Date(2023, 4, 25).toUTCString().slice(4, 16),
    regDate: new Date(2023, 4, 23).toUTCString().slice(4, 16),
    location: 'Atlanta Studio 1',
  },
  {
    key: '11',
    songId:'321',
    name: 'Soul Stars',
    artist: 'Alicia Keys',
    issueDate: new Date(2023,1,5).toUTCString().slice(4,16),
    regDate: new Date(2023,1,3).toUTCString().slice(4,16),
    location: 'Detroit Studio 4',
  },
  {
    key: '12',
    songId:'432',
    name: 'Folk Favorites',
    artist: 'Mumford & Sons',
    issueDate: new Date(2023,2,11).toUTCString().slice(4,16),
    regDate: new Date(2023,2,9).toUTCString().slice(4,16),
    location: 'Nashville Studio 1',
  },
  {
    key: '13',
    songId:'543',
    name: 'Latin Legends',
    artist: 'Shakira',
    issueDate: new Date(2023,3,22).toUTCString().slice(4,16),
    regDate: new Date(2023,3,20).toUTCString().slice(4,16),
    location: 'Miami Studio 3',
  },
  {
    key: '14',
    songId:'654',
    name: 'Alternative Icons',
    artist: 'Radiohead',
    issueDate: new Date(2023,4,30).toUTCString().slice(4,16),
    regDate: new Date(2023,4,28).toUTCString().slice(4,16),
    location: 'Portland Studio 2',
  },
  {
    key: '15',
    songId:'765',
    name: 'R&B Royalty',
    artist: 'Usher',
    issueDate: new Date(2023,5,15).toUTCString().slice(4,16),
    regDate: new Date(2023,5,13).toUTCString().slice(4,16),
    location: 'Atlanta Studio 1',
  },
  {
    key: '16',
    songId:'876',
    name: 'Disco Dynamos',
    artist: 'Donna Summer',
    issueDate: new Date(2023,6,10).toUTCString().slice(4,16),
    regDate: new Date(2023,6,8).toUTCString().slice(4,16),
    location: 'Las Vegas Studio 4',
  },
];



const AlbumUploadTable = () => {
    const [loading, setLoading] = useState(false);

    const onChange = (pagination, filters, sorter, extra) => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    return (
        <div className='w-screen overflow-auto'>
            <Table columns={columns} dataSource={data} onChange={onChange} loading={loading} />
        </div>
    );
}

export default AlbumUploadTable;
