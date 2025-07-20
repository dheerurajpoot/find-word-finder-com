import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Weapons or Wepons - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;weapons&quot; and &quot;wepons&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WeaponsVsWeponsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Weapons or Wepons</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;weapons&quot; and &quot;wepons&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wepons</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wepons&quot; is a misspelling. The correct spelling is &quot;weapons&quot; with an &quot;a&quot; after the &quot;e&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Weapons</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Weapons&quot; is the correct spelling. It refers to tools or devices used for fighting or defense.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Weapons</strong> is the correct spelling. It is the plural form of &quot;weapon&quot; and refers to tools or devices used for fighting or defense.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wepons</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Weapons (plural noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Tools or devices designed to inflict harm or damage, used for fighting, hunting, or defense; the plural form of &quot;weapon&quot;.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Weapon (singular noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Any instrument or device used for fighting, hunting, or defense.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to refer to multiple tools or devices designed for combat, hunting, or protection.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The soldiers carried their <span className="text-green-600 font-semibold">weapons</span> into battle.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;Ancient <span className="text-green-600 font-semibold">weapons</span> included swords and bows.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The police confiscated illegal <span className="text-green-600 font-semibold">weapons</span>.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;The soldiers carried their <span className="text-red-600 font-semibold">wepons</span> into battle&quot; (should be &quot;weapons&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For combat:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Arms</li>
                <li>• Artillery</li>
                <li>• Munitions</li>
                <li>• Firearms</li>
                <li>• Ordnance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For tools:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Instruments</li>
                <li>• Devices</li>
                <li>• Equipment</li>
                <li>• Gear</li>
                <li>• Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Weapons&quot; is spelled with an &quot;a&quot; after the &quot;e&quot;</li>
          <li>• The word comes from Old English &quot;wǣpen&quot; meaning &quot;weapon&quot;</li>
          <li>• It is the plural form of the singular noun &quot;weapon&quot;</li>
          <li>• Can refer to various types of fighting tools</li>
          <li>• Often used in military and law enforcement contexts</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wepons&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wepons&quot; is never correct. The correct spelling is always &quot;weapons&quot; with an &quot;a&quot; after the &quot;e&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;weapons&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WEH-puhnz&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;weapons&quot; and &quot;wepons&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Weapons&quot; is the correct spelling meaning fighting tools, while &quot;wepons&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;weapons&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;weapons&quot; can refer to military arms, hunting tools, or any devices designed for combat or defense.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;weapons&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;wepons&quot;, possibly because they forget the &quot;a&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Weapons</strong> is the correct spelling. It is the plural form of &quot;weapon&quot; and refers to tools or devices used for fighting or defense.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wepons</strong> is always incorrect. Remember to include the &quot;a&quot; after the &quot;e&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 