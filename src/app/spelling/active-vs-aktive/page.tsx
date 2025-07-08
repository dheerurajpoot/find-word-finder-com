import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Active or Aktive - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;active&quot; and &quot;aktive&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ActiveVsAktivePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Active or Aktive</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;active&quot; or &quot;aktive&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aktive</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aktive&quot; is a common misspelling. The correct spelling is &quot;active&quot; with a &apos;c&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Active</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Active&quot; is the correct spelling. It means engaging or ready to engage in physically energetic pursuits, or taking action rather than waiting.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Active</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Active</strong> (adjective): Engaging or ready to engage in physically energetic pursuits; taking action rather than waiting.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She leads an <strong>active</strong> lifestyle.</li>
              <li>• The volcano is still <strong>active</strong>.</li>
              <li>• He is an <strong>active</strong> member of the community.</li>
              <li>• The children were <strong>active</strong> all day.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Active</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Energetic</li>
                <li>• Lively</li>
                <li>• Dynamic</li>
                <li>• Busy</li>
                <li>• Vigorous</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Involved</li>
                <li>• Engaged</li>
                <li>• Participating</li>
                <li>• Productive</li>
                <li>• Industrious</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Active</strong> is spelled with a &apos;c&apos;, not &quot;k&quot;.</li>
            <li>• Used to describe people, things, or situations that are energetic or involved.</li>
            <li>• Commonly used in health, science, and everyday contexts.</li>
            <li>• The noun form is &quot;activity&quot;.</li>
            <li>• The opposite is &quot;inactive&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aktive&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aktive&quot; is never correct. The proper spelling is always &quot;active&quot; with a &apos;c&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;active&quot; has a &apos;c&apos; in the middle, not &quot;k&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;active&quot; describe a volcano?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, an &quot;active&quot; volcano is one that is erupting or has the potential to erupt.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;active&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: active lifestyle, active participant, active duty, active ingredient.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aktive&quot; happens because the &apos;c&apos; is sometimes replaced with a &apos;k&apos; due to phonetic similarity.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Active</strong> is the correct spelling with a &apos;c&apos;. It means energetic, involved, or taking action. The misspelling &quot;aktive&quot; is never correct. Use &quot;active&quot; in health, science, and everyday contexts.</p>
      </div>
    </div>
  )
} 