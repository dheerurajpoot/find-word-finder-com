import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Runner vs Runer - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;runner&quot; and &quot;runer&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RunnerVsRunerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
          Runner vs Runer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 p-8 rounded-2xl mb-10 border border-orange-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Runner&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Runer&quot; is always incorrect - remember to double the &quot;n&quot; when adding &quot;er&quot; to &quot;run&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Runer</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Runner</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a person who runs&quot; or &quot;someone who participates in running.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Run&quot; (Base Verb)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Means &quot;to move quickly&quot;</li>
                <li>• Ends with single &quot;n&quot;</li>
                <li>• Base form of the word</li>
                <li>• Used for present tense</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Runner&quot; (Noun)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;a person who runs&quot;</li>
                <li>• Add &quot;er&quot; to &quot;run&quot;</li>
                <li>• Double the &quot;n&quot;</li>
                <li>• Used for the person</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Spelling Rule</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• Double final consonant</li>
                <li>• Before adding &quot;er&quot;</li>
                <li>• When verb ends in CVC</li>
                <li>• Follow the CVC rule</li>
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
            <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She is a fast <strong>runner</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>runner</strong> won the race.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He is a professional <strong>runner</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>runner</strong> crossed the finish line.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She is a fast <strong>runer</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;runner&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>runer</strong> won the race&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;runner&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He is a professional <strong>runer</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;runner&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>runer</strong> crossed the finish line&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;runner&quot;</p>
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
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">CVC Rule</h3>
              <p className="text-yellow-800">Consonant-Vowel-Consonant = double the last letter</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Think Double</h3>
              <p className="text-orange-800">Run + n + er = Runner (double the n)</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Write It Out</h3>
              <p className="text-amber-800">Practice writing &quot;runner&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Proofread</h3>
              <p className="text-yellow-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Fast runner</strong> - quick athlete</li>
                <li>• <strong>Professional runner</strong> - paid athlete</li>
                <li>• <strong>Marathon runner</strong> - long-distance athlete</li>
                <li>• <strong>Sprint runner</strong> - short-distance athlete</li>
                <li>• <strong>Cross-country runner</strong> - terrain athlete</li>
                <li>• <strong>Track runner</strong> - stadium athlete</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The runner is fast&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Runners compete&quot;</li>
                <li>• <strong>Object:</strong> &quot;I saw the runner&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The runner&apos;s time&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Multiple runners&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Runner-up position&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Why do people drop one &quot;n&quot; in &quot;runner&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from not knowing the CVC (Consonant-Vowel-Consonant) rule. When a verb ends in CVC and you add &quot;er,&quot; you double the final consonant. Many people forget this rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;runner&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Runner&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the CVC rule for spelling?</h3>
              <p className="text-lg text-gray-700">A: The CVC rule states that when a verb ends in Consonant-Vowel-Consonant (like &quot;run&quot;), you double the final consonant before adding &quot;er.&quot; Examples: run → runner, sit → sitter, hop → hopper.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;runner&quot; is spelled the same way across all English-speaking regions. The spelling &quot;runer&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the CVC rule: &quot;Run&quot; ends in CVC (r-u-n), so double the final consonant &quot;n&quot; before adding &quot;er.&quot; Remember: &quot;Run&quot; + &quot;n&quot; + &quot;er&quot; = &quot;Runner.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;runner&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: athlete, sprinter, jogger, racer, marathoner, and when used metaphorically: courier, messenger, and representative.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;runner&quot; be used for non-human things?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Runner&quot; can refer to objects like &quot;runner rug&quot; (a long, narrow rug) or &quot;runner bean&quot; (a climbing plant). It can also refer to mechanical parts that move or slide.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;runner&quot; and &quot;running&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Runner&quot; is a noun referring to a person who runs, while &quot;running&quot; is the present participle/gerund referring to the action of running. Example: &quot;The runner is running.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Do all verbs follow the CVC rule when adding &quot;er&quot;?</h3>
              <p className="text-lg text-gray-700">A: No, only verbs ending in CVC follow this rule. Verbs ending in other patterns (like &quot;play&quot; ending in vowel-consonant) don&apos;t double: play → player, not playyer.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Runner&quot;</strong> doubles the &quot;n&quot; from &quot;run.&quot; 
          <br />
          <strong>&quot;Runer&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RUN + N + ER = RUNNER&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/running-vs-runing" className="hover:text-blue-600 underline">Running vs Runing</a></li>
            <li><a href="/spelling/russian-vs-rusian" className="hover:text-blue-600 underline">Russian vs Rusian</a></li>
            <li><a href="/spelling/sanitary-vs-sanatary" className="hover:text-blue-600 underline">Sanitary vs Sanatary</a></li>
            <li><a href="/spelling/sank-vs-sinked" className="hover:text-blue-600 underline">Sank vs Sinked</a></li>
            <li><a href="/spelling/satellite-vs-sattellite" className="hover:text-blue-600 underline">Satellite vs Sattellite</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/run-vs-runned" className="hover:text-green-600 underline">Run vs Runned</a></li>
            <li><a href="/spelling/ruler-vs-ruller" className="hover:text-green-600 underline">Ruler vs Ruller</a></li>
            <li><a href="/spelling/rugged-vs-ruged" className="hover:text-green-600 underline">Rugged vs Ruged</a></li>
            <li><a href="/spelling/rubbish-vs-rubish" className="hover:text-green-600 underline">Rubbish vs Rubish</a></li>
            <li><a href="/spelling/royalty-vs-royality" className="hover:text-green-600 underline">Royalty vs Royality</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">Learned Grammar</h3>
          <ul className="space-y-3 text-purple-800">
            <li><a href="/confusing-words/affect-vs-effect" className="hover:text-purple-600 underline">Affect vs Effect</a></li>
            <li><a href="/confusing-words/further-vs-farther" className="hover:text-purple-600 underline">Further vs Farther</a></li>
            <li><a href="/confusing-words/who-vs-whom" className="hover:text-purple-600 underline">Who vs Whom</a></li>
            <li><a href="/confusing-words/to-vs-too" className="hover:text-purple-600 underline">To vs Too</a></li>
            <li><a href="/confusing-words/bear-vs-bare" className="hover:text-purple-600 underline">Bear vs Bare</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
