import React from 'react';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import { IRooteState } from '../types';

const Loading: React.FC = () => {
  const isLoading = useSelector((state: IRooteState) => state.app.isLoading);

  if(!isLoading) return null;

  return (
    <>
      <Spin fullscreen />
    </>
  );
};

export default Loading;