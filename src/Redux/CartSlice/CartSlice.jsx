import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosInstance } from '../Helper/Helper'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState= {
    redirect: null,
    carts:[],
    data:[],
    status: 'idle',
    error: null,
  };
  
  export const cartsData = createAsyncThunk("/carts", async(formData) => {
      let res = await AxiosInstance.get(`/carts`, formData );
      console.log(res)
      let resData = res?.data;
      return resData;
  }
  );
  
  export const cartDetails = createAsyncThunk("/carts/1", async(id) => {
      let res = await AxiosInstance.get(`/carts/${id}`, );
      let resData = res?.data;
      return resData;
    }
  );


 


// export const addProduct = createAsyncThunk('products/addProduct', async (formData) => {
//     const response = await AxiosInstance.post('/products/add', formData);
//     let resData = response?.data;
//     return resData;
//   }
// );

// export const updateProduct = createAsyncThunk('products/updateProduct',
//   async ({formData,id }) => {
//     const res = await AxiosInstance.put(`/products/${id}`,formData);
//     let resData = res?.data;
//     return resData;
//   }
// );

// export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
//     const res = await AxiosInstance.delete(`/products/${id}`);
//     let resData = res?.data;
//     return resData;
//   }
// );




  
  
  export const CartSlice = createSlice({
    name: "Carts",
    initialState,
    reducers: {   },
  
    extraReducers: (builder) => {
      builder
  
        .addCase(cartsData.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(cartsData.fulfilled, (state, action, payload ) => {
            state.status = "success";
            // state.carts =payload.carts;
            state.carts= action.payload.carts;
            toast(payload?.message);
        })
        .addCase(cartsData.rejected, (state, action) => {
          state.status = "idle";
          toast.success("Invalid Credentials");
        })
  
  
  //////////////////////////////////////     single cart //////////////////////////////////      
        .addCase(cartDetails.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(cartDetails.fulfilled, (state,action, payload ) => {
            state.status = "successed";
             state.data= action.payload.products;
          
            toast(payload?.message);
        })
        .addCase(cartDetails.rejected, (state, action) => {
          state.status = "idle";
            toast.success("This email already exist");
        })
          
              ///////////////////////  search//////////////////////////////////////////
       
                      //////////////////////////////////////////
                        //   .addCase(addProduct.pending, (state, action) => {
                        //     state.status = "loading";
                        //         })
                        //   .addCase(addProduct.fulfilled, (state,action, payload ) => {
                        //                 state.status = 'succeeded';
                        //                  state.addedProduct = action.payload;
                        //                  //state.products = action.payload.products;
                        //                  toast(payload?.message);
                        //              })
                        //   .addCase(addProduct.rejected, (state, action) => {
                        //     state.status = 'failed';
                        //     state.error = action.error.message;
                                         
                        //              })
               //////////////////////////////////////////////////

            //    .addCase(updateProduct.pending, (state, action) => {
            //     state.status = "loading";
            //         })
            //   .addCase(updateProduct.fulfilled, (state,action, payload ) => {
            //                 state.status = 'succeeded';
            //                  state.updatedProduct = action.payload;
            //                  //state.products = action.payload.products;
            //                  toast(payload?.message);
            //              })
            //   .addCase(updateProduct.rejected, (state, action) => {
            //     state.status = 'failed';
            //     state.error = action.error.message;
                             
            //              })

               ////////////////////////////////////////////////////
               
               
            //    .addCase(deleteProduct.pending, (state, action) => {
            //     state.status = "loading";
            //         })
            //   .addCase(deleteProduct.fulfilled, (state,action, payload ) => {
            //                 state.status = 'succeeded';
            //                  state.deletedProductId = action.payload;
            //                  //state.products = action.payload.products;
            //                  toast(payload?.message);
            //              })
            //   .addCase(deleteProduct.rejected, (state, action) => {
            //     state.status = 'failed';
            //     state.error = action.error.message;
                             
            //              })
/////////////////////////////////////////////////////////////////////////






                                     


   },
   
   });
  
  
  export const {reset_redirectToUpdate} = CartSlice.actions;
  export default CartSlice;