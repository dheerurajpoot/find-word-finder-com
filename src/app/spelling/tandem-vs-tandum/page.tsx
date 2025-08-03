import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tandem vs Tandum - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;tandem&quot; vs &quot;tandum&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function TandemVsTandumPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Tandem vs Tandum</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg mb-8 border-l-4 border-slate-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;tandem&quot; and &quot;tandum&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tandum</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tandum&quot; is not a standard English word. The correct spelling is &quot;tandem.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tandem</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tandem&quot; is the correct spelling. It means &quot;arranged one behind another.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tandem (adjective/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Arranged one behind another; working together in coordination; a bicycle built for two riders.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• They rode a <strong>tandem</strong> bicycle.</li>
                  <li>• The horses pulled the cart in <strong>tandem</strong>.</li>
                  <li>• The departments worked in <strong>tandem</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tandum (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tandum&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tandum&quot; is not used in standard English.</li>
                  <li>• Always use <strong>tandem</strong> when referring to paired arrangements.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tandem:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Together</li>
                <li>• Jointly</li>
                <li>• Coordinated</li>
                <li>• Paired</li>
                <li>• Synchronized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tandum:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Spelling Rules:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Tandem</strong> is spelled with &quot;em&quot;: t-a-n-d-e-m.</li>
            <li>• The word comes from Latin &quot;tandem&quot; meaning &quot;at length, finally.&quot;</li>
            <li>• &quot;Tandum&quot; is not a recognized English word.</li>
            <li>• Remember: tandem ends with &quot;em&quot; like &quot;item&quot; and &quot;problem.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;tandem&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tandem&quot; can be used as an adjective (tandem arrangement) or a noun (riding a tandem) and follows standard English grammar patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;tandem&quot; differ from &quot;together&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tandem&quot; specifically implies arrangement one behind another or working in coordination, while &quot;together&quot; is more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;tandem&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tandem&quot; can be used as an adjective (tandem bicycle) or a noun (riding a tandem) depending on context.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tandem&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tandem&quot; is perfectly acceptable in formal writing, technical documents, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;tandem&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tandem&quot; comes from Latin &quot;tandem&quot; meaning &quot;at length, finally&quot; and was originally used humorously for carriages.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;tandem&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tandem&quot; can be used as an adjective (&quot;tandem arrangement&quot;), adverb (&quot;working in tandem&quot;), or noun (&quot;riding a tandem&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;tandem&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: tandem bicycle, tandem arrangement, tandem team, tandem work, tandem operation, and tandem flight.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;tandem&quot; and &quot;tandum&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;tandem&quot; ends with &quot;em&quot; (like &quot;item&quot; and &quot;problem&quot;), and emphasize that &quot;tandum&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tandem&quot; used in transportation contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tandem&quot; is very common in transportation contexts, especially referring to bicycles, aircraft, and vehicle arrangements.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;tandem&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tandem&quot; can mean paired arrangement (tandem bicycle), coordinated work (working in tandem), or sequential order (tandem seating).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;tandem&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;tandem&quot; as ending with &quot;em&quot; like other words: item, problem, tandem. The &quot;em&quot; ending is consistent.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;tandem&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: tandum, tandem, tandem, tandem, and tandem. The correct spelling always ends with &quot;em.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;tandem&quot; used in business contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In business contexts, &quot;tandem&quot; describes coordinated efforts, joint operations, or collaborative work between departments or teams.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between tandem and parallel?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tandem&quot; implies arrangement one behind another, while &quot;parallel&quot; suggests side-by-side arrangement or simultaneous operation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;tandem&quot; with &quot;um&quot; instead of &quot;em&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often confuse &quot;um&quot; and &quot;em&quot; because they may not pronounce the &quot;em&quot; clearly, but &quot;tandem&quot; specifically ends with &quot;em.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-slate-800 leading-relaxed">Word Definition Rule: <strong>Tandem</strong> is the correct spelling with &quot;em&quot;: t-a-n-d-e-m. &quot;Tandem&quot; is an adjective and noun meaning arranged one behind another, working together in coordination, or a bicycle built for two riders. The incorrect spelling &quot;tandum&quot; is not a recognized English word and should never be used. Always use &quot;tandem&quot; when referring to paired arrangements, coordinated efforts, or sequential positioning.</p>
      </div>
    </div>
  )
} 