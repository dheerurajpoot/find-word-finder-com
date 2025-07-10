import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Athletic vs Atheletic - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "athletic" and "atheletic". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AthleticVsAtheleticPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Athletic or Atheletic</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">atheletic</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">athletic</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling of the adjective meaning relating to sports or physical activities.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Athletic (adjective)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Relating to athletes, sports, or physical activities. Also used to describe someone who is physically fit, 
              strong, and good at sports.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>She has an <strong>athletic</strong> build from years of training.</li>
              <li>The school has excellent <strong>athletic</strong> facilities.</li>
              <li>He showed <strong>athletic</strong> ability from a young age.</li>
              <li>The <strong>athletic</strong> competition was fierce.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;athletic&quot; and &quot;atheletic&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic similarity:</strong> Both spellings would sound similar when pronounced</li>
            <li><strong>Common misspelling:</strong> Many people add an extra &quot;e&quot; after &quot;th&quot;</li>
            <li><strong>Inconsistent English spelling rules:</strong> Some words do have &quot;e&quot; after &quot;th&quot;</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
            <li><strong>Typographical errors:</strong> Adding an extra letter when typing quickly</li>
            <li><strong>Influence from other words:</strong> Words like &quot;aesthetic&quot; have &quot;e&quot; after &quot;th&quot;</li>
          </ul>
        </div>
      </Card>

      {/* Grammar Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Grammar Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Spelling rule:</strong> The word &quot;athletic&quot; comes from the Greek word &quot;athlētikos&quot; and follows 
            the standard English spelling pattern without an extra &quot;e&quot; after &quot;th.&quot;
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Related words:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li><strong>athlete</strong> (noun)</li>
              <li><strong>athletics</strong> (noun)</li>
              <li><strong>athletically</strong> (adverb)</li>
              <li><strong>athleticism</strong> (noun)</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Note:</strong> All related words follow the same spelling pattern without the extra &quot;e.&quot;
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Athletic&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Formal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>sporty</li>
              <li>physical</li>
              <li>fitness-related</li>
              <li>sports-oriented</li>
              <li>physically fit</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Informal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>jock-like</li>
              <li>muscular</li>
              <li>fit</li>
              <li>strong</li>
              <li>active</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Notes */}
      <Card className="mb-8 p-6">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>Use &quot;athletic&quot; when describing sports-related activities or physical fitness</li>
            <li>Remember that &quot;athletic&quot; has only one &quot;e&quot; after &quot;th&quot;</li>
            <li>Common contexts include sports, fitness, physical education, and health</li>
            <li>The word &quot;athletic&quot; can describe both people and activities</li>
            <li>Always spell it as &quot;athletic&quot; not &quot;atheletic&quot;</li>
            <li>Think of it as &quot;ath&quot; + &quot;letic&quot; without an extra &quot;e&quot;</li>
          </ul>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;atheletic&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;atheletic&quot; is never correct in standard English. The correct spelling is always &quot;athletic.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the difference between &quot;athletic&quot; and &quot;athlete&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: &quot;Athlete&quot; is a noun referring to a person who participates in sports, while &quot;athletic&quot; 
              is an adjective describing qualities related to sports or physical fitness.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Can &quot;athletic&quot; be used to describe non-sports activities?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;athletic&quot; can describe any activity requiring physical skill, strength, or agility, 
              not just traditional sports.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;athletic&quot; has only one &quot;e&quot; after &quot;th.&quot; Think of it as &quot;ath&quot; + &quot;letic&quot; 
              or use the mnemonic: &quot;An athletic person has one &apos;e&apos; after &apos;th&apos;.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a very common spelling mistake. Many people add an extra &quot;e&quot; after &quot;th&quot; 
              when writing &quot;athletic,&quot; making it one of the most frequently misspelled words in English.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What about the adverb form?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: The adverb form is &quot;athletically&quot; and it also follows the same spelling pattern with only one &quot;e&quot; after &quot;th.&quot;
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Athletic&quot;</strong> is the correct spelling of the adjective meaning relating to sports, physical activities, 
          or physical fitness. The spelling &quot;atheletic&quot; is incorrect and should never be used. Remember that &quot;athletic&quot; 
          has only one &quot;e&quot; after &quot;th&quot; and comes from the Greek word &quot;athlētikos.&quot; This is one of the most 
          commonly misspelled words in English, so it&apos;s important to remember the correct spelling pattern.
        </p>
      </div>
    </div>
  )
} 