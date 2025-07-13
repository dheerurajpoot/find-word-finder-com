import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Addicted or Adikted - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;addicted&quot; and &quot;adikted&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AddictedVsAdiktedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Addicted or Adikted</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;addicted&quot; and &quot;adikted&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adikted</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Adikted&quot; is a misspelling. The correct spelling is &quot;addicted&quot; with two &quot;c&quot;s and two &quot;d&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Addicted</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Addicted&quot; is the correct spelling. It means physically or mentally dependent on something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Addicted (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Physically or mentally dependent on a substance or activity; unable to stop doing something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He became <strong>addicted</strong> to video games.</li>
                  <li>• She is <strong>addicted</strong> to coffee.</li>
                  <li>• Many people are <strong>addicted</strong> to social media.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Adikted (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Adikted&quot; is a misspelling of &quot;addicted&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Adikted&quot; is not used in standard English.</li>
                  <li>• Always use <strong>addicted</strong> when referring to dependency.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Addicted:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Dependent</li>
                <li>• Hooked</li>
                <li>• Obsessed</li>
                <li>• Compulsive</li>
                <li>• Habituated</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Adikted:</h4>
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
            <li>• <strong>Addicted</strong> is spelled with two &quot;c&quot;s and two &quot;d&quot;s, not &quot;adikted&quot;.</li>
            <li>• The word comes from Latin &quot;addictus&quot; meaning devoted or surrendered.</li>
            <li>• Can refer to both substance and behavioral addictions.</li>
            <li>• Used in medical, psychological, and general contexts.</li>
            <li>• &quot;Adikted&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adikted&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;adikted&quot; is never correct. The proper spelling is always &quot;addicted.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;add&quot; + &quot;dict&quot; + &quot;ed&quot; - the word has two &quot;c&quot;s and two &quot;d&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between addicted and dependent?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Addicted&quot; implies a strong psychological or physical need, while &quot;dependent&quot; can be more neutral.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can addicted be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;addicted&quot; is very common in formal writing, especially in medical and psychological contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation or confusion with similar words that have different spellings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;addicted&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: addicted to drugs, addicted to gambling, addicted to technology, and addiction treatment.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Addicted</strong> is the correct spelling with two &quot;c&quot;s and two &quot;d&quot;s. It means physically or mentally dependent on something. The misspelling &quot;adikted&quot; is never correct. Use &quot;addicted&quot; when referring to dependency on substances or behaviors.</p>
      </div>
    </div>
  )
} 