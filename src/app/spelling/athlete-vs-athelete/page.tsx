import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Athlete vs Athelete - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "athlete" and "athelete". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AthleteVsAtheletePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Athlete or Athelete</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">athelete</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">athlete</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling of the word meaning a person who participates in sports.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Athlete (noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A person who is trained or skilled in exercises, sports, or games requiring physical strength, agility, or stamina.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>She is a professional <strong>athlete</strong> who competes in track and field.</li>
              <li>The <strong>athlete</strong> trained hard for the upcoming competition.</li>
              <li>Many young <strong>athletes</strong> dream of competing in the Olympics.</li>
              <li>The <strong>athlete</strong> broke the world record in the marathon.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;athlete&quot; and &quot;athelete&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic similarity:</strong> Both spellings would sound similar when pronounced</li>
            <li><strong>Common misspelling:</strong> Many people add an extra &quot;e&quot; after &quot;th&quot;</li>
            <li><strong>Inconsistent English spelling rules:</strong> Some words do have &quot;e&quot; after &quot;th&quot;</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
            <li><strong>Typographical errors:</strong> Adding an extra letter when typing quickly</li>
          </ul>
        </div>
      </Card>

      {/* Grammar Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Grammar Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Spelling rule:</strong> The word &quot;athlete&quot; comes from the Greek word &quot;athlētēs&quot; and follows 
            the standard English spelling pattern without an extra &quot;e&quot; after &quot;th.&quot;
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Related words:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li><strong>athletic</strong> (adjective)</li>
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
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Athlete&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Formal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>competitor</li>
              <li>sportsman</li>
              <li>sportswoman</li>
              <li>player</li>
              <li>contestant</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Informal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>jock</li>
              <li>sportsperson</li>
              <li>performer</li>
              <li>participant</li>
              <li>team member</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Notes */}
      <Card className="mb-8 p-6">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>Use &quot;athlete&quot; when referring to someone who participates in sports or physical activities</li>
            <li>Remember that &quot;athlete&quot; has only one &quot;e&quot; after &quot;th&quot;</li>
            <li>Common contexts include sports, fitness, and physical education</li>
            <li>The word &quot;athlete&quot; can refer to both amateur and professional sports participants</li>
            <li>Always spell it as &quot;athlete&quot; not &quot;athelete&quot;</li>
            <li>Think of it as &quot;ath&quot; + &quot;lete&quot; without an extra &quot;e&quot;</li>
          </ul>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;athelete&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;athelete&quot; is never correct in standard English. The correct spelling is always &quot;athlete.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the origin of the word &quot;athlete&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: The word comes from the Greek &quot;athlētēs&quot; meaning &quot;contestant in the games.&quot; 
              It entered English through Latin and has maintained its original spelling pattern.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Can &quot;athlete&quot; refer to both men and women?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;athlete&quot; is a gender-neutral term that can refer to both male and female sports participants.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;athlete&quot; has only one &quot;e&quot; after &quot;th.&quot; Think of it as &quot;ath&quot; + &quot;lete&quot; 
              or use the mnemonic: &quot;An athlete has one &apos;e&apos; after &apos;th&apos;.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a very common spelling mistake. Many people add an extra &quot;e&quot; after &quot;th&quot; 
              when writing &quot;athlete,&quot; making it one of the most frequently misspelled words in English.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What about related words like &quot;athletic&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: All related words follow the same pattern: &quot;athletic,&quot; &quot;athletics,&quot; &quot;athletically,&quot; 
              and &quot;athleticism&quot; all have only one &quot;e&quot; after &quot;th.&quot;
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Athlete&quot;</strong> is the correct spelling of the word meaning a person who participates in sports or physical activities. 
          The spelling &quot;athelete&quot; is incorrect and should never be used. Remember that &quot;athlete&quot; has only one &quot;e&quot; 
          after &quot;th&quot; and comes from the Greek word &quot;athlētēs.&quot; This is one of the most commonly misspelled words in English, 
          so it&apos;s important to remember the correct spelling.
        </p>
      </div>
    </div>
  )
} 