import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Analysis or Anaylisis - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;analysis&quot; and &quot;anaylisis&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AnalysisVsAnaylisisPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Analysis or Anaylisis</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;analysis&quot; and &quot;anaylisis&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Anaylisis</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Anaylisis&quot; is a misspelling. The correct spelling is &quot;analysis&quot; with a &quot;y&quot; after the &quot;l&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Analysis</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Analysis&quot; is the correct spelling. It means detailed examination of the elements or structure of something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Analysis (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Detailed examination of the elements or structure of something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The report included a thorough <strong>analysis</strong> of the data.</li>
                  <li>• Her <strong>analysis</strong> was insightful and clear.</li>
                  <li>• The <strong>analysis</strong> revealed important trends.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Anaylisis (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Anaylisis&quot; is a misspelling of &quot;analysis&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Anaylisis&quot; is not used in standard English.</li>
                  <li>• Always use <strong>analysis</strong> when referring to detailed examination.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Analysis:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Examination</li>
                <li>• Study</li>
                <li>• Evaluation</li>
                <li>• Assessment</li>
                <li>• Investigation</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Anaylisis:</h4>
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
            <li>• <strong>Analysis</strong> is spelled with a &quot;y&quot; after the &quot;l&quot;.</li>
            <li>• Used to describe detailed examination or study.</li>
            <li>• The word comes from Greek &quot;analusis&quot; meaning &quot;to loosen up&quot;.</li>
            <li>• &quot;Anaylisis&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;anaylisis&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;anaylisis&quot; is never correct. The proper spelling is always &quot;analysis.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;y&quot; after the &quot;l&quot; in &quot;analysis.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does analysis mean in science?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means a detailed examination of the elements or structure of something, often as a basis for discussion or interpretation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;anaylisis&quot; occurs because people mix up the order of the &quot;y&quot; and &quot;l&quot; in the word.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Analysis</strong> is the correct spelling with a &quot;y&quot; after the &quot;l&quot;. It means detailed examination of the elements or structure of something. The misspelling &quot;anaylisis&quot; is never correct. Use &quot;analysis&quot; in all contexts requiring this meaning.</p>
      </div>
    </div>
  )
} 