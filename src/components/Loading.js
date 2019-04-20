import React from 'react';

import loadingImg from 'assets/img/loading.gif';

const Loading = () => {
  return (
    <div className="col-6 align-self-center" >
      <img style={{ width: 60, height: 60 }} src={loadingImg} alt="Loading..." />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;