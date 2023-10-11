import React, { useEffect, useState } from 'react'
import Lock from "../Images/Lock.jpg"
import Logo from '../Images/CG-Logo.png'
import SignupImg from "../Images/Signup.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuth';
import ScreenShot from '../Images/screenshot.jpg'
import { Typewriter } from 'react-simple-typewriter'

function SignUp() {

  useEffect(() => {
    AOS.init();
  }, [])

  const services = [
    { title: 'Encryption', description: 'Protect your data with strong encryption methods.' },
    { title: 'Steganography', description: 'Hide messages within images for added security.' },
    { title: 'Virus Scanner', description: 'Scan and remove viruses from your files and devices.' },
    { title: 'Vulnerability Scanner', description: 'Identify and fix security weaknesses in your systems.' },
    { title: 'Cryptography', description: 'Secure your communications with advanced cryptographic techniques.' },
    { title: 'Phishing URL Scanner', description: 'Guard against phishing attacks with our phishing prevention tools.' },
    { title: 'ChatBot', description: 'Interact with our AI ChatBot for instant cybersecurity assistance.' },
    { title: 'Ping Scanner', description: 'Monitor your network with our efficient Ping Scanner.' },
  ];

  const [password, setpassword] = useState("")
  const [email, setemail] = useState('')
  const [confirmPassword, setconfirmPassword] = useState("")
  const { signUp } = useUserAuth();
  const [error, seterror] = useState("")

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");

    // Check if passwords match
    if (password !== confirmPassword) {
      seterror("Passwords do not match.");
    } else {
      try {
        await signUp(email, password);
        navigate("/log-in");
      } catch (err) {
        seterror(err.message);
      }
    }
  }



  return (

    <div>

      <section class="pt-24 bg-white">
        <div class="px-12 mx-auto max-w-7xl">
          <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span>Your Ultimate Resource for {' '}</span> <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline"> 
              <Typewriter
            words={['Security Solutions', 'Cyber Knowlegde']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={3000}
           
          />  </span> 
            </h1>
            <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">

              Our platform offers an extensive range of resources that cater to both beginners and seasoned cybersecurity enthusiasts. Whether you're just starting your cybersecurity journey or looking to deepen your expertise, CyberGuard has you covered.
            </p>
            <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <Link to="/log-in" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-600 rounded-2xl sm:w-auto sm:mb-0">
                Login
                <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
              <Link to="/log-in" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                Info
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              </Link>
            </div>
          </div>
          <div class="w-full mx-auto mt-20 text-center md:w-10/12">
            <div class="relative z-0 w-full mt-8">
              <div class="relative overflow-hidden shadow-2xl">
                <div class="flex items-center flex-none px-4 bg-green-600 rounded-b-none h-11 rounded-xl">
                  <div class="flex space-x-1.5">
                    <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                    <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                    <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                  </div>
                </div>

                <img src={ScreenShot} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='pt-24' style={{ margin: 50, marginTop: 10 }}>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 md:p-8 fade-up ">
            <h2 className="text-4xl font-bold mb-4">Why join Cyber<span className='text-green-600' >Gaurd</span></h2>
            <p data-aos="fade-right" data-aos-duration="1000" className="text-gray-600 text-justify">
              <span  >At CyberGuard, we are committed to empowering individuals on their journey to becoming proficient cybersecurity practitioners. Joining our Cybersecurity Resource Hub opens up a world of opportunities and advantages that will enrich your knowledge and enhance your cybersecurity capabilities.</span></p>
            <br />

            <p data-aos="fade-right" data-aos-duration="3000" className="text-gray-600 text-justify">Gain access to a suite of user-friendly cybersecurity tools designed to protect your digital assets and maintain data confidentiality. With tools such as encryption, steganography, cryptography, virus scanning, vulnerability scanning, and more, you'll have the power to defend against potential security threats effectively.</p>

            <p className="mt-10 text-left text-sm text-gray-500">
              Already a member?{' '}
              <button href="#" className="font-semibold leading-6 text-green-600 hover:text-green-500">
                Sign In
              </button>
            </p>
          </div>

          <div className="w-full md:w-1/2  ">
            {error && <div class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
              <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Danger alert!</span> {error}
              </div>
            </div>}
            <form onSubmit={handleSubmit} >


              <div class="group relative w-72 md:w-80 lg:w-96 m-10">
                <label class="block w-full pb-1 text-sm font-medium text-green-600 transition-all duration-200 ease-in-out group-focus-within:text-green-400">Enter your Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  name="email"
                  onChange={(e) => { setemail(e.target.value) }}
                  class="peer h-10 w-full rounded-md bg-gray-100 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-600" />
                <span class="absolute block pt-1 text-xs font-semibold text-gray-500 opacity-0 transition-all duration-200 ease-in-out group-focus-within:opacity-100">format abcd@company.com</span>
              </div>

              <div class="group relative w-72 md:w-80 lg:w-96 m-10">
                <label class="block w-full pb-1 text-sm font-medium text-green-600 transition-all duration-200 ease-in-out group-focus-within:text-green-400">Create your Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  name="password"
                  onChange={(e) => { setpassword(e.target.value) }}
                  class="peer h-10 w-full rounded-md bg-gray-100 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-600" />
              </div>

              <div className="group relative w-72 md:w-80 lg:w-96 m-10">
                <label htmlFor="confirmPassword" className="block w-full pb-1 text-sm font-medium text-green-600 transition-all duration-200 ease-in-out group-focus-within:text-green-400">
                  Confirm your Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  name="confirmPassword"
                  onChange={(e) => { setconfirmPassword(e.target.value) }}
                  class="peer h-10 w-full rounded-md bg-gray-100 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-600"
                />
                <span class="absolute block pt-1 text-xs font-semibold text-red-500 opacity-0 transition-all duration-200 ease-in-out group-focus-within:opacity-100">Make sure you have the Entered the Same password</span>
              </div>
              <button
                type="submit"
                className="flex shadow w-32 block border-green-600 border-2 rounded-full focus:outline-none focus:border-green-600 px-4 py-2 text-green-600 hover:bg-green-600 hover:text-white m-10"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>



        <div class="pt-4 m-10 bg-white">
        <h2 className="text-4xl font-bold mb-4"><span className='text-green-600' >Tools</span> for you</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg shadow-md"
            >

              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
        </div>

      </div>
    </div>
  )
}

export default SignUp