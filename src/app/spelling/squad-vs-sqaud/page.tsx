import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Squad vs Sqaud - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;squad&quot; and &quot;sqaud&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SquadVsSqaudPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
          Squad vs Sqaud
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-violet-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">👥</span>
            <span className="text-2xl font-bold text-violet-600">&quot;Squad&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sqaud&quot; is always incorrect - remember the &quot;u&quot; in &quot;squad&quot;!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✗</span>
              </div>
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sqaud</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-violet-50 to-violet-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-violet-800 mb-4">Squad</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-violet-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-violet-700 leading-relaxed">
                This is the proper spelling meaning &quot;a small group of people.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Sq&quot; (Root)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Means &quot;group&quot; or &quot;team&quot;</li>
                <li>• Related to people</li>
                <li>• Latin origin</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;U&quot; (Vowel)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Important vowel sound</li>
                <li>• Must be included</li>
                <li>• Part of root word</li>
                <li>• Creates proper sound</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">&quot;Ad&quot; (Ending)</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• Forms the ending sound</li>
                <li>• Means &quot;group&quot;</li>
                <li>• Common English pattern</li>
                <li>• Creates &quot;squad&quot;</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Real-World Examples</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-violet-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;The police <strong>squad</strong> arrived quickly.&quot;</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;Our <strong>squad</strong> won the game.&quot;</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;The fire <strong>squad</strong> saved the building.&quot;</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;He joined the elite <strong>squad</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The police <strong>sqaud</strong> arrived quickly&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;squad&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Our <strong>sqaud</strong> won the game&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;squad&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The fire <strong>sqaud</strong> saved the building&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;squad&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He joined the elite <strong>sqaud</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;squad&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Group</h3>
              <p className="text-yellow-800">&quot;Squad&quot; means a group of people</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">U is Important</h3>
              <p className="text-blue-800">Remember the &quot;u&quot; in &quot;squad&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;squad&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Proofread</h3>
              <p className="text-purple-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Advanced Usage Patterns</h2>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Phrases</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Police squad</strong> - law enforcement team</li>
                <li>• <strong>Fire squad</strong> - firefighting team</li>
                <li>• <strong>Elite squad</strong> - special team</li>
                <li>• <strong>SWAT squad</strong> - tactical team</li>
                <li>• <strong>Bomb squad</strong> - explosive team</li>
                <li>• <strong>Rescue squad</strong> - emergency team</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;the squad&quot;</li>
                <li>• <strong>Subject:</strong> &quot;The squad arrived&quot;</li>
                <li>• <strong>Object:</strong> &quot;I joined the squad&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;squad&apos;s leader&quot;</li>
                <li>• <strong>Plural:</strong> &quot;multiple squads&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;squad member&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people confuse &quot;squad&quot; and &quot;sqaud&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similarity to other words like &quot;quad&quot; or &quot;quad.&quot; However, &quot;squad&quot; follows the pattern of &quot;sq&quot; + &quot;u&quot; + &quot;ad&quot; with a &quot;u&quot; sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;squad&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Squad&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English noun.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: What&apos;s the etymology of &quot;squad&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Squad&quot; comes from Latin &quot;exquadra&quot; meaning &quot;square&quot; + the English suffix &quot;-ad.&quot; It was first used in English in the 16th century to describe a military unit.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;squad&quot; is standard across all English-speaking regions. However, some regions might use alternative terms like &quot;team&quot; or &quot;unit.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like breaking down the word: &quot;sq&quot; + &quot;u&quot; + &quot;ad.&quot; Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;squad&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: team, unit, group, crew, force, and detachment.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;squad&quot; be used in other contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! While often describing military or police groups, &quot;squad&quot; can be used in various contexts like sports (basketball squad), work (marketing squad), and social groups (friend squad).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;squad&quot; and &quot;team&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Squad&quot; refers to a small, organized group often with a specific purpose, while &quot;team&quot; refers to a group working together. &quot;Squad&quot; has a more formal, organized connotation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;squad&quot; always about military or police?</h3>
              <p className="text-lg text-gray-700">A: No! While often describing military or police groups, &quot;squad&quot; can also describe various groups. For example, &quot;basketball squad&quot; means a sports team, and &quot;friend squad&quot; means a close group of friends.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common phrases with &quot;squad&quot;?</h3>
              <p className="text-lg text-gray-700">A: Popular phrases include: &quot;police squad,&quot; &quot;fire squad,&quot; &quot;elite squad,&quot; &quot;SWAT squad,&quot; &quot;bomb squad,&quot; and &quot;rescue squad.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Squad&quot;</strong> is the correct spelling meaning &quot;a small group of people.&quot; 
          <br />
          <strong>&quot;Sqaud&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SQ + U + AD = SQUAD&quot;</p>
        </div>
      </div>
    </div>
  )
}
