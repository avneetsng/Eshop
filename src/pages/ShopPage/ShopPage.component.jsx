 import React,{Component} from 'react';
 import shop_data from './shop_data';
 import CollectionPreview from '../../components/collection-preview/collection-preview.component'

 class Shop extends Component{
     constructor(props){
         super(props)
         this.state={
             collection:shop_data
         }
     }
     render(){
         const {collection}=this.state;
         return(
             <div className='shop-page'>
                 {
                     collection.map(({id,...othercollection})=>(
                         <CollectionPreview key={id} {...othercollection}/>
                     ))
                 }
            </div>
         )
     }
 }
  
export default Shop;