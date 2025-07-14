import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Buggy or Bugy - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;buggy&quot; and &quot;bugy&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BuggyVsBugyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Buggy or Bugy</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;buggy&quot; and &quot;bugy&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bugy</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bugy&quot; is a misspelling. The correct spelling is &quot;buggy&quot; with two &quot;g&quot; letters.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Buggy</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Buggy&quot; is the correct spelling. It refers to a small carriage or a vehicle with bugs/defects.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Buggy (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A light carriage with four wheels, typically pulled by a horse.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The horse-drawn <strong>buggy</strong> carried tourists through the historic district.</li>
                  <li>• Amish communities often use <strong>buggies</strong> for transportation.</li>
                  <li>• The old <strong>buggy</strong> was restored to its original condition.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bugy (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bugy&quot; is a misspelling of &quot;buggy&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bugy&quot; is not used in standard English.</li>
                  <li>• Always use <strong>buggy</strong> when referring to a carriage or vehicle.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Buggy:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Carriage</li>
                <li>• Cart</li>
                <li>• Wagon</li>
                <li>• Chariot</li>
                <li>• Coach</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bugy:</h4>
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
            <li>• <strong>Buggy</strong> is spelled with two &quot;g&quot; letters, not one.</li>
            <li>• The word comes from the term &quot;bug&quot; meaning a small creature, originally referring to a small carriage.</li>
            <li>• In modern usage, &quot;buggy&quot; can also refer to a baby stroller or a golf cart.</li>
            <li>• &quot;Bugy&quot; is never correct in any context.</li>
            <li>• The pronunciation is /ˈbʌɡi/ with a hard &quot;g&quot; sound.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bugy&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bugy&quot; is never correct. The proper spelling is always &quot;buggy.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bug-gy&quot; - like a small bug with two &quot;g&quot; letters.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between buggy and carriage?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A buggy is typically a lighter, smaller carriage, while carriage is a more general term for horse-drawn vehicles.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can buggy refer to software problems?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, in modern usage, &quot;buggy&quot; can describe software with many defects or problems.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;bugy&quot; likely occurs because of confusion about the double &quot;g&quot; or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;buggy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: horse and buggy, baby buggy, golf buggy, and software buggy.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can buggy be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;buggy&quot; can be used as an adjective to describe something full of bugs or defects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is buggy always about transportation?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;buggy&quot; can refer to various types of vehicles, baby strollers, or even software with problems.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Buggy</strong> is the correct spelling with two &quot;g&quot; letters. It refers to a light carriage, baby stroller, or something with defects. The misspelling &quot;bugy&quot; is never correct. Use &quot;buggy&quot; for all contexts involving small vehicles or problematic items.</p>
      </div>
    </div>
  )
} 