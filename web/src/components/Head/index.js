import React from 'react';
import {Helmet} from "react-helmet";

export default function Head({ title, description, favicon, appleTouchIcon, themeColor='#000000'}) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="theme-color" content={themeColor} />

      { appleTouchIcon && <link rel="apple-touch-icon" href={appleTouchIcon} /> }
      { favicon && <link rel="icon" href={favicon} /> }
      {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    </Helmet>
  );
}
