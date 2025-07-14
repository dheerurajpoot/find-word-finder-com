import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Carries or Carrys - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;carries&quot; and &quot;carrys&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CarriesVsCarrysPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Carries or Carrys</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;carries&quot; and &quot;carrys&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Carrys</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Carrys&quot; is a misspelling. The correct spelling is &quot;carries&quot; with &quot;ies&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Carries</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Carries&quot; is the correct spelling. It is the third person singular form of &quot;carry.&quot;</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Carries (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Third person singular present tense of &quot;carry&quot;; to transport or support something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>carries</strong> the heavy bags.</li>
                  <li>• The wind <strong>carries</strong> the leaves away.</li>
                  <li>• He <strong>carries</strong> the responsibility well.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Carrys (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Carrys&quot; is a misspelling of &quot;carries&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Carrys&quot; is not used in standard English.</li>
                  <li>• Always use <strong>carries</strong> when referring to third person singular.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Carries:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Transports</li>
                <li>• Bears</li>
                <li>• Holds</li>
                <li>• Supports</li>
                <li>• Conveys</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Carrys:</h4>
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
            <li>• <strong>Carries</strong> is spelled with &quot;ies&quot; at the end, not &quot;ys.&quot;</li>
            <li>• The word is the third person singular present tense of &quot;carry.&quot;</li>
            <li>• Can be used in various contexts including physical transport and abstract concepts.</li>
            <li>• Often used in everyday conversation and formal writing.</li>
            <li>• &quot;Carrys&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;carrys&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carrys&quot; is never correct. The proper spelling is always &quot;carries.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;carry&quot; + &quot;ies&quot; - the word ends with &quot;ies&quot; like other third person singular verbs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between carries and carry?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to the same action, but &quot;carries&quot; is third person singular while &quot;carry&quot; is the base form.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;carrys&quot; likely occurs because people forget the &quot;i&quot; before &quot;es.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;carries&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: carries on, carries out, and carries forward.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can carries be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carries&quot; is only used as a verb. The noun form would be &quot;carry&quot; or &quot;carriage.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is carries only used for physical objects?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carries&quot; can be used for physical objects, ideas, responsibilities, or emotions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word carries?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Old French &quot;carier&quot; and was first used in English in the 14th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Carries</strong> is the correct spelling with &quot;ies&quot; at the end. It is the third person singular present tense form of &quot;carry&quot; and means to transport or support something. The misspelling &quot;carrys&quot; is never correct. Use &quot;carries&quot; to refer to actions performed by he, she, or it in various contexts.</p>
      </div>
    </div>
  )
} 