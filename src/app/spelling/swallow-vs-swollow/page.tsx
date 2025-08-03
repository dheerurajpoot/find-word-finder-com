import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Swallow vs Swollow - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;swallow&quot; vs &quot;swollow&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SwallowVsSwollowPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Swallow vs Swollow</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-lg mb-8 border-l-4 border-rose-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;swallow&quot; and &quot;swollow&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Swollow</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Swollow&quot; is not a standard English word. The correct spelling is &quot;swallow.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Swallow</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Swallow&quot; is the correct spelling. It means &quot;to take food into the stomach.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Swallow (verb/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To take food or liquid into the stomach through the throat; a small migratory bird with a forked tail.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>swallowed</strong> the medicine quickly.</li>
                  <li>• The <strong>swallow</strong> flew south for winter.</li>
                  <li>• He <strong>swallowed</strong> his pride and apologized.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Swollow (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Swollow&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Swollow&quot; is not used in standard English.</li>
                  <li>• Always use <strong>swallow</strong> when referring to eating or birds.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Swallow:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Gulp</li>
                <li>• Ingest</li>
                <li>• Consume</li>
                <li>• Devour</li>
                <li>• Bird</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Swollow:</h4>
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
            <li>• <strong>Swallow</strong> is spelled with &quot;ow&quot;: s-w-a-l-l-o-w.</li>
            <li>• The word comes from Old English &quot;swelgan&quot; meaning &quot;to swallow.&quot;</li>
            <li>• &quot;Swollow&quot; is not a recognized English word.</li>
            <li>• Remember: swallow has &quot;ow&quot; like &quot;follow&quot; and &quot;hollow.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;swallow&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swallow&quot; can be used as a verb (to take food into the stomach) or a noun (a type of bird) and follows standard English grammar patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;swallow&quot; differ from &quot;eat&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swallow&quot; specifically refers to the action of taking food or liquid into the stomach through the throat, while &quot;eat&quot; is a broader term for consuming food.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;swallow&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swallow&quot; can be used as a verb (to take food into the stomach) or a noun (a small migratory bird).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;swallow&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swallow&quot; is perfectly acceptable in formal writing, medical texts, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;swallow&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swallow&quot; comes from Old English &quot;swelgan&quot; meaning &quot;to swallow&quot; and has Germanic roots.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;swallow&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swallow&quot; can be used as a transitive verb (&quot;She swallowed the pill&quot;), intransitive verb (&quot;He swallowed hard&quot;), or noun (&quot;The swallow flew by&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;swallow&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: swallow hard, swallow pride, swallow medicine, swallow food, swallow bird, and swallow whole.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;swallow&quot; and &quot;swollow&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;swallow&quot; ends with &quot;ow&quot; (like &quot;follow&quot; and &quot;hollow&quot;), and emphasize that &quot;swollow&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;swallow&quot; used in medical contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swallow&quot; is very common in medical contexts, especially when discussing eating, medication, or swallowing disorders.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;swallow&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swallow&quot; can mean taking food into the stomach (swallow food), accepting something (swallow pride), or refer to a bird species (barn swallow).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;swallow&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;swallow&quot; as ending with &quot;ow&quot; like other words: follow, hollow, swallow. The &quot;ow&quot; ending is consistent.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;swallow&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: swollow, swallow, swallow, swallow, and swallow. The correct spelling always ends with &quot;ow.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;swallow&quot; used in ornithology contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In ornithology contexts, &quot;swallow&quot; refers to small migratory birds with forked tails, such as barn swallows or cliff swallows.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between swallow and gulp?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swallow&quot; is the general term for taking food into the stomach, while &quot;gulp&quot; implies swallowing quickly or in large amounts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;swallow&quot; with &quot;oll&quot; instead of &quot;all&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often confuse &quot;oll&quot; and &quot;all&quot; because they may not pronounce the &quot;all&quot; clearly, but &quot;swallow&quot; specifically has &quot;all.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
        <h2 className="text-2xl font-bold mb-4 text-rose-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-rose-800 leading-relaxed">Word Definition Rule: <strong>Swallow</strong> is the correct spelling with &quot;ow&quot;: s-w-a-l-l-o-w. &quot;Swallow&quot; is a verb and noun meaning to take food or liquid into the stomach through the throat, or a small migratory bird with a forked tail. The incorrect spelling &quot;swollow&quot; is not a recognized English word and should never be used. Always use &quot;swallow&quot; when referring to eating actions, medical procedures, or bird species.</p>
      </div>
    </div>
  )
} 