import React from 'react'
import Item from './Item/Item';
import './ItemList.css'

const ItemList = () => {
    return (
        <div className='contenedor'>
            <div className='row'>
                <div className='col-md-4'>
                    <Item initial ={0} stock={8} />
                </div>
                <div className='col-md-4'>
                    <Item initial={0} stock={4}/>
                </div>
                <div className='col-md-4'>
                    <Item initial={0} stock={3}/>    
                </div>
            </div>
        </div>
    );
};

export default ItemList;
