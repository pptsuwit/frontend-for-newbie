import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import "./globals.css";
const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
