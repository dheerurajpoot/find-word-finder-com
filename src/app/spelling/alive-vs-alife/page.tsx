import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Alive or Alife - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;alive&quot; and &quot;alife&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AliveVsAlifePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Alive or Alife</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;alive&quot; or &quot;alife&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alife</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alife&quot; is a common misspelling. The correct spelling is &quot;alive&quot; with a &apos;v&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Alive</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Alive&quot; is the correct spelling. It means living, not dead; full of life or activity.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Alive</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Alive</strong> (adjective): Living, not dead; full of life or activity.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The patient is <strong>alive</strong> and recovering.</li>
              <li>• The city comes <strong>alive</strong> at night.</li>
              <li>• She felt more <strong>alive</strong> than ever before.</li>
              <li>• The forest is <strong>alive</strong> with wildlife.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Alive</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Living</li>
                <li>• Animated</li>
                <li>• Vibrant</li>
                <li>• Energetic</li>
                <li>• Breathing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Awake</li>
                <li>• Existing</li>
                <li>• Thriving</li>
                <li>• Flourishing</li>
                <li>• Pulsating</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Alive</strong> is spelled with a &apos;v&apos;, not &quot;f&quot;.</li>
            <li>• Used to describe living things or things full of activity.</li>
            <li>• Commonly used in science, health, and everyday contexts.</li>
            <li>• The noun form is &quot;life&quot;.</li>
            <li>• The opposite is &quot;dead&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alife&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alife&quot; is never correct. The proper spelling is always &quot;alive&quot; with a &apos;v&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;alive&quot; has a &apos;v&apos; in the middle, not &quot;f&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;alive&quot; describe feelings?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;alive&quot; can describe feeling energetic, excited, or full of life.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;alive&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: alive and well, come alive, bring to life, keep alive.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alife&quot; happens because the &apos;v&apos; is sometimes replaced with an &apos;f&apos; due to phonetic similarity.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Alive</strong> is the correct spelling with a &apos;v&apos;. It means living, not dead, or full of life. The misspelling &quot;alife&quot; is never correct. Use &quot;alive&quot; in science, health, and everyday contexts.</p>
      </div>
    </div>
  )
} 