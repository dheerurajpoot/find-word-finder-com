import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tenure or Tenture - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;tenure&quot; and &quot;tenture&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TenureVsTenturePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Tenure or Tenture</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;tenure&quot; and &quot;tenture&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tenture</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tenture&quot; is a misspelling. The correct spelling is &quot;tenure&quot; with &quot;ure&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tenure</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tenure&quot; is the correct spelling. It means the holding of an office or position.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tenure (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The holding of an office or position; the period during which an office or position is held; permanent employment status, especially for teachers.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The professor received <strong>tenure</strong> after five years.</li>
                  <li>• His <strong>tenure</strong> as CEO was successful.</li>
                  <li>• The <strong>tenure</strong> of the contract was three years.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tenture (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tenture&quot; is a misspelling of &quot;tenure&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tenture&quot; is not used in standard English.</li>
                  <li>• Always use <strong>tenure</strong> when referring to position holding.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tenure:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Term</li>
                <li>• Period</li>
                <li>• Duration</li>
                <li>• Incumbency</li>
                <li>• Appointment</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tenture:</h4>
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
            <li>• <strong>Tenure</strong> is spelled with &quot;ure&quot; at the end: ten-ure.</li>
            <li>• It is commonly used in academic and professional contexts.</li>
            <li>• &quot;Tenture&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;tenere&quot; meaning &quot;to hold.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tenture&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tenture&quot; is never correct. The proper spelling is always &quot;tenure.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;tenure&quot; ends with &quot;ure&quot; - think of it as &quot;ten-ure.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between tenure and term?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Tenure often implies permanent status, while term usually refers to a fixed period of time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tenure&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tenure&quot; is very appropriate in formal and academic writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;tenure&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;tenture&quot; often happens by replacing &quot;ure&quot; with &quot;ture&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;tenure&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: academic tenure, tenure track, tenure review, and tenure committee.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tenure&quot; always about employment?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tenure&quot; can refer to holding any office or position, not just employment.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tenure&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tenure&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Tenure</strong> is the correct spelling with &quot;ure&quot; at the end: ten-ure. It means the holding of an office or position, especially permanent employment status. The misspelling &quot;tenture&quot; is never correct. Always use &quot;tenure&quot; when referring to holding positions, especially in academic or professional contexts.</p>
      </div>
    </div>
  )
} 