import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Skill Set vs Skillset - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;skill set&quot; and &quot;skillset&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SkillSetVsSkillsetPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Skill Set vs Skillset
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-8 rounded-2xl mb-10 border border-rose-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-rose-600">&quot;Skill Set&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Skillset&quot; is always incorrect - remember the space between &quot;skill&quot; and &quot;set&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Skillset</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-rose-50 to-rose-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-rose-800 mb-4">Skill Set</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-rose-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-rose-700 leading-relaxed">
                This is the proper spelling meaning &quot;a collection of skills and abilities that a person has.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Skill&quot; (First Word)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Means &quot;ability&quot;</li>
                <li>• Old English origin</li>
                <li>• Related to competence</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">&quot;Space&quot; (Separator)</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Must be included</li>
                <li>• Separates words</li>
                <li>• Creates proper meaning</li>
                <li>• Essential for clarity</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Set&quot; (Second Word)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Means &quot;collection&quot;</li>
                <li>• Old English origin</li>
                <li>• Related to grouping</li>
                <li>• Essential for meaning</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">✅ Correct: &quot;Skill Set&quot;</h3>
              <div className="space-y-3">
                <p className="text-rose-800"><strong>•</strong> &quot;She has a diverse skill set.&quot;</p>
                <p className="text-rose-800"><strong>•</strong> &quot;His skill set includes coding.&quot;</p>
                <p className="text-rose-800"><strong>•</strong> &quot;The job requires a specific skill set.&quot;</p>
                <p className="text-rose-800"><strong>•</strong> &quot;Build your skill set.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Skillset&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;She has a diverse skillset&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;His skillset includes coding&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The job requires a specific skillset&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;Build your skillset&quot; ❌</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Two Words</h3>
              <p className="text-yellow-800">&quot;Skill&quot; + &quot;Set&quot; = &quot;Skill Set&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Remember Space</h3>
              <p className="text-rose-800">&quot;Skill Set&quot; = two separate words</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;skill set&quot; to build muscle memory</p>
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

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Why do people misspell &quot;skill set&quot; as &quot;skillset&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error often occurs due to the tendency to compound words in modern language. People might think that since many phrases become single words over time, &quot;skill set&quot; should become &quot;skillset.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;skill set&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Skill set&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English phrase.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;skill set&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Skill&quot; comes from Old English &quot;scle&quot; meaning &quot;knowledge&quot; or &quot;ability,&quot; while &quot;set&quot; comes from Old English &quot;settan&quot; meaning &quot;to place&quot; or &quot;collection.&quot; The phrase &quot;skill set&quot; emerged in the 20th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;skill set&quot; is spelled the same way across all English-speaking regions. The spelling &quot;skillset&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;skill set&quot; as two separate words - &quot;skill&quot; (ability) + &quot;set&quot; (collection). Remember that it&apos;s a collection of skills, not one combined word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;skill set&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: abilities, competencies, expertise, qualifications, capabilities, and proficiencies.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;skill set&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Skill set&quot; can refer to professional abilities, personal talents, technical competencies, creative skills, and any collection of capabilities that a person possesses.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;skill set&quot; and &quot;skills&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both refer to abilities, &quot;skill set&quot; specifically refers to a complete collection or combination of skills that work together, while &quot;skills&quot; is a more general term for individual abilities.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;skill set&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: Primarily yes! &quot;Skill set&quot; is generally associated with competence, capability, and professional development. However, context matters - a skill set can be limited or inappropriate for certain situations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common phrases with &quot;skill set&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;diverse skill set,&quot; &quot;technical skill set,&quot; &quot;expand your skill set,&quot; &quot;match the skill set,&quot; and &quot;develop your skill set.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Skill Set&quot;</strong> is two words. 
          <br />
          <strong>&quot;Skillset&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SKILL + SET = Two Separate Words&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-rose-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
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
