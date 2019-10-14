import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/CollectionItem.component';

const collectionPreview=({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
            .filter((item,index)=>index<4)
            .map(({id,...otheritems})=>(
                <CollectionItem key={id} {...otheritems}/>
            ))}
        </div>
    </div>
);
 
export default collectionPreview;
