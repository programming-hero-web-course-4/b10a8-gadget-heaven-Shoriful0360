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

const addLocalStorageData=(Id)=>{
 const storeData=getStoreDataList()
 if(storeData.includes(Id)){
    toast. error('already Exist');
 }
 else{
    storeData.push(Id);
    localStorage.setItem('store',JSON.stringify(storeData))
    toast.success('Successfully, Add to Card!');
 }

}

// for whishList data store

const getStoreWhistList=()=>{
    const getData=localStorage.getItem('wishList');
    if(getData){
        return (JSON.parse(getData))
    }
    else{
        return([])
    }
}

const addWishlistStoreData=(Id)=>{
    const getStoreData=getStoreDataList()
    if(getStoreData.includes(Id)){
        toast. error('already Exist');

    }
    else{
        getStoreData.push(Id)
        localStorage.setItem('wishList',JSON.stringify(getStoreData))
    }

}

export  {getStoreDataList,getStoreWhistList}
export default {addLocalStorageData,addWishlistStoreData}
