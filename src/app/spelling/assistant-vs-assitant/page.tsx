import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Assistant vs Assitant - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "assistant" and "assitant". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AssistantVsAssitantPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Assistant vs Assitant</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">assitant</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">assistant</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling with double &quot;s&quot;.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Assistant (noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A person who helps or supports someone else in their work, often in a subordinate role. 
              An assistant provides aid, support, or services to help accomplish tasks or manage responsibilities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>She works as a teaching <strong>assistant</strong> at the university.</li>
              <li>The CEO&apos;s <strong>assistant</strong> manages his schedule and correspondence.</li>
              <li>We hired a new <strong>assistant</strong> to help with the project.</li>
              <li>The research <strong>assistant</strong> collected data for the study.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;assistant&quot; and &quot;assitant&quot; likely stems from:
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
            <strong>Word origin:</strong> The word &quot;assistant&quot; comes from the verb &quot;assist,&quot; 
            which has double &quot;s&quot; and means to help or support.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Spelling pattern:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Double &quot;s&quot; after &quot;a&quot;</li>
              <li>Single &quot;i&quot; in the middle</li>
              <li>Double &quot;s&quot; before &quot;ant&quot;</li>
              <li>&quot;ant&quot; suffix for person/agent formation</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Memory tip:</strong> Think of &quot;assistant&quot; as having two &quot;s&quot;s because an assistant 
            provides systematic and supportive help (double &quot;s&quot; for &quot;systematic support&quot;).
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Assistant&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Professional:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>aide</li>
              <li>helper</li>
              <li>support staff</li>
              <li>deputy</li>
              <li>subordinate</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Contextual:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>secretary</li>
              <li>clerk</li>
              <li>associate</li>
              <li>partner</li>
              <li>colleague</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Usage Tips */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Tips</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">When to use &quot;assistant&quot;:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>When referring to someone who helps in a professional capacity</li>
              <li>In job titles and professional descriptions</li>
              <li>When discussing support roles in organizations</li>
              <li>In academic contexts for teaching or research support</li>
              <li>When describing someone who aids in accomplishing tasks</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Common contexts:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Business and office environments</li>
              <li>Education and academia</li>
              <li>Healthcare and medical fields</li>
              <li>Research and scientific work</li>
              <li>Administrative and clerical work</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;assitant&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;assitant&quot; is never correct in standard English. It is always a spelling error for &quot;assistant.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the pronunciation of &quot;assistant&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: It is pronounced as /əˈsɪstənt/ with the stress on the second syllable. The double &quot;s&quot; is pronounced as a single &quot;s&quot; sound.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Are there related words with similar spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;assist&quot; (the verb), &quot;assistance&quot; (the help provided), and &quot;assisting&quot; 
              all have the same double &quot;s&quot; pattern.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;assistant&quot; comes from &quot;assist&quot; (which has double &quot;s&quot;) 
              plus &quot;ant.&quot; Think: assist + ant = assistant. The double &quot;s&quot; is maintained throughout.
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
          <strong>&quot;Assistant&quot;</strong> is the correct spelling with double &quot;s.&quot; The spelling &quot;assitant&quot; 
          is incorrect and should never be used. This word comes from the verb &quot;assist&quot; and maintains the double &quot;s&quot; 
          spelling pattern. Remember that &quot;assistant&quot; has two &quot;s&quot;s because an assistant provides systematic and supportive help, 
          and it follows the pattern: assist + ant = assistant.
        </p>
      </div>
    </div>
  )
} 