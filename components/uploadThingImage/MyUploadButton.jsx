"use client";

import { UploadButton } from "@uploadthing/react";
import { useState } from "react";
import { twMerge } from 'tailwind-merge'


export function MyUploadButton() {
  const [url, setUrl] = useState();
  return (
    <UploadButton
    config={{ cn: twMerge }}
      className="mt-4 bg-amber-300 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50"
      endpoint="imageUploader"
      onClientUploadComplete={(res ) => {
        console.log("Files: ",  res);
        setUrl(res)
        // alert("Upload Completed");
      }}
      onUploadError={(error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}