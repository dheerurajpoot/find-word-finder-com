import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Volume or Volum - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;volume&quot; and &quot;volum&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VolumeVsVolumPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Volume or Volum</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;volume&quot; and &quot;volum&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Volum</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Volum&quot; is a misspelling. The correct spelling is &quot;volume&quot; with an &quot;e&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Volume</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Volume&quot; is the correct spelling. It refers to the amount of space that a substance or object occupies, or a book forming part of a work or series.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Volume (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The amount of space that a substance or object occupies; a book forming part of a work or series.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>volume</strong> of the box is 2 cubic feet.</li>
                  <li>• Please turn down the <strong>volume</strong> on the TV.</li>
                  <li>• I read the first <strong>volume</strong> of the series.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Volum (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Volum&quot; is a misspelling of &quot;volume&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Volum&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;volume&quot;</strong> when referring to space or sound.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Volume:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Capacity</li>
                <li>• Amount</li>
                <li>• Quantity</li>
                <li>• Book</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Volum:</h4>
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
            <li>• <strong>Volume</strong> is spelled with an &quot;e&quot; at the end.</li>
            <li>• Used to refer to space, sound, or a book in a series.</li>
            <li>• The word &quot;volume&quot; comes from the Latin &quot;volumen&quot; meaning &quot;roll&quot; or &quot;scroll&quot;.</li>
            <li>• &quot;Volum&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;volum&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;volum&quot; is never correct. The proper spelling is always &quot;volume&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;volume&quot; ends with &quot;ume&quot; not &quot;um&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;volume&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Volume&quot; means the amount of space that a substance or object occupies, or a book in a series.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;volume&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;volume&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;volume&quot; pronounced?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It is pronounced /ˈvɒl.juːm/ (VOL-yoom).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Volume</strong> is the correct spelling with an &quot;e&quot; at the end. It refers to space, sound, or a book in a series. The misspelling &quot;volum&quot; is never correct. Use &quot;volume&quot; to indicate the correct word.</p>
      </div>
    </div>
  )
} 