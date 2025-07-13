import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Being or Beign - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;being&quot; and &quot;beign&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BeingVsBeignPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Being or Beign</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;being&quot; and &quot;beign&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Beign</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Beign&quot; is a misspelling. The correct spelling is &quot;being&quot; with the &quot;e&quot; before the &quot;i&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Being</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Being&quot; is the correct spelling. It is the present participle of the verb &quot;be&quot; and also a noun meaning existence or a living creature.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Being (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">1. (Noun) Existence; the state of existing. 2. (Noun) A living creature. 3. (Verb) The present participle of &quot;be&quot; (e.g., &quot;She is being helpful.&quot;)</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Human <strong>beings</strong> are capable of complex thought.</li>
                  <li>• He is <strong>being</strong> very patient today.</li>
                  <li>• The state of <strong>being</strong> happy is important.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Beign:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Beign&quot; is a misspelling of &quot;being&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Beign&quot; is not used in standard English.</li>
                  <li>• Always use <strong>being</strong> for the correct form.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Being:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Existence</li>
                <li>• Creature</li>
                <li>• Entity</li>
                <li>• Individual</li>
                <li>• Life form</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Beign:</h4>
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
            <li>• <strong>Being</strong> is always spelled with the &quot;e&quot; before the &quot;i&quot;.</li>
            <li>• Used as both a noun (existence, living creature) and a verb (present participle of &quot;be&quot;).</li>
            <li>• &quot;Beign&quot; is never correct in any context.</li>
            <li>• The word &quot;being&quot; is common in both formal and informal writing.</li>
            <li>• Remember: &quot;ei&quot; is not a valid combination for this word in English.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;beign&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beign&quot; is never correct. The proper spelling is always &quot;being.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;being&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It can mean existence, a living creature, or the present participle of the verb &quot;be.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;being&quot; follows the pattern of &quot;be&quot; + &quot;ing&quot; (not &quot;beign&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;being&quot; be used as a noun and a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, it is both a noun (existence, living creature) and the present participle of &quot;be&quot; (verb).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;being&quot; used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;being&quot; is common in both formal and informal contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Being</strong> is the correct spelling, with the &quot;e&quot; before the &quot;i&quot;. It is used as both a noun and a verb. The misspelling &quot;beign&quot; is never correct in English.</p>
      </div>
    </div>
  )
} 