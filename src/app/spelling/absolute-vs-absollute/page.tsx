import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Absolute or Absollute - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;absolute&quot; and &quot;absollute&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AbsoluteVsAbsollutePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Absolute or Absollute</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;absolute&quot; and &quot;absollute&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Absollute</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Absollute&quot; is a misspelling. The correct spelling is &quot;absolute&quot; with one &quot;l&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Absolute</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Absolute&quot; is the correct spelling. It means complete, total, or not qualified or diminished in any way.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Absolute (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Complete, total, or not qualified or diminished in any way; free from imperfection.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He had <strong>absolute</strong> control over the company.</li>
                  <li>• The <strong>absolute</strong> truth was finally revealed.</li>
                  <li>• She showed <strong>absolute</strong> dedication to her work.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Absollute (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Absollute&quot; is a misspelling of &quot;absolute&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Absollute&quot; is not used in standard English.</li>
                  <li>• Always use <strong>absolute</strong> when referring to completeness.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Absolute:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Complete</li>
                <li>• Total</li>
                <li>• Perfect</li>
                <li>• Unconditional</li>
                <li>• Unqualified</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Absollute:</h4>
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
          <li>• <strong>Absolute</strong> is spelled with one &quot;l&quot;, not two.</li>
          <li>• The word comes from Latin &quot;absolutus&quot; meaning complete or finished.</li>
          <li>• Used to describe something that is complete or total.</li>
          <li>• Often used in formal, academic, and philosophical contexts.</li>
          <li>• &quot;Absollute&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;absollute&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;absollute&quot; is never correct. The proper spelling is always &quot;absolute.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ab&quot; + &quot;solute&quot; - like &quot;solute&quot; with &quot;ab&quot; prefix, with one &quot;l&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between absolute and complete?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: They are very similar, but &quot;absolute&quot; often implies no exceptions or qualifications.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can absolute be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;absolute&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;absollute&quot; likely occurs because of confusion about the number of &quot;l&quot;s or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;absolute&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: absolute power, absolute truth, absolute zero, and absolute monarchy.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Absolute</strong> is the correct spelling with one &quot;l&quot;. It means complete, total, or not qualified. The misspelling &quot;absollute&quot; is never correct.</p>
      </div>
    </div>
  )
} 