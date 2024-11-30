"use client";
import './../../globals.css';
import type { Metadata } from 'next';
import React, { use } from 'react';
import localFont from 'next/font/local';
// import Topbar from '@/components/public/topbar';

import dynamic from "next/dynamic";

const Topbar = dynamic(() => import("@/components/public/topbar"), {
    ssr: false,
});

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Topbar />
      <div>{children}</div>
    </>
  );
}
