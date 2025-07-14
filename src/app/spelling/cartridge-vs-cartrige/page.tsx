import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cartridge or Cartrige - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;cartridge&quot; and &quot;cartrige&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CartridgeVsCartrigePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Cartridge or Cartrige</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;cartridge&quot; and &quot;cartrige&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Cartrige</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Cartrige&quot; is a misspelling. The correct spelling is &quot;cartridge&quot; with &quot;dge&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Cartridge</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Cartridge&quot; is the correct spelling. It refers to a container or holder for various materials.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Cartridge (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A container or holder for various materials, such as ink, ammunition, or other substances.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The printer needs a new ink <strong>cartridge</strong>.</li>
                  <li>• The gun was loaded with a <strong>cartridge</strong>.</li>
                  <li>• The <strong>cartridge</strong> contains the game data.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Cartrige (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Cartrige&quot; is a misspelling of &quot;cartridge&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Cartrige&quot; is not used in standard English.</li>
                  <li>• Always use <strong>cartridge</strong> when referring to containers.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Cartridge:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Container</li>
                <li>• Holder</li>
                <li>• Casing</li>
                <li>• Magazine</li>
                <li>• Container</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Cartrige:</h4>
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
            <li>• <strong>Cartridge</strong> is spelled with &quot;dge&quot; at the end, not &quot;ge.&quot;</li>
            <li>• The word comes from French &quot;cartouche&quot; meaning a scroll or case.</li>
            <li>• Can be used in various contexts including technology, weapons, and gaming.</li>
            <li>• Often used in discussions about printers, firearms, and video games.</li>
            <li>• &quot;Cartrige&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;cartrige&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cartrige&quot; is never correct. The proper spelling is always &quot;cartridge.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;cart-ridge&quot; - the word ends with &quot;dge&quot; like &quot;bridge&quot; or &quot;fridge.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between cartridge and magazine?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to containers, but &quot;cartridge&quot; is more general while &quot;magazine&quot; is specific to firearms.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;cartrige&quot; likely occurs because people forget the &quot;d&quot; before &quot;ge.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;cartridge&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: ink cartridge, game cartridge, and bullet cartridge.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can cartridge be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cartridge&quot; is only used as a noun.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is cartridge only used for technology?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cartridge&quot; can be used for various containers, not just technology.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word cartridge?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from French &quot;cartouche&quot; and was first used in English in the 16th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Cartridge</strong> is the correct spelling with &quot;dge&quot; at the end. It refers to a container or holder for various materials, such as ink, ammunition, or other substances. The misspelling &quot;cartrige&quot; is never correct. Use &quot;cartridge&quot; to refer to containers in technology, weapons, gaming, and other contexts.</p>
      </div>
    </div>
  )
} 