import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Accordance or Accordence - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;accordance&quot; and &quot;accordence&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AccordanceVsAccordencePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Accordance or Accordence</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;accordance&quot; and &quot;accordence&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Accordence</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Accordence&quot; is a misspelling. The correct spelling is &quot;accordance&quot; with &quot;ance&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Accordance</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Accordance&quot; is the correct spelling. It means agreement or conformity with something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Accordance (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Agreement or conformity with something; compliance with a rule, law, or standard.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The decision was made in <strong>accordance</strong> with company policy.</li>
                  <li>• The building was constructed in <strong>accordance</strong> with safety regulations.</li>
                  <li>• The procedure was carried out in <strong>accordance</strong> with the guidelines.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Accordence (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Accordence&quot; is a misspelling of &quot;accordance&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Accordence&quot; is not used in standard English.</li>
                  <li>• Always use <strong>accordance</strong> when referring to agreement.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Accordance:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Agreement</li>
                <li>• Conformity</li>
                <li>• Compliance</li>
                <li>• Harmony</li>
                <li>• Consistency</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Accordence:</h4>
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
          <li>• <strong>Accordance</strong> is spelled with &quot;ance&quot; at the end, not &quot;ence&quot;.</li>
          <li>• The word comes from &quot;accord&quot; + &quot;ance&quot; suffix.</li>
          <li>• Used in formal and legal contexts.</li>
          <li>• Often used in phrases like &quot;in accordance with.&quot;</li>
          <li>• &quot;Accordence&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;accordence&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;accordence&quot; is never correct. The proper spelling is always &quot;accordance.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;accord&quot; + &quot;ance&quot; - like &quot;accord&quot; with &quot;ance&quot; ending, not &quot;ence&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between accordance and agreement?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Accordance&quot; implies conformity with rules or standards, while &quot;agreement&quot; is more general consent.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can accordance be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;accordance&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;accordence&quot; likely occurs because of confusion about the &quot;ance&quot; vs &quot;ence&quot; ending.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;accordance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: in accordance with, accordance with regulations, accordance with policy, and accordance with law.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Accordance</strong> is the correct spelling with &quot;ance&quot; at the end. It means agreement or conformity with something. The misspelling &quot;accordence&quot; is never correct.</p>
      </div>
    </div>
  )
} 