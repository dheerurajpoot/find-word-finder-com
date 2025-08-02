import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Temptation or Temtation - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;temptation&quot; and &quot;temtation&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TemptationVsTemtationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Temptation or Temtation</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;temptation&quot; and &quot;temtation&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Temtation</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Temtation&quot; is a misspelling. The correct spelling is &quot;temptation&quot; with &quot;p&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Temptation</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Temptation&quot; is the correct spelling. It means the desire to do something wrong.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Temptation (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The desire to do something, especially something wrong or unwise; an attractive or appealing thing that may lead to wrongdoing.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The chocolate cake was a great <strong>temptation</strong>.</li>
                  <li>• He resisted the <strong>temptation</strong> to cheat.</li>
                  <li>• The <strong>temptation</strong> to spend money was strong.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Temtation (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Temtation&quot; is a misspelling of &quot;temptation&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Temtation&quot; is not used in standard English.</li>
                  <li>• Always use <strong>temptation</strong> when referring to desires.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Temptation:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Allurement</li>
                <li>• Enticement</li>
                <li>• Lure</li>
                <li>• Attraction</li>
                <li>• Seduction</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Temtation:</h4>
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
            <li>• <strong>Temptation</strong> is spelled with &quot;p&quot; in the middle: temp-ta-tion.</li>
            <li>• It is commonly used in religious and moral contexts.</li>
            <li>• &quot;Temtation&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;temptare&quot; meaning &quot;to test.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;temtation&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;temtation&quot; is never correct. The proper spelling is always &quot;temptation.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;temptation&quot; has &quot;p&quot; in the middle - think of it as &quot;temp-ta-tion.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between temptation and desire?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Temptation specifically refers to desires that may lead to wrongdoing, while desire is more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;temptation&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;temptation&quot; is appropriate in formal and academic writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;temptation&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;temtation&quot; often happens by omitting the &quot;p&quot; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;temptation&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: resist temptation, give in to temptation, temptation to, and lead into temptation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;temptation&quot; always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: While often associated with wrongdoing, temptation can refer to any strong desire, even for good things.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;temptation&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;temptation&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Temptation</strong> is the correct spelling with &quot;p&quot; in the middle: temp-ta-tion. It means the desire to do something, especially something wrong or unwise. The misspelling &quot;temtation&quot; is never correct. Always use &quot;temptation&quot; when referring to desires that may lead to wrongdoing or when discussing moral choices.</p>
      </div>
    </div>
  )
} 