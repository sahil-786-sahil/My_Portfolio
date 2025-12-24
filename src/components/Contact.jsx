import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // EmailJS integration
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_pisees4',
          template_id: 'template_5c7meal',
          user_id: '0HUFAU-gOig2OqPFS',
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Sahil Khan',
          }
        })
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email me directly.'
      });
      console.error('EmailJS error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fadeInLeft">
            <h3 className="text-2xl font-bold mb-6">Let's talk about everything!</h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out if you want to collaborate on a project, have a question about Spring Boot or React, 
              or just want to connect and discuss tech!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:sahilkhan9170786@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                    sahilkhan9170786@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+919412666932" className="text-gray-400 hover:text-purple-400 transition-colors">
                    +91 9412666932
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">
                    Vrindavan, Mathura, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 p-6 bg-slate-800 rounded-xl border border-slate-700">
              <h4 className="font-semibold mb-4">Connect on Social Media</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/sahil-786-sahil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 hover:bg-purple-600 rounded-lg transition-all transform hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://leetcode.com/u/officialsahil____/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 hover:bg-yellow-600 rounded-lg transition-all transform hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.914-5.956-1.676-8.107.537l-1.285 1.37a.337.337 0 0 1-.388.062.335.335 0 0 1-.204-.338.336.336 0 0 1 .06-.193l3.857-4.125.001-.001 5.406-5.788A1.374 1.374 0 0 0 13.483 0z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/sahil-khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 hover:bg-blue-600 rounded-lg transition-all transform hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 animate-fadeInRight">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none text-white"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {status.message && (
                <div className={`flex items-center gap-2 p-4 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/50'
                }`}>
                  {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;