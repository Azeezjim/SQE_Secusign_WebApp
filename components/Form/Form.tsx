// import Button from '@/components/Buttton'
// import { InputField, SelectField, TextareaField } from '@/components/inputFielsd'
import { useFormik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import SearchInput from "../SearchInput";
import { InputField, SelectField, TextareaField } from "./ImputFealds";

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            clashDisplay: "",
        },
        // validationSchema: EARLY_ACCESS_SCHEMA,
        onSubmit: (values) => {
            // earlyAccessQuery.mutate(values)
            console.log(values);
        },
    });
    return (
        <div className=" bg-white h-auto w-[90%] mx-auto mb-10 max-w-4xl flex justify-center items-center border-2 border-gray-200 rounded-xl ">
            <div className="items-cente my-7 w-[85%]"> 

                <div className="flex flex-col w-[100%] space-y-5">
                    <div className="flex justify-between items-center space-x-3">
                        <div className="w-[47%]">
                            <SearchInput
                                // placeholder="Search for something"
                                value={searchTerm}
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
                            className="w-[47%]"
                        />
                    </div>

                    <div className="flex justify-between items-center space-x-3">
                        <div className="w-[47%]">
                            <SearchInput
                                // placeholder="Search for something"
                                value={searchTerm}
                                onChange={handleInputChange}
                                placeholder={undefined}
                            />
                        </div>
                        <label className="flex mt-7 items-center w-[47%]">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <span className="ml-2 text-gray-700">Multi Signature</span>
                        </label>
                    </div>

                    <div className="flex justify-between items-center space-x-3">
                        <div className="w-[47%]">
                            <SearchInput
                                // placeholder="Search for something"
                                value={searchTerm}
                                onChange={handleInputChange}
                                placeholder={undefined}
                            />
                        </div>

                        <label className="flex mt-7 items-center w-[47%]">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <span className=" text-gray-700">Multi Signature</span>
                        </label>
                    </div>
                    <div className="flex flex-row items-center w-[90%] space-x-5">

                        <label className="block text-gray-700 items-center w-[25%] font-bold mt-10">Signature date/time:</label>
                        <div className="flex sm:col justify-between items-center w-[75%] space-x-2">
                            <div className="flex  flex-col mt-7 w-[47%]">

                                <label className="block text-gray-700 font-bold mb-2">Time:</label>
                                <input type="time" id="time" name="time" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300" />
                            </div>

                            <div className="flex  flex-col mt-7 w-[47%]">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Date
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="date"
                                    type="datetime-local"
                                    name="date"
                                    required
                                />

                            </div>

                        </div>
                    </div>

                    <div className="flex flex- w-[100%] space-x-[5%] items-center">
                        <div className=" w-[65%] space-y-5">
                            <div className="space-y-3">

                                <label
                                    htmlFor="about"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Description
                                </label>
                                <div className="mt-1">
                                    <TextareaField
                                        placeholder="Decribe reason for the document"
                                        id="about"
                                        name="about"
                                        rows={2}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>

                            <div className="space-y-5">
                                <label
                                    htmlFor="about"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Contract signature
                                </label>
                                <div className="mt-1">
                                    <TextareaField
                                        placeholder="Signing a contact between house seller and the bank"
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>

                        </div>
                            <div className="w-[30%]">
                                <Image
                                    height={30}
                                    width={170}
                                    className=""
                                    alt="Logo"
                                    src="/assrts/qr.jpg"
                                />
                            </div>
                    </div>

                    <div className="w-[50%] space-x-0 flex flex-col space-y-3">
                        <span className="text-gray-500 font-medium">Ref #</span>
                        <span className="text-gray-500 font-extrabold border rounded w-full py-2 px-3 ">123456789</span>
                    </div>

                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default SearchForm;
