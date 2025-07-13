import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Beggar or Beger - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;beggar&quot; and &quot;beger&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BeggarVsBegerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Beggar or Beger</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;beggar&quot; and &quot;beger&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Beger</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Beger&quot; is a misspelling. The correct spelling is &quot;beggar&quot; with double &quot;g&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Beggar</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Beggar&quot; is the correct spelling. It means a person who asks for money or food.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Beggar (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person who asks for money or food from others; someone who lives by begging.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>beggar</strong> asked for spare change.</li>
                  <li>• She gave money to the <strong>beggar</strong> on the street.</li>
                  <li>• The <strong>beggar</strong> was sitting outside the store.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Beger (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Beger&quot; is a misspelling of &quot;beggar&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Beger&quot; is not used in standard English.</li>
                  <li>• Always use <strong>beggar</strong> when referring to someone who begs.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Beggar:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Panhandler</li>
                <li>• Mendicant</li>
                <li>• Tramp</li>
                <li>• Vagrant</li>
                <li>• Homeless person</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Beger:</h4>
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
            <li>• <strong>Beggar</strong> is spelled with double &quot;g&quot; - this is the standard English spelling.</li>
            <li>• The word comes from the verb &quot;beg&quot; + the suffix &quot;-ar&quot; meaning one who does something.</li>
            <li>• &quot;Beger&quot; is never correct in any context.</li>
            <li>• Used as a noun to refer to someone who begs for money or food.</li>
            <li>• Can be considered offensive in some contexts.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;beger&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beger&quot; is never correct. The proper spelling is always &quot;beggar.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does beggar mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Beggar means a person who asks for money or food from others, someone who lives by begging.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;beggar&quot; has double &quot;g&quot; - think of &quot;beg&quot; + &quot;gar.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between beggar and panhandler?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: They are synonyms, but &quot;panhandler&quot; is more specific to someone who begs on the street.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can beggar be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;beggar&quot; can also be used as a verb meaning to reduce someone to poverty.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases with beggar?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: beggar belief, beggar description, and beggar the imagination.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is beggar used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;beggar&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can beggar be plural?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;beggars&quot; is the correct plural form.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Beggar</strong> is the correct spelling with double &quot;g&quot;. It means a person who asks for money or food from others. The misspelling &quot;beger&quot; is never correct in English.</p>
      </div>
    </div>
  )
} 