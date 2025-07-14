import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Building or Buliding - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;building&quot; and &quot;buliding&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BuildingVsBulidingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Building or Buliding</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;building&quot; and &quot;buliding&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Buliding</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Buliding&quot; is a misspelling. The correct spelling is &quot;building&quot; with &quot;ui&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Building</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Building&quot; is the correct spelling. It refers to a structure or the act of constructing.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Building (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A structure with walls and a roof, such as a house, office, or factory.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The new office <strong>building</strong> opened last month.</li>
                  <li>• The historic <strong>building</strong> was restored to its original condition.</li>
                  <li>• The apartment <strong>building</strong> has 50 units.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Buliding (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Buliding&quot; is a misspelling of &quot;building&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Buliding&quot; is not used in standard English.</li>
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
                <li>• Facility</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Buliding:</h4>
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
            <li>• <strong>Building</strong> is spelled with &quot;ui&quot; in the middle, not &quot;ul.&quot;</li>
            <li>• The word comes from the verb &quot;build&quot; plus the suffix &quot;-ing.&quot;</li>
            <li>• &quot;Building&quot; can refer to both the structure and the process of construction.</li>
            <li>• &quot;Buliding&quot; is never correct in any context.</li>
            <li>• The pronunciation is /ˈbɪldɪŋ/ with a short &quot;i&quot; sound.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;buliding&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;buliding&quot; is never correct. The proper spelling is always &quot;building.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;build-ing&quot; - the verb &quot;build&quot; plus the suffix &quot;-ing.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between building and structure?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A building specifically refers to a structure with walls and a roof, while structure is a broader term for any constructed object.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can building be used in plural form?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;buildings&quot; is the correct plural form of building.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;buliding&quot; likely occurs because of confusion about the &quot;ui&quot; combination or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;building&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: office building, apartment building, building code, building permit, and building materials.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can building be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;building&quot; can be used as the present participle of the verb &quot;build,&quot; as in &quot;They are building a new house.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is building always about physical structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Primarily yes, but &quot;building&quot; can also refer to the process of constructing or developing something abstract.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Building</strong> is the correct spelling with &quot;ui&quot; in the middle. It refers to a structure with walls and a roof, or the process of constructing. The misspelling &quot;buliding&quot; is never correct. Use &quot;building&quot; for all contexts involving structures or construction processes.</p>
      </div>
    </div>
  )
} 