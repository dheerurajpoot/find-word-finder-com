import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Balance or Balence - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;balance&quot; and &quot;balence&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BalanceVsBalencePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Balance or Balence</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;balance&quot; and &quot;balence&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Balence</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Balence&quot; is a misspelling. The correct spelling is &quot;balance&quot; with an &quot;a&quot; before the &quot;n&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Balance</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Balance&quot; is the correct spelling. It means an even distribution of weight or a state of equilibrium.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Balance (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An even distribution of weight; a state of equilibrium; to keep steady or in proportion.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She lost her <strong>balance</strong> and fell.</li>
                  <li>• It&apos;s important to <strong>balance</strong> work and life.</li>
                  <li>• The <strong>balance</strong> in his bank account was low.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Balence (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Balence&quot; is a misspelling of &quot;balance&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Balence&quot; is not used in standard English.</li>
                  <li>• Always use <strong>balance</strong> when referring to equilibrium.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Balance:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Equilibrium</li>
                <li>• Stability</li>
                <li>• Harmony</li>
                <li>• Proportion</li>
                <li>• Steadiness</li>
                <li>• Coordination</li>
                <li>• Symmetry</li>
                <li>• Poise</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Balence:</h4>
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
          <li>• <strong>Balance</strong> is spelled with an &quot;a&quot; before the &quot;n&quot;, not &quot;balence.&quot;</li>
          <li>• The word comes from Latin &quot;bilanx&quot; meaning having two scales.</li>
          <li>• Can be used both literally (physical balance) and figuratively (work-life balance).</li>
          <li>• Commonly used in finance, physics, and everyday conversation.</li>
          <li>• &quot;Balence&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;balence&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;balence&quot; is never correct. The proper spelling is always &quot;balance&quot; with an &quot;a&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bal-ance&quot; - the word &quot;bal&quot; (from Latin for scale) plus the suffix &quot;-ance.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between balance and equilibrium?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both mean stability, but &quot;equilibrium&quot; is more scientific, while &quot;balance&quot; is more commonly used in everyday language.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can balance be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;balance&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;balence&quot; likely occurs because of pronunciation or confusion about the &quot;a&quot; sound.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;balance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: balance sheet, work-life balance, balance of power, and off balance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is balance always about physical stability?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;balance&quot; can refer to physical stability, financial accounts, emotional equilibrium, or any state of harmony.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the opposite of balance?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The opposite of &quot;balance&quot; could be &quot;imbalance&quot; or &quot;instability&quot; - a lack of equilibrium or proportion.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Balance</strong> is the correct spelling with an &quot;a&quot; before the &quot;n&quot;. It means an even distribution of weight or a state of equilibrium. The misspelling &quot;balence&quot; is never correct. Use &quot;balance&quot; to describe stability, proportion, or harmony in any context.</p>
      </div>
    </div>
  )
} 