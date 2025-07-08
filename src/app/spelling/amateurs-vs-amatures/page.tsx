import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Amateurs or Amatures - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;amateurs&quot; and &quot;amatures&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AmateursVsAmaturesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Amateurs or Amatures</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;amateurs&quot; and &quot;amatures&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Amatures</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Amatures&quot; is a misspelling. The correct spelling is &quot;amateurs&quot; with &quot;eur&quot; before the &quot;s.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Amateurs</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Amateurs&quot; is the correct spelling. It means people who engage in activities for pleasure rather than as a profession.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Amateurs (noun, plural):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">People who engage in activities for pleasure rather than as a profession; non-professionals.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>amateurs</strong> competed in the tournament.</li>
                  <li>• Many <strong>amateurs</strong> enjoy photography.</li>
                  <li>• The <strong>amateurs</strong> showed great enthusiasm.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Amatures (noun, plural):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Amatures&quot; is a misspelling of &quot;amateurs&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Amatures&quot; is not used in standard English.</li>
                  <li>• Always use <strong>amateurs</strong> when referring to non-professionals.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Amateurs:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Non-professionals</li>
                <li>• Hobbyists</li>
                <li>• Enthusiasts</li>
                <li>• Novices</li>
                <li>• Beginners</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Amatures:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Amateurs</strong> is the plural form of &quot;amateur&quot; with &quot;eur&quot; before the &quot;s.&quot;</li>
            <li>• Used to describe multiple people who do something for pleasure, not money.</li>
            <li>• Can refer to groups of non-professional participants.</li>
            <li>• The word comes from French &quot;amateur&quot; meaning &quot;lover.&quot;</li>
            <li>• &quot;Amatures&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;amatures&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;amatures&quot; is never correct. The proper spelling is always &quot;amateurs.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;am-a-teurs&quot; - it&apos;s the plural of &quot;amateur&quot; with &quot;eur&quot; before the &quot;s.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between amateurs and professionals?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Amateurs do something for pleasure or as a hobby, while professionals do it for money or as a career.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can amateurs be used negatively?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Sometimes &quot;amateurs&quot; can imply lack of skill, but it can also simply mean non-professionals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;amateurs&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: amateur athletes, amateur photographers, and amateur league.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;amatures&quot; occurs because people think it should end with &quot;ure&quot; instead of &quot;eur.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can amateurs be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;amateurs&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is amateurs always about skill level?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Not necessarily - amateurs refers to motivation (pleasure vs. money) rather than skill level.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Amateurs</strong> is the correct spelling with &quot;eur&quot; before the &quot;s.&quot; It means people who engage in activities for pleasure rather than as a profession. The misspelling &quot;amatures&quot; is never correct. Use &quot;amateurs&quot; to describe groups of non-professional participants.</p>
      </div>
    </div>
  )
} 