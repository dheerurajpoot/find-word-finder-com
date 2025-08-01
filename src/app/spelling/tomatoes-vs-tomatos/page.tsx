import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tomatoes or Tomatos - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;tomatoes&quot; and &quot;tomatos&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TomatoesVsTomatosPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Tomatoes or Tomatos</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;tomatoes&quot; and &quot;tomatos&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tomatos</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tomatos&quot; is a misspelling. The correct spelling is &quot;tomatoes&quot; with an &quot;e&quot; before the &quot;s.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tomatoes</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tomatoes&quot; is the correct spelling. It is the plural form of &quot;tomato.&quot;</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tomatoes (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The plural form of tomato; red, round fruits used in cooking.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I bought fresh <strong>tomatoes</strong> at the market.</li>
                  <li>• The <strong>tomatoes</strong> in my garden are ripe.</li>
                  <li>• She used <strong>tomatoes</strong> in the salad.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tomatos (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tomatos&quot; is a misspelling of &quot;tomatoes&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tomatos&quot; is not used in standard English.</li>
                  <li>• Always use <strong>tomatoes</strong> when referring to multiple tomatoes.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tomatoes:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Lycopersicon esculentum</li>
                <li>• Love apples</li>
                <li>• Garden tomatoes</li>
                <li>• Cherry tomatoes</li>
                <li>• Beefsteak tomatoes</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tomatos:</h4>
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
            <li>• <strong>Tomatoes</strong> is spelled with an &quot;e&quot; before the &quot;s&quot; in the plural form.</li>
            <li>• It is the plural form of the singular &quot;tomato.&quot;</li>
            <li>• &quot;Tomatos&quot; is never correct in any context.</li>
            <li>• The word comes from Spanish &quot;tomate&quot; from Nahuatl &quot;tomatl.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tomatos&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tomatos&quot; is never correct. The proper spelling is always &quot;tomatoes.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;tomatoes&quot; has an &quot;e&quot; before the &quot;s&quot; - think &quot;to-ma-toes.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;tomato&quot; and &quot;tomatoes&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tomato&quot; is singular (one), while &quot;tomatoes&quot; is plural (more than one).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tomatoes&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tomatoes&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;tomatoes&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;tomatos&quot; often happens by omitting the &quot;e&quot; before the &quot;s&quot; in the plural form.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;tomatoes&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: fresh tomatoes, cherry tomatoes, beefsteak tomatoes, and heirloom tomatoes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tomatoes&quot; always about the fruit?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tomatoes&quot; always refers to the red, round fruits used in cooking and salads.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tomatoes&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tomatoes&quot; is only used as a noun (plural form of tomato).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Tomatoes</strong> is the correct spelling with an &quot;e&quot; before the &quot;s&quot; in the plural form. It is the plural form of tomato. The misspelling &quot;tomatos&quot; is never correct. Always use &quot;tomatoes&quot; when referring to multiple tomatoes.</p>
      </div>
    </div>
  )
} 