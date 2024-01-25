// import { CheckoutFormValues } from "@/lib/context/checkout-context"
// import ConnectForm from "@/modules/common/components/connect-form"
// import CountrySelect from "../country-select"
// import Input from "@/components/common/formElements/Input"
// import { nameRegex, phoneRegex, postalCodeRegex } from "@/lib/util/regex"

// const BillingAddress = () => {
//   return (
//     <ConnectForm<CheckoutFormValues>>
//       {({ register, formState: { errors, touchedFields } }) => (
//         <div className="grid grid-cols-2 gap-4">
//           <Input
//             label="First name"
//             type="text"
//             {...register("billing_address.first_name", {
//               required: {
//                 message: "first_name is required...",
//                 value: true,
//               },
//               maxLength: {
//                 value: 50,
//                 message: "name is too long",
//               },
//               minLength: {
//                 value: 2,
//                 message: "name is too short",
//               },
//               pattern: {
//                 value: nameRegex,
//                 message: "name should only contain alphabets ",
//               },
//             })}
//             autoComplete="given-name"
//             errors={errors}
//             touched={touchedFields}
//             required
//           />
//           <Input
//             label="Last name"
//             type="text"
//             {...register("billing_address.last_name", {
//               required: {
//                 message: "last_name is required...",
//                 value: true,
//               },
//               maxLength: {
//                 value: 50,
//                 message: "name is too long",
//               },
//               minLength: {
//                 value: 2,
//                 message: "name is too short",
//               },
//               pattern: {
//                 value: nameRegex,
//                 message: "name should only contain alphabets ",
//               },
//             })}
//             autoComplete="family-name"
//             errors={errors}
//             touched={touchedFields}
//             required
//           />
//           <Input
//             label="Address"
//             type="text"
//             {...register("billing_address.address_1", {
//               required: "Address is required",
//             })}
//             autoComplete="address-line1"
//             errors={errors}
//             touched={touchedFields}
//             required
//           />
//           <Input
//             label="Company"
//             type="text"
//             {...register("billing_address.company")}
//             autoComplete="organization"
//             errors={errors}
//             touched={touchedFields}
//           />
//           <Input
//             label="Postal code"
//             type="number"
//             {...register("billing_address.postal_code", {
//               required: {
//                 message: "Postal code is required...",
//                 value: true,
//               },
//               pattern: {
//                 value: postalCodeRegex,
//                 message: "Please enter valid postal code",
//               },
//             })}
//             autoComplete="postal-code"
//             errors={errors}
//             touched={touchedFields}
//             required
//           />
//           <Input
//             label="City"
//             type="text"
//             {...register("billing_address.city", {
//               required: "City is required",
//             })}
//             autoComplete="address-level2"
//             errors={errors}
//             touched={touchedFields}
//             required
//           />
//           <CountrySelect
//             {...register("billing_address.country_code", {
//               required: "Country is required",
//             })}
//             autoComplete="country"
//             errors={errors}
//             touched={touchedFields}
//             required
//           />
//           <Input
//             label="State / Province"
//             type="text"
//             {...register("billing_address.province")}
//             autoComplete="address-level1"
//             errors={errors}
//             touched={touchedFields}
//           />
//           <Input
//             label="Phone"
//             type="tel"
//             {...register("billing_address.phone", {
//               required: {
//                 message: "phone number is required...",
//                 value: true,
//               },

//               pattern: {
//                 value: phoneRegex,
//                 message: "please enter vaild phone number ",
//               },
//             })}
//             autoComplete="tel"
//             errors={errors}
//             touched={touchedFields}
//           />
//         </div>
//       )}
//     </ConnectForm>
//   )
// }

// export default BillingAddress
