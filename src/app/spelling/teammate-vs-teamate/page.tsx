import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Teammate vs Teamate - Correct Spelling & Team Terminology | Word Finder',
  description: 'Learn the correct spelling: &quot;teammate&quot; vs &quot;teamate&quot;. Master team terminology, compound word formation, and avoid common spelling mistakes.',
}

export default function TeammateVsTeamatePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Teammate vs Teamate</h1>
        <p className="text-xl text-gray-600">Team Terminology & Compound Word Guide</p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8 border-l-4 border-green-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Team Terminology & Compound Word Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;teammate&quot; and &quot;teamate&quot;. Learn compound word formation, team terminology, and proper usage patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Teamate</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Teamate&quot; is incorrect. The proper spelling is &quot;teammate&quot; with double &quot;m.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Teammate</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Teammate&quot; is the correct spelling. It means &quot;a member of the same team.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Teammate (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A member of the same team; someone who works or plays together with others toward a common goal.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• My <strong>teammate</strong> scored the winning goal.</li>
                  <li>• She is a great <strong>teammate</strong> to work with.</li>
                  <li>• The <strong>teammate</strong> passed the ball perfectly.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Teamate (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Teamate&quot; is a misspelling and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Teamate&quot; is never used in standard English.</li>
                  <li>• Always use <strong>teammate</strong> when referring to team members.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Teammate:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Team member</li>
                <li>• Colleague</li>
                <li>• Partner</li>
                <li>• Ally</li>
                <li>• Collaborator</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Teamate:</h4>
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
            <li>• <strong>Teammate</strong> is a compound word: team + mate.</li>
            <li>• When combining &quot;team&quot; and &quot;mate,&quot; both &quot;m&quot;s are retained.</li>
            <li>• &quot;Teamate&quot; is a common misspelling that should be avoided.</li>
            <li>• Remember: team + mate = teammate (double &quot;m&quot;).</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;teammate&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Teammate&quot; is a singular noun that refers to one member of a team. It functions as a subject, object, or complement in sentences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;teammate&quot; differ from &quot;colleague&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Teammate&quot; specifically refers to members of the same team, while &quot;colleague&quot; refers to people who work together in the same profession or organization.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;teammate&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Teammate&quot; is a singular noun that can function as a subject, direct object, indirect object, or object of a preposition.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;teammate&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;teammate&quot; is perfectly acceptable in formal writing, business documents, and academic contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the words &quot;team&quot; and &quot;mate&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Team&quot; comes from Old English &quot;team&quot; meaning &quot;group of draft animals,&quot; while &quot;mate&quot; comes from Middle English &quot;mate&quot; meaning &quot;companion.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;teammate&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Teammate&quot; can be used as a subject (&quot;My teammate scored&quot;), object (&quot;I trust my teammate&quot;), or complement (&quot;She is a good teammate&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;teammate&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: good teammate, supportive teammate, loyal teammate, trusted teammate, and fellow teammate.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;teammate&quot; and &quot;teamate&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;teammate&quot; has two &quot;m&quot;s (like &quot;team&quot; + &quot;mate&quot;), and emphasize that &quot;teamate&quot; is not a real word.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Team Terminology Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Team Rule: <strong>Teammate</strong> is the correct spelling with double &quot;m&quot;: team-mate. &quot;Teammate&quot; is a compound noun formed from &quot;team&quot; + &quot;mate&quot; meaning a member of the same team. The incorrect spelling &quot;teamate&quot; violates basic compound word formation rules and is never acceptable in any context. Always use &quot;teammate&quot; when referring to team members or collaborators.</p>
      </div>
    </div>
  )
} 