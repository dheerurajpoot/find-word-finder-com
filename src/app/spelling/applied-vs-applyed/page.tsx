import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Applied or Applyed - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;applied&quot; and &quot;applyed&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AppliedVsApplyedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Applied or Applyed</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;applied&quot; and &quot;applyed&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Applyed</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Applyed&quot; is a misspelling. The correct spelling is &quot;applied&quot; with one &quot;y&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Applied</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Applied&quot; is the correct spelling. It means put to use, used, or implemented.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Applied (adjective/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Put to use, used, or implemented; relating to practical application rather than theory.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>applied</strong> for the job last week.</li>
                  <li>• The theory was <strong>applied</strong> to solve the problem.</li>
                  <li>• He studied <strong>applied</strong> mathematics in college.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Applyed (adjective/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Applyed&quot; is a misspelling of &quot;applied&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Applyed&quot; is not used in standard English.</li>
                  <li>• Always use <strong>applied</strong> when referring to putting something to use.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Applied:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Used</li>
                <li>• Implemented</li>
                <li>• Utilized</li>
                <li>• Employed</li>
                <li>• Practical</li>
                <li>• Put to use</li>
                <li>• Executed</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Applyed:</h4>
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
            <li>• <strong>Applied</strong> is spelled with one &quot;y&quot;.</li>
            <li>• Used to describe putting something to practical use.</li>
            <li>• Can function as both an adjective and the past tense of &quot;apply.&quot;</li>
            <li>• The word comes from the verb &quot;apply&quot; + the suffix &quot;-ed.&quot;</li>
            <li>• &quot;Applyed&quot; is never correct in any context.</li>
            <li>• Often used in phrases like &quot;applied science&quot; or &quot;applied for.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;applyed&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;applyed&quot; is never correct. The proper spelling is always &quot;applied&quot; with one &quot;y&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ap-ply-ed&quot; - it&apos;s the past tense of &quot;apply&quot; with &quot;-ed&quot; added.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between applied and theoretical?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Applied&quot; refers to practical use, while &quot;theoretical&quot; refers to abstract concepts or ideas.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can applied be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;applied&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;applyed&quot; likely occurs because of confusion with words that have double consonants.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;applied&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: applied for, applied science, applied research, and applied mathematics.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is applied always about practical use?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;applied&quot; always refers to putting something to practical use rather than just theoretical understanding.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can applied be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;applied&quot; is an adjective or the past tense of the verb &quot;apply.&quot; The noun form would be &quot;application.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Applied</strong> is the correct spelling with one &quot;y&quot;. It means put to use, used, or implemented. The misspelling &quot;applyed&quot; is never correct. Use &quot;applied&quot; to describe putting something to practical use.</p>
      </div>
    </div>
  )
} 