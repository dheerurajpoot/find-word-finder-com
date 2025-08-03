import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tattoo vs Tato - Correct Spelling & Word Origins | Word Finder',
  description: 'Learn the correct spelling: &quot;tattoo&quot; vs &quot;tato&quot;. Understand word origins, spelling patterns, and avoid common mistakes.',
}

export default function TattooVsTatoPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Tattoo vs Tato</h1>
        <p className="text-xl text-gray-600">Word Origins & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Origins & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;tattoo&quot; and &quot;tato&quot;. Learn word origins, spelling patterns, and proper usage.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tato</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tato&quot; is incorrect. The proper spelling is &quot;tattoo&quot; with double &quot;t&quot; and double &quot;o.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tattoo</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tattoo&quot; is the correct spelling. It means &quot;a permanent design on the skin.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tattoo (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A permanent design or mark made on the skin by inserting ink; to mark the skin with such a design.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She got a beautiful <strong>tattoo</strong>.</li>
                  <li>• The <strong>tattoo</strong> artist was skilled.</li>
                  <li>• He wants to <strong>tattoo</strong> his arm.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tato (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tato&quot; is a misspelling and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tato&quot; is never used in standard English.</li>
                  <li>• Always use <strong>tattoo</strong> when referring to body art.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tattoo:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Body art</li>
                <li>• Ink</li>
                <li>• Design</li>
                <li>• Mark</li>
                <li>• Body decoration</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tato:</h4>
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
            <li>• <strong>Tattoo</strong> is spelled with double &quot;t&quot; and double &quot;o&quot;: tat-too.</li>
            <li>• The word comes from Polynesian &quot;tatau&quot; meaning &quot;mark.&quot;</li>
            <li>• &quot;Tato&quot; is a common misspelling that should be avoided.</li>
            <li>• Remember: tattoo has double &quot;t&quot; and double &quot;o&quot; like &quot;too&quot; and &quot;zoo.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;tattoo&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tattoo&quot; can function as both a noun (the design) and a verb (the act of creating the design). It follows standard English grammar patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;tattoo&quot; differ from &quot;body art&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tattoo&quot; specifically refers to permanent ink designs on the skin, while &quot;body art&quot; is a broader term that can include temporary designs, piercings, and other body modifications.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;tattoo&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tattoo&quot; can be a noun (referring to the design) or a verb (referring to the action of creating the design).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tattoo&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tattoo&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;tattoo&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tattoo&quot; comes from the Polynesian word &quot;tatau&quot; meaning &quot;mark&quot; or &quot;strike,&quot; which was introduced to English by Captain James Cook in the 18th century.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;tattoo&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tattoo&quot; can be used as a noun (&quot;I got a tattoo&quot;), verb (&quot;I want to tattoo my arm&quot;), or in compound forms (&quot;tattoo artist&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;tattoo&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: tattoo artist, tattoo parlor, tattoo design, tattoo removal, tattoo ink, and tattoo machine.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;tattoo&quot; and &quot;tato&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;tattoo&quot; has double &quot;t&quot; and double &quot;o&quot; (like &quot;too&quot; and &quot;zoo&quot;), and emphasize that &quot;tato&quot; is not a real word.</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Word Origins Summary</h2>
        <p className="text-lg md:text-xl text-blue-800 leading-relaxed">Word Origin Rule: <strong>Tattoo</strong> is the correct spelling with double &quot;t&quot; and double &quot;o&quot;: tat-too. &quot;Tattoo&quot; is a word of Polynesian origin meaning a permanent design on the skin. The incorrect spelling &quot;tato&quot; violates basic word formation rules and is never acceptable in any context. Always use &quot;tattoo&quot; when referring to body art or permanent skin designs.</p>
      </div>
    </div>
  )
} 