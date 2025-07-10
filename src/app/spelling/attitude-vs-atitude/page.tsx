import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Attitude vs Atitude - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "attitude" and "atitude". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AttitudeVsAtitudePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Attitude or Atitude</h1>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-block">
          <p className="text-lg md:text-xl font-semibold">Which spelling is correct?</p>
        </div>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-200 bg-red-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">❌</span>
            <h2 className="text-2xl font-bold text-red-800">Incorrect</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-red-600 mb-4">atitude</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">attitude</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling of the word meaning a way of thinking or feeling about something.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Attitude (noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A settled way of thinking or feeling about someone or something, typically one that is reflected in a person&apos;s behavior. 
              A mental position, feeling, or opinion about a fact or state.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>She has a positive <strong>attitude</strong> toward her work.</li>
              <li>His <strong>attitude</strong> toward authority figures needs improvement.</li>
              <li>The team&apos;s winning <strong>attitude</strong> helped them succeed.</li>
              <li>Your <strong>attitude</strong> determines your altitude in life.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;attitude&quot; and &quot;atitude&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic similarity:</strong> Both spellings would sound similar when pronounced</li>
            <li><strong>Common misspelling:</strong> Many people drop the first &quot;t&quot; when spelling the word</li>
            <li><strong>Inconsistent English spelling rules:</strong> Some words do have silent letters</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
            <li><strong>Typographical errors:</strong> Missing letters when typing quickly</li>
            <li><strong>Influence from other words:</strong> Words like &quot;altitude&quot; have similar patterns</li>
          </ul>
        </div>
      </Card>

      {/* Grammar Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Grammar Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Spelling rule:</strong> The word &quot;attitude&quot; comes from the Latin word &quot;aptitudo&quot; and includes 
            two &quot;t&quot; letters, both of which are pronounced.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Related words:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li><strong>attitudinal</strong> (adjective)</li>
              <li><strong>attitudinally</strong> (adverb)</li>
              <li><strong>attitudinize</strong> (verb)</li>
              <li><strong>attitudinizing</strong> (noun)</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Note:</strong> All related words include both &quot;t&quot; letters and follow the same spelling pattern.
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Attitude&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Formal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>perspective</li>
              <li>outlook</li>
              <li>mindset</li>
              <li>disposition</li>
              <li>temperament</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Informal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>mood</li>
              <li>feeling</li>
              <li>stance</li>
              <li>approach</li>
              <li>viewpoint</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Notes */}
      <Card className="mb-8 p-6">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>Use &quot;attitude&quot; when referring to a person&apos;s way of thinking or feeling about something</li>
            <li>Remember that &quot;attitude&quot; has two &quot;t&quot; letters</li>
            <li>Common contexts include psychology, behavior, workplace, and personal development</li>
            <li>The word &quot;attitude&quot; can describe both positive and negative mental positions</li>
            <li>Always spell it as &quot;attitude&quot; not &quot;atitude&quot;</li>
            <li>Think of it as &quot;at&quot; + &quot;titude&quot; to remember the spelling</li>
          </ul>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;atitude&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;atitude&quot; is never correct in standard English. The correct spelling is always &quot;attitude.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the difference between &quot;attitude&quot; and &quot;altitude&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: &quot;Attitude&quot; refers to a mental position or way of thinking, while &quot;altitude&quot; refers to 
              the height of something above sea level or ground level.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;attitude&quot; has two &quot;t&quot; letters. Think of it as &quot;at&quot; + &quot;titude&quot; 
              or use the mnemonic: &quot;Your attitude has two &apos;t&apos;s for &apos;thinking&apos; and &apos;feeling&apos;.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a common spelling mistake. Many people drop the first &quot;t&quot; when writing &quot;attitude,&quot; 
              especially when typing quickly or relying on phonetic spelling.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Can &quot;attitude&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;attitude&quot; can be used in various contexts including psychology, workplace behavior, 
              sports, education, and personal relationships.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What about the adjective form?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: The adjective form is &quot;attitudinal&quot; and it also follows the same spelling pattern with two &quot;t&quot; letters.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Attitude&quot;</strong> is the correct spelling of the word meaning a way of thinking or feeling about someone or something. 
          The spelling &quot;atitude&quot; is incorrect and should never be used. Remember that &quot;attitude&quot; has two &quot;t&quot; letters 
          and comes from the Latin word &quot;aptitudo.&quot; This is a common spelling mistake, so it&apos;s important to remember 
          the correct spelling pattern.
        </p>
      </div>
    </div>
  )
} 