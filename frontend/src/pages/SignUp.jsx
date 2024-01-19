import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left side of the page */}
        <div className="flex-1">
          <Link 
            to='/' 
            className='font-bold dark:text-white text-4xl'
          >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300 text-zinc-800 rounded-lg'>Rushton's</span>
              Blog
          </Link>
          <p className="text-sm mt-5">Please sign-up with a username, email address and unique password</p>
        </div>
        {/* Right side of the page */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value='Your username' />
              <TextInput 
                type='text'
                placeholder="Username"
                id='username'
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput 
                type='email'
                placeholder="email@email.com"
                id='email'
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput 
                type='password'
                placeholder="Password"
                id='password'
              />
            </div>
            <Button gradientDuoTone='purpleToBlue' outline type='submit'>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
