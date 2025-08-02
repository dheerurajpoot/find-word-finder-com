import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Testimony or Testomony - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;testimony&quot; and &quot;testomony&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TestimonyVsTestomonyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Testimony or Testomony</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;testimony&quot; and &quot;testomony&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Testomony</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Testomony&quot; is a misspelling. The correct spelling is &quot;testimony&quot; with &quot;ny&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Testimony</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Testimony&quot; is the correct spelling. It means evidence or statement given under oath.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Testimony (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A formal written or spoken statement, especially one given in a court of law; evidence or proof provided by the existence or appearance of something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The witness gave <strong>testimony</strong> in court.</li>
                  <li>• Her <strong>testimony</strong> helped convict the criminal.</li>
                  <li>• The success was <strong>testimony</strong> to his hard work.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Testomony (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Testomony&quot; is a misspelling of &quot;testimony&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Testomony&quot; is not used in standard English.</li>
                  <li>• Always use <strong>testimony</strong> when referring to evidence.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Testimony:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Evidence</li>
                <li>• Statement</li>
                <li>• Declaration</li>
                <li>• Witness</li>
                <li>• Proof</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Testomony:</h4>
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
            <li>• <strong>Testimony</strong> is spelled with &quot;ny&quot; at the end: tes-ti-mo-ny.</li>
            <li>• It is commonly used in legal and formal contexts.</li>
            <li>• &quot;Testomony&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;testimonium&quot; meaning &quot;evidence.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;testomony&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;testomony&quot; is never correct. The proper spelling is always &quot;testimony.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;testimony&quot; ends with &quot;ny&quot; - think of it as &quot;tes-ti-mo-ny.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between testimony and evidence?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Testimony is a specific type of evidence - it&apos;s the statement given by a witness under oath.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;testimony&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;testimony&quot; is very appropriate in formal and legal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;testimony&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;testomony&quot; often happens by omitting the &quot;i&quot; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;testimony&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: sworn testimony, expert testimony, testimony under oath, and bear testimony.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;testimony&quot; always legal?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;testimony&quot; can also refer to evidence or proof in non-legal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;testimony&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;testimony&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Testimony</strong> is the correct spelling with &quot;ny&quot; at the end: tes-ti-mo-ny. It means a formal statement given under oath or evidence provided by something. The misspelling &quot;testomony&quot; is never correct. Always use &quot;testimony&quot; when referring to legal statements, evidence, or proof.</p>
      </div>
    </div>
  )
} 