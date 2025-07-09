import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Apply or Aply - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;apply&quot; and &quot;aply&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ApplyVsAplyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Apply or Aply</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;apply&quot; and &quot;aply&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aply</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aply&quot; is a misspelling. The correct spelling is &quot;apply&quot; with two &quot;p&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Apply</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Apply&quot; is the correct spelling. It means to make a formal request or to put something to use.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Apply (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To make a formal request for something; to put something to use; to spread or lay on a surface.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I want to <strong>apply</strong> for the scholarship.</li>
                  <li>• Please <strong>apply</strong> the cream to your skin.</li>
                  <li>• You should <strong>apply</strong> what you have learned.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Aply (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Aply&quot; is a misspelling of &quot;apply&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Aply&quot; is not used in standard English.</li>
                  <li>• Always use <strong>apply</strong> when referring to requests or usage.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Apply:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Request</li>
                <li>• Use</li>
                <li>• Employ</li>
                <li>• Utilize</li>
                <li>• Submit</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Aply:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Apply</strong> is spelled with two &quot;p&quot;s, not one.</li>
            <li>• Used as a verb for making requests or putting something to use.</li>
            <li>• Can mean to spread something on a surface or to use knowledge.</li>
            <li>• The word comes from Latin &quot;applicare&quot; meaning to attach or put to use.</li>
            <li>• &quot;Aply&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aply&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aply&quot; is never correct. The proper spelling is always &quot;apply&quot; with two &quot;p&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ap-ply&quot; - the double &quot;p&quot; is important in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between apply and application?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Apply&quot; is the verb (to make a request or use something), while &quot;application&quot; is the noun (the request or thing used).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apply be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;apply&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aply&quot; likely occurs because of confusion about the double &quot;p&quot; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;apply&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: apply for a job, apply pressure, apply knowledge, and apply paint.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you pronounce apply?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The correct pronunciation is /əˈplaɪ/ (uh-PLY).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Apply</strong> is the correct spelling with two &quot;p&quot;s. It means to make a request, put something to use, or spread on a surface. The misspelling &quot;aply&quot; is never correct. Use &quot;apply&quot; for job requests, using knowledge, or practical actions.</p>
      </div>
    </div>
  )
} 