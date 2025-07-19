import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Commissioning or Commisioning - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;commissioning&quot; and &quot;commisioning&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CommissioningVsCommisioningPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Commissioning or Commisioning</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;commissioning&quot; and &quot;commisioning&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Commisioning</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Commisioning&quot; is a misspelling. The correct spelling is &quot;commissioning&quot; with a double &quot;s&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Commissioning</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Commissioning&quot; is the correct spelling. It refers to the act of giving an official order or authorizing the production of something, or the process of bringing something (like a ship or building) into active service or use.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Commissioning (verb/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Verb: The act of giving an official order or authorizing the production of something. Noun: The process of bringing something into active service or use.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The ship&apos;s <strong>&quot;commissioning&quot;</strong> ceremony was held last week.</li>
                  <li>• The company is <strong>&quot;commissioning&quot;</strong> a new office building.</li>
                  <li>• The artist is <strong>&quot;commissioning&quot;</strong> a mural for the city.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Commisioning:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Commisioning&quot; is a misspelling of &quot;commissioning&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Commisioning&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;commissioning&quot;</strong> when referring to the act of authorizing or bringing something into service.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Commissioning:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Authorizing</li>
                <li>• Inaugurating</li>
                <li>• Initiating</li>
                <li>• Launching</li>
                <li>• Starting</li>
                <li>• Installing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Commisioning:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>&quot;Commissioning&quot;</strong> is always spelled with a double &quot;s&quot; in the middle.</li>
            <li>• Used as both a verb and a noun in English.</li>
            <li>• Commonly refers to the act of authorizing or bringing something into service.</li>
            <li>• &quot;Commisioning&quot; is never correct in any context.</li>
            <li>• Remember: double &quot;s&quot; for the correct spelling.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;commisioning&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;commisioning&quot; is never correct. The proper spelling is always &quot;commissioning.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;commissioning&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means the act of authorizing or bringing something into service or use.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the double &quot;s&quot; in the middle: commi<strong>ss</strong>ioning.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Commissioning&quot;</strong> is the correct spelling with a double &quot;s&quot; in the middle. It refers to the act of authorizing or bringing something into service. The misspelling &quot;commisioning&quot; is never correct. Use &quot;commissioning&quot; in all contexts.</p>
      </div>
    </div>
  )
} 