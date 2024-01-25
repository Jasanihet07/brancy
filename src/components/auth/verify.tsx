// import Input from "../common/formElements/Input"
// import SubmitButton from "../common/formElements/SubmitButton"

// type Props = {}

// const OtpVerificationForm = (props: Props) => {
//   async function login(formData: FormData) {
//     "use server"

//     const rawFormData = {
//       phone: formData.get("phone"),
//       otp: formData.get("otp"),
//     }

//     console.log("formdata", rawFormData)

//     // mutate data
//     // revalidate cache
//   }

//   return (
//     <div className="flex flex-col w-full gap-8 max-w-md mx-auto py-8">
//       <h4>OTP Varification</h4>
//       <p>
//         <span className="font-bold">One Time Password </span>
//         was send on your phone number
//       </p>
//       <form action={login} className="flex flex-col gap-6 w-full">
//         <Input
//           name="otp"
//           placeholder="Enter OTP"
//           type="number"
//           // label="Enter OTP"
//           autoComplete="tel"
//         />
//         <SubmitButton variant="fill" color="green" type="submit">
//           Verify
//         </SubmitButton>
//       </form>
//     </div>
//   )
// }

// export default OtpVerificationForm
