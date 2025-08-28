import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Awesome or Awsome - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;awesome&quot; and &quot;awsome&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AwesomeVsAwsomePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Awesome or Awsome</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;awesome&quot; and &quot;awsome&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Awsome</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Awsome&quot; is a misspelling. The correct spelling is &quot;awesome&quot; with an &quot;e&quot; after the &quot;w&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Awesome</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Awesome&quot; is the correct spelling. It means extremely impressive, amazing, or inspiring awe.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Awesome (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Extremely impressive, amazing, or inspiring awe; excellent or outstanding.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• That concert was absolutely <strong>awesome</strong>!</li>
                  <li>• The view from the mountain was <strong>awesome</strong>.</li>
                  <li>• You did an <strong>awesome</strong> job on the project.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Awsome (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Awsome&quot; is a misspelling of &quot;awesome&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Awsome&quot; is not used in standard English.</li>
                  <li>• Always use <strong>awesome</strong> when referring to something amazing.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Awesome:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Amazing</li>
                <li>• Incredible</li>
                <li>• Fantastic</li>
                <li>• Outstanding</li>
                <li>• Impressive</li>
                <li>• Magnificent</li>
                <li>• Spectacular</li>
                <li>• Wonderful</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Awsome:</h4>
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
          <li>• <strong>Awesome</strong> is spelled with an &quot;e&quot; after the &quot;w&quot;, not &quot;awsome.&quot;</li>
          <li>• The word comes from &quot;awe&quot; plus the suffix &quot;-some&quot; meaning full of.</li>
          <li>• Originally meant &quot;inspiring awe&quot; but now commonly means &quot;excellent.&quot;</li>
          <li>• Very popular in informal speech, especially among younger people.</li>
          <li>• &quot;Awsome&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;awsome&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;awsome&quot; is never correct. The proper spelling is always &quot;awesome&quot; with an &quot;e&quot; after the &quot;w.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;awe-some&quot; - the word &quot;awe&quot; plus the suffix &quot;-some&quot; meaning full of.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between awesome and amazing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both mean excellent, but &quot;awesome&quot; has a stronger connotation of inspiring awe or wonder.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can awesome be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Awesome&quot; is more appropriate in informal contexts. In formal writing, consider using &quot;impressive&quot; or &quot;outstanding.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;awsome&quot; likely occurs because of pronunciation or confusion about the &quot;e&quot; sound.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;awesome&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: awesome job, awesome time, awesome experience, and totally awesome.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is awesome always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;awesome&quot; always has a positive connotation, meaning excellent or impressive.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the adverb form of awesome?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The adverb form is &quot;awesomely&quot; - meaning in an awesome manner (e.g., &quot;awesomely talented&quot;).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Awesome</strong> is the correct spelling with an &quot;e&quot; after the &quot;w&quot;. It means extremely impressive, amazing, or inspiring awe. The misspelling &quot;awsome&quot; is never correct. Use &quot;awesome&quot; to describe excellent, outstanding, or impressive things, especially in informal contexts.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/awful-vs-aweful" className="text-blue-700 hover:text-blue-900 underline">Awful vs Aweful</a></li>
            <li><a href="/spelling/awful-vs-awfull" className="text-blue-700 hover:text-blue-900 underline">Awful vs Awfull</a></li>
            <li><a href="/spelling/awkward-vs-ackward" className="text-blue-700 hover:text-blue-900 underline">Awkward vs Ackward</a></li>
            <li><a href="/spelling/awkward-vs-akward" className="text-blue-700 hover:text-blue-900 underline">Awkward vs Akward</a></li>
            <li><a href="/spelling/awkward-vs-arkward" className="text-blue-700 hover:text-blue-900 underline">Awkward vs Arkward</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/amazing-vs-amazing" className="text-purple-700 hover:text-purple-900 underline">Amazing vs Amazing</a></li>
            <li><a href="/spelling/incredible-vs-incredible" className="text-purple-700 hover:text-purple-900 underline">Incredible vs Incredible</a></li>
            <li><a href="/spelling/fantastic-vs-fantastic" className="text-purple-700 hover:text-purple-900 underline">Fantastic vs Fantastic</a></li>
            <li><a href="/spelling/outstanding-vs-outstanding" className="text-purple-700 hover:text-purple-900 underline">Outstanding vs Outstanding</a></li>
            <li><a href="/spelling/impressive-vs-impressive" className="text-purple-700 hover:text-purple-900 underline">Impressive vs Impressive</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/some-suffix" className="text-green-700 hover:text-green-900 underline">-some Suffix</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 