import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Temperature or Temperatura - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;temperature&quot; and &quot;temperatura&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TemperatureVsTemperaturaPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Temperature or Temperatura</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;temperature&quot; and &quot;temperatura&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Temperatura</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Temperatura&quot; is a misspelling. The correct spelling is &quot;temperature&quot; with &quot;ure&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Temperature</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Temperature&quot; is the correct spelling. It means the degree of heat or cold.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Temperature (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The degree of heat or cold in a body or environment; a measure of the average kinetic energy of particles in a substance.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>temperature</strong> today is 75 degrees.</li>
                  <li>• The patient&apos;s <strong>temperature</strong> was normal.</li>
                  <li>• The <strong>temperature</strong> of the water was perfect.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Temperatura (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Temperatura&quot; is a misspelling of &quot;temperature&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Temperatura&quot; is not used in standard English.</li>
                  <li>• Always use <strong>temperature</strong> when referring to heat or cold.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Temperature:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Heat</li>
                <li>• Warmth</li>
                <li>• Thermal level</li>
                <li>• Degree of heat</li>
                <li>• Thermal reading</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Temperatura:</h4>
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
            <li>• <strong>Temperature</strong> is spelled with &quot;ure&quot; at the end: tem-per-a-ture.</li>
            <li>• It is commonly used in science, weather, and medical contexts.</li>
            <li>• &quot;Temperatura&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;temperatura&quot; meaning &quot;temperament.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;temperatura&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;temperatura&quot; is never correct. The proper spelling is always &quot;temperature.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;temperature&quot; ends with &quot;ure&quot; - think of it as &quot;tem-per-a-ture.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between temperature and heat?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Temperature is a measure of how hot or cold something is, while heat is the energy that flows between objects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;temperature&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;temperature&quot; is very appropriate in formal and academic writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;temperature&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;temperatura&quot; often happens by replacing &quot;ure&quot; with &quot;ura&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;temperature&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: room temperature, body temperature, temperature control, and temperature reading.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;temperature&quot; always about heat?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;temperature&quot; can refer to both heat and cold - it measures the degree of either.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;temperature&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;temperature&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Temperature</strong> is the correct spelling with &quot;er&quot;: tem-per-a-ture. It means the degree of heat or cold. The misspelling &quot;temperatura&quot; is never correct. Always use &quot;temperature&quot; when referring to heat or cold measurements.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/berserk-vs-bersark" className="text-blue-700 hover:text-blue-900 underline">Berserk vs Bersark</a></li>
            <li><a href="/spelling/condemn-vs-condem" className="text-blue-700 hover:text-blue-900 underline">Condemn vs Condem</a></li>
            <li><a href="/spelling/verbiage-vs-verbage" className="text-blue-700 hover:text-blue-900 underline">Verbiage vs Verbage</a></li>
            <li><a href="/spelling/submitted-vs-submited" className="text-blue-700 hover:text-blue-900 underline">Submitted vs Submited</a></li>
            <li><a href="/spelling/along-vs-allong" className="text-blue-700 hover:text-blue-900 underline">Along vs Allong</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/adverse-vs-adverse" className="text-purple-700 hover:text-purple-900 underline">Adverse vs Adverse</a></li>
            <li><a href="/spelling/xylophone-vs-xylephone" className="text-purple-700 hover:text-purple-900 underline">Xylophone vs Xylephone</a></li>
            <li><a href="/spelling/sufficiently-vs-sufficently" className="text-purple-700 hover:text-purple-900 underline">Sufficiently vs Sufficently</a></li>
            <li><a href="/spelling/attendance-vs-attendence" className="text-purple-700 hover:text-purple-900 underline">Attendance vs Attendence</a></li>
            <li><a href="/spelling/succumb-vs-succum" className="text-purple-700 hover:text-purple-900 underline">Succumb vs Succum</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</a></li>
            <li><a href="/grammar/declarative-sentence" className="text-green-700 hover:text-green-900 underline">Declarative Sentences</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/adjectives-starting-with-vowels" className="text-green-700 hover:text-green-900 underline">Adjectives Starting with Vowels</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-proper-nouns" className="text-green-700 hover:text-green-900 underline">Proper Nouns Worksheets</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 