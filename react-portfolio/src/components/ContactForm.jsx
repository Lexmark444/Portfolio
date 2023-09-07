"use client"
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_obhpetv', 'template_i7muuqq', form.current, 'efO_8iCJpqhkZ9wkS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };


    return(
        <section className="bg-gradient-to-b from-cyan-50 to-white py-10 px-10 md:px-20 lg:px-40">
            <div className="text-3xl py-5 text-black"> Contact Me</div>

            <div className="flex bg-white drop-shadow-lg">
            <form ref={form} 
                onSubmit={sendEmail}
                className="flex flex-col gap-2 pt-2 w-full" >
                <div className="flex flex-col gap-2 p-10 w-full">

                <div className="flex flex-col gap-2 pt-2 w-full focus:drop-shadow">
                    <p className="text-md">First Name*</p>
                    <input type="text"
                        className="border-b border-black-800 py-1
                        focus:border-black focus:outline-none" 
                        name='user_firstname' id="user_firstname" required />
                </div>

                <div className="flex flex-col gap-2 pt-2 w-full focus:drop-shadow">
                    <p className="text-md">Last Name*</p>
                    <input type="text"
                        className="border-b border-black-800 py-1
                        focus:border-black focus:outline-none" 
                        name='user_lastname' id="user_lastname" required />
                </div>

                <div className="flex flex-col gap-2 pt-2 w-full focus:drop-shadow">
                    <p className="text-md">Email*</p>
                    <input type="text"
                        className="border-b border-black-800 py-1
                        focus:border-black focus:outline-none" 
                        name='user_email' id="user_email" required />
                </div>

                <div className="flex flex-col gap-2 pt-2 w-full focus:drop-shadow">
                    <p className="text-md">Subject*</p>
                    <input type="text"
                        className="border-b border-black-800 py-1
                        focus:border-black focus:outline-none" 
                        name='user_subject' id="user_subject" required />
                </div>

                <div className="flex flex-col gap-2 pt-2 w-full focus:drop-shadow">
                <p className="text-md">Message*</p>      
                <textarea name="user_message"
                    id="user_message" 
                    cols="30" 
                    row="30"
                    className="border-b border-black-800 py-1
                    focus:border-black focus:outline-none"
                    ></textarea>
                </div>
                </div>
                <button type="submit"
                    className="bg-black text-white py-2 px-4">Send Message</button>
            </form>
            </div>

        </section>
    )
}