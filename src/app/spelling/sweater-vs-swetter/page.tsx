import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sweater vs Swetter - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;sweater&quot; vs &quot;swetter&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SweaterVsSwetterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Sweater vs Swetter</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg mb-8 border-l-4 border-purple-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;sweater&quot; and &quot;swetter&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Swetter</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Swetter&quot; is not a standard English word. The correct spelling is &quot;sweater.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Sweater</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Sweater&quot; is the correct spelling. It means &quot;a knitted garment.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Sweater (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A knitted garment worn on the upper body for warmth; a pullover or cardigan made of wool, cotton, or synthetic fibers.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She wore a warm <strong>sweater</strong> in winter.</li>
                  <li>• The wool <strong>sweater</strong> was handmade.</li>
                  <li>• He bought a new <strong>sweater</strong> for the party.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Swetter (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Swetter&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Swetter&quot; is not used in standard English.</li>
                  <li>• Always use <strong>sweater</strong> when referring to clothing.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Sweater:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Pullover</li>
                <li>• Jumper</li>
                <li>• Cardigan</li>
                <li>• Knitwear</li>
                <li>• Woolly</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Swetter:</h4>
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
            <li>• <strong>Sweater</strong> is spelled with &quot;er&quot;: s-w-e-a-t-e-r.</li>
            <li>• The word comes from &quot;sweat&quot; + &quot;er&quot; meaning &quot;something that makes you sweat.&quot;</li>
            <li>• &quot;Swetter&quot; is not a recognized English word.</li>
            <li>• Remember: sweater has &quot;er&quot; like &quot;teacher&quot; and &quot;writer.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;sweater&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sweater&quot; is a countable noun that refers to a knitted garment. It follows standard English grammar patterns for clothing items.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;sweater&quot; differ from &quot;jumper&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sweater&quot; is the American term, while &quot;jumper&quot; is the British term for the same knitted garment.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;sweater&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sweater&quot; is a singular noun that refers to a knitted garment worn on the upper body.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;sweater&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;sweater&quot; is perfectly acceptable in formal writing, fashion descriptions, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;sweater&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sweater&quot; comes from &quot;sweat&quot; + &quot;er&quot; meaning &quot;something that makes you sweat&quot; due to its warm nature.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;sweater&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sweater&quot; can be used as a subject (&quot;The sweater is warm&quot;), object (&quot;I bought a sweater&quot;), or in compound forms (&quot;sweater weather&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;sweater&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: wool sweater, cashmere sweater, sweater weather, sweater vest, sweater dress, and knit sweater.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;sweater&quot; and &quot;swetter&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;sweater&quot; ends with &quot;er&quot; (like &quot;teacher&quot; and &quot;writer&quot;), and emphasize that &quot;swetter&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;sweater&quot; used in fashion contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;sweater&quot; is very common in fashion contexts, clothing descriptions, and discussions about winter wear.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;sweater&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sweater&quot; can mean a warm garment (wool sweater), fashion item (designer sweater), or casual wear (sweater weather).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;sweater&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;sweater&quot; as ending with &quot;er&quot; like other words: teacher, writer, sweater. The &quot;er&quot; ending is consistent.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;sweater&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: swetter, sweater, sweater, sweater, and sweater. The correct spelling always ends with &quot;er.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;sweater&quot; used in seasonal contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In seasonal contexts, &quot;sweater&quot; describes winter clothing, cold weather attire, and cozy garments for cooler temperatures.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between sweater and sweatshirt?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Sweater&quot; is typically knitted and made of wool or similar fibers, while &quot;sweatshirt&quot; is usually made of cotton and has a different construction.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;sweater&quot; with &quot;tt&quot; instead of &quot;er&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often confuse &quot;tt&quot; and &quot;er&quot; because they may not pronounce the &quot;er&quot; clearly, but &quot;sweater&quot; specifically ends with &quot;er.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
        <h2 className="text-2xl font-bold mb-4 text-purple-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-purple-800 leading-relaxed">Word Definition Rule: <strong>Sweater</strong> is the correct spelling with &quot;er&quot;: s-w-e-a-t-e-r. &quot;Sweater&quot; is a noun meaning a knitted garment worn on the upper body for warmth, typically made of wool, cotton, or synthetic fibers. The incorrect spelling &quot;swetter&quot; is not a recognized English word and should never be used. Always use &quot;sweater&quot; when referring to knitted clothing, winter garments, or warm upper body attire.</p>
      </div>
    </div>
  )
} 