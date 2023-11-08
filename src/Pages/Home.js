import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

    return (

        <div className="flex bg-gray-100 justify-center items-center min-h-scr" >
            <div className="grid    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Column 1 */}
                <div className="p-4 ">
                    <Link to='/Encrypt'>
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <img style={{ height: 180, width: 600 }} class="rounded-t-lg h-100" height="15" src="https://media.wired.co.uk/photos/606da03e687a704c2c3617da/16:9/w_1920,c_limit/encryption_1.jpg" alt="" />

                        <div class="p-5">

                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Encypt/Decrypt</h5>

                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Protect your data with strong encryption methods and decrypt encrypted files here</p>

                        </div>
                    </div>
                    </Link>

                </div>
                {/* Column 2 */}
                <div className="p-4 ">
                    <Link to ='/steganography'>
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        
                            <img class="rounded-t-lg h-100" style={{ height: 180, width: 600 }} src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*tBgGg5wbAv9yrFvQBHxcLg.jpeg" alt="" />
                        
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Steganography</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Conceal Important & Sensetive information within another message to avoid detection.</p>

                        </div>
                    </div>
                    </Link>
                </div>
                {/* Column 3 */}
                <div className="p-4 ">
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <img class="rounded-t-lg " style={{ height: 180, width: 600 }} src="https://cdn.mos.cms.futurecdn.net/jiFnJ33FqBG6AE82g4QPuj-1200-80.jpg.webp" alt="" />

                        <div class="p-5">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Virus Scanner</h5>

                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Scan and remove malicious viruses from your files</p>

                        </div>
                    </div>
                </div>
                {/* Column 4 (only visible on screens larger than sm) */}
                <div className="p-4  sm:block">
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img class="rounded-t-lg h-40" style={{ height: 180, width: 600 }} src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/06/phishing_scams_-_article_image.jpg" alt="" />
                        <div class="p-5">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Phishing Scanner</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Guard against phishing attacks with our phishing prevention tool.</p>

                        </div>
                    </div>
                </div>
                {/* Column 5 (only visible on screens larger than sm) */}
                <div className="p-4  sm:block">
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img class="rounded-t-lg"  style={{ height: 180, width: 600 }} src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2022/12/ping-ping-1200.png?resize=1024,535" alt="" />
                        
                        <div class="p-5">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ping Scanner</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Monitor your network with our efficient Ping Scanner tool.</p>

                        </div>
                    </div>
                </div>
                {/* Column 6 (only visible on screens larger than md) */}
                <Link to="/password-checker" >
                <div className="p-4  md:block">
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img class="rounded-t-lg" style={{ height: 180, width: 600 }} src="https://blog.absoluteitad.com/hubfs/Best%20Practices%20For%20Password%20Security%20In%20The%20Workplace.jpg" alt="" />
                        <div class="p-5">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Password Checker</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">With the help of out tool you can now generate or check your password</p>

                        </div>
                    </div>
                </div>
                </Link>
            </div>
        </div>






    )
}

export default Home