import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { NavLink } from "react-router-dom";



type LoginInputs = {
  email: string,
  password: string
};
const schema = yup.object({
    email: yup.string().email('Invalid email').max(100, 'Max 100 characters').required('Email is required'),
    password: yup.string().min(6, 'Min 6 characters').max(255, 'Max 255 characters').required('Password is required'),
});




export const Login = () => {
  const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm<LoginInputs>({
      resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<LoginInputs> = (data) =>{
            console.log(data);
      }





  
  return (
    <>
        {/* <input
        type="checkbox"
        checked={isSignInModalOpen}
        onChange={() => setIsSignInModalOpen(!isSignInModalOpen)}
        className="modal-toggle"
      /> */}
      <div className= "modal modal-open">
        <div className="modal-box">
          <h3 className="font-bold text-2xl mb-6">Welcome Back!</h3>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
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
                <span className="label-text">Password</span>
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
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text ml-2">Remember me</span>
              </label>
              <a href="#" className="link link-primary text-sm">Forgot password?</a>
            </div>

            <div className="modal-action mt-8">
              <button
                type="button"
                // onClick={() => setIsSignInModalOpen(false)}
                className="btn btn-ghost"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary px-8">
                Sign In
              </button>
              <p className="text-center text-sm">
              Don't have an account?{' '}
              <NavLink to="/register" className="link link-primary">Get Started</NavLink>
            </p>
            </div>
          </form>
        </div>
        </div>
    </>
  )
}
