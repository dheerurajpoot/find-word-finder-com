import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Capable or Capeable - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;capable&quot; and &quot;capeable&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CapableVsCapeablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Capable or Capeable</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;capable&quot; and &quot;capeable&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Capeable</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Capeable&quot; is a misspelling. The correct spelling is &quot;capable&quot; with &quot;able&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Capable</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Capable&quot; is the correct spelling. It means having the ability or skill to do something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Capable (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Having the ability, skill, or qualities necessary to do something successfully.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She is <strong>capable</strong> of solving complex problems.</li>
                  <li>• The team is <strong>capable</strong> of winning the championship.</li>
                  <li>• He proved himself <strong>capable</strong> of leadership.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Capeable (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Capeable&quot; is a misspelling of &quot;capable&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Capeable&quot; is not used in standard English.</li>
                  <li>• Always use <strong>capable</strong> when describing ability.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Capable:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Able</li>
                <li>• Competent</li>
                <li>• Skilled</li>
                <li>• Qualified</li>
                <li>• Proficient</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Capeable:</h4>
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
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Capable</strong> is spelled with &quot;able&quot; at the end, not &quot;eable.&quot;</li>
            <li>• The word comes from Latin &quot;capabilis&quot; meaning able to hold.</li>
            <li>• Can be used to describe people, things, or situations.</li>
            <li>• Often used with &quot;of&quot; to indicate what someone can do.</li>
            <li>• &quot;Capeable&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;capeable&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;capeable&quot; is never correct. The proper spelling is always &quot;capable.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;cap-able&quot; - the word ends with &quot;able&quot; like other ability words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between capable and able?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to ability, but &quot;capable&quot; often implies a higher level of skill or competence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;capeable&quot; likely occurs because of confusion about the ending &quot;able&quot; vs &quot;eable.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;capable&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: capable of, highly capable, and capable person.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can capable be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;capable&quot; is only used as an adjective. The noun form would be &quot;capability.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is capable only used for people?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;capable&quot; can be used for people, things, systems, or situations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word capable?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Latin &quot;capabilis&quot; and was first used in English in the 16th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Capable</strong> is the correct spelling with &quot;able&quot; at the end. It means having the ability or skill to do something successfully. The misspelling &quot;capeable&quot; is never correct. Use &quot;capable&quot; to describe people, things, or situations that have the necessary skills or qualities.</p>
      </div>
    </div>
  )
} 