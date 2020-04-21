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
    height = false,
    onClick=()=>{},
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
    <div onClick={onClick}>
      <Lottie options={defaultOptions}
        height={height ? height : size}
        width={size}
        isStopped={isStopped}
        isPaused={isPaused}
        isClickToPauseDisabled={true}
        
        style={{ margin: 0 }}
        ref={ref}
        {...props} />
    </div>
  )
})

export default memo(LottieAnimation);