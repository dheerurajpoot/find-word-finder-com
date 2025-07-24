import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Unorthodox or Unorthadox - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;unorthodox&quot; and &quot;unorthadox&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function UnorthodoxVsUnorthadoxPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Unorthodox or Unorthadox</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;unorthodox&quot; and &quot;unorthadox&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Unorthadox</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Unorthadox&quot; is a misspelling. The correct spelling is &quot;unorthodox&quot; with an &quot;o&quot; before the &quot;dox&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Unorthodox</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Unorthodox&quot; is the correct spelling. It means contrary to what is usual, traditional, or accepted.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Unorthodox (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Contrary to what is usual, traditional, or accepted; not orthodox.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She has an <strong>unorthodox</strong> approach to teaching.</li>
                  <li>• The chef is known for his <strong>unorthodox</strong> recipes.</li>
                  <li>• His <strong>unorthodox</strong> methods surprised everyone.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Unorthadox (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Unorthadox&quot; is a misspelling of &quot;unorthodox&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Unorthadox&quot; is not used in standard English.</li>
                  <li>• Always use <strong>unorthodox</strong> when describing something unconventional.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Unorthodox:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Unconventional</li>
                <li>• Unusual</li>
                <li>• Nontraditional</li>
                <li>• Radical</li>
                <li>• Alternative</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Unorthadox:</h4>
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
            <li>• <strong>Unorthodox</strong> is spelled with an &quot;o&quot; before &quot;dox&quot;.</li>
            <li>• Used to describe something that is not traditional or accepted.</li>
            <li>• &quot;Unorthadox&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;unorthadox&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;unorthadox&quot; is never correct. The proper spelling is always &quot;unorthodox.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;o&quot; before &quot;dox&quot; in &quot;unorthodox.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does unorthodox mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means contrary to what is usual, traditional, or accepted.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can unorthodox be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;unorthodox&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Unorthodox</strong> is the correct spelling with an &quot;o&quot; before &quot;dox&quot;. It means not traditional or accepted. The misspelling &quot;unorthadox&quot; is never correct. Use &quot;unorthodox&quot; to describe something unconventional.</p>
      </div>
    </div>
  )
} 