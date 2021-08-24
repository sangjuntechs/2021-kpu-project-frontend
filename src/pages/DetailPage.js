import React from 'react';

const DetailPage = ({match}) => {
    return (
        <>
         {match.params.id}를 가진 향수임 ㅋㅋㄹㅃㅃ
        </>
    )
}

export default DetailPage