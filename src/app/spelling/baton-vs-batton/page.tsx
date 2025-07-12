import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Baton or Batton - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;baton&quot; and &quot;batton&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BatonVsBattonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Baton or Batton</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;baton&quot; and &quot;batton&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Batton</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Batton&quot; is a misspelling. The correct spelling is &quot;baton&quot; with one &quot;t&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Baton</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Baton&quot; is the correct spelling. It refers to a stick or rod used for various purposes.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Baton (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A stick or rod used by conductors, police officers, or in relay races; also a short stick used for various purposes.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The conductor waved his <strong>baton</strong> to lead the orchestra.</li>
                  <li>• The police officer carried a <strong>baton</strong> for protection.</li>
                  <li>• The relay runner passed the <strong>baton</strong> to his teammate.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Batton (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Batton&quot; is a misspelling of &quot;baton&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Batton&quot; is not used in standard English.</li>
                  <li>• Always use <strong>baton</strong> when referring to sticks or rods.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Baton:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Stick</li>
                <li>• Rod</li>
                <li>• Wand</li>
                <li>• Staff</li>
                <li>• Club</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Batton:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Baton</strong> is spelled with one &quot;t&quot;, not two.</li>
          <li>• The word comes from French &quot;bâton&quot; meaning stick or rod.</li>
          <li>• Used in music, law enforcement, sports, and various other contexts.</li>
          <li>• Can refer to different types of sticks depending on context.</li>
          <li>• &quot;Batton&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;batton&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;batton&quot; is never correct. The proper spelling is always &quot;baton.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bat&quot; + &quot;on&quot; - like a bat that&apos;s on something, with one &quot;t&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between baton and stick?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A baton is a specific type of stick used for particular purposes, while stick is a more general term.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can baton be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;baton&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;batton&quot; likely occurs because of confusion about the number of &quot;t&quot;s or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;baton&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: baton twirling, baton charge, baton pass, and baton round.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Baton</strong> is the correct spelling with one &quot;t&quot;. It refers to a stick or rod used for various purposes. The misspelling &quot;batton&quot; is never correct.</p>
      </div>
    </div>
  )
} 