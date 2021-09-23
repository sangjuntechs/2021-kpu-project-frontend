import React, { useEffect } from "react";
import Axios from 'axios';

const UserPage = ({ match }) => {

    useEffect(() => {
        Axios.get(`http://3.34.59.69/Member/${match.params.id}`).then(
          (res) => {
            console.log(res.data, "member");
          }
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  return <>{match.params.id}</>;
};

export default UserPage;
