import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Agreed or Aggreed - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;agreed&quot; and &quot;aggreed&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AgreedVsAggreedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Agreed or Aggreed</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Understanding the difference between &quot;Agreed&quot; or &quot;Aggreed&quot;: these commonly confused spellings and how to use them properly.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aggreed</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aggreed&quot; is a misspelling. The correct spelling is &quot;agreed&quot; with a single &apos;g&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Agreed</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Agreed&quot; is the correct spelling. It is the past tense of &quot;agree&quot; and means to have consented or shared the same opinion.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Agreed</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Agreed</strong> (verb, past tense of &quot;agree&quot;): Consented to; shared the same opinion; accepted or approved something.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• We <strong>agreed</strong> to meet at noon.</li>
              <li>• They <strong>agreed</strong> on the new policy.</li>
              <li>• Everyone <strong>agreed</strong> with the decision.</li>
              <li>• The parties <strong>agreed</strong> to the terms of the contract.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Agreed</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Consented</li>
                <li>• Approved</li>
                <li>• Accepted</li>
                <li>• Concurred</li>
                <li>• Assented</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Harmonized</li>
                <li>• Accorded</li>
                <li>• Complied</li>
                <li>• Went along</li>
                <li>• Yielded</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Agreed</strong> is spelled with a single &apos;g&apos;, not double.</li>
            <li>• Commonly used to express past consent or shared opinions.</li>
            <li>• Can be used in both formal and informal contexts.</li>
            <li>• The word comes from Old French &quot;agreer&quot; meaning &quot;to please&quot;.</li>
            <li>• The noun form is &quot;agreement&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aggreed&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aggreed&quot; is never correct. The proper spelling is always &quot;agreed&quot; with a single &apos;g&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;agreed&quot; has only one &apos;g&apos; like &quot;agreeable&quot; and &quot;agreement&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between agreed and consented?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Agreed&quot; is more general, while &quot;consented&quot; implies formal permission.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can agreed be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;agreed&quot; is appropriate in both formal and informal writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is agreed always about opinions?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, it can also mean to accept or approve something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aggreed&quot; likely occurs because of confusion about the number of &apos;g&apos;s or unfamiliarity with the word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;agreed&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common phrases include: agreed to the terms, agreed on a plan, agreed with the decision, and mutually agreed.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;agreed&quot; be used in business writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;agreed&quot; is commonly used in business, legal, and everyday contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Agreed</strong> is the correct spelling with a single &apos;g&apos;. It is the past tense of &quot;agree&quot; and means to have consented or shared the same opinion. The misspelling &quot;aggreed&quot; is never correct. Use this word when talking about past consent, shared opinions, or approval.</p>
      </div>
    </div>
  )
} 