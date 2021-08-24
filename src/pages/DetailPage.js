import React,{useEffect} from 'react';
import Axios from 'axios';

const DetailPage = ({match}) => {

    useEffect(() => {
        Axios.get(`http://3.34.59.69/Product/detail/${match.params.id}`).then((res) => {
          console.log(res.data, 'detail');
        });
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    return (
        <>
         <p>{match.params.id}를 가진 향수임 ㅋㅋㄹㅃㅃ</p>
        </>
    )
}

export default DetailPage