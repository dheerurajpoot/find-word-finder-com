import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Complaining or Complaning - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;complaining&quot; and &quot;complaning&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ComplainingVsComplaningPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Complaining or Complaning</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;complaining&quot; or &quot;complaning&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Complaning</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Complaning&quot; is a common misspelling of &quot;complaining&quot;. Always use &quot;complaining&quot; when referring to expressing dissatisfaction.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Complaining</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Complaining&quot; is the present participle of &quot;complain&quot;, meaning to express dissatisfaction or annoyance.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Complaining&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Complaining&quot;</strong> (verb): Expressing dissatisfaction or annoyance about something.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used when someone is voicing their unhappiness or discomfort about a situation, person, or thing.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Complaining&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Grumbling</li>
                <li>• Whining</li>
                <li>• Moaning</li>
                <li>• Protesting</li>
                <li>• Objecting</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Lamenting</li>
                <li>• Criticizing</li>
                <li>• Bemoaning</li>
                <li>• Carping</li>
                <li>• Bellyaching</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;He was <span className="text-green-600 font-semibold">complaining</span> about the noise.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;He was <span className="text-red-600 font-semibold">complaning</span> about the noise.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;She kept complaining about the weather.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Complaining&quot; is the present participle of &quot;complain&quot;.</li>
          <li>• The correct ending is &quot;aining&quot;, not &quot;aning&quot;.</li>
          <li>• The pronunciation is /kəmˈpleɪnɪŋ/ (kuhm-PLAY-ning).</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;complaning&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;complaning&quot; is never correct. The only correct form is &quot;complaining&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;complaining&quot; contains &quot;ain&quot; in the middle, not just &quot;an&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the base form of &quot;complaining&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The base form is &quot;complain&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;complaining&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;complaining&quot; can be used as a gerund (verbal noun), e.g., &quot;Her constant complaining was annoying.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;complaining&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;stop complaining&quot;, &quot;complaining about&quot;, &quot;complaining loudly&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Complaining</strong> is the correct spelling, while <strong>complaning</strong> is always incorrect. Use &quot;complaining&quot; when referring to expressing dissatisfaction or annoyance.
        </p>
      </div>
    </div>
  )
} 