import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Torch or Tourch - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;torch&quot; and &quot;tourch&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TorchVsTourchPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Torch or Tourch</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;torch&quot; and &quot;tourch&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tourch</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tourch&quot; is a misspelling. The correct spelling is &quot;torch&quot; with &quot;torch&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Torch</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Torch&quot; is the correct spelling. It means a portable light source.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Torch (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A portable light source, typically a stick with a flame at one end; a flashlight (British English).</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He carried a <strong>torch</strong> to light the way.</li>
                  <li>• The Olympic <strong>torch</strong> was passed from runner to runner.</li>
                  <li>• She used a <strong>torch</strong> to see in the dark.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tourch (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tourch&quot; is a misspelling of &quot;torch&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tourch&quot; is not used in standard English.</li>
                  <li>• Always use <strong>torch</strong> when referring to a light source.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Torch:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Flashlight</li>
                <li>• Light</li>
                <li>• Lamp</li>
                <li>• Beacon</li>
                <li>• Flare</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tourch:</h4>
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
            <li>• <strong>Torch</strong> is spelled with &quot;torch&quot; at the end: tor-ch.</li>
            <li>• It is a common word for a portable light source.</li>
            <li>• &quot;Tourch&quot; is never correct in any context.</li>
            <li>• The word comes from Old French &quot;torche&quot; meaning &quot;twisted thing.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tourch&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tourch&quot; is never correct. The proper spelling is always &quot;torch.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;torch&quot; has &quot;torch&quot; at the end - think of it as &quot;tor-ch.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between a torch and a flashlight?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In British English, &quot;torch&quot; means flashlight. In American English, &quot;torch&quot; typically refers to a flame-based light.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;torch&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;torch&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;torch&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;tourch&quot; often happens by replacing &quot;torch&quot; with &quot;tourch.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;torch&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: Olympic torch, torch bearer, torch light, and carry a torch.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;torch&quot; always about light?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;torch&quot; always refers to a light source, either flame-based or electric.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;torch&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;torch&quot; can be used as a verb meaning to burn or destroy with fire.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Torch</strong> is the correct spelling with &quot;torch&quot; at the end: tor-ch. It means a portable light source, either flame-based or electric. The misspelling &quot;tourch&quot; is never correct. Always use &quot;torch&quot; when referring to a light source or the act of burning with fire.</p>
      </div>
    </div>
  )
} 