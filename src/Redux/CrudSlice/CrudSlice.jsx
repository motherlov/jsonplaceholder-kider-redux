import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosInstance } from '../Helper/Helper'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState= {
    redirect: null,
    categoryProducts: [],
    categories: [],
    comments:[],
    users:[],
    products:[],// show all products and search
    product: null, // show single products
    addedProduct: null,
    updatedProduct: null,
    deletedProductId: null,
    status: 'idle',
    error: null,
  };


  export const user = createAsyncThunk("/user", async(formData) => {
    let res = await AxiosInstance.get(`/auth/me`,{
    headers: { 
      "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs", // Replace your_token_here with the actual token
  }}, formData );
    console.log(res)
    let resData = res?.data;
    return resData;
}
);
  
  export const product = createAsyncThunk("/products", async(formData) => {
      let res = await AxiosInstance.get(`/products`, formData );
      console.log(res)
      let resData = res?.data;
      return resData;
  }
  );
  
  export const productDetails = createAsyncThunk("/products/1", async(id) => {
      let res = await AxiosInstance.get(`/products/${id}`, );
      let resData = res?.data;
      return resData;
    }
  );


  export const fetchSearchResults = createAsyncThunk("//products/search", async(query) => {
    let res = await AxiosInstance.get(`/products/search?q=${query}`,  );
    console.log(res)
    let resData = res?.data;
    return resData;
}
);



export const addProduct = createAsyncThunk('products/addProduct', async (formData) => {
    const response = await AxiosInstance.post('/products/add', formData);
    let resData = response?.data;
    return resData;
  }
);

export const updateProduct = createAsyncThunk('products/updateProduct',
  async ({formData,id }) => {
    const res = await AxiosInstance.put(`/products/${id}`,formData);
    let resData = res?.data;
    return resData;
  }
);

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
    const res = await AxiosInstance.delete(`/products/${id}`);
    let resData = res?.data;
    return resData;
  }
);

export const commentData = createAsyncThunk("/comments", async(formData) => {
  let res = await AxiosInstance.get(`/comments`, formData );
  console.log(res)
  let resData = res?.data;
  return resData;
}
);

export const ProductCategories = createAsyncThunk('categories/Categories',async () => {
    const res= await AxiosInstance.get('/products/categories');
    let resData = res?.data;
    return resData;
  }
);
  
  
  export const CrudSlice = createSlice({
    name: "Crud",
    initialState,
    reducers: {
      // reset_redirectToUpdate: (state, { payload }) => {
      //   state.redirect = payload;
      // },
       
    },
  
    extraReducers: (builder) => {
      builder
      .addCase(user.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(user.fulfilled, (state, action, payload ) => {
          state.status = "success";
          // state.products =payload.products;
          state.users = action.payload;
          toast(payload?.message);
      })
      .addCase(user.rejected, (state, action) => {
        state.status = "idle";
        toast.success("Invalid Credentials");
      })
  ////////////////////////////
        .addCase(product.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(product.fulfilled, (state, action, payload ) => {
            state.status = "success";
            // state.products =payload.products;
            state.products = action.payload.products;
            toast(payload?.message);
        })
        .addCase(product.rejected, (state, action) => {
          state.status = "idle";
          toast.success("Invalid Credentials");
        })
  
  
  //////////////////////////////////////     single product  //////////////////////////////////      
        .addCase(productDetails.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(productDetails.fulfilled, (state,action, payload ) => {
            state.status = "idle";
            state.product= action.payload;
            toast(payload?.message);
        })
        .addCase(productDetails.rejected, (state, action) => {
          state.status = "idle";
            toast.success("This email already exist");
        })
          
              ///////////////////////  search//////////////////////////////////////////
         .addCase(fetchSearchResults.pending, (state, action) => {
                 state.status = "loading";
                     })
         .addCase(fetchSearchResults.fulfilled, (state,action, payload ) => {
                              state.status = "idle";
                              // state.results = action.payload;
                              state.products = action.payload.products;       //   search product
                              toast(payload?.message);
                          })
          .addCase(fetchSearchResults.rejected, (state, action) => {
                            state.status = "idle";
                              toast.success("This email already exist");
                          })
                      //////////////////////////////////////////
                          .addCase(addProduct.pending, (state, action) => {
                            state.status = "loading";
                                })
                          .addCase(addProduct.fulfilled, (state,action, payload ) => {
                                        state.status = 'succeeded';
                                        state.addedProduct = action.payload;
                                         //state.products = action.payload.products;
                                         toast(payload?.message);
                                     })
                          .addCase(addProduct.rejected, (state, action) => {
                            state.status = 'failed';
                            state.error = action.error.message;
                                         
                                     })
               //////////////////////////////////////////////////

               .addCase(updateProduct.pending, (state, action) => {
                state.status = "loading";
                    })
              .addCase(updateProduct.fulfilled, (state,action, payload ) => {
                            state.status = 'succeeded';
                             state.updatedProduct = action.payload;
                             //state.products = action.payload.products;
                             toast(payload?.message);
                         })
              .addCase(updateProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                             
                         })

               ////////////////////////////////////////////////////
               
               
               .addCase(deleteProduct.pending, (state, action) => {
                state.status = "loading";
                    })
              .addCase(deleteProduct.fulfilled, (state,action, payload ) => {
                            state.status = 'succeeded';
                             state.deletedProductId = action.payload;
                             //state.products = action.payload.products;
                             toast(payload?.message);
                         })
              .addCase(deleteProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                             
                         })
/////////////////////////////////////////////////////////////////////////


.addCase(ProductCategories.pending, (state, action) => {
  state.status = "loading";
      })
.addCase(ProductCategories.fulfilled, (state,action, payload ) => {
              state.status = 'succeeded';
               state.categories = action.payload;
               //state.products = action.payload.products;
               toast(payload?.message);
           })
.addCase(ProductCategories.rejected, (state, action) => {
  state.status = 'failed';
  state.error = action.error.message;
               
           })

           /////////////////////////////////////////////
           .addCase(commentData.pending, (state, action) => {
            state.status = "loading";
                })
          .addCase(commentData.fulfilled, (state,action, payload ) => {
                        state.status = 'succeeded';
                         state.comments = action.payload.comments;
                         //state.products = action.payload.products;
                         toast(payload?.message);
                     })
          .addCase(commentData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
                         
                     })



                                     


   },
   
   });
  
  
  export const {reset_redirectToUpdate} = CrudSlice.actions;
  export default CrudSlice;