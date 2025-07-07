import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Agreed vs Agred - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;agreed&quot; and &quot;agred&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AgreedVsAgredPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Agreed vs Agred</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;agreed&quot; or &quot;agred&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Agred</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Agred&quot; is a common misspelling. The correct spelling is &quot;agreed&quot; with two &apos;e&apos;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Agreed</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Agreed&quot; is the correct spelling. It is the past tense and past participle of &quot;agree&quot;, meaning to have the same opinion or to consent to something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Agreed</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Agreed</strong> (verb): The past tense and past participle of &quot;agree&quot;; to have the same opinion or to consent to something.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• We <strong>agreed</strong> to meet at noon.</li>
              <li>• They <strong>agreed</strong> on the terms of the contract.</li>
              <li>• Everyone <strong>agreed</strong> that it was a good idea.</li>
              <li>• She <strong>agreed</strong> to help with the project.</li>
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
                <li>• Accorded</li>
                <li>• Harmonized</li>
                <li>• Unified</li>
                <li>• Settled</li>
                <li>• Resolved</li>
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
            <li>• <strong>Agreed</strong> is spelled with two &apos;e&apos;s, not one.</li>
            <li>• Used to indicate consensus or consent.</li>
            <li>• The noun form is &quot;agreement&quot;.</li>
            <li>• The opposite is &quot;disagreed&quot;.</li>
            <li>• Commonly used in both formal and informal contexts.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;agred&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;agred&quot; is never correct. The proper spelling is always &quot;agreed&quot; with two &apos;e&apos;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;agreed&quot; comes from &quot;agree&quot; plus &quot;-ed&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;agreed&quot; be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;agreed&quot; can describe something that has been decided or accepted by everyone.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;agreed&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: agreed upon, mutually agreed, agreed terms.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;agred&quot; happens because the double &apos;e&apos; is sometimes forgotten or omitted.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Agreed</strong> is the correct spelling with two &apos;e&apos;s. It is the past tense of &quot;agree&quot; and means to have the same opinion or to consent. The misspelling &quot;agred&quot; is never correct. Use &quot;agreed&quot; in both formal and informal contexts.</p>
      </div>
    </div>
  )
} 