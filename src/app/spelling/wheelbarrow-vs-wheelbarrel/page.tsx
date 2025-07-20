import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Wheelbarrow or Wheelbarrel - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;wheelbarrow&quot; and &quot;wheelbarrel&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WheelbarrowVsWheelbarrelPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Wheelbarrow or Wheelbarrel</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;wheelbarrow&quot; and &quot;wheelbarrel&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wheelbarrel</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wheelbarrel&quot; is a misspelling. The correct spelling is &quot;wheelbarrow&quot; with &quot;row&quot; at the end.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Wheelbarrow</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Wheelbarrow&quot; is the correct spelling. It refers to a small cart with one wheel used for carrying loads.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wheelbarrow</strong> is the correct spelling. It refers to a small cart with one wheel and handles, used for carrying loads such as soil, sand, or other materials.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wheelbarrel</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wheelbarrow (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A small cart with one wheel and two handles, used for carrying loads such as soil, sand, gravel, or other materials. It is commonly used in gardening, construction, and landscaping.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wheelbarrow (verb)</h3>
          <p className="text-lg md:text-xl text-gray-700">
            To transport something using a wheelbarrow.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;He used a <span className="text-green-600 font-semibold">wheelbarrow</span> to carry the soil to the garden.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The construction workers loaded the <span className="text-green-600 font-semibold">wheelbarrow</span> with concrete.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She <span className="text-green-600 font-semibold">wheelbarrowed</span> the mulch across the yard.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;He used a <span className="text-red-600 font-semibold">wheelbarrel</span> to carry the soil&quot; (should be &quot;wheelbarrow&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For the tool:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Garden cart</li>
                <li>• Hand cart</li>
                <li>• Pushcart</li>
                <li>• Trolley</li>
                <li>• Dolly</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For carrying:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Transport</li>
                <li>• Haul</li>
                <li>• Carry</li>
                <li>• Move</li>
                <li>• Convey</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Wheelbarrow&quot; is spelled with &quot;row&quot; at the end, not &quot;rel&quot;</li>
          <li>• The word is a combination of &quot;wheel&quot; and &quot;barrow&quot;</li>
          <li>• &quot;Barrow&quot; comes from Old English &quot;bearwe&quot; meaning &quot;stretcher&quot;</li>
          <li>• It can be used as both a noun and a verb</li>
          <li>• The past tense is &quot;wheelbarrowed&quot;</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wheelbarrel&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wheelbarrel&quot; is never correct. The correct spelling is always &quot;wheelbarrow&quot; with &quot;row&quot; at the end.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;wheelbarrow&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WHEEL-bair-oh&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between a wheelbarrow and a barrel?</h3>
            <p className="text-lg md:text-xl text-gray-700">A wheelbarrow is a cart with one wheel for carrying loads, while a barrel is a cylindrical container, typically made of wood or metal, used for storing liquids or other materials.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;wheelbarrow&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;wheelbarrow&quot; can be used as a verb meaning to transport something using a wheelbarrow.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;wheelbarrow&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, many people incorrectly spell it as &quot;wheelbarrel&quot;, possibly confusing it with the word &quot;barrel&quot;. This is a very common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wheelbarrow</strong> is the correct spelling. It refers to a small cart with one wheel and handles, used for carrying loads such as soil, sand, or other materials.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wheelbarrel</strong> is always incorrect. Remember to use &quot;row&quot; at the end, not &quot;rel&quot;.
        </p>
      </div>
    </div>
  )
} 