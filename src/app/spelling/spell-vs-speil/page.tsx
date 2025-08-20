import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spell vs Speil - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spell&quot; and &quot;speil&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpellVsSpeilPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Spell vs Speil
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 p-8 rounded-2xl mb-10 border border-slate-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🔮</span>
            <span className="text-2xl font-bold text-slate-600">&quot;Spell&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Speil&quot; is always incorrect - remember that &quot;spell&quot; has an &quot;l&quot; at the end!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Speil</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Spell</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-slate-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                This is the proper spelling meaning &quot;to write or name the letters of a word.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">&quot;Spell&quot; (Verb/Noun)</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• Has &quot;l&quot; at end</li>
                <li>• Means &quot;write letters&quot;</li>
                <li>• Can be verb or noun</li>
                <li>• Describes language</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Spelling Rule</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• &quot;Spell&quot; not &quot;Speil&quot;</li>
                <li>• &quot;l&quot; makes &quot;el&quot; sound</li>
                <li>• Similar to &quot;tell&quot;</li>
                <li>• Similar to &quot;well&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Common Confusion</h3>
              <ul className="text-zinc-800 space-y-2">
                <li>• People forget &quot;l&quot;</li>
                <li>• Similar to &quot;speil&quot;</li>
                <li>• Pronunciation can be unclear</li>
                <li>• Need to remember &quot;l&quot;</li>
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
            <h3 className="text-2xl font-bold text-slate-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;Can you <strong>spell</strong> your name?&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;How do you <strong>spell</strong> that word?&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;She can <strong>spell</strong> difficult words.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;The <strong>spell</strong> was broken.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Can you <strong>speil</strong> your name?&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spell&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;How do you <strong>speil</strong> that word?&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spell&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She can <strong>speil</strong> difficult words.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spell&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>speil</strong> was broken.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spell&quot;</p>
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
              <div className="text-4xl mb-3">🔮</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">L Rule</h3>
              <p className="text-yellow-800">&quot;Spell&quot; has &quot;l&quot; like &quot;tell&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Think Magic</h3>
              <p className="text-slate-800">Spell = magic spell = has &quot;l&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Write It Out</h3>
              <p className="text-gray-800">Practice writing &quot;spell&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Proofread</h3>
              <p className="text-zinc-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Spell out</strong> - explain clearly</li>
                <li>• <strong>Spell check</strong> - verify spelling</li>
                <li>• <strong>Spell correctly</strong> - write properly</li>
                <li>• <strong>Spell backwards</strong> - write in reverse</li>
                <li>• <strong>Spell phonetically</strong> - write by sound</li>
                <li>• <strong>Spell alphabetically</strong> - write by letters</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present tense:</strong> &quot;I spell the word&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;I spelled the word&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;I have spelled it&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Spelling is important&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To spell correctly&quot;</li>
                <li>• <strong>Noun:</strong> &quot;The magic spell&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Why do people misspell &quot;spell&quot; as &quot;speil&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from forgetting the &quot;l&quot; at the end. Some people may also be influenced by unclear pronunciation or the similarity to other words. The &quot;l&quot; is essential for the correct pronunciation and meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: What&apos;s the difference between &quot;spell&quot; and &quot;speil&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spell&quot; is a correct English word meaning &quot;to write or name the letters of a word&quot; or &quot;a magical incantation.&quot; &quot;Speil&quot; is not a word in English and is always a spelling error.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: Are there other words that end with &quot;ell&quot; like &quot;spell&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many English words end with &quot;ell&quot;: tell, well, sell, bell, fell, cell, and shell are just a few examples. The &quot;l&quot; is essential for the correct pronunciation and meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;spell&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spell&quot; is a standard English word that&apos;s perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s commonly used in various contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;spell&quot; and &quot;write&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both involve putting words on paper, &quot;spell&quot; specifically refers to writing or naming the individual letters of a word, while &quot;write&quot; is more general and can refer to composing sentences, paragraphs, or entire documents.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;spell&quot; as having an &quot;l&quot; at the end, just like &quot;tell&quot; or &quot;well.&quot; The &quot;l&quot; is essential for the correct pronunciation and meaning. Remember: &quot;SPELL&quot; not &quot;SPEIL.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;spell&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: write, pronounce, articulate, enunciate, and vocalize. Each has slightly different nuances and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is &quot;speil&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;speil&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;spell&quot; with the &quot;l&quot; at the end.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of &quot;spell&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spell&quot; comes from the Old English word &quot;spellian&quot; meaning &quot;to tell&quot; or &quot;to relate.&quot; It evolved to mean &quot;to read letter by letter&quot; and then to its current meaning of writing words correctly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Can &quot;spell&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spell&quot; is often used metaphorically to mean &quot;explain clearly&quot; or &quot;make something obvious.&quot; For example, &quot;Let me spell it out for you&quot; means &quot;Let me explain this clearly,&quot; and &quot;spell disaster&quot; means &quot;indicate trouble ahead.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Spell&quot;</strong> has an &quot;l&quot; at the end and means &quot;to write or name the letters of a word.&quot; 
          <br />
          <strong>&quot;Speil&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPELL = magic spell = has L at the end&quot;</p>
        </div>
      </div>
    </div>
  )
}
