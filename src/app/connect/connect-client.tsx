'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';

export default function ConnectClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setResponseMsg(data.message);
        setFormData({ name: '', email: '', interest: 'General Inquiry', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error: any) {
      setStatus('error');
      setResponseMsg(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-background text-slate-900 dark:text-foreground pt-32 pb-20 overflow-hidden font-sans transition-colors duration-500">

      {/* Vibrant Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400/20 dark:bg-emerald-600/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.4em] text-[10px] font-bold mb-6 text-blue-600 dark:text-blue-400">Get in touch</p>
            <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tighter leading-none mb-8 text-slate-950 dark:text-white">
              Let's build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400 italic">together.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-foreground/60 font-light leading-relaxed mb-12 max-w-lg">
              Whether you have a question about our ventures, a partnership proposal, or just want to say hello, our team is ready to connect.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-foreground/5 shadow-sm dark:shadow-none flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-foreground/40 mb-1">Email us</p>
                  <a href="mailto:hello@fivezeroeight.org" className="text-xl font-medium text-slate-900 dark:text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors">hello@fivezeroeight.org</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-foreground/5 shadow-sm dark:shadow-none flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-foreground/40 mb-1">Call us</p>
                  <a href="tel:+233000000000" className="text-xl font-medium text-slate-900 dark:text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">+233 (0) 508 000 000</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-foreground/5 shadow-sm dark:shadow-none flex items-center justify-center text-orange-500 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-foreground/40 mb-1">Visit us</p>
                  <p className="text-xl font-medium text-slate-900 dark:text-foreground">Accra, Ghana</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Instagram size={20} />, label: 'Instagram', color: 'hover:text-pink-600' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn', color: 'hover:text-blue-700 dark:hover:text-blue-400' },
                { icon: <Twitter size={20} />, label: 'Twitter', color: 'hover:text-blue-400' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={`w-12 h-12 rounded-full bg-white dark:bg-foreground/5 shadow-sm dark:shadow-none flex items-center justify-center text-slate-400 dark:text-foreground/40 ${social.color} hover:shadow-md transition-all duration-300`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-foreground/[0.03] p-8 md:p-12 rounded-[40px] shadow-2xl shadow-blue-900/5 dark:shadow-none border border-transparent dark:border-foreground/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-600/5 rounded-bl-[100px]"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle size={64} className="text-emerald-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-slate-500 dark:text-foreground/60">{responseMsg}</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-8 text-blue-600 font-bold uppercase tracking-widest text-xs"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-foreground/40 ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-6 py-4 bg-slate-50 dark:bg-foreground/5 border-none rounded-2xl focus:ring-2 focus:ring-blue-600/20 focus:bg-white dark:focus:bg-foreground/10 transition-all outline-none text-slate-900 dark:text-foreground"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-foreground/40 ml-1">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-6 py-4 bg-slate-50 dark:bg-foreground/5 border-none rounded-2xl focus:ring-2 focus:ring-blue-600/20 focus:bg-white dark:focus:bg-foreground/10 transition-all outline-none text-slate-900 dark:text-foreground"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-foreground/40 ml-1">Interest</label>
                      <select 
                        value={formData.interest}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-foreground/5 border-none rounded-2xl focus:ring-2 focus:ring-blue-600/20 focus:bg-white dark:focus:bg-foreground/10 transition-all outline-none text-slate-900 dark:text-foreground appearance-none"
                      >
                        <option>General Inquiry</option>
                        <option>Partnership Proposal</option>
                        <option>Investments</option>
                        <option>Careers</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-foreground/40 ml-1">Message</label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="Tell us about your vision..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-foreground/5 border-none rounded-2xl focus:ring-2 focus:ring-blue-600/20 focus:bg-white dark:focus:bg-foreground/10 transition-all outline-none text-slate-900 dark:text-foreground resize-none"
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 dark:bg-red-500/10 p-4 rounded-xl">
                        <AlertCircle size={16} />
                        {responseMsg}
                      </div>
                    )}

                    <button 
                      disabled={status === 'loading'}
                      className="w-full py-5 bg-slate-900 dark:bg-foreground text-white dark:text-background rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-blue-600 dark:hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message'} <Send size={16} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
