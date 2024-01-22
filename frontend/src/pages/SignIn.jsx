import { useState } from "react";
import { Button, Label, TextInput, Alert, Spinner } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage('Please fill out all the fields')
    }
    try {
      setLoading(true)
      setErrorMessage(null)
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage('User already exists')
      }
      setLoading(false)
      if (res.ok) {
        navigate('/')
      }
    } catch (error) {
      setErrorMessage('Something went wrong, please try again')
      setLoading(false)
    }
  }

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
          <p className="text-sm mt-5">Please sign-in with your email address and password</p>
        </div>
        {/* Right side of the page */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value='Your email' />
              <TextInput 
                type='email'
                placeholder="email@email.com"
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput 
                type='password'
                placeholder="********"
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToBlue' outline type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm'/>
                    <span className="pl-3">Loading...</span>
                  </>
                ) : 'Sign In'
              }
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to='/sign-up' className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}
