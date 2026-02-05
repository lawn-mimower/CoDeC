'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function AboutPage() {
  const [about, setAbout] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAbout()
  }, [])

  async function fetchAbout() {
    const { data, error } = await supabase
      .from('about_us')
      .select('*')
      .single()

    if (error) {
      console.error('Error fetching about us:', error)
    } else {
      setAbout(data)
    }
    setLoading(false)
  }

  if (loading) return <div className="p-8">Loading...</div>

  if (!about) return <div className="p-8">About info not found.</div>

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        {about.heading}
      </h1>

      <div className="text-lg leading-relaxed whitespace-pre-line">
        {about.content}
      </div>
    </div>
  )
}
