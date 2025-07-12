import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Balloon or Balon - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;balloon&quot; and &quot;balon&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BalloonVsBalonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Balloon or Balon</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;balloon&quot; and &quot;balon&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Balon</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Balon&quot; is a misspelling. The correct spelling is &quot;balloon&quot; with two &quot;l&quot;s and two &quot;o&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Balloon</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Balloon&quot; is the correct spelling. It means a flexible bag filled with air or gas.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Balloon (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A flexible bag filled with air or gas; to expand or swell like a balloon.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The children played with a colorful <strong>balloon</strong>.</li>
                  <li>• The hot air <strong>balloon</strong> floated above the city.</li>
                  <li>• His face <strong>ballooned</strong> after the allergic reaction.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Balon (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Balon&quot; is a misspelling of &quot;balloon&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Balon&quot; is not used in standard English.</li>
                  <li>• Always use <strong>balloon</strong> when referring to air-filled bags.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Balloon:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Air bag</li>
                <li>• Blimp</li>
                <li>• Inflatable</li>
                <li>• Float</li>
                <li>• Swell</li>
                <li>• Expand</li>
                <li>• Puff up</li>
                <li>• Inflate</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Balon:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Balloon</strong> is spelled with two &quot;l&quot;s and two &quot;o&quot;s, not &quot;balon.&quot;</li>
          <li>• The word comes from French &quot;ballon&quot; meaning large ball.</li>
          <li>• Can be used both literally (physical balloon) and figuratively (to expand).</li>
          <li>• Commonly used in celebrations, aviation, and medical contexts.</li>
          <li>• &quot;Balon&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;balon&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;balon&quot; is never correct. The proper spelling is always &quot;balloon&quot; with two &quot;l&quot;s and two &quot;o&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ball-oon&quot; - the word &quot;ball&quot; plus the suffix &quot;-oon&quot; with double &quot;l&quot; and double &quot;o.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between balloon and ball?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A &quot;ball&quot; is typically solid and bouncy, while a &quot;balloon&quot; is a flexible bag filled with air or gas.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can balloon be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;balloon&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;balon&quot; likely occurs because of pronunciation or confusion about the double letters.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;balloon&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: hot air balloon, balloon animal, balloon payment, and water balloon.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is balloon always about air-filled objects?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;balloon&quot; can also refer to swelling or expanding (e.g., ballooning costs, ballooning population).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the plural form of balloon?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The plural form is &quot;balloons&quot; - simply add an &quot;s&quot; to the end.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Balloon</strong> is the correct spelling with two &quot;l&quot;s and two &quot;o&quot;s. It means a flexible bag filled with air or gas. The misspelling &quot;balon&quot; is never correct. Use &quot;balloon&quot; to describe air-filled objects, expansion, or swelling in any context.</p>
      </div>
    </div>
  )
} 