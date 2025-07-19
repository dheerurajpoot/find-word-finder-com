import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Collector or Collecter - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;collector&quot; and &quot;collecter&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CollectorVsCollecterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Collector or Collecter</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;collector&quot; and &quot;collecter&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Collecter</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Collecter&quot; is a misspelling. The correct spelling is &quot;collector&quot; with an &quot;o&quot; before the &quot;r&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Collector</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Collector&quot; is the correct spelling. It refers to a person who collects things, such as stamps, art, or money.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Collector (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person who collects things, such as stamps, art, or money.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She is a <strong>&quot;collector&quot;</strong> of rare coins.</li>
                  <li>• The <strong>&quot;collector&quot;</strong> visited every week to pick up the trash.</li>
                  <li>• He became an art <strong>&quot;collector&quot;</strong> after retirement.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Collecter (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Collecter&quot; is a misspelling of &quot;collector&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Collecter&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;collector&quot;</strong> when referring to a person who collects things.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Collector:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Accumulator</li>
                <li>• Gatherer</li>
                <li>• Curator</li>
                <li>• Hoarder</li>
                <li>• Enthusiast</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Collecter:</h4>
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
            <li>• <strong>&quot;Collector&quot;</strong> is spelled with an &quot;o&quot; before the &quot;r&quot;.</li>
            <li>• Used to describe a person who collects things.</li>
            <li>• The word comes from Latin &quot;collector&quot; meaning &quot;gatherer&quot;.</li>
            <li>• &quot;Collecter&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;collecter&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;collecter&quot; is never correct. The proper spelling is always &quot;collector.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;o&quot; before the &quot;r&quot; in &quot;collector&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;collector&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Collector&quot; means a person who collects things, such as stamps, art, or money.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;collecter&quot; may occur due to confusion about the ending or pronunciation.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Collector&quot;</strong> is the correct spelling with an &quot;o&quot; before the &quot;r&quot;. It refers to a person who collects things. The misspelling &quot;collecter&quot; is never correct. Use &quot;collector&quot; in all contexts.</p>
      </div>
    </div>
  )
} 