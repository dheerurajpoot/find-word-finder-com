import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Allowance or Allowence - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;allowance&quot; and &quot;allowence&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AllowanceVsAllowencePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Allowance or Allowence</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;allowance&quot; and &quot;allowence&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Allowence</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Allowence&quot; is a common misspelling. The correct spelling is &quot;allowance&quot; with an &apos;a&apos; after the &apos;w&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Allowance</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Allowance&quot; is the correct spelling. It means a sum of money given regularly, a permitted amount, or a concession.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Allowance (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A sum of money given regularly; a permitted amount; a concession or deduction.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She receives a weekly <strong>allowance</strong> from her parents.</li>
                  <li>• The baggage <strong>allowance</strong> is 20 kg.</li>
                  <li>• The company made an <strong>allowance</strong> for late arrivals.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Allowence (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Allowence&quot; is not a standard English word and is considered a misspelling of &quot;allowance&quot;.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Allowence&quot; is not used in standard English for &quot;allowance&quot;.</li>
                  <li>• Always use <strong>allowance</strong> when referring to a sum of money or a permitted amount.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Allowance:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Stipend</li>
                <li>• Grant</li>
                <li>• Payment</li>
                <li>• Quota</li>
                <li>• Deduction</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Allowence:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word in this context)</li>
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
            <li>• <strong>Allowance</strong> is spelled with an &apos;a&apos; after the &apos;w&apos;, not &quot;e&quot;.</li>
            <li>• Used to describe a sum of money, a permitted amount, or a concession.</li>
            <li>• The opposite is &quot;fine&quot; or &quot;penalty&quot; (in some contexts).</li>
            <li>• &quot;Allowence&quot; is not correct in this context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;allowence&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;allowence&quot; is never correct as a spelling for &quot;allowance&quot;. Always use &quot;allowance&quot; for a sum of money or a permitted amount.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;allowance&quot; has an &apos;a&apos; after the &apos;w&apos;, not &quot;e&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;allowance&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;allowance&quot; can refer to money, permitted amounts, or concessions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;allowance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: weekly allowance, baggage allowance, make allowance for, allowance policy.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;allowence&quot; happens because &apos;ence&apos; is a common English ending, but &quot;allowance&quot; ends with &apos;ance&apos;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Allowance</strong> is the correct spelling with an &apos;a&apos; after the &apos;w&apos;. It means a sum of money, a permitted amount, or a concession. The misspelling &quot;allowence&quot; is never correct. Use &quot;allowance&quot; in financial, travel, and everyday contexts.</p>
      </div>
    </div>
  )
} 