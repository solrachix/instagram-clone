import React, { useState, forwardRef, memo } from 'react';
import Lottie from 'react-lottie';

const LottieAnimation = forwardRef((
  { 
    loop=false, 
    autoplay=false,
    isStopped=false,
    isPaused=false,
    animationData, 
    size=50, 
    ...props 
  }, ref) => {

  const defaultOptions = {
    loop,
    autoplay, 
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Lottie options={defaultOptions}
      height={size}
      width={size}
      isStopped={isStopped}
      isPaused={isPaused}
      isClickToPauseDisabled={true}

      style={{ margin: 0 }}
      ref={ref}
      {...props} />
  )
})

export default memo(LottieAnimation);