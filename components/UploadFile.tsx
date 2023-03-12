/* eslint-disable react/require-default-props */
import { useState, useEffect, useCallback } from 'react';
import { FaTimes } from 'react-icons/fa';
import Image from "next/image";
import { useDropzone, DropzoneOptions } from 'react-dropzone';


interface IDocumentUploadInput {
  label?: string;
  dropzoneOpt: DropzoneOptions;
}
function UploadFile(props: IDocumentUploadInput) {

  const { getInputProps, getRootProps } = useDropzone({ ...props.dropzoneOpt });

  return (
    <>
<div
      {...getRootProps()}
      className="font-grotesk hover:bg-sky200/20 relative flex h-full w-full flex-col items-center justify-center rounded border-2 border-dashed p-4 border-blue-400 hover:border-gray-600"
    >
      <Image
        src="/assrts/file.png"
        alt="uploadIcon"
        className="mx-auto"
        width={70}
        height={70}
      />
      <span className="block text-sm font-medium text-primary-main">
        <div className="flex justify-center items-center gap-2 my-3">
          <label className="cursor-pointer">
            <span className="text-base leading-normal font-grotesk">Click to upload or drag and drop</span>
            <input {...getInputProps()} />
          </label>
        </div>
        <span className="block text-[12px]">
          {props.label ||
            "The format should be JPG, PDF or Word document (Max 10MB)"}
        </span>
      </span>
    </div>
    </>
  );
}

export default UploadFile;
