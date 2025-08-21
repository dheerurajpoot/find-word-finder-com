import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Loose vs Lose - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;loose&quot; and &quot;lose&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function LooseVsLosePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Loose vs Lose
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Two Commonly Confused Words
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 p-8 rounded-2xl mb-10 border border-emerald-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-2xl mr-3">🎯</span>
              <span className="text-2xl font-bold text-emerald-600">&quot;Loose&quot; = Not Tight</span>
            </div>
            <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-2xl mr-3">🎯</span>
              <span className="text-2xl font-bold text-teal-600">&quot;Lose&quot; = Misplace/Fail</span>
            </div>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Both are correct but have completely different meanings - don&apos;t confuse them!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-emerald-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔓</span>
              </div>
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">Loose</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-emerald-700 font-semibold">✅ CORRECT (Adjective)</p>
              </div>
              <p className="text-lg text-emerald-700 leading-relaxed">
                Meaning: &quot;not tight&quot; or &quot;free from restraint&quot;
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-teal-50 to-teal-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❌</span>
              </div>
              <h3 className="text-3xl font-bold text-teal-800 mb-4">Lose</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-teal-700 font-semibold">✅ CORRECT (Verb)</p>
              </div>
              <p className="text-lg text-teal-700 leading-relaxed">
                Meaning: &quot;to misplace&quot; or &quot;to fail to win&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Loose&quot; (Adjective)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Describes something</li>
                <li>• Means &quot;not tight&quot;</li>
                <li>• Can mean &quot;free&quot;</li>
                <li>• Opposite of &quot;tight&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Lose&quot; (Verb)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Action word</li>
                <li>• Means &quot;misplace&quot;</li>
                <li>• Means &quot;fail to win&quot;</li>
                <li>• Opposite of &quot;find&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Key Distinction</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Different parts of speech</li>
                <li>• Completely different meanings</li>
                <li>• Cannot be used interchangeably</li>
                <li>• Both are correct words</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">✅ Correct: &quot;Loose&quot;</h3>
              <div className="space-y-3">
                <p className="text-emerald-800"><strong>•</strong> &quot;The screw is loose.&quot;</p>
                <p className="text-emerald-800"><strong>•</strong> &quot;She wore loose clothing.&quot;</p>
                <p className="text-emerald-800"><strong>•</strong> &quot;The dog broke loose.&quot;</p>
                <p className="text-emerald-800"><strong>•</strong> &quot;The pages were loose.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">✅ Correct: &quot;Lose&quot;</h3>
              <div className="space-y-3">
                <p className="text-teal-800"><strong>•</strong> &quot;Don&apos;t lose your keys.&quot;</p>
                <p className="text-teal-800"><strong>•</strong> &quot;The team will lose the game.&quot;</p>
                <p className="text-teal-800"><strong>•</strong> &quot;I don&apos;t want to lose you.&quot;</p>
                <p className="text-teal-800"><strong>•</strong> &quot;She might lose her job.&quot;</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Common Mistakes to Avoid</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect Usage</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;I will loose the game&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;Don&apos;t loose your keys&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The lose screw fell out&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;She wore lose clothing&quot; ❌</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">💡 Remember This Rule</h3>
              <div className="space-y-3">
                <p className="text-orange-800"><strong>•</strong> &quot;Loose&quot; = not tight (adjective)</p>
                <p className="text-orange-800"><strong>•</strong> &quot;Lose&quot; = misplace/fail (verb)</p>
                <p className="text-orange-800"><strong>•</strong> Think: &quot;Loose&quot; has an extra &quot;o&quot;</p>
                <p className="text-orange-800"><strong>•</strong> Think: &quot;Lose&quot; is shorter</p>
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
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Extra &quot;O&quot;</h3>
              <p className="text-yellow-800">&quot;Loose&quot; has an extra &quot;o&quot; like &quot;too&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Think &quot;Not Tight&quot;</h3>
              <p className="text-emerald-800">&quot;Loose&quot; = &quot;not tight&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Shorter Word</h3>
              <p className="text-teal-800">&quot;Lose&quot; is shorter than &quot;loose&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Context Check</h3>
              <p className="text-cyan-800">Check if you need an adjective or verb</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people confuse &quot;loose&quot; and &quot;lose&quot;?</h3>
              <p className="text-lg text-gray-700">A: People often confuse these words because they sound similar and both contain the letters &quot;l-o-s-e.&quot; The main difference is that &quot;loose&quot; has an extra &quot;o&quot; and is an adjective, while &quot;lose&quot; is a verb with a different meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;loose&quot; ever be a verb?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Loose&quot; can be a verb meaning &quot;to release&quot; or &quot;to set free,&quot; as in &quot;The hunter loosed an arrow.&quot; However, this usage is less common and more formal than the adjective form.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the etymology of these words?</h3>
              <p className="text-lg text-gray-700">A: &quot;Loose&quot; comes from Old English &quot;lēas&quot; meaning &quot;devoid of&quot; or &quot;free from.&quot; &quot;Lose&quot; comes from Old English &quot;losian&quot; meaning &quot;to perish&quot; or &quot;to destroy.&quot; They have different origins despite similar spellings.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, both &quot;loose&quot; and &quot;lose&quot; are spelled and used the same way across all English-speaking regions. The confusion is universal among English speakers.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: How can I remember which is which?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;loose&quot; as having an extra &quot;o&quot; like &quot;too&quot; or &quot;goo.&quot; Remember that &quot;loose&quot; means &quot;not tight&quot; (adjective), while &quot;lose&quot; means &quot;to misplace&quot; or &quot;to fail to win&quot; (verb).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What are some synonyms for each word?</h3>
              <p className="text-lg text-gray-700">A: For &quot;loose&quot;: slack, baggy, free, unfastened. For &quot;lose&quot;: misplace, fail, forfeit, surrender, drop.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can you give more examples of each?</h3>
              <p className="text-lg text-gray-700">A: &quot;Loose&quot;: loose change, loose ends, loose lips, loose cannon. &quot;Lose&quot;: lose weight, lose time, lose face, lose heart, lose track.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What&apos;s the difference in pronunciation?</h3>
              <p className="text-lg text-gray-700">A: &quot;Loose&quot; rhymes with &quot;goose&quot; and has a longer &quot;oo&quot; sound. &quot;Lose&quot; rhymes with &quot;choose&quot; and has a shorter &quot;oo&quot; sound. The extra &quot;o&quot; in &quot;loose&quot; makes the vowel sound longer.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Yes! Related to &quot;loose&quot;: loosen, loosely, looseness. Related to &quot;lose&quot;: loser, loss, lost, losing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the most common mistake?</h3>
              <p className="text-lg text-gray-700">A: The most common mistake is using &quot;loose&quot; when you mean &quot;lose,&quot; especially in phrases like &quot;I will loose the game&quot; instead of &quot;I will lose the game.&quot; Remember: &quot;lose&quot; is the verb for failing or misplacing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How do I proofread for these errors?</h3>
              <p className="text-lg text-gray-700">A: When proofreading, ask yourself: &quot;Am I describing something (adjective) or talking about an action (verb)?&quot; If describing, use &quot;loose.&quot; If talking about an action, use &quot;lose.&quot; Also, remember that &quot;loose&quot; has an extra &quot;o.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s a good way to practice?</h3>
              <p className="text-lg text-gray-700">A: Write sentences using both words correctly. For example: &quot;The loose screw caused me to lose the game.&quot; Practice helps build muscle memory and understanding of the different contexts.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          <strong>&quot;Loose&quot;</strong> = not tight (adjective) - has an extra &quot;o&quot;
          <br />
          <strong>&quot;Lose&quot;</strong> = misplace/fail (verb) - shorter word
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;LOOSE = extra O, LOSE = shorter&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
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
