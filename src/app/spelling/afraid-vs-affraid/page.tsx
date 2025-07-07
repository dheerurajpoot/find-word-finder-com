import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Afraid vs Affraid - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;afraid&quot; and &quot;affraid&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AfraidVsAffraidPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Afraid vs Affraid</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Understanding the difference between &quot;Afraid&quot; or &quot;Affraid&quot;: these commonly confused spellings and how to use them properly.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Affraid</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Affraid&quot; is a misspelling. The correct spelling is &quot;afraid&quot; with a single &apos;f&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Afraid</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Afraid&quot; is the correct spelling. It means feeling fear or anxiety; frightened.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Afraid</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Afraid</strong> (adjective): Feeling fear or anxiety; frightened; worried that something undesirable will happen.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She is <strong>afraid</strong> of the dark.</li>
              <li>• I&apos;m <strong>afraid</strong> I can&apos;t help you.</li>
              <li>• He was <strong>afraid</strong> to speak in public.</li>
              <li>• Don&apos;t be <strong>afraid</strong> to ask questions.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Afraid</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Scared</li>
                <li>• Frightened</li>
                <li>• Fearful</li>
                <li>• Terrified</li>
                <li>• Alarmed</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Apprehensive</li>
                <li>• Nervous</li>
                <li>• Timid</li>
                <li>• Anxious</li>
                <li>• Worried</li>
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
            <li>• <strong>Afraid</strong> is spelled with a single &apos;f&apos;, not double.</li>
            <li>• Commonly used to express fear, worry, or concern.</li>
            <li>• Can be used in both literal and figurative senses.</li>
            <li>• The word comes from Old English &quot;afrædan&quot; meaning &quot;to frighten&quot;.</li>
            <li>• The noun form is &quot;fear&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;affraid&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;affraid&quot; is never correct. The proper spelling is always &quot;afraid&quot; with a single &apos;f&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;afraid&quot; has only one &apos;f&apos; like &quot;afternoon&quot; or &quot;after&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between afraid and scared?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: They are synonyms, but &quot;afraid&quot; is more formal and can also mean worried or concerned.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can afraid be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;afraid&quot; is appropriate in both formal and informal writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is afraid always about fear?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, it can also mean being worried or concerned about something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;affraid&quot; likely occurs because of confusion with similar-sounding words or uncertainty about the number of &apos;f&apos;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;afraid&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common phrases include: afraid of the dark, afraid to ask, I&apos;m afraid so, and don&apos;t be afraid.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;afraid&quot; be used in business writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;afraid&quot; can be used in business, especially in polite refusals or concerns.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Afraid</strong> is the correct spelling with a single &apos;f&apos;. It means feeling fear, anxiety, or concern. The misspelling &quot;affraid&quot; is never correct. Use this word when talking about fear, worry, or being concerned about something.</p>
      </div>
    </div>
  )
} 