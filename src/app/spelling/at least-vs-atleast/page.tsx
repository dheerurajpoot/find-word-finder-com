import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'At Least vs Atleast - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "at least" and "atleast". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AtLeastVsAtleastPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">At Least or Atleast</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">atleast</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">at least</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling of the phrase meaning &quot;not less than&quot; or &quot;if nothing else.&quot;</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">At least (phrase)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A phrase used to indicate a minimum amount, degree, or level. It can also mean &quot;if nothing else&quot; 
              or &quot;at the minimum.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>I need <strong>at least</strong> three hours to complete this project.</li>
              <li><strong>At least</strong> we tried our best, even if we didn&apos;t win.</li>
              <li>The meeting will take <strong>at least</strong> two hours.</li>
              <li><strong>At least</strong> the weather is nice today.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;at least&quot; and &quot;atleast&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic similarity:</strong> Both spellings would sound identical when pronounced</li>
            <li><strong>Common misspelling:</strong> Many people combine the two words into one</li>
            <li><strong>Inconsistent English spelling rules:</strong> Some phrases are written as compound words</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
            <li><strong>Typographical errors:</strong> Missing spaces when typing quickly</li>
            <li><strong>Influence from other words:</strong> Words like &quot;atlas&quot; and &quot;atmosphere&quot; are single words</li>
          </ul>
        </div>
      </Card>

      {/* Grammar Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Grammar Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Spelling rule:</strong> &quot;At least&quot; is a prepositional phrase that should always be written as two separate words. 
            It is not a compound word and should never be combined.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Similar phrases:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li><strong>at most</strong> (not &quot;atmost&quot;)</li>
              <li><strong>at best</strong> (not &quot;atbest&quot;)</li>
              <li><strong>at worst</strong> (not &quot;atworst&quot;)</li>
              <li><strong>at first</strong> (not &quot;atfirst&quot;)</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Note:</strong> All prepositional phrases with &quot;at&quot; should be written as separate words.
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;At Least&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Formal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>minimum</li>
              <li>not less than</li>
              <li>if nothing else</li>
              <li>at the minimum</li>
              <li>at the very least</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Informal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>anyway</li>
              <li>anyhow</li>
              <li>in any case</li>
              <li>at any rate</li>
              <li>if nothing else</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Notes */}
      <Card className="mb-8 p-6">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>Use &quot;at least&quot; as two separate words, never combined</li>
            <li>Remember that it&apos;s a prepositional phrase, not a compound word</li>
            <li>Common contexts include quantities, minimums, and consolation statements</li>
            <li>The phrase &quot;at least&quot; can express both quantity and consolation</li>
            <li>Always spell it as &quot;at least&quot; not &quot;atleast&quot;</li>
            <li>Think of it as &quot;at&quot; + &quot;least&quot; to remember the spelling</li>
          </ul>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;atleast&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;atleast&quot; is never correct in standard English. The correct spelling is always &quot;at least&quot; as two separate words.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the difference between &quot;at least&quot; and &quot;at most&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: &quot;At least&quot; indicates a minimum amount, while &quot;at most&quot; indicates a maximum amount. 
              For example: &quot;at least 5&quot; means 5 or more, while &quot;at most 5&quot; means 5 or fewer.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Can &quot;at least&quot; be used at the beginning of a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;at least&quot; can be used at the beginning of a sentence, especially when expressing consolation. 
              Example: &quot;At least we tried our best.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;at least&quot; is two separate words. Think of it as &quot;at&quot; + &quot;least&quot; 
              or use the mnemonic: &quot;At least has a space between &apos;at&apos; and &apos;least&apos;.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a very common spelling mistake. Many people combine the two words into one, 
              especially when typing quickly or in informal writing.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What about other similar phrases?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: All prepositional phrases with &quot;at&quot; should be written as separate words: &quot;at most,&quot; 
              &quot;at best,&quot; &quot;at worst,&quot; &quot;at first,&quot; etc.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;At least&quot;</strong> is the correct spelling of the phrase meaning &quot;not less than&quot; or &quot;if nothing else.&quot; 
          The spelling &quot;atleast&quot; is incorrect and should never be used. Remember that &quot;at least&quot; is a prepositional phrase 
          that should always be written as two separate words, not as a compound word. This is a very common spelling mistake, 
          so it&apos;s important to remember the correct spelling pattern.
        </p>
      </div>
    </div>
  )
} 