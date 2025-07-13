import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bottle or Bottel - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bottle&quot; and &quot;bottel&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BottleVsBottelPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Bottle or Bottel</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;bottle&quot; and &quot;bottel&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bottel</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bottel&quot; is a misspelling. The correct spelling is &quot;bottle&quot; with double &quot;t&quot; and &quot;le&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bottle</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Bottle&quot; is the correct spelling. It refers to a container, typically made of glass or plastic, used for holding liquids.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Bottle (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A container, typically made of glass or plastic, with a narrow neck, used for storing liquids; to put into bottles.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She bought a <strong>bottle</strong> of water.</li>
                  <li>• The wine <strong>bottle</strong> was empty.</li>
                  <li>• They <strong>bottle</strong> their own beer.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bottel (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bottel&quot; is a misspelling of &quot;bottle&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bottel&quot; is not used in standard English.</li>
                  <li>• Always use <strong>bottle</strong> when referring to containers for liquids.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Bottle:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Container</li>
                <li>• Vessel</li>
                <li>• Flask</li>
                <li>• Jar</li>
                <li>• Decanter</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bottel:</h4>
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
            <li>• <strong>Bottle</strong> is spelled with double &quot;t&quot; and ends with &quot;le&quot;, not &quot;el&quot;.</li>
            <li>• The word comes from Old French &quot;boteille&quot; meaning bottle.</li>
            <li>• Can be used as both a noun and a verb.</li>
            <li>• Common in everyday language for containers of various sizes.</li>
            <li>• &quot;Bottel&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bottel&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bottel&quot; is never correct. The proper spelling is always &quot;bottle.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bot&quot; + &quot;tle&quot; - the word has double &quot;t&quot; and ends with &quot;le&quot; like &quot;little&quot; or &quot;battle.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between bottle and jar?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A &quot;bottle&quot; typically has a narrow neck, while a &quot;jar&quot; usually has a wider opening and is often made of glass.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bottle be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;bottle&quot; can be used as a verb meaning to put something into bottles, as in &quot;They bottle their own wine.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation or confusion with words that end in &quot;el&quot; instead of &quot;le.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;bottle&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: bottle of water, baby bottle, bottle opener, bottle neck, and bottle up emotions.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bottle</strong> is the correct spelling with double &quot;t&quot; and ending in &quot;le&quot;. It refers to a container, typically made of glass or plastic, used for holding liquids. The misspelling &quot;bottel&quot; is never correct. Use &quot;bottle&quot; when referring to containers for liquids or the action of putting something into bottles.</p>
      </div>
    </div>
  )
} 