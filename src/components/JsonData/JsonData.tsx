import React,{useState,useEffect} from "react";
import { JsonPlaceholder } from "../../types/jsonPlaceholder";
import { useDispatch,useSelector } from "react-redux";
import { postJsonData,getpostJsonData } from "../../app/actions/postJsonApiAction";
import { AppDispatch, RootState } from "../../app/store";

const JsonDataPosting = ()=>{
    const dispatch = useDispatch<AppDispatch>();
    const postData = useSelector((state:RootState)=>state.postJson);

    const [formData,setFormData] = useState<JsonPlaceholder>({
        userId:0,
        title:"",
        body:""
    })

    useEffect(()=>{
        dispatch(getpostJsonData());
    },[dispatch])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData)
       dispatch(postJsonData(formData))
      };
    console.log(postData);
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="number"
                        value={formData.userId}
                        onChange={(e:any)=>setFormData({...formData, userId:e.target.value})}
                        placeholder="Enter your userId"
                     />   
                </div>
                <div>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e:any)=>setFormData({...formData,title:e.target.value})}
                        placeholder="Enter your title"
                    />    
                </div>
                <div>
                    <input
                        type="text"
                        value={formData.body}
                        onChange={(e:any)=>setFormData({...formData,body:e.target.value})}
                        placeholder="Enter your body"
                    />  
                </div>
                <div>
                    <button 
                        type="submit"
                    >
                        Submit 
                    </button>
                </div>
            </form>
            <div>
               {postData.data && postData.data.map((post:any)=>{
                return (
                    <>
                 
                <li key={post.id} style={{display:"flex",border:"1px solid black"}}>
                    {post.userId}
                    <hr/>
                    {post.title}
                    <hr/>
                    {post.body}
                </li>
               
                </>
                )
                
               })}
            </div>
        </div>
    )
}

export default JsonDataPosting