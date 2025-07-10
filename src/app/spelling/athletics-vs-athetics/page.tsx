import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Athletics vs Athetics - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "athletics" and "athetics". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AthleticsVsAtheticsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Athletics or Athetics</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">athetics</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">athletics</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling of the word meaning sports or physical activities.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Athletics (noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Sports, games, or other activities requiring physical skill and strength. Also refers to the practice 
              or participation in such activities, especially track and field events.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>The school has a strong <strong>athletics</strong> program.</li>
              <li>She excelled in <strong>athletics</strong> during her college years.</li>
              <li>The <strong>athletics</strong> department organized the tournament.</li>
              <li>Track and field <strong>athletics</strong> are popular Olympic sports.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;athletics&quot; and &quot;athetics&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic similarity:</strong> Both spellings would sound similar when pronounced</li>
            <li><strong>Common misspelling:</strong> Many people drop the &quot;l&quot; when spelling the word</li>
            <li><strong>Inconsistent English spelling rules:</strong> Some words do have silent letters</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
            <li><strong>Typographical errors:</strong> Missing letters when typing quickly</li>
            <li><strong>Influence from other words:</strong> Words like &quot;aesthetic&quot; don&apos;t have &quot;l&quot;</li>
          </ul>
        </div>
      </Card>

      {/* Grammar Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Grammar Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Spelling rule:</strong> The word &quot;athletics&quot; comes from the Greek word &quot;athlētikos&quot; and includes 
            the letter &quot;l&quot; which is pronounced in English.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Related words:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li><strong>athlete</strong> (noun)</li>
              <li><strong>athletic</strong> (adjective)</li>
              <li><strong>athletically</strong> (adverb)</li>
              <li><strong>athleticism</strong> (noun)</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Note:</strong> All related words include the letter &quot;l&quot; and follow the same spelling pattern.
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Athletics&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Formal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>sports</li>
              <li>physical education</li>
              <li>physical activities</li>
              <li>competitive sports</li>
              <li>track and field</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Informal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>games</li>
              <li>physical training</li>
              <li>sports activities</li>
              <li>fitness activities</li>
              <li>competitive activities</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Notes */}
      <Card className="mb-8 p-6">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>Use &quot;athletics&quot; when referring to sports, games, or physical activities</li>
            <li>Remember that &quot;athletics&quot; includes the letter &quot;l&quot;</li>
            <li>Common contexts include schools, colleges, sports organizations, and fitness</li>
            <li>The word &quot;athletics&quot; is often used in educational and institutional settings</li>
            <li>Always spell it as &quot;athletics&quot; not &quot;athetics&quot;</li>
            <li>Think of it as &quot;athletic&quot; + &quot;s&quot; to remember the spelling</li>
          </ul>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;athetics&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;athetics&quot; is never correct in standard English. The correct spelling is always &quot;athletics.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the difference between &quot;athletics&quot; and &quot;sports&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: &quot;Athletics&quot; specifically refers to track and field events and organized physical activities, 
              while &quot;sports&quot; is a broader term for any competitive physical activity.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is the &quot;l&quot; pronounced in &quot;athletics&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, the &quot;l&quot; in &quot;athletics&quot; is pronounced. It&apos;s not a silent letter like in some other words.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;athletics&quot; includes the letter &quot;l.&quot; Think of it as &quot;athletic&quot; + &quot;s&quot; 
              or use the mnemonic: &quot;Athletics has an &apos;l&apos; for &apos;leaping&apos; and &apos;running&apos;.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a common spelling mistake. Many people drop the &quot;l&quot; when writing &quot;athletics,&quot; 
              especially when typing quickly or relying on phonetic spelling.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Can &quot;athletics&quot; be used as a singular noun?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: &quot;Athletics&quot; is typically used as a plural noun, but it can also be treated as a singular noun 
              when referring to the field or department of athletics.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Athletics&quot;</strong> is the correct spelling of the word meaning sports, games, or physical activities, 
          especially track and field events. The spelling &quot;athetics&quot; is incorrect and should never be used. 
          Remember that &quot;athletics&quot; includes the letter &quot;l&quot; which is pronounced, and it comes from the Greek 
          word &quot;athlētikos.&quot; This is a common spelling mistake, so it&apos;s important to remember the correct spelling.
        </p>
      </div>
    </div>
  )
}

