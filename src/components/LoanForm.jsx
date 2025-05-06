import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  loanAmount: "",
  zipCode: "",
  purpose: "",
  creditScore: "",
  firstName: "",
  lastName: "",
  birthday: "",
  ssnLast4: "",
  email: "",
  phone: "",
  streetAddress: "",
  state: "",
  addressLength: "",
  homeOwnership: "",
  idLicense: "",
  licenseState: "",
  contactTime: "",
  carOwnership: "",
  workPhone: "",
  incomeSource: "",
  jobTitle: "",
  employerName: "",
  employmentTime: "",
  payFrequency: "",
  nextPayDate: "",
  activeMilitary: "",
  monthlyIncome: "",
  directDeposit: "",
  abaRouting: "",
  accountNumber: "",
  accountType: "",
  monthsAtBank: "",
  bankName: "",
  ssnFull: "",
};

const validationSchema = Yup.object({
  loanAmount: Yup.string().required("Required"),
  zipCode: Yup.string().matches(/^\d{5}$/, "Must be exactly 5 digits").required("Required"),
  purpose: Yup.string().required("Required"),
  creditScore: Yup.string().required("Required"),
  firstName: Yup.string().matches(/^[A-Za-z]+$/, "Only alphabets").required("Required"),
  lastName: Yup.string().matches(/^[A-Za-z]+$/, "Only alphabets").required("Required"),
  birthday: Yup.string().required("Required"),
  ssnLast4: Yup.string().matches(/^\d{4}$/, "Must be exactly 4 digits").required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.string().matches(/^\d{10}$/, "Must be 10 digits").required("Required"),
  streetAddress: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  addressLength: Yup.string().required("Required"),
  homeOwnership: Yup.string().required("Required"),
  idLicense: Yup.string().required("Required"),
  licenseState: Yup.string().required("Required"),
  contactTime: Yup.string().required("Required"),
  carOwnership: Yup.string().required("Required"),
  workPhone: Yup.string().matches(/^\d{10}$/, "Must be 10 digits").required("Required"),
  incomeSource: Yup.string().required("Required"),
  jobTitle: Yup.string().matches(/^[A-Za-z ]+$/, "Only alphabets").required("Required"),
  employerName: Yup.string().matches(/^[A-Za-z ]+$/, "Only alphabets").required("Required"),
  employmentTime: Yup.string().required("Required"),
  payFrequency: Yup.string().required("Required"),
  nextPayDate: Yup.string().required("Required"),
  activeMilitary: Yup.string().required("Required"),
  monthlyIncome: Yup.string().required("Required"),
  directDeposit: Yup.string().required("Required"),
  abaRouting: Yup.string().matches(/^\d{9}$/, "Must be 9 digits").required("Required"),
  accountNumber: Yup.string().matches(/^\d{6,17}$/, "Must be between 6 and 17 digits").required("Required"),
  accountType: Yup.string().required("Required"),
  monthsAtBank: Yup.string().required("Required"),
  bankName: Yup.string().required("Required"),
  ssnFull: Yup.string().matches(/^\d{9}$/, "Must be 9 digits").required("Required"),
});

const LoanForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const objectData = values;
      console.log("Final object data:", JSON.stringify(objectData));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-8 text-primary rounded-xl shadow-xl space-y-4 mt-18">
      {/* Render inputs dynamically or individually like: */}
      <div>
        <label className="block mb-1">Loan Amount</label>
        <select name="loanAmount" onChange={formik.handleChange} value={formik.values.loanAmount} className="w-full p-2 border rounded">
          <option value="">Select</option>
          <option value="$100">$100</option>
          <option value="$200">$200</option>
          <option value="$300">$300</option>
          <option value="$400">$400</option>
        </select>
        {formik.errors.loanAmount && <div className="text-red-600 text-sm">{formik.errors.loanAmount}</div>}
      </div>

      {/* Repeat the above block with appropriate name, label and options/inputs for all fields... */}
      <div>
        <label className="block mb-1">Loan Amount</label>
        <select name="loanAmount" onChange={formik.handleChange} value={formik.values.loanAmount} className="w-full p-2 border rounded">
          <option value="">Select</option>
          <option value="$100">$100</option>
          <option value="$200">$200</option>
          <option value="$300">$300</option>
          <option value="$400">$400</option>
        </select>
        {formik.errors.loanAmount && <div className="text-red-600 text-sm">{formik.errors.loanAmount}</div>}
      </div>
      <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:opacity-90">Submit</button>
    </form>
  );
};

export default LoanForm;
