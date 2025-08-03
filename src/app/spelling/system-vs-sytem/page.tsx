import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'System vs Sytem - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;system&quot; vs &quot;sytem&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SystemVsSytemPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">System vs Sytem</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg mb-8 border-l-4 border-emerald-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;system&quot; and &quot;sytem&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Sytem</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Sytem&quot; is not a standard English word. The correct spelling is &quot;system.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: System</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;System&quot; is the correct spelling. It means &quot;a set of connected things&quot; or &quot;an organized method.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">System (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A set of connected things or parts forming a complex whole; an organized method or procedure; a group of related elements.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The solar <strong>system</strong> contains planets.</li>
                  <li>• Our filing <strong>system</strong> is efficient.</li>
                  <li>• The immune <strong>system</strong> protects the body.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Sytem (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Sytem&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Sytem&quot; is not used in standard English.</li>
                  <li>• Always use <strong>system</strong> when referring to organized methods or connected parts.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">System:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Method</li>
                <li>• Procedure</li>
                <li>• Network</li>
                <li>• Structure</li>
                <li>• Framework</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Sytem:</h4>
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
            <li>• <strong>System</strong> is spelled with &quot;sy&quot;: s-y-s-t-e-m.</li>
            <li>• The word comes from Greek &quot;systema&quot; meaning &quot;organized whole.&quot;</li>
            <li>• &quot;Sytem&quot; is not a recognized English word.</li>
            <li>• Remember: system starts with &quot;sy&quot; like &quot;symphony&quot; and &quot;symbol.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;system&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;System&quot; is primarily a noun that refers to a set of connected things or an organized method. It follows standard English grammar patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;system&quot; differ from &quot;method&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;System&quot; refers to a broader, more complex set of connected elements, while &quot;method&quot; refers to a specific procedure or way of doing something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;system&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;System&quot; is a noun that refers to a set of connected things, an organized method, or a group of related elements.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;system&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;system&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;system&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;System&quot; comes from Greek &quot;systema&quot; meaning &quot;organized whole&quot; and entered English through Latin &quot;systema.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;system&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;System&quot; can be used as a subject (&quot;The system works&quot;), object (&quot;We use this system&quot;), or in compound forms (&quot;system administrator&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;system&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: operating system, immune system, solar system, filing system, and system administrator.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;system&quot; and &quot;sytem&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;system&quot; starts with &quot;sy&quot; (like &quot;symphony&quot; and &quot;symbol&quot;), and emphasize that &quot;sytem&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;system&quot; used in scientific contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;system&quot; is very common in scientific contexts, such as solar system, nervous system, ecosystem, and operating system.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;system&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;System&quot; can mean a set of connected parts (solar system), an organized method (filing system), or a group of related elements (immune system).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;system&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;system&quot; as starting with &quot;sy&quot; like other words: symphony, symbol, symptom. The &quot;sy&quot; sound is represented by &quot;sy&quot; not &quot;si.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;system&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: sytem, sistem, systm, and systme. The correct spelling always starts with &quot;sy&quot; and ends with &quot;em.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;system&quot; used in technology contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In technology, &quot;system&quot; refers to computer systems, operating systems, information systems, and other technological frameworks.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different types of systems in various fields?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Systems can be biological (immune system), technological (computer system), organizational (management system), or natural (ecosystem).</p>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
        <h2 className="text-2xl font-bold mb-4 text-emerald-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-emerald-800 leading-relaxed">Word Definition Rule: <strong>System</strong> is the correct spelling with &quot;sy&quot;: s-y-s-t-e-m. &quot;System&quot; is a word of Greek origin meaning a set of connected things or parts forming a complex whole. The incorrect spelling &quot;sytem&quot; is not a recognized English word and should never be used. Always use &quot;system&quot; when referring to organized methods, connected parts, or complex frameworks.</p>
      </div>
    </div>
  )
} 