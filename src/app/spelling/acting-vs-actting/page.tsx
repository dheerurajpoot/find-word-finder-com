import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Acting or Actting - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;acting&quot; and &quot;actting&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ActingVsActtingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Acting or Actting</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;acting&quot; and &quot;actting&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Actting</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Actting&quot; is a misspelling. The correct spelling is &quot;acting&quot; with one &quot;t&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Acting</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Acting&quot; is the correct spelling. It means performing in plays, movies, or television shows.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Acting (noun/gerund):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The art or profession of performing in plays, movies, or television shows; pretending or behaving in a particular way.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She studied <strong>acting</strong> at drama school.</li>
                  <li>• His <strong>acting</strong> in the movie was outstanding.</li>
                  <li>• Stop <strong>acting</strong> like a child.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Actting (noun/gerund):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Actting&quot; is a misspelling of &quot;acting&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Actting&quot; is not used in standard English.</li>
                  <li>• Always use <strong>acting</strong> when referring to performance or behavior.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Acting:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Performing</li>
                <li>• Theatrical</li>
                <li>• Dramatic</li>
                <li>• Pretending</li>
                <li>• Behaving</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Actting:</h4>
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
            <li>• <strong>Acting</strong> is spelled with one &quot;t&quot;, not two.</li>
            <li>• The word comes from the verb &quot;act&quot; + the &quot;ing&quot; suffix.</li>
            <li>• Can be used as both a noun (the profession) and a gerund (the action).</li>
            <li>• Used in entertainment, theater, and general behavior contexts.</li>
            <li>• &quot;Actting&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;actting&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;actting&quot; is never correct. The proper spelling is always &quot;acting.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;act&quot; + &quot;ing&quot; - the base word &quot;act&quot; with the &quot;ing&quot; suffix, not double &quot;t&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between acting and performing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Acting&quot; specifically refers to dramatic performance, while &quot;performing&quot; can include any type of public presentation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can acting be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;acting&quot; is very common in formal writing, especially in entertainment and arts contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of confusion with words that have double consonants or pronunciation patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;acting&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: acting class, acting career, acting skills, and acting out.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Acting</strong> is the correct spelling with one &quot;t&quot;. It means performing in plays, movies, or television shows, or behaving in a particular way. The misspelling &quot;actting&quot; is never correct. Use &quot;acting&quot; when referring to dramatic performance or behavior.</p>
      </div>
    </div>
  )
} 