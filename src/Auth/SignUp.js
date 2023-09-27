import React, { useEffect, useState } from 'react'
import Lock from "../Images/Lock.jpg"
import Logo from '../Images/CG-Logo.png'
import SignupImg from "../Images/Signup.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuth';



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
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
            <img
              className="mx-auto mh-0 h-10 w-auto"
              src={Logo}
              alt="Your Company"
            />
          </a>

          <div className="items-center flex-shrink-0  lg:flex">
            <Link to='/log-in' className="self-center px-8 py-3 bg-green-600 text-white shadow-sm hover:bg-green-500 rounded">Sign in</Link>
          </div>

        </div>
      </header>

      <div style={{ margin: 50, marginTop: 10 }}>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 md:p-8 fade-up ">
            <h2 className="text-4xl font-bold mb-4">Why join Cyber<span className='text-green-600' >Gaurd</span></h2>
            <p data-aos="fade-right" data-aos-duration="1000" className="text-gray-600 text-justify">
              <span  >At CyberGuard, we are committed to empowering individuals on their journey to becoming proficient cybersecurity practitioners. Joining our Cybersecurity Resource Hub opens up a world of opportunities and advantages that will enrich your knowledge and enhance your cybersecurity capabilities.</span></p>
            <br />
            <p data-aos="fade-right" data-aos-duration="2000" className="text-gray-600 text-justify" > Our platform offers an extensive range of resources that cater to both beginners and seasoned cybersecurity enthusiasts. Whether you're just starting your cybersecurity journey or looking to deepen your expertise, CyberGuard has you covered.</p>
            <br />
            <p data-aos="fade-right" data-aos-duration="3000" className="text-gray-600 text-justify">Gain access to a suite of user-friendly cybersecurity tools designed to protect your digital assets and maintain data confidentiality. With tools such as encryption, steganography, cryptography, virus scanning, vulnerability scanning, and more, you'll have the power to defend against potential security threats effectively.</p>

            <p className="mt-10 text-left text-sm text-gray-500">
              Already a member?{' '}
              <button href="#" className="font-semibold leading-6 text-green-600 hover:text-green-500">
                Sign In
              </button>
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <img src={Lock} alt="Your Image" className="w-full h-auto" />
          </div>
        </div>

        <div className="flex border border-gray-200 mb-8 flex-col-reverse sm:flex-row items-center justify-center">
          {/* Image on the left */}
          <div className="w-full sm:w-1/2">
            <img
              src={SignupImg}
              alt="Your Image"
              className="w-full h-auto"
            />
          </div>

          {/* Signup form on the right */}
          <div className="w-full sm:w-1/2 p-6">
            <h2 className="text-4xl font-semibold mb-4">Join Us</h2>
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

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  name="email"
                  onChange={(e) => { setemail(e.target.value) }}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  name="password"
                  onChange={(e) => { setpassword(e.target.value) }}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  name="confirmPassword"
                  onChange={(e) => { setconfirmPassword(e.target.value) }}
                  className="w-full border border-gray-300 p-2 rounded"
                />

              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>


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
  )
}

export default SignUp