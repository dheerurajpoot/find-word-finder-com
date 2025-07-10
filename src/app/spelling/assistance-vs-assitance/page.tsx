import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Assistance vs Assitance - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "assistance" and "assitance". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AssistanceVsAssitancePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Assistance vs Assitance</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">assitance</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">assistance</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling with double &quot;s&quot;.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Assistance (noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Help, support, or aid provided to someone in need. It refers to the act of helping or the help itself, 
              often in the form of services, resources, or support to accomplish a task or overcome a difficulty.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>She provided <strong>assistance</strong> to the elderly woman crossing the street.</li>
              <li>The government offers financial <strong>assistance</strong> to low-income families.</li>
              <li>I need your <strong>assistance</strong> with this difficult project.</li>
              <li>Technical <strong>assistance</strong> is available 24/7 for customers.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;assistance&quot; and &quot;assitance&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic pronunciation:</strong> The double &quot;s&quot; sound can be difficult to hear clearly</li>
            <li><strong>Typographical errors:</strong> Missing one &quot;s&quot; when typing quickly</li>
            <li><strong>Similar word patterns:</strong> Some words have single &quot;s&quot; after &quot;a&quot;</li>
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
            <strong>Word origin:</strong> The word &quot;assistance&quot; comes from the verb &quot;assist,&quot; 
            which has double &quot;s&quot; and means to help or support.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Spelling pattern:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Double &quot;s&quot; after &quot;a&quot;</li>
              <li>Single &quot;i&quot; in the middle</li>
              <li>Double &quot;s&quot; before &quot;ance&quot;</li>
              <li>&quot;ance&quot; suffix for noun formation</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Memory tip:</strong> Think of &quot;assistance&quot; as having two &quot;s&quot;s because it involves 
            a systematic and supportive help (double &quot;s&quot; for &quot;systematic support&quot;).
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Assistance&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Formal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>help</li>
              <li>support</li>
              <li>aid</li>
              <li>service</li>
              <li>backing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Contextual:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>guidance</li>
              <li>cooperation</li>
              <li>collaboration</li>
              <li>facilitation</li>
              <li>reinforcement</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Usage Tips */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Tips</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">When to use &quot;assistance&quot;:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>When referring to help or support provided to someone</li>
              <li>In formal contexts about aid or services</li>
              <li>When discussing government or organizational help</li>
              <li>In professional contexts about support services</li>
              <li>When describing aid in accomplishing tasks</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Common contexts:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Government and social services</li>
              <li>Healthcare and medical support</li>
              <li>Business and customer service</li>
              <li>Education and academic support</li>
              <li>Emergency and disaster relief</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;assitance&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;assitance&quot; is never correct in standard English. It is always a spelling error for &quot;assistance.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the pronunciation of &quot;assistance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: It is pronounced as /əˈsɪstəns/ with the stress on the second syllable. The double &quot;s&quot; is pronounced as a single &quot;s&quot; sound.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Are there related words with similar spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;assist&quot; (the verb), &quot;assistant&quot; (the person who assists), and &quot;assisting&quot; 
              all have the same double &quot;s&quot; pattern.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;assistance&quot; comes from &quot;assist&quot; (which has double &quot;s&quot;) 
              plus &quot;ance.&quot; Think: assist + ance = assistance. The double &quot;s&quot; is maintained throughout.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a relatively common spelling error, especially when typing quickly or when people 
              are not familiar with the word&apos;s etymology and spelling pattern.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Assistance&quot;</strong> is the correct spelling with double &quot;s.&quot; The spelling &quot;assitance&quot; 
          is incorrect and should never be used. This word comes from the verb &quot;assist&quot; and maintains the double &quot;s&quot; 
          spelling pattern. Remember that &quot;assistance&quot; has two &quot;s&quot;s because it involves systematic and supportive help, 
          and it follows the pattern: assist + ance = assistance.
        </p>
      </div>
    </div>
  )
} 