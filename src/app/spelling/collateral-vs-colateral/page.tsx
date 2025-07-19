import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Collateral or Colateral - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;collateral&quot; and &quot;colateral&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CollateralVsColateralPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Collateral or Colateral</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;collateral&quot; and &quot;colateral&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Colateral</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Colateral&quot; is a misspelling. The correct spelling is &quot;collateral&quot; with a double &quot;l&quot; after the &quot;o&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Collateral</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Collateral&quot; is the correct spelling. It refers to something pledged as security for repayment of a loan, or something secondary or indirect.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Collateral (noun/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Something pledged as security for repayment of a loan; secondary or indirect.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He used his car as <strong>&quot;collateral&quot;</strong> for the loan.</li>
                  <li>• The damage was a <strong>&quot;collateral&quot;</strong> effect of the accident.</li>
                  <li>• The bank required <strong>&quot;collateral&quot;</strong> for the mortgage.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Colateral (noun/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Colateral&quot; is a misspelling of &quot;collateral&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Colateral&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;collateral&quot;</strong> when referring to security or something secondary.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Collateral:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Security</li>
                <li>• Guarantee</li>
                <li>• Pledge</li>
                <li>• Surety</li>
                <li>• Secondary</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Colateral:</h4>
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
            <li>• <strong>&quot;Collateral&quot;</strong> is spelled with a double &quot;l&quot; after the &quot;o&quot;.</li>
            <li>• Used to describe security for a loan or something secondary.</li>
            <li>• The word comes from Latin &quot;collateralis&quot; meaning &quot;side by side&quot;.</li>
            <li>• &quot;Colateral&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;colateral&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;colateral&quot; is never correct. The proper spelling is always &quot;collateral.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the double &quot;l&quot; after the &quot;o&quot; in &quot;collateral&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;collateral&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Collateral&quot; means something pledged as security for a loan, or something secondary or indirect.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;colateral&quot; may occur due to omitting one of the &quot;l&quot; letters.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Collateral&quot;</strong> is the correct spelling with a double &quot;l&quot; after the &quot;o&quot;. It refers to security for a loan or something secondary. The misspelling &quot;colateral&quot; is never correct. Use &quot;collateral&quot; in all contexts.</p>
      </div>
    </div>
  )
} 