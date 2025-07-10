import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Atmosphere vs Atmosfere - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "atmosphere" and "atmosfere". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AtmosphereVsAtmosferePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Atmosphere or Atmosfere</h1>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-block">
          <p className="text-lg md:text-xl font-semibold">Which spelling is correct?</p>
        </div>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-200 bg-red-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">❌</span>
            <h2 className="text-2xl font-bold text-red-800">Incorrect</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-red-600 mb-4">atmosfere</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">atmosphere</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling of the word meaning the gaseous envelope surrounding Earth or the mood of a place.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Atmosphere (noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              The gaseous envelope surrounding Earth or another planet. Also refers to the pervading tone or mood of a place, 
              situation, or creative work.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>The Earth&apos;s <strong>atmosphere</strong> protects us from harmful radiation.</li>
              <li>The restaurant had a cozy <strong>atmosphere</strong> with dim lighting.</li>
              <li>The <strong>atmosphere</strong> at the party was electric.</li>
              <li>Pollution is affecting our <strong>atmosphere</strong>.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;atmosphere&quot; and &quot;atmosfere&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic similarity:</strong> Both spellings would sound similar when pronounced</li>
            <li><strong>Common misspelling:</strong> Many people drop the &quot;h&quot; when spelling the word</li>
            <li><strong>Inconsistent English spelling rules:</strong> Some words do have silent letters</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
            <li><strong>Typographical errors:</strong> Missing letters when typing quickly</li>
            <li><strong>Influence from other words:</strong> Words like &quot;sphere&quot; don&apos;t have &quot;h&quot;</li>
          </ul>
        </div>
      </Card>

      {/* Grammar Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Grammar Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Spelling rule:</strong> The word &quot;atmosphere&quot; comes from the Greek word &quot;atmos&quot; (vapor) + &quot;sphaira&quot; (sphere) 
            and includes the letter &quot;h&quot; which is pronounced.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Related words:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li><strong>atmospheric</strong> (adjective)</li>
              <li><strong>atmospherically</strong> (adverb)</li>
              <li><strong>atmospheric pressure</strong> (noun phrase)</li>
              <li><strong>atmospheric conditions</strong> (noun phrase)</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Note:</strong> All related words include the letter &quot;h&quot; and follow the same spelling pattern.
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Atmosphere&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Physical:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>air</li>
              <li>environment</li>
              <li>climate</li>
              <li>ambience</li>
              <li>surroundings</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Mood/Feeling:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>vibe</li>
              <li>mood</li>
              <li>feeling</li>
              <li>tone</li>
              <li>aura</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Notes */}
      <Card className="mb-8 p-6">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>Use &quot;atmosphere&quot; when referring to the gaseous envelope around Earth or the mood of a place</li>
            <li>Remember that &quot;atmosphere&quot; includes the letter &quot;h&quot;</li>
            <li>Common contexts include science, weather, environment, and social situations</li>
            <li>The word &quot;atmosphere&quot; can refer to both physical and emotional environments</li>
            <li>Always spell it as &quot;atmosphere&quot; not &quot;atmosfere&quot;</li>
            <li>Think of it as &quot;atmos&quot; + &quot;sphere&quot; to remember the spelling</li>
          </ul>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;atmosfere&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;atmosfere&quot; is never correct in standard English. The correct spelling is always &quot;atmosphere.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the difference between &quot;atmosphere&quot; and &quot;ambience&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: &quot;Atmosphere&quot; can refer to both the physical gaseous envelope and the mood of a place, 
              while &quot;ambience&quot; specifically refers to the character and atmosphere of a place.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is the &quot;h&quot; pronounced in &quot;atmosphere&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, the &quot;h&quot; in &quot;atmosphere&quot; is pronounced. It&apos;s not a silent letter.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;atmosphere&quot; includes the letter &quot;h.&quot; Think of it as &quot;atmos&quot; + &quot;sphere&quot; 
              or use the mnemonic: &quot;Atmosphere has an &apos;h&apos; for &apos;heaven&apos; and &apos;height&apos;.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a common spelling mistake. Many people drop the &quot;h&quot; when writing &quot;atmosphere,&quot; 
              especially when typing quickly or relying on phonetic spelling.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What about the adjective form?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: The adjective form is &quot;atmospheric&quot; and it also follows the same spelling pattern with the letter &quot;h.&quot;
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Atmosphere&quot;</strong> is the correct spelling of the word meaning the gaseous envelope surrounding Earth 
          or the pervading tone or mood of a place. The spelling &quot;atmosfere&quot; is incorrect and should never be used. 
          Remember that &quot;atmosphere&quot; includes the letter &quot;h&quot; and comes from the Greek words &quot;atmos&quot; (vapor) 
          and &quot;sphaira&quot; (sphere). This is a common spelling mistake, so it&apos;s important to remember the correct spelling.
        </p>
      </div>
    </div>
  )
} 