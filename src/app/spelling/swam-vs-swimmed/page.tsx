import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Swam vs Swimmed - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;swam&quot; vs &quot;swimmed&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SwamVsSwimmedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Swam vs Swimmed</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-indigo-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;swam&quot; and &quot;swimmed&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Swimmed</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Swimmed&quot; is not a standard English word. The correct spelling is &quot;swam.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Swam</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Swam&quot; is the correct spelling. It means &quot;moved through water.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Swam (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past tense of swim; to have moved through water using arms and legs; to have traveled in water.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>swam</strong> across the lake yesterday.</li>
                  <li>• They <strong>swam</strong> in the ocean last summer.</li>
                  <li>• He <strong>swam</strong> for hours in the pool.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Swimmed (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Swimmed&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Swimmed&quot; is not used in standard English.</li>
                  <li>• Always use <strong>swam</strong> when referring to past swimming.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Swam:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Swum</li>
                <li>• Dived</li>
                <li>• Paddled</li>
                <li>• Stroked</li>
                <li>• Floated</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Swimmed:</h4>
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
            <li>• <strong>Swam</strong> is spelled with &quot;am&quot;: s-w-a-m.</li>
            <li>• The word is the past tense of &quot;swim&quot; (swim → swam → swum).</li>
            <li>• &quot;Swimmed&quot; is not a recognized English word.</li>
            <li>• Remember: swam has &quot;am&quot; like &quot;ran&quot; and &quot;began.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;swam&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swam&quot; is the past tense of &quot;swim&quot; and follows irregular verb conjugation patterns in English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;swam&quot; differ from &quot;swim&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swim&quot; is the base verb form (present tense), while &quot;swam&quot; is the past tense form.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;swam&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swam&quot; is a verb that can be used as the past tense of &quot;swim&quot; to describe completed swimming actions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;swam&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swam&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;swam&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swam&quot; comes from Old English &quot;swam&quot; (past tense of &quot;swimman&quot;) and follows irregular verb patterns in English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;swam&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swam&quot; can be used as a past tense verb (&quot;She swam across the river&quot;) or with adverbs (&quot;He swam quickly&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;swam&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: swam across, swam in, swam through, swam to, swam away, and swam back.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;swam&quot; and &quot;swimmed&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;swam&quot; ends with &quot;am&quot; (like &quot;ran&quot; and &quot;began&quot;), and emphasize that &quot;swimmed&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;swam&quot; used in sports contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swam&quot; is very common in sports contexts, swimming competitions, and recreational water activities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;swam&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swam&quot; can mean recreational swimming (swam in the pool), competitive swimming (swam in the race), or survival swimming (swam to safety).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;swam&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;swam&quot; as ending with &quot;am&quot; like other irregular verbs: ran, began, swam. The &quot;am&quot; ending is consistent.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;swam&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: swimmed, swimmed, swimmed, swimmed, and swimmed. The correct spelling always ends with &quot;am.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;swam&quot; used in fitness and health contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In fitness and health contexts, &quot;swam&quot; describes completed swimming workouts, exercise sessions, or physical activity in water.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between swam and swum?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swam&quot; is the simple past tense, while &quot;swum&quot; is the past participle used with helping verbs (&quot;have swum&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;swam&quot; with &quot;ed&quot; instead of &quot;am&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often add &quot;ed&quot; because they follow regular verb patterns, but &quot;swam&quot; is an irregular verb that ends with &quot;am.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
        <h2 className="text-2xl font-bold mb-4 text-indigo-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-indigo-800 leading-relaxed">Word Definition Rule: <strong>Swam</strong> is the correct spelling with &quot;am&quot;: s-w-a-m. &quot;Swam&quot; is the past tense of &quot;swim&quot; meaning to have moved through water using arms and legs, or to have traveled in water. The incorrect spelling &quot;swimmed&quot; is not a recognized English word and should never be used. Always use &quot;swam&quot; when referring to completed swimming actions, past water activities, or historical swimming events.</p>
      </div>
    </div>
  )
} 