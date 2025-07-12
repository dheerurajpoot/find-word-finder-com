import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Acquisition or Acquistion - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;acquisition&quot; and &quot;acquistion&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AcquisitionVsAcquistionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Acquisition or Acquistion</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;acquisition&quot; and &quot;acquistion&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Acquistion</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Acquistion&quot; is a misspelling. The correct spelling is &quot;acquisition&quot; with &quot;acquis&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Acquisition</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Acquisition&quot; is the correct spelling. It refers to the act of acquiring or gaining possession of something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Acquisition (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The act of acquiring or gaining possession of something; something that has been acquired.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>acquisition</strong> of new skills is important.</li>
                  <li>• The company made a major <strong>acquisition</strong>.</li>
                  <li>• The museum&apos;s latest <strong>acquisition</strong> is a rare painting.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Acquistion (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Acquistion&quot; is a misspelling of &quot;acquisition&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Acquistion&quot; is not used in standard English.</li>
                  <li>• Always use <strong>acquisition</strong> when referring to gaining possession.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Acquisition:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Purchase</li>
                <li>• Procurement</li>
                <li>• Obtainment</li>
                <li>• Addition</li>
                <li>• Gain</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Acquistion:</h4>
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
          <li>• <strong>Acquisition</strong> is spelled with &quot;acquis&quot; at the beginning, not &quot;acquis&quot;.</li>
          <li>• The word comes from &quot;acquire&quot; + &quot;sition&quot; suffix.</li>
          <li>• Used in business, education, and general contexts.</li>
          <li>• Often refers to formal purchases or additions.</li>
          <li>• &quot;Acquistion&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;acquistion&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;acquistion&quot; is never correct. The proper spelling is always &quot;acquisition.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;acquire&quot; + &quot;sition&quot; - like &quot;acquire&quot; with &quot;sition&quot; ending, with &quot;acquis&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between acquisition and purchase?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Acquisition&quot; is broader and can include non-monetary gains, while &quot;purchase&quot; specifically refers to buying.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can acquisition be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;acquisition&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;acquistion&quot; likely occurs because of confusion about the spelling of the root word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;acquisition&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: language acquisition, company acquisition, data acquisition, and acquisition cost.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Acquisition</strong> is the correct spelling with &quot;acquis&quot; at the beginning. It refers to the act of acquiring or gaining possession of something. The misspelling &quot;acquistion&quot; is never correct.</p>
      </div>
    </div>
  )
} 