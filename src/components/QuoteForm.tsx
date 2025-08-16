'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { categories } from '@/data/products'

interface QuoteFormProps {
  onSubmit?: (data: QuoteFormData) => void
  submitEmail?: string
  placeholders?: {
    name?: string
    email?: string
    phone?: string
    quantity?: string
    message?: string
  }
  buttonText?: string
  className?: string
}

interface QuoteFormData {
  name: string
  email: string
  phone: string
  productCategory: string
  productSubcategory: string
  quantity: string
  customRequirements: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  productCategory?: string
  quantity?: string
}

export function QuoteForm({
  onSubmit,
  submitEmail = 'quotes@aclonsports.com',
  placeholders = {
    name: 'Your Full Name',
    email: 'Your Email Address',
    phone: 'Your Phone Number (Optional)',
    quantity: 'Quantity Needed',
    message: 'Additional Requirements or Special Instructions'
  },
  buttonText = 'Request Quote',
  className = ''
}: QuoteFormProps) {
  const { theme } = useTheme()
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    productCategory: '',
    productSubcategory: '',
    quantity: '',
    customRequirements: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Get subcategories based on selected category
  const getSubcategories = (category: string) => {
    const selectedCategory = categories.find(cat => cat.name === category)
    return selectedCategory?.subcategories || []
  }

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

    // Phone validation (optional but if provided, must be valid)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
      if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number'
      }
    }

    // Product category validation
    if (!formData.productCategory) {
      newErrors.productCategory = 'Please select a product category'
    }

    // Quantity validation
    if (!formData.quantity.trim()) {
      newErrors.quantity = 'Quantity is required'
    } else {
      const quantity = parseInt(formData.quantity)
      if (isNaN(quantity) || quantity <= 0) {
        newErrors.quantity = 'Please enter a valid quantity (minimum 1)'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof QuoteFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }

    // Reset subcategory when category changes
    if (field === 'productCategory') {
      setFormData(prev => ({ ...prev, productSubcategory: '' }))
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
        const subject = `Quote Request - ${formData.productCategory}`
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Product Category: ${formData.productCategory}
Product Subcategory: ${formData.productSubcategory || 'Not specified'}
Quantity: ${formData.quantity}

Custom Requirements: ${formData.customRequirements || 'None specified'}

Additional Message: ${formData.message || 'None'}

---
This quote request was submitted through the Aclon Sports website.
        `.trim()
        
        const mailtoLink = `mailto:${submitEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.location.href = mailtoLink
      }
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        productCategory: '',
        productSubcategory: '',
        quantity: '',
        customRequirements: '',
        message: ''
      })
      
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
      aria-label="Quote request form"
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
          Full Name *
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
          Email Address *
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

      {/* Phone Field */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium mb-2"
          style={{
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
        >
          Phone Number
        </label>
        <motion.input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder={placeholders.phone}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
            errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
          style={{
            backgroundColor: theme === 'dark' ? '#111111' : '#FFFFFF',
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
          variants={inputVariants}
          whileFocus="focus"
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <motion.p
            id="phone-error"
            className="mt-1 text-sm text-red-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
          >
            {errors.phone}
          </motion.p>
        )}
      </div>

      {/* Product Category Field */}
      <div>
        <label
          htmlFor="productCategory"
          className="block text-sm font-medium mb-2"
          style={{
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
        >
          Product Category *
        </label>
        <motion.select
          id="productCategory"
          value={formData.productCategory}
          onChange={(e) => handleInputChange('productCategory', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
            errors.productCategory ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
          style={{
            backgroundColor: theme === 'dark' ? '#111111' : '#FFFFFF',
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
          variants={inputVariants}
          whileFocus="focus"
          aria-describedby={errors.productCategory ? 'category-error' : undefined}
          aria-invalid={!!errors.productCategory}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </motion.select>
        {errors.productCategory && (
          <motion.p
            id="category-error"
            className="mt-1 text-sm text-red-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
          >
            {errors.productCategory}
          </motion.p>
        )}
      </div>

      {/* Product Subcategory Field */}
      {formData.productCategory && (
        <div>
          <label
            htmlFor="productSubcategory"
            className="block text-sm font-medium mb-2"
            style={{
              color: theme === 'dark' ? '#FFFFFF' : '#000000'
            }}
          >
            Product Subcategory
          </label>
          <motion.select
            id="productSubcategory"
            value={formData.productSubcategory}
            onChange={(e) => handleInputChange('productSubcategory', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            style={{
              backgroundColor: theme === 'dark' ? '#111111' : '#FFFFFF',
              color: theme === 'dark' ? '#FFFFFF' : '#000000'
            }}
            variants={inputVariants}
            whileFocus="focus"
          >
            <option value="">Select a subcategory (optional)</option>
            {getSubcategories(formData.productCategory).map((subcategory) => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </motion.select>
        </div>
      )}

      {/* Quantity Field */}
      <div>
        <label
          htmlFor="quantity"
          className="block text-sm font-medium mb-2"
          style={{
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
        >
          Quantity Needed *
        </label>
        <motion.input
          id="quantity"
          type="number"
          min="1"
          value={formData.quantity}
          onChange={(e) => handleInputChange('quantity', e.target.value)}
          placeholder={placeholders.quantity}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
            errors.quantity ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
          style={{
            backgroundColor: theme === 'dark' ? '#111111' : '#FFFFFF',
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
          variants={inputVariants}
          whileFocus="focus"
          aria-describedby={errors.quantity ? 'quantity-error' : undefined}
          aria-invalid={!!errors.quantity}
        />
        {errors.quantity && (
          <motion.p
            id="quantity-error"
            className="mt-1 text-sm text-red-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
          >
            {errors.quantity}
          </motion.p>
        )}
      </div>

      {/* Custom Requirements Field */}
      <div>
        <label
          htmlFor="customRequirements"
          className="block text-sm font-medium mb-2"
          style={{
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
        >
          Custom Requirements
        </label>
        <motion.textarea
          id="customRequirements"
          value={formData.customRequirements}
          onChange={(e) => handleInputChange('customRequirements', e.target.value)}
          placeholder="Size specifications, color preferences, customization needs, etc."
          rows={3}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 resize-vertical"
          style={{
            backgroundColor: theme === 'dark' ? '#111111' : '#FFFFFF',
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
          variants={inputVariants}
          whileFocus="focus"
        />
      </div>

      {/* Additional Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2"
          style={{
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
        >
          Additional Details
        </label>
        <motion.textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          placeholder={placeholders.message}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 resize-vertical"
          style={{
            backgroundColor: theme === 'dark' ? '#111111' : '#FFFFFF',
            color: theme === 'dark' ? '#FFFFFF' : '#000000'
          }}
          variants={inputVariants}
          whileFocus="focus"
        />
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
            Processing...
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
              Quote request submitted successfully! We'll get back to you within 24 hours.
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
