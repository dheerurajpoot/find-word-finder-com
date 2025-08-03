import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Swept vs Sweept - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;swept&quot; vs &quot;sweept&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SweptVsSweeptPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Swept vs Sweept</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg mb-8 border-l-4 border-slate-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;swept&quot; and &quot;sweept&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Sweept</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Sweept&quot; is not a standard English word. The correct spelling is &quot;swept.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Swept</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Swept&quot; is the correct spelling. It means &quot;cleaned with a broom.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Swept (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past tense and past participle of sweep; cleaned or cleared using a broom or brush.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>swept</strong> the floor clean.</li>
                  <li>• The wind <strong>swept</strong> the leaves away.</li>
                  <li>• He <strong>swept</strong> the competition.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Sweept (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Sweept&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Sweept&quot; is not used in standard English.</li>
                  <li>• Always use <strong>swept</strong> when referring to cleaning.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Swept:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Cleaned</li>
                <li>• Brushed</li>
                <li>• Cleared</li>
                <li>• Wiped</li>
                <li>• Removed</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Sweept:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">PT Rule</h3>
              <p className="text-yellow-800">&quot;Swept&quot; ends with &quot;pt&quot; like &quot;kept&quot; and &quot;slept&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Clean</h3>
              <p className="text-blue-800">&quot;Swept&quot; = clean, &quot;Sweept&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;swept&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Proofread</h3>
              <p className="text-purple-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Spelling Rules:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Swept</strong> is spelled with &quot;pt&quot;: s-w-e-p-t.</li>
            <li>• The word comes from Old English &quot;swāpan&quot; meaning &quot;to sweep.&quot;</li>
            <li>• &quot;Sweept&quot; is not a recognized English word.</li>
            <li>• Remember: swept ends with &quot;pt&quot; like &quot;kept&quot; and &quot;slept.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;swept&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swept&quot; is the past tense and past participle of &quot;sweep&quot; and follows standard English irregular verb patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;swept&quot; differ from &quot;sweep&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sweep&quot; is the base verb form (present tense), while &quot;swept&quot; is the past tense and past participle form.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;swept&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swept&quot; is a verb used as the past tense (she swept) or past participle (has swept) of the verb &quot;sweep.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;swept&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swept&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;swept&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swept&quot; comes from Old English &quot;swāpan&quot; meaning &quot;to sweep&quot; and is related to German &quot;schweifen&quot; meaning &quot;to sweep.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;swept&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swept&quot; can be used as past tense (&quot;she swept the floor&quot;) or past participle (&quot;the floor has been swept&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;swept&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: swept the floor, swept away, swept clean, swept under, swept through, swept across, and swept up.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;swept&quot; and &quot;sweept&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;swept&quot; ends with &quot;pt&quot; (like &quot;kept&quot; and &quot;slept&quot;), and emphasize that &quot;sweept&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;swept&quot; used in cleaning contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swept&quot; is very common in cleaning contexts, especially when describing floor cleaning, dust removal, or general tidying activities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;swept&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swept&quot; can mean cleaning (swept the floor), moving quickly (swept through), or winning easily (swept the competition).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;swept&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;swept&quot; as ending with &quot;pt&quot; like other irregular past tense verbs: kept, slept, swept. The &quot;pt&quot; ending is consistent.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;swept&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: sweept, swept, swept, swept, and swept. The correct spelling always ends with &quot;pt.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;swept&quot; used in weather contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In weather contexts, &quot;swept&quot; describes wind or storms moving across an area, such as &quot;the storm swept through the city.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between swept and cleaned?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swept&quot; specifically refers to using a broom or brush to remove debris, while &quot;cleaned&quot; is a broader term for any cleaning activity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;swept&quot; with &quot;eept&quot; instead of &quot;pt&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often confuse &quot;eept&quot; and &quot;pt&quot; because they may expect regular verb endings, but &quot;swept&quot; is an irregular verb that ends with &quot;pt.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-slate-800 leading-relaxed">Word Definition Rule: <strong>Swept</strong> is the correct spelling with &quot;pt&quot;: s-w-e-p-t. &quot;Swept&quot; is the past tense and past participle of &quot;sweep&quot; meaning cleaned or cleared using a broom or brush. The incorrect spelling &quot;sweept&quot; is not a recognized English word and should never be used. Always use &quot;swept&quot; when referring to cleaning actions, moving quickly, or winning easily.</p>
      </div>
    </div>
  )
} 