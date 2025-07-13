import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Beaten or Beated - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;beaten&quot; and &quot;beated&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BeatenVsBeatedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Beaten or Beated</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;beaten&quot; and &quot;beated&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Beated</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Beated&quot; is a misspelling. The correct past participle of &quot;beat&quot; is &quot;beaten.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Beaten</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Beaten&quot; is the correct past participle of &quot;beat.&quot; It means to have been struck or defeated.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Beaten (past participle):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past participle of &quot;beat&quot;; to have been struck, defeated, or overcome.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The eggs were <strong>beaten</strong> until fluffy.</li>
                  <li>• Our team was <strong>beaten</strong> in the final game.</li>
                  <li>• The path was well <strong>beaten</strong> by many travelers.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Beated (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Beated&quot; is a misspelling of &quot;beaten&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Beated&quot; is not used in standard English.</li>
                  <li>• Always use <strong>beaten</strong> as the past participle of beat.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Beaten:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Defeated</li>
                <li>• Conquered</li>
                <li>• Overcome</li>
                <li>• Vanquished</li>
                <li>• Subdued</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Beated:</h4>
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
          <li>• <strong>Beaten</strong> is the correct past participle of the verb &quot;beat.&quot;</li>
          <li>• The verb &quot;beat&quot; has irregular conjugation: beat, beat, beaten.</li>
          <li>• Used in perfect tenses: has beaten, had beaten, will have beaten.</li>
          <li>• Can also be used as an adjective meaning &quot;worn down&quot; or &quot;defeated.&quot;</li>
          <li>• &quot;Beated&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;beated&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beated&quot; is never correct. The proper past participle is always &quot;beaten.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;beat&quot; + &quot;en&quot; - the past participle follows the pattern of other irregular verbs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between beat and beaten?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Beat&quot; is the present tense and simple past, while &quot;beaten&quot; is the past participle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can beaten be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;beaten&quot; can be used as an adjective meaning defeated or worn down.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;beated&quot; likely occurs because many regular verbs add &quot;-ed&quot; for past participles.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;beaten&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: beaten path, beaten down, beaten up, and beaten track.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Beaten</strong> is the correct past participle of &quot;beat.&quot; It means to have been struck, defeated, or overcome. The misspelling &quot;beated&quot; is never correct. Use &quot;beaten&quot; in perfect tenses and as an adjective.</p>
      </div>
    </div>
  )
} 