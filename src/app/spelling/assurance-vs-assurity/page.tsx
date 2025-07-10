import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Assurance vs Assurity - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "assurance" and "assurity". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AssuranceVsAssurityPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Assurance vs Assurity</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">assurity</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">assurance</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling with &quot;ance&quot; ending.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Assurance (noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A positive declaration intended to give confidence; a promise or guarantee. It can also refer to 
              confidence, certainty, or a feeling of security about something.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>He gave me his <strong>assurance</strong> that the project would be completed on time.</li>
              <li>The company provides quality <strong>assurance</strong> for all its products.</li>
              <li>She spoke with <strong>assurance</strong> about her ability to handle the challenge.</li>
              <li>We need <strong>assurance</strong> that the safety measures are in place.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;assurance&quot; and &quot;assurity&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic similarity:</strong> Both spellings might sound similar when pronounced</li>
            <li><strong>Similar word patterns:</strong> Some words do end with &quot;ity&quot; instead of &quot;ance&quot;</li>
            <li><strong>Typographical errors:</strong> Confusing &quot;ance&quot; and &quot;ity&quot; endings</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
            <li><strong>Auto-correct issues:</strong> Some spell-checkers might not catch this error</li>
          </ul>
        </div>
      </Card>

      {/* Etymology and Spelling Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Etymology and Spelling Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Word origin:</strong> The word &quot;assurance&quot; comes from the verb &quot;assure,&quot; 
            which derives from the Latin &quot;securus,&quot; meaning &quot;secure.&quot;
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Spelling pattern:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Double &quot;s&quot; after &quot;a&quot;</li>
              <li>Single &quot;u&quot; in the middle</li>
              <li>Double &quot;s&quot; before &quot;ance&quot;</li>
              <li>&quot;ance&quot; suffix for noun formation (not &quot;ity&quot;)</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Memory tip:</strong> Think of &quot;assurance&quot; as having &quot;ance&quot; because it provides 
            &quot;assurance&quot; (confidence) rather than &quot;assurity&quot; (which doesn&apos;t exist).
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Assurance&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Confidence:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>confidence</li>
              <li>certainty</li>
              <li>conviction</li>
              <li>self-assurance</li>
              <li>poise</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Guarantee:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>guarantee</li>
              <li>promise</li>
              <li>pledge</li>
              <li>warranty</li>
              <li>commitment</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Usage Tips */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Tips</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">When to use &quot;assurance&quot;:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>When referring to promises or guarantees</li>
              <li>To describe confidence or certainty</li>
              <li>In business contexts about quality or service</li>
              <li>When discussing security or reliability</li>
              <li>In formal contexts about commitments</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Common contexts:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Business and professional communication</li>
              <li>Legal documents and contracts</li>
              <li>Quality control and standards</li>
              <li>Customer service</li>
              <li>Personal relationships</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;assurity&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;assurity&quot; is never correct in standard English. It is always a spelling error for &quot;assurance.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the pronunciation of &quot;assurance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: It is pronounced as /əˈʃʊrəns/ with the stress on the second syllable. The &quot;ss&quot; is pronounced as &quot;sh.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Are there related words with similar spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;assure&quot; (the verb), &quot;assured&quot; (adjective), and &quot;assuring&quot; 
              all have the same &quot;assur&quot; pattern with &quot;ance&quot; ending.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;assurance&quot; ends with &quot;ance&quot; (like &quot;confidence&quot; and &quot;reliance&quot;). 
              Think: assure + ance = assurance. The word &quot;assurity&quot; doesn&apos;t exist.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a relatively common spelling error, especially when people confuse &quot;ance&quot; 
              and &quot;ity&quot; endings, which are both common noun suffixes.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Assurance&quot;</strong> is the correct spelling with &quot;ance&quot; ending. The spelling &quot;assurity&quot; 
          is incorrect and should never be used. This word comes from the verb &quot;assure&quot; and maintains the &quot;ance&quot; 
          ending pattern. Remember that &quot;assurance&quot; ends with &quot;ance&quot; (like other confidence-related words) 
          and follows the pattern: assure + ance = assurance.
        </p>
      </div>
    </div>
  )
} 