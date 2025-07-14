import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Business or Buisiness - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;business&quot; and &quot;buisiness&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BusinessVsBuisinessPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Business or Buisiness</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;business&quot; and &quot;buisiness&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Buisiness</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Buisiness&quot; is a misspelling. The correct spelling is &quot;business&quot; with &quot;bus&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Business</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Business&quot; is the correct spelling. It refers to commercial activities or a company.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Business (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Commercial activity, trade, or a company engaged in commerce.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She started her own <strong>business</strong> last year.</li>
                  <li>• The <strong>business</strong> is doing well this quarter.</li>
                  <li>• He&apos;s in the restaurant <strong>business</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Buisiness (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Buisiness&quot; is a misspelling of &quot;business&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Buisiness&quot; is not used in standard English.</li>
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
                <li>• Company</li>
                <li>• Enterprise</li>
                <li>• Firm</li>
                <li>• Organization</li>
                <li>• Trade</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Buisiness:</h4>
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
            <li>• <strong>Business</strong> is spelled with &quot;bus&quot; at the beginning, not &quot;bui.&quot;</li>
            <li>• The word comes from Old English &quot;bisignes&quot; meaning busyness or occupation.</li>
            <li>• &quot;Business&quot; can refer to both commercial activities and personal matters.</li>
            <li>• &quot;Buisiness&quot; is never correct in any context.</li>
            <li>• The pronunciation is /ˈbɪznəs/ with a silent &quot;u.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;buisiness&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;buisiness&quot; is never correct. The proper spelling is always &quot;business.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bus-iness&quot; - like being busy with commercial activities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between business and company?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Business&quot; is broader and can refer to any commercial activity, while &quot;company&quot; specifically refers to an organization.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can business be used in plural form?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;businesses&quot; is the correct plural form of business.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;buisiness&quot; likely occurs because of confusion about the silent &quot;u&quot; or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;business&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: business plan, business owner, business meeting, and mind your own business.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can business be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;business&quot; can be used as an adjective, as in &quot;business card&quot; or &quot;business hours.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is business always about commerce?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;business&quot; can also refer to personal matters or affairs, as in &quot;none of your business.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Business</strong> is the correct spelling with &quot;bus&quot; at the beginning. It refers to commercial activities, companies, or personal matters. The misspelling &quot;buisiness&quot; is never correct. Use &quot;business&quot; for all contexts involving commercial or organizational activities.</p>
      </div>
    </div>
  )
} 