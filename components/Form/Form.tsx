// import Button from '@/components/Buttton'
// import { InputField, SelectField, TextareaField } from '@/components/inputFielsd'
import { useFormik } from "formik";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import Button from "../Button";
import DocumentInputField from "../Dropfield";
import SearchInput from "../SearchInput";
import ImageUpload from "../UploadFile";
import { InputField, SelectField, TextareaField } from "./ImputFealds";

const SearchForm = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [files, setFiles] = useState([]);


    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        setFiles([...files, ...acceptedFiles]);
    }, [files]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const formik = useFormik({
        initialValues: {
            time: "",
            date: "",
            email: "",
            refrence: "",
        },
        // validationSchema: EARLY_ACCESS_SCHEMA,
        onSubmit: (values) => {
            // earlyAccessQuery.mutate(values)
            console.log(values);
        },
    });
    return (
        <div className="ml-4 sm:ml-0">
            <div className="font-grotesk bg-white h-auto w-[90%] mt-[-90px] mx-auto mb-14 max-w-4xl flex justify-center items-center border-2 border-gray-200 rounded-xl ">
                <div className="items-cente my-7 w-[85%]">
                    <div className="flex flex-col w-[100%] space-y-5 sm:space-y-1">
                        <div className="flex justify-between items-center sm:flex-col space-x-3">
                            <div className="w-[47%] sm:w-[100%]">
                                <SearchInput
                                    value={searchTerm}
                                    labelName="Add Recipient"
                                    onChange={handleInputChange}
                                    placeholder={undefined}
                                />
                            </div>
                            <InputField
                                label="Email Address"
                                placeholder="example@mail.com"
                                type="email"
                                id="email"
                                required
                                error={!!formik?.touched?.email && !!formik?.errors?.email}
                                helperText={!!formik?.touched?.email && formik?.errors?.email}
                                inputProps={{
                                    value: formik?.values?.email,
                                    onChange: formik?.handleChange("email"),
                                    onBlur: formik?.handleBlur("email"),
                                }}
                                className="w-[47%] sm:w-[100%]"
                            />
                        </div>

                        <div className="flex justify-between items-center sm:flex-col space-x-3">
                            <div className="w-[47%] sm:w-[100%]">
                                <SearchInput
                                    value={searchTerm}
                                    labelName="Select withness"
                                    onChange={handleInputChange}
                                    placeholder={undefined}
                                />
                            </div>
                            <label className="flex mt-7 items-center w-[47%] sm:w-[100%]">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2 overflow-auto text-sm font-grotesk">Multi Signature</span>
                            </label>
                        </div>

                        <div className="flex justify-between items-center sm:flex-col space-x-3">
                            <div className="w-[47%] mt-1 sm:w-[100%]">
                                <SearchInput
                                    value={searchTerm}
                                    labelName="Select Location"
                                    onChange={handleInputChange}
                                    placeholder={undefined}
                                />
                            </div>

                            <label className="flex mt-7 sm:mt-5 items-center sm:w-[100%] w-[47%] space-x-1">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-blue-700 transition duration-150 ease-in-out "
                                />
                                <span className="overflow-auto text-sm font-grotesk">Capture Signature</span>
                            </label>
                        </div>
                        <div className="flex flex-row justify-between items-center w-[90%] space-x-5">

                            <label className="block items-center w-[25%] mt-5">Signature date/time:</label>
                            <div className="flex justify-between items-center w-[75%] space-x-[5%]">
                                <div className=" w-[47%] ">
                                    <InputField
                                        label="Time"
                                        type="time"
                                        id="time"
                                        required
                                        error={!!formik?.touched?.time && !!formik?.errors?.time}
                                        helperText={!!formik?.touched?.time && formik?.errors?.time}
                                        inputProps={{
                                            value: formik?.values?.time,
                                            onChange: formik?.handleChange("time"),
                                            onBlur: formik?.handleBlur("time"),
                                        }}
                                    // className="w-[47%]"
                                    />
                                </div>
                                <div className="w-[47%] ">
                                    <InputField
                                        label="Date"
                                        type="date"
                                        id="date"
                                        required
                                        error={!!formik?.touched?.date && !!formik?.errors?.date}
                                        helperText={!!formik?.touched?.date && formik?.errors?.date}
                                        inputProps={{
                                            value: formik?.values?.date,
                                            onChange: formik?.handleChange("date"),
                                            onBlur: formik?.handleBlur("date"),
                                        }}
                                    // className="w-[47%]"
                                    />

                                </div>

                            </div>
                        </div>

                        <div className="flex flex- w-[100%] space-x-[5%] items-center">
                            <div className=" w-[100%] space-y-5">
                                <div className="space-y-3">
                                    <label
                                        htmlFor="about"
                                    >
                                        Description
                                    </label>
                                    <div className="grid grid-flow-row gap-2 text-sm">
                                        <TextareaField
                                            placeholder="Decribe reason for the document"
                                            id="about"
                                            name="about"
                                            rows={4}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3 w-[100%]">
                                    <label
                                        htmlFor="about"
                                    >
                                        Contract signature
                                    </label>
                                    <div className="grid grid-flow-row gap-2 text-sm">
                                        <TextareaField
                                            placeholder="Signing a contract between house seller and bank"
                                            id="about"
                                            name="about"
                                            rows={7}
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center sm:flex-col space-x-3">

                            <div className="grid grid-flow-row gap-2 text-sm w-[47%] sm:w-[100%] font-grotesk">
                                <InputField
                                    label="Refrence"
                                    placeholder="hf478h..."
                                    type="refrence"
                                    id="refrence"
                                    required
                                    error={!!formik?.touched?.refrence && !!formik?.errors?.refrence}
                                    helperText={!!formik?.touched?.refrence && formik?.errors?.refrence}
                                    inputProps={{
                                        value: formik?.values?.refrence,
                                        onChange: formik?.handleChange("refrence"),
                                        onBlur: formik?.handleBlur("refrence"),
                                    }}
                                    className="w-[100%]"
                                />
                            </div>
                            <div className="w-[40%] sm:w-[100%] sm:flex justify-center ic">
                                <Image
                                    height={60}
                                    width={200}
                                    className=""
                                    alt="Logo"
                                    src="/assrts/qr.jpg"
                                />
                            </div>
                        </div>
                        
                        <div className="mb-10 mt-5">
                            <div className="mb-3 flex flex-row  justify-between items-center sm:flex-col space-x-5">
                                <div className="w-[47%] sm:w-[100%]">
                                    <ImageUpload
                                        label="The format should be PDF, Word, or ZIP file (Max 10MB)"
                                        dropzoneOpt={{
                                            maxFiles: 1,
                                            minSize: 4,
                                            accept: ".pdf,.docx,.doc,.zip, .png",
                                            onDrop: onDrop,
                                            maxSize: 10000000,
                                        }}
                                    />
                                </div>
                                <ul className="mt-4 space-y-4 font-grotesk">
                                    {files.map(file => (
                                        <li key={file.name} className="flex items-center">
                                            <span className="text-gray-700 text-[12px] font-grotesk">{file.name}</span>
                                            <button className="ml-3 text-red-500 hover:text-red-700" onClick={() => setFiles(prev => prev.filter(f => f !== file))}>
                                                <AiFillCloseSquare className="w-30 h-30 " width={30} hanging={30} />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchForm;
