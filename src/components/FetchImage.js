import React, {useState,useEffect} from 'react';
import axios from 'axios';

function FetchImage() {
    const [newImg,setImg] = useState([]);
    const [ visible, setVisible]=useState(0);

    const getImage =async ()=>{
        const response = await axios.get("https://dog.ceo/api/breeds/image/random")
        .then(res =>{
            // console.log(res.data)
            setImg(res.data);
        // console.log(newImg.message)
        })
        .catch(err=>{console.log(err)})
    }    
   
    useEffect(()=>{
        getImage();
    },[])


    return <div>
    { <img src ={newImg.message} width="200px" height ="200px"></img>}
    <br></br>
        <button onClick={()=>getImage()}>Fetch!</button>
    
    </div>;
}

export default FetchImage;
