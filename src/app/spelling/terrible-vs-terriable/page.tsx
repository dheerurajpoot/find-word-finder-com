import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Terrible or Terriable - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;terrible&quot; and &quot;terriable&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TerribleVsTerriablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Terrible or Terriable</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;terrible&quot; and &quot;terriable&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Terriable</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Terriable&quot; is a misspelling. The correct spelling is &quot;terrible&quot; with &quot;ble&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Terrible</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Terrible&quot; is the correct spelling. It means extremely bad or unpleasant.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Terrible (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Extremely bad or unpleasant; causing great fear or dread; very severe or serious.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The weather was <strong>terrible</strong> yesterday.</li>
                  <li>• She had a <strong>terrible</strong> headache.</li>
                  <li>• The movie was absolutely <strong>terrible</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Terriable (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Terriable&quot; is a misspelling of &quot;terrible&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Terriable&quot; is not used in standard English.</li>
                  <li>• Always use <strong>terrible</strong> when describing something bad.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Terrible:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Awful</li>
                <li>• Horrible</li>
                <li>• Dreadful</li>
                <li>• Frightful</li>
                <li>• Appalling</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Terriable:</h4>
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
            <li>• <strong>Terrible</strong> is spelled with &quot;ble&quot; at the end: ter-ri-ble.</li>
            <li>• It is a common adjective describing something very bad.</li>
            <li>• &quot;Terriable&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;terribilis&quot; meaning &quot;frightful.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;terriable&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;terriable&quot; is never correct. The proper spelling is always &quot;terrible.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;terrible&quot; ends with &quot;ble&quot; - think of it as &quot;ter-ri-ble.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between terrible and awful?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both mean very bad, but &quot;terrible&quot; often implies causing fear or dread, while &quot;awful&quot; emphasizes unpleasantness.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;terrible&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;terrible&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;terrible&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;terriable&quot; often happens by replacing &quot;ble&quot; with &quot;able&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;terrible&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: terrible mistake, terrible accident, terrible weather, and terrible pain.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;terrible&quot; always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;terrible&quot; always describes something very bad, unpleasant, or frightening.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;terrible&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;terrible&quot; is only used as an adjective in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Terrible</strong> is the correct spelling with &quot;ble&quot; at the end: ter-ri-ble. It means extremely bad or unpleasant. The misspelling &quot;terriable&quot; is never correct. Always use &quot;terrible&quot; when describing something very bad, frightening, or unpleasant.</p>
      </div>
    </div>
  )
} 