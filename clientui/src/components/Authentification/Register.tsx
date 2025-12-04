
import { ArrowLeft } from 'lucide-react';
import { Link,  } from 'react-router-dom';
import * as yup from "yup"
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { usersAPI } from '@/auth/usersAPI';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner'
// import axios from 'axios';

type RegisterInputs = {
  username: string
  email: string
  password: string
  confirm_password: string
}

const schema = yup.object({
  username: yup.string().max(50, 'Max 50 characters').required('Username is required'),
  email: yup.string().email('Invalid email').max(100, 'Max 100 characters').required('Email is required'),
  password: yup.string().min(6, 'Min 6 characters').max(255, 'Max 255 characters').required('Password is required'),
  confirm_password: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm Password is required')
});



export const Register = ()  => {
  const navigate = useNavigate();

  const [createUser, { isLoading }] = usersAPI.useCreateUsersMutation()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterInputs>({
    resolver: yupResolver(schema)

  })

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) =>{
        try {
          const userData = { ...data, role: 'Member' as const };
          
          // await axios.post('http://localhost:3000/api/users/create', userData)
          const response = await createUser(userData).unwrap()

          console.log("Sending user data to backend:", userData);
          console.log("Response", response)
          toast.success("Account created successfully! Please log in.")
          // redirect the user to verify
          setTimeout(()=>{
              navigate('/login', {
                   state: {email:data.email}
              })
          }, 2000)

        } catch (error:any) {
          console.log("Error creating user", error)
          toast.error(error.data.error)
        }
        console.log(data)
  }

 

  return (
    <div className="min-h-screen bg-red-400 flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-green-100 shadow-2xl">
        <div className="card-body">
          <div className="flex items-center mb-6">
            <Link to="/" className="btn btn-ghost btn-circle">
              <ArrowLeft size={24} />
            </Link>
            <h2 className="text-2xl font-bold flex-1 text-center text-red-700">Create Account</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
          
            <input
              type="text"
              {...register("username")}
              placeholder="Username"
              className="input input-bordered w-full bg-blue-100"
              // onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            {
                errors.username && (
                <span className="text-red-700 text-sm">{errors.username.message}</span>
              )
            }




            <input
              type="email"
             {...register("email")}
              placeholder="Email"
              className="input input-bordered w-full bg-blue-100"
              // onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
             {
              errors.email && (
                <span className="text-red-700 text-sm">{errors.email.message}</span>
              )
            }



            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="input input-bordered w-full bg-blue-100"
              // onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
             {
              errors.password && (
                <span className="text-red-700 text-sm">{errors.password.message}</span>
              )
            }




            <input
              type="password"
              {...register("confirm_password")}
              placeholder="Confirm Password"
              className="input input-bordered w-full bg-blue-100"
              // onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />
             {
              errors.confirm_password && (
                <span className="text-red-700 text-sm">{errors.confirm_password.message}</span>
              )
            }

            <button type="submit" className="btn bg-red-600 w-full " disabled= {isLoading}>
              {
                isLoading ? (
                  <>
                  <span className='loading loading-spinner text-primary'/>Please Wait...
                  </>
                ):"Create Account"
              }
            </button>

            <p className="text-center text-sm">
              Already have an account?{' '}
              <Link to="/login" className="link link-primary">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

