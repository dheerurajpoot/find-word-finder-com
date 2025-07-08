import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Airplane or Airplan - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;airplane&quot; and &quot;airplan&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AirplaneVsAirplanPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Airplane or Airplan</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;airplane&quot; or &quot;airplan&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Airplan</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Airplan&quot; is a common misspelling. The correct spelling is &quot;airplane&quot; with an &apos;e&apos; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Airplane</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Airplane&quot; is the correct spelling. It refers to a powered flying vehicle with fixed wings.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Airplane</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Airplane</strong> (noun): A powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The <strong>airplane</strong> took off smoothly.</li>
              <li>• She traveled by <strong>airplane</strong> to New York.</li>
              <li>• The <strong>airplane</strong> was delayed due to weather.</li>
              <li>• Children watched the <strong>airplane</strong> fly overhead.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Airplane</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Plane</li>
                <li>• Aircraft</li>
                <li>• Jet</li>
                <li>• Airliner</li>
                <li>• Propeller plane</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Helicopter</li>
                <li>• Glider</li>
                <li>• Seaplane</li>
                <li>• Biplane</li>
                <li>• Monoplane</li>
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
            <li>• <strong>Airplane</strong> is spelled with an &apos;e&apos; at the end, not &quot;airplan&quot;.</li>
            <li>• Used to describe powered flying vehicles with fixed wings.</li>
            <li>• Commonly used in travel, aviation, and transportation contexts.</li>
            <li>• The British English term is &quot;aeroplane&quot;.</li>
            <li>• The plural is &quot;airplanes&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;airplan&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;airplan&quot; is never correct. The proper spelling is always &quot;airplane&quot; with an &apos;e&apos; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;airplane&quot; has an &apos;e&apos; at the end, like &quot;plane&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;airplane&quot; the same as &quot;aeroplane&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;airplane&quot; is American English, while &quot;aeroplane&quot; is British English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;airplane&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: airplane mode, airplane ticket, airplane crash, airplane hangar.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;airplan&quot; happens because the final &apos;e&apos; is sometimes forgotten or omitted.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Airplane</strong> is the correct spelling with an &apos;e&apos; at the end. It refers to a powered flying vehicle with fixed wings. The misspelling &quot;airplan&quot; is never correct. Use &quot;airplane&quot; in travel, aviation, and transportation contexts.</p>
      </div>
    </div>
  )
} 