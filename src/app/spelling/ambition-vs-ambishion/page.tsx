import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Ambition or Ambishion - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;ambition&quot; and &quot;ambishion&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AmbitionVsAmbishionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Ambition or Ambishion</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;ambition&quot; and &quot;ambishion&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Ambishion</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Ambishion&quot; is a misspelling. The correct spelling is &quot;ambition&quot; with &quot;ti&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Ambition</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Ambition&quot; is the correct spelling. It means a strong desire to achieve something or succeed.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Ambition (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A strong desire to achieve something or succeed; determination to reach a goal.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Her <strong>ambition</strong> to become a doctor never wavered.</li>
                  <li>• The young athlete had great <strong>ambition</strong>.</li>
                  <li>• His <strong>ambition</strong> drove him to work hard.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Ambishion (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Ambishion&quot; is a misspelling of &quot;ambition&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Ambishion&quot; is not used in standard English.</li>
                  <li>• Always use <strong>ambition</strong> when referring to goals.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Ambition:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Aspiration</li>
                <li>• Goal</li>
                <li>• Drive</li>
                <li>• Determination</li>
                <li>• Purpose</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Ambishion:</h4>
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
            <li>• <strong>Ambition</strong> is spelled with &quot;ti&quot; in the middle, not &quot;shi.&quot;</li>
            <li>• Used to describe strong desires to achieve goals or succeed.</li>
            <li>• Can be used in both positive and negative contexts.</li>
            <li>• The word comes from Latin &quot;ambitio&quot; meaning &quot;going around.&quot;</li>
            <li>• &quot;Ambishion&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;ambishion&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ambishion&quot; is never correct. The proper spelling is always &quot;ambition.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;am-bi-tion&quot; - it has &quot;ti&quot; in the middle, not &quot;shi.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between ambition and aspiration?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Ambition&quot; often implies a stronger, more determined drive, while &quot;aspiration&quot; suggests a hopeful desire.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can ambition be used negatively?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;ambition&quot; can sometimes have negative connotations when it becomes excessive or ruthless.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;ambition&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: career ambition, political ambition, and burning ambition.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;ambishion&quot; occurs because people think it should have &quot;shi&quot; like many other words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can ambition be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;ambition&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is ambition always about career goals?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ambition&quot; can refer to any strong desire to achieve something, not just career-related goals.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Ambition</strong> is the correct spelling with &quot;ti&quot; in the middle. It means a strong desire to achieve something or succeed. The misspelling &quot;ambishion&quot; is never correct. Use &quot;ambition&quot; to describe strong desires to reach goals.</p>
      </div>
    </div>
  )
} 