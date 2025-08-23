import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Run vs Runned - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;run&quot; and &quot;runned&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RunVsRunnedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-red-600 via-crimson-600 to-pink-600 bg-clip-text text-transparent">
          Run vs Runned
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-100 via-crimson-100 to-pink-100 p-8 rounded-2xl mb-10 border border-red-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Run&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Runned&quot; is always incorrect - remember &quot;run&quot; is an irregular verb!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Runned</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Run</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to move quickly&quot; or &quot;to operate.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Run&quot; (Present)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Means &quot;to move quickly&quot;</li>
                <li>• Present tense verb</li>
                <li>• Base form of the word</li>
                <li>• Used for current action</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-crimson-50 border-crimson-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-crimson-900 mb-4">&quot;Ran&quot; (Past)</h3>
              <ul className="text-crimson-800 space-y-2">
                <li>• Means &quot;moved quickly&quot;</li>
                <li>• Past tense of &quot;run&quot;</li>
                <li>• Irregular verb form</li>
                <li>• Used for past action</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Common Mistake</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• People use &quot;runned&quot;</li>
                <li>• &quot;Runned&quot; is never correct</li>
                <li>• Always use &quot;ran&quot;</li>
                <li>• Follow irregular verb rules</li>
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
                <p className="text-lg text-green-800">&quot;I <strong>run</strong> every morning.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>ran</strong> to the store.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The machine <strong>runs</strong> smoothly.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He <strong>ran</strong> for president.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>runned</strong> every morning&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;run&quot; or &quot;ran&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>runned</strong> to the store&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;ran&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The machine <strong>runned</strong> smoothly&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;ran&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>runned</strong> for president&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;ran&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Irregular Verb</h3>
              <p className="text-yellow-800">Run is irregular: run → ran → run</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Think Short</h3>
              <p className="text-red-800">&quot;Ran&quot; is shorter than &quot;runned&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-crimson-50 border-crimson-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-crimson-900 mb-2">Write It Out</h3>
              <p className="text-crimson-800">Practice writing &quot;ran&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Proofread</h3>
              <p className="text-pink-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Run errands</strong> - do tasks</li>
                <li>• <strong>Run smoothly</strong> - work well</li>
                <li>• <strong>Run out of</strong> - deplete supply</li>
                <li>• <strong>Run into</strong> - encounter</li>
                <li>• <strong>Run around</strong> - be busy</li>
                <li>• <strong>Run late</strong> - be behind schedule</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present tense:</strong> &quot;I run&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;I ran&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;I have run&quot;</li>
                <li>• <strong>Present participle:</strong> &quot;I am running&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Running is fun&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To run is healthy&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Why do people use &quot;runned&quot; instead of &quot;ran&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the fact that many English verbs follow the regular pattern of adding &quot;ed&quot; for past tense (like &quot;walk&quot; → &quot;walked&quot;). However, &quot;run&quot; is an irregular verb that doesn&apos;t follow this pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;run&quot; and &quot;ran&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! Both &quot;run&quot; and &quot;ran&quot; are perfectly acceptable in formal writing, academic papers, and professional communication. They are the standard English forms.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-crimson-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-crimson-900 mb-3">Q: What&apos;s the etymology of &quot;run&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Run&quot; comes from Old English &quot;rinnan&quot; meaning &quot;to flow&quot; or &quot;to run.&quot; The word has maintained its irregular conjugation throughout English history, following the pattern: run → ran → run.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;run&quot; and &quot;ran&quot; are the standard forms across all English-speaking regions. The spelling &quot;runned&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;run&quot; as having an irregular past tense. Remember the pattern: &quot;Run&quot; (present) → &quot;Ran&quot; (past) → &quot;Run&quot; (past participle). The word changes form, not just adds &quot;ed.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;run&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: sprint, jog, dash, race, hurry, rush, operate, function, manage, and conduct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;run&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Run&quot; is often used metaphorically to describe operations, such as &quot;The business runs smoothly&quot; or &quot;The clock runs on time.&quot; It can also mean &quot;to manage&quot; or &quot;to operate.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;run&quot; and &quot;ran&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Run&quot; is the present tense (used for current actions), while &quot;ran&quot; is the simple past tense (used for completed actions). Example: &quot;I run every day&quot; vs &quot;I ran yesterday.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Are there other irregular verbs like &quot;run&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many common verbs are irregular, such as: go → went, see → saw, come → came, take → took, give → gave, and write → wrote. It&apos;s important to learn these patterns.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-red-600 to-crimson-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Run&quot;</strong> is an irregular verb. 
          <br />
          <strong>&quot;Runned&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RUN → RAN → RUN&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/runner-vs-runer" className="hover:text-blue-600 underline">Runner vs Runer</a></li>
            <li><a href="/spelling/running-vs-runing" className="hover:text-blue-600 underline">Running vs Runing</a></li>
            <li><a href="/spelling/russian-vs-rusian" className="hover:text-blue-600 underline">Russian vs Rusian</a></li>
            <li><a href="/spelling/sanitary-vs-sanatary" className="hover:text-blue-600 underline">Sanitary vs Sanatary</a></li>
            <li><a href="/spelling/sank-vs-sinked" className="hover:text-blue-600 underline">Sank vs Sinked</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/ruler-vs-ruller" className="hover:text-green-600 underline">Ruler vs Ruller</a></li>
            <li><a href="/spelling/rugged-vs-ruged" className="hover:text-green-600 underline">Rugged vs Ruged</a></li>
            <li><a href="/spelling/rubbish-vs-rubish" className="hover:text-green-600 underline">Rubbish vs Rubish</a></li>
            <li><a href="/spelling/royalty-vs-royality" className="hover:text-green-600 underline">Royalty vs Royality</a></li>
            <li><a href="/spelling/royalties-vs-royaltys" className="hover:text-green-600 underline">Royalties vs Royaltys</a></li>
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
