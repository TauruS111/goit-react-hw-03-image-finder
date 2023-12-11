import React from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className="LoaderContainer">
      <div className="Center">
        <ClipLoader color={'#36D7B7'} loading={true} css={override} size={50} />
      </div>
    </div>
  );
};

export default Loader;
