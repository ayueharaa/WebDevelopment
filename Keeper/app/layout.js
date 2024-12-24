import React from "react";
import '../public/styles.css'

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <title>Keeper App</title>
    <link
      href="https://fonts.googleapis.com/css?family=McLaren|Montserrat&display=swap"
      rel="stylesheet"
    />
        <body>{children}</body>
      </html>
    )
  }