import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Swear vs Swaer - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;swear&quot; vs &quot;swaer&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SwearVsSwaerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Swear vs Swaer</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-lg mb-8 border-l-4 border-lime-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;swear&quot; and &quot;swaer&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Swaer</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Swaer&quot; is not a standard English word. The correct spelling is &quot;swear.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Swear</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Swear&quot; is the correct spelling. It means &quot;to make a solemn promise.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Swear (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To make a solemn promise or declaration; to use profane or offensive language; to take an oath.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I <strong>swear</strong> to tell the truth.</li>
                  <li>• He <strong>swore</strong> an oath of allegiance.</li>
                  <li>• She <strong>swears</strong> by that brand.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Swaer (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Swaer&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Swaer&quot; is not used in standard English.</li>
                  <li>• Always use <strong>swear</strong> when referring to promises.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Swear:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Promise</li>
                <li>• Vow</li>
                <li>• Oath</li>
                <li>• Curse</li>
                <li>• Affirm</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Swaer:</h4>
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
            <li>• <strong>Swear</strong> is spelled with &quot;ear&quot;: s-w-e-a-r.</li>
            <li>• The word comes from Old English &quot;swerian&quot; meaning &quot;to take an oath.&quot;</li>
            <li>• &quot;Swaer&quot; is not a recognized English word.</li>
            <li>• Remember: swear has &quot;ear&quot; like &quot;bear&quot; and &quot;wear.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;swear&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swear&quot; is an irregular verb (swear → swore → sworn) and can be used as a transitive or intransitive verb.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;swear&quot; differ from &quot;promise&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swear&quot; implies a more formal or solemn commitment, often with religious or legal connotations, while &quot;promise&quot; is more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;swear&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swear&quot; is primarily a verb that can be used transitively or intransitively to express making promises or using profanity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;swear&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swear&quot; is perfectly acceptable in formal writing, legal documents, and professional communication when referring to oaths.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;swear&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swear&quot; comes from Old English &quot;swerian&quot; meaning &quot;to take an oath&quot; and has Germanic roots.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;swear&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swear&quot; can be used as a transitive verb (&quot;I swear allegiance&quot;), intransitive verb (&quot;He swore loudly&quot;), or with infinitives (&quot;I swear to tell the truth&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;swear&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: swear allegiance, swear an oath, swear by, swear to, swear in, and swear off.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;swear&quot; and &quot;swaer&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;swear&quot; ends with &quot;ear&quot; (like &quot;bear&quot; and &quot;wear&quot;), and emphasize that &quot;swaer&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;swear&quot; used in legal contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swear&quot; is very common in legal contexts, court proceedings, and formal ceremonies involving oaths and affirmations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;swear&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swear&quot; can mean making a solemn promise (swear allegiance), using profanity (swear words), or taking an oath (swear in court).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;swear&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;swear&quot; as ending with &quot;ear&quot; like other words: bear, wear, swear. The &quot;ear&quot; ending is consistent.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;swear&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: swaer, swear, swear, swear, and swear. The correct spelling always ends with &quot;ear.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;swear&quot; used in religious contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In religious contexts, &quot;swear&quot; refers to making solemn vows or oaths, often involving divine witness or religious ceremonies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between swear and curse?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swear&quot; can mean making a solemn promise or using profanity, while &quot;curse&quot; specifically refers to using offensive language or wishing harm.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;swear&quot; with &quot;ae&quot; instead of &quot;ea&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often confuse &quot;ae&quot; and &quot;ea&quot; because they may not pronounce the &quot;ea&quot; clearly, but &quot;swear&quot; specifically has &quot;ea.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-lime-50 p-6 rounded-lg border-l-4 border-lime-500">
        <h2 className="text-2xl font-bold mb-4 text-lime-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-lime-800 leading-relaxed">Word Definition Rule: <strong>Swear</strong> is the correct spelling with &quot;ear&quot;: s-w-e-a-r. &quot;Swear&quot; is a verb meaning to make a solemn promise or declaration, to use profane or offensive language, or to take an oath. The incorrect spelling &quot;swaer&quot; is not a recognized English word and should never be used. Always use &quot;swear&quot; when referring to making promises, taking oaths, or using formal declarations.</p>
      </div>
    </div>
  )
} 