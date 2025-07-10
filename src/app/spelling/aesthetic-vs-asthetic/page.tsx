import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Aesthetic vs Asthetic - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "aesthetic" and "asthetic". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AestheticVsAstheticPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Aesthetic vs Asthetic</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">asthetic</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">aesthetic</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling with &quot;ae&quot; at the beginning.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Aesthetic (adjective/noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Relating to beauty, art, and taste; concerned with the appreciation of beauty. As a noun, it refers to 
              a set of principles underlying the work of a particular artist or artistic movement.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>The building has a modern <strong>aesthetic</strong> appeal.</li>
              <li>She has a great sense of <strong>aesthetic</strong> design.</li>
              <li>The film&apos;s <strong>aesthetic</strong> was influenced by French cinema.</li>
              <li>His work focuses on the <strong>aesthetic</strong> qualities of light and color.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;aesthetic&quot; and &quot;asthetic&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic pronunciation:</strong> Both spellings sound similar when pronounced</li>
            <li><strong>Typographical errors:</strong> Missing the &quot;e&quot; when typing quickly</li>
            <li><strong>Similar word patterns:</strong> Some words do start with &quot;ast&quot;</li>
            <li><strong>Unfamiliar word:</strong> Not commonly used in everyday conversation</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
          </ul>
        </div>
      </Card>

      {/* Etymology and Spelling Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Etymology and Spelling Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Word origin:</strong> The word &quot;aesthetic&quot; comes from the Greek &quot;aisthētikos,&quot; 
            meaning &quot;pertaining to sense perception,&quot; which explains the &quot;ae&quot; beginning.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Spelling pattern:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>&quot;ae&quot; at the beginning (Greek diphthong)</li>
              <li>&quot;sth&quot; combination in the middle</li>
              <li>&quot;etic&quot; ending (Greek suffix)</li>
              <li>Maintains Greek origin spelling</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Memory tip:</strong> Think of &quot;aesthetic&quot; as having &quot;ae&quot; because it relates to 
            &quot;art&quot; and &quot;beauty&quot; (both start with vowels). The &quot;ae&quot; is a Greek diphthong.
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Aesthetic&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Beauty-related:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>beautiful</li>
              <li>artistic</li>
              <li>pleasing</li>
              <li>attractive</li>
              <li>elegant</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Style-related:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>stylistic</li>
              <li>design-oriented</li>
              <li>visual</li>
              <li>decorative</li>
              <li>ornamental</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Usage Tips */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Tips</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">When to use &quot;aesthetic&quot;:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>When discussing beauty, art, or design</li>
              <li>In academic contexts about art theory</li>
              <li>When describing visual appeal or style</li>
              <li>In philosophical discussions about beauty</li>
              <li>When referring to artistic principles</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Common contexts:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Art and design criticism</li>
              <li>Philosophy and art theory</li>
              <li>Fashion and style</li>
              <li>Architecture and interior design</li>
              <li>Film and media studies</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;asthetic&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;asthetic&quot; is never correct in standard English. It is always a spelling error for &quot;aesthetic.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the pronunciation of &quot;aesthetic&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: It is pronounced as /esˈθetɪk/ or /ɪsˈθetɪk/ with the stress on the second syllable. The &quot;ae&quot; is pronounced as &quot;e.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Are there related words with similar spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;aesthetics&quot; (the study of beauty), &quot;aesthetically&quot; (adverb), and &quot;aesthetician&quot; 
              all have the same &quot;ae&quot; beginning.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;aesthetic&quot; starts with &quot;ae&quot; because it relates to &quot;art&quot; and &quot;beauty.&quot; 
              Think: ae + sthetic = aesthetic (art + beauty).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a very common spelling error, especially since the &quot;ae&quot; combination is unusual in English 
              and the word is frequently used in modern contexts.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Aesthetic&quot;</strong> is the correct spelling with &quot;ae&quot; at the beginning. The spelling &quot;asthetic&quot; 
          is incorrect and should never be used. This word comes from the Greek &quot;aisthētikos&quot; and maintains the &quot;ae&quot; 
          beginning. Remember that &quot;aesthetic&quot; starts with &quot;ae&quot; because it relates to &quot;art&quot; and &quot;beauty,&quot; 
          and it follows the Greek pattern: ae + sthetic = aesthetic.
        </p>
      </div>
    </div>
  )
} 