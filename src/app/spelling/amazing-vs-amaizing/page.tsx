import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Amazing or Amaizing - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;amazing&quot; and &quot;amaizing&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AmazingVsAmaizingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Amazing or Amaizing</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;amazing&quot; and &quot;amaizing&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Amaizing</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Amaizing&quot; is a misspelling. The correct spelling is &quot;amazing&quot; with &quot;z&quot; not &quot;z.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Amazing</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Amazing&quot; is the correct spelling. It means causing great surprise or wonder.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Amazing (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Causing great surprise or wonder; astonishing; remarkable; extraordinary.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The view was absolutely <strong>amazing</strong>.</li>
                  <li>• She has an <strong>amazing</strong> talent for music.</li>
                  <li>• The <strong>amazing</strong> discovery changed everything.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Amaizing (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Amaizing&quot; is a misspelling of &quot;amazing&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Amaizing&quot; is not used in standard English.</li>
                  <li>• Always use <strong>amazing</strong> when expressing wonder.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Amazing:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Astonishing</li>
                <li>• Remarkable</li>
                <li>• Extraordinary</li>
                <li>• Incredible</li>
                <li>• Wonderful</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Amaizing:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Amazing</strong> is spelled with &quot;z&quot; at the end, not &quot;z.&quot;</li>
            <li>• Used to express great surprise, wonder, or admiration.</li>
            <li>• Can be used in both formal and informal contexts.</li>
            <li>• The word comes from &quot;amaze&quot; meaning to astonish.</li>
            <li>• &quot;Amaizing&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;amaizing&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;amaizing&quot; is never correct. The proper spelling is always &quot;amazing.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;a-maze-ing&quot; - it comes from the word &quot;amaze.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between amazing and incredible?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both express wonder, but &quot;amazing&quot; emphasizes surprise while &quot;incredible&quot; emphasizes disbelief.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can amazing be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;amazing&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;amazing&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: absolutely amazing, amazingly talented, and amazing discovery.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;amaizing&quot; occurs because people think it should be spelled differently or phonetically.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is amazing always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Usually yes, but &quot;amazing&quot; can sometimes be used ironically or sarcastically.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can amazing be used as an adverb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;amazingly&quot; is the adverbial form of &quot;amazing.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Amazing</strong> is the correct spelling with &quot;z&quot; at the end. It means causing great surprise or wonder. The misspelling &quot;amaizing&quot; is never correct. Use &quot;amazing&quot; to express astonishment or admiration.</p>
      </div>
    </div>
  )
} 