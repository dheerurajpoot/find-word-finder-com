import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Right vs Rigth - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;right&quot; and &quot;rigth&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RightVsRigthPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          Right vs Rigth
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-100 via-violet-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-purple-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Right&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rigth&quot; is always incorrect - remember to use &quot;right&quot; instead!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rigth</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Right</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;correct&quot; or &quot;opposite of left.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Right&quot; (Correct)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Means correct</li>
                <li>• Opposite of left</li>
                <li>• Legal entitlement</li>
                <li>• Standard spelling</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Rigth&quot; (Incorrect)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Missing &quot;h&quot;</li>
                <li>• Not a word</li>
                <li>• Common typo</li>
                <li>• Always wrong</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">Common Mistake</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• People drop the &quot;h&quot;</li>
                <li>• &quot;Rigth&quot; is incomplete</li>
                <li>• Missing letter</li>
                <li>• Always include &quot;h&quot;</li>
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
                <p className="text-lg text-green-800">&quot;That&apos;s the <strong>right</strong> answer.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Turn <strong>right</strong> at the corner.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;You have the <strong>right</strong> to speak.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>right</strong> side of the road.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;That&apos;s the <strong>rigth</strong> answer&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;right&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Turn <strong>rigth</strong> at the corner&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;right&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;You have the <strong>rigth</strong> to speak&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;right&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>rigth</strong> side of the road&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;right&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Complete Word</h3>
              <p className="text-yellow-800">Never drop the &quot;h&quot; sound</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Think Complete</h3>
              <p className="text-purple-800">Right = complete word</p>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Write It Out</h3>
              <p className="text-violet-800">Practice writing &quot;right&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Proofread</h3>
              <p className="text-fuchsia-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Right answer</strong> - correct response</li>
                <li>• <strong>Right direction</strong> - correct way</li>
                <li>• <strong>Right time</strong> - appropriate moment</li>
                <li>• <strong>Right person</strong> - suitable individual</li>
                <li>• <strong>Right now</strong> - immediately</li>
                <li>• <strong>Right away</strong> - without delay</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The right answer&quot;</li>
                <li>• <strong>Adverb:</strong> &quot;Turn right&quot;</li>
                <li>• <strong>Noun:</strong> &quot;Your right&quot;</li>
                <li>• <strong>Interjection:</strong> &quot;Right!&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More right&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most right&quot;</li>
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
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Why do people use &quot;rigth&quot; instead of &quot;right&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from not understanding that &quot;right&quot; contains the &quot;h&quot; consonant sound. People may accidentally drop the &quot;h&quot; when writing quickly, creating the incomplete &quot;rigth&quot; spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;right&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Right&quot; is perfectly acceptable in formal writing, academic papers, legal documents, and professional communication. It&apos;s the standard English spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the consonant sound rule for spelling?</h3>
              <p className="text-lg text-gray-700">A: The word &quot;right&quot; contains the &quot;h&quot; consonant sound, which must be preserved in the spelling. When writing the word, the complete pronunciation including the &quot;h&quot; sound should be maintained.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;right&quot; is spelled the same way across all English-speaking regions. The spelling &quot;rigth&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the complete word: &quot;Right&quot; contains the &quot;h&quot; sound, and this must be preserved in the spelling. Remember: &quot;RIGHT&quot; includes the &quot;H&quot; - don&apos;t drop any letters.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;right&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: correct, proper, accurate, true, appropriate, suitable, fitting, and when used directionally: clockwise, starboard, or dexter.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;right&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Right&quot; is often used metaphorically to describe moral correctness, ethical behavior, or proper conduct. It can describe both literal directions and abstract concepts of correctness.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;right&quot; and &quot;rigth&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Right&quot; is the correct English word meaning &quot;correct&quot; or &quot;opposite of left,&quot; while &quot;rigth&quot; is an incorrect spelling that doesn&apos;t exist in English. The &quot;h&quot; sound is essential.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Do all words with &quot;h&quot; follow this pattern?</h3>
              <p className="text-lg text-gray-700">A: Most words maintain their consonant sounds in spelling. The &quot;h&quot; in &quot;right&quot; is part of the word&apos;s pronunciation and must be preserved. This applies to most English words with similar consonant patterns.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;right&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Right&quot; comes from the Old English word &quot;riht,&quot; which meant &quot;correct&quot; or &quot;straight.&quot; The word has maintained its spelling throughout the evolution of the English language.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Can &quot;right&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: While &quot;right&quot; is primarily an adjective, adverb, and noun, it can be used as a verb meaning &quot;to correct&quot; or &quot;to set upright.&quot; For example: &quot;to right a wrong&quot; or &quot;to right a ship.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Right&quot;</strong> includes the &quot;h&quot; sound.
          <br />
          <strong>&quot;Rigth&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RIGHT&quot; includes the &quot;H&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/rotten-vs-roten" className="hover:text-blue-600 underline">Rotten vs Roten</a></li>
            <li><a href="/spelling/rose-vs-rised" className="hover:text-blue-600 underline">Rose vs Rised</a></li>
            <li><a href="/spelling/roommate-vs-roomate" className="hover:text-blue-600 underline">Roommate vs Roomate</a></li>
            <li><a href="/spelling/romantic-vs-romatic" className="hover:text-blue-600 underline">Romantic vs Romatic</a></li>
            <li><a href="/spelling/roller-vs-rooler" className="hover:text-blue-600 underline">Roller vs Rooler</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/risen-vs-rised" className="hover:text-green-600 underline">Risen vs Rised</a></li>
            <li><a href="/spelling/risen-vs-raisen" className="hover:text-green-600 underline">Risen vs Raisen</a></li>
            <li><a href="/spelling/rigid-vs-ridgid" className="hover:text-green-600 underline">Rigid vs Ridgid</a></li>
            <li><a href="/spelling/ridiculous-vs-ridiculus" className="hover:text-green-600 underline">Ridiculous vs Ridiculus</a></li>
            <li><a href="/spelling/ridiculous-vs-ridiculos" className="hover:text-green-600 underline">Ridiculous vs Ridiculos</a></li>
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
