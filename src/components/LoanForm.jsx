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
  zipCode: Yup.string()
    .matches(/^\d{5}$/, "Must be exactly 5 digits")
    .required("Required"),
  purpose: Yup.string().required("Required"),
  creditScore: Yup.string().required("Required"),
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabets")
    .required("Required"),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabets")
    .required("Required"),
  birthday: Yup.string().required("Required"),
  ssnLast4: Yup.string()
    .matches(/^\d{4}$/, "Must be exactly 4 digits")
    .required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Must be 10 digits")
    .required("Required"),
  streetAddress: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  addressLength: Yup.string().required("Required"),
  homeOwnership: Yup.string().required("Required"),
  idLicense: Yup.string().required("Required"),
  licenseState: Yup.string().required("Required"),
  contactTime: Yup.string().required("Required"),
  carOwnership: Yup.string().required("Required"),
  workPhone: Yup.string()
    .matches(/^\d{10}$/, "Must be 10 digits")
    .required("Required"),
  incomeSource: Yup.string().required("Required"),
  jobTitle: Yup.string()
    .matches(/^[A-Za-z ]+$/, "Only alphabets")
    .required("Required"),
  employerName: Yup.string()
    .matches(/^[A-Za-z ]+$/, "Only alphabets")
    .required("Required"),
  employmentTime: Yup.string().required("Required"),
  payFrequency: Yup.string().required("Required"),
  nextPayDate: Yup.string().required("Required"),
  activeMilitary: Yup.string().required("Required"),
  monthlyIncome: Yup.string().required("Required"),
  directDeposit: Yup.string().required("Required"),
  abaRouting: Yup.string()
    .matches(/^\d{9}$/, "Must be 9 digits")
    .required("Required"),
  accountNumber: Yup.string()
    .matches(/^\d{6,17}$/, "Must be between 6 and 17 digits")
    .required("Required"),
  accountType: Yup.string().required("Required"),
  monthsAtBank: Yup.string().required("Required"),
  bankName: Yup.string().required("Required"),
  ssnFull: Yup.string()
    .matches(/^\d{9}$/, "Must be 9 digits")
    .required("Required"),
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
    <form
      onSubmit={formik.handleSubmit}
      className="p-8 rounded-xl shadow-xl space-y-4 mt-18 max-w-4xl mx-auto"
    >
      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1">Loan Amount</label>
          <select
            name="loanAmount"
            onChange={formik.handleChange}
            value={formik.values.loanAmount}
            className="w-full p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="$100">$100</option>
            <option value="$200">$200</option>
            <option value="$300">$300</option>
            <option value="$400">$400</option>
          </select>
          {formik.errors.loanAmount && (
            <div className="text-primary text-sm">
              {formik.errors.loanAmount}
            </div>
          )}
        </div>

        <div className="w-1/2">
          <label className="block mb-1">Zip Code</label>
          <input
            name="zipCode"
            onChange={formik.handleChange}
            value={formik.values.zipCode}
            className="w-full p-2 border rounded"
          />
          {formik.errors.zipCode && (
            <div className="text-primary text-sm">{formik.errors.zipCode}</div>
          )}
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1">Purpose</label>
          <select
            name="purpose"
            onChange={formik.handleChange}
            value={formik.values.purpose}
            className="w-full p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="Auto Repair">Auto Repair</option>
            <option value="Business Expense">Business Expense</option>
            <option value="Debt/Credit Card Consolidation">
              Debt/Credit Card Consolidation
            </option>
            <option value="Emergency Expense">Emergency Expense</option>
            <option value="Medical">Medical</option>
            <option value="Other">Other</option>
          </select>
          {formik.errors.purpose && (
            <div className="text-primary text-sm">{formik.errors.purpose}</div>
          )}
        </div>

        <div className="w-1/2">
          <label className="block mb-1">Your Credit Score</label>
          <select
            name="creditScore"
            onChange={formik.handleChange}
            value={formik.values.creditScore}
            className="w-full p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="Excellent (700+)">Excellent (700+)</option>
            <option value="Good (630-699)">Good (630-699)</option>
            <option value="Fair (550-629)">Fair (550-629)</option>
            <option value="Poor (549 or lower)">Poor (549 or lower)</option>
            <option value="No Credit">No Credit</option>
          </select>
          {formik.errors.creditScore && (
            <div className="text-primary text-sm">
              {formik.errors.creditScore}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1">First Name</label>
          <input
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="w-full p-2 border rounded"
          />
          {formik.errors.firstName && (
            <div className="text-primary text-sm">
              {formik.errors.firstName}
            </div>
          )}
        </div>
        <div className="w-1/2">
          <label className="block mb-1">Last Name</label>
          <input
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="w-full p-2 border rounded"
          />
          {formik.errors.lastName && (
            <div className="text-primary text-sm">{formik.errors.lastName}</div>
          )}
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1">Date of birth</label>
          <input
            type="date"
            name="birthday"
            onChange={formik.handleChange}
            value={formik.values.birthday}
            className="w-full p-2 border rounded"
          />
          {formik.errors.birthday && (
            <div className="text-primary text-sm">{formik.errors.birthday}</div>
          )}
        </div>
        <div className="w-1/2">
          <label className="block mb-1">Last 4 Digits of SSN </label>
          <input
            name="ssnLast4"
            onChange={formik.handleChange}
            value={formik.values.ssnLast4}
            className="w-full p-2 border rounded"
          />
          {formik.errors.ssnLast4 && (
            <div className="text-primary text-sm">{formik.errors.ssnLast4}</div>
          )}
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full p-2 border rounded"
          />
          {formik.errors.email && (
            <div className="text-primary text-sm">{formik.errors.email}</div>
          )}
        </div>
        <div className="w-1/2">
          <label className="block mb-1">Phone Number</label>
          <input
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="w-full p-2 border rounded"
            placeholder="eg. 3605551234"
          />
          {formik.errors.phone && (
            <div className="text-primary text-sm">{formik.errors.phone}</div>
          )}
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1">Street Address</label>
          <input
            name="streetAddress"
            onChange={formik.handleChange}
            value={formik.values.streetAddress}
            className="w-full p-2 border rounded"
          />
          {formik.errors.streetAddress && (
            <div className="text-primary text-sm">{formik.errors.streetAddress}</div>
          )}
        </div>
        <div className="w-1/2">
          <label className="block mb-1">Lenght at Address</label>
          <select
            name="addressLength"
            onChange={formik.handleChange}
            value={formik.values.addressLength}
            className="w-full p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="1 Month">1 Month</option>
            <option value="3 Months">3 Months</option>
            <option value="6 Months">6 Months</option>
            <option value="9 Months">9 Months</option>
            <option value="1 Year">1 Year</option>
            <option value="1-2 Years">1-2 Years</option>
          </select>
          {formik.errors.addressLength && (
            <div className="text-primary text-sm">
              {formik.errors.addressLength}
            </div>
          )}
        </div>
        
      </div>
      <div className="flex gap-4">
      <div className="w-1/2">
          <label className="block mb-1">State</label>
          <select
            name="state"
            onChange={formik.handleChange}
            value={formik.values.state}
            className="w-full p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
          </select>
          {formik.errors.state && (
            <div className="text-primary text-sm">
              {formik.errors.state}
            </div>
          )}
        </div>
        <div className="w-1/2">
          <label className="block mb-1">Home Ownership</label>
          <select
            name="homeOwnership"
            onChange={formik.handleChange}
            value={formik.values.homeOwnership}
            className="w-full p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="Rent">Rent</option>
            <option value="Own">Own</option>
          </select>
          {formik.errors.homeOwnership && (
            <div className="text-primary text-sm">
              {formik.errors.homeOwnership}
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="bg-primary text-primary-foreground px-30 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoanForm;
