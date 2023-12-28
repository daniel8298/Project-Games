// import Box from "@mui/material/Box";
// import { FieldValues, useForm } from "react-hook-form";
// import { Button, CssBaseline, Typography } from "@mui/material";
// // import { formStyle } from "../styles/formStyle";
// import { useNavigate } from "react-router-dom";
// import deliveryValidation from "../../form/models/deliveryValidation";
// import { formStyle } from "../../form/styles/formStyle";
// import DisplayFormContext from "../../form/components/DisplayForm";

// // const SearchPage = () => {
// //   return <Box>SearchPage</Box>;
// // };

// // export default SearchPage;

// // import { useAppDispatch } from "../../../store/hooks";
// const SearchPage = () => {
//   // const dispatch = useAppDispatch();
//   // const { onSubmitHelper } = useGraphql();
//   // const [openMissing, setOpenMissing] = useState(false);
//   // const [listMissing, setListMissing] = useState<NotInStockApterSub[]>([]);
//   const navigate = useNavigate();
//   // const dispatch = useAppDispatch();

//   const onSubmit = async (values: FieldValues) => {
//     console.log(values);
//     navigate(`/store/home`);
//     // dispatch(setOpen(true));

//     // try {
//     //   const result = await onSubmitHelper(values, state);
//     //   console.log(result);

//     //   if (result instanceof Array) {
//     //     setListMissing(result);
//     //     setOpenMissing(true);
//     //   } else if (result instanceof Object) {
//     //     console.log("success");
//     //   }
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   };

//   const {
//     control,
//     handleSubmit,
//     formState: { errors, isDirty, isValid },
//   } = useForm(deliveryValidation, onSubmit);
//   const formValues = ["address", "contact number", "email", "note"];
//   return (
//     <Box sx={formStyle}>
//       <CssBaseline />{" "}
//       {/* <Box>
//         <Modal open={openMissing}>
//           <Box sx={styleModalCheck}>
//             <CheckExist products={listMissing} setModal={setOpenMissing} />
//           </Box>
//         </Modal>
//       </Box> */}
//       <Typography>Your details</Typography>
//       <Box
//         component="form"
//         onSubmit={handleSubmit}
//         noValidate
//         sx={{ width: "100%", mt: "2rem" }}
//       >
//         <DisplayFormContext
//           control={control}
//           errors={errors}
//           formValues={formValues}
//         />

//         <Button
//           disabled={!isValid || !isDirty}
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2 }}
//         >
//           Buy
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default SearchPage;
