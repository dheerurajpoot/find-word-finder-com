import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Threatened or Threated - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;threatened&quot; and &quot;threated&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThreatenedVsThreatedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Threatened or Threated</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;threatened&quot; and &quot;threated&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Threated</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Threated&quot; is a misspelling. The correct spelling is &quot;threatened&quot; with an &quot;n&quot; before the &quot;ed.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Threatened</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Threatened&quot; is the correct spelling. It means to express an intention to harm or cause trouble.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Threatened (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past tense and past participle of threaten; to express an intention to harm or cause trouble.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He <strong>threatened</strong> to call the police.</li>
                  <li>• The storm <strong>threatened</strong> the coastal town.</li>
                  <li>• She felt <strong>threatened</strong> by the aggressive behavior.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Threated (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Threated&quot; is a misspelling of &quot;threatened&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Threated&quot; is not used in standard English.</li>
                  <li>• Always use <strong>threatened</strong> as the past tense of threaten.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Threatened:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Menaced</li>
                <li>• Intimidated</li>
                <li>• Warned</li>
                <li>• Endangered</li>
                <li>• Imperiled</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Threated:</h4>
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
            <li>• <strong>Threatened</strong> is spelled with an &quot;n&quot; before the &quot;ed.&quot;</li>
            <li>• It is the past tense and past participle of the verb &quot;threaten.&quot;</li>
            <li>• &quot;Threated&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þreatian&quot; meaning &quot;to threaten.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;threated&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;threated&quot; is never correct. The proper spelling is always &quot;threatened.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;threatened&quot; has an &quot;n&quot; before the &quot;ed&quot; - think of it as &quot;threaten-ed.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;threatened&quot; and &quot;warned&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Threatened&quot; implies potential harm or danger, while &quot;warned&quot; is more about giving notice or advice.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;threatened&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;threatened&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;threatened&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;threated&quot; often happens by omitting the &quot;n&quot; before the &quot;ed.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;threatened&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: threatened species, threatened to leave, threatened with violence, and threatened legal action.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;threatened&quot; always about danger?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;threatened&quot; always implies some form of potential harm, danger, or trouble.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;threatened&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;threatened&quot; is only used as a verb (past tense and past participle of threaten).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Threatened</strong> is the correct spelling with an &quot;n&quot; before the &quot;ed.&quot; It means to express an intention to harm or cause trouble. The misspelling &quot;threated&quot; is never correct. Always use &quot;threatened&quot; as the past tense and past participle of threaten.</p>
      </div>
    </div>
  )
} 