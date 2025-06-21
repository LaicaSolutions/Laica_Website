import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const useContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form data:', formData);
    console.log('Form ref:', formRef.current);

    if (!formRef.current) {
      setFormStatus({ submitted: true, error: true, message: 'Form reference not found!' });
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ submitted: true, error: true, message: 'All fields are required!' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ submitted: true, error: true, message: 'Please enter a valid email address!' });
      return;
    }

    console.log('Form data:', formData);
    console.log('Form ref:', formRef.current);

    emailjs.sendForm(
      'service_063rnqb',
      'template_t6d6jxo',
      formRef.current,
      { publicKey: 'glQUySQF788DIjDPY' }
    ).then(() => {
      setFormStatus({ submitted: true, error: false, message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setFormStatus({ submitted: false, error: false, message: '' }), 5000);
    }).catch((error) => {
      console.error('EmailJS error:', error);
      setFormStatus({ submitted: true, error: true, message: 'Something went wrong. Please try again.' });
    });
  };

  return { formData, formStatus, handleChange, handleSubmit, formRef };
};

export default useContactForm;
