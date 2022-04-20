import React,{useState} from 'react';
import { MailOutlined,PhoneOutlined,GlobalOutlined,HeartOutlined,EditOutlined,DeleteFilled,HeartFilled } from '@ant-design/icons';
import Modal from './Modal';
export default function Cards(props) {
    const userDetails = props.userDetails;
    const [like,setLike]=useState(true);
    const handleRemove=(i)=>{
        let allItems=[...userDetails];
        allItems.splice(i,1);
        props.setUserDetails(allItems);
    }
    const handleLike=()=>{
            setLike(!like)    
    }
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4 m-0">
                {userDetails && userDetails.map((item, i) => (
                    <div class="col" key={i}>
                        <div className="card h-100">
                            <div className='bg-light text-center pt-2'>
                            <img src={`https://avatars.dicebear.com/v2/avataaars/${item.name}.svg?options[mood][]=happy`} alt='Avatar' style={{width:'200px',height:'200px'}} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text"> <MailOutlined /> {item.email}</p>
                                <p className="card-text"> <PhoneOutlined /> {item.phone}</p>
                                <p className="card-text"> <GlobalOutlined /> http://{item.website}</p>
                            </div>
                            <div className="card-footer">
                                <div className='d-flex justify-content-between px-4'>
                                <small className="text-muted " onClick={()=>handleLike(item.id)}>{like?<HeartOutlined className='text-danger'/>:<HeartFilled className='text-danger'/>}</small>
                                <small className="text-muted " data-bs-toggle="modal" data-bs-target="#exampleModal" ><EditOutlined /></small>
                                <small className="text-muted " onClick={()=>handleRemove(i)}><DeleteFilled /></small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Basic Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <Modal/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Ok</button>
      </div>
    </div>
  </div>
</div>
</div>
    )
}
