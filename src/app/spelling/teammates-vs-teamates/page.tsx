import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Teammates vs Teamates - Correct Spelling & Team Terminology | Word Finder',
  description: 'Learn the correct spelling: &quot;teammates&quot; vs &quot;teamates&quot;. Master team terminology, usage examples, and avoid common spelling mistakes.',
}

export default function TeammatesVsTeamatesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Teammates vs Teamates</h1>
        <p className="text-xl text-gray-600">Team Terminology & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg mb-8 border-l-4 border-orange-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Team Terminology & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;teammates&quot; and &quot;teamates&quot;. Learn team terminology, compound word formation, and proper usage patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Teamates</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Teamates&quot; is incorrect. The proper spelling is &quot;teammates&quot; with double &quot;m.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Teammates</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Teammates&quot; is the correct spelling. It means &quot;members of the same team.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Teammates (noun, plural):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Members of the same team; people who work together toward a common goal.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• My <strong>teammates</strong> and I won the championship.</li>
                  <li>• Good <strong>teammates</strong> support each other.</li>
                  <li>• The <strong>teammates</strong> celebrated their victory.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Teamates (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Teamates&quot; is a misspelling and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Teamates&quot; is never used in standard English.</li>
                  <li>• Always use <strong>teammates</strong> when referring to team members.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Teammates:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Team members</li>
                <li>• Colleagues</li>
                <li>• Partners</li>
                <li>• Allies</li>
                <li>• Collaborators</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Teamates:</h4>
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
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Compound Word Rules:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Teammates</strong> is a compound word: team + mates.</li>
            <li>• When combining &quot;team&quot; and &quot;mates,&quot; both &quot;m&quot;s are retained.</li>
            <li>• &quot;Teamates&quot; is a common misspelling that should be avoided.</li>
            <li>• Remember: team + mates = teammates (double &quot;m&quot;).</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;teammates&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Teammates&quot; is a plural noun that refers to multiple members of the same team. It functions as a subject, object, or complement in sentences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;teammates&quot; differ from &quot;colleagues&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Teammates&quot; specifically refers to members of the same team, while &quot;colleagues&quot; refers to people who work together in the same profession or organization.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;teammates&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Teammates&quot; is a plural noun that can function as a subject, direct object, indirect object, or object of a preposition.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;teammates&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;teammates&quot; is perfectly acceptable in formal writing, business documents, and academic contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the words &quot;team&quot; and &quot;mates&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Team&quot; comes from Old English &quot;team&quot; meaning &quot;group of draft animals,&quot; while &quot;mates&quot; comes from Middle English &quot;mate&quot; meaning &quot;companion.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;teammates&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Teammates&quot; can be used as a subject (&quot;Teammates work together&quot;), object (&quot;I trust my teammates&quot;), or complement (&quot;They are good teammates&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;teammates&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: good teammates, supportive teammates, loyal teammates, trusted teammates, and fellow teammates.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;teammates&quot; and &quot;teamates&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;teammates&quot; has two &quot;m&quot;s (like &quot;team&quot; + &quot;mates&quot;), and emphasize that &quot;teamates&quot; is not a real word.</p>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold mb-4 text-orange-900">Team Terminology Summary</h2>
        <p className="text-lg md:text-xl text-orange-800 leading-relaxed">Team Rule: <strong>Teammates</strong> is the correct spelling with double &quot;m&quot;: team-mates. &quot;Teammates&quot; is a compound noun formed from &quot;team&quot; + &quot;mates&quot; meaning members of the same team. The incorrect spelling &quot;teamates&quot; violates basic compound word formation rules and is never acceptable in any context. Always use &quot;teammates&quot; when referring to team members or collaborators.</p>
      </div>
    </div>
  )
} 