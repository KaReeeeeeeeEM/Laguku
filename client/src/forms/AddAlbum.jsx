import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Upload,
} from 'antd';
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const AddAlbum = ({back}) => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <>
      <h2 className='font-extrabold ml-4 md:ml-12 text-4xl mt-12 text-purple-600'>
        Create Album
      </h2>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          display: "flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"center",
          maxWidth: "100vw",
          marginTop: "2rem"
          
        }}
      >
        <div className='md:flex items-center justify-between w-full'>
          <div className='w-full px-4 md:px-12 md:flex md:flex-col items-start justify-center'>
            <h2 className='mb-2 font-semibold flex align-start'>Album Name</h2>
            <Form.Item className='w-full mb-6'>
              <Input className='border hover:border-purple-600 focus:border-purple-600'placeholder='Input album name'  autoFocus />
           </Form.Item>

          <h2 className='mb-2 font-semibold flex align-start'>Album Name Original</h2>
            <Form.Item className='w-full mb-6'>
              <Input className='border hover:border-purple-600 focus:border-purple-600' placeholder='Input original album name' />
           </Form.Item>

           <h2 className='mb-2 font-semibold flex align-start'>Album Type</h2>
           <Form.Item className='w-full mb-6'>
            <Select placeholder='Choose your album'>
              <Select.Option value="demo">EP</Select.Option>
              <Select.Option value="demo">Official</Select.Option>
            </Select>
          </Form.Item>

           <h2 className='mb-2 font-semibold flex align-start'>Genre</h2>
           <Form.Item className='w-full mb-6'>
            <Select placeholder='Choose your genre music'>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>

          <h2 className='mb-2 font-semibold flex align-start'>Disk No</h2>
            <Form.Item className='w-full'>
              <Input className='border hover:border-purple-600 focus:border-purple-600' defaultValue='1' />
           </Form.Item>

           <Form.Item className='w-full'>
            <Radio.Group className='flex justify-between'>
                <Radio value="Hit Album" className='text-blue-600'> Safe for All </Radio>
                <Radio value="MP3 Download" className='text-blue-600'> Adult Only </Radio>
              </Radio.Group>
           </Form.Item>
          </div>

          <div className='w-full px-4 md:ml-24 md:flex md:flex-col items-center justify-center'>
          <h2 className='mb-2 font-semibold flex text-left w-full'>Main Artist</h2>
           <Form.Item className='w-full mb-6'>
            <Select placeholder='Choose your main artist here'>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>

          <h2 className='mb-2 font-semibold flex text-left w-full'>Recording Label</h2>
            <Form.Item className='w-full mb-6'>
              <Input className='border hover:border-purple-600 focus:border-purple-600' placeholder='Input your recording label here ' />
           </Form.Item>

           <h2 className='mb-2 font-semibold flex text-left w-full'>Unique Search Keyboard</h2>
            <Form.Item className='w-full'>
              <Input className='border hover:border-purple-600 focus:border-purple-600' placeholder='Input unique keyboard search key' />
           <h2 className='font-semibold text-gray-500 flex align-start'>Minimal 5 Keyboard (dengan pemisah ".")</h2>
           </Form.Item>

           <h2 className='mb-2 font-semibold flex text-left w-full'>Album Description</h2>
           <Form.Item className='flex justify-between items-start w-full' >
              <TextArea rows={4} cols={128} placeholder='Input description' className='border hover:border-purple-600 focus:border-purple-600' />
          </Form.Item> 

          <h2 className='mb-2 font-semibold flex text-left w-full'>Image</h2>
          <Form.Item valuePropName="fileList" className='flex justify-between items-start w-full' getValueFromEvent={normFile}>
          {/* <Upload action="/upload.do" className='w-full' listType="picture-card">
            <button
              style={{
                border: 0,
                background: 'none',
                width: '100%'
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                  color: 'blue',
                }}
              >
                Browse
              </div>
            </button>
          </Upload> */}
          <input type="file" name="image" id="image" className='text-purple-600' />
        </Form.Item>
          </div>
        </div>
        {/* <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item> */}
        <div className='flex justify-between items-center w-full px-12 mb-12'>
          <a href='/uploads/albums'>
            <Button className='border-none font-semibold text-purple-700 text-lg'>
                Cancel
            </Button>
          </a>
          
          <Button type='submit' className='bg-purple-600 font-semibold text-white text-lg md:mr-64 h-9 w-24'>
            Create
          </Button>
      </div>
      </Form>
    </>
  );
};
export default () => <AddAlbum />;