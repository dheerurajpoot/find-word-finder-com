import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Appropriate or Approppriate - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;appropriate&quot; and &quot;approppriate&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AppropriateVsApproppriatePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Appropriate or Approppriate</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;appropriate&quot; and &quot;approppriate&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Approppriate</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Approppriate&quot; is a misspelling. The correct spelling is &quot;appropriate&quot; with one &quot;p&quot; in &quot;pri.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Appropriate</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Appropriate&quot; is the correct spelling. It means suitable or proper for a particular situation.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Appropriate (adjective/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Suitable or proper for a particular situation, purpose, or person; to take something for one&apos;s own use.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• That was an <strong>appropriate</strong> response to the situation.</li>
                  <li>• Please wear <strong>appropriate</strong> clothing for the interview.</li>
                  <li>• The company <strong>appropriated</strong> funds for the new project.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Approppriate (adjective/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Approppriate&quot; is a misspelling of &quot;appropriate&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Approppriate&quot; is not used in standard English.</li>
                  <li>• Always use <strong>appropriate</strong> when referring to suitability.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Appropriate:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Suitable</li>
                <li>• Proper</li>
                <li>• Fitting</li>
                <li>• Correct</li>
                <li>• Right</li>
                <li>• Adequate</li>
                <li>• Pertinent</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Approppriate:</h4>
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
            <li>• <strong>Appropriate</strong> is spelled with one &quot;p&quot; in &quot;pri&quot; not two.</li>
            <li>• Used to describe what is suitable or proper.</li>
            <li>• Can be used as both an adjective and a verb.</li>
            <li>• The word comes from Latin &quot;appropriatus&quot; meaning &quot;made one&apos;s own.&quot;</li>
            <li>• &quot;Approppriate&quot; is never correct in any context.</li>
            <li>• Often used in phrases like &quot;appropriate for&quot; or &quot;appropriate to.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;approppriate&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;approppriate&quot; is never correct. The proper spelling is always &quot;appropriate&quot; with one &quot;p&quot; in &quot;pri.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ap-pro-pri-ate&quot; - it has one &quot;p&quot; in &quot;pri&quot;, not two.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between appropriate and suitable?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both mean fitting for a purpose, but &quot;appropriate&quot; often implies social or cultural acceptability, while &quot;suitable&quot; is more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can appropriate be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;appropriate&quot; is very appropriate in formal writing and professional contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;approppriate&quot; likely occurs because of confusion about the number of &quot;p&quot;s in the word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;appropriate&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: appropriate for, appropriate to, appropriate behavior, and age-appropriate.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is appropriate always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Appropriate&quot; is neutral - it means suitable for the context, which can be positive or negative depending on the situation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can appropriate be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;appropriate&quot; is an adjective or verb. The noun form is &quot;appropriateness&quot; (the appropriateness of the behavior).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Appropriate</strong> is the correct spelling with one &quot;p&quot; in &quot;pri&quot; not two. It means suitable or proper for a particular situation. The misspelling &quot;approppriate&quot; is never correct. Use &quot;appropriate&quot; to describe what is fitting or proper in both formal and informal contexts.</p>
      </div>
    </div>
  )
} 