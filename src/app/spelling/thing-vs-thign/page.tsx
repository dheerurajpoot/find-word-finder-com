import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Thing or Thign - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;thing&quot; and &quot;thign&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThingVsThignPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Thing or Thign</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;thing&quot; and &quot;thign&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Thign</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Thign&quot; is a misspelling. The correct spelling is &quot;thing&quot; with the letters in the right order.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Thing</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Thing&quot; is the correct spelling. It means an object, item, or matter.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Thing (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An object, item, or matter; something that exists or can be thought about.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• What is that <strong>thing</strong> on the table?</li>
                  <li>• The most important <strong>thing</strong> is to be honest.</li>
                  <li>• She has a lot of <strong>things</strong> to do today.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Thign (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Thign&quot; is a misspelling of &quot;thing&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Thign&quot; is not used in standard English.</li>
                  <li>• Always use <strong>thing</strong> when referring to objects or matters.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Thing:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Object</li>
                <li>• Item</li>
                <li>• Matter</li>
                <li>• Element</li>
                <li>• Entity</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Thign:</h4>
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
            <li>• <strong>Thing</strong> is spelled with the letters in the correct order: t-h-i-n-g.</li>
            <li>• It is a very common and versatile noun in English.</li>
            <li>• &quot;Thign&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þing&quot; meaning &quot;assembly, meeting, thing.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thign&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thign&quot; is never correct. The proper spelling is always &quot;thing.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;thing&quot; has the letters in the correct order: t-h-i-n-g.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;thing&quot; and &quot;object&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Thing&quot; is more general and can refer to abstract concepts, while &quot;object&quot; usually refers to physical items.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thing&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thing&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;thing&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;thign&quot; often happens by transposing the letters &quot;i&quot; and &quot;g.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;thing&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: the thing is, for one thing, of all things, and the real thing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thing&quot; always about objects?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thing&quot; can refer to both physical objects and abstract concepts or matters.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thing&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thing&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Thing</strong> is the correct spelling with the letters in the right order: t-h-i-n-g. It means an object, item, or matter. The misspelling &quot;thign&quot; is never correct. Always use &quot;thing&quot; when referring to objects, items, or matters.</p>
      </div>
    </div>
  )
} 