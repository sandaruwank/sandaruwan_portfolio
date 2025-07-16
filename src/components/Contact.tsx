import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon, YoutubeIcon } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sandaruwankaththanayak@gmail.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
    window.location.href = mailtoLink;
  };
  return <section id="contact" className="py-24 bg-gray-900 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-purple-500">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10">
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <MailIcon className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">Email</h4>
                  <a href="mailto:sandaruwankaththanayak@gmail.com" className="text-purple-400 hover:underline">
                    sandaruwankaththanayak@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <PhoneIcon className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">Phone</h4>
                  <a href="tel:+94753443075" className="text-purple-400 hover:underline">
                    075 344 3075
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <MapPinIcon className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">Location</h4>
                  <p className="text-gray-300">Wattala, Sri Lanka</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-200">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a href="https://github.com/sandaruwank" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-purple-600 hover:text-white transition-colors p-3 rounded-full">
                  <GithubIcon size={24} />
                </a>
                <a href="https://www.linkedin.com/in/sandaruwan-kanchana" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-purple-600 hover:text-white transition-colors p-3 rounded-full">
                  <LinkedinIcon size={24} />
                </a>
                <a href="https://www.instagram.com/sandaruwan_kanchana_a/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-purple-600 hover:text-white transition-colors p-3 rounded-full">
                  <InstagramIcon size={24} />
                </a>
                <a href="https://web.facebook.com/sandaruwan.aththanayaka.90" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-purple-600 hover:text-white transition-colors p-3 rounded-full">
                  <FacebookIcon size={24} />
                </a>
                <a href="https://www.youtube.com/@sandaruwanaththanayaka6610" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-purple-600 hover:text-white transition-colors p-3 rounded-full">
                  <YoutubeIcon size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-300 transform translate-y-10">
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-200" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-200" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formState.subject} onChange={handleChange} required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-200" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-200" placeholder="Your message"></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className={`w-full flex justify-center items-center bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-md font-medium transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {isSubmitting ? <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </> : <>
                    <SendIcon size={18} className="mr-2" />
                    Send Message
                  </>}
              </button>
              {submitSuccess && <div className="bg-green-900 border border-green-700 text-green-300 px-4 py-3 rounded-md text-center">
                  Your message has been sent successfully!
                </div>}
            </form>
          </div>
        </div>
      </div>
    </section>;
};