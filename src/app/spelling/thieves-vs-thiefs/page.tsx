import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Thieves or Thiefs - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;thieves&quot; and &quot;thiefs&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThievesVsThiefsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Thieves or Thiefs</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;thieves&quot; and &quot;thiefs&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Thiefs</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Thiefs&quot; is a misspelling. The correct spelling is &quot;thieves&quot; with &quot;ves&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Thieves</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Thieves&quot; is the correct spelling. It means multiple people who steal.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Thieves (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Plural form of thief; people who steal property from others.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>thieves</strong> broke into the house.</li>
                  <li>• Police caught the <strong>thieves</strong> red-handed.</li>
                  <li>• The <strong>thieves</strong> stole valuable jewelry.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Thiefs (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Thiefs&quot; is a misspelling of &quot;thieves&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Thiefs&quot; is not used in standard English.</li>
                  <li>• Always use <strong>thieves</strong> when referring to multiple thieves.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Thieves:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Robbers</li>
                <li>• Burglars</li>
                <li>• Stealers</li>
                <li>• Crooks</li>
                <li>• Bandits</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Thiefs:</h4>
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
            <li>• <strong>Thieves</strong> is the plural form of &quot;thief.&quot;</li>
            <li>• It follows the irregular plural rule: f changes to v before adding -es.</li>
            <li>• &quot;Thiefs&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þēof&quot; meaning &quot;thief.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thiefs&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thiefs&quot; is never correct. The proper spelling is always &quot;thieves.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the rule: f changes to v before adding -es. So &quot;thief&quot; becomes &quot;thieves.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;thieves&quot; and &quot;thief&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Thieves&quot; is the plural form (multiple thieves), while &quot;thief&quot; is the singular form (one thief).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thieves&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thieves&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;thieves&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;thiefs&quot; often happens by following the regular plural rule instead of the irregular one.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;thieves&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: cat burglars and thieves, honor among thieves, and thieves in the night.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thieves&quot; always about stealing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thieves&quot; always refers to people who steal property from others.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thieves&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thieves&quot; is only used as a noun (plural of thief).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Thieves</strong> is the correct spelling with &quot;ves&quot; at the end. It is the plural form of &quot;thief&quot; and means multiple people who steal. The misspelling &quot;thiefs&quot; is never correct. Always use &quot;thieves&quot; when referring to multiple thieves.</p>
      </div>
    </div>
  )
} 