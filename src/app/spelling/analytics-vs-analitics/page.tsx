import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Analytics or Analitics - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;analytics&quot; and &quot;analitics&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AnalyticsVsAnaliticsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Analytics or Analitics</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;analytics&quot; and &quot;analitics&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Analitics</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Analitics&quot; is a misspelling. The correct spelling is &quot;analytics&quot; with a &quot;y&quot; after the &quot;l&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Analytics</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Analytics&quot; is the correct spelling. It refers to the systematic analysis of data or statistics, often used in business, science, and technology.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Analytics (noun, plural):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The systematic analysis of data or statistics, often to discover patterns, trends, or insights.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The company uses <strong>analytics</strong> to improve marketing strategies.</li>
                  <li>• Web <strong>analytics</strong> track visitor behavior on websites.</li>
                  <li>• Data <strong>analytics</strong> is crucial for business decisions.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Analitics (noun, plural):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Analitics&quot; is a misspelling of &quot;analytics&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Analitics&quot; is not used in standard English.</li>
                  <li>• Always use <strong>analytics</strong> when referring to data analysis.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Analytics:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Data analysis</li>
                <li>• Statistics</li>
                <li>• Metrics</li>
                <li>• Reporting</li>
                <li>• Insights</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Analitics:</h4>
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
            <li>• <strong>Analytics</strong> is spelled with a &quot;y&quot; after the &quot;l&quot;.</li>
            <li>• Used to describe systematic analysis of data or statistics.</li>
            <li>• The word comes from Greek &quot;analytikos&quot; meaning &quot;skilled in analysis&quot;.</li>
            <li>• &quot;Analitics&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;analitics&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;analitics&quot; is never correct. The proper spelling is always &quot;analytics.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;y&quot; after the &quot;l&quot; in &quot;analytics.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does analytics mean in business?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means using data and statistics to make business decisions and improve performance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;analitics&quot; occurs because people use the phonetic spelling or are influenced by other languages.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Analytics</strong> is the correct spelling with a &quot;y&quot; after the &quot;l&quot;. It refers to the systematic analysis of data or statistics. The misspelling &quot;analitics&quot; is never correct. Use &quot;analytics&quot; in all contexts requiring this meaning.</p>
      </div>
    </div>
  )
} 