import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Accompanying or Accompaning - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;accompanying&quot; and &quot;accompaning&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AccompanyingVsAccompaningPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Accompanying or Accompaning</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;accompanying&quot; and &quot;accompaning&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Accompaning</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Accompaning&quot; is a misspelling. The correct spelling is &quot;accompanying&quot; with &quot;y&quot; before &quot;ing.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Accompanying</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Accompanying&quot; is the correct spelling. It means going along with or being present with someone or something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Accompanying (adjective/participle):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Going along with, being present with, or occurring together with someone or something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>accompanying</strong> music enhanced the performance.</li>
                  <li>• She brought her <strong>accompanying</strong> documents to the meeting.</li>
                  <li>• The <strong>accompanying</strong> symptoms were concerning.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Accompaning (adjective/participle):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Accompaning&quot; is a misspelling of &quot;accompanying&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Accompaning&quot; is not used in standard English.</li>
                  <li>• Always use <strong>accompanying</strong> when referring to going along with something.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Accompanying:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Associated</li>
                <li>• Related</li>
                <li>• Connected</li>
                <li>• Linked</li>
                <li>• Attached</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Accompaning:</h4>
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
            <li>• <strong>Accompanying</strong> is spelled with &quot;y&quot; before &quot;ing&quot; (accompany + ing).</li>
            <li>• The word comes from the verb &quot;accompany&quot; + the suffix &quot;-ing.&quot;</li>
            <li>• Used to describe something that goes along with or is present with another thing.</li>
            <li>• Common in both formal and informal writing.</li>
            <li>• &quot;Accompaning&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;accompaning&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;accompaning&quot; is never correct. The proper spelling is always &quot;accompanying.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;accompany + ing&quot; - the base word &quot;accompany&quot; plus the suffix &quot;-ing.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between accompanying and related?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Accompanying&quot; means going along with, while &quot;related&quot; means connected or associated.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can accompanying be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;accompanying&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;accompaning&quot; likely occurs because of confusion about the &quot;y&quot; vs &quot;i&quot; spelling.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;accompanying&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: accompanying documents, accompanying music, accompanying symptoms, and accompanying materials.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Accompanying</strong> is the correct spelling with &quot;y&quot; before &quot;ing.&quot; It means going along with or being present with someone or something. The misspelling &quot;accompaning&quot; is never correct. Use &quot;accompanying&quot; to describe something that goes along with or is present with another thing.</p>
      </div>
    </div>
  )
} 