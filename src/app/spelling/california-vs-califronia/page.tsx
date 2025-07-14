import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'California or Califronia - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;California&quot; and &quot;Califronia&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CaliforniaVsCalifroniaPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">California or Califronia</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;California&quot; and &quot;Califronia&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Califronia</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Califronia&quot; is a misspelling. The correct spelling is &quot;California&quot; with &quot;forn&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: California</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;California&quot; is the correct spelling. It&apos;s the name of a state in the United States.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">California (proper noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A state in the western United States, known for its diverse geography and economy.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• <strong>California</strong> is the most populous state in the US.</li>
                  <li>• I&apos;m planning a trip to <strong>California</strong> next summer.</li>
                  <li>• <strong>California</strong> is famous for its beaches and mountains.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Califronia (proper noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Califronia&quot; is a misspelling of &quot;California&quot; and is not a valid place name.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Califronia&quot; is not used in standard English.</li>
                  <li>• Always use <strong>California</strong> when referring to the state.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">California:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• The Golden State</li>
                <li>• CA</li>
                <li>• Cali</li>
                <li>• The Sunshine State</li>
                <li>• The Bear Republic</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Califronia:</h4>
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
            <li>• <strong>California</strong> is spelled with &quot;forn&quot; in the middle, not &quot;fron&quot;.</li>
            <li>• The name comes from Spanish &quot;Californio&quot; and was first used in the 16th century.</li>
            <li>• California is the third-largest state by area in the United States.</li>
            <li>• The state is known for its diverse climate, from deserts to alpine regions.</li>
            <li>• &quot;Califronia&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;Califronia&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;Califronia&quot; is never correct. The proper spelling is always &quot;California.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;Calif-forn-ia&quot; - the &quot;forn&quot; part is key to the correct spelling.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the name California?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The name comes from Spanish &quot;Californio&quot; and was first used by Spanish explorers in the 16th century.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;Califronia&quot; likely occurs because of confusion about the &quot;forn&quot; vs &quot;fron&quot; spelling.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;California&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: California dreamin&apos;, California sunshine, and California lifestyle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can California be abbreviated?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, California is commonly abbreviated as &quot;CA&quot; or informally as &quot;Cali.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is California always capitalized?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;California&quot; is always capitalized as it&apos;s a proper noun (the name of a state).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the state motto of California?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: California&apos;s state motto is &quot;Eureka&quot; which means &quot;I have found it&quot; in Greek.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>California</strong> is the correct spelling with &quot;forn&quot; in the middle. It&apos;s the name of a state in the western United States. The misspelling &quot;Califronia&quot; is never correct. Always capitalize &quot;California&quot; as it&apos;s a proper noun.</p>
      </div>
    </div>
  )
} 