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

      <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg mb-8 border-l-4 border-slate-500">
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
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The act of moving through water using arms and legs; a sport or recreational activity in water.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She enjoys <strong>swimming</strong> in the pool.</li>
                  <li>• <strong>Swimming</strong> is great exercise.</li>
                  <li>• The fish were <strong>swimming</strong> upstream.</li>
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
                <li>• Splashing</li>
                <li>• Wading</li>
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
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double M Rule</h3>
              <p className="text-yellow-800">&quot;Swimming&quot; has two &quot;m&quot;s like &quot;running&quot; and &quot;jumping&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Water</h3>
              <p className="text-blue-800">&quot;Swimming&quot; = water, &quot;Swiming&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;swimming&quot; to build muscle memory</p>
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
            <li>• <strong>Swimming</strong> is spelled with double &quot;m&quot;: s-w-i-m-m-i-n-g.</li>
            <li>• The word comes from Old English &quot;swimman&quot; meaning &quot;to swim.&quot;</li>
            <li>• &quot;Swiming&quot; is not a recognized English word.</li>
            <li>• Remember: swimming has two &quot;m&quot;s like &quot;running&quot; and &quot;jumping.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;swimming&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swimming&quot; can be used as a gerund (swimming is fun), present participle (she is swimming), or noun (competitive swimming) and follows standard English grammar patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;swimming&quot; differ from &quot;diving&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swimming&quot; involves moving through water using arms and legs, while &quot;diving&quot; involves jumping or plunging into water from above.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;swimming&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swimming&quot; can be used as a gerund (swimming is exercise), present participle (she is swimming), or noun (swimming pool) depending on context.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;swimming&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swimming&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;swimming&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swimming&quot; comes from Old English &quot;swimman&quot; meaning &quot;to swim&quot; and is related to German &quot;schwimmen&quot; and Dutch &quot;zwemmen.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;swimming&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swimming&quot; can be used as a gerund (&quot;swimming is fun&quot;), present participle (&quot;she is swimming&quot;), or noun (&quot;swimming pool&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;swimming&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: swimming pool, swimming lessons, swimming competition, swimming costume, swimming goggles, swimming technique, and swimming stroke.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;swimming&quot; and &quot;swiming&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;swimming&quot; has two &quot;m&quot;s (like &quot;running&quot; and &quot;jumping&quot;), and emphasize that &quot;swiming&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;swimming&quot; used in sports contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swimming&quot; is very common in sports contexts, especially in competitive swimming, Olympic events, and recreational water activities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;swimming&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swimming&quot; can mean water movement (swimming in the pool), sport activity (competitive swimming), or recreational activity (swimming for fun).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;swimming&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;swimming&quot; as having two &quot;m&quot;s like other gerund forms: running, jumping, swimming. The double &quot;m&quot; is consistent.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;swimming&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: swiming, swimming, swimming, swimming, and swimming. The correct spelling always has two &quot;m&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;swimming&quot; used in fitness contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In fitness contexts, &quot;swimming&quot; describes a low-impact cardiovascular exercise that works multiple muscle groups and improves endurance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between swimming and floating?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swimming&quot; involves active movement through water using arms and legs, while &quot;floating&quot; involves staying on the water&apos;s surface without active movement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;swimming&quot; with one &quot;m&quot; instead of two?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often confuse single and double &quot;m&quot; because they may not pronounce the double &quot;m&quot; clearly, but &quot;swimming&quot; specifically has two &quot;m&quot;s.</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-slate-800 leading-relaxed">Word Definition Rule: <strong>Swimming</strong> is the correct spelling with double &quot;m&quot;: s-w-i-m-m-i-n-g. &quot;Swimming&quot; is a gerund, present participle, and noun meaning the act of moving through water using arms and legs, or a sport or recreational activity in water. The incorrect spelling &quot;swiming&quot; is not a recognized English word and should never be used. Always use &quot;swimming&quot; when referring to water movement, aquatic sports, or recreational water activities.</p>
      </div>
    </div>
  )
} 