import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Assessment vs Assissment - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "assessment" and "assissment". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AssessmentVsAssissmentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Assessment vs Assissment</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">assissment</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">assessment</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling with double &quot;s&quot; and single &quot;s&quot;.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Assessment (noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              The act of evaluating, appraising, or judging the quality, value, or nature of something. 
              It can refer to formal evaluations, tests, or systematic reviews of performance, skills, or conditions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>The teacher conducted a comprehensive <strong>assessment</strong> of student performance.</li>
              <li>The property <strong>assessment</strong> determined the home&apos;s market value.</li>
              <li>Regular <strong>assessment</strong> of employee skills helps with career development.</li>
              <li>The medical <strong>assessment</strong> revealed no serious health issues.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;assessment&quot; and &quot;assissment&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic pronunciation:</strong> The &quot;s&quot; sounds can be difficult to distinguish</li>
            <li><strong>Typographical errors:</strong> Adding an extra &quot;s&quot; when typing quickly</li>
            <li><strong>Complex spelling pattern:</strong> Multiple &quot;s&quot; letters in different positions</li>
            <li><strong>Unfamiliar word:</strong> Not commonly used in everyday conversation</li>
            <li><strong>Auto-correct issues:</strong> Some spell-checkers might not catch this error</li>
          </ul>
        </div>
      </Card>

      {/* Etymology and Spelling Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Etymology and Spelling Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Word origin:</strong> The word &quot;assessment&quot; comes from the verb &quot;assess,&quot; 
            which has double &quot;s&quot; and means to evaluate or estimate.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Spelling pattern:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Double &quot;s&quot; after &quot;a&quot;</li>
              <li>Single &quot;e&quot; in the middle</li>
              <li>Single &quot;s&quot; before &quot;ment&quot;</li>
              <li>&quot;ment&quot; suffix for noun formation</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Memory tip:</strong> Think of &quot;assessment&quot; as having double &quot;s&quot; at the beginning 
            (from &quot;assess&quot;) and single &quot;s&quot; before &quot;ment.&quot; The pattern is: a-ss-e-ss-ment.
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Assessment&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Formal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>evaluation</li>
              <li>appraisal</li>
              <li>examination</li>
              <li>analysis</li>
              <li>review</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Contextual:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>test</li>
              <li>measurement</li>
              <li>judgment</li>
              <li>estimation</li>
              <li>valuation</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Usage Tips */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Tips</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">When to use &quot;assessment&quot;:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>When referring to formal evaluations or tests</li>
              <li>In educational contexts about student performance</li>
              <li>In business contexts about employee performance</li>
              <li>In medical contexts about patient conditions</li>
              <li>In property or financial contexts about value</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Common contexts:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Education and academia</li>
              <li>Healthcare and medicine</li>
              <li>Business and human resources</li>
              <li>Real estate and property</li>
              <li>Financial and insurance</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Notes */}
      <Card className="mb-8 p-6">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>Use &quot;assessment&quot; with two &quot;s&quot; letters, not three</li>
            <li>Remember the spelling: &quot;assess&quot; + &quot;ment&quot;</li>
            <li>Use &quot;assessment&quot; when referring to evaluations or appraisals</li>
            <li>Common contexts include education, business, and healthcare</li>
            <li>The word &quot;assessment&quot; is a noun derived from the verb &quot;assess&quot;</li>
            <li>Never use three &quot;s&quot; letters in the middle of the word</li>
          </ul>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;assissment&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;assissment&quot; is never correct in standard English. It is always a spelling error for &quot;assessment.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the pronunciation of &quot;assessment&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: It is pronounced as /əˈsesmənt/ with the stress on the second syllable. The double &quot;s&quot; is pronounced as a single &quot;s&quot; sound.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Are there related words with similar spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;assess&quot; (the verb form) and &quot;assessor&quot; (the person who assesses) 
              also have the same double &quot;s&quot; pattern.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;assessment&quot; comes from &quot;assess&quot; (which has double &quot;s&quot;) 
              plus &quot;ment.&quot; The pattern is: a-ss-e-ss-ment. Think: assess + ment = assessment.
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
          <strong>&quot;Assessment&quot;</strong> is the correct spelling with double &quot;s&quot; at the beginning and single &quot;s&quot; before &quot;ment.&quot; 
          The spelling &quot;assissment&quot; is incorrect and should never be used. This word comes from the verb &quot;assess&quot; 
          and maintains the double &quot;s&quot; spelling pattern. Remember that &quot;assessment&quot; follows the pattern: 
          a-ss-e-ss-ment, with double &quot;s&quot; from &quot;assess&quot; and single &quot;s&quot; before the &quot;ment&quot; suffix.
        </p>
      </div>
    </div>
  )
} 