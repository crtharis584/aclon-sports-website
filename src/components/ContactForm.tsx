'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void
  submitEmail?: string
  placeholders?: {
    name?: string
    email?: string
    subject?: string
    message?: string
  }
  buttonText?: string
  className?: string
}

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactForm({
  onSubmit,
  submitEmail = 'contact@aclonsports.com',
  placeholders = {
    name: 'Your Name',
    email: 'Your Email',
    subject: 'Subject (Optional)',
    message: 'Your Message'
  },
  buttonText = 'Send Message',
  className = ''
}: ContactFormProps) {
  const { theme } = useTheme()
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // If custom onSubmit is provided, use it
      if (onSubmit) {
        onSubmit(formData)
      } else {
        // Default email submission
        const mailtoLink = `mailto:${submitEmail}?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
        window.location.href = mailtoLink
      }
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`space-y-6 ${className}`}
      role="form"
      aria-label="Contact form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2"
          style={{
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
        >
          Name *
        </label>
        <motion.input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          placeholder={placeholders.name}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
            errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
          style={{
            backgroundColor: theme === 'dark' ? '#111111' : '#FFFFFF',
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
          variants={inputVariants}
          whileFocus="focus"
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <motion.p
            id="name-error"
            className="mt-1 text-sm text-red-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
          >
            {errors.name}
          </motion.p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2"
          style={{
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
        >
          Email *
        </label>
        <motion.input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          placeholder={placeholders.email}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
            errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
          style={{
            backgroundColor: theme === 'dark' ? '#111111' : '#FFFFFF',
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
          variants={inputVariants}
          whileFocus="focus"
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <motion.p
            id="email-error"
            className="mt-1 text-sm text-red-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
          >
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium mb-2"
          style={{
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
        >
          Subject
        </label>
        <motion.input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={(e) => handleInputChange('subject', e.target.value)}
          placeholder={placeholders.subject}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          style={{
            backgroundColor: theme === 'dark' ? '#111111' : '#FFFFFF',
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
          variants={inputVariants}
          whileFocus="focus"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2"
          style={{
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
        >
          Message *
        </label>
        <motion.textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          placeholder={placeholders.message}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 resize-vertical ${
            errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
          style={{
            backgroundColor: theme === 'dark' ? '#111111' : '#FFFFFF',
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
          variants={inputVariants}
          whileFocus="focus"
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <motion.p
            id="message-error"
            className="mt-1 text-sm text-red-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-4 text-lg font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[56px]"
        style={{
          backgroundColor: '#FF0000',
          color: '#FFFFFF'
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={(e) => {
          if (!isSubmitting && e.currentTarget instanceof HTMLElement) {
            e.currentTarget.style.backgroundColor = '#CC0000'
          }
        }}
        onHoverEnd={(e) => {
          if (!isSubmitting && e.currentTarget instanceof HTMLElement) {
            e.currentTarget.style.backgroundColor = '#FF0000'
          }
        }}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </div>
        ) : (
          buttonText
        )}
      </motion.button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          className="p-4 rounded-lg bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-green-800 dark:text-green-200 font-medium">
              Message sent successfully! We'll get back to you soon.
            </span>
          </div>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          className="p-4 rounded-lg bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span className="text-red-800 dark:text-red-200 font-medium">
              Something went wrong. Please try again or contact us directly.
            </span>
          </div>
        </motion.div>
      )}
    </motion.form>
  )
}
