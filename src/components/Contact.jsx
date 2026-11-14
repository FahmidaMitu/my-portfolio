import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields.');
      setSuccess('');
      return;
    }
    setError('');
    setSuccess('Thank you! Your message has been sent successfully.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
      {error && <p className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm text-center">{error}</p>}
      {success && <p className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm text-center">{success}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-xl shadow-md border border-gray-200">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition shadow-md">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;