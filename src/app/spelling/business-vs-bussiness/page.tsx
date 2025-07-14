import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Business or Bussiness - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;business&quot; and &quot;bussiness&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BusinessVsBussinessPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Business or Bussiness</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;business&quot; and &quot;bussiness&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bussiness</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bussiness&quot; is a misspelling. The correct spelling is &quot;business&quot; with an &quot;i&quot; before the final &quot;ness.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Business</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Business&quot; is the correct spelling. It refers to commercial, professional, or industrial activities.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Business (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Commercial, professional, or industrial activities; a commercial enterprise or establishment.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She started her own <strong>business</strong> last year.</li>
                  <li>• The <strong>business</strong> meeting lasted two hours.</li>
                  <li>• He&apos;s in the restaurant <strong>business</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bussiness (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bussiness&quot; is a misspelling of &quot;business&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bussiness&quot; is not used in standard English.</li>
                  <li>• Always use <strong>business</strong> when referring to commercial activities.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Business:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Commerce</li>
                <li>• Trade</li>
                <li>• Enterprise</li>
                <li>• Company</li>
                <li>• Firm</li>
                <li>• Industry</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bussiness:</h4>
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
            <li>• <strong>Business</strong> is spelled with an &quot;i&quot; before the final &quot;ness.&quot;</li>
            <li>• The word comes from Old English &quot;bisignes&quot; meaning anxiety or care.</li>
            <li>• Used in both formal and informal contexts.</li>
            <li>• Can refer to commercial activities, professional matters, or personal affairs.</li>
            <li>• &quot;Bussiness&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bussiness&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bussiness&quot; is never correct. The proper spelling is always &quot;business.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;busy-ness&quot; - the word comes from being busy, so it has an &quot;i&quot; before &quot;ness.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the plural form of business?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The plural form is &quot;businesses&quot; - add &quot;es&quot; to the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of business?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Business can refer to commercial activities, a company, professional matters, or personal affairs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;bussiness&quot; likely occurs because of pronunciation patterns or confusion about the &quot;i&quot; before &quot;ness.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;business&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: business plan, business meeting, business card, and mind your own business.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can business be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;business&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between business and busyness?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Business&quot; refers to commercial activities, while &quot;busyness&quot; refers to the state of being busy or occupied.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Business</strong> is the correct spelling with an &quot;i&quot; before the final &quot;ness.&quot; It refers to commercial, professional, or industrial activities. The misspelling &quot;bussiness&quot; is never correct. Think of it as &quot;busy-ness&quot; to remember the correct spelling.</p>
      </div>
    </div>
  )
} 