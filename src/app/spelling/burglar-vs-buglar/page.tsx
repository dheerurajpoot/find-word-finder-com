import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Burglar or Buglar - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;burglar&quot; and &quot;buglar&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BurglarVsBuglarPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Burglar or Buglar
      </h1>
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;burglar&quot; and &quot;buglar&quot;—these commonly confused spellings—and how to use them properly.
        </p>
      </div>
      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Buglar</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Buglar&quot; is a misspelling. The correct spelling is &quot;burglar&quot; with the &apos;r&apos; before the &apos;g&apos;.
            </p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Burglar</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Burglar&quot; is the correct spelling. It refers to a person who commits burglary (breaks into a building to steal). 
            </p>
          </CardContent>
        </Card>
      </div>
      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Burglar</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Burglar</strong> (noun): A person who illegally enters a building, especially at night, to commit theft or another crime.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The <strong>burglar</strong> broke into the house while the owners were away.</li>
              <li>• Police arrested a suspected <strong>burglar</strong> last night.</li>
              <li>• The alarm scared off the <strong>burglar</strong> before he could steal anything.</li>
              <li>• She installed cameras to catch any <strong>burglar</strong> in the act.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Burglar</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Thief</li>
                <li>• Housebreaker</li>
                <li>• Intruder</li>
                <li>• Robber</li>
                <li>• Trespasser</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Looter</li>
                <li>• Bandit</li>
                <li>• Cat burglar</li>
                <li>• Pickpocket</li>
                <li>• Mugger</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Notes Section */}
      <div className="mb-8">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Burglar</strong> is always spelled with an &apos;r&apos; before the &apos;g&apos;.</li>
            <li>• The word comes from the Old English &quot;burg&quot; (house) and &quot;laron&quot; (thief).</li>
            <li>• &quot;Buglar&quot; is never correct in standard English.</li>
            <li>• The verb form is &quot;burgle&quot; (to commit burglary).</li>
            <li>• Pronounced &quot;BUR-glur&quot; (rhymes with &quot;curler&quot;).</li>
          </ul>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;buglar&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;buglar&quot; is never correct. The only correct spelling is &quot;burglar&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does a burglar do?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: A burglar illegally enters a building, usually to steal property or commit another crime.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the verb form of burglar?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The verb is &quot;burgle&quot; (to commit burglary). Example: &quot;Someone burgled my house last night.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;burglar&quot; the same as &quot;robber&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Not exactly. A burglar breaks into buildings to steal, while a robber uses force or threat to steal directly from people.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Remember &quot;burglar&quot; has &quot;burg&quot; (like &quot;burgh&quot; or &quot;burg&quot; in city names) and &quot;lar&quot; (like &quot;larceny&quot;).
            </p>
          </div>
        </div>
      </div>
      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Burglar</strong> is the correct spelling for a person who breaks into buildings to steal. The misspelling &quot;buglar&quot; is never correct. Always use &quot;burglar&quot; in writing and speech.
        </p>
      </div>
    </div>
  )
} 