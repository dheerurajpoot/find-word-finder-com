import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Build or Bulid - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;build&quot; and &quot;bulid&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BuildVsBulidPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Build or Bulid</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;build&quot; and &quot;bulid&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bulid</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bulid&quot; is a misspelling. The correct spelling is &quot;build&quot; with &quot;ui&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Build</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Build&quot; is the correct spelling. It means to construct or create something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Build (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To construct or create something by putting parts together.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• They plan to <strong>build</strong> a new house next year.</li>
                  <li>• The company wants to <strong>build</strong> a stronger team.</li>
                  <li>• She helped <strong>build</strong> the community garden.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bulid (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bulid&quot; is a misspelling of &quot;build&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bulid&quot; is not used in standard English.</li>
                  <li>• Always use <strong>build</strong> when referring to construction or creation.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Build:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Construct</li>
                <li>• Create</li>
                <li>• Assemble</li>
                <li>• Develop</li>
                <li>• Establish</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bulid:</h4>
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
            <li>• <strong>Build</strong> is spelled with &quot;ui&quot; in the middle, not &quot;ul.&quot;</li>
            <li>• The word comes from Old English &quot;byldan&quot; meaning to construct.</li>
            <li>• &quot;Build&quot; can refer to physical construction or abstract development.</li>
            <li>• &quot;Bulid&quot; is never correct in any context.</li>
            <li>• The pronunciation is /bɪld/ with a short &quot;i&quot; sound.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bulid&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bulid&quot; is never correct. The proper spelling is always &quot;build.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;b-ui-ld&quot; - the &quot;ui&quot; combination is common in English words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between build and construct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Build&quot; is more general and can refer to abstract concepts, while &quot;construct&quot; typically refers to physical building.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can build be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;build&quot; can be used as a noun referring to someone&apos;s physical structure, as in &quot;he has a strong build.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;bulid&quot; likely occurs because of confusion about the &quot;ui&quot; combination or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;build&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: build up, build on, build in, build out, and build upon.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can build be used in passive voice?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;build&quot; is commonly used in passive constructions, as in &quot;The house was built in 1990.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is build always about physical construction?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;build&quot; can refer to creating anything, including relationships, businesses, skills, or abstract concepts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Build</strong> is the correct spelling with &quot;ui&quot; in the middle. It means to construct or create something, whether physical or abstract. The misspelling &quot;bulid&quot; is never correct. Use &quot;build&quot; for all contexts involving construction, creation, or development.</p>
      </div>
    </div>
  )
} 