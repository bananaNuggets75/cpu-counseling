import React from 'react';
import NavBar from '../components/navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <NavBar></NavBar>
          <div className="flex justify-center items-center p-24">{children}</div>
      </body>
    </html>
  );
}
