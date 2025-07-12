import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Became or Bacome - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;became&quot; and &quot;bacome&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BecameVsBacomePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Became or Bacome</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;became&quot; and &quot;bacome&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bacome</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bacome&quot; is a misspelling. The correct spelling is &quot;became&quot; with an &quot;e&quot; after the &quot;b&quot; and an &quot;a&quot; before the &quot;m&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Became</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Became&quot; is the correct spelling. It is the past tense of &quot;become&quot; meaning to begin to be something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Became (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past tense of become; to have begun to be or grown to be something in the past.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>became</strong> a doctor last year.</li>
                  <li>• The weather <strong>became</strong> colder yesterday.</li>
                  <li>• He <strong>became</strong> interested in music as a child.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bacome (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bacome&quot; is a misspelling of &quot;became&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bacome&quot; is not used in standard English.</li>
                  <li>• Always use <strong>became</strong> when referring to past transformation.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Became:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Turned into</li>
                <li>• Grew to be</li>
                <li>• Developed into</li>
                <li>• Transformed into</li>
                <li>• Evolved into</li>
                <li>• Changed into</li>
                <li>• Matured into</li>
                <li>• Came to be</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bacome:</h4>
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
          <li>• <strong>Became</strong> is spelled with an &quot;e&quot; after the &quot;b&quot; and an &quot;a&quot; before the &quot;m&quot;, not &quot;bacome.&quot;</li>
          <li>• The word is the past tense of &quot;becuman.&quot;</li>
          <li>• Used to describe past transformations or developments.</li>
          <li>• Commonly used in everyday conversation and formal writing.</li>
          <li>• &quot;Bacome&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bacome&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bacome&quot; is never correct. The proper spelling is always &quot;became&quot; with an &quot;e&quot; and &quot;a.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;be-came&quot; - the word &quot;be&quot; plus the past tense of &quot;come.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between became and become?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Became&quot; is the past tense, while &quot;become&quot; is the present tense and infinitive form.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can became be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;became&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;bacome&quot; likely occurs because of pronunciation or confusion about the vowel sounds.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;became&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: became aware, became involved, became popular, and became clear.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is became always about positive changes?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;became&quot; can refer to any past transformation, whether positive (became successful) or negative (became angry).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the present tense of became?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The present tense of &quot;became&quot; is &quot;become&quot; - I become, you become, he/she/it becomes.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Became</strong> is the correct spelling with an &quot;e&quot; after the &quot;b&quot; and an &quot;a&quot; before the &quot;m&quot;. It is the past tense of &quot;become&quot; meaning to have begun to be something. The misspelling &quot;bacome&quot; is never correct. Use &quot;became&quot; to describe past transformations or developments.</p>
      </div>
    </div>
  )
} 