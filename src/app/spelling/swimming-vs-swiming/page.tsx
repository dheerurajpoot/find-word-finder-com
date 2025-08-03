import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Swimming vs Swiming - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;swimming&quot; vs &quot;swiming&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SwimmingVsSwimingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Swimming vs Swiming</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;swimming&quot; and &quot;swiming&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Swiming</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Swiming&quot; is not a standard English word. The correct spelling is &quot;swimming.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Swimming</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Swimming&quot; is the correct spelling. It means &quot;moving through water.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Swimming (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The act of moving through water using arms and legs; a sport or recreational activity; the present participle of swim.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She enjoys <strong>swimming</strong> in the pool.</li>
                  <li>• <strong>Swimming</strong> is great exercise.</li>
                  <li>• The children are <strong>swimming</strong> in the lake.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Swiming (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Swiming&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Swiming&quot; is not used in standard English.</li>
                  <li>• Always use <strong>swimming</strong> when referring to water movement.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Swimming:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Diving</li>
                <li>• Floating</li>
                <li>• Paddling</li>
                <li>• Stroking</li>
                <li>• Aquatics</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Swiming:</h4>
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
            <li>• <strong>Swimming</strong> is spelled with double &quot;m&quot;: s-w-i-m-m-i-n-g.</li>
            <li>• The word follows the rule: double the final consonant before adding &quot;ing&quot;.</li>
            <li>• &quot;Swiming&quot; is not a recognized English word.</li>
            <li>• Remember: swim + m + ing = swimming (double the &quot;m&quot;).</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;swimming&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swimming&quot; is the present participle of &quot;swim&quot; and can be used as a gerund (noun) or in progressive verb forms.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;swimming&quot; differ from &quot;swim&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swim&quot; is the base verb form, while &quot;swimming&quot; is the present participle used for ongoing actions or as a noun.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;swimming&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swimming&quot; can be used as a gerund (noun), present participle (verb), or adjective describing activities related to water movement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;swimming&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swimming&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;swimming&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swimming&quot; comes from Old English &quot;swimman&quot; meaning &quot;to swim&quot; and follows standard English verb conjugation patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;swimming&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swimming&quot; can be used as a gerund (&quot;Swimming is fun&quot;), present participle (&quot;I am swimming&quot;), or adjective (&quot;swimming pool&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;swimming&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: swimming pool, swimming lessons, swimming competition, swimming stroke, swimming costume, and swimming goggles.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;swimming&quot; and &quot;swiming&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;swimming&quot; has two &quot;m&quot;s (like &quot;running&quot; and &quot;jumping&quot;), and emphasize that &quot;swiming&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;swimming&quot; used in sports contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swimming&quot; is very common in sports contexts, Olympic events, and recreational activities involving water movement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;swimming&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swimming&quot; can mean physical activity (swimming laps), sport (competitive swimming), recreation (swimming for fun), or exercise (swimming workout).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;swimming&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;swimming&quot; as following the rule: double the final consonant before adding &quot;ing.&quot; Other examples: run → running, hop → hopping.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;swimming&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: swiming, swiming, swiming, swiming, and swiming. The correct spelling always has double &quot;m.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;swimming&quot; used in fitness and health contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In fitness and health contexts, &quot;swimming&quot; refers to a low-impact cardiovascular exercise that works multiple muscle groups.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between swimming and floating?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swimming&quot; involves active movement through water using arms and legs, while &quot;floating&quot; means staying on the water&apos;s surface without active movement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;swimming&quot; with single &quot;m&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often forget to double the &quot;m&quot; because they may not be familiar with the rule that final consonants are doubled before adding &quot;ing.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-blue-800 leading-relaxed">Word Definition Rule: <strong>Swimming</strong> is the correct spelling with double &quot;m&quot;: s-w-i-m-m-i-n-g. &quot;Swimming&quot; is the present participle of &quot;swim&quot; meaning the act of moving through water using arms and legs, or a sport and recreational activity. The incorrect spelling &quot;swiming&quot; is not a recognized English word and should never be used. Always use &quot;swimming&quot; when referring to water movement, aquatic sports, or exercise activities.</p>
      </div>
    </div>
  )
} 