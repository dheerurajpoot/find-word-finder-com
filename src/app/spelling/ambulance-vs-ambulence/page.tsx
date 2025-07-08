import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Ambulance or Ambulence - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;ambulance&quot; and &quot;ambulence&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AmbulanceVsAmbulencePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Ambulance or Ambulence</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;ambulance&quot; and &quot;ambulence&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Ambulence</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Ambulence&quot; is a misspelling. The correct spelling is &quot;ambulance&quot; with &quot;an&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Ambulance</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Ambulance&quot; is the correct spelling. It means a vehicle equipped for transporting sick or injured people.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Ambulance (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A vehicle equipped for transporting sick or injured people to and from hospitals; emergency medical vehicle.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>ambulance</strong> arrived quickly at the scene.</li>
                  <li>• Emergency services called an <strong>ambulance</strong>.</li>
                  <li>• The <strong>ambulance</strong> rushed to the hospital.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Ambulence (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Ambulence&quot; is a misspelling of &quot;ambulance&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Ambulence&quot; is not used in standard English.</li>
                  <li>• Always use <strong>ambulance</strong> when referring to emergency vehicles.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Ambulance:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Emergency vehicle</li>
                <li>• Medical transport</li>
                <li>• Emergency response vehicle</li>
                <li>• Paramedic vehicle</li>
                <li>• Emergency ambulance</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Ambulence:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Ambulance</strong> is spelled with &quot;an&quot; in the middle, not &quot;en.&quot;</li>
            <li>• Used to refer to emergency medical transport vehicles.</li>
            <li>• Can be used in both formal and informal contexts.</li>
            <li>• The word comes from French &quot;ambulance&quot; meaning &quot;mobile hospital.&quot;</li>
            <li>• &quot;Ambulence&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;ambulence&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ambulence&quot; is never correct. The proper spelling is always &quot;ambulance.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;am-bu-lance&quot; - it has &quot;an&quot; in the middle, not &quot;en.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between ambulance and paramedic?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: An &quot;ambulance&quot; is the vehicle, while a &quot;paramedic&quot; is the medical professional who works in it.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can ambulance be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;ambulance&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;ambulance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: call an ambulance, ambulance service, and ambulance driver.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;ambulence&quot; occurs because people think it should have &quot;en&quot; like many other words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is ambulance always about medical emergencies?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;ambulance&quot; specifically refers to vehicles used for medical emergencies and patient transport.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can ambulance be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ambulance&quot; is only a noun. You would say &quot;call an ambulance&quot; or &quot;take an ambulance.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Ambulance</strong> is the correct spelling with &quot;an&quot; in the middle. It means a vehicle equipped for transporting sick or injured people. The misspelling &quot;ambulence&quot; is never correct. Use &quot;ambulance&quot; when referring to emergency medical transport vehicles.</p>
      </div>
    </div>
  )
} 