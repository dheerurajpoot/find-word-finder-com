import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Burglar or Burgular - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;burglar&quot; and &quot;burgular&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BurglarVsBurgularPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Burglar or Burgular</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;burglar&quot; and &quot;burgular&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Burgular</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Burgular&quot; is a misspelling. The correct spelling is &quot;burglar&quot; with &quot;lar&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Burglar</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Burglar&quot; is the correct spelling. It refers to a person who commits burglary.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Burglar (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person who illegally enters a building to commit theft or other crimes.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>burglar</strong> broke into the house through the back window.</li>
                  <li>• Police caught the <strong>burglar</strong> in the act.</li>
                  <li>• The security system scared away the <strong>burglar</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Burgular (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Burgular&quot; is a misspelling of &quot;burglar&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Burgular&quot; is not used in standard English.</li>
                  <li>• Always use <strong>burglar</strong> when referring to a thief.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Burglar:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Thief</li>
                <li>• Robber</li>
                <li>• Intruder</li>
                <li>• Housebreaker</li>
                <li>• Cat burglar</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Burgular:</h4>
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
            <li>• <strong>Burglar</strong> is spelled with &quot;lar&quot; at the end, not &quot;ular.&quot;</li>
            <li>• The word comes from the Anglo-French &quot;burgler&quot; meaning to commit burglary.</li>
            <li>• &quot;Burglar&quot; specifically refers to someone who breaks into buildings to steal.</li>
            <li>• &quot;Burgular&quot; is never correct in any context.</li>
            <li>• The pronunciation is /ˈbɜːrɡlər/ with emphasis on the first syllable.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;burgular&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;burgular&quot; is never correct. The proper spelling is always &quot;burglar.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;burg-lar&quot; - like someone who breaks into a burg (town) with &quot;lar&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between burglar and thief?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A burglar specifically breaks into buildings to steal, while a thief is a more general term for someone who steals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can burglar be used in plural form?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;burglars&quot; is the correct plural form of burglar.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;burgular&quot; likely occurs because of confusion about the ending or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;burglar&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: cat burglar, burglar alarm, burglar proof, and master burglar.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can burglar be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;burglar&quot; is a noun. The verb form is &quot;burgle&quot; or &quot;burglarize.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is burglar always about breaking into buildings?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;burglar&quot; specifically refers to someone who illegally enters buildings to commit theft or other crimes.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Burglar</strong> is the correct spelling with &quot;lar&quot; at the end. It refers to a person who illegally enters buildings to commit theft or other crimes. The misspelling &quot;burgular&quot; is never correct. Use &quot;burglar&quot; for all contexts involving someone who breaks into buildings to steal.</p>
      </div>
    </div>
  )
} 