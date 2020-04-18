import React from 'react';

import { Story } from './styles';

export default function Avatar({ loading=true, width = 100, borderWidth = 2, alt="", img="http://placekitten.com/150/150", ...props }) {
  return (
    <Story loading={loading} width={width} borderWidth={borderWidth} {...props }>
      <img src={img} alt={alt} />
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="url(#paint0_linear)"/>

        <defs>
          <linearGradient id="paint0_linear" x1="180" y1="14" x2="28" y2="182" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCAC46"/>
            <stop offset="0.541667" stopColor="#E95361"/>
            <stop offset="0.697917" stopColor="#E64466"/>
            <stop offset="1" stopColor="#482066"/>
          </linearGradient>
        </defs>
      </svg>
    </Story>
  );
}
