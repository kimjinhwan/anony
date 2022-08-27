import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
import React, { useEffect, useRef, useState } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function CardList(){
    const [info,setInfo] = useState([]);
    const [selected, setSelected] = useState(null);
    const [modalOn, setModalOn] = useState(false); 

    const nextId = useRef(11); 

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setInfo(res.data))
            .catch(err => console.log(err));
    }, []);

    return(
        
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <h1>
                Hello world!
            </h1>
            <div>
            <table>
                <thread>
                    <tr>
                        <th>Id.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>Website</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thread>
                {/* <Tr info={info} */}
            </table>
            {/* <Post_ */}
            </div>
        </div>
    )
}

export default CardList;