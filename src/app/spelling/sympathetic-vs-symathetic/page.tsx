import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sympathetic vs Symathetic - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;sympathetic&quot; vs &quot;symathetic&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SympatheticVsSymatheticPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Sympathetic vs Symathetic</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-lg mb-8 border-l-4 border-lime-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;sympathetic&quot; and &quot;symathetic&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Symathetic</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Symathetic&quot; is not a standard English word. The correct spelling is &quot;sympathetic.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Sympathetic</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Sympathetic&quot; is the correct spelling. It means &quot;showing compassion&quot; or &quot;understanding.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Sympathetic (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Feeling, showing, or expressing compassion and understanding; in agreement with or supportive of; relating to the sympathetic nervous system.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The nurse was <strong>sympathetic</strong> to the patient.</li>
                  <li>• He showed <strong>sympathetic</strong> concern.</li>
                  <li>• The teacher gave <strong>sympathetic</strong> advice.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Symathetic (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Symathetic&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Symathetic&quot; is not used in standard English.</li>
                  <li>• Always use <strong>sympathetic</strong> when referring to compassion or understanding.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Sympathetic:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Compassionate</li>
                <li>• Understanding</li>
                <li>• Empathetic</li>
                <li>• Caring</li>
                <li>• Supportive</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Symathetic:</h4>
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
            <li>• <strong>Sympathetic</strong> is spelled with &quot;path&quot;: s-y-m-p-a-t-h-e-t-i-c.</li>
            <li>• The word comes from Greek &quot;sympathetikos&quot; meaning &quot;affected by like feelings.&quot;</li>
            <li>• &quot;Symathetic&quot; is not a recognized English word.</li>
            <li>• Remember: sympathetic has &quot;path&quot; like &quot;pathology&quot; and &quot;pathway.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;sympathetic&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sympathetic&quot; is an adjective that describes someone or something showing compassion or understanding. It follows standard English grammar patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;sympathetic&quot; differ from &quot;empathetic&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sympathetic&quot; means showing compassion for someone&apos;s situation, while &quot;empathetic&quot; means understanding and sharing someone&apos;s feelings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;sympathetic&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sympathetic&quot; is an adjective that modifies nouns to describe someone or something as showing compassion or understanding.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;sympathetic&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;sympathetic&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;sympathetic&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sympathetic&quot; comes from Greek &quot;sympathetikos&quot; meaning &quot;affected by like feelings&quot; and entered English through Latin &quot;sympatheticus.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;sympathetic&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sympathetic&quot; can be used as an attributive adjective (&quot;sympathetic person&quot;), predicative adjective (&quot;She is sympathetic&quot;), or with prepositions (&quot;sympathetic to&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;sympathetic&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: sympathetic person, sympathetic response, sympathetic to, sympathetic understanding, and sympathetic nervous system.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;sympathetic&quot; and &quot;symathetic&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;sympathetic&quot; has &quot;path&quot; (like &quot;pathology&quot; and &quot;pathway&quot;), and emphasize that &quot;symathetic&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;sympathetic&quot; used in medical contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;sympathetic&quot; is used in medicine to refer to the sympathetic nervous system, which controls fight-or-flight responses.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;sympathetic&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sympathetic&quot; can mean showing compassion (sympathetic person), in agreement (sympathetic to goals), or relating to the nervous system (sympathetic response).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;sympathetic&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;sympathetic&quot; as having &quot;path&quot; like other words: pathology, pathway, pathologist. The &quot;path&quot; sound is represented by &quot;path&quot; not &quot;pat.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;sympathetic&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: symathetic, sympatheic, sympathtic, sympathethic, and symphathetic. The correct spelling always has &quot;path&quot; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;sympathetic&quot; used in psychological contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In psychology, &quot;sympathetic&quot; refers to showing understanding and compassion toward others&apos; emotional experiences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between sympathetic and empathetic?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sympathetic&quot; means feeling compassion for someone&apos;s situation, while &quot;empathetic&quot; means understanding and sharing someone&apos;s feelings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;sympathetic&quot; with &quot;pat&quot; instead of &quot;path&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often confuse &quot;pat&quot; and &quot;path&quot; because they may not pronounce the &quot;h&quot; clearly, but &quot;sympathetic&quot; specifically has &quot;path&quot; like &quot;pathology.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-lime-50 p-6 rounded-lg border-l-4 border-lime-500">
        <h2 className="text-2xl font-bold mb-4 text-lime-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-lime-800 leading-relaxed">Word Definition Rule: <strong>Sympathetic</strong> is the correct spelling with &quot;path&quot;: s-y-m-p-a-t-h-e-t-i-c. &quot;Sympathetic&quot; is a word of Greek origin meaning feeling, showing, or expressing compassion and understanding. The incorrect spelling &quot;symathetic&quot; is not a recognized English word and should never be used. Always use &quot;sympathetic&quot; when referring to compassion, understanding, or the sympathetic nervous system.</p>
      </div>
    </div>
  )
} 