import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Building or Bulding - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;building&quot; and &quot;bulding&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BuildingVsBuldingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Building or Bulding</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;building&quot; and &quot;bulding&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bulding</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bulding&quot; is a misspelling. The correct spelling is &quot;building&quot; with &quot;i&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Building</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Building&quot; is the correct spelling. It refers to a structure with walls and a roof.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Building (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A structure with walls and a roof; the act of constructing something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>building</strong> is ten stories tall.</li>
                  <li>• They are <strong>building</strong> a new house.</li>
                  <li>• The office <strong>building</strong> is downtown.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bulding (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bulding&quot; is a misspelling of &quot;building&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bulding&quot; is not used in standard English.</li>
                  <li>• Always use <strong>building</strong> when referring to structures.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Building:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Structure</li>
                <li>• Edifice</li>
                <li>• Construction</li>
                <li>• Premises</li>
                <li>• Establishment</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bulding:</h4>
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
            <li>• <strong>Building</strong> is spelled with &quot;i&quot;, not without it.</li>
            <li>• The word comes from &quot;build&quot; + &quot;-ing&quot; suffix.</li>
            <li>• Can be used as both a noun and a verb.</li>
            <li>• Common in architecture, construction, and real estate contexts.</li>
            <li>• &quot;Bulding&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bulding&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bulding&quot; is never correct. The proper spelling is always &quot;building.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;build&quot; + &quot;-ing&quot; - the word has an &quot;i&quot; like &quot;build.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between building and house?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Building&quot; is a general term for any structure, while &quot;house&quot; specifically refers to a dwelling for people.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can building be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;building&quot; can be used as a verb meaning constructing, as in &quot;They are building a bridge.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation patterns or confusion with similar words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;building&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: office building, apartment building, building permit, building code, and building materials.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Building</strong> is the correct spelling with &quot;i&quot;. It refers to a structure with walls and a roof or the act of constructing. The misspelling &quot;bulding&quot; is never correct. Use &quot;building&quot; when referring to structures, construction, or architectural contexts.</p>
      </div>
    </div>
  )
} 