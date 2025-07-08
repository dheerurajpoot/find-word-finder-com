import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Aggressive or Aggresive - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;aggressive&quot; and &quot;aggresive&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AggressiveVsAggresivePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Aggressive or Aggresive</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Understanding the difference between &quot;Aggressive&quot; or &quot;Aggresive&quot;: these commonly confused spellings and how to use them properly.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aggresive</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aggresive&quot; is a misspelling. The correct spelling is &quot;aggressive&quot; with double &apos;s&apos; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Aggressive</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Aggressive&quot; is the correct spelling. It means ready or likely to attack or confront; assertive or forceful.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Aggressive</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Aggressive</strong> (adjective): Ready or likely to attack or confront; assertive; forceful; pursuing one&apos;s aims and interests forcefully, sometimes unduly so.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The dog became <strong>aggressive</strong> when threatened.</li>
              <li>• She has an <strong>aggressive</strong> approach to business.</li>
              <li>• The company is pursuing an <strong>aggressive</strong> expansion strategy.</li>
              <li>• He was criticized for his <strong>aggressive</strong> behavior.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Aggressive</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Hostile</li>
                <li>• Assertive</li>
                <li>• Forceful</li>
                <li>• Combative</li>
                <li>• Pushy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Violent</li>
                <li>• Belligerent</li>
                <li>• Militant</li>
                <li>• Offensive</li>
                <li>• Dynamic</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Aggressive</strong> is spelled with double &apos;s&apos; in the middle, not one.</li>
            <li>• Commonly used to describe behavior, strategies, or attitudes.</li>
            <li>• Can have both positive (assertive) and negative (hostile) connotations.</li>
            <li>• The word comes from Latin &quot;aggressivus&quot; meaning &quot;attack&quot;.</li>
            <li>• The noun form is &quot;aggression&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aggresive&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aggresive&quot; is never correct. The proper spelling is always &quot;aggressive&quot; with double &apos;s&apos; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;aggressive&quot; has double &apos;s&apos; like &quot;aggression&quot; and &quot;possess&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between aggressive and assertive?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Aggressive&quot; can mean hostile or forceful, while &quot;assertive&quot; means confident and self-assured without being hostile.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can aggressive be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;aggressive&quot; is appropriate in both formal and informal writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is aggressive always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, it can be positive (assertive, dynamic) or negative (hostile, violent) depending on context.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aggresive&quot; likely occurs because of confusion about the double &apos;s&apos; or unfamiliarity with the word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;aggressive&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common phrases include: aggressive behavior, aggressive strategy, aggressive marketing, and aggressive stance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;aggressive&quot; be used in business writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;aggressive&quot; is commonly used in business, legal, and everyday contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Aggressive</strong> is the correct spelling with double &apos;s&apos; in the middle. It means ready or likely to attack, confront, or assert oneself. The misspelling &quot;aggresive&quot; is never correct. Use this word when talking about assertive, forceful, or confrontational behavior or strategies.</p>
      </div>
    </div>
  )
} 