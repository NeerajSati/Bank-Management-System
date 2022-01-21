import './transact.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Transact() {
  const [transact, setTransact] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/user/");
      setTransact(res.data);
    };
    fetchPosts();
  }, []);


  return (<div className='history'>
  <div className="innerHead">View and Transfer Money</div>
  <div className='tableDiv'>
  <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Balance</th>
          <th>Send Money</th>
        </tr>
        {transact && transact.map((frag) => (
        <tr>
          <td>{frag.name}</td>
          <td>{frag.email}</td>
          <td>{frag.balance}</td>
          <td><Link to={`/user/${frag._id}`}><button className='tableBtn'>Transfer</button></Link></td>
        </tr>
        ))}
        
      </table>
  
  </div>
  </div>);
}

export default Transact;
