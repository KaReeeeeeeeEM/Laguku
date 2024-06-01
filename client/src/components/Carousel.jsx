import React from 'react';
import { Carousel } from 'antd';


const contentStyle = {
  width: '100%',
  height: '75vh',
  color: 'purple',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  background: '#ddd',
};

const Slider = () => (
  <Carousel autoplay>
    {/* Corousel 1 */}
    <div>
      <div style={contentStyle}>
        <div className='md:w-1/2 px-8 text-gray-800'>
        <div>
            <h1 className='text-4xl'>This is slide 1</h1>
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus laudantium, cupiditate temporibus necessitatibus quaerat dolorum 
                beatae aliquid cumque nihil maiores quibusdam explicabo similique, 
                placeat nam non autem id atque officia.
            </p>
        </div>
        </div>
        <div className='w-1/3 px-8 bg-purple-100 h-1/2 hidden md:block'>
            <img className='w-full' src='https://images.unsplash.com/photo-1612833837879-7c8f6b3d4d1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' alt='slide 1' />
        </div>
      </div>
    </div>
    
    {/* Corousel 2 */}
    <div>
      <div style={contentStyle}>
        <div className='w-1/3 px-8 bg-purple-100 h-1/2 hidden md:block'>
            <img className='w-full' src='https://images.unsplash.com/photo-1612833837879-7c8f6b3d4d1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' alt='slide 2' />
        </div>
        <div className='md:w-1/2 px-8 text-gray-800'>
        <div>
            <h1 className='text-4xl'>This is slide 2</h1>
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus laudantium, cupiditate temporibus necessitatibus quaerat dolorum 
                beatae aliquid cumque nihil maiores quibusdam explicabo similique, 
                placeat nam non autem id atque officia.
            </p>
        </div>
        </div>
      </div>
    </div>

    {/* Corousel 3 */}
    <div>
      <div style={contentStyle}>
      <div className='md:w-1/2 px-8 text-gray-800 md:bg-none'>
        <div>
            <h1 className='text-4xl'>This is slide 3</h1>
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus laudantium, cupiditate temporibus necessitatibus quaerat dolorum 
                beatae aliquid cumque nihil maiores quibusdam explicabo similique, 
                placeat nam non autem id atque officia.
            </p>
        </div>
        </div>
        <div className='w-1/3 px-8 bg-purple-100 h-1/2 hidden md:block'>
            <img className='w-full' src='https://images.unsplash.com/photo-1612833837879-7c8f6b3d4d1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' alt='slide 3' />
        </div>
      </div>
    </div>

    {/* Corousel 4 */}
    <div>
      <div style={contentStyle}>
        <div className='w-1/3 px-8 bg-purple-100 h-1/2 hidden md:block'>
            <img className='w-full' src='https://images.unsplash.com/photo-1612833837879-7c8f6b3d4d1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' alt='slide 4' />
        </div>
        <div className='md:w-1/2 px-8 text-gray-800'>
        <div>
            <h1 className='text-4xl'>This is slide 4</h1>
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus laudantium, cupiditate temporibus necessitatibus quaerat dolorum 
                beatae aliquid cumque nihil maiores quibusdam explicabo similique, 
                placeat nam non autem id atque officia.
            </p>
        </div>
        </div>
      </div>
    </div>
  </Carousel>
);
export default Slider;