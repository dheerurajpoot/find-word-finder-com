import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Beings or Beigns - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;beings&quot; and &quot;beigns&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BeingsVsBeignsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Beings or Beigns</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;beings&quot; and &quot;beigns&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Beigns</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Beigns&quot; is a misspelling. The correct spelling is &quot;beings&quot; with &quot;ings&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Beings</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Beings&quot; is the correct spelling. It means living creatures or entities.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Beings (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Living creatures or entities; plural form of being.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• All living <strong>beings</strong> deserve respect.</li>
                  <li>• Human <strong>beings</strong> are complex creatures.</li>
                  <li>• Extraterrestrial <strong>beings</strong> are often imagined in science fiction.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Beigns (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Beigns&quot; is a misspelling of &quot;beings&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Beigns&quot; is not used in standard English.</li>
                  <li>• Always use <strong>beings</strong> when referring to living creatures.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Beings:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Creatures</li>
                <li>• Entities</li>
                <li>• Organisms</li>
                <li>• Individuals</li>
                <li>• Life forms</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Beigns:</h4>
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
            <li>• <strong>Beings</strong> is spelled with &quot;ings&quot; at the end - this is the standard English spelling.</li>
            <li>• The word comes from the verb &quot;be&quot; + the suffix &quot;-ing&quot; + plural &quot;s.&quot;</li>
            <li>• &quot;Beigns&quot; is never correct in any context.</li>
            <li>• Used as a noun to refer to living creatures or entities.</li>
            <li>• Common in both formal and informal contexts.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;beigns&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beigns&quot; is never correct. The proper spelling is always &quot;beings.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does beings mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Beings means living creatures or entities, the plural form of being.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;beings&quot; ends with &quot;ings&quot; - think of &quot;be&quot; + &quot;ing&quot; + &quot;s.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between beings and creatures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: They are synonyms, but &quot;beings&quot; is more formal and can refer to any living entity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can beings be used for non-living things?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beings&quot; specifically refers to living creatures or entities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases with beings?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: human beings, living beings, and intelligent beings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is beings used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;beings&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the singular form of beings?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The singular form is &quot;being.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Beings</strong> is the correct spelling with &quot;ings&quot; at the end. It means living creatures or entities. The misspelling &quot;beigns&quot; is never correct in English.</p>
      </div>
    </div>
  )
} 