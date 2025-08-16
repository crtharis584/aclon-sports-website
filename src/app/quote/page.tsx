import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { QuoteSection } from '@/components/QuoteSection'

export const metadata: Metadata = {
  title: 'Request a Quote - Aclon Sports',
  description: 'Get a custom quote for your sports apparel and team uniform needs. Fill out our form and receive competitive pricing within 24 hours.',
  keywords: 'quote request, custom pricing, bulk orders, team uniforms, sports apparel, competitive pricing',
  openGraph: {
    title: 'Request a Quote - Aclon Sports',
    description: 'Get a custom quote for your sports apparel and team uniform needs.',
    type: 'website',
  },
}

export default function QuotePage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      <QuoteSection 
        title="Request a Quote"
        subtitle="Get competitive pricing for your sports apparel and team uniform needs. Fill out the form below and we'll provide you with a custom quote within 24 hours."
        submitEmail="quotes@aclonsports.com"
      />
    </main>
  )
}
