import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Became or Becomed - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;became&quot; and &quot;becomed&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BecameVsBecomedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Became or Becomed</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;became&quot; and &quot;becomed&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Becomed</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Becomed&quot; is a misspelling. The correct past tense of &quot;become&quot; is &quot;became.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Became</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Became&quot; is the correct past tense of &quot;become.&quot; It means to have begun to be or to have grown to be.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Became (past tense):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past tense of &quot;become&quot;; to have begun to be or to have grown to be something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>became</strong> a doctor last year.</li>
                  <li>• The weather <strong>became</strong> warmer in spring.</li>
                  <li>• He <strong>became</strong> interested in music.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Becomed (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Becomed&quot; is a misspelling of &quot;became&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Becomed&quot; is not used in standard English.</li>
                  <li>• Always use <strong>became</strong> as the past tense of become.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Became:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Turned into</li>
                <li>• Grew into</li>
                <li>• Developed into</li>
                <li>• Transformed into</li>
                <li>• Evolved into</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Becomed:</h4>
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
          <li>• <strong>Became</strong> is the correct past tense of the verb &quot;become.&quot;</li>
          <li>• The verb &quot;become&quot; has irregular conjugation: become, became, become.</li>
          <li>• Used to describe past transformation or development.</li>
          <li>• Can be used with adjectives, nouns, or other parts of speech.</li>
          <li>• &quot;Becomed&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;becomed&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;becomed&quot; is never correct. The proper past tense is always &quot;became.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as the irregular past tense - &quot;become&quot; becomes &quot;became&quot; in the past.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between became and turned into?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both describe past transformation, but &quot;became&quot; is more formal and gradual, while &quot;turned into&quot; suggests more immediate change.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can became be used with any type of word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;became&quot; can be used with adjectives, nouns, and other parts of speech to describe past transformation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;becomed&quot; likely occurs because many regular verbs add &quot;-ed&quot; for past tense.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;became&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: became aware, became clear, became popular, and became successful.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Became</strong> is the correct past tense of &quot;become.&quot; It means to have begun to be or to have grown to be something. The misspelling &quot;becomed&quot; is never correct. Use &quot;became&quot; to describe past transformation or development.</p>
      </div>
    </div>
  )
} 