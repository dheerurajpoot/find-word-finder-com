import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Christmas or Chrismas - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;Christmas&quot; and &quot;Chrismas&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ChristmasVsChrismasPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Christmas or Chrismas</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;Christmas&quot; and &quot;Chrismas&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Chrismas</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Chrismas&quot; is a common misspelling. The correct spelling is &quot;Christmas&quot; with a &quot;t&quot; after the &quot;s&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Christmas</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Christmas&quot; is the correct spelling. It refers to the annual festival celebrating the birth of Jesus Christ, observed on December 25th.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Christmas (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The annual Christian festival celebrating the birth of Jesus Christ, held on December 25th.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• We exchange gifts on <strong>Christmas</strong> morning.</li>
                  <li>• <strong>Christmas</strong> is celebrated by millions around the world.</li>
                  <li>• The <strong>Christmas</strong> tree is beautifully decorated.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Chrismas (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Chrismas&quot; is a misspelling of &quot;Christmas&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Chrismas&quot; is not used in standard English.</li>
                  <li>• Always use <strong>Christmas</strong> when referring to the holiday.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Christmas:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Yuletide</li>
                <li>• Noel</li>
                <li>• Nativity</li>
                <li>• Xmas</li>
                <li>• Christmastide</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Chrismas:</h4>
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
            <li>• <strong>Christmas</strong> is spelled with a &quot;t&quot; after the &quot;s&quot;.</li>
            <li>• Refers to the Christian holiday celebrated on December 25th.</li>
            <li>• &quot;Chrismas&quot; is never correct in any context.</li>
            <li>• The word &quot;Christmas&quot; comes from &quot;Christ&apos;s Mass&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;chrismas&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;chrismas&quot; is never correct. The proper spelling is always &quot;Christmas.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;Christmas&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Christmas&quot; is the annual Christian festival celebrating the birth of Jesus Christ.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;Christmas&quot; has a &quot;t&quot; after the &quot;s&quot; and comes from &quot;Christ&apos;s Mass&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are there other common misspellings of &quot;Christmas&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, but &quot;chrismas&quot; is one of the most frequent. Always use &quot;Christmas&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Christmas</strong> is the correct spelling for the holiday celebrated on December 25th. &quot;Chrismas&quot; is never correct. Always use &quot;Christmas&quot; in your writing.</p>
      </div>
    </div>
  )
} 