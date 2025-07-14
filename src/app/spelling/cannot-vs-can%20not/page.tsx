import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cannot or Can Not - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;cannot&quot; and &quot;can not&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CannotVsCanNotPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Cannot or Can Not</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;cannot&quot; and &quot;can not&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Can Not</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Can not&quot; is generally incorrect. The correct spelling is &quot;cannot&quot; as one word.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Cannot</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Cannot&quot; is the correct spelling. It means to be unable to do something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Cannot (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To be unable to do something; the negative form of &quot;can.&quot;</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I <strong>cannot</strong> attend the meeting tomorrow.</li>
                  <li>• She <strong>cannot</strong> swim very well.</li>
                  <li>• They <strong>cannot</strong> afford a new car.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Can Not (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Can not&quot; is generally incorrect in standard English, though it may be used for emphasis in rare cases.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Can not&quot; is rarely used in standard English.</li>
                  <li>• Always use <strong>cannot</strong> when expressing inability.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Cannot:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Unable to</li>
                <li>• Incapable of</li>
                <li>• Not able to</li>
                <li>• Impossible to</li>
                <li>• Unwilling to</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Can Not:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (Generally incorrect; use cannot instead)</li>
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
            <li>• <strong>Cannot</strong> is spelled as one word, not two separate words.</li>
            <li>• The word is a contraction of &quot;can&quot; and &quot;not.&quot;</li>
            <li>• Used to express inability, impossibility, or prohibition.</li>
            <li>• Can be used in formal and informal contexts.</li>
            <li>• &quot;Can not&quot; is rarely correct in standard English.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;can not&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Can not&quot; is rarely correct. The proper spelling is almost always &quot;cannot.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as one word - &quot;cannot&quot; - like other contractions such as &quot;don&apos;t&quot; and &quot;won&apos;t.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between cannot and can&apos;t?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both mean the same thing, but &quot;cannot&quot; is more formal while &quot;can&apos;t&quot; is more informal.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;can not&quot; likely occurs because people think of it as two separate words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;cannot&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: cannot help, cannot wait, and cannot afford.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can cannot be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;cannot&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is cannot always about ability?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cannot&quot; can also express impossibility, prohibition, or unwillingness.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word cannot?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word is a contraction of &quot;can&quot; and &quot;not&quot; and has been used in English since the 15th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Cannot</strong> is the correct spelling as one word. It means to be unable to do something and is the negative form of &quot;can.&quot; The spelling &quot;can not&quot; is rarely correct in standard English. Use &quot;cannot&quot; to express inability, impossibility, or prohibition in both formal and informal contexts.</p>
      </div>
    </div>
  )
} 