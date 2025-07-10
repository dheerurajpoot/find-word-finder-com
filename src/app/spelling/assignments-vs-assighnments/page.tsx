import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Assignments vs Assighnments - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "assignments" and "assighnments". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AssignmentsVsAssighnmentsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Assignments vs Assighnments</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">assighnments</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">assignments</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling with &quot;gn&quot; instead of &quot;ghn.&quot;</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Assignments (noun, plural)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Tasks, projects, or pieces of work that are given to someone to complete, especially in educational, 
              professional, or military contexts. They are specific duties or responsibilities assigned to individuals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>The students completed their <strong>assignments</strong> before the deadline.</li>
              <li>She received several new <strong>assignments</strong> at work this week.</li>
              <li>The teacher graded all the <strong>assignments</strong> over the weekend.</li>
              <li>His <strong>assignments</strong> included research, writing, and presentations.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;assignments&quot; and &quot;assighnments&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic pronunciation:</strong> The &quot;gn&quot; sound can be difficult to distinguish</li>
            <li><strong>Typographical errors:</strong> Adding an extra &quot;h&quot; when typing quickly</li>
            <li><strong>Similar word patterns:</strong> Some words do have &quot;gh&quot; combinations</li>
            <li><strong>Silent letters:</strong> The &quot;g&quot; in &quot;gn&quot; is silent, making it confusing</li>
            <li><strong>Lack of proofreading:</strong> Not catching the error during review</li>
          </ul>
        </div>
      </Card>

      {/* Etymology and Spelling Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Etymology and Spelling Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Word origin:</strong> The word &quot;assignments&quot; comes from the verb &quot;assign,&quot; 
            which derives from the Latin &quot;assignare,&quot; meaning &quot;to mark out.&quot;
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Spelling pattern:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Double &quot;s&quot; after &quot;a&quot;</li>
              <li>Single &quot;i&quot; in the middle</li>
              <li>&quot;gn&quot; combination (not &quot;ghn&quot;)</li>
              <li>&quot;ment&quot; suffix for noun formation</li>
              <li>&quot;s&quot; at the end for plural</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Memory tip:</strong> Think of &quot;assignments&quot; as having &quot;gn&quot; (like &quot;sign&quot;) 
            because assignments are like &quot;signs&quot; or instructions for what to do.
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Assignments&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Academic:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>homework</li>
              <li>projects</li>
              <li>tasks</li>
              <li>exercises</li>
              <li>papers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Professional:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>duties</li>
              <li>responsibilities</li>
              <li>tasks</li>
              <li>projects</li>
              <li>workload</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Usage Tips */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Tips</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">When to use &quot;assignments&quot;:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>To refer to academic tasks given to students</li>
              <li>In professional contexts for work tasks</li>
              <li>When discussing responsibilities or duties</li>
              <li>In military or organizational contexts</li>
              <li>When referring to multiple tasks or projects</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Common contexts:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Education and academia</li>
              <li>Workplace and business</li>
              <li>Military and government</li>
              <li>Project management</li>
              <li>Task delegation</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;assighnments&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;assighnments&quot; is never correct in standard English. It is always a spelling error for &quot;assignments.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the pronunciation of &quot;assignments&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: It is pronounced as /əˈsaɪnmənts/ with the stress on the second syllable. The &quot;gn&quot; is silent, 
              so it sounds like &quot;sign.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Are there related words with similar spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;assign&quot; (the verb), &quot;assignment&quot; (singular), and &quot;assigning&quot; 
              all have the same &quot;gn&quot; spelling pattern.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;assignments&quot; has &quot;gn&quot; (like &quot;sign&quot;) because assignments 
              are like &quot;signs&quot; or instructions. Think: assign = &quot;as + sign&quot; without the &quot;h.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a relatively common spelling error, especially since the &quot;gn&quot; combination 
              is silent and can be confusing to spell correctly.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Assignments&quot;</strong> is the correct spelling with &quot;gn&quot; instead of &quot;ghn.&quot; 
          The spelling &quot;assighnments&quot; is incorrect and should never be used. This word comes from the verb &quot;assign&quot; 
          and maintains the &quot;gn&quot; spelling pattern. Remember that &quot;assignments&quot; has &quot;gn&quot; 
          because assignments are like &quot;signs&quot; or instructions for what to do.
        </p>
      </div>
    </div>
  )
} 