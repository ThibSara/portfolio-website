import React from 'react'
import GithubIcon from "../../../public/images/github-icon.svg"
import LinkedinIcon from "../../../public/images/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className={"grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"}>
        <div>
            <h5 className="text-xl font-bold text-white my-2">Get in touch</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I am available for freelance work. Connect with me via email:
                </p>
                <div className="socials flex flex-row gap-4">
                <Link href="github.com">
                    <Image src={GithubIcon} alt="github icon" />
                </Link>
                <Link href="linkedin.com">
                    <Image src={LinkedinIcon} alt="linkedin icon" />
                </Link>
                </div>
            </div>
            <div>
                <form className = "flex flex-col">
                    <div className = "mb-6">
                    <label htmlFor="email" className ="text-white block  mb-2 text-sm font-medium">Your Email</label>
                    <input type="email" id="email" required placeholder='jacob@google.com' 
                    className="bg-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
                </div>
                <div className = "mb-6">
                <label htmlFor="subject" className ="text-white block  mb-2 text-sm font-medium">Subject</label>
                    <input type="text" id="subject"required placeholder='Just saying hi!' 
                    className="bg-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
                </div>
                
                </form>
            </div>
    </section>
  )
}

export default EmailSection