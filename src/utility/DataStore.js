import toast from "react-hot-toast";

const getStoreDataList=()=>{
const getDataId=localStorage.getItem('store');

if(getDataId){
    const getDataStr=JSON.parse(getDataId);
    
    return getDataStr
}
else{
   
    return []
}



}

const addLocalStorageData=(data)=>{
   
 const storeData=getStoreDataList()
 const isExist=storeData.find(item=>item.product_id===data.product_id)
 if(isExist){
   return toast. error('already Exist'); 
 }

else{
    storeData.push(data);
    toast.success('Successfully, Add to Card!');
    localStorage.setItem('store',JSON.stringify(storeData)) 
    
}


// remove data from localstorage data

const removeData=(ID)=>{
    console.log(ID)
    const storeData=getStoreDataList()
    const remainingData=storeData.find(data=>data.product_id!==ID)
    localStorage.setItem('store',JSON.stringify(remainingData))
    toast.success('Successfully, Delete Card!');
}

   


}

// for whishList data store

// const getStoreWhistList=()=>{
//     const getData=localStorage.getItem('wishList');
//     if(getData){
//         return (JSON.parse(getData))
//     }
//     else{
//         return([])
//     }
// }

// const addWishlistStoreData=(Id)=>{
//     const getStoreData=getStoreDataList()
//     if(getStoreData.includes(Id)){
//         toast. error('already Exist');

//     }
//     else{
//         getStoreData.push(Id)
//         localStorage.setItem('wishList',JSON.stringify(getStoreData))
//     }

// }

export  {getStoreDataList}

export default (addLocalStorageData)
