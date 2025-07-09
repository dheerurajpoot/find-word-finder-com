import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Appealing or Appealling - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;appealing&quot; and &quot;appealling&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AppealingVsAppeallingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Appealing or Appealling</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;appealing&quot; and &quot;appealling&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Appealling</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Appealling&quot; is a misspelling. The correct spelling is &quot;appealing&quot; with one &quot;l&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Appealing</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Appealing&quot; is the correct spelling. It means attractive, interesting, or pleasing.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Appealing (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Attractive, interesting, or pleasing; able to arouse interest or desire.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The job offer was very <strong>appealing</strong> to her.</li>
                  <li>• The restaurant has an <strong>appealing</strong> atmosphere.</li>
                  <li>• His argument was <strong>appealing</strong> and well-reasoned.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Appealling (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Appealling&quot; is a misspelling of &quot;appealing&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Appealling&quot; is not used in standard English.</li>
                  <li>• Always use <strong>appealing</strong> when describing attractiveness.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Appealing:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Attractive</li>
                <li>• Pleasing</li>
                <li>• Charming</li>
                <li>• Engaging</li>
                <li>• Desirable</li>
                <li>• Inviting</li>
                <li>• Alluring</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Appealling:</h4>
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
            <li>• <strong>Appealing</strong> is spelled with one &quot;l&quot;.</li>
            <li>• Used to describe something that attracts interest or desire.</li>
            <li>• Can refer to physical attractiveness or intellectual appeal.</li>
            <li>• The word comes from the verb &quot;appeal&quot; + the suffix &quot;-ing.&quot;</li>
            <li>• &quot;Appealling&quot; is never correct in any context.</li>
            <li>• Often used in phrases like &quot;appealing to&quot; or &quot;appealing option.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;appealling&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;appealling&quot; is never correct. The proper spelling is always &quot;appealing&quot; with one &quot;l&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ap-peal-ing&quot; - it&apos;s the present participle of &quot;appeal&quot; with &quot;-ing&quot; added.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between appealing and attractive?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both mean pleasing, but &quot;appealing&quot; often suggests broader appeal beyond just physical appearance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can appealing be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;appealing&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;appealling&quot; likely occurs because of confusion with words that have double consonants.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;appealing&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: appealing to, appealing option, appealing offer, and appealing personality.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is appealing always about physical attractiveness?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;appealing&quot; can refer to intellectual, emotional, or practical attractiveness, not just physical.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can appealing be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;appealing&quot; is an adjective. The verb form is &quot;appeal&quot; (to appeal to someone).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Appealing</strong> is the correct spelling with one &quot;l&quot;. It means attractive, interesting, or pleasing. The misspelling &quot;appealling&quot; is never correct. Use &quot;appealing&quot; to describe something that attracts interest or desire.</p>
      </div>
    </div>
  )
} 