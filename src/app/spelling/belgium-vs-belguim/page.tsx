import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Belgium or Belguim - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;Belgium&quot; and &quot;Belguim&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BelgiumVsBelguimPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Belgium or Belguim</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;Belgium&quot; and &quot;Belguim&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Belguim</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Belguim&quot; is a misspelling. The correct spelling is &quot;Belgium&quot; with &quot;m&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Belgium</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Belgium&quot; is the correct spelling. It refers to a country in Western Europe.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Belgium (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A country in Western Europe, bordered by France, Germany, Luxembourg, and the Netherlands.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• <strong>Belgium</strong> is known for its chocolate.</li>
                  <li>• Brussels is the capital of <strong>Belgium</strong>.</li>
                  <li>• I visited <strong>Belgium</strong> last summer.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Belguim (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Belguim&quot; is a misspelling of &quot;Belgium&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Belguim&quot; is not used in standard English.</li>
                  <li>• Always use <strong>Belgium</strong> when referring to the country.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Belgium:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Belgian Kingdom</li>
                <li>• Low Countries</li>
                <li>• Benelux</li>
                <li>• Western Europe</li>
                <li>• European Union</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Belguim:</h4>
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
            <li>• <strong>Belgium</strong> is spelled with &quot;m&quot; at the end, not &quot;n&quot;.</li>
            <li>• The word comes from Latin &quot;Belgica&quot; meaning the land of the Belgae.</li>
            <li>• Used as a proper noun (country name).</li>
            <li>• Common in geography, travel, and European discussions.</li>
            <li>• &quot;Belguim&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;belguim&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;belguim&quot; is never correct. The proper spelling is always &quot;Belgium.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;Bel&quot; + &quot;gium&quot; - the word ends with &quot;m&quot; like &quot;museum&quot; or &quot;forum.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between Belgium and Belgian?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Belgium&quot; is the country name, while &quot;Belgian&quot; is the adjective or noun referring to people from Belgium.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can Belgium be used in lowercase?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;Belgium&quot; should always be capitalized as it&apos;s a proper noun (country name).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation patterns or confusion with similar words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;Belgium&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: Belgian chocolate, Belgian waffles, Belgian beer, Belgian fries, and Belgian lace.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Belgium</strong> is the correct spelling with &quot;m&quot; at the end. It refers to a country in Western Europe. The misspelling &quot;belguim&quot; is never correct. Use &quot;Belgium&quot; when referring to the country, its culture, or anything related to this European nation.</p>
      </div>
    </div>
  )
} 