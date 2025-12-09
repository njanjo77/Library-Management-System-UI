import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import {  NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { type LoginInputs, loginApi } from "@/auth/loginAPI";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/auth/userSlice";


const schema = yup.object({
    email: yup.string().email('Invalid email').max(100, 'Max 100 characters').required('Email is required'),
    password: yup.string().min(6, 'Min 6 characters').max(255, 'Max 255 characters').required('Password is required'),
});




export const Login = () => {
  const dispatch = useDispatch()
  const [loginUser,{isLoading}] = loginApi.useLoginUserMutation();


  const location = useLocation()
  const navigate = useNavigate()
  const emailState = location.state?.email || ''
  const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm<LoginInputs>({
      resolver: yupResolver(schema),
      defaultValues:{
        email:emailState
      }
    });

    const onSubmit: SubmitHandler<LoginInputs> = async (data) =>{
      try {
        console.log(data)
        const response = await loginUser(data).unwrap()
        console.log(response);
        toast.success(response.message)

        //dispatch to store the user and token
        dispatch(loginSuccess(response))
        console.log(response.data.role)
        if(response.data.role === 'Admin'){
          navigate('/admin/dashboard')
        }else if (response.data.role === 'user'){
          navigate('/user/dashboard')
        }

        //set token in local storage
        localStorage.setItem('token', response.token)
        // setToken(response.token)

      } catch (error: any) {
        console.log("Full RTK Query error",error)
        //toast.error(error.data?.error || 'Login failed')
      }
            console.log(data);
      }




  return (
    <>
      <div className= "modal modal-open bg-black bg-opacity-50 ">
        <div className="modal-box bg-gray-200">
          <h3 className="font-bold text-2xl text-red-600 mb-6">Welcome Back!</h3>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-extrabold">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="admin@library.com"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
                
              />
               {
              errors.email && (
                <span className="text-red-700 text-sm">{errors.email.message}</span>
              )
            }
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-extrabold">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="••••••••"
                
                // onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
              />
               {
              errors.password && (
                <span className="text-red-700 text-sm">{errors.password.message}</span>
              )
            }
            </div>

            <div className="flex justify-between items-center">
              <label className="cursor-pointer label">
                <input type="checkbox" className="checkbox checkbox-primary bg-white" />
                <span className="label-text ml-2">Remember me</span>
              </label>
              {/* <a href="#" className="link link-primary text-sm">Forgot password?</a> */}
            </div>

              <button
                type="button"
                onClick={() => navigate('/')}
                className="btn btn-ghost bg-gray-300 hover:bg-gray-500 text-black px-6 border-r"
              >
                Cancel
                
              </button>
              
              <button type="submit" className="btn text-white bg-red-600 px-6 hover:bg-red-800" disabled={isLoading}>
                {
                  isLoading ?(
                    <>
                    <span className='loading loading-spinner text-primary'></span>Signing In...
                    </>
                  ):'Sign In'
                }
              </button>
              <p className="text-center text-sm">
              Don't have an account?{' '}
              <NavLink to="/register" className="link link-primary">Get Started</NavLink>
            </p>
          </form>
        </div>
        </div>
    </>
  )
}
// }
// function setToken(token: any): any {
//   throw new Error("Function not implemented.");
// }

