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
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const AddSong = ({back}) => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <>
      <h2 className='font-extrabold ml-4 md:ml-12 text-4xl mt-12 text-purple-600'>
        Create Song
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
            <h2 className='mb-2 font-extrabold flex align-start'>Song Name</h2>
            <Form.Item className='w-full mb-6'>
              <Input className='border hover:border-purple-600 focus:border-purple-600' autoFocus />
           </Form.Item>

          <h2 className='mb-2 font-extrabold flex align-start'>Song Name Original</h2>
            <Form.Item className='w-full mb-6'>
              <Input className='border hover:border-purple-600 focus:border-purple-600' />
           </Form.Item>

           <h2 className='mb-2 font-extrabold flex align-start'>Album Name</h2>
           <Form.Item className='w-full mb-6'>
            <Select>
              <Select.Option value="demo">Dancing with Demons</Select.Option>
              <Select.Option value="demo">Euphoria</Select.Option>
              <Select.Option value="demo">Narrated for you</Select.Option>
              <Select.Option value="demo">Other</Select.Option>
            </Select>
          </Form.Item>

           <h2 className='mb-2 font-extrabold flex align-start'>Artist Name</h2>
            <Form.Item className='w-full mb-6'>
              <Input className='border hover:border-purple-600 focus:border-purple-600' />
           </Form.Item>

           <h2 className='mb-2 font-extrabold flex align-start'>Genre</h2>
           <Form.Item className='w-full mb-6'>
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>

          <h2 className='mb-2 font-extrabold flex align-start'>Unique Search Keyboard</h2>
            <Form.Item className='w-full'>
              <Input className='border hover:border-purple-600 focus:border-purple-600' />
           <h2 className='font-extrabold text-gray-500 flex align-start'>Minimal 5 Keyboard (dengan pemisah ".")</h2>
           </Form.Item>
          </div>

          <div className='w-full px-4 md:ml-24 md:flex md:flex-col items-center justify-center'>
            <Form.Item className='w-full mb-6'>
            <Radio.Group className='flex justify-between'>
              <Radio value="Hit Song" className='text-blue-600'> Hit Song </Radio>
              <Radio value="MP3 Download" className='text-blue-600'> MP3 Download </Radio>
            </Radio.Group>
            <Radio.Group className='flex justify-between'>
              <Radio value="Stream" className='text-blue-600'> Stream </Radio>
              <Radio value="Main Song" className='text-blue-600'> Main Song </Radio>
            </Radio.Group>
            <Radio.Group className='flex justify-between'>
              <Radio value="Adult Only" className='text-blue-600'> Adult Only </Radio>
              <Radio value="Instrument" className='text-blue-600'> Instrument </Radio>
            </Radio.Group>
          </Form.Item>

          <h2 className='mb-2 font-extrabold flex text-left w-full'>Artist Name</h2>
            <Form.Item className='w-full mb-6'>
              <Input className='border hover:border-purple-600 focus:border-purple-600' />
           </Form.Item>

           <h2 className='mb-2 font-extrabold flex text-left w-full'>Label Source Code (ISRC)</h2>
            <Form.Item className='w-full mb-6'>
              <Input className='border hover:border-purple-600 focus:border-purple-600' />
           </Form.Item>

           <h2 className='mb-2 font-extrabold flex text-left w-full'>Price</h2>
            <Form.Item className='w-full mb-6'>
              <Input className='border hover:border-purple-600 focus:border-purple-600' />
           </Form.Item>

           <h2 className='mb-2 font-extrabold flex text-left w-full'>Lyrics</h2>
            <Form.Item className='w-full mb-6'>
              <Input className='border hover:border-purple-600 focus:border-purple-600' />
           </Form.Item>

           <Form.Item valuePropName="fileList" className='flex justify-between items-start w-full' getValueFromEvent={normFile}>
          <Upload action="/upload.do" className='w-full' listType="picture-card">
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
          </Upload>
        </Form.Item>
          </div>
        </div>
        {/* <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item> */}
        <div className='flex justify-between items-center w-full px-12 mb-12'>
          <a href='/uploads/songs'>
            <Button className='border-none font-bold text-gray-700 text-lg'>
                Cancel
            </Button>
          </a>
          
          <Button type='submit' className='bg-purple-600 font-bold text-white text-lg md:mr-64 h-10 w-24'>
            Create
          </Button>
      </div>
      </Form>
    </>
  );
};
export default () => <AddSong />;