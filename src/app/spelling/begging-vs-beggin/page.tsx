import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Begging or Beggin - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;begging&quot; and &quot;beggin&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BeggingVsBegginPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Begging or Beggin</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;begging&quot; and &quot;beggin&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Beggin</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Beggin&quot; is a misspelling. The correct spelling is &quot;begging&quot; with double &quot;g&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Begging</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Begging&quot; is the correct spelling. It is the present participle of the verb &quot;beg.&quot;</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Begging (verb, present participle):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The act of asking for something earnestly or humbly, especially for charity or mercy.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He was <strong>begging</strong> for forgiveness.</li>
                  <li>• The dog was <strong>begging</strong> for food.</li>
                  <li>• She was <strong>begging</strong> him to stay.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Beggin (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Beggin&quot; is a misspelling of &quot;begging&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Beggin&quot; is not used in standard English.</li>
                  <li>• Always use <strong>begging</strong> when referring to the act of begging.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Begging:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Pleading</li>
                <li>• Imploring</li>
                <li>• Beseeching</li>
                <li>• Entreating</li>
                <li>• Supplicating</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Beggin:</h4>
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
            <li>• <strong>Begging</strong> is spelled with double &quot;g&quot; following the rule of doubling consonants before &quot;-ing.&quot;</li>
            <li>• The base verb is &quot;beg&quot; - when adding &quot;-ing,&quot; the &quot;g&quot; is doubled.</li>
            <li>• This follows the same pattern as words like &quot;running,&quot; &quot;sitting,&quot; and &quot;getting.&quot;</li>
            <li>• &quot;Beggin&quot; is never correct in any context.</li>
            <li>• The word can be used as a gerund (noun) or present participle (verb).</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;beggin&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beggin&quot; is never correct. The proper spelling is always &quot;begging&quot; with double &quot;g.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do we double the &quot;g&quot; in begging?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: We double the &quot;g&quot; because &quot;beg&quot; ends in a single consonant followed by a vowel, and we&apos;re adding &quot;-ing.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between begging and asking?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Begging implies a more desperate, humble, or urgent request, while asking is more neutral.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can begging be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;begging&quot; can function as a gerund (noun) meaning the act of begging.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases with begging?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: begging for mercy, begging the question, and begging to differ.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is begging always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Not necessarily - it can be used in various contexts, from desperate pleas to polite requests.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;beg&quot; becomes &quot;begging&quot; - just like &quot;run&quot; becomes &quot;running.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can begging be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;begging&quot; is appropriate in both formal and informal contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Begging</strong> is the correct spelling with double &quot;g.&quot; It is the present participle of the verb &quot;beg&quot; and follows the rule of doubling consonants before &quot;-ing.&quot; The misspelling &quot;beggin&quot; is never correct.</p>
      </div>
    </div>
  )
} 