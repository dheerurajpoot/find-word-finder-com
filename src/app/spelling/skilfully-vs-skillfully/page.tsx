import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Skilfully vs Skillfully - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;skilfully&quot; and &quot;skillfully&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SkilfullyVsSkillfullyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Skilfully vs Skillfully
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between British and American English
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-lime-100 via-green-100 to-emerald-100 p-8 rounded-2xl mb-10 border border-lime-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-lime-600">Both are Correct!</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Skilfully&quot; is British English, &quot;skillfully&quot; is American English - both are acceptable!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🇬🇧</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Skilfully</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-blue-700 font-semibold">✅ BRITISH ENGLISH</p>
              </div>
              <p className="text-lg text-blue-700 leading-relaxed">
                This is the British English spelling, commonly used in the UK, Australia, and other Commonwealth countries.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-lime-50 to-lime-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🇺🇸</span>
              </div>
              <h3 className="text-3xl font-bold text-lime-800 mb-4">Skillfully</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-lime-700 font-semibold">✅ AMERICAN ENGLISH</p>
              </div>
              <p className="text-lg text-lime-700 leading-relaxed">
                This is the American English spelling, commonly used in the US and Canada.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;Skill&quot; (Base Word)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Means &quot;ability&quot;</li>
                <li>• Old English origin</li>
                <li>• Related to competence</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Ful&quot; (Suffix)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Means &quot;full of&quot;</li>
                <li>• Creates adjective</li>
                <li>• Changes meaning</li>
                <li>• Essential for meaning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Ly&quot; (Adverb)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Creates adverb</li>
                <li>• Modifies verbs</li>
                <li>• Describes action</li>
                <li>• Essential for grammar</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">🇬🇧 British: &quot;Skilfully&quot;</h3>
              <div className="space-y-3">
                <p className="text-blue-800"><strong>•</strong> &quot;He skilfully navigated the maze.&quot;</p>
                <p className="text-blue-800"><strong>•</strong> &quot;She skilfully crafted the sculpture.&quot;</p>
                <p className="text-blue-800"><strong>•</strong> &quot;The chef skilfully prepared the meal.&quot;</p>
                <p className="text-blue-800"><strong>•</strong> &quot;They skilfully solved the problem.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">🇺🇸 American: &quot;Skillfully&quot;</h3>
              <div className="space-y-3">
                <p className="text-lime-800"><strong>•</strong> &quot;He skillfully navigated the maze.&quot;</p>
                <p className="text-lime-800"><strong>•</strong> &quot;She skillfully crafted the sculpture.&quot;</p>
                <p className="text-lime-800"><strong>•</strong> &quot;The chef skillfully prepared the meal.&quot;</p>
                <p className="text-lime-800"><strong>•</strong> &quot;They skillfully solved the problem.&quot;</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🇬🇧</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">British: One L</h3>
              <p className="text-yellow-800">&quot;Skilfully&quot; = British spelling with one &quot;l&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-lime-50 border-lime-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="text-xl font-bold text-lime-900 mb-2">American: Two Ls</h3>
              <p className="text-lime-800">&quot;Skillfully&quot; = American spelling with two &quot;l&quot;s</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice both spellings to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Check Audience</h3>
              <p className="text-emerald-800">Choose spelling based on your target audience</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Which spelling should I use?</h3>
              <p className="text-lg text-gray-700">A: Use &quot;skilfully&quot; for British English audiences and &quot;skillfully&quot; for American English audiences. If you&apos;re unsure, &quot;skillfully&quot; is more widely recognized internationally.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Are both spellings accepted in all contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! Both spellings are grammatically correct and widely accepted. The choice depends on your target audience and the style guide you&apos;re following.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the etymology of these words?</h3>
              <p className="text-lg text-gray-700">A: Both come from the Old English word &quot;scle&quot; meaning &quot;knowledge&quot; or &quot;ability.&quot; The difference in spelling reflects the evolution of English in different regions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Do other words follow this pattern?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many words follow this pattern: &quot;colour/color,&quot; &quot;favour/favor,&quot; &quot;humour/humor,&quot; and &quot;labour/labor&quot; are examples of British vs American spelling differences.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember which is which?</h3>
              <p className="text-lg text-gray-700">A: Think: British English often uses fewer letters (one &quot;l&quot; in &quot;skilfully&quot;), while American English tends to be more phonetic (two &quot;l&quot;s in &quot;skillfully&quot;).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;skilfully/skillfully&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: expertly, adeptly, proficiently, masterfully, competently, and deftly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can I mix spellings in the same document?</h3>
              <p className="text-lg text-gray-700">A: No! Consistency is key. Choose one spelling style and stick to it throughout your entire document to maintain professionalism and clarity.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Which spelling is more common globally?</h3>
              <p className="text-lg text-gray-700">A: &quot;Skillfully&quot; (American spelling) is more common globally due to the widespread influence of American media, technology, and business. However, both are equally correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What about other forms of the word?</h3>
              <p className="text-lg text-gray-700">A: The same pattern applies: &quot;skilful/skillful&quot; (adjective) and &quot;skill&quot; (noun) are spelled the same way in both variants, but the adverb forms differ.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Are there any style guides that prefer one over the other?</h3>
              <p className="text-lg text-gray-700">A: Yes! The Oxford Style Guide prefers British spelling (&quot;skilfully&quot;), while the Chicago Manual of Style prefers American spelling (&quot;skillfully&quot;). Always check your required style guide.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-emerald-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Both spellings are correct! 
          <br />
          <strong>&quot;Skilfully&quot;</strong> (British) vs <strong>&quot;Skillfully&quot;</strong> (American)
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Choose based on your audience - British or American English</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-lime-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:from-lime-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
            Browse All Spelling Guides
          </a>
          <a href="/word-finders" className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
            Explore Word Tools
          </a>
        </div>
      </div>
    </div>
  )
}
