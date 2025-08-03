import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tambourine vs Tamborine - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;tambourine&quot; vs &quot;tamborine&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function TambourineVsTamborinePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Tambourine vs Tamborine</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg mb-8 border-l-4 border-yellow-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;tambourine&quot; and &quot;tamborine&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tamborine</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tamborine&quot; is not a standard English word. The correct spelling is &quot;tambourine.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tambourine</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tambourine&quot; is the correct spelling. It means &quot;a percussion instrument.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tambourine (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A percussion instrument consisting of a small drum with metal jingles attached to the rim, played by shaking or striking.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She played the <strong>tambourine</strong> in the band.</li>
                  <li>• The <strong>tambourine</strong> added rhythm to the song.</li>
                  <li>• Children love shaking the <strong>tambourine</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tamborine (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tamborine&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tamborine&quot; is not used in standard English.</li>
                  <li>• Always use <strong>tambourine</strong> when referring to the instrument.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tambourine:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Percussion instrument</li>
                <li>• Hand drum</li>
                <li>• Jingle instrument</li>
                <li>• Frame drum</li>
                <li>• Musical instrument</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tamborine:</h4>
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
            <li>• <strong>Tambourine</strong> is spelled with &quot;our&quot;: t-a-m-b-o-u-r-i-n-e.</li>
            <li>• The word comes from French &quot;tambourin&quot; meaning &quot;small drum.&quot;</li>
            <li>• &quot;Tamborine&quot; is not a recognized English word.</li>
            <li>• Remember: tambourine has &quot;our&quot; like &quot;colour&quot; and &quot;favour.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;tambourine&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tambourine&quot; is a countable noun that refers to a percussion instrument and follows standard English grammar patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;tambourine&quot; differ from &quot;drum&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tambourine&quot; is a specific type of percussion instrument with jingles, while &quot;drum&quot; is a broader category of percussion instruments.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;tambourine&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tambourine&quot; is a singular noun that refers to a specific percussion instrument.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tambourine&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tambourine&quot; is perfectly acceptable in formal writing, music descriptions, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;tambourine&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tambourine&quot; comes from French &quot;tambourin&quot; meaning &quot;small drum&quot; and has Latin roots.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;tambourine&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tambourine&quot; can be used as a subject (&quot;The tambourine is loud&quot;), object (&quot;She played the tambourine&quot;), or in compound forms (&quot;tambourine player&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;tambourine&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: tambourine player, tambourine sound, tambourine rhythm, tambourine music, tambourine beat, and tambourine jingle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;tambourine&quot; and &quot;tamborine&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;tambourine&quot; has &quot;our&quot; (like &quot;colour&quot; and &quot;favour&quot;), and emphasize that &quot;tamborine&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tambourine&quot; used in musical contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tambourine&quot; is very common in musical contexts, especially in folk, rock, and traditional music descriptions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;tambourine&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tambourine&quot; can refer to the physical instrument (wooden tambourine), the sound (tambourine jingle), or the playing technique (tambourine rhythm).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;tambourine&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;tambourine&quot; as having &quot;our&quot; like other French-derived words: colour, favour, tambourine. The &quot;our&quot; ending is consistent.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;tambourine&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: tamborine, tambourine, tambourine, tambourine, and tambourine. The correct spelling always has &quot;our.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;tambourine&quot; used in cultural contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In cultural contexts, &quot;tambourine&quot; describes traditional instruments, folk music, religious ceremonies, and cultural performances.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between tambourine and maracas?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tambourine&quot; is a frame drum with jingles, while &quot;maracas&quot; are handheld percussion instruments filled with seeds or beads.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;tambourine&quot; with &quot;or&quot; instead of &quot;our&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often use &quot;or&quot; because they may not pronounce the &quot;our&quot; clearly, but &quot;tambourine&quot; specifically has &quot;our.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h2 className="text-2xl font-bold mb-4 text-yellow-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-yellow-800 leading-relaxed">Word Definition Rule: <strong>Tambourine</strong> is the correct spelling with &quot;our&quot;: t-a-m-b-o-u-r-i-n-e. &quot;Tambourine&quot; is a noun meaning a percussion instrument consisting of a small drum with metal jingles attached to the rim, played by shaking or striking. The incorrect spelling &quot;tamborine&quot; is not a recognized English word and should never be used. Always use &quot;tambourine&quot; when referring to this specific percussion instrument, musical performances, or rhythmic accompaniment.</p>
      </div>
    </div>
  )
} 