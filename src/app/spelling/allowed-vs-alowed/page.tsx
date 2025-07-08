import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Allowed or Alowed - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;allowed&quot; and &quot;alowed&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AllowedVsAlowedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Allowed or Alowed</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;allowed&quot; and &quot;alowed&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alowed</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alowed&quot; is a misspelling. The correct spelling is &quot;allowed&quot; with two &quot;l&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Allowed</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Allowed&quot; is the correct spelling. It means permitted or given permission.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Allowed (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past tense and past participle of &quot;allow&quot;; permitted or given permission.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Smoking is not <strong>allowed</strong> in this building.</li>
                  <li>• They <strong>allowed</strong> us to enter the restricted area.</li>
                  <li>• The teacher <strong>allowed</strong> extra time for the test.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Alowed (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Alowed&quot; is a misspelling of &quot;allowed&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Alowed&quot; is not used in standard English.</li>
                  <li>• Always use <strong>allowed</strong> when referring to permission.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Allowed:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Permitted</li>
                <li>• Authorized</li>
                <li>• Approved</li>
                <li>• Sanctioned</li>
                <li>• Granted</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Alowed:</h4>
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
            <li>• <strong>Allowed</strong> is spelled with two &quot;l&quot;s, not one.</li>
            <li>• Used as the past tense and past participle of &quot;allow.&quot;</li>
            <li>• Commonly used in rules, regulations, and permission contexts.</li>
            <li>• The word comes from Old French &quot;alouer&quot; meaning to approve.</li>
            <li>• &quot;Alowed&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alowed&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alowed&quot; is never correct. The proper spelling is always &quot;allowed.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;al-low-ed&quot; - it comes from the verb &quot;allow&quot; which has two &quot;l&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between allowed and permitted?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: They are synonyms, but &quot;permitted&quot; is more formal, while &quot;allowed&quot; is more commonly used in everyday speech.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;allowed&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: not allowed, allowed to, allowed in, and allowed out.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alowed&quot; occurs because people drop one &quot;l&quot; thinking it should be spelled like &quot;a lot.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can allowed be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;allowed&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is allowed always about permission?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;allowed&quot; always refers to permission or authorization to do something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can allowed be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;allowed&quot; is a verb (past tense/participle). The noun form would be &quot;allowance&quot; or &quot;permission.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Allowed</strong> is the correct spelling with two &quot;l&quot;s. It means permitted or given permission. The misspelling &quot;alowed&quot; is never correct. Use &quot;allowed&quot; in permission and authorization contexts.</p>
      </div>
    </div>
  )
} 